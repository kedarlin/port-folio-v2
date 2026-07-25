import { siteConfig } from "@/config/site";

import ProjectCard from "./ProjectsCard";

export default function ProjectsGrid() {
  return (
    <div className="mt-20 grid gap-8">
      {siteConfig.projects.items.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
