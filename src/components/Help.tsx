import { LifeBuoy, MessageCircle, Navigation, Phone } from 'lucide-react'
import { wedding } from '../data/wedding'
import { external, tel, whatsapp } from '../lib/links'
import { Section } from './Section'

const iconProps = { size: 18, strokeWidth: 1.5 } as const

export function Help() {
  const [mainVenue] = wedding.venues

  return (
    <Section id="help" icon={LifeBuoy} title="Need help?">
      <ul className="help">
        <li>
          <a href={mainVenue.mapsUrl} {...external}>
            <Navigation {...iconProps} /> Can't find the venue? Get directions
          </a>
        </li>
        {wedding.contacts.map(({ phone }) => (
          <li key={phone}>
            <a href={tel(phone)}>
              <Phone {...iconProps} /> Call {phone}
            </a>
          </li>
        ))}
        {wedding.whatsapp && (
          <li>
            <a href={whatsapp(wedding.whatsapp)} {...external}>
              <MessageCircle {...iconProps} /> Message us on WhatsApp
            </a>
          </li>
        )}
      </ul>
    </Section>
  )
}
