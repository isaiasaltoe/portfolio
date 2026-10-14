import type { ReactNode } from 'react'

// Rabiscos de aula nas margens: diagramas de estado e modelos relacionais
// desenhados "à mão". São só decoração, então ficam escondidos dos leitores de tela.

type DoodleProps = {
  className?: string
}

function Sketch({ viewBox, className = '', children }: { viewBox: string; className?: string; children: ReactNode }) {
  return (
    <svg
      viewBox={viewBox}
      aria-hidden="true"
      className={`pointer-events-none font-note text-pencil-light select-none ${className}`}
      style={{ filter: 'url(#pencil)' }}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

// Texto do rabisco: preenchido, sem contorno.
function Label({ x, y, size = 15, red, children, rotate = 0 }: {
  x: number
  y: number
  size?: number
  red?: boolean
  rotate?: number
  children: ReactNode
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      stroke="none"
      fill={red ? 'var(--color-red-pen)' : 'currentColor'}
      transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
    >
      {children}
    </text>
  )
}

// Modelo relacional: users 1—N projects N—N techs, com a tabela pivô esquecida.
export function RelationalDoodle({ className }: DoodleProps) {
  return (
    <Sketch viewBox="0 0 180 300" className={className}>
      {/* users */}
      <path d="M8 12 L92 9 L94 84 L10 86 Z" />
      <path d="M10 14 L90 11" opacity={0.4} />
      <path d="M9 32 L93 30" />
      <Label x={16} y={27} size={16}>users</Label>
      <Label x={16} y={50}>id (PK)</Label>
      <Label x={16} y={66}>name</Label>
      <Label x={16} y={81}>email</Label>

      {/* projects */}
      <path d="M78 132 L170 129 L172 218 L80 220 Z" />
      <path d="M79 152 L171 150" />
      <Label x={86} y={147} size={16}>projects</Label>
      <Label x={86} y={170}>id (PK)</Label>
      <Label x={86} y={186}>user_id</Label>
      <Label x={86} y={202}>title</Label>
      <Label x={86} y={216}>…</Label>

      {/* 1 : N com pé de galinha */}
      <path d="M52 86 C 50 110, 60 140, 78 160" />
      <Label x={40} y={102} size={13}>1</Label>
      <path d="M70 150 L80 160 M68 164 L80 160 M74 170 L80 160" />
      <Label x={60} y={178} size={13}>N</Label>

      {/* techs */}
      <path d="M10 236 L72 234 L74 290 L12 292 Z" />
      <path d="M11 254 L73 252" />
      <Label x={18} y={250} size={16}>techs</Label>
      <Label x={18} y={272}>id (PK)</Label>
      <Label x={18} y={287}>name</Label>

      {/* N : N riscado e a anotação */}
      <path d="M80 214 C 70 226, 72 236, 74 246" strokeDasharray="4 4" />
      <Label x={104} y={244} size={14}>N:N</Label>
      <path d="M100 238 L134 236" stroke="var(--color-red-pen)" />
      <Label x={98} y={266} size={15} red rotate={-4}>
        tabela pivô!
      </Label>
      <path d="M118 270 C 128 280, 112 288, 92 282 M96 276 L91 282 L98 286" stroke="var(--color-red-pen)" />
    </Sketch>
  )
}

// Diagrama de estados de uma nota fiscal (oi, fintech).
export function InvoiceStatesDoodle({ className }: DoodleProps) {
  return (
    <Sketch viewBox="0 0 180 280" className={className}>
      {/* início */}
      <circle cx={30} cy={16} r={6} fill="currentColor" />
      <path d="M32 24 C 34 34, 34 40, 36 48 M31 42 L36 49 L41 42" />

      {/* draft, com laço de "editar" */}
      <ellipse cx={42} cy={66} rx={34} ry={16} />
      <Label x={20} y={71}>draft</Label>
      <path d="M74 58 C 100 40, 104 80, 76 74 M80 68 L75 74 L82 78" />
      <Label x={98} y={52} size={13}>edit</Label>

      {/* issued */}
      <path d="M42 84 C 44 100, 46 108, 50 120 M45 114 L50 121 L55 113" />
      <ellipse cx={58} cy={140} rx={38} ry={17} />
      <Label x={33} y={145}>issued</Label>

      {/* paid ✓ */}
      <path d="M40 156 C 32 176, 28 190, 30 206 M25 199 L30 207 L35 199" />
      <ellipse cx={34} cy={226} rx={30} ry={15} />
      <ellipse cx={34} cy={226} rx={25} ry={11} opacity={0.5} />
      <Label x={18} y={231}>paid</Label>
      <Label x={64} y={214} size={20} red>✓</Label>

      {/* canceled */}
      <path d="M86 152 C 108 168, 120 184, 124 204 M118 198 L124 205 L129 197" />
      <ellipse cx={128} cy={224} rx={42} ry={15} />
      <Label x={98} y={229}>canceled</Label>
      <path d="M96 232 L160 216" stroke="var(--color-red-pen)" opacity={0.7} />

      <Label x={70} y={268} size={14} red rotate={-3}>
        e o estorno??
      </Label>
    </Sketch>
  )
}

// Diagrama de estados do dia a dia de dev, com o loop eterno do bug.
export function DevFlowDoodle({ className }: DoodleProps) {
  return (
    <Sketch viewBox="0 0 170 250" className={className}>
      <circle cx={84} cy={12} r={6} fill="currentColor" />
      <path d="M84 20 C 82 26, 84 30, 84 36 M79 30 L84 37 L89 30" />

      <path d="M44 42 C 60 36, 110 36, 124 44 C 132 56, 120 66, 84 66 C 52 66, 36 58, 44 42 Z" />
      <Label x={68} y={58}>idea</Label>

      <path d="M84 66 C 86 76, 84 84, 84 92 M79 86 L84 93 L89 86" />
      <path d="M46 96 C 62 92, 108 92, 122 98 C 130 110, 118 120, 84 120 C 54 120, 38 112, 46 96 Z" />
      <Label x={66} y={112}>code</Label>

      <path d="M84 120 C 82 130, 84 138, 84 146 M79 140 L84 147 L89 140" />
      <path d="M44 150 C 60 146, 110 146, 124 152 C 132 164, 120 174, 84 174 C 52 174, 36 166, 44 150 Z" />
      <Label x={62} y={167}>deploy</Label>

      {/* deploy → bug → code, em vermelho */}
      <path
        d="M126 160 C 160 156, 162 112, 126 106 M132 100 L125 106 L133 112"
        stroke="var(--color-red-pen)"
      />
      <Label x={140} y={138} size={15} red>bug</Label>

      {/* fim (quem dera) */}
      <path d="M84 174 C 86 186, 84 194, 84 202 M79 196 L84 203 L89 196" strokeDasharray="3 4" />
      <circle cx={84} cy={214} r={8} />
      <circle cx={84} cy={214} r={4} fill="currentColor" />
      <Label x={100} y={236} size={14} red rotate={-4}>
        quem dera
      </Label>
      <path d="M98 230 C 94 226, 92 222, 92 220" stroke="var(--color-red-pen)" />
    </Sketch>
  )
}

// Mini modelo: clients 1—N invoices, com um "índice?" anotado.
export function MiniErDoodle({ className }: DoodleProps) {
  return (
    <Sketch viewBox="0 0 170 200" className={className}>
      <path d="M10 10 L84 8 L86 66 L12 68 Z" />
      <path d="M11 28 L85 26" />
      <Label x={18} y={24} size={16}>clients</Label>
      <Label x={18} y={46}>id (PK)</Label>
      <Label x={18} y={62}>cnpj</Label>

      <path d="M70 110 L160 107 L162 186 L72 188 Z" />
      <path d="M71 128 L161 126" />
      <Label x={78} y={124} size={16}>invoices</Label>
      <Label x={78} y={146}>client_id</Label>
      <Label x={78} y={162}>amount</Label>
      <Label x={78} y={178}>status</Label>

      <path d="M48 68 C 46 92, 54 110, 70 140" />
      <path d="M60 134 L70 140 M58 146 L70 140 M66 150 L70 140" />

      <path d="M66 146 C 54 150, 48 160, 40 168" stroke="var(--color-red-pen)" />
      <Label x={4} y={186} size={15} red rotate={-6}>
        índice?
      </Label>
    </Sketch>
  )
}

// Rabisco solto na lateral da página, fora da coluna de conteúdo.
// Só aparece em telas largas, onde a margem cabe o desenho sem criar rolagem.
export function GutterDoodle({ side, offset = 0, children }: { side: 'left' | 'right'; offset?: number; children: ReactNode }) {
  return (
    <div aria-hidden="true" className="pointer-events-none relative mx-auto hidden h-0 max-w-5xl min-[1400px]:block">
      <div
        className={`absolute w-[150px] opacity-70 ${side === 'left' ? 'right-full mr-6 -rotate-3' : 'left-full ml-6 rotate-2'}`}
        style={{ top: offset }}
      >
        {children}
      </div>
    </div>
  )
}
