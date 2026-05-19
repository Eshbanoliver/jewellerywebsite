import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CtaBanner from '../components/home/CtaBanner';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our <span className="text-gradient">Services</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto">Explore our exclusive collections and bespoke jewellery services tailored for your unique style.</p>
        </div>
      </section>

      <ServicesPreview />
      <WhyChooseUs />
      <CtaBanner />
    </div>
  );
};

export default Services;
