import React from 'react';

const Navbar = ({ isNavOpen, setIsNavOpen, logo }) => {
  return (
    <nav className="navbar navbar-expand-lg py-2">
      <div className="container-fluid px-2 px-lg-4 d-flex align-items-center justify-content-between">

        {/* Logo + Text */}
        <a
          href="#home"
          className="navbar-brand d-flex align-items-center m-0"
          style={{ gap: '8px', maxWidth: '75%' }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              height: 'clamp(30px, 5vw, 45px)',
              width: 'clamp(30px, 5vw, 45px)',
              objectFit: 'contain'
            }}
          />

          <span
            className="fw-bold text-truncate"
            style={{
              fontSize: 'clamp(14px, 2.5vw, 20px)'
            }}
          >
            ComplySolutions
          </span>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <i className={`bi ${isNavOpen ? 'bi-x' : 'bi-list'} fs-3`}></i>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>

          <ul className="navbar-nav mx-auto text-center mt-3 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={() => setIsNavOpen(false)}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => setIsNavOpen(false)}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={() => setIsNavOpen(false)}>
                Services
              </a>
            </li>
          </ul>

          {/* Mobile Button */}
          <div className="d-lg-none mt-3">
            <a
              href="#inquiry"
              className="btn btn-primary w-100 rounded-pill"
              onClick={() => setIsNavOpen(false)}
            >
              Contact Us
            </a>
          </div>

          {/* Desktop Button */}
          <a
            href="#inquiry"
            className="btn btn-primary rounded-pill px-4 d-none d-lg-inline-block"
          >
            Contact Us
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;