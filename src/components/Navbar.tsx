import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gradient">Gold Jewellery</Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
          <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
          <Link to="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link>
          <Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
