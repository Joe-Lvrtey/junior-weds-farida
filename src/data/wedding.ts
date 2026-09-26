// All wedding details live here. Edit this file to update the site.
// Items marked TODO are placeholders waiting on the couple's real info.

import type { Wedding } from '../types'

export const wedding: Wedding = {
  groom: 'Abubakar',
  groomFullName: 'Abubakar Mahmood',
  bride: 'Fareeda',
  brideFullName: 'Fareeda Quansah',
  // ISO date-time with timezone offset (Ghana is UTC+0)
  date: '2026-10-31T15:00:00+00:00',
  hashtag: '', // TODO: e.g. #AbubakarWedsFareeda — empty hides it

  venues: [
    {
      label: 'Ceremony & Reception', // TODO confirm both are here
      name: 'Community 22',
      address: 'Near Britannia Hospital, Community 22',
      gps: 'GB-058-9070',
      time: '3:00 PM',
      mapsUrl: 'https://maps.app.goo.gl/91z9TUBVs4KFcq9F7',
    },
  ],

  schedule: [
    { time: '03:00 PM', title: 'Wedding ceremony' }, // TODO: add the rest of the day
  ],

  dressCode: {
    note: 'Colours of the day: ivory, champagne & gold', // TODO confirm
    gentlemen: 'Formal / Traditional', // TODO confirm
    ladies: 'Elegant / Traditional', // TODO confirm
    swatches: ['#f4ede3', '#e6d6c1', '#c9ad8a', '#9a7b5a'],
  },

  story: [
    { title: 'We met', text: 'A short line about how it all began.' }, // TODO
    { title: 'First date', text: 'Where it went from there.' }, // TODO
    { title: 'The proposal', text: 'The question, and the yes.' }, // TODO
    { title: 'Wedding day', text: 'Forever starts here.' },
  ],

  rsvp: {
    deadline: '', // TODO: e.g. "Kindly respond by 20th October" — empty hides it
  },

  gifts: {
    note: 'Your presence is the greatest gift. Should you wish to bless us further:',
    options: [
      { label: 'Mobile Money', detail: '0552760549 — Abubakr Mahmood Junior' }, 
    ],
  },

  photoUploadUrl: '', // TODO: Google Photos / Drive folder link

  // Used for RSVP and the help section.
  contacts: [
    { label: 'RSVP', phone: '020 765 0751' },
    { label: 'RSVP', phone: '054 292 9633' },
  ],
  whatsapp: '', // TODO: number to message — empty hides the link
}
