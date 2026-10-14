import type { ReactNode } from 'react'

type MarginNoteProps = {
  children: ReactNode
  tilt?: 'left' | 'right'
}

// Anotação de caneta vermelha, como as que a gente faz na margem do caderno.
export function MarginNote({ children, tilt = 'left' }: MarginNoteProps) {
  return (
    <p className={`font-note text-2xl leading-tight text-red-pen ${tilt === 'left' ? '-rotate-3' : 'rotate-2'}`}>
      {children}
    </p>
  )
}
