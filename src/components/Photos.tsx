import { Camera, Upload } from 'lucide-react'
import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import { wedding } from '../data/wedding'
import { MAX_UPLOAD_BYTES, uploadToDrive } from '../lib/upload'
import { Section } from './Section'

type Status = 'queued' | 'uploading' | 'done' | 'error'

interface Item {
  id: string
  file: File
  progress: number
  status: Status
}

const statusLabel = ({ status, progress }: Item) =>
  ({
    queued: 'Waiting',
    uploading: `${Math.round(progress * 100)}%`,
    done: 'Sent ♡',
    error: 'Failed',
  })[status]

function Uploader({ endpoint }: { endpoint: string }) {
  const [guest, setGuest] = useState('')
  const [items, setItems] = useState<Item[]>([])
  const [skipped, setSkipped] = useState(0)
  const picker = useRef<HTMLInputElement>(null)

  const busy = items.some((i) => i.status === 'queued' || i.status === 'uploading')
  const sent = items.filter((i) => i.status === 'done').length

  // Closing the tab mid-upload loses the file, so ask first.
  useEffect(() => {
    if (!busy) return
    const warn = (e: BeforeUnloadEvent) => e.preventDefault()
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [busy])

  const update = (id: string, patch: Partial<Item>) =>
    setItems((list) => list.map((i) => (i.id === id ? { ...i, ...patch } : i)))

  async function run(queue: Item[]) {
    for (const item of queue) {
      update(item.id, { status: 'uploading', progress: 0 })
      try {
        await uploadToDrive(endpoint, item.file, guest.trim(), (progress) => update(item.id, { progress }))
        update(item.id, { status: 'done', progress: 1 })
      } catch {
        update(item.id, { status: 'error' })
      }
    }
  }

  function pick(e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    e.target.value = ''
    const ok = files.filter((f) => f.size > 0 && f.size <= MAX_UPLOAD_BYTES)
    setSkipped(files.length - ok.length)
    const queue = ok.map((file) => ({ id: crypto.randomUUID(), file, progress: 0, status: 'queued' as const }))
    setItems((list) => [...list, ...queue])
    run(queue)
  }

  return (
    <div className="uploader">
      <input
        className="field"
        type="text"
        placeholder="Your name (optional)"
        autoComplete="name"
        value={guest}
        onChange={(e) => setGuest(e.target.value)}
      />
      <button type="button" className="btn" onClick={() => picker.current?.click()}>
        <Upload size={15} /> Upload photos &amp; videos
      </button>
      <input ref={picker} type="file" accept="image/*,video/*" multiple hidden onChange={pick} />

      {skipped > 0 && <p className="muted">{skipped} file(s) skipped: files must be under 1 GB.</p>}

      {items.length > 0 && (
        <>
          <p className="muted" aria-live="polite">
            {busy ? `Sending ${sent} of ${items.length}. Please keep this page open.` : `${sent} of ${items.length} sent. Thank you!`}
          </p>
          <ul className="uploads">
            {items.map((item) => (
              <li key={item.id} className={`upload ${item.status}`}>
                <span className="upload-name">{item.file.name}</span>
                {item.status === 'error' ? (
                  <button type="button" className="upload-retry tag" onClick={() => run([item])}>
                    Retry
                  </button>
                ) : (
                  <span className="tag">{statusLabel(item)}</span>
                )}
                <span className="upload-bar" aria-hidden="true">
                  <span style={{ width: `${item.progress * 100}%` }} />
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export function Photos() {
  return (
    <Section id="photos" icon={Camera} title="Share your moments">
      <p className="lead">Got a great photo or video? We'd love to see it.</p>
      {wedding.uploadEndpoint && <Uploader endpoint={wedding.uploadEndpoint} />}
      {wedding.hashtag && <p className="muted">Tag your posts {wedding.hashtag}</p>}
    </Section>
  )
}
