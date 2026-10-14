const pt = {
  meta: {
    description: 'Portfólio de Isaías Altoé, desenvolvedor Full Stack e estudante de Ciência da Computação na UFES.',
  },
  nav: {
    projects: 'Projetos',
    experiences: 'Experiências',
    about: 'Sobre mim',
    contact: 'Contato',
  },
  menu: {
    open: 'Abrir menu',
    close: 'Fechar menu',
  },
  language: {
    switchTo: 'Switch to English',
  },
  hero: {
    phrases: [
      'Estudante de Ciência da Computação na UFES',
      'Desenvolvedor Full Stack',
      'Eterno estudante',
      'Com conhecimentos em SAP ABAP',
      'Experiência em fintechs',
      'Dev com mentalidade de produto',
    ],
    bioBefore: 'Sou estudante de Ciência da Computação na UFES e desenvolvedor Full Stack na',
    bioAfter: '. Gosto de solucionar (e às vezes criar) problemas.',
    cta: 'ver projetos →',
    ctaNote: '← clica aqui!',
    photoAlt: 'Desenho do rosto do Isaías, de cabelo cacheado e óculos, em traço de marcador',
    photoNote: 'esse sou eu, oi!',
  },
  projects: {
    title: 'Projetos',
    note: 'a sua ideia pode ser o próximo!',
    repo: 'ver repositório',
    previous: 'Projeto anterior',
    next: 'Próximo projeto',
    hint: 'arrasta pro lado',
  },
  github: {
    title: 'Enquanto isso, no GitHub...',
    introBefore:
      'Os projetos de que mais me orgulho foram feitos para as empresas em que trabalhei e não aparecem na seção acima. Se acredita que posso contribuir com algo, entre em',
    introLink: 'contato',
    total: 'contribuições no último ano',
    busiest: 'dia mais agitado',
    less: 'menos',
    more: 'mais',
    profile: 'ver perfil →',
  },
  experiences: {
    title: 'Experiências',
    note: 'do mais recente pro mais antigo ↓',
    current: '← agora',
  },
  about: {
    title: 'Sobre mim',
    intro: 'Sou desenvolvedor Full Stack e gosto de transformar problemas reais em software que funciona.',
    services:
      'Presto serviços diversos de tecnologia, de sites comerciais a sistemas web completos, de ponta a ponta: do desenho da interface ao deploy.',
    contactBefore: 'Tem uma ideia ou um problema pra resolver? Eu adoraria ouvir o que você tem a dizer. É só',
    contactLink: 'me mandar uma mensagem',
    contactAfter: '!',
    whatsappMessage: 'Oi Isaías, tudo bem? Eu tenho uma ideia e queria conversar sobre ela.',
    techTitle: 'Minhas principais tecnologias',
    learning: '← aprendendo',
  },
  contact: {
    title: 'Contato',
    intro: 'Bora conversar? Me encontra em qualquer um desses:',
    resume: 'Currículo',
    notebookNote: 'caso queira anotar algo',
    notebookLabel: 'Caderneta para desenhar ou anotar',
    pencil: 'Lápis',
    eraser: 'Borracha',
    clear: 'limpar',
    download: 'salvar',
    watermark: 'feito em https://altoe.dev',
  },
  footer: 'Todos os direitos reservados.',
}

// `typeof pt` obriga o inglês a ter exatamente as mesmas chaves do português.
const en: typeof pt = {
  meta: {
    description: "Isaías Altoé's portfolio, Full Stack developer and Computer Science student at UFES.",
  },
  nav: {
    projects: 'Projects',
    experiences: 'Experience',
    about: 'About me',
    contact: 'Contact',
  },
  menu: {
    open: 'Open menu',
    close: 'Close menu',
  },
  language: {
    switchTo: 'Mudar para português',
  },
  hero: {
    phrases: [
      'Computer Science Student at UFES',
      'Full Stack Developer',
      'Forever a student',
      'Knowledge of SAP ABAP',
      'Fintech experience',
      'Product-minded developer',
    ],
    bioBefore: "I'm a Computer Science student at UFES and a Full Stack Developer at",
    bioAfter: '. I like solving (and sometimes creating) problems.',
    cta: 'see projects →',
    ctaNote: '← click here!',
    photoAlt: 'Marker doodle of Isaías, with curly hair and glasses',
    photoNote: "that's me, hi!",
  },
  projects: {
    title: 'Projects',
    note: 'your idea could be next!',
    repo: 'see repository',
    previous: 'Previous project',
    next: 'Next project',
    hint: 'swipe sideways',
  },
  github: {
    title: 'Meanwhile, on GitHub...',
    introBefore:
      "The projects I'm proudest of were built for the companies I've worked for, so they don't show up above. If you think I can help with something, get in",
    introLink: 'touch',
    total: 'contributions in the last year',
    busiest: 'busiest day',
    less: 'less',
    more: 'more',
    profile: 'see profile →',
  },
  experiences: {
    title: 'Experience',
    note: 'newest to oldest ↓',
    current: '← now',
  },
  about: {
    title: 'About me',
    intro: "I'm a Full Stack developer who enjoys turning real problems into software that works.",
    services:
      'I offer a wide range of tech services, from business websites to complete web systems, end to end: from interface design to deploy.',
    contactBefore: "Got an idea or a problem to solve? I'd love to hear what you have to say. Just",
    contactLink: 'send me a message',
    contactAfter: '!',
    whatsappMessage: "Hi Isaías, how are you? I have an idea and I'd like to talk about it.",
    techTitle: 'My main technologies',
    learning: '← learning',
  },
  contact: {
    title: 'Contact',
    intro: "Let's talk? Find me on any of these:",
    resume: 'Resume',
    notebookNote: 'in case you want to jot something down',
    notebookLabel: 'Notebook to draw or take notes',
    pencil: 'Pencil',
    eraser: 'Eraser',
    clear: 'clear',
    download: 'save',
    watermark: 'made at https://altoe.dev',
  },
  footer: 'All rights reserved.',
}

export const translations = { pt, en }

export type Language = keyof typeof translations
export type Translation = typeof pt

// Texto que existe nos dois idiomas, usado nos arquivos de src/data/.
export type Localized<T = string> = Record<Language, T>
