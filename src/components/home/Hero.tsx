import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with blur effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478524-fb66f70a0066?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-gold tracking-[0.3em] uppercase text-sm font-semibold mb-6 block">
            Premium Luxury Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Elegance Crafted in <br />
            <span className="text-gradient">Pure Gold</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 font-light max-w-2xl mx-auto">
            Discover our exquisite collection of timeless jewelry pieces, designed to elevate your style and celebrate life's most precious moments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/services"
              className="px-8 py-4 bg-gold text-black font-semibold rounded-none hover:bg-gold-light transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
            >
              Explore Collection
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border border-gold text-gold font-semibold rounded-none hover:bg-gold/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
