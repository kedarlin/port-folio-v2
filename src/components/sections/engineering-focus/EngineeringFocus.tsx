"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Layers,
  Monitor,
  Network,
  Server,
  Smartphone,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const icons = {
  "Backend Engineering": Server,
  "Modern Frontend": Monitor,
  "Full-Stack Development": Layers,
  "Mobile Engineering": Smartphone,
  "Software Architecture": Network,
  "Framework Internals": Cpu,
};

export default function EngineeringFocus() {
  return (
    <Section id="engineering-focus">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
              {siteConfig.engineeringFocus.title}
            </p>

            <h2 className="mt-6 text-5xl font-bold tracking-tight">
              {siteConfig.engineeringFocus.heading}
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              {siteConfig.engineeringFocus.description}
            </p>
          </motion.div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {siteConfig.engineeringFocus.items.map((item, index) => {
              const Icon = icons[item.title as keyof typeof icons];

              return (
                <motion.article
                  key={item.title + index}
                  variants={fadeUp}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    rounded-3xl
                    border
                    border-border
                    bg-card
                    p-8
                    transition-colors
                    hover:border-primary/40
                  "
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>

                  <p className="mt-6 leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={tech + index}
                        className="
                          rounded-full
                          border
                          border-border
                          px-3
                          py-1
                          text-sm
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary">
                    Exploring
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
