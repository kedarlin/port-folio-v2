"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

import ProjectsGrid from "./ProjectsGrid";
import ProjectsHeader from "./ProjectsHeader";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <ProjectsHeader />
          </motion.div>

          <motion.div variants={fadeUp}>
            <ProjectsGrid />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
