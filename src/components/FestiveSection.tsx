import { motion } from 'motion/react';
import { Gift, ArrowRight } from 'lucide-react';

export default function FestiveSection() {
  return (
    <section id="festive" className="py-24 bg-brand-maroon relative overflow-hidden text-brand-cream">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pattern-bg-maroon opacity-50 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-saffron/20 rounded-full blur-[120px] -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-brand-saffron-light font-bold tracking-widest uppercase text-sm mb-4">
              <Gift size={18} /> Premium Gifting
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white drop-shadow-md">
              Celebrate with <br/> Authentic Flavors
            </h2>
            <p className="text-lg md:text-xl text-brand-cream/80 mb-8 font-light leading-relaxed max-w-xl">
              From grand weddings and glowing Diwali nights to joyful family reunions, Kanta Ji brings the festive spirit to your home. Explore our premium assorted sweet boxes, custom birthday cakes, and festive event catering.
            </p>

            <ul className="space-y-4 mb-10">
              {['Customized Diwali & Festival Hampers', 'Wedding Sweets & Bhaji Boxes', 'Fresh Cream Birthday & Anniversary Cakes', 'Bulk Orders for Corporate Events'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-cream/90 font-medium">
                  <div className="w-6 h-6 rounded-full bg-brand-saffron flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-brand-cream"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/919001022367" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-brand-saffron text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-brand-saffron/40 hover:bg-brand-saffron-light transition-all text-lg group"
            >
              Order Festive Boxes On WhatsApp
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="space-y-4 translate-y-8">
              <img 
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80" 
                alt="Box of assorted barfi and laddoos" 
                className="rounded-3xl shadow-2xl border-2 border-brand-saffron/30 w-full object-cover aspect-square"
              />
              <img 
                src="https://images.unsplash.com/photo-1605197177583-09be736fa202?auto=format&fit=crop&w=600&q=80" 
                alt="Rich milk cakes and pedas" 
                className="rounded-3xl shadow-2xl border-2 border-brand-saffron/30 w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" 
                alt="Beautiful fresh cream occasion cake" 
                className="rounded-3xl shadow-2xl border-2 border-brand-saffron/30 w-full object-cover aspect-[4/3]"
              />
              <img 
                src="https://images.unsplash.com/photo-1631481546944-d6215f92ffae?auto=format&fit=crop&w=600&q=80" 
                alt="Silver coated Kaju Katli" 
                className="rounded-3xl shadow-2xl border-2 border-brand-saffron/30 w-full object-cover aspect-square"
              />
            </div>
            
            {/* Tag */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-dark/95 backdrop-blur text-brand-saffron font-bold px-6 py-4 rounded-2xl shadow-2xl border border-brand-saffron ring-4 ring-brand-maroon whitespace-nowrap z-20 flex flex-col items-center">
              <span className="text-2xl mb-1">🎁</span>
              <span className="uppercase tracking-widest text-xs">Premium Packaging</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
