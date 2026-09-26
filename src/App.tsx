import { DressCode } from './components/DressCode'
import { Footer } from './components/Footer'
import { Help } from './components/Help'
import { Hero } from './components/Hero'
import { Photos } from './components/Photos'
import { QuickBar } from './components/QuickBar'
import { Rsvp } from './components/Rsvp'
import { Schedule } from './components/Schedule'
import { Story } from './components/Story'
import { Venues } from './components/Venues'
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
        <DressCode />
        <Story />
        <Rsvp />
        <Photos />
        <Help />
        <Footer />
      </main>
      <QuickBar />
    </>
  )
}
