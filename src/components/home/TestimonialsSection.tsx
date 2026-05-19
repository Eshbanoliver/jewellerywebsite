import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Aarti Sharma",
    role: "Bride",
    content: "The bridal set I purchased from Gold Jewellery was beyond my dreams. The attention to detail and the polki work is simply breathtaking.",
    rating: 5
  },
  {
    id: 2,
    name: "Vikram Singh",
    role: "Regular Customer",
    content: "I have been buying from them for 10 years. Their purity and transparency are unmatched in Jaipur. The staff is incredibly courteous.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Jewellery Enthusiast",
    content: "Their modern diamond collection is exquisite. I love how they blend traditional Rajasthani craftsmanship with contemporary designs.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-zinc-900/40 backdrop-blur-md relative overflow-hidden">
      {/* Decorative blurred background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-sm font-semibold mb-4 block">Client Diaries</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Words of <span className="text-gradient">Appreciation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card p-8 relative group hover:-translate-y-2 transition-all duration-300"
            >
              <FaQuoteLeft className="text-4xl text-white/5 mb-6 group-hover:text-gold/20 transition-colors" />
              <div className="flex text-gold mb-4 text-sm">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-white/70 mb-8 italic leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-gold font-serif text-xl border border-white/10">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gold text-xs uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
