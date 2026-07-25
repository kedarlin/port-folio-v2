import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

type Props = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
}: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:border-blue-500/40">
      <div className="aspect-video bg-muted" />

      <div className="p-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <div className="flex gap-3">
            <FaGithub className="h-5 w-5 text-muted-foreground" />

            <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <p className="mt-5 leading-7 text-muted-foreground">{description}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
