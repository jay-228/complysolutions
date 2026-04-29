import React from 'react';

const Loader = ({ isLoading, logo }) => {
  return (
    <div className={`page-loader ${!isLoading ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo-wrapper">
          <div className="loader-logo-bg-glow"></div>
          <img src={logo} alt="Loading..." className="loader-logo" />
          <div className="loader-ring-outer"></div>
          <div className="loader-ring-inner"></div>
        </div>
        <div className="loader-text">
          {['C', 'O', 'M', 'P', 'L', 'Y', 'B', 'R', 'I', 'D', 'G', 'E'].map((letter, index) => (
            <span
              key={index}
              className="loader-letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
