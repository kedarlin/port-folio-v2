import AboutStatCard from "./AboutStatCard";

import { siteConfig } from "@/config/site";

export default function AboutStats() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {siteConfig.about.stats.map((item) => (
        <AboutStatCard key={item.label} value={item.value} label={item.label} />
      ))}
    </div>
  );
}
