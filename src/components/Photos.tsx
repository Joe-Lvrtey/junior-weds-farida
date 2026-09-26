import { Camera } from 'lucide-react'
import { wedding } from '../data/wedding'
import { external } from '../lib/links'
import { Section } from './Section'

export function Photos() {
  return (
    <Section id="photos" icon={Camera} title="Share your moments">
      <p className="lead">Got a great shot? We'd love to see it.</p>
      {wedding.photoUploadUrl && (
        <a className="btn" href={wedding.photoUploadUrl} {...external}>
          <Camera size={15} /> Upload a photo
        </a>
      )}
      {wedding.hashtag && <p className="muted">Tag your posts {wedding.hashtag}</p>}
    </Section>
  )
}
