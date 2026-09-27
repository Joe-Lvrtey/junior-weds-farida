// Uploads a file to Google Drive through the Apps Script in google-apps-script/Code.gs.
// Files go up in pieces so large videos don't hit Apps Script's request size limit.

/** Must be a multiple of 256 KB (Drive resumable upload rule). */
const CHUNK = 8 * 1024 * 1024
const ATTEMPTS = 3

export const MAX_UPLOAD_BYTES = 1024 * 1024 * 1024

// A plain-string body is sent as text/plain, which avoids a CORS preflight
// that Apps Script can't answer.
async function call<T>(endpoint: string, body: object): Promise<T> {
  const res = await fetch(endpoint, { method: 'POST', body: JSON.stringify(body) })
  const data = await res.json()
  if (!res.ok || data.error) throw new Error(data.error ?? `Upload failed (${res.status})`)
  return data
}

async function withRetry<T>(fn: () => Promise<T>): Promise<T> {
  for (let attempt = 1; ; attempt++) {
    try {
      return await fn()
    } catch (err) {
      if (attempt >= ATTEMPTS) throw err
      await new Promise((r) => setTimeout(r, 1000 * attempt))
    }
  }
}

const toBase64 = (blob: Blob) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result).split(',', 2)[1] ?? '')
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(blob)
  })

export async function uploadToDrive(
  endpoint: string,
  file: File,
  guest: string,
  onProgress: (fraction: number) => void,
) {
  const type = file.type || 'application/octet-stream'
  const { session } = await withRetry(() =>
    call<{ session: string }>(endpoint, { action: 'start', name: file.name, type, size: file.size, guest }),
  )

  for (let start = 0; start < file.size; start += CHUNK) {
    const end = Math.min(start + CHUNK, file.size)
    const data = await toBase64(file.slice(start, end))
    await withRetry(() => call(endpoint, { action: 'chunk', session, type, start, end, size: file.size, data }))
    onProgress(end / file.size)
  }
}
