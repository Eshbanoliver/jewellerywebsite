import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "Do you provide hallmark certification for your jewellery?",
    answer: "Yes, absolutely. All our gold jewellery is 100% BIS Hallmarked, ensuring purity and authenticity. Every diamond piece comes with a certificate of authenticity from reputed gemological laboratories."
  },
  {
    question: "Can I customize a design I saw online?",
    answer: "Yes, we specialize in bespoke jewellery design. You can share your inspiration with our master artisans, and we will craft a unique piece tailored to your exact specifications."
  },
  {
    question: "What is your exchange and return policy?",
    answer: "We offer a transparent lifetime exchange policy on all our jewellery. Gold is exchanged at 100% of the prevailing market rate, while diamonds and gemstones are evaluated based on our standard policy."
  },
  {
    question: "Do you offer jewellery repair and polishing services?",
    answer: "Yes, we provide professional cleaning, polishing, and repair services to help maintain the brilliance of your cherished pieces over time."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-sm font-semibold mb-4 block">Got Questions?</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-serif text-lg text-white group-hover:text-gold transition-colors">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-gold transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-white/70"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
