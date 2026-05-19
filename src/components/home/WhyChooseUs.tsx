import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const reasons = [
  "100% Certified Diamonds & Gemstones",
  "BIS Hallmarked Gold",
  "Lifetime Exchange Policy",
  "Free Insured Shipping",
  "Transparent Pricing Breakdown",
  "Bespoke Customization Services"
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2070&auto=format&fit=crop" 
                alt="Jewellery Making" 
                className="w-full h-auto object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border-2 border-gold/40 m-4 pointer-events-none" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-gold tracking-[0.3em] uppercase text-sm font-semibold mb-4 block">The Gold Standard</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">Gold Jewellery?</span>
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed text-lg">
              We don't just sell jewellery; we build relationships. Our commitment to quality, transparency, and customer satisfaction has made us the preferred choice for thousands of families celebrating their most treasured moments.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <FaCheckCircle className="text-gold text-xl flex-shrink-0" />
                  <span className="text-white/80 font-medium">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
