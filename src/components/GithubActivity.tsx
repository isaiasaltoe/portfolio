import { useEffect, useRef, type CSSProperties } from 'react'
import { useGithubContributions, type ContributionDay } from '../hooks/useGithubContributions'
import { useLanguage } from '../i18n/useLanguage'

const USERNAME = 'isaiasaltoe'

// Cada nível de atividade vira uma hachura de caneta vermelha mais fechada,
// do quadradinho vazio até o preenchido.
const hatch = (gap: string) =>
  `repeating-linear-gradient(45deg, var(--color-red-pen) 0 1px, transparent 1px ${gap})`

const levelStyles: Record<ContributionDay['level'], CSSProperties> = {
  0: { boxShadow: 'inset 0 0 0 1px var(--color-smudge)' },
  1: { backgroundImage: hatch('4px') },
  2: { backgroundImage: hatch('2.5px') },
  3: { backgroundImage: `${hatch('2.5px')}, ${hatch('2.5px').replace('45deg', '-45deg')}` },
  4: { backgroundColor: 'var(--color-red-pen)' },
}

// Gráfico de contribuições do GitHub desenhado a lápis.
export function GithubActivity() {
  const { language, t } = useLanguage()
  const { data, failed } = useGithubContributions(USERNAME)
  const scroller = useRef<HTMLDivElement>(null)

  // No celular o gráfico não cabe: começa mostrando as semanas mais recentes.
  useEffect(() => {
    const element = scroller.current
    if (data && element) element.scrollLeft = element.scrollWidth
  }, [data])

  // Se a API cair, o bloco some em vez de mostrar um gráfico quebrado.
  if (failed) return null

  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(language === 'pt' ? 'pt-BR' : 'en', { day: 'numeric', month: 'short', year: 'numeric' }).format(
      new Date(`${date}T00:00:00`),
    )

  // A grade começa no domingo, então completamos a primeira semana com espaços vazios.
  const padding = data ? new Date(`${data.days[0].date}T00:00:00`).getDay() : 0
  const busiest = data?.days.reduce((max, day) => (day.count > max.count ? day : max))

  return (
    // Ficha de papel com fita, no mesmo estilo das experiências.
    // contain-inline-size: a largura do gráfico não pode alargar a coluna da seção.
    <div className="sketch-border relative mt-16 [contain:inline-size] -rotate-[0.4deg] rounded-sm bg-white p-6 text-pencil">
      <span
        aria-hidden="true"
        className="hatch absolute -top-3 right-10 h-6 w-20 rotate-3 border border-smudge bg-paper/80"
      />

      <h3 className="text-2xl">{t.github.title}</h3>
      <p className="mt-3 max-w-2xl">
        {t.github.introBefore} <a href="#contato">{t.github.introLink}</a>!
      </p>

      <div ref={scroller} className="mt-6 overflow-x-auto border-t border-dashed border-smudge pt-6 pb-3">
        <div
          className="grid w-max grid-flow-col grid-rows-7 gap-[3px] px-2"
          style={{ filter: 'url(#pencil)' }}
          aria-hidden
        >
          {data
            ? [
                ...Array.from({ length: padding }, (_, i) => <span key={`pad-${i}`} />),
                ...data.days.map((day) => (
                  <span
                    key={day.date}
                    title={`${day.count} · ${formatDate(day.date)}`}
                    className="relative size-[10px] rounded-[2px]"
                    style={levelStyles[day.level]}
                  >
                    {day === busiest && day.count > 0 && (
                      <span className="absolute -inset-[5px] rounded-full border-2 border-graphite" />
                    )}
                  </span>
                )),
              ]
            : // Enquanto carrega, mostra a grade vazia pra não pular o layout.
              Array.from({ length: 53 * 7 }, (_, i) => (
                <span key={i} className="size-[10px] rounded-[2px]" style={levelStyles[0]} />
              ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-lg">
        {data && (
          <span>
            <strong className="font-title text-graphite">{data.total}</strong> {t.github.total}
          </span>
        )}
        {busiest && busiest.count > 0 && (
          <span className="-rotate-2 font-note text-xl text-red-pen">
            {t.github.busiest}: {formatDate(busiest.date)} ({busiest.count})
          </span>
        )}
        <span className="flex items-center gap-1 text-base text-pencil-light">
          {t.github.less}
          {([0, 1, 2, 3, 4] as const).map((level) => (
            <span key={level} className="size-[10px] rounded-[2px]" style={levelStyles[level]} />
          ))}
          {t.github.more}
        </span>
        <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noopener noreferrer" className="ml-auto">
          {t.github.profile}
        </a>
      </div>
    </div>
  )
}
