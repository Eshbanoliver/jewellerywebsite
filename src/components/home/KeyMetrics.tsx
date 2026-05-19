import { motion } from 'framer-motion';

const metrics = [
  { id: 1, value: "10K+", label: "Happy Customers" },
  { id: 2, value: "5000+", label: "Exclusive Designs" },
  { id: 3, value: "25+", label: "Years Experience" },
  { id: 4, value: "100%", label: "Certified Purity" },
];

const KeyMetrics = () => {
  return (
    <section className="py-16 bg-zinc-900/50 border-y border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center px-4"
            >
              <h3 className="text-4xl md:text-5xl font-serif text-gold mb-2">{metric.value}</h3>
              <p className="text-white/60 text-sm md:text-base uppercase tracking-wider">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
