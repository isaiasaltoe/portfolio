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
        'Manutenção e evolução de um SaaS de gestão de notas fiscais em Ruby on Rails, garantindo estabilidade e melhoria contínua da plataforma.',
        'Gestão e acompanhamento dos serviços de colaboradores terceirizados em integrações SAP, assegurando qualidade e alinhamento das entregas.',
        'Análises técnicas para diagnóstico e resolução de bugs, contribuindo para a confiabilidade e a experiência do usuário.',
      ],
      en: [
        'Maintaining and evolving an invoice management SaaS built with Ruby on Rails, keeping the platform stable and continuously improving.',
        'Managing and following up on outsourced partners working on SAP integrations, ensuring quality and aligned deliveries.',
        'Running technical analyses to diagnose and fix bugs, improving reliability and user experience.',
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
        'Implementação de novas funcionalidades e correção de bugs em uma aplicação Ruby on Rails, seguindo boas práticas.',
        'Desenhei a UI/UX do novo site da empresa e contribuí com o front-end em Next.js e Tailwind.',
      ],
      en: [
        'Built new features and fixed bugs in a Ruby on Rails application, following good practices.',
        "Designed the UI/UX of the company's new website and helped build its front-end with Next.js and Tailwind.",
      ],
    },
  },
  {
    title: fullStack,
    company: 'Cinética Jr',
    logo: cinetica,
    period: { pt: 'Jul 2025 – Jan 2026', en: 'Jul 2025 – Jan 2026' },
    items: {
      pt: [
        'Desenvolvimento e manutenção de projetos com Next.js, JavaScript, HTML, CSS, PHP, PostgreSQL e Bootstrap.',
        'Trabalho próximo a uma equipe multidisciplinar, aprimorando trabalho em equipe e comunicação.',
        'Levantamento e análise de requisitos, traduzindo necessidades dos clientes em soluções técnicas.',
        'Contato direto com clientes, gerenciando expectativas e garantindo a satisfação.',
      ],
      en: [
        'Built and maintained projects with Next.js, JavaScript, HTML, CSS, PHP, PostgreSQL and Bootstrap.',
        'Worked closely with a multidisciplinary team, sharpening teamwork and communication skills.',
        "Gathered and analyzed requirements, turning clients' needs into practical technical solutions.",
        'Worked directly with clients, managing expectations and ensuring satisfaction.',
      ],
    },
  },
  {
    title: { pt: 'Diretor de Marketing', en: 'Marketing Director' },
    company: 'CACCOMP UFES',
    logo: ufes,
    period: { pt: 'Ago 2023 – Ago 2025', en: 'Aug 2023 – Aug 2025' },
    items: {
      pt: [
        'Design focado em experiência do usuário, identidade visual e comunicação, aplicando princípios de UI/UX no Figma para criar layouts intuitivos para diferentes públicos.',
      ],
      en: [
        'Design focused on user experience, visual identity and communication, applying UI/UX principles in Figma to create intuitive layouts for different audiences.',
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
