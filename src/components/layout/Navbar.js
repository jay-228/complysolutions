import React from 'react';

const Navbar = ({ isNavOpen, setIsNavOpen, logo }) => {
  return (
    <nav id="mainNav" className="navbar navbar-expand-lg glass-nav">
      <div className="container-fluid px-0 px-md-2 d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#home" style={{ gap: 'clamp(6px, 1.5vw, 12px)' }}>
          <img src={logo} alt="ComplySolutions Logo" className="brand-logo shadow-sm" style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} />
          <span className="fw-bold text-gradient" style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.5rem)', letterSpacing: '-0.02em' }}>ComplySolutions</span>
        </a>
        <button
          className="navbar-toggler border-0 p-1"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <i className={`bi ${isNavOpen ? 'bi-x' : 'bi-list'} fs-2 text-dark`}></i>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto fw-medium text-center py-3 py-lg-0">
            <li className="nav-item"><a className="nav-link py-2 py-lg-0" href="#home" onClick={() => setIsNavOpen(false)}>Home</a></li>
            <li className="nav-item"><a className="nav-link py-2 py-lg-0" href="#about" onClick={() => setIsNavOpen(false)}>About</a></li>
            <li className="nav-item"><a className="nav-link py-2 py-lg-0" href="#services" onClick={() => setIsNavOpen(false)}>Services</a></li>
          </ul>
          <div className="text-center w-100 d-lg-none pb-3">
            <a href="#inquiry" className="btn btn-primary btn-glow rounded-pill px-5" onClick={() => setIsNavOpen(false)}>Contact Us</a>
          </div>
          <a href="#inquiry" className="btn btn-primary btn-glow rounded-pill px-4 d-none d-lg-inline-block">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
