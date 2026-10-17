const pt = {
  meta: {
    description: 'Crio sites, sistemas sob medida e automações para pequenas empresas. Me chama no WhatsApp e peça um orçamento sem compromisso.',
  },
  nav: {
    services: 'Serviços',
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
      'Desenvolvedor Full Stack',
      'Estudante de Ciência da Computação na UFES',
      'Eterno estudante',
      'Com conhecimentos em SAP ABAP',
      'Experiência em fintechs',
      'Dev com mentalidade de produto',
    ],
    bio: 'Presto serviços diversos de tecnologia para pequenas e médias empresas, de sites comerciais a sistemas web completos, de ponta a ponta: do desenho da interface ao deploy.\nSou desenvolvedor Full Stack e curso Ciência da Computação na UFES.',
    cta: 'ver serviços →',
    projectsLink: 'ou dá uma olhada nos meus projetos',
    ctaNote: '← clica aqui!',
    photoAlt: 'Desenho do rosto do Isaías, de cabelo cacheado e óculos, em traço de marcador',
    photoNote: 'esse sou eu, oi!',
  },
  services: {
    title: 'Serviços',
    previous: 'Página anterior',
    next: 'Próxima página',
    idealFor: 'Ideal para:',
    cta: 'Vamos conversar?',
    ctaNote: 'me conta o que você precisa e eu te passo um orçamento sob medida!',
    whatsappMessage: 'Olá, Isaías! Vi seu site e gostaria de conversar sobre um projeto.',
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
    description: 'I build websites, custom systems and automations for small businesses. Message me on WhatsApp for a free quote.',
  },
  nav: {
    services: 'Services',
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
      'Full Stack Developer',
      'Computer Science Student at UFES',
      'Forever a student',
      'Knowledge of SAP ABAP',
      'Fintech experience',
      'Product-minded developer',
    ],
    bio: "I offer a wide range of tech services for small and medium-sized businesses, from business websites to complete web systems, end to end: from interface design to deploy.\nI'm a Full Stack developer and I study Computer Science at UFES.",
    cta: 'see services →',
    projectsLink: 'or take a look at my projects',
    ctaNote: '← click here!',
    photoAlt: 'Marker doodle of Isaías, with curly hair and glasses',
    photoNote: "that's me, hi!",
  },
  services: {
    title: 'Services',
    previous: 'Previous page',
    next: 'Next page',
    idealFor: 'Great for:',
    cta: "Let's talk?",
    ctaNote: "tell me what you need and I'll send you a tailored quote!",
    whatsappMessage: "Hi Isaías! I saw your website and I'd like to talk about a project.",
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
