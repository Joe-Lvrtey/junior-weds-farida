import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Flourish } from './Flourish'

interface SectionProps {
  id: string
  icon: LucideIcon
  title: string
  children: ReactNode
}

export function Section({ id, icon: Icon, title, children }: SectionProps) {
  return (
    <section id={id} className="section reveal">
      <Icon className="section-icon" size={26} strokeWidth={1.25} aria-hidden="true" />
      <h2 className="eyebrow">{title}</h2>
      <Flourish />
      {children}
    </section>
  )
}
