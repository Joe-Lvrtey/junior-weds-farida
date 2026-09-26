export interface Venue {
  label: string
  name: string
  address: string
  /** Ghana Post GPS digital address */
  gps?: string
  time: string
  /** Google Maps share link */
  mapsUrl: string
}

export interface ScheduleItem {
  time: string
  title: string
}

export interface DressCode {
  note: string
  gentlemen: string
  ladies: string
  swatches: string[]
}

export interface StoryMoment {
  title: string
  text: string
}

export interface Rsvp {
  /** Empty hides the line. */
  deadline: string
}

export interface GiftOption {
  label: string
  detail: string
}

export interface Gifts {
  note: string
  options: GiftOption[]
}

export interface Contact {
  label: string
  phone: string
}

export interface Wedding {
  groom: string
  groomFullName: string
  bride: string
  brideFullName: string
  /** ISO date-time with timezone offset */
  date: string
  /** Empty hides it. */
  hashtag: string
  venues: [Venue, ...Venue[]]
  schedule: ScheduleItem[]
  dressCode: DressCode
  story: StoryMoment[]
  rsvp: Rsvp
  /** null hides the gift section entirely */
  gifts: Gifts | null
  /** Shared album upload link. Empty hides the button. */
  photoUploadUrl: string
  contacts: Contact[]
  /** Local or international format. Empty hides the link. */
  whatsapp: string
}
