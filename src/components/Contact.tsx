import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Details & Map */}
          <div className="flex flex-col h-full">
            <p className="text-brand-saffron font-bold tracking-widest uppercase text-sm mb-4">Visit Us</p>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-maroon font-bold mb-10">We would love to <span className="italic text-brand-saffron">host you</span></h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-saffron shadow-sm shrink-0 border border-brand-paper">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg mb-1 text-brand-maroon">Our Location</h4>
                  <p className="text-brand-dark/70 font-medium leading-relaxed max-w-sm">
                    Shop No 134, Riico Shopping Complex, Neemrana, Rajasthan 301705
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-saffron shadow-sm shrink-0 border border-brand-paper">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg mb-1 text-brand-maroon">Call Us</h4>
                  <a href="tel:09001022367" className="text-brand-dark/70 font-medium leading-relaxed hover:text-brand-saffron transition-colors">
                    09001022367
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-saffron shadow-sm shrink-0 border border-brand-paper">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg mb-1 text-brand-maroon">Opening Hours</h4>
                  <p className="text-brand-dark/70 font-medium leading-relaxed">
                    Open Daily<br/>
                    Closes at 9:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="flex-1 min-h-[300px] w-full bg-gray-200 rounded-3xl overflow-hidden shadow-inner border border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113400.31502421356!2d76.31139417855364!3d27.994269151833075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9a26dd44695%3A0xc47e30d170dd2568!2sNeemrana%2C%20Rajasthan%20301705!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kanta Ji Sweets & Restaurant Location Map"
              ></iframe>
            </div>
            
          </div>

          {/* Booking Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-brand-paper flex flex-col justify-center">
            <h3 className="text-3xl font-serif mb-2 text-brand-maroon font-bold">Reserve Your Table</h3>
            <p className="text-brand-dark/60 mb-8 font-medium">Book a table in advance to avoid waiting. We will confirm your reservation via phone.</p>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-wider text-brand-saffron font-bold block mb-2 px-1">Name</label>
                  <input type="text" className="w-full bg-brand-paper px-5 py-4 rounded-xl border border-transparent focus:border-brand-saffron focus:bg-white outline-none transition-all shadow-sm font-medium" placeholder="Your Name" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-brand-saffron font-bold block mb-2 px-1">Phone</label>
                  <input type="tel" className="w-full bg-brand-paper px-5 py-4 rounded-xl border border-transparent focus:border-brand-saffron focus:bg-white outline-none transition-all shadow-sm font-medium" placeholder="Your Phone Number" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-wider text-brand-saffron font-bold block mb-2 px-1">Date</label>
                  <input type="date" className="w-full bg-brand-paper px-5 py-4 rounded-xl border border-transparent focus:border-brand-saffron focus:bg-white outline-none transition-all shadow-sm font-medium" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-brand-saffron font-bold block mb-2 px-1">Guests</label>
                  <select className="w-full bg-brand-paper px-5 py-4 rounded-xl border border-transparent focus:border-brand-saffron focus:bg-white outline-none transition-all shadow-sm cursor-pointer appearance-none font-medium">
                    <option>2 People</option>
                    <option>4 People</option>
                    <option>6 People</option>
                    <option>8+ People</option>
                  </select>
                </div>
              </div>

              <div>
                 <label className="text-xs uppercase tracking-wider text-brand-saffron font-bold block mb-2 px-1">Message (Optional)</label>
                 <textarea rows={4} className="w-full bg-brand-paper px-5 py-4 rounded-xl border border-transparent focus:border-brand-saffron focus:bg-white outline-none transition-all shadow-sm resize-none font-medium" placeholder="Any special requests or occasions?"></textarea>
              </div>
              
              <button type="button" className="w-full bg-brand-maroon text-white font-bold py-4 rounded-xl hover:bg-brand-maroon-dark transition-all shadow-lg hover:shadow-brand-maroon/30 mt-4 tracking-wide flex justify-center items-center gap-2 group uppercase">
                Confirm Reservation
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
