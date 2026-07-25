import Link from "next/link";

import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function HeroActions() {
  return (
    <div className="mt-10 flex items-center gap-4">
      {/* <Button asChild size="lg"> */}
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Button size="lg">
          <Link href="#projects">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Button size="lg" variant="outline">
          <Link href={siteConfig.resume} target="_blank">
            Resume
            <Download className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
