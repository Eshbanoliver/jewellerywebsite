import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import KeyMetrics from '../components/home/KeyMetrics';
import ServicesPreview from '../components/home/ServicesPreview';
import MissionVision from '../components/home/CoreValues';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CtaBanner from '../components/home/CtaBanner';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqSection from '../components/home/FaqSection';
import ContactPreview from '../components/home/ContactPreview';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <KeyMetrics />
      <ServicesPreview />
      <MissionVision />
      <WhyChooseUs />
      <CtaBanner />
      <TestimonialsSection />
      <FaqSection />
      <ContactPreview />
    </div>
  );
};

export default Home;
