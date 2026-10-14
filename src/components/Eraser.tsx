// Borracha desenhada à mão: corpo rosa com a capa de papel.
export function Eraser({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 30"
      className={className}
      fill="none"
      stroke="var(--color-graphite)"
      strokeWidth="2"
      strokeLinejoin="round"
      style={{ filter: 'url(#pencil)' }}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="60" height="22" rx="5" fill="var(--color-eraser)" />
      <path d="M8 22 Q 12 25, 18 24" stroke="var(--color-graphite)" strokeWidth="1" opacity="0.5" />
      <rect x="24" y="3" width="38" height="24" rx="2" fill="var(--color-white)" />
      <path d="M31 10 H 55 M31 15 H 51 M31 20 H 53" strokeWidth="1" stroke="var(--color-smudge)" />
    </svg>
  )
}
