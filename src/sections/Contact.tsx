import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconFileText,
  IconMail,
  type Icon,
} from '@tabler/icons-react'
import { Notebook } from '../components/Notebook'
import { Section } from '../components/Section'
import { contacts, type ContactKind } from '../data/contacts'
import { useLanguage } from '../i18n/useLanguage'

const icons: Record<ContactKind, Icon> = {
  linkedin: IconBrandLinkedin,
  github: IconBrandGithub,
  whatsapp: IconBrandWhatsapp,
  email: IconMail,
  resume: IconFileText,
}

export function Contact() {
  const { language, t } = useLanguage()

  return (
    <Section id="contato" title={t.contact.title}>
      {/* contatos à esquerda, caderneta para rabiscar à direita */}
      <div className="grid items-start gap-16 md:grid-cols-[auto_1fr] md:gap-12">
        <div>
          <p className="text-xl">{t.contact.intro}</p>
          <ul className="mt-8 space-y-4">
            {contacts.map((contact) => {
              const Icon = icons[contact.kind]
              const href = typeof contact.href === 'string' ? contact.href : contact.href[language]
              const external = !href.startsWith('mailto:')
              return (
                <li key={contact.kind}>
                  <a
                    href={href}
                    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="inline-flex items-center gap-3 text-xl"
                  >
                    <Icon size={26} stroke={1.5} />
                    {contact.kind === 'resume' ? t.contact.resume : contact.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <Notebook />
      </div>
    </Section>
  )
}
