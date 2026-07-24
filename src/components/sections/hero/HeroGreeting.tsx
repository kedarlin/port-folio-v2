import { siteConfig } from "@/config/site";

export default function HeroGreeting() {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
      {siteConfig.hero.greeting}
    </p>
  );
}
