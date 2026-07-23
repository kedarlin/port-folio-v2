import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";

export default function Home() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Portfolio V2"
            title="Building something beautiful."
            description="This is our foundation before the real sections arrive."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Second Section"
            title="Spacing should stay identical."
            description="Notice how both sections share exactly the same layout."
          />
        </Container>
      </Section>
    </>
  );
}
