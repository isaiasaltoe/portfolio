import { HeartDoodle } from '../components/Doodles'
import { Section } from '../components/Section'
import { learning, technologies } from '../data/about'
import { contacts } from '../data/contacts'
import { useLanguage } from '../i18n/useLanguage'

// Link do WhatsApp com uma mensagem já escrita, pra facilitar o primeiro contato.
const whatsapp = contacts.find((contact) => contact.kind === 'whatsapp')?.href as string

export function About() {
  const { t } = useLanguage()
  const whatsappLink = `${whatsapp}?text=${encodeURIComponent(t.about.whatsappMessage)}`

  return (
    <Section id="sobre" title={t.about.title} note={<HeartDoodle className="w-28 -rotate-6" />}>
      <div className="space-y-6 text-xl">
        <p>{t.about.intro}</p>
        <p>{t.about.services}</p>
        <p>
          {t.about.contactBefore} <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            {t.about.contactLink}
          </a>
          {t.about.contactAfter}
        </p>
      </div>

      <div className="sketch-border mt-10 rounded-sm p-6 text-pencil">
        <p className="font-title text-xl text-graphite">{t.about.techTitle}</p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <li key={tech} className="sketch-border rounded-full px-3 py-0.5 text-lg">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {learning.map((tech) => (
            <span key={tech} className="rounded-full border-2 border-dashed border-smudge px-3 py-0.5 text-lg">
              {tech}
            </span>
          ))}
          <span className="-rotate-2 font-note text-xl text-red-pen">{t.about.learning}</span>
        </div>
      </div>
    </Section>
  )
}
