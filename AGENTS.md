I'd structure it around one simple idea:

Guests scan → immediately get everything they need for the day.

🏠 1. Welcome / Home

The first screen should be beautiful but lightweight.

Something like:

Junior & Farida
We're getting married ❤️

[ View Wedding Details ]

Then perhaps:

We can't wait to celebrate with you.

You could have the wedding date, a subtle countdown, and a hero photo.

📍 2. Location

This should be one of the primary actions because that's the whole point of the QR code.

Something like:

📍 Find Us

Ceremony
Venue name
Address

Reception
Venue name
Address

Buttons:

🗺️ Open in Google Maps
🚗 Get Directions

And if ceremony + reception are different locations, make that distinction very obvious.

🕐 3. Wedding Schedule

A simple timeline:

Wedding Day

09:00 AM
Guest arrival

10:00 AM
Ceremony

12:30 PM
Reception

01:00 PM
Lunch

02:30 PM
Photos & celebration

You can obviously replace those with Junior's actual schedule.

👔 4. Dress Code

This is one of those tiny features that guests actually appreciate.

For example:

Dress Code

🤵 Gentlemen
Formal / Traditional

👗 Ladies
Elegant / Traditional

Then perhaps a little visual inspiration section.

🎁 5. Gift / RSVP

Depending on what Junior wants, we could have:

RSVP

We would love to celebrate with you. Kindly confirm your attendance.

[ Confirm Attendance ]

And potentially:

Gift Information

with whatever payment/mobile-money details they want to provide.

We'd keep this optional because some couples don't want gift information displayed prominently.

📸 6. Photo Sharing

This could be really nice.

A section:

📸 Share Your Moments

Got a great shot? We'd love to see it.

[ Upload a Photo ]

You could eventually have a shared gallery where guests' photos appear.

For a small first version, though, I'd probably make this a simple external upload destination rather than building an entire photo backend.

❤️ 7. Our Story

Optional, but gives the site personality.

Junior & Farida

A short story about how they met, got engaged, etc.

Could even have:

We met
↓
First date
↓
Engagement
↓
Wedding Day ❤️
🆘 8. Guest Help

This is another underrated feature.

Need Help?

📍 Can't find the venue?
🚗 Need directions?
📞 Contact the coordinator
🏨 Nearby accommodation
💬 WhatsApp the couple/coordinator

Basically a tiny wedding concierge.

The actual app structure

I'd keep the MVP to roughly:

/
├── Home
├── Wedding Details
├── Schedule
├── Venue
├── Dress Code
├── RSVP
└── Help

But I wouldn't make all of those separate routes initially.

For a wedding microsite, a beautiful single-page experience can actually work better:

┌───────────────────────────────┐
│ JUNIOR & FARIDA │
│ │
│ We're getting married │
│ │
│ [ Wedding Details ] │
├───────────────────────────────┤
│ │
│ 📅 THE BIG DAY │
│ │
├───────────────────────────────┤
│ │
│ 📍 FIND THE VENUE │
│ │
│ [ Get Directions ] │
├───────────────────────────────┤
│ │
│ 🕐 SCHEDULE │
│ │
├───────────────────────────────┤
│ │
│ 👗 DRESS CODE │
│ │
├───────────────────────────────┤
│ │
│ ❤️ OUR STORY │
│ │
├───────────────────────────────┤
│ │
│ 📸 SHARE PHOTOS │
│ │
└───────────────────────────────┘

And because the entry point is a QR code, I'd optimize the entire thing for mobile first. Desktop is basically a nice bonus.

🚀 And here's where we can make it fun

Since you're already working with React + Vite + Tailwind, this is a nice opportunity to build something polished without dragging in a huge architecture.

I'd go:

React + TypeScript + Vite + Tailwind

Then potentially:

Framer Motion / Motion → tasteful entrance animations
Lucide → icons
Google Maps link → navigation
WhatsApp link → contact
Countdown timer → wedding day
Responsive mobile-first UI
QR code generated separately pointing to the deployed URL

No backend is necessary for the first version unless Junior specifically wants RSVP collection, photo uploads, guest management, etc.

And there's a nice little product-design challenge here too: the QR scan should land directly on the most useful information, not make guests hunt through a fancy wedding website. That's the difference between a pretty microsite and an actually useful guest app
