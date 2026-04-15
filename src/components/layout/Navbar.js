import React from 'react';

const Navbar = ({ isNavOpen, setIsNavOpen, logo }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ 
      backgroundColor: 'rgba(255,255,255,0.95)', 
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
    }}>
      <div className="container-fluid px-3 px-sm-4 px-md-5">
        <a className="navbar-brand d-flex align-items-center" href="#home" style={{ gap: '8px' }}>
          <img 
            src={logo} 
            alt="Logo" 
            style={{ 
              height: 'clamp(28px, 5vw, 40px)', 
              width: 'auto',
              objectFit: 'contain'
            }} 
          />
          <span 
            className="fw-bold" 
            style={{ 
              fontSize: 'clamp(1rem, 5vw, 1.5rem)',
              background: 'linear-gradient(135deg, #0d6efd, #0a58ca)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            ComplySolutions
          </span>
        </a>
        
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          style={{ outline: 'none', padding: '8px' }}
        >
          <i className={`bi ${isNavOpen ? 'bi-x' : 'bi-list'} fs-1`}></i>
        </button>
        
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center gap-2 gap-lg-4">
            <li className="nav-item">
              <a className="nav-link px-2 px-lg-3" href="#home" onClick={() => setIsNavOpen(false)}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 px-lg-3" href="#about" onClick={() => setIsNavOpen(false)}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 px-lg-3" href="#services" onClick={() => setIsNavOpen(false)}>
                Services
              </a>
            </li>
          </ul>
          
          <div className="d-lg-none text-center mt-3 mt-md-4">
            <a 
              href="#inquiry" 
              className="btn btn-primary rounded-pill px-4 py-2"
              onClick={() => setIsNavOpen(false)}
              style={{ fontSize: 'clamp(0.875rem, 4vw, 1rem)' }}
            >
              Contact Us
            </a>
          </div>
          
          <a 
            href="#inquiry" 
            className="btn btn-primary rounded-pill px-4 py-2 d-none d-lg-inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;