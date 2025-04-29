import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesGrid from '../components/FeaturesGrid';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  useEffect(() => {
    document.title = 'AgriNova Sénégal | Innovation agricole';
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturesGrid />
      <BenefitsSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default HomePage;