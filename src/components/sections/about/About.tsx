"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-20 lg:grid-cols-2 lg:items-center"
        >
          <motion.div variants={fadeUp}>
            <AboutContent />
          </motion.div>

          <motion.div variants={fadeUp}>
            <AboutStats />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
