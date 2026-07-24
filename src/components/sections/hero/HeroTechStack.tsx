import { siteConfig } from "@/config/site";

export default function HeroTechStack() {
  return (
    <div className="mt-10 flex flex-wrap gap-3 text-sm text-muted-foreground">
      {siteConfig.hero.technologies.map((tech) => (
        <span key={tech}>{tech}</span>
      ))}
    </div>
  );
}
