import { siteConfig } from "@/config/site";

export default function ProjectsHeader() {
  return (
    <>
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
        {siteConfig.projects.title}
      </p>

      <h2 className="mt-6 text-5xl font-bold tracking-tight">
        {siteConfig.projects.heading}
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
        {siteConfig.projects.description}
      </p>
    </>
  );
}
