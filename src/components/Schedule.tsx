import { Clock } from 'lucide-react'
import { wedding } from '../data/wedding'
import { Section } from './Section'

export function Schedule() {
  return (
    <Section id="schedule" icon={Clock} title="The big day">
      <ol className="timeline">
        {wedding.schedule.map(({ time, title }) => (
          <li key={time + title}>
            <span className="time">{time}</span>
            <span className="dot" aria-hidden="true" />
            <span className="what">{title}</span>
          </li>
        ))}
      </ol>
    </Section>
  )
}
