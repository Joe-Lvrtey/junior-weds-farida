import { wedding } from '../data/wedding'
import { useCountdown, type Countdown } from '../hooks/useCountdown'

const date = new Date(wedding.date)
const weekday = date.toLocaleDateString('en-GB', { weekday: 'long' })
const month = date.toLocaleDateString('en-GB', { month: 'long' })
const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })

const pad = (n: number) => String(n).padStart(2, '0')

function CountdownTimer({ days, hours, minutes, seconds }: Countdown) {
  const units = [
    ['Days', days],
    ['Hours', hours],
    ['Mins', minutes],
    ['Secs', seconds],
  ] as const

  return (
    <div className="countdown" aria-label="Countdown to the wedding">
      {units.map(([label, value]) => (
        <div key={label}>
          <strong>{pad(value)}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  const countdown = useCountdown(date)
  const { groom, bride, groomFullName, brideFullName } = wedding

  return (
    <header className="hero">
      <p className="monogram" aria-hidden="true">
        {groom[0]}
        <span>&amp;</span>
        {bride[0]}
      </p>
      <p className="eyebrow small">With joyful hearts we invite you to celebrate the wedding of</p>
      <h1 className="names">
        <span>{groom}</span>
        <span className="and">and</span>
        <span>{bride}</span>
      </h1>
      <p className="eyebrow small">
        {groomFullName} &amp; {brideFullName}
      </p>

      <div className="date-row">
        <span className="date-side">{weekday}</span>
        <span className="date-main">
          <small>{month}</small>
          <strong>{date.getDate()}</strong>
          <small>{date.getFullYear()}</small>
        </span>
        <span className="date-side">At {time}</span>
      </div>

      {countdown.done ? (
        <p className="countdown-done">Today's the day ♡</p>
      ) : (
        <CountdownTimer {...countdown} />
      )}

      <a className="btn" href="#venue">
        View wedding details
      </a>
    </header>
  )
}
