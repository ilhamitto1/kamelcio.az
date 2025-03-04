import { HeroSection } from '@/components/hero-section';
import { ProductsSection } from '@/components/products-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}