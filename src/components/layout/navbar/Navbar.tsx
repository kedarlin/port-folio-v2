"use client";

import { motion } from "framer-motion";

import Container from "../Container";

import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

import { fadeDown } from "@/lib/motion";

export default function Navbar() {
  return (
    <motion.header
      variants={fadeDown}
      initial="hidden"
      animate="visible"
      className="fixed inset-x-0 top-0 z-50"
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <DesktopNav />

          <MobileNav />
        </div>
      </Container>
    </motion.header>
  );
}
