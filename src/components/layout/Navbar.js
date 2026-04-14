import React from 'react';

const Navbar = ({ isNavOpen, setIsNavOpen, logo }) => {
  return (
    <nav id="mainNav" className="navbar navbar-expand-lg glass-nav">
      <div className="container-fluid px-lg-4 d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#home" style={{ gap: '12px' }}>
          <img src={logo} alt="ComplySolutions Logo" className="brand-logo shadow-sm" style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} />
          <span className="fw-bold text-gradient fs-4">ComplySolutions</span>
        </a>
        <button
          className="navbar-toggler border-0 p-0"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <i className={`bi ${isNavOpen ? 'bi-x' : 'bi-list'} fs-1 text-dark`}></i>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto fw-medium text-center">
            <li className="nav-item"><a className="nav-link" href="#home" onClick={() => setIsNavOpen(false)}>Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about" onClick={() => setIsNavOpen(false)}>About</a></li>
            <li className="nav-item"><a className="nav-link" href="#services" onClick={() => setIsNavOpen(false)}>Services</a></li>
          </ul>
          <div className="text-center w-100 d-lg-none mt-3">
            <a href="#inquiry" className="btn btn-primary btn-glow rounded-pill px-4" onClick={() => setIsNavOpen(false)}>Contact Us</a>
          </div>
          <a href="#inquiry" className="btn btn-primary btn-glow rounded-pill px-4 d-none d-lg-inline-block">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
