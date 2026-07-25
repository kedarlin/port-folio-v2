"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <ExperienceHeader />
          </motion.div>

          <motion.div variants={fadeUp}>
            <ExperienceTimeline />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
