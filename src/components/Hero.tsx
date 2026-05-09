import { motion } from 'motion/react';
import { Phone, ArrowRight, Store } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Warm Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          // Warm glowing mithai counter style image
          backgroundImage: 'url("https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-maroon-dark/90 via-brand-maroon/80 to-brand-maroon-dark/95 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-brand-cream mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-saffron/20 border border-brand-saffron/50 text-brand-cream px-4 py-1.5 rounded-full text-sm font-medium mb-6"
        >
          <Store size={16} className="text-brand-saffron" />
          <span>A Name You Can Trust</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 drop-shadow-lg"
        >
          Neemrana’s Trusted Destination for <br className="hidden md:block"/>
          <span className="text-brand-gold italic">Sweets, Snacks & Food</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-brand-cream/90 mb-10 font-medium"
        >
          Fresh sweets, bakery delights, delicious snacks, and authentic Indian taste made with tradition, care, and the warmth of a family kitchen.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a 
            href="#menu" 
            className="px-8 py-4 bg-brand-saffron text-white font-semibold rounded-full hover:bg-brand-saffron-light transition-all duration-300 shadow-xl hover:shadow-brand-saffron/40 flex items-center justify-center gap-2"
          >
            Explore Menu <ArrowRight size={18} />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white text-brand-maroon font-semibold rounded-full hover:bg-brand-paper transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
          >
            Order Now
          </a>
          <a 
            href="tel:09001022367" 
            className="group px-8 py-4 bg-transparent border-2 border-brand-cream text-brand-cream font-semibold rounded-full hover:bg-brand-cream/10 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Phone size={18} className="group-hover:animate-pulse" />
            <span>Call Us</span>
          </a>
        </motion.div>
      </div>

      {/* Diwali/Festive Decoration Pattern overlays (subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-saffron-light/20 via-transparent to-transparent"></div>
    </section>
  );
}
