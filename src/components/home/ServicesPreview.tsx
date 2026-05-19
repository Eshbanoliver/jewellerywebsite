import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GiDiamondRing, GiNecklace, GiGoldBar } from 'react-icons/gi';
import { FaGem } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Gold Jewellery',
    description: 'Pure 22k and 24k gold masterpieces reflecting timeless elegance.',
    icon: <GiGoldBar className="text-5xl text-gold mb-4" />,
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Diamond Collection',
    description: 'Brilliant cut diamonds set in premium platinum and white gold.',
    icon: <FaGem className="text-5xl text-gold mb-4" />,
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Bridal Sets',
    description: 'Complete royal sets crafted specially for your perfect day.',
    icon: <GiNecklace className="text-5xl text-gold mb-4" />,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Custom Designs',
    description: 'Bring your vision to life with our bespoke jewellery service.',
    icon: <GiDiamondRing className="text-5xl text-gold mb-4" />,
    image: 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=2070&auto=format&fit=crop'
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-sm font-semibold mb-4 block">Our Offerings</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Signature <span className="text-gradient">Collections</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative glass-card overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-0 h-48 overflow-hidden bg-zinc-900">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  loading="lazy"
                  width="400"
                  height="300"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
              </div>
              <div className="relative pt-36 p-8 flex flex-col items-center text-center">
                <div className="bg-zinc-950/80 p-4 rounded-full backdrop-blur-sm border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif mt-6 mb-3 text-white group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-white/60 text-sm mb-6">{service.description}</p>
                <Link to="/services" className="text-gold text-sm uppercase tracking-wider font-semibold group-hover:underline">Explore</Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-block px-8 py-4 bg-transparent border border-gold text-gold font-semibold hover:bg-gold hover:text-black transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
