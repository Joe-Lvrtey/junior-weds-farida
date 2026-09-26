import { Shirt } from 'lucide-react'
import { wedding } from '../data/wedding'
import { Section } from './Section'

export function DressCode() {
  const { gentlemen, ladies, swatches, note } = wedding.dressCode

  return (
    <Section id="dress" icon={Shirt} title="Dress code">
      <div className="dress">
        <div>
          <p className="tag">Gentlemen</p>
          <p className="serif">{gentlemen}</p>
        </div>
        <div>
          <p className="tag">Ladies</p>
          <p className="serif">{ladies}</p>
        </div>
      </div>
      <div className="swatches" aria-hidden="true">
        {swatches.map((color) => (
          <span key={color} style={{ background: color }} />
        ))}
      </div>
      <p className="muted">{note}</p>
    </Section>
  )
}
