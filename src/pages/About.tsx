import AboutSection from '../components/home/AboutSection';
import MissionVision from '../components/home/CoreValues';
import KeyMetrics from '../components/home/KeyMetrics';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-zinc-950/45 backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About <span className="text-gradient">Us</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto">Discover the heritage, craftsmanship, and passion that goes into every piece of Gold Jewellery.</p>
        </div>
      </section>

      <AboutSection />
      <MissionVision />
      <KeyMetrics />
    </div>
  );
};

export default About;
