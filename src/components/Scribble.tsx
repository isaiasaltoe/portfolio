// Linha ondulada de lápis, usada como sublinhado e divisória.
export function Scribble({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 12"
      preserveAspectRatio="none"
      className={`h-3 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      style={{ filter: 'url(#pencil)' }}
      aria-hidden="true"
    >
      <path d="M2 6 C 80 2, 160 10, 240 5 S 360 3, 398 7" />
    </svg>
  )
}
