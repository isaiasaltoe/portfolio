import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Fontes servidas pelo próprio site (antes vinham do Google Fonts, que alguns
// navegadores/bloqueadores barram e o site caía na fonte padrão).
import '@fontsource/architects-daughter/400.css'
import '@fontsource/patrick-hand/400.css'
import '@fontsource/caveat/400.css'
import '@fontsource/caveat/700.css'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
