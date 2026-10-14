import type { AnimationEvent } from 'react'
import { usePhraseCycle } from '../hooks/usePhraseCycle'
import { Eraser } from './Eraser'
import { TypingCursor } from './TypingCursor'

const CRUMBS = 8
const ERASE_SECONDS = 1.6

// Efeito A: a borracha esfrega o texto, que some com borda suave e solta farelos.
export function EraserPhrases({ phrases }: { phrases: string[] }) {
  const { phrase, typed, phase, next } = usePhraseCycle(phrases)
  const erasing = phase === 'removing'

  // Só reage ao fim da animação do próprio elemento, não dos filhos.
  function handleEnd(event: AnimationEvent) {
    if (event.target === event.currentTarget) next()
  }

  return (
    <span className="relative inline-block min-h-[1.5em] max-w-full" aria-label={phrase}>
      <span aria-hidden="true" className={erasing ? 'erase-mask inline-block animate-erase-text' : ''}>
        {typed}
      </span>
      {phase === 'writing' && <TypingCursor />}

      {erasing && (
        <>
          <span aria-hidden="true" className="absolute inset-0 animate-erase-smudge rounded-full bg-smudge/40 blur-[4px]" />

          {Array.from({ length: CRUMBS }, (_, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="absolute top-[65%] h-1.5 w-1 animate-crumb rounded-full bg-eraser"
              style={{
                left: `${((i + 0.5) / CRUMBS) * 100}%`,
                animationDelay: `${(i / CRUMBS) * ERASE_SECONDS}s`,
                ['--crumb-x' as string]: `${i % 2 ? 8 : -6}px`,
              }}
            />
          ))}

          <span aria-hidden="true" onAnimationEnd={handleEnd} className="absolute top-1/2 animate-eraser-move">
            <span className="block -translate-x-1/2 -translate-y-1/2">
              <Eraser className="w-16 animate-eraser-scrub drop-shadow-[2px_3px_0_rgba(0,0,0,0.12)]" />
            </span>
          </span>
        </>
      )}
    </span>
  )
}
