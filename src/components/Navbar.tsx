import { useEffect, useState } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { useLanguage } from '../i18n/useLanguage'
import { LanguageToggle } from './LanguageToggle'

export function Navbar() {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Mostra a linha de baixo e compacta a navbar quando a página rola.
  // A navbar é sticky (ocupa espaço no fluxo), então compactar muda a altura
  // da página em ~40px e o scroll anchoring do browser ajusta o scrollY junto.
  // Com um limiar único isso vira um loop (compacta → scrollY cai → expande...).
  // Por isso usamos histerese: limiares de entrada e saída bem separados.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled((prev) => (prev ? y > 8 : y > 80))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#projetos', label: t.nav.projects },
    { href: '#experiencias', label: t.nav.experiences },
    { href: '#sobre', label: t.nav.about },
    { href: '#contato', label: t.nav.contact },
  ]

  return (
    <header
      className={`sticky top-0 z-20 border-b bg-paper/95 transition-all duration-300 ${
        scrolled ? 'border-smudge py-3' : 'border-transparent py-6 md:py-8'
      }`}
    >
      <nav className="relative mx-auto flex max-w-5xl items-center justify-center px-6">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t.menu.close : t.menu.open}
          aria-expanded={menuOpen}
          className="mr-auto p-1 text-graphite md:hidden"
        >
          {menuOpen ? <IconX stroke={1.5} /> : <IconMenu2 stroke={1.5} />}
        </button>

        <ul className="hidden items-center gap-10 text-xl md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="pen-circle-hover text-pencil no-underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="absolute right-6">
          <LanguageToggle />
        </div>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col items-center gap-2 pt-4 text-xl md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className="block py-1 text-pencil no-underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
