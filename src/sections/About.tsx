import { HeartDoodle } from '../components/Doodles'
import { Section } from '../components/Section'
import { learning, technologies } from '../data/about'
import { useLanguage } from '../i18n/useLanguage'

// Idade calculada pela data de nascimento, pra não ficar desatualizada.
const BIRTHDAY = new Date(2004, 1, 6)

function age() {
  const today = new Date()
  const hadBirthday =
    today.getMonth() > BIRTHDAY.getMonth() ||
    (today.getMonth() === BIRTHDAY.getMonth() && today.getDate() >= BIRTHDAY.getDate())
  return today.getFullYear() - BIRTHDAY.getFullYear() - (hadBirthday ? 0 : 1)
}

export function About() {
  const { t } = useLanguage()

  return (
    <Section id="sobre" title={t.about.title} note={<HeartDoodle className="w-28 -rotate-6" />}>
      <div className="space-y-6 text-xl">
        <p>{t.about.intro.replace('{age}', String(age()))}</p>
        <p>{t.about.growth}</p>
        <p>{t.about.now}</p>
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
