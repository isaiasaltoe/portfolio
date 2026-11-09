const pt = {
  meta: {
    description: 'Estudante de Ciência da Computação na UFES e desenvolvedor Full Stack. Conheça meus projetos acadêmicos, minha trajetória e como falar comigo.',
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
    // a bio tem o link da V360 no meio: texto antes, nome do link e texto depois
    bioBefore: 'Sou estudante de Ciência da Computação na UFES e sou desenvolvedor Full Stack na',
    bioAfter:
      '.\nAtualmente tenho direcionado meus estudos à Inteligência Artificial, desde os princípios de aprendizado de máquina até orquestração de agentes de IA, ajuste nos harness e criação de skills.',
    cta: 'ver projetos →',
    journeyLink: 'ou conheça minha trajetória',
    ctaNote: '← clica aqui!',
    photoAlt: 'Desenho do rosto do Isaías, de cabelo cacheado e óculos, em traço de marcador',
    photoNote: 'esse sou eu, oi!',
  },
  projects: {
    title: 'Projetos',
    note: 'feitos na faculdade e fora dela',
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
    // {age} é trocado pela idade atual
    intro:
      'Sou natural de Vargem Alta, tenho {age} anos e estou concluindo a graduação em Ciência da Computação na UFES.',
    growth:
      'Desde a minha passagem pela Cinética Jr, empresa júnior da minha faculdade, em julho de 2025, venho evoluindo constantemente minhas habilidades: técnicas, de comunicação, de entendimento de produto e afins.',
    now: 'Ultimamente, venho equilibrando a vida entre concluir o TCC, continuar entregando a todo vapor no trabalho e aprofundar ainda mais meus conhecimentos, seja em estudos formais, como cursos, livros e aulas, ou em projetos práticos que ajudam pessoas de verdade.',
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
    description: 'Computer Science student at UFES and Full Stack developer. Check out my academic projects, my journey and how to reach me.',
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
    bioBefore: "I'm a Computer Science student at UFES and a Full Stack developer at",
    bioAfter:
      '.\nLately I have been focusing my studies on Artificial Intelligence, from the principles of machine learning to AI agent orchestration, harness tuning and skill creation.',
    cta: 'see projects →',
    journeyLink: 'or get to know my journey',
    ctaNote: '← click here!',
    photoAlt: 'Marker doodle of Isaías, with curly hair and glasses',
    photoNote: "that's me, hi!",
  },
  projects: {
    title: 'Projects',
    note: 'built in class and beyond',
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
    intro:
      "I'm from Vargem Alta, I'm {age} years old and I'm finishing my Computer Science degree at UFES.",
    growth:
      "Since my time at Cinética Jr, my university's junior enterprise, starting in July 2025, I've been constantly growing my skills: technical, communication, product understanding and more.",
    now: "Lately, I've been balancing finishing my thesis, delivering at full speed at work and deepening my knowledge even further, whether through formal study, like courses, books and classes, or through hands-on projects that genuinely help people.",
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
