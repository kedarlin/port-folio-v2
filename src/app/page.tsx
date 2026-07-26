import { About } from "@/components/sections/about";
import { EngineeringFocus } from "@/components/sections/engineering-focus";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <EngineeringFocus />
    </>
  );
}
