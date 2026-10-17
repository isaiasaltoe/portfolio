import type { Localized } from '../i18n/translations'

export type ServiceKind = 'sites' | 'systems' | 'automations' | 'support'

export type Service = {
  kind: ServiceKind
  title: Localized
  description: Localized
  items: Localized<string[]>
  idealFor: Localized
}

export const services: Service[] = [
  {
    kind: 'sites',
    title: { pt: 'Sites', en: 'Websites' },
    description: {
      pt: 'Sua empresa aparecendo pra quem procura no Google, com uma cara profissional que passa confiança e transforma visitas em clientes.',
      en: 'Your business showing up for people searching on Google, with a professional look that earns trust and turns visits into customers.',
    },
    items: {
      pt: [
        'Aparece no Google e no Maps: quem procura, te encontra',
        'Botão de WhatsApp: o cliente fala com você num toque',
        'Feito pro celular, onde seus clientes estão',
        'Domínio e hospedagem inclusos, sem dor de cabeça',
      ],
      en: [
        'Shows up on Google and Maps: people searching find you',
        'WhatsApp button: customers reach you in one tap',
        'Built for phones, where your customers are',
        'Domain and hosting included, no headaches',
      ],
    },
    idealFor: {
      pt: 'comércio, prestadores de serviço, clínicas, escritórios.',
      en: 'shops, service providers, clinics, offices.',
    },
  },
  {
    kind: 'systems',
    title: { pt: 'Sistemas sob medida', en: 'Custom systems' },
    description: {
      pt: 'Chega de caderno, planilha solta e informação perdida no WhatsApp. Um sistema simples, do jeito que você trabalha, pra economizar tempo e evitar erros.',
      en: 'No more notebooks, loose spreadsheets and information lost in WhatsApp. A simple system that fits how you work, saving time and avoiding mistakes.',
    },
    items: {
      pt: [
        'Agendamento online, sem ficar respondendo mensagem',
        'Cardápio digital com pedidos organizados',
        'Estoque, clientes e pedidos num só lugar',
        'Catálogo que já recebe pedidos de orçamento',
      ],
      en: [
        'Online booking, without answering every message',
        'Digital menu with organized orders',
        'Inventory, customers and orders in one place',
        'A catalog that collects quote requests for you',
      ],
    },
    idealFor: {
      pt: 'quem perde tempo com tarefas repetitivas ou informações desorganizadas.',
      en: 'anyone losing time to repetitive tasks or messy information.',
    },
  },
  {
    kind: 'automations',
    title: { pt: 'Automações', en: 'Automations' },
    description: {
      pt: 'As tarefas repetitivas se fazem sozinhas, e você ganha horas na semana pra focar no que faz o negócio crescer.',
      en: 'Repetitive tasks get done on their own, and you win back hours every week to focus on growing your business.',
    },
    items: {
      pt: [
        'Mensagens automáticas no WhatsApp',
        'Planilhas que se preenchem sozinhas',
        'Lembretes e cobranças sem esquecer ninguém',
        'Relatório de vendas direto no seu celular',
      ],
      en: [
        'Automatic WhatsApp messages',
        'Spreadsheets that fill themselves',
        'Reminders and billing that never miss anyone',
        'Sales reports straight to your phone',
      ],
    },
    idealFor: {
      pt: 'quem repete as mesmas tarefas todos os dias.',
      en: 'anyone repeating the same tasks every day.',
    },
  },
  {
    kind: 'support',
    title: { pt: 'Suporte e manutenção', en: 'Support and maintenance' },
    description: {
      pt: 'Depois de pronto, eu continuo cuidando. Você foca no seu negócio e não precisa se preocupar com tecnologia.',
      en: "Once it's live, I keep taking care of it. You focus on your business and never have to worry about tech.",
    },
    items: {
      pt: [
        'Site sempre no ar, seguro e atualizado',
        'E-mail profissional (você@suaempresa.com.br)',
        'Perfil no Google Meu Negócio bem configurado',
        'Suporte rápido quando precisar',
      ],
      en: [
        'Website always online, secure and up to date',
        'Professional email (you@yourbusiness.com)',
        'A well set-up Google Business Profile',
        'Quick support whenever you need it',
      ],
    },
    idealFor: {
      pt: 'quem não quer se preocupar com tecnologia.',
      en: "anyone who doesn't want to worry about tech.",
    },
  },
]
