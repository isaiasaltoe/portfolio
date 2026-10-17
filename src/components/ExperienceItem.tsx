import type { Experience } from '../data/experiences'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useLanguage } from '../i18n/useLanguage'
import { Stamp } from './Stamp'

type ExperienceItemProps = Experience & { index: number }

// Inclinação de cada selo, pra não parecerem todos iguais.
const stampTilts = ['6deg', '-5deg', '8deg', '-7deg', '5deg']

// Cada experiência é uma ficha de papel presa na linha do tempo com um pedaço de fita
// e um selo com o logo colado no canto.
export function ExperienceItem({ index, title, company, period, current, items, logo }: ExperienceItemProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLLIElement>()
  const { language, t } = useLanguage()

  return (
    <li
      ref={ref}
      className={`relative pb-12 pl-10 transition-all duration-700 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
      }`}
    >
      {/* bolinha na linha do tempo e o tracinho que liga até a ficha */}
      <span className="sketch-border absolute top-9 -left-[9px] h-4 w-4 rounded-full bg-paper text-pencil" />
      <span className="absolute top-[42px] left-2 w-8 border-t-2 border-dashed border-smudge" />

      <article
        className={`sketch-border relative rounded-sm bg-white p-6 text-pencil ${index % 2 ? 'rotate-[0.6deg]' : '-rotate-[0.6deg]'}`}
      >
        {/* fita segurando a ficha */}
        <span
          aria-hidden="true"
          className={`hatch absolute -top-3 h-6 w-20 border border-smudge bg-paper/80 ${
            index % 2 ? 'left-24 rotate-3' : 'left-10 -rotate-3'
          }`}
        />

        {/* selo no canto de cima, meio pra fora da ficha (a fita fica sempre do lado esquerdo) */}
        <Stamp
          logo={logo.src}
          logoOnDark={logo.onDark}
          className="pointer-events-none absolute -top-6 -right-3 w-20 md:-right-6 md:w-24"
          style={{ rotate: stampTilts[index % stampTilts.length] }}
        />

        <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pr-16 md:pr-20">
          <h3 className="text-2xl">
            {company}
            {current && <span className="ml-3 font-note text-2xl text-red-pen">{t.experiences.current}</span>}
          </h3>
          <span className="sketch-border rounded-full px-3 text-base text-pencil-light">{period[language]}</span>
        </header>
        <p className="mt-1 font-title text-lg text-pencil-light">{title[language]}</p>

        <ul className="mt-4 space-y-2 border-t border-dashed border-smudge pt-4">
          {items[language].map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </li>
  )
}
