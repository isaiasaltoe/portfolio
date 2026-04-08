// "use client" é necessário porque usamos hooks do React (useRef, useEffect, useState)
// que só funcionam no lado do cliente (browser)
"use client";

import { useEffect, useRef, useState } from "react";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
};

const experiences: Experience[] = [
  {
    title: "Desenvolvedor Full Stack",
    company: "V360",
    period: "Fev 2026 - Atual",
    description:
      "- Realizo a manutenção e evolução de um SaaS de gestão de notas fiscais desenvolvido em Ruby on Rails na V360, garantindo a estabilidade e a melhoria contínua da plataforma.\n- Atuo na gestão e acompanhamento dos serviços prestados por colaboradores terceirizados em integrações SAP, assegurando a qualidade e o alinhamento das entregas.\n- Conduzo análises técnicas para diagnóstico e resolução de bugs, contribuindo para a confiabilidade e a experiência do usuário na plataforma.",
  },
  {
    title: "Desenvolvedor Voluntário Full Stack",
    company: "Cinética Jr",
    period: "Jul 2025 - Fev 2026",
    description:
      "- Desenvolvi e mantive projetos utilizando Next.js, JavaScript, HTML, CSS, PHP, PostgreSQL e Bootstrap.\n- Colaborei de perto com uma equipe multidisciplinar, aprimorando minhas habilidades de trabalho em equipe e comunicação.\n- Realizei levantamento e análise de requisitos, traduzindo as necessidades dos clientes em soluções técnicas práticas.\n- Interagi diretamente com os clientes, aprimorando minha capacidade de gerenciar expectativas e garantir a satisfação.",
  },
  {
    title: "Desenvolvedor Full Stack",
    company: "Contera IO",
    period: "Ago 2025 - Dez 2025",
    description:
      "- Auxiliei na implementação de novas funcionalidades e correções de bugs em uma aplicação Ruby on Rails, seguindo boas práticas de programação.\n- Desenhei a UI/UX do novo site da empresa e contribuí para o desenvolvimento do front-end utilizando Next.js e Tailwind.",
  },
  {
    title: "Diretor de Marketing",
    company: "CACCOMP UFES",
    period: "Jul 2024 - Dez 2025",
    description:
      "Como diretor de marketing, trabalhei como design focado em experiência do usuário, identidade visual e comunicação eficaz. Apliquei princípios de UI/UX para garantir que layouts fossem intuitivos e visualmente atraentes para diferentes públicos. Usando ferramentas como Figma.",
  },
];

// Hook que detecta quando um elemento entra na tela (viewport)
function useRevealOnScroll() {
  const ref = useRef<HTMLDivElement>(null); // referência ao elemento do DOM
  const [isVisible, setIsVisible] = useState(false); // controla se o elemento já apareceu

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // IntersectionObserver observa quando o elemento entra/sai da tela
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting = true quando o elemento está visível na tela
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // para de observar depois que apareceu (anima só 1 vez)
        }
      },
      { threshold: 0.2 } // dispara quando 20% do elemento está visível
    );

    observer.observe(element); // começa a observar o elemento

    // cleanup: para de observar se o componente for desmontado
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function ExperienceCard({
  title,
  company,
  period,
  description,
  side,
}: Experience & { side: "left" | "right" }) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref} // conecta o hook ao elemento
      className={`bg-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.5)] p-6 transition-all duration-700 ${
        side === "left"
          ? "border-r-4 border-[#747FE0]"
          : "border-l-4 border-[#747FE0]"
      } ${
        isVisible
          ? "opacity-100 translate-x-0" // estado final: visível e na posição original
          : side === "left"
            ? "opacity-0 -translate-x-10" // cards da esquerda entram deslizando da esquerda
            : "opacity-0 translate-x-10"  // cards da direita entram deslizando da direita
      }`}
    >
      <div
        className={`flex flex-col mb-3 ${
          side === "left" ? "items-start text-left" : "items-start text-left"
        }`}
      >
        <h3 className="text-lg font-semibold text-[#1a1a2e]">
          {title} <span className="text-[#747FE0]"> {company}</span>
        </h3>
        <span className="text-sm text-[#525F7F] mt-1">{period}</span>
      </div>
      <p
        className={`text-[#525F7F] text-sm leading-relaxed whitespace-pre-line ${
          side === "left" ? "text-left" : "text-left"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export function Experiences() {
  return (
    <section id="experiences" className="w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl text-center text-[#747FE0] container my-16 md:my-35">
        Experiências
      </h2>

      <div className="relative w-11/12 md:w-4/6 pb-20">
        {/* Linha vertical — esquerda em mobile, centro em desktop */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-black md:-translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            return (
              <div key={i} className="flex items-center">
                {/* Desktop: layout alternado */}
                <div className="hidden md:flex md:w-5/12 pr-8 justify-end">
                  {side === "left" && <ExperienceCard {...exp} side="left" />}
                </div>

                <div className="hidden md:flex md:w-2/12 justify-center z-10">
                  <div className="w-4 h-4 rounded-full bg-[#D9D9D9] ring-4 ring-[#D9D9D9]" />
                </div>

                <div className="hidden md:block md:w-5/12 pl-8">
                  {side === "right" && <ExperienceCard {...exp} side="right" />}
                </div>

                {/* Mobile: coluna única à direita da linha */}
                <div className="flex md:hidden items-center w-full">
                  <div className="flex justify-center z-10 w-8 shrink-0">
                    <div className="w-4 h-4 rounded-full bg-[#D9D9D9] ring-4 ring-[#D9D9D9]" />
                  </div>
                  <div className="pl-4 flex-1">
                    <ExperienceCard {...exp} side="left" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
