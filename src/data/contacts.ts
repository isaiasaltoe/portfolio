import type { Localized } from '../i18n/translations'

export type ContactKind = 'linkedin' | 'github' | 'whatsapp' | 'email' | 'resume'

export type Contact = {
  kind: ContactKind
  label: string
  // O currículo tem um arquivo por idioma.
  href: string | Localized
}

export const contacts: Contact[] = [
  { kind: 'linkedin', label: 'linkedin.com/in/isaiasaltoe', href: 'https://www.linkedin.com/in/isaiasaltoe/' },
  { kind: 'github', label: 'github.com/isaiasaltoe', href: 'https://github.com/isaiasaltoe' },
  { kind: 'whatsapp', label: '(28) 99272-3833', href: 'https://wa.me/5528992723833' },
  { kind: 'email', label: 'isaiasaltoe7@gmail.com', href: 'mailto:isaiasaltoe7@gmail.com' },
  {
    kind: 'resume',
    label: 'Currículo',
    href: {
      pt: '/resume-pt.pdf',
      en: '/resume-en.pdf',
    },
  },
]
