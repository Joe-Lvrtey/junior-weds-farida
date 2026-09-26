import { useEffect } from 'react'

/** Honour deep links like /#venue (e.g. a QR code pointing straight at a section). */
export function useInitialHash() {
  useEffect(() => {
    const { hash } = window.location
    if (hash) document.querySelector(hash)?.scrollIntoView()
  }, [])
}
