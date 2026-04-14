import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG dash properties
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div 
      className={`scroll-to-top ${isVisible ? 'active' : ''}`} 
      onClick={scrollToTop}
      role="button"
      aria-label="Scroll to top"
    >
      <svg className="progress-ring" width="50" height="50">
        <circle
          className="progress-ring__circle-bg"
          stroke="rgba(0, 0, 0, 0.05)"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="25"
          cy="25"
        />
        <circle
          className="progress-ring__circle"
          stroke="var(--primary)"
          strokeWidth="3"
          strokeDasharray={circumference}
          style={{ strokeDashoffset: offset }}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="25"
          cy="25"
        />
      </svg>
      <div className="arrow-icon">
        <i className="bi bi-arrow-up"></i>
      </div>
    </div>
  );
};

export default ScrollToTop;
