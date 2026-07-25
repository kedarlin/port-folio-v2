"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

import HeroActions from "./HeroActions";
import HeroDescription from "./HeroDescription";
import HeroGreeting from "./HeroGreeting";
import HeroHeadline from "./HeroHeadline";
import HeroSocials from "./HeroSocials";
import HeroTechStack from "./HeroTechStack";
import HeroTitle from "./HeroTitle";
import ScrollIndicator from "@/components/effects/scroll/ScrollIndicator";

export default function Hero() {
  return (
    <Section className="relative flex min-h-screen items-center">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <HeroGreeting />
          </motion.div>

          <motion.div variants={fadeUp}>
            <HeroTitle />
          </motion.div>

          <motion.div variants={fadeUp}>
            <HeroHeadline />
          </motion.div>

          <motion.div variants={fadeUp}>
            <HeroDescription />
          </motion.div>

          <motion.div variants={fadeUp}>
            <HeroActions />
          </motion.div>

          <motion.div variants={fadeUp}>
            <HeroTechStack />
          </motion.div>

          <motion.div variants={fadeUp}>
            <HeroSocials />
          </motion.div>
        </motion.div>
      </Container>

      <ScrollIndicator />
    </Section>
  );
}
