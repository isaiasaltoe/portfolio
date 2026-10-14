import { useEffect, useState } from 'react'

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export type PhrasePhase = 'writing' | 'removing' | 'static'

// Controla o ciclo das frases: escreve letra por letra, espera,
// e pede para o componente remover (borracha, rabisco...). Quando o
// componente termina a animação, ele chama `next()`.
export function usePhraseCycle(phrases: string[], typeSpeed = 70, pause = 1800) {
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [phase, setPhase] = useState<PhrasePhase>(prefersReducedMotion ? 'static' : 'writing')

  const phrase = phrases[index % phrases.length]

  useEffect(() => {
    if (phase !== 'writing') return

    const timeout =
      count < phrase.length
        ? setTimeout(() => setCount(count + 1), typeSpeed)
        : setTimeout(() => setPhase('removing'), pause)

    return () => clearTimeout(timeout)
  }, [phase, count, phrase, typeSpeed, pause])

  function next() {
    setIndex((index + 1) % phrases.length)
    setCount(0)
    setPhase('writing')
  }

  return {
    phrase,
    typed: phase === 'static' ? phrase : phrase.slice(0, count),
    phase,
    next,
  }
}
