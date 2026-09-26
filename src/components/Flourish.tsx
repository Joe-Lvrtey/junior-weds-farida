import { Heart } from 'lucide-react'

export function Flourish() {
  return (
    <div className="flourish" aria-hidden="true">
      <span />
      <Heart size={12} strokeWidth={1.5} />
      <span />
    </div>
  )
}
