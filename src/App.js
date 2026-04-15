import React, { useState, useEffect } from 'react';
import './styles/App.css';
import complySolutionsLogo from './assets/images/logo.png';

// Components
import CustomCursor from './components/common/CustomCursor';
import Loader from './components/layout/Loader';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import TrustBox from './components/sections/TrustBox';
import Inquiry from './components/sections/Inquiry';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // Reveal animation logic
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Initial timeout for loader
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Observe elements after loader disappears
      setTimeout(() => {
        document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
      }, 100);
    }, 1000);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      {/* Global Aesthetics */}
      <div className="grid-overlay"></div>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      {/* Pages / Sections */}
      <Loader isLoading={isLoading} logo={complySolutionsLogo} />

      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} logo={complySolutionsLogo} />

      <Hero logo={complySolutionsLogo} />

      <About />

      <Services />

      <TrustBox logo={complySolutionsLogo} />

      <Inquiry />

      <Footer logo={complySolutionsLogo} />
      <ScrollToTop />
    </div>
  );
}

export default App;
