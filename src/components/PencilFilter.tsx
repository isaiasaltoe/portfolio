// Filtro SVG que deixa os traços tremidos, como feitos à mão.
// Usado no CSS por `filter: url(#pencil)`.
export function PencilFilter() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <filter id="pencil">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="3" />
        <feDisplacementMap in="SourceGraphic" scale="4" />
      </filter>
    </svg>
  )
}
