import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { WhyChooseSection } from '@/components/why-choose-section';
import { AchievementsSection } from '@/components/achievements-section'; // Imported the new achievements engine
import { FeaturedProjects } from '@/components/featured-projects';
import { AmenitiesSection } from '@/components/amenities-section';
import { LocationSection } from '@/components/location-section';
import { GallerySection } from '@/components/gallery-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FAQSection } from '@/components/faq-section';
import { CTASection } from '@/components/cta-section';
import { MasterPlan } from '@/components/MasterPlan';
import { FeaturedPlots } from '@/components/FeaturedPlots'; 

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MasterPlan />
      <WhyChooseSection />
      
      {/* Dynamic 10-Image Auto Marquee Achievements Block */}
      <AchievementsSection />
      <FeaturedPlots />
      <FeaturedProjects />
      <AmenitiesSection />
      <LocationSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}