import { CalendarCheck, Clock, LifeBuoy, Navigation, type LucideIcon } from 'lucide-react'

// The things a guest scanning the QR code needs most.
const links: { href: string; icon: LucideIcon; label: string }[] = [
  { href: '#venue', icon: Navigation, label: 'Venue' },
  { href: '#schedule', icon: Clock, label: 'Schedule' },
  { href: '#rsvp', icon: CalendarCheck, label: 'RSVP' },
  { href: '#help', icon: LifeBuoy, label: 'Help' },
]

export function QuickBar() {
  return (
    <nav className="quickbar" aria-label="Quick links">
      {links.map(({ href, icon: Icon, label }) => (
        <a key={href} href={href}>
          <Icon size={18} strokeWidth={1.5} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  )
}
