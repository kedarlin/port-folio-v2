import { siteConfig } from "@/config/site";

export default function HeroHeadline() {
  return (
    <h2 className="mt-8 max-w-3xl text-3xl font-semibold leading-tight text-foreground/90">
      {siteConfig.hero.headline}
    </h2>
  );
}
