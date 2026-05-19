import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 p-2">
              <img 
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Jewellery Collection" 
                className="w-full h-auto object-cover rounded-sm shadow-2xl"
              />
            </div>
            {/* Glassmorphism decorative card */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 glass-card p-6 hidden md:flex flex-col justify-center items-center z-20">
              <span className="text-4xl font-serif text-gold mb-2">25+</span>
              <span className="text-white/80 text-center text-sm uppercase tracking-wider">Years of<br/>Excellence</span>
            </div>
            {/* Border decoration */}
            <div className="absolute top-10 -left-6 w-full h-full border border-gold/30 z-0 hidden md:block" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-gold tracking-[0.3em] uppercase text-sm font-semibold mb-4 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A Legacy of <span className="text-gradient">Craftsmanship</span>
            </h2>
            <p className="text-white/70 mb-6 leading-relaxed text-lg">
              Located in the heart of Jaipur, Rajasthan, Gold Jewellery represents a culmination of decades of artisanal mastery. We curate and craft pieces that are not just ornaments, but timeless heirlooms passing stories from generation to generation.
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              Our dedication to purity, ethical sourcing, and innovative design sets us apart. From the intricate polki work of royal Rajasthan to modern minimalist diamonds, every piece reflects our commitment to unparalleled quality.
            </p>
            <div className="flex items-center gap-4">
              <img src="https://ui-avatars.com/api/?name=Founder&background=D4AF37&color=000" alt="Founder Signature" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-semibold text-white">Master Jeweller</h4>
                <p className="text-white/50 text-sm">Jaipur, Rajasthan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
