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
      mapsUrl: 'https://maps.google.com/?q=5.717702,-0.027295',
    },
  ],

  schedule: [
    { time: '03:00 PM', title: 'Waleema' }, // TODO: add the rest of the day
  ],

  verses: {
    // Shown under the couple's names at the top
    hero: { text: 'And We created you in pairs.', source: "Qur'an 78:8" },
    // Shown mid-page, between the schedule and RSVP
    middle: { text: 'And live with them in kindness.', source: "An-Nisa 4:19" },
  },

  rsvp: {
    deadline: '', // TODO: e.g. "Kindly respond by 20th October" — empty hides it
  },

  gifts: {
    note: 'Your presence is the greatest gift.',
    options: [],
  },

  // Google Apps Script web app URL (ends in /exec). Setup steps are in
  // google-apps-script/Code.gs. Empty hides the upload button.
  uploadEndpoint: '', // TODO

  // Used for RSVP and the help section.
  contacts: [
    { label: 'RSVP', phone: '020 765 0751' },
    { label: 'RSVP', phone: '054 292 9633' },
  ],
  whatsapp: '', // TODO: number to message — empty hides the link
}
