import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import OurProcess from "@/components/about/OurProcess";
import Stats from "@/components/about/Stats";
import Team from "@/components/about/Team";
import Testimonials from "@/components/about/Testimonials";
import FAQ from "@/components/about/FAQ";
import CTA from "@/components/about/CTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />
        <OurStory />
        <WhyChooseUs />
        <OurProcess />
        <Stats />
        <Team />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}