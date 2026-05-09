import { motion } from 'motion/react';
import { Star, MessageCircleHeart } from 'lucide-react';

const reviews = [
  {
    name: "Rahul Kumar",
    rating: 5,
    text: "Best quality cakes in this area ❤️ freshly baked products available",
    avatar: "RK"
  },
  {
    name: "Sweta Kumari",
    rating: 5,
    text: "The food of Kanta sweet is very tasty and the services quite well.",
    avatar: "SK"
  },
  {
    name: "Ashutosh Pandey",
    rating: 2,
    text: "No proper customer support and service.",
    avatar: "AP",
    isNegative: true,
    ownerResponse: "Dear Ashutosh, we sincerely apologize for the inconvenience. Our goal is 100% satisfaction. We have since upgraded our staff training to ensure faster and better support. Please visit again and give us a chance to serve you better."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-paper overflow-hidden relative">
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <MessageCircleHeart size={48} className="text-brand-saffron mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-serif text-brand-maroon font-bold mb-6">What Our <span className="italic text-brand-saffron">Guests Say</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-brand-paper relative hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star 
                    key={idx} 
                    size={16} 
                    className={idx < review.rating ? "fill-brand-saffron text-brand-saffron" : "text-gray-200"} 
                  />
                ))}
              </div>
              <p className="text-brand-dark/80 italic mb-8 font-serif text-lg leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-maroon font-bold font-serif uppercase text-lg">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-brand-maroon">{review.name}</h4>
                  <p className="text-xs text-brand-dark/50 uppercase tracking-wider font-semibold">Verified Guest</p>
                </div>
              </div>

              {review.ownerResponse && (
                <div className="mt-6 bg-brand-paper/50 p-4 rounded-xl border border-brand-saffron/20">
                  <p className="text-xs font-bold text-brand-saffron uppercase tracking-wider mb-2">Owner's Response</p>
                  <p className="text-sm text-brand-dark/70 italic font-medium">"{review.ownerResponse}"</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
