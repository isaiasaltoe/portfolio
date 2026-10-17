import type { CSSProperties } from 'react'

type StampProps = {
  logo: string
  // logo branco (feito pra fundo escuro): vira tinta escura no papel
  logoOnDark?: boolean
  className?: string
  style?: CSSProperties
}

// Selo quadrado com borda serrilhada, colado na ficha: só o logo, ocupando o selo todo.
export function Stamp({ logo, logoOnDark, className, style }: StampProps) {
  return (
    <div aria-hidden="true" className={`drop-shadow-[1px_2px_0_var(--color-smudge)] ${className ?? ''}`} style={style}>
      <div className="perforated bg-white">
        <img
          src={logo}
          alt=""
          className={`aspect-square w-full object-contain ${logoOnDark ? 'brightness-0' : ''}`}
        />
      </div>
    </div>
  )
}
