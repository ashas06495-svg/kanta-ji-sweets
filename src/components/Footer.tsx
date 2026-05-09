import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-maroon-dark text-brand-cream pt-20 pb-28 md:pb-10 border-t-8 border-brand-saffron relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg-maroon opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 border-b border-brand-saffron/20 pb-12 mb-8">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-3xl font-bold tracking-wider text-brand-saffron mb-6">
              Kanta Ji Sweets
            </h3>
            <p className="text-brand-cream/80 font-medium leading-relaxed mb-6 max-w-sm">
              The best restaurant & sweet shop in Neemrana. Experience the authentic taste of tradition and family warmth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h4 className="font-sans text-brand-saffron font-bold uppercase tracking-wider text-sm mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-brand-cream/80 hover:text-brand-saffron transition-colors font-medium">Home</a></li>
                <li><a href="#about" className="text-brand-cream/80 hover:text-brand-saffron transition-colors font-medium">Our Story</a></li>
                <li><a href="#menu" className="text-brand-cream/80 hover:text-brand-saffron transition-colors font-medium">Explore Menu</a></li>
                <li><a href="#festive" className="text-brand-cream/80 hover:text-brand-saffron transition-colors font-medium">Festive Treats</a></li>
                <li><a href="#contact" className="text-brand-cream/80 hover:text-brand-saffron transition-colors font-medium">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-brand-saffron font-bold uppercase tracking-wider text-sm mb-6">Categories</h4>
              <ul className="space-y-4">
                <li className="text-brand-cream/80 font-medium">Authentic Indian Sweets</li>
                <li className="text-brand-cream/80 font-medium">Cookies & Bakery</li>
                <li className="text-brand-cream/80 font-medium">Restaurant Main Course</li>
                <li className="text-brand-cream/80 font-medium">Evening Snacks & Chaat</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium text-brand-cream/40">
          <p>© {new Date().getFullYear()} Kanta Ji Sweets & Restaurant. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
             <p>A trusted local institution.</p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp / Call Button */}
      <div className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50 flex flex-col gap-3">
        <a 
          href="https://wa.me/919001022367" 
          target="_blank" 
          rel="noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform"
        >
          {/* Custom minimal WhatsApp SVG */}
          <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.082 21.417c-1.579 0-3.125-.407-4.478-1.18l-5.1.1.1 4.966c.801 1.405 1.155 3.014 1.155 4.653 0 5.191-4.223 9.414-9.414 9.414z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
