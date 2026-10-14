import { useRef } from 'react'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { GmanagerErDoodle } from '../components/Doodles'
import { GithubActivity } from '../components/GithubActivity'
import { MarginNote } from '../components/MarginNote'
import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { projects } from '../data/projects'
import { useLanguage } from '../i18n/useLanguage'

export function Projects() {
  const { t } = useLanguage()
  // Referência para a faixa que rola, usada pelos botões de seta.
  const scroller = useRef<HTMLDivElement>(null)

  function scroll(direction: 1 | -1) {
    const element = scroller.current
    if (!element) return
    element.scrollBy({ left: direction * element.clientWidth * 0.8, behavior: 'smooth' })
  }

  const arrowClass =
    'sketch-border rounded-full p-2 text-graphite transition-transform hover:-translate-y-0.5 active:translate-y-0.5'

  return (
    <Section
      id="projetos"
      title={t.projects.title}
      note={
        <>
          <MarginNote>{t.projects.note}</MarginNote>
          <GmanagerErDoodle className="mt-40 w-full rotate-2 opacity-80" />
        </>
      }
    >
      {/* Projetos lado a lado, rolando na horizontal e "encaixando" em cada card */}
      <div ref={scroller} className="flex snap-x snap-mandatory gap-10 overflow-x-auto px-2 pt-3 pb-6">
        {projects.map((project, i) => (
          <div key={project.title} className="w-[85%] shrink-0 snap-start sm:w-[420px]">
            <ProjectCard index={i} {...project} />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button type="button" onClick={() => scroll(-1)} aria-label={t.projects.previous} className={arrowClass}>
          <IconArrowLeft size={20} stroke={1.5} />
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label={t.projects.next} className={arrowClass}>
          <IconArrowRight size={20} stroke={1.5} />
        </button>
        <span className="ml-2 -rotate-2 font-note text-xl text-red-pen">{t.projects.hint}</span>
      </div>

      <GithubActivity />
    </Section>
  )
}
