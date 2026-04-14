import React from 'react';
import heroImg from '../../assets/images/hero.png';

const Hero = ({ logo }) => {
  return (
    <section id="home" className="hero-section">
      <div className="section-glow-bg"></div>
      <div className="container">
        <div className="row align-items-center justify-content-between g-5">
          <div className="col-lg-6 reveal-up text-center text-lg-start">
            <div className="hero-pill border-primary-subtle text-primary mb-4 shadow-sm" style={{ background: 'rgba(46, 144, 185, 0.15)', width: 'fit-content' }}>
              <span className="badge bg-primary rounded-pill me-2">New</span>
              Innovating HR for the Modern Workforce
            </div>
            <h1 className="display-custom mb-5">
              Empowering Businesses <br />
              Through <span className="text-gradient">Smart HR & Compliance.</span>
            </h1>
            <p className="lead text-muted mb-5 pe-lg-5 fs-4 mx-auto mx-lg-0" style={{ fontWeight: 400, maxWidth: '600px' }}>
              At ComplySolutions HR Solutions, we simplify human resource management while ensuring complete legal compliance. From hiring the right talent to managing payroll and statutory requirements, we act as your trusted HR partner.
            </p>
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-center justify-content-lg-start mb-5">
              <a href="#services" className="btn btn-primary btn-glow btn-lg rounded-pill px-5 py-3 fs-5 fw-bold">
                Explore Services <i className="bi bi-arrow-right-circle ms-2"></i>
              </a>
              <div className="d-flex align-items-center gap-3">
                <div className="avatar-group d-flex">
                  <div className="avatar-mini bg-primary text-white" style={{ width: 45, height: 45, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid white', zIndex: 3 }}>HR</div>
                  <div className="avatar-mini bg-info text-white" style={{ width: 45, height: 45, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid white', marginLeft: '-15px', zIndex: 2 }}>CO</div>
                  <div className="avatar-mini bg-success text-white" style={{ width: 45, height: 45, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid white', marginLeft: '-15px', zIndex: 1 }}><i className="bi bi-check-lg"></i></div>
                </div>
                <div className="text-start">
                  <div className="fw-bold text-dark lh-1">100%</div>
                  <div className="small text-muted">Compliance focus</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 reveal-up delay-200 mt-5 mt-lg-0">
            <div className="hero-img-container">
              <img src={heroImg} alt="Corporate Team" className="hero-img" />

              <div className="glass-badge badge-tl">
                <div className="icon-orb bg-primary text-white shadow-lg">
                  <i className="bi bi-shield-check"></i>
                </div>
                <div>
                  <h5 className="mb-0 fw-bold text-dark fs-6">Secure</h5>
                  <span className="small text-muted fw-medium">Legal Compliance</span>
                </div>
              </div>

              <div className="glass-badge badge-br">
                <div className="icon-orb bg-success text-white shadow-lg">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div>
                  <h5 className="mb-0 fw-bold text-dark fs-6">Talent</h5>
                  <span className="small text-muted fw-medium">Acquisition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
