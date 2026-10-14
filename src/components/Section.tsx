import type { ReactNode } from 'react'
import { Scribble } from './Scribble'

type SectionProps = {
  id: string
  title: string
  note?: ReactNode
  children: ReactNode
}

// Seção com título sublinhado à mão e uma coluna de margem para anotações.
export function Section({ id, title, note, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto grid max-w-5xl scroll-mt-24 gap-10 px-6 py-20 md:grid-cols-[1fr_180px]">
      <div>
        <h2 className="text-4xl">{title}</h2>
        <Scribble className="mt-1 w-40 text-pencil-light" />
        <div className="mt-10">{children}</div>
      </div>
      {note && <aside className="hidden pt-24 md:block">{note}</aside>}
    </section>
  )
}
