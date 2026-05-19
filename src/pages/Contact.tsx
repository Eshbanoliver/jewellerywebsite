import ContactPreview from '../components/home/ContactPreview';
import FaqSection from '../components/home/FaqSection';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-zinc-950/45 backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599643478524-fb66f70a0066?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact <span className="text-gradient">Us</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto">We'd love to hear from you. Get in touch to schedule an appointment or ask about our bespoke services.</p>
        </div>
      </section>

      <section className="py-24 bg-zinc-950/45 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
            
            <h2 className="text-3xl font-serif text-white mb-8 text-center">Send Us a Message</h2>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">First Name</label>
                  <input type="text" className="w-full bg-zinc-900/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Last Name</label>
                  <input type="text" className="w-full bg-zinc-900/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Email Address</label>
                <input type="email" className="w-full bg-zinc-900/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Message</label>
                <textarea className="w-full bg-zinc-900/50 border border-white/10 rounded-sm px-4 py-3 text-white h-32 resize-none focus:outline-none focus:border-gold transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              
              <button className="w-full bg-gold text-black font-semibold py-4 uppercase tracking-wider hover:bg-gold-light transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <ContactPreview />
      <FaqSection />
    </div>
  );
};

export default Contact;
