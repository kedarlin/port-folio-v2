type Props = {
  company: string;
  role: string;
  duration: string;
  technologies: string[];
  achievements: string[];
};

export default function ExperienceItem({
  company,
  role,
  duration,
  technologies,
  achievements,
}: Props) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-3 h-3 w-3 rounded-full bg-blue-500" />

      <div className="rounded-2xl border border-border bg-card p-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold">{role}</h3>

            <p className="mt-2 text-muted-foreground">{company}</p>
          </div>

          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-8 space-y-3">
          {achievements.map((item) => (
            <li key={item} className="text-muted-foreground">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
