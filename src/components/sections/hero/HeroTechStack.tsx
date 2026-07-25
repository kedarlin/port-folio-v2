import { siteConfig } from "@/config/site";
import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";

export default function HeroTechStack() {
  return (
    <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
      {siteConfig.hero.technologies.map((tech, index) => (
        <motion.span key={index} variants={fadeUp}>
          {tech}
        </motion.span>
      ))}
    </div>
  );
}
