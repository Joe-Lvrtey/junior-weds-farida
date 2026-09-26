import { MapPin, Navigation } from 'lucide-react'
import { wedding } from '../data/wedding'
import { external } from '../lib/links'
import type { Venue } from '../types'
import { Section } from './Section'

function VenueCard({ label, name, address, gps, time, mapsUrl }: Venue) {
  return (
    <article className="card venue">
      <p className="tag">{label}</p>
      <h3>{name}</h3>
      <p className="muted">{address}</p>
      {gps && (
        <p className="gps">
          <span className="tag">GPS</span> {gps}
        </p>
      )}
      <p className="muted">{time}</p>
      <div className="btn-row">
        <a className="btn" href={mapsUrl} {...external}>
          <Navigation size={15} /> Get directions
        </a>
      </div>
    </article>
  )
}

export function Venues() {
  return (
    <Section id="venue" icon={MapPin} title="Find us">
      <div className="venues">
        {wedding.venues.map((venue) => (
          <VenueCard key={venue.label} {...venue} />
        ))}
      </div>
    </Section>
  )
}
