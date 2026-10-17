import { useEffect, useRef, useState } from 'react'
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
  // Se todos os cards cabem (no desktop cabem dois), as setas não têm o que rolar e somem.
  const [overflows, setOverflows] = useState(true)

  useEffect(() => {
    const element = scroller.current
    if (!element) return
    const observer = new ResizeObserver(() => setOverflows(element.scrollWidth > element.clientWidth + 1))
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

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
          {/* a anotação sobe pra altura do título, porque o carrossel ocupa esta coluna no desktop */}
          <div className="-mt-20">
            <MarginNote>{t.projects.note}</MarginNote>
          </div>
          {/* o diagrama fica do lado do bloco do GitHub, abaixo do carrossel */}
          <GmanagerErDoodle className="mt-[38rem] w-full rotate-2 opacity-80" />
        </>
      }
    >
      {/* Projetos lado a lado, rolando na horizontal e "encaixando" em cada card.
          No desktop a faixa avança sobre a coluna de margem, pra caber dois cards inteiros. */}
      <div ref={scroller} className="flex snap-x snap-mandatory gap-10 overflow-x-auto px-2 pt-3 pb-6 lg:mr-[-220px]">
        {projects.map((project, i) => (
          <div key={project.title} className="w-[85%] shrink-0 snap-start sm:w-[420px]">
            <ProjectCard index={i} {...project} />
          </div>
        ))}
      </div>

      <div className={`mt-4 flex items-center gap-3 ${overflows ? '' : 'hidden'}`}>
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
