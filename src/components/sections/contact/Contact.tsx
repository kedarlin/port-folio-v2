"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { siteConfig } from "@/config/site";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const icons = {
  Email: Mail,
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Resume: FileText,
};

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div
            variants={fadeUp}
            className="
              rounded-3xl
              border
              border-border
              bg-card
              p-12
              text-center
            "
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              {siteConfig.contact.title}
            </p>

            <h2 className="mt-6 text-5xl font-bold tracking-tight">
              {siteConfig.contact.heading}
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              {siteConfig.contact.description}
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {siteConfig.contact.actions.map((action) => {
                const Icon = icons[action.title as keyof typeof icons];

                return (
                  <motion.div
                    key={action.title}
                    whileHover={{
                      y: -5,
                    }}
                  >
                    <Link
                      href={action.href}
                      target="_blank"
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-border
                        px-6
                        py-5
                        transition-colors
                        hover:border-primary
                      "
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="h-5 w-5 text-primary" />

                        <span className="font-medium">{action.title}</span>
                      </div>

                      <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
