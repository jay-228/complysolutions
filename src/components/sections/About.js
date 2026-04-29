import React from 'react';

const About = () => {
  return (
    <section id="about" className="padding-section position-relative overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="container position-relative z-1">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 reveal-up">
            <div className="position-relative">
              <span className="hero-pill mb-3 border-primary-subtle text-primary shadow-sm" style={{ background: 'rgba(61, 108, 133, 0.08)', display: 'inline-flex' }}>
                <i className="bi bi-star-fill me-2"></i> Who We Are
              </span>
              <h2 className="display-4 fw-bold mb-4 text-dark" style={{ lineHeight: '1.2' }}>About <span className="text-gradient">ComplyBridge</span></h2>
              <p className="lead text-muted fs-5 mb-4">
                We are a dedicated HR and compliance service provider focused on helping organizations
                streamline processes and meet regulatory requirements with ease.
              </p>
              <p className="text-muted">
                We bring together expertise, technology, and industry best practices to deliver efficient,
                transparent, and reliable HR solutions strictly tailored to your everyday business needs.
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-md-6 reveal-up delay-100">
                <div className="h-100 p-4 p-xl-5 rounded-5 shadow-lg border border-light transition-hover-card" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)', position: 'relative', overflow: 'hidden' }}>
                  <div className="position-absolute" style={{ top: '-10px', right: '-10px', width: '60px', height: '60px', background: 'var(--primary)', opacity: '0.05', borderRadius: '50%' }}></div>
                  <div className="icon-box bg-white mb-4 shadow-sm" style={{ width: '64px', height: '64px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.5rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <i className="bi bi-bullseye"></i>
                  </div>
                  <h4 className="fw-bold mb-3 text-dark">Our Mission</h4>
                  <p className="text-muted mb-0 small lh-base">
                    To empower organizations by taking the complexity out of HR and compliance, allowing you to focus entirely on your core business growth.
                  </p>
                </div>
              </div>
              <div className="col-md-6 reveal-up delay-200">
                <div className="h-100 p-4 p-xl-5 rounded-5 shadow-lg border border-light transition-hover-card" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)', position: 'relative', overflow: 'hidden' }}>
                  <div className="position-absolute" style={{ top: '-10px', right: '-10px', width: '60px', height: '60px', background: 'var(--accent)', opacity: '0.05', borderRadius: '50%' }}></div>
                  <div className="icon-box bg-white mb-4 shadow-sm" style={{ width: '64px', height: '64px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '1.5rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <i className="bi bi-eye"></i>
                  </div>
                  <h4 className="fw-bold mb-3 text-dark">Our Vision</h4>
                  <p className="text-muted mb-0 small lh-base">
                    To redefine HR management standards globally, making statutory compliance accessible, transparent, and effortlessly efficient for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
