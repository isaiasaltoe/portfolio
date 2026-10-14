import { IconBrandGithub } from '@tabler/icons-react'
import type { Project } from '../data/projects'
import { useLanguage } from '../i18n/useLanguage'

type ProjectCardProps = Project & { index: number }

export function ProjectCard({ index, title, description, tags, repoUrl, image, imageAlt }: ProjectCardProps) {
  const { language, t } = useLanguage()

  return (
    <article>
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`sketch-border hatch block p-3 text-pencil transition-transform hover:rotate-0 ${
          index % 2 ? 'rotate-1' : '-rotate-1'
        }`}
      >
        <img src={image} alt={imageAlt[language]} loading="lazy" className="pencil-photo aspect-video w-full object-cover" />
      </a>

      <h3 className="mt-6 text-2xl">{title}</h3>
      <p className="mt-3">{description[language]}</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-pencil-light">
        {tags.map((tag) => (
          <li key={tag} className="sketch-border rounded-full px-2.5 text-base">
            {tag}
          </li>
        ))}
      </ul>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2">
        <IconBrandGithub size={20} stroke={1.5} />
        {t.projects.repo}
      </a>
    </article>
  )
}
