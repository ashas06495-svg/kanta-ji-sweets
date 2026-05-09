import { motion } from 'motion/react';
import { ChefHat, Sparkles, IndianRupee, Heart, LeafyGreen, Clock } from 'lucide-react';

const features = [
  {
    icon: <ChefHat size={32} className="text-brand-gold" />,
    title: "Freshly Made Daily",
    desc: "Every item is prepared fresh every morning to ensure the highest quality."
  },
  {
    icon: <Sparkles size={32} className="text-brand-gold" />,
    title: "Hygienic Kitchen",
    desc: "We maintain strict cleanliness standards for a safe dining experience."
  },
  {
    icon: <IndianRupee size={32} className="text-brand-gold" />,
    title: "Affordable Pricing",
    desc: "Premium taste and quality that fits within a budget of ₹1–200 per person."
  },
  {
    icon: <Heart size={32} className="text-brand-gold" />,
    title: "Family-Friendly Dining",
    desc: "A warm and welcoming atmosphere perfect for family gatherings."
  },
  {
    icon: <LeafyGreen size={32} className="text-brand-gold" />,
    title: "Quality Ingredients",
    desc: "We source only the best ingredients to craft our authentic recipes."
  },
  {
    icon: <Clock size={32} className="text-brand-gold" />,
    title: "Fast Service",
    desc: "Enjoy your meals without the long wait times, served hot and fresh."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-gold font-semibold tracking-widest uppercase text-sm mb-4">Why Dine With Us</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Promise of <span className="italic text-brand-gold">Excellence</span></h2>
          <p className="text-white/70 text-lg">We don't just serve food; we serve memories. See why Kanta Ji has become Neemrana's favorite.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-brand-dark-light p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-colors group"
            >
              <div className="bg-brand-dark w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif mb-3 hidden lg:block">{feature.title}</h3>
              <h3 className="text-xl font-sans font-semibold mb-3 lg:hidden text-white">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
