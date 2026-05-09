import { motion } from 'motion/react';
import { Heart, Sparkles, ChefHat } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-paper pattern-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-brand-saffron font-bold tracking-wider uppercase text-sm">
              <Heart size={16} /> Our Story & Tradition
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-maroon font-bold leading-tight">
              A Legacy of Taste,<br/> Trusted by Families
            </h2>
            
            <div className="w-16 h-1 bg-brand-saffron my-6 rounded-full"></div>
            
            <p className="text-lg text-brand-dark leading-relaxed font-medium">
              Kanta Ji Sweets & Restaurant is more than just a sweet shop—we are a part of Neemrana's daily celebrations. For years, we have brought smiles to families with our authentic recipes, pure ingredients, and warm hospitality.
            </p>
            
            <p className="text-lg text-brand-dark/80 leading-relaxed">
              Whether it’s a box of our famous Kaju Katli for Diwali, fresh hot samosas on a rainy day, a custom cake for your child's birthday, or a comforting family dinner of Chole Bhature and Paneer Butter Masala—we make every moment special. Our kitchens maintain the highest hygiene standards so you can trust every bite.
            </p>

            <div className="pt-6 grid grid-cols-2 gap-6">
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-brand-saffron/10 flex items-start gap-4">
                  <div className="bg-brand-saffron/10 p-2 rounded-xl text-brand-saffron shrink-0">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-maroon">Fresh Daily</h4>
                    <p className="text-sm text-brand-dark/70 mt-1">Made from scratch every morning.</p>
                  </div>
               </div>
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-brand-saffron/10 flex items-start gap-4">
                  <div className="bg-brand-saffron/10 p-2 rounded-xl text-brand-saffron shrink-0">
                    <ChefHat size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-maroon">Pure Quality</h4>
                    <p className="text-sm text-brand-dark/70 mt-1">Authentic ingredients, no compromises.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Collage of traditional sweets and shop feel */}
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              <div className="space-y-4 h-full">
                <img 
                  src="https://images.unsplash.com/photo-1631481546944-d6215f92ffae?auto=format&fit=crop&w=600&q=80" 
                  alt="Famous Kaju Katli" 
                  className="w-full h-[60%] object-cover rounded-3xl shadow-lg border-4 border-white"
                />
                <img 
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80" 
                  alt="Hot Indian Food" 
                  className="w-full h-[35%] object-cover rounded-3xl shadow-lg border-4 border-white"
                />
              </div>
              <div className="space-y-4 h-full pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80" 
                  alt="Hot Samosas" 
                  className="w-full h-[35%] object-cover rounded-3xl shadow-lg border-4 border-white"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80" 
                  alt="Diwali Sweets Boxes" 
                  className="w-full h-[60%] object-cover rounded-3xl shadow-lg border-4 border-white"
                />
              </div>
            </div>
            
            {/* Trusted Local Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-xl border border-brand-paper">
              <div className="w-24 h-24 rounded-full border border-brand-saffron flex flex-col items-center justify-center text-center p-2">
                <span className="font-serif font-bold text-2xl text-brand-maroon">10+</span>
                <span className="text-[10px] uppercase font-bold text-brand-saffron tracking-wider leading-tight">Years<br/>of Trust</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
