import React from 'react';

const Footer = ({ logo }) => {
  return (
    <footer className="footer-section">
      <div className="footer-grid-overlay"></div>
      <div className="container position-relative z-1">
        <div className="row g-5 mb-5 pb-5 border-bottom border-secondary border-opacity-10 text-center text-lg-start">
          <div className="col-lg-5">
            <div className="brand-block-footer mb-4 justify-content-center justify-content-lg-start">
              <img src={logo} alt="Logo" className="footer-brand-logo" />
              <div>
                <h3 className="fw-bold text-white mb-0 fs-3">ComplySolutions</h3>
                <span className="text-primary-light small fw-bold tracking-widest text-uppercase">HR Solutions</span>
              </div>
            </div>
            <p className="footer-tagline mb-4 px-3 px-lg-0">
              Empowering businesses through smart HR solutions and comprehensive statutory compliance. Your trusted partner for sustainable growth and absolute reliability.
            </p>
          </div>
          <div className="col-lg-2 col-6">
            <h5 className="footer-heading mb-4">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#inquiry">Get In Touch</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-6">
            <h5 className="footer-heading mb-4">Expertise</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#services">Recruitment</a></li>
              <li><a href="#services">Payroll</a></li>
              <li><a href="#services">Compliance</a></li>
              <li><a href="#services">Onboarding</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="footer-heading mb-4 px-3 px-lg-0">Speak to Us</h5>
            <div className="footer-contact-wrapper align-items-center align-items-lg-start px-3 px-lg-0">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=complysolutionshr@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-contact-item text-decoration-none">
                <div className="contact-icon-box">
                  <i className="bi bi-envelope-at-fill"></i>
                </div>
                <div className="text-start">
                  <div className="contact-label">Send Email</div>
                  <div className="contact-value">complysolutionshr@gmail.com</div>
                </div>
              </a>
              <div className="footer-contact-item">
                <div className="contact-icon-box">
                  <i className="bi bi-person-circle"></i>
                </div>
                <div className="text-start">
                  <div className="contact-label">Director</div>
                  <div className="contact-value">Chintan Mevada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 pt-2 text-center text-md-start">
          <p className="mb-0 small footer-copyright">&copy; {new Date().getFullYear()} ComplySolutions HR Solutions. All Rights Reserved.</p>
          <div className="d-flex gap-4">
            <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
            <a href="#terms" className="footer-bottom-link">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
