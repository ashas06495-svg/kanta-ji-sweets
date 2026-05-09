import { useState, useEffect } from 'react';
import { Menu, X, Phone, Utensils, Gift, Home } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Festive', href: '#festive' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-maroon/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-gradient-to-b from-black/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="#" className={`font-serif text-2xl md:text-3xl font-bold tracking-wide text-brand-cream drop-shadow-md`}>
                Kanta Ji
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide hover:text-brand-saffron-light transition-colors text-brand-cream`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:09001022367"
                className="flex items-center gap-2 bg-brand-saffron text-white px-5 py-2.5 rounded-full font-semibold hover:bg-brand-saffron-light transition-all shadow-lg hover:shadow-brand-saffron/30"
              >
                <Phone size={16} />
                <span className="text-sm">Call Us</span>
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brand-cream"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-brand-maroon border-t border-brand-maroon-dark">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-brand-cream hover:bg-brand-maroon-dark hover:text-brand-saffron-light rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navigation Menu */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-maroon text-brand-cream border-t border-brand-dark/20 pb-safe pb-4 pt-3 px-6 rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <div className="flex justify-between items-center max-w-sm mx-auto">
          <a href="#home" className="flex flex-col items-center gap-1 hover:text-brand-saffron-light transition-colors">
            <Home size={20} />
            <span className="text-[10px] font-medium tracking-wide">Home</span>
          </a>
          <a href="#menu" className="flex flex-col items-center gap-1 hover:text-brand-saffron-light transition-colors">
            <Utensils size={20} />
            <span className="text-[10px] font-medium tracking-wide">Menu</span>
          </a>
          <a href="#festive" className="flex flex-col items-center gap-1 hover:text-brand-saffron-light transition-colors">
            <Gift size={20} />
            <span className="text-[10px] font-medium tracking-wide">Festive</span>
          </a>
          <a href="tel:09001022367" className="flex flex-col items-center gap-1 text-brand-saffron hover:text-brand-saffron-light transition-colors">
            <Phone size={20} />
            <span className="text-[10px] font-medium tracking-wide">Call</span>
          </a>
        </div>
      </div>
    </>
  );
}
