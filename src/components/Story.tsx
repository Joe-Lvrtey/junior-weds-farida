import { Heart } from 'lucide-react'
import { wedding } from '../data/wedding'
import { Section } from './Section'

export function Story() {
  return (
    <Section id="story" icon={Heart} title="Our story">
      <ol className="story">
        {wedding.story.map(({ title, text }) => (
          <li key={title}>
            <h3 className="script">{title}</h3>
            <p className="muted">{text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
