/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import FestiveSection from './components/FestiveSection';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-brand-cream text-brand-dark min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <FestiveSection />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
