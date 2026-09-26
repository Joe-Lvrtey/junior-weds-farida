import { Heart } from 'lucide-react'
import { wedding } from '../data/wedding'

export function Footer() {
  return (
    <footer className="footer">
      <Heart size={14} strokeWidth={1.5} aria-hidden="true" />
      <p className="eyebrow small">Your presence will make our day complete</p>
      <p className="script">
        {wedding.groom} &amp; {wedding.bride}
      </p>
    </footer>
  )
}
