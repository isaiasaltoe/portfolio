import { useEffect, useState, type ReactNode } from 'react'
import { LanguageContext } from './language-context'
import { translations, type Language } from './translations'

const STORAGE_KEY = 'language'

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    // localStorage pode estar bloqueado (aba anônima, por exemplo)
  }
  return 'pt'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  // Sincroniza com o mundo fora do React: atributo lang do <html>, meta description e localStorage.
  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    document.querySelector('meta[name="description"]')?.setAttribute('content', translations[language].meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // sem problema, só não lembra a escolha
    }
  }, [language])

  return (
    <LanguageContext value={{ language, t: translations[language], setLanguage }}>
      {children}
    </LanguageContext>
  )
}
