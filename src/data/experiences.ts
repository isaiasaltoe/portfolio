import cinetica from '../assets/logos/cinetica.png'
import contera from '../assets/logos/contera.jpg'
import ufes from '../assets/logos/ufes.png'
import v360 from '../assets/logos/v360.jpg'
import type { Localized } from '../i18n/translations'

export type Experience = {
  title: Localized
  company: string
  period: Localized
  current?: boolean
  items: Localized<string[]>
  // logo do selo
  logo: string
}

const fullStack: Localized = { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' }

export const experiences: Experience[] = [
  {
    title: fullStack,
    company: 'V360',
    logo: v360,
    period: { pt: 'Fev 2026 – Atual', en: 'Feb 2026 – Present' },
    current: true,
    items: {
      pt: [
        'Integro o time de sustentação de uma plataforma SaaS de gestão fiscal, em contato diário com os clientes, tratando e documentando chamados técnicos com SLAs curtos e incidentes críticos de produção em algumas das maiores empresas do Brasil.',
        'Desenvolvo e mantenho integrações via APIs RESTful ativas e passivas entre a plataforma e o ERP SAP, com implementação no backend em Ruby on Rails e no SAP em ABAP, escrevendo testes automatizados com Minitest.',
        'Eliminamos 100% dos custos com terceirizados na manutenção do SAP ao internalizar no time a sustentação e a evolução das integrações em ABAP.',
        'Monitoro jobs assíncronos no Sidekiq e Redis e analiso dados de produção com consultas SQL no PostgreSQL, corrigindo os bugs encontrados e garantindo a estabilidade da plataforma.',
        'Desenvolvo e mantenho agentes, plugins e skills de IA para triagem de chamados e análise de logs, acelerando a resolução de chamados, e documento os ajustes aplicados quando os agentes erram.',
      ],
      en: [
        "Member of the production support team for a tax management SaaS platform, in daily contact with clients, handling and documenting technical tickets with tight SLAs and critical production incidents at some of Brazil's largest companies.",
        'Build and maintain inbound and outbound RESTful API integrations between the platform and SAP ERP, implementing the Ruby on Rails backend and the SAP side in ABAP, and writing automated tests with Minitest.',
        'Our team eliminated 100% of outsourced SAP maintenance costs by bringing the support and evolution of the ABAP integrations in-house.',
        'Monitor asynchronous jobs in Sidekiq and Redis and analyze production data with SQL queries in PostgreSQL, fixing the bugs found and keeping the platform stable.',
        'Build and maintain AI agents, plugins and skills for ticket triage and log analysis, speeding up ticket resolution, and document the adjustments applied when the agents get it wrong.',
      ],
    },
  },
  {
    title: fullStack,
    company: 'Contera IO',
    logo: contera,
    period: { pt: 'Ago 2025 – Jan 2026', en: 'Aug 2025 – Jan 2026' },
    items: {
      pt: [
        'Participei da implementação de novas funcionalidades e correções de bugs em uma aplicação Ruby on Rails, seguindo boas práticas de programação.',
        'Desenhei a UI/UX do novo site da empresa e contribuí para o desenvolvimento do front-end utilizando Next.js e Tailwind.',
      ],
      en: [
        'Took part in implementing new features and bug fixes in a Ruby on Rails application, following good programming practices.',
        "Designed the UI/UX of the company's new website and contributed to its front-end using Next.js and Tailwind.",
      ],
    },
  },
  {
    title: { pt: 'Desenvolvedor Full Stack (Voluntário)', en: 'Full Stack Developer (Volunteer)' },
    company: 'Cinética Jr',
    logo: cinetica,
    period: { pt: 'Jul 2025 – Jan 2026', en: 'Jul 2025 – Jan 2026' },
    items: {
      pt: [
        'Desenvolvi e mantive aplicações web com Next.js, PHP e PostgreSQL para clientes da empresa júnior, do levantamento de requisitos à entrega, em contato direto com os clientes.',
      ],
      en: [
        "Built and maintained web applications with Next.js, PHP and PostgreSQL for the junior enterprise's clients, from requirements gathering to delivery, in direct contact with them.",
      ],
    },
  },
  {
    title: { pt: 'Diretor de Marketing (Voluntário)', en: 'Marketing Director (Volunteer)' },
    company: 'CACCOMP UFES',
    logo: ufes,
    period: { pt: 'Ago 2023 – Ago 2025', en: 'Aug 2023 – Aug 2025' },
    items: {
      pt: [
        'Criei a identidade visual e os layouts de comunicação do centro acadêmico no Figma, aplicando princípios de UI/UX.',
      ],
      en: [
        'Created the visual identity and communication layouts for the student association in Figma, applying UI/UX principles.',
      ],
    },
  },
  {
    title: { pt: 'Ciência da Computação', en: 'Computer Science' },
    company: 'UFES',
    logo: ufes,
    period: { pt: 'Set 2022 – Atual', en: 'Sep 2022 – Present' },
    current: true,
    items: {
      pt: [
        'Escolhi Ciência da Computação pela afinidade que sempre tive com tecnologia e pelo gosto em resolver problemas, e a UFES pela base sólida e pela chance de aprender com profissionais de excelência.',
      ],
      en: [
        'I chose Computer Science because of my lifelong affinity for technology and love of solving problems, and UFES for its solid foundation and the chance to learn from excellent professionals.',
      ],
    },
  },
]
