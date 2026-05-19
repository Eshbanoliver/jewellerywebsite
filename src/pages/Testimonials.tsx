import TestimonialsSection from '../components/home/TestimonialsSection';
import KeyMetrics from '../components/home/KeyMetrics';

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-zinc-950/45 backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Client <span className="text-gradient">Stories</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto">Read what our cherished clients have to say about their experience with Gold Jewellery.</p>
        </div>
      </section>

      <TestimonialsSection />
      <KeyMetrics />
    </div>
  );
};

export default Testimonials;
