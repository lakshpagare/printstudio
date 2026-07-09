import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/categories/Categories";
import FeaturedProducts from "@/components/home/featured-products/FeaturedProducts";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";
import HowItWorks from "@/components/home/how-it-works/HowItWorks";
import Testimonials from "@/components/home/testimonials/Testimonials";
import CTA from "@/components/home/cta/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
 <>
  <Navbar />
  <Hero />
  <Categories />
  <FeaturedProducts />
  <WhyChooseUs />
  <HowItWorks />
  <Testimonials />
  <CTA />
  <Footer />
</>
    
  );
}