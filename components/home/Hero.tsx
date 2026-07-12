import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";


export default function Hero() {
  return (
    <Section className="bg-gradient-to-b from-white to-slate-100">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
    </Section>
  );
}