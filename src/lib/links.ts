const digits = (phone: string) => phone.replace(/\D/g, '')

/** wa.me needs the international form; local Ghana numbers start with 0. */
export const whatsapp = (phone: string) => {
  const d = digits(phone)
  return `https://wa.me/${d.startsWith('0') ? `233${d.slice(1)}` : d}`
}

export const tel = (phone: string) => `tel:${digits(phone)}`

/** Props for links that leave the site. */
export const external = { target: '_blank', rel: 'noreferrer' } as const
