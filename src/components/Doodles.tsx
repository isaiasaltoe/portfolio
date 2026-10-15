import { useState, type ReactNode } from 'react'

// Rabiscos de caderno nas margens, tirados de coisas que eu uso e estudo de verdade
// (gmanager, todolist e cálculo). São só decoração, então ficam
// escondidos dos leitores de tela.

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
function Label({
  x,
  y,
  size = 15,
  red,
  dark,
  rotate = 0,
  children,
}: {
  x: number
  y: number
  size?: number
  red?: boolean
  dark?: boolean
  rotate?: number
  children: ReactNode
}) {
  const fill = red ? 'var(--color-red-pen)' : dark ? 'var(--color-pencil)' : 'currentColor'
  return (
    <text x={x} y={y} fontSize={size} stroke="none" fill={fill} transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}>
      {children}
    </text>
  )
}

// Tabela desenhada à mão: caixa torta, nome em cima e os campos embaixo.
function Table({ x, y, w, name, fields }: { x: number; y: number; w: number; name: string; fields: string[] }) {
  const h = 22 + fields.length * 15
  return (
    <g>
      <path d={`M${x} ${y + 1} L${x + w} ${y - 1} L${x + w + 1} ${y + h} L${x + 1} ${y + h + 1} Z`} />
      <path d={`M${x} ${y + 20} L${x + w} ${y + 18}`} />
      <Label x={x + 6} y={y + 15} size={15} dark>
        {name}
      </Label>
      {fields.map((field, i) => (
        <Label key={field} x={x + 6} y={y + 34 + i * 15} size={13}>
          {field}
        </Label>
      ))}
    </g>
  )
}

// Seta com a pontinha no fim.
function Arrow({ d, head, red, dashed }: { d: string; head: string; red?: boolean; dashed?: boolean }) {
  const stroke = red ? 'var(--color-red-pen)' : undefined
  return (
    <g stroke={stroke}>
      <path d={d} strokeDasharray={dashed ? '4 4' : undefined} />
      <path d={head} />
    </g>
  )
}

// 1. Modelo relacional do gmanager (db/schema.rb).
export function GmanagerErDoodle({ className }: DoodleProps) {
  return (
    <Sketch viewBox="0 0 185 440" className={className}>
      <Label x={96} y={16} size={15} red rotate={-4}>
        gmanager/db
      </Label>
      <path d="M94 22 C 120 18, 150 18, 172 14" stroke="var(--color-red-pen)" />

      <Table x={8} y={34} w={80} name="teams" fields={['creator_id']} />
      <Table x={100} y={96} w={80} name="users" fields={['team_id', 'email']} />
      <Table x={8} y={138} w={80} name="clients" fields={['team_id', 'cnpj']} />
      <Table x={4} y={252} w={92} name="projects" fields={['client_id', 'total_value']} />
      <Table x={100} y={232} w={84} name="user_projects" fields={['user_id', 'project_id']} />
      <Table x={58} y={356} w={100} name="installments" fields={['due_date', 'status']} />

      {/* teams 1 — N users */}
      <path d="M88 52 C 110 54, 130 70, 138 96" />
      <path d="M131 88 L138 96 M142 86 L138 96 M137 85 L138 96" />
      {/* teams 1 — N clients */}
      <path d="M46 72 C 44 98, 48 118, 46 138" />
      <path d="M40 130 L46 138 M52 130 L46 138" />
      {/* clients 1 — N projects */}
      <path d="M46 190 C 50 214, 46 234, 50 252" />
      <path d="M44 244 L50 252 M56 244 L50 252" />
      {/* users N — N projects pela tabela pivô */}
      <path d="M140 150 C 142 182, 140 210, 142 232" />
      <path d="M96 290 C 98 284, 98 276, 100 270" />
      {/* projects 1 — N installments */}
      <path d="M50 304 C 56 326, 80 340, 96 356" />
      <path d="M86 352 L96 356 M94 346 L96 356" />

      <Label x={118} y={312} size={14} red rotate={-6}>
        unique ✓
      </Label>
      <Label x={18} y={432} size={15} red rotate={-3}>
        parcelas!
      </Label>
      <path d="M64 426 C 70 420, 76 418, 82 418" stroke="var(--color-red-pen)" />
    </Sketch>
  )
}

// 2. Estados do convite do gmanager (enum :status).
export function InviteStatesDoodle({ className }: DoodleProps) {
  return (
    <Sketch viewBox="0 0 180 240" className={className}>
      <Label x={70} y={18} size={14} red rotate={-3}>
        enum :status
      </Label>

      <circle cx={34} cy={22} r={6} fill="currentColor" />
      <Arrow d="M36 30 C 40 42, 44 50, 50 60" head="M44 55 L50 61 L53 53" />

      <ellipse cx={70} cy={82} rx={44} ry={17} />
      <Label x={40} y={87}>pendente</Label>

      {/* aceito */}
      <Arrow d="M48 98 C 36 120, 32 140, 34 158" head="M28 151 L34 159 L40 151" />
      <Label x={6} y={132} size={12}>accept</Label>
      <ellipse cx={42} cy={180} rx={36} ry={16} />
      <ellipse cx={42} cy={180} rx={30} ry={11} opacity={0.5} />
      <Label x={20} y={185}>aceito</Label>

      {/* recusado */}
      <Arrow d="M96 96 C 118 116, 130 136, 134 156" head="M128 150 L134 157 L139 149" />
      <Label x={124} y={124} size={12}>decline</Label>
      <ellipse cx={134} cy={180} rx={42} ry={16} />
      <Label x={104} y={185}>recusado</Label>

      <Label x={8} y={226} size={14} red rotate={-2}>
        1 time por user só!
      </Label>
    </Sketch>
  )
}

// 3. User#leave_team do gmanager, rabiscado.
export function LeaveTeamDoodle({ className }: DoodleProps) {
  const lines: [number, string][] = [
    [0, 'def leave_team'],
    [1, 'if id == team.creator_id'],
    [2, 'team.destroy!'],
    [1, 'else'],
    [2, 'update!(team: nil)'],
    [1, 'end'],
    [0, 'end'],
  ]
  return (
    <Sketch viewBox="0 0 190 200" className={className}>
      <Label x={8} y={16} size={13} red>
        user.rb
      </Label>
      {lines.map(([indent, code], i) => (
        <Label key={i} x={10 + indent * 14} y={40 + i * 19} size={15} dark={indent === 0}>
          {code}
        </Label>
      ))}
      {/* sublinhado e recado no destroy! */}
      <path d="M38 81 C 60 83, 80 81, 104 82" stroke="var(--color-red-pen)" />
      <Arrow d="M110 84 C 130 100, 140 150, 128 172" head="M122 166 L128 173 L133 165" red />
      <Label x={60} y={192} size={14} red rotate={-3}>
        admin saiu = time some
      </Label>
    </Sketch>
  )
}

// 4. Validação do todolist, com a refatoração anotada em vermelho.
export function WeightValidationDoodle({ className }: DoodleProps) {
  const lines: [number, string][] = [
    [0, 'validate :between_one_and_five'],
    [0, 'def between_one_and_five'],
    [1, 'return if weight.nil?'],
    [1, 'if weight < 1 || weight > 5'],
    [2, 'errors.add(:weight, ...)'],
    [1, 'end'],
    [0, 'end'],
  ]
  return (
    <Sketch viewBox="0 0 200 210" className={className}>
      <Label x={8} y={16} size={13} red>
        task.rb
      </Label>
      {lines.map(([indent, code], i) => (
        <Label key={i} x={8 + indent * 14} y={38 + i * 19} size={14} dark={indent === 0}>
          {code}
        </Label>
      ))}
      {/* risca a condição e sugere o between? */}
      <path d="M36 91 C 80 88, 130 92, 186 89" stroke="var(--color-red-pen)" />
      <Arrow d="M150 96 C 168 130, 160 168, 140 182" head="M146 176 L139 183 L148 186" red />
      <Label x={10} y={198} size={14} red rotate={-2}>
        unless weight.between?(1, 5)
      </Label>
    </Sketch>
  )
}

// 5. Integrais simples de Cálculo.
export function IntegralsDoodle({ className }: DoodleProps) {
  return (
    <Sketch viewBox="0 0 180 210" className={className}>
      {/* ∫₀¹ x² dx = x³/3 |₀¹ = 1/3 */}
      <Label x={6} y={44} size={34} dark>∫</Label>
      <Label x={22} y={20} size={11}>1</Label>
      <Label x={20} y={50} size={11}>0</Label>
      <Label x={30} y={38} size={17}>x² dx =</Label>
      <Label x={96} y={30} size={15}>x³</Label>
      <path d="M94 34 L114 33" />
      <Label x={100} y={48} size={15}>3</Label>
      <path d="M120 20 L120 50" />
      <Label x={123} y={22} size={10}>1</Label>
      <Label x={123} y={52} size={10}>0</Label>
      <Label x={134} y={40} size={17}>= ⅓</Label>
      <ellipse cx={160} cy={35} rx={14} ry={13} stroke="var(--color-red-pen)" />

      {/* ∫ eˣ dx */}
      <Label x={6} y={102} size={30} dark>∫</Label>
      <Label x={24} y={96} size={17}>eˣ dx = eˣ + C</Label>

      {/* ∫ 1/x dx */}
      <Label x={6} y={152} size={30} dark>∫</Label>
      <Label x={26} y={138} size={14}>1</Label>
      <path d="M24 142 L36 141" />
      <Label x={26} y={155} size={14}>x</Label>
      <Label x={42} y={146} size={17}>dx = ln|x| + C</Label>

      <Label x={70} y={192} size={18} red rotate={-6}>
        não esquece o +C!
      </Label>
      <Arrow d="M150 180 C 160 170, 162 160, 158 154" head="M153 160 L158 153 L163 160" red />
    </Sketch>
  )
}

// Número sorteado entre min e max.
function between(min: number, max: number) {
  return min + Math.random() * (max - min)
}

// Rabisco solto na lateral da página, fora da coluna de conteúdo.
// A cada visita o lado, a altura e a inclinação são sorteados, para parecer
// anotação feita na hora e não um layout montado. O sorteio fica no
// inicializador do useState, então roda só uma vez e não "pula" a cada render.
//
// A largura acompanha o espaço livre na margem: (100vw - 1024px) / 2 é o que
// sobra de cada lado da coluna max-w-5xl. Assim o desenho cabe em notebooks
// (ex.: MacBook com 1280–1512px de largura útil) em vez de só em monitores grandes.
export function GutterDoodle({ side, offset = 0, children }: { side?: 'left' | 'right'; offset?: number; children: ReactNode }) {
  const [layout] = useState(() => ({
    side: side ?? (Math.random() < 0.5 ? 'left' : 'right'),
    top: offset + between(-70, 70),
    rotate: between(-6, 6),
    // entra um pouco no padding da coluna (px-6 = 24px), nunca além da tela
    inset: between(-14, -4),
  }))

  return (
    <div aria-hidden="true" className="pointer-events-none relative mx-auto hidden h-0 max-w-5xl min-[1240px]:block">
      <div
        className={`absolute opacity-75 ${layout.side === 'left' ? 'right-full' : 'left-full'}`}
        style={{
          top: layout.top,
          width: 'clamp(104px, calc(50vw - 520px), 190px)',
          [layout.side === 'left' ? 'marginRight' : 'marginLeft']: layout.inset,
          transform: `rotate(${layout.rotate}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

// Coração de caneta vermelha com as iniciais, como em capa de caderno.
export function HeartDoodle({ className }: DoodleProps) {
  return (
    <Sketch viewBox="0 0 120 110" className={className}>
      <g stroke="var(--color-red-pen)" strokeWidth={2}>
        <path d="M60 98 C 30 76, 8 58, 10 34 C 12 14, 38 6, 52 22 C 56 26, 58 30, 60 34 C 62 28, 68 18, 80 14 C 100 10, 114 24, 110 44 C 106 64, 84 80, 60 98 Z" />
        <path d="M58 92 C 34 74, 14 56, 16 36" opacity={0.5} />
      </g>
      {/* letras traçadas à mão (na fonte de anotação o L parecia um C) */}
      <g stroke="var(--color-red-pen)" strokeWidth={2.4}>
        {/* I */}
        <path d="M35 38 L36 68 M29 38 L42 37 M30 68 L42 68" />
        {/* + */}
        <path d="M53 53 L67 52 M60 46 L60 60" />
        {/* L */}
        <path d="M76 37 L77 68 L93 67" />
      </g>
    </Sketch>
  )
}
