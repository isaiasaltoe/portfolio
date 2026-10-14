import portrait from '../assets/eu-desenho.svg'
import { EraserPhrases } from '../components/EraserPhrases'
import { SketchButton } from '../components/SketchButton'
import { useLanguage } from '../i18n/useLanguage'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="mx-auto grid max-w-5xl items-center gap-14 px-6 pt-12 pb-12 md:grid-cols-[1fr_240px] md:pt-20">
      <div>
        <h1 className="text-5xl md:text-7xl">Isaías Altoé</h1>

        <p className="mt-6 text-2xl md:text-3xl">
          <EraserPhrases phrases={t.hero.phrases} />
        </p>

        <p className="mt-8 max-w-2xl text-xl">
          {t.hero.bioBefore}{' '}
          <a href="https://v360.io/" target="_blank" rel="noopener noreferrer">
            V360
          </a>
          {t.hero.bioAfter}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <SketchButton href="#projetos">{t.hero.cta}</SketchButton>
          <span className="-rotate-6 font-note text-2xl text-red-pen">{t.hero.ctaNote}</span>
        </div>
      </div>

      {/* Autorretrato desenhado a lápis, solto no papel */}
      <figure className="relative mx-auto w-60 md:w-full">
        <img src={portrait} alt={t.hero.photoAlt} className="w-full" />
        <figcaption className="absolute -top-2 -right-4 rotate-6 font-note text-2xl text-red-pen">
          {t.hero.photoNote}
        </figcaption>
      </figure>
    </section>
  )
}
