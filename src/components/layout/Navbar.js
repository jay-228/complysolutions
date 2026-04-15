import React from 'react';

const Navbar = ({ isNavOpen, setIsNavOpen, logo }) => {
  return (
    <nav id="mainNav" className="navbar navbar-expand-lg glass-nav py-2">
      <div className="container-fluid px-2 px-lg-4 d-flex justify-content-between align-items-center">

        {/* Logo */}
        <a
          className="navbar-brand d-flex align-items-center"
          href="#home"
          style={{ gap: '10px', maxWidth: '75%' }}
        >
          <img
            src={logo}
            alt="ComplySolutions Logo"
            className="brand-logo shadow-sm"
            style={{
              objectFit: 'contain',
              mixBlendMode: 'multiply',
              height: 'clamp(32px, 5vw, 45px)',
              width: 'clamp(32px, 5vw, 45px)'
            }}
          />

          <span
            className="fw-bold text-gradient text-truncate"
            style={{
              fontSize: 'clamp(14px, 2.5vw, 22px)'
            }}
          >
            ComplySolutions
          </span>
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler border-0 p-0"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <i className={`bi ${isNavOpen ? 'bi-x' : 'bi-list'} fs-3 text-dark`}></i>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">

          <ul className="navbar-nav mx-auto fw-medium text-center mt-3 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={() => setIsNavOpen(false)}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => setIsNavOpen(false)}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={() => setIsNavOpen(false)}>Services</a>
            </li>
          </ul>

          {/* Mobile Button */}
          <div className="text-center w-100 d-lg-none mt-3">
            <a
              href="#inquiry"
              className="btn btn-primary btn-glow rounded-pill px-4 w-100"
              onClick={() => setIsNavOpen(false)}
            >
              Contact Us
            </a>
          </div>

          {/* Desktop Button */}
          <a
            href="#inquiry"
            className="btn btn-primary btn-glow rounded-pill px-4 d-none d-lg-inline-block"
          >
            Contact Us
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;