import { motion } from 'motion/react';

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&w=800&q=80", title: "Authentic Curry" },
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80", title: "Fresh Cakes" },
  { src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80", title: "Hot Snacks" },
  { src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80", title: "Traditional Sweets" },
  { src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80", title: "Family Dining" },
  { src: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?auto=format&fit=crop&w=800&q=80", title: "Chaat Center" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-brand-saffron font-bold tracking-widest uppercase text-sm mb-4">Our Gallery</p>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-maroon font-bold">Visual <span className="italic text-brand-saffron">Feast</span></h2>
          </div>
          <p className="text-brand-dark/70 font-medium max-w-md hidden md:block">
            Take a glimpse into the culinary art and warm ambiance we offer at Kanta Ji. Every dish is a masterpiece waiting to be tasted.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-serif text-xl font-medium tracking-wide">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
