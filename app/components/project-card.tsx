import Image from "next/image";
import { SiGithub } from "react-icons/si";

type ProjectCardProps = {
  title: string;
  description: string;
  repoUrl: string;
  image: string;
  imageAlt: string;
  icons: React.ReactNode[];
};

export function ProjectCard({ title, description, repoUrl, image, imageAlt, icons }: ProjectCardProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-75 hover:scale-101 transition-all duration-300 rounded-lg overflow-hidden w-11/12 md:w-4/6 mb-10 shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
      <div className="flex flex-col p-5 pb-8 bg-white w-full md:w-65/100 text-[#525F7F]">
        <h3 className="text-xl md:text-2xl text-black mt-3 mb-3 text-left">{title}</h3>
        <p className="text-sm md:text-base mb-3 text-left">{description}</p>
        <div className="flex gap-3 mb-auto text-black text-2xl mt-3">
          {icons.map((icon, i) => (
            <span key={i}>{icon}</span>
          ))}
        </div>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-fit mt-5 px-3 py-1.5 bg-[#747FE0] text-white text-sm rounded-lg hover:opacity-80"
        >
          <span className="flex items-center gap-2">Repositório <SiGithub title="Github icon" /></span>
        </a>
      </div>
      <div className="w-full h-48 md:h-auto md:w-35/100 relative bg-[#747FE0]">
        <Image
          alt={imageAlt}
          className="object-center"
          fill
          src={image}
        />
      </div>
    </div>
  );
}
