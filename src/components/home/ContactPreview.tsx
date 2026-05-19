import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactPreview = () => {
  return (
    <section className="py-24 bg-zinc-900/40 backdrop-blur-md border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-gold tracking-[0.3em] uppercase text-sm font-semibold mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Visit Our <span className="text-gradient">Boutique</span>
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed">
              Experience the luxury of our collections in person. Our knowledgeable staff is here to assist you in finding or creating the perfect piece.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-gold shrink-0">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-white mb-2">Our Location</h4>
                  <p className="text-white/60">Jaipur, Rajasthan 313001<br />India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-gold shrink-0">
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-white mb-2">Call Us</h4>
                  <p className="text-white/60">Coming soon</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-gold shrink-0">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-white mb-2">Email Us</h4>
                  <p className="text-white/60">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="glass-card p-2 h-full min-h-[400px]">
              {/* Map placeholder since iframe is requested to be blank */}
              <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-white/30 text-center p-6">
                Map Location<br/>(Coming Soon)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
