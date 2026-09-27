/**
 * Guest photo & video uploads → a Google Drive folder.
 *
 * The site sends each file in 8 MB pieces; this script forwards them into a
 * Drive resumable upload, so large phone videos work.
 *
 * Setup (once, signed in as the Google account that should own the files):
 *  1. In Google Drive, create a folder (e.g. "Waleema — Guest Photos") and copy
 *     its ID from the URL: drive.google.com/drive/folders/<THIS PART>
 *  2. Go to script.google.com → New project, paste this whole file into Code.gs,
 *     and put the folder ID in FOLDER_ID below.
 *  3. Run `authorize` once from the editor (choose it in the function dropdown,
 *     click Run) and approve the permissions.
 *  4. Deploy → New deployment → type "Web app".
 *       Execute as: Me
 *       Who has access: Anyone
 *     Copy the Web app URL (ends in /exec) into `uploadEndpoint` in
 *     src/data/wedding.ts, then rebuild the site.
 *
 * If you edit this script later, use Deploy → Manage deployments → Edit →
 * Version: New version, so the /exec URL stays the same.
 */

const FOLDER_ID = 'PASTE_DRIVE_FOLDER_ID_HERE'

const DRIVE_UPLOAD = 'https://www.googleapis.com/upload/drive/v3/files'

function doPost(e) {
  try {
    const req = JSON.parse(e.postData.contents)
    if (req.action === 'start') return json(start(req))
    if (req.action === 'chunk') return json(chunk(req))
    throw new Error('Unknown action')
  } catch (err) {
    return json({ error: String(err && err.message ? err.message : err) })
  }
}

function doGet() {
  return json({ ok: true })
}

/** Opens a resumable upload in the folder and returns its session URL. */
function start({ name, type, size, guest }) {
  const folder = DriveApp.getFolderById(FOLDER_ID)
  const who = String(guest || '').trim().slice(0, 60)
  const fileName = (who ? who + ' — ' : '') + String(name || 'upload').slice(0, 150)

  const res = UrlFetchApp.fetch(DRIVE_UPLOAD + '?uploadType=resumable&supportsAllDrives=true', {
    method: 'post',
    contentType: 'application/json; charset=UTF-8',
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken(),
      'X-Upload-Content-Type': type || 'application/octet-stream',
      'X-Upload-Content-Length': String(size),
    },
    payload: JSON.stringify({
      name: fileName,
      parents: [folder.getId()],
      description: 'Uploaded by ' + (who || 'a guest'),
    }),
    muteHttpExceptions: true,
  })

  const headers = res.getHeaders()
  const session = headers.Location || headers.location
  if (res.getResponseCode() !== 200 || !session) {
    throw new Error('Could not start upload (' + res.getResponseCode() + ')')
  }
  return { session }
}

/** Forwards one piece of the file to the Drive upload session. */
function chunk({ session, type, start, end, size, data }) {
  if (String(session).indexOf(DRIVE_UPLOAD + '?') !== 0) throw new Error('Bad session')

  const res = UrlFetchApp.fetch(session, {
    method: 'put',
    contentType: type || 'application/octet-stream',
    headers: { 'Content-Range': 'bytes ' + start + '-' + (end - 1) + '/' + size },
    payload: Utilities.base64Decode(data),
    muteHttpExceptions: true,
  })

  const code = res.getResponseCode()
  if (code === 308) return { done: false }
  if (code === 200 || code === 201) return { done: true }
  throw new Error('Drive rejected the upload (' + code + ')')
}

/** Run once from the editor to grant Drive + external request permissions. */
function authorize() {
  DriveApp.getFolderById(FOLDER_ID).getName()
  UrlFetchApp.fetch('https://www.googleapis.com/discovery/v1/apis/drive/v3/rest')
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON)
}
