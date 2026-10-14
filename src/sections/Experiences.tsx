import { InviteStatesDoodle } from '../components/Doodles'
import { ExperienceItem } from '../components/ExperienceItem'
import { MarginNote } from '../components/MarginNote'
import { Section } from '../components/Section'
import { experiences } from '../data/experiences'
import { useLanguage } from '../i18n/useLanguage'

export function Experiences() {
  const { t } = useLanguage()

  return (
    <Section
      id="experiencias"
      title={t.experiences.title}
      note={
        <>
          <MarginNote tilt="right">{t.experiences.note}</MarginNote>
          <InviteStatesDoodle className="mt-56 w-full -rotate-2 opacity-80" />
        </>
      }
    >
      <ol className="ml-2 border-l-2 border-dashed border-smudge">
        {experiences.map((experience, i) => (
          <ExperienceItem key={experience.company} index={i} {...experience} />
        ))}
      </ol>
    </Section>
  )
}
