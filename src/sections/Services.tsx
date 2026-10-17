import { IconBrandWhatsapp, IconRobot, IconSettings, IconTool, IconWorld, type Icon } from '@tabler/icons-react'
import { Book } from '../components/Book'
import { Section } from '../components/Section'
import { SketchButton } from '../components/SketchButton'
import { contacts } from '../data/contacts'
import { services, type Service, type ServiceKind } from '../data/services'
import { useLanguage } from '../i18n/useLanguage'

const icons: Record<ServiceKind, Icon> = {
  sites: IconWorld,
  systems: IconSettings,
  automations: IconRobot,
  support: IconTool,
}

// WhatsApp com a mensagem já escrita, pra quem chegou pelos serviços.
const whatsapp = contacts.find((contact) => contact.kind === 'whatsapp')?.href as string

export function Services() {
  const { t } = useLanguage()
  const whatsappLink = `${whatsapp}?text=${encodeURIComponent(t.services.whatsappMessage)}`

  return (
    <Section id="servicos" title={t.services.title}>
      {/* No desktop o livro avança sobre a coluna de margem da seção (vazia aqui) e fica centralizado. */}
      <div className="md:mr-[-220px]">
        <Book
          pages={services.map((service) => (
            <ServicePage key={service.kind} {...service} />
          ))}
          previousLabel={t.services.previous}
          nextLabel={t.services.next}
        />

        {/* O botão fica sozinho no centro; a anotação pendura ao lado dele em telas grandes e vai pra baixo nas menores. */}
        <div className="mt-14 flex justify-center">
          <div className="relative flex flex-col items-center">
            <SketchButton href={whatsappLink} external>
              <span className="flex items-center gap-2">
                <IconBrandWhatsapp size={22} stroke={1.5} />
                {t.services.cta}
              </span>
            </SketchButton>
            <span className="mt-4 max-w-64 -rotate-3 text-center font-note text-2xl leading-tight text-red-pen lg:absolute lg:top-1/2 lg:left-full lg:mt-0 lg:ml-8 lg:w-64 lg:max-w-none lg:-translate-y-1/4 lg:-rotate-6 lg:text-left">
              {t.services.ctaNote}
            </span>
          </div>
        </div>
      </div>
    </Section>
  )
}

// Uma página do livro: o que o serviço é, o que inclui e pra quem serve.
// Tudo em múltiplos de 24px (altura da linha e espaços), pra o texto cair sempre na pauta.
function ServicePage({ kind, title, description, items, idealFor }: Service) {
  const { language, t } = useLanguage()
  const Icon = icons[kind]

  return (
    <div className="text-base leading-6">
      <h3 className="flex items-center gap-2 text-xl leading-6">
        <Icon size={20} stroke={1.5} className="shrink-0" />
        {title[language]}
      </h3>
      <p className="mt-6">{description[language]}</p>
      <ul className="mt-6">
        {items[language].map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true">–</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 font-note text-lg leading-6 text-red-pen">
        {t.services.idealFor} {idealFor[language]}
      </p>
    </div>
  )
}
