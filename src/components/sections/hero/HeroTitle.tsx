import { siteConfig } from "@/config/site";

export default function HeroTitle() {
  return (
    <h1 className="mt-6 text-7xl font-bold tracking-tight">
      {siteConfig.name}
    </h1>
  );
}
