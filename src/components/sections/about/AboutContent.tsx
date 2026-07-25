import { siteConfig } from "@/config/site";

export default function AboutContent() {
  return (
    <>
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
        {siteConfig.about.title}
      </p>

      <h2 className="mt-6 text-5xl font-bold tracking-tight">
        {siteConfig.about.heading}
      </h2>

      <div className="mt-8 space-y-6">
        {siteConfig.about.description.map((paragraph) => (
          <p
            key={paragraph}
            className="text-lg leading-8 text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
}
