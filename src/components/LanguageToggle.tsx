import { Fragment } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import type { Language } from '../i18n/translations'

const languages: Language[] = ['pt', 'en']

// "PT / EN" com o idioma atual circulado de caneta vermelha (desenhado
// com o mesmo tempo do hover dos links da navbar).
export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div role="group" aria-label="Idioma / Language" className="flex items-center gap-1.5 text-lg">
      {languages.map((lang, i) => (
        <Fragment key={lang}>
          {i > 0 && <span className="text-smudge">/</span>}
          <button
            type="button"
            onClick={() => setLanguage(lang)}
            aria-pressed={language === lang}
            className={`pen-circle-pressed px-1 transition-colors ${
              language === lang ? 'text-graphite' : 'text-pencil-light hover:text-graphite'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        </Fragment>
      ))}
    </div>
  )
}
