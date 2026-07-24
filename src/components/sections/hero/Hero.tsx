import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import HeroActions from "./HeroActions";
import HeroDescription from "./HeroDescription";
import HeroGreeting from "./HeroGreeting";
import HeroHeadline from "./HeroHeadline";
import HeroSocials from "./HeroSocials";
import HeroTechStack from "./HeroTechStack";
import HeroTitle from "./HeroTitle";

export default function Hero() {
  return (
    <Section className="flex min-h-screen items-center">
      <Container>
        <HeroGreeting />

        <HeroTitle />

        <HeroHeadline />

        <HeroDescription />

        <HeroActions />

        <HeroTechStack />

        <HeroSocials />
      </Container>
    </Section>
  );
}
