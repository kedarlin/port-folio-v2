"use client";

import { ChevronDown } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Background from "@/components/effects/background/Background";
import IntroMask from "./IntroMask";

const INTRO_TEXT = "K";

export default function IntroHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: true, // keep while debugging
        },
      });

      tl.to(textRef.current, {
        scale: 25,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      ref={sectionRef}
      id="intro"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <Background />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          bg-[size:64px_64px]
        "
      />

      <Container className="relative flex h-full items-center justify-center">
        <div className="text-center">
          <div ref={textRef} className="absolute inset-0">
            <IntroMask text={INTRO_TEXT} />
          </div>

          <p
            className="
              mt-6
              text-sm
              uppercase
              tracking-[0.4em]
              text-muted-foreground
            "
          >
            Scroll to Begin
          </p>

          <ChevronDown
            className="
              mx-auto
              mt-6
              animate-bounce
              text-muted-foreground
            "
          />
        </div>
      </Container>
    </Section>
  );
}
