import { CalendarCheck, Gift, Phone } from 'lucide-react'
import { wedding } from '../data/wedding'
import { tel } from '../lib/links'
import type { Gifts } from '../types'
import { Section } from './Section'

function GiftCard({ note, options }: Gifts) {
  return (
    <div className="card gifts">
      <Gift size={20} strokeWidth={1.25} aria-hidden="true" />
      <p className="tag">Gifts</p>
      <p className="muted">{note}</p>
      {options.map(({ label, detail }) => (
        <p key={label}>
          <span className="tag">{label}</span>
          <br />
          <span className="serif">{detail}</span>
        </p>
      ))}
    </div>
  )
}

export function Rsvp() {
  const { rsvp, gifts, contacts } = wedding
  const rsvpContacts = contacts.filter((c) => c.label === 'RSVP')

  return (
    <Section id="rsvp" icon={CalendarCheck} title="RSVP">
      <p className="lead">We would love to celebrate with you. Kindly confirm your attendance.</p>
      <div className="btn-row">
        {rsvpContacts.map(({ phone }) => (
          <a key={phone} className="btn" href={tel(phone)}>
            <Phone size={15} /> {phone}
          </a>
        ))}
      </div>
      {rsvp.deadline && <p className="muted">{rsvp.deadline}</p>}
      {gifts && <GiftCard {...gifts} />}
    </Section>
  )
}
