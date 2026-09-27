import type { Verse } from '../types'

export function VerseQuote({ text, source }: Verse) {
  return (
    <figure className="verse">
      <blockquote>“{text}”</blockquote>
      <figcaption className="tag">{source}</figcaption>
    </figure>
  )
}
