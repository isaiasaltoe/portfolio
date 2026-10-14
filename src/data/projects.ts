import type { Localized } from '../i18n/translations'

export type Project = {
  title: string
  description: Localized
  tags: string[]
  repoUrl: string
  image: string
  imageAlt: Localized
}

export const projects: Project[] = [
  {
    title: 'Portfolio Pessoal',
    description: {
      pt: 'Criei este portfólio para ser a vitrine dos meus projetos e um ambiente prático para testar novas tecnologias. Ele roda em uma VPS dentro de um container Docker, com deploy automático configurado via GitHub Actions.',
      en: 'I built this portfolio as a showcase for my projects and a hands-on playground for new technologies. It runs on a VPS inside a Docker container, with automatic deploys set up through GitHub Actions.',
    },
    tags: ['React', 'TypeScript', 'Tailwind', 'Docker', 'Linux'],
    repoUrl: 'https://github.com/isaiasaltoe/portfolio',
    image: '/projects/portfolio.jpg',
    imageAlt: { pt: 'Captura de tela do portfolio', en: 'Screenshot of the portfolio' },
  },
  {
    title: 'SogeUFES',
    description: {
      pt: 'Desenvolvido para resolver um problema proposto por um professor: os alunos da UFES tinham dificuldade para organizar grupos de estudo e encontrar salas disponíveis. A solução, construída em grupo, é uma plataforma onde os estudantes criam grupos e reservam espaços de estudo.',
      en: 'Built to solve a problem proposed by a professor: UFES students struggled to organize study groups and find available rooms. Our solution, built as a team, is a platform where students create groups and book study spaces.',
    },
    tags: ['PHP', 'PostgreSQL', 'Figma'],
    repoUrl: 'https://github.com/isaiasaltoe/sogeufes',
    image: '/projects/sogeufes.jpg',
    imageAlt: { pt: 'Captura de tela do SogeUFES', en: 'Screenshot of SogeUFES' },
  },
]
