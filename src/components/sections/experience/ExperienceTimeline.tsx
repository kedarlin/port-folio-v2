import { siteConfig } from "@/config/site";

import ExperienceItem from "./ExperienceItem";

export default function ExperienceTimeline() {
  return (
    <div className="relative mt-20">
      <div className="absolute left-[5px] top-0 h-full w-px bg-border" />

      <div className="space-y-16">
        {siteConfig.experience.items.map((item) => (
          <ExperienceItem key={`${item.company}-${item.duration}`} {...item} />
        ))}
      </div>
    </div>
  );
}
