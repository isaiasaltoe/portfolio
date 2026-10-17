import type { ReactNode } from 'react'

type SketchButtonProps = {
  href: string
  children: ReactNode
  // abre em outra aba (links pra fora do site)
  external?: boolean
}

// Botão desenhado à mão: borda tremida que "afunda" ao clicar.
export function SketchButton({ href, children, external }: SketchButtonProps) {
  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className="sketch-border inline-block rounded-md px-5 py-2 text-xl text-graphite no-underline transition-transform hover:-translate-y-0.5 hover:bg-white active:translate-y-0.5"
    >
      {children}
    </a>
  )
}
