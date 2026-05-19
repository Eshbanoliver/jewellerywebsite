import { motion } from 'framer-motion';
import { FaCrown, FaHandshake, FaGem, FaLeaf } from 'react-icons/fa';

const values = [
  { icon: <FaCrown />, title: "Royal Heritage", desc: "Upholding the legacy of Rajasthani royalty." },
  { icon: <FaGem />, title: "Uncompromising Purity", desc: "100% certified diamonds and hallmarked gold." },
  { icon: <FaHandshake />, title: "Trust & Transparency", desc: "Honest pricing and ethical sourcing." },
  { icon: <FaLeaf />, title: "Sustainable Craft", desc: "Environmentally conscious manufacturing." }
];

const CoreValues = () => {
  return (
    <section className="py-24 bg-zinc-900/40 backdrop-blur-md relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-gold tracking-[0.3em] uppercase text-sm font-semibold mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mission, Vision & <span className="text-gradient">Core Values</span>
            </h2>
            <div className="space-y-6 mb-8 text-white/70">
              <div className="glass-card p-6 border-l-4 border-l-gold">
                <h3 className="text-xl font-serif text-white mb-2">Our Mission</h3>
                <p>To craft timeless jewelry that captures the essence of our rich heritage while embracing modern aesthetics, delivering unparalleled quality and service to every customer.</p>
              </div>
              <div className="glass-card p-6 border-l-4 border-l-rose-gold">
                <h3 className="text-xl font-serif text-white mb-2">Our Vision</h3>
                <p>To be the world's most trusted luxury jewelry brand, synonymous with purity, innovation, and ethical craftsmanship, bringing the legacy of Jaipur to the global stage.</p>
              </div>
            </div>
          </motion.div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300 group text-center flex flex-col items-center"
              >
                <div className="text-4xl text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {val.icon}
                </div>
                <h4 className="text-lg font-serif text-white mb-2">{val.title}</h4>
                <p className="text-sm text-white/60">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
