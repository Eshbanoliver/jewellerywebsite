import { Link } from 'react-router-dom';

const CtaBanner = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gold">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
          Ready to Find Your Perfect Piece?
        </h2>
        <p className="text-black/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
          Book an exclusive appointment with our master artisans or explore our latest collection online.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/contact"
            className="px-8 py-4 bg-black text-gold font-semibold uppercase tracking-wider hover:bg-zinc-900 transition-colors shadow-2xl"
          >
            Book Appointment
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 bg-transparent border-2 border-black text-black font-semibold uppercase tracking-wider hover:bg-black hover:text-gold transition-colors"
          >
            View Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
