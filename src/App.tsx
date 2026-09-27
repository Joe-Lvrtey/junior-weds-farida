import { Footer } from './components/Footer'
import { Help } from './components/Help'
import { Hero } from './components/Hero'
import { Photos } from './components/Photos'
import { QuickBar } from './components/QuickBar'
import { Rsvp } from './components/Rsvp'
import { Schedule } from './components/Schedule'
import { Venues } from './components/Venues'
import { VerseQuote } from './components/Verses'
import { wedding } from './data/wedding'
import { useInitialHash } from './hooks/useInitialHash'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  useInitialHash()

  return (
    <>
      <main className="paper">
        <Hero />
        <Venues />
        <Schedule />
        <section className="section reveal">
          <VerseQuote {...wedding.verses.middle} />
        </section>
        <Rsvp />
        <Photos />
        <Help />
        <Footer />
      </main>
      <QuickBar />
    </>
  )
}
