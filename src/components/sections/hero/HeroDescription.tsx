import { siteConfig } from "@/config/site";

export default function HeroDescription() {
  return (
    <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
      {siteConfig.hero.description}
    </p>
  );
}
