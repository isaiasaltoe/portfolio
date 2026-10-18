import { useState, type ReactNode } from 'react'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { useMediaQuery } from '../hooks/useMediaQuery'

type BookProps = {
  pages: ReactNode[]
  previousLabel: string
  nextLabel: string
}

// Uma folha tem frente (página da direita) e verso (que vira página da esquerda).
type Leaf = { front: ReactNode; back: ReactNode }

// Livro aberto: no desktop mostra duas páginas lado a lado, no celular uma só.
// Muda o layout? O livro volta pro começo, porque as folhas são montadas de outro jeito.
export function Book(props: BookProps) {
  const spread = useMediaQuery('(min-width: 768px)')
  return <OpenBook key={String(spread)} spread={spread} {...props} />
}

function OpenBook({ pages, previousLabel, nextLabel, spread }: BookProps & { spread: boolean }) {
  const [flipped, setFlipped] = useState(0)

  // Desktop: a 1ª página fica fixa na esquerda e as seguintes viram em pares (frente e verso).
  // Celular: cada página é uma folha com o verso em branco, e a última fica por baixo de todas.
  const rest = spread ? pages.slice(1) : pages.slice(0, -1)
  const leaves: Leaf[] = []
  if (spread) {
    for (let i = 0; i + 1 < rest.length; i += 2) leaves.push({ front: rest[i], back: rest[i + 1] })
  } else {
    for (const page of rest) leaves.push({ front: page, back: null })
  }
  const left = spread ? pages[0] : null
  const right = spread ? (rest.length % 2 === 1 ? rest.at(-1) : null) : pages.at(-1)

  const arrowClass =
    'sketch-border rounded-full p-2 text-graphite transition-transform hover:-translate-y-0.5 active:translate-y-0.5 disabled:opacity-30 disabled:hover:translate-y-0'

  return (
    <div>
      {/* capa: aparece em volta das folhas, como capa e contracapa de um livro aberto */}
      <div
        className={`sketch-border mx-auto rounded-lg bg-graphite text-graphite shadow-[3px_4px_0_var(--color-smudge)] ${
          spread ? 'max-w-3xl p-5 pb-6' : 'max-w-[340px] p-3 pb-5'
        }`}
      >
        <div className={`relative isolate text-pencil ${spread ? 'grid grid-cols-2' : ''}`}>
          {/* sem proporção própria: estica até a altura do lado direito, que é quem cresce se precisar */}
          {spread && (
            <div className="relative">
              <SheetStack side="left" />
              <div className="absolute inset-0">
                <Page side="left">{left}</Page>
              </div>
            </div>
          )}

          {/* lado direito: as folhas giram em volta da lombada (borda esquerda) */}
          <div className="relative aspect-[4/5]">
            <PageSizer pages={pages} />
            <SheetStack side="right" />
            {/* Sem overflow-hidden: no Safari (iPhone), recortar um filho girando em 3D quebra a animação. */}
            <div className="absolute inset-0 [perspective:2000px] [perspective-origin:left_center]">
              <div className="absolute inset-0">
                <Page side="right">{right}</Page>
              </div>

              {leaves.map((leaf, i) => {
                const isFlipped = i < flipped
                // Folhas ainda não viradas ficam acima de todas as viradas; entre as viradas, a última por cima.
                // O z-index só troca no meio da virada (transition-delay), quando a folha está de lado.
                // No celular o verso é branco, então a folha só gira até ficar de lado (-90°) e some,
                // sem precisar de recorte para esconder a parte que passaria da lombada. De lado ela
                // não ocupa espaço, então pode continuar por cima: assim não some atrás da próxima no meio do giro.
                const zIndex = isFlipped && spread ? i + 1 : leaves.length * 2 - i
                // rotateY(0deg) em vez de 'none' garante que todo navegador anime pelo ângulo.
                const angle = isFlipped ? (spread ? -180 : -90) : 0
                return (
                  <div
                    key={i}
                    className="absolute inset-0 origin-left transition-[transform,z-index] [transition-delay:0ms,350ms] duration-700 ease-in-out [transform-style:preserve-3d] motion-reduce:transition-none"
                    style={{ transform: `rotateY(${angle}deg)`, zIndex }}
                  >
                    <div className="absolute inset-0 [-webkit-backface-visibility:hidden] [backface-visibility:hidden]" inert={isFlipped}>
                      <Page side="right">{leaf.front}</Page>
                    </div>
                    <div className="absolute inset-0 [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)]" inert={!isFlipped}>
                      <Page side={spread ? 'left' : 'right'}>{leaf.back}</Page>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setFlipped(flipped - 1)}
          disabled={flipped === 0}
          aria-label={previousLabel}
          className={arrowClass}
        >
          <IconArrowLeft size={20} stroke={1.5} />
        </button>
        <button
          type="button"
          onClick={() => setFlipped(flipped + 1)}
          disabled={flipped === leaves.length}
          aria-label={nextLabel}
          className={arrowClass}
        >
          <IconArrowRight size={20} stroke={1.5} />
        </button>
      </div>
    </div>
  )
}

// Folha pautada com margem vermelha e uma sombra perto da lombada.
// A borda de lápis deixa ver a beirada da folha enquanto ela vira.
function Page({ side, children }: { side: 'left' | 'right'; children: ReactNode }) {
  const spine = side === 'left' ? 'to left' : 'to right'
  return (
    <div
      className="sketch-border size-full overflow-hidden bg-white py-6 pr-4 pl-12 md:pr-8 md:pl-14"
      style={{
        backgroundImage: `linear-gradient(${spine}, rgba(0, 0, 0, 0.08), transparent 12%), linear-gradient(90deg, transparent 38px, var(--color-eraser) 38px 40px, transparent 40px), repeating-linear-gradient(transparent 0 23px, var(--color-smudge) 23px 24px)`,
        // Pauta a cada 24px, passando na linha de base do texto: o texto usa line-height de 24px,
        // começa no py-6 (24px) e a linha de base das fontes fica a 18px do topo da linha.
        backgroundPositionY: '0, 0, 19px',
      }}
    >
      {children}
    </div>
  )
}

// Cópia invisível de todas as páginas empilhadas no mesmo lugar: se alguma não couber
// na proporção do livro, o livro cresce até caber a mais longa (o aspect-ratio deixa crescer).
function PageSizer({ pages }: { pages: ReactNode[] }) {
  return (
    <div aria-hidden="true" inert className="invisible grid">
      {pages.map((page, i) => (
        <div key={i} className="[grid-area:1/1]">
          <Page side="right">{page}</Page>
        </div>
      ))}
    </div>
  )
}

// Folhas de baixo, um pouco desencontradas para fora, dando a grossura do livro.
function SheetStack({ side }: { side: 'left' | 'right' }) {
  const dir = side === 'left' ? -1 : 1
  return (
    <>
      {[2, 1].map((n) => (
        <div
          key={n}
          aria-hidden="true"
          className="sketch-border absolute inset-0 rounded-sm bg-paper text-pencil-light"
          style={{ transform: `translate(${dir * n * 4}px, ${n * 4}px)` }}
        />
      ))}
    </>
  )
}
