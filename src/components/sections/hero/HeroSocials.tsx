import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { MdOutlineMailOutline } from "react-icons/md";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

const socials = [
  {
    href: siteConfig.socials.github,
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: siteConfig.socials.linkedin,
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: siteConfig.socials.email,
    icon: MdOutlineMailOutline,
    label: "Email",
  },
];

export default function HeroSocials() {
  return (
    <div className="mt-10 flex items-center gap-6">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <motion.div
            whileHover={{
              y: -3,
              scale: 1.1,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              aria-label={social.label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
