import { createContext } from 'react'
import type { Language, Translation } from './translations'

type LanguageContextValue = {
  language: Language
  t: Translation
  setLanguage: (language: Language) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
