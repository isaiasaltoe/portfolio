import { SiNextdotjs, SiTailwindcss, SiFigma, SiPhp, SiPostgresql } from "react-icons/si";
import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Portfolio Pessoal",
    description: "Criei este portfólio para ser a vitrine dos meus projetos e um ambiente prático para testar novas tecnologias.",
    repoUrl: "https://github.com/isaiasaltoe/portfolio",
    image: `${""}/poao.png`,
    imageAlt: "Foto do Projeto Portfolio",
    icons: [
      <SiNextdotjs key="next" title="Next.js" />,
      <SiTailwindcss key="tailwind" title="Tailwind CSS" />,
      <SiFigma key="figma" title="Figma" />,
    ],
  },
];

const sogeufes = [
  {
    title: "SogeUFES",
    description: "O SogeUFES foi desenvolvido para resolver um problema proposto por um professor: os alunos da UFES estavam com dificuldade para organizar grupos de estudo e encontrar salas disponíveis. Minha solução, construída em grupo, foi criar uma plataforma onde os estudantes podem facilmente criar grupos e reservar espaços de estudo.",
    repoUrl: "https://github.com/isaiasaltoe/sogeufes",
    image: `${""}/teste.jpeg`,
    imageAlt: "Foto do Projeto Portfolio",
    icons: [
      <SiPhp key="php" title="PHP" />,
      <SiPostgresql key="postgres" title="PostgreSQL" />,
      <SiFigma key="figma" title="Figma" />,
      
    ],
  },
];



export function Projects() {
  return (
    <section id="projects" className="w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl text-center my-16 md:my-35 text-[#747FE0] container">
        Projetos
      </h2>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
      {sogeufes.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}
