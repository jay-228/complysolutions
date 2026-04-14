import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Inquiry = () => {
  const [state, handleSubmit] = useForm("xnjoeddn");

  return (
    <section id="inquiry" className="inquiry-section bg-white" style={{ borderRadius: '60px 60px 0 0', position: 'relative', zIndex: 10 }}>
      <div className="inquiry-bg-element"></div>
      <div className="container position-relative z-2">
        <div className="row g-5 align-items-center">

          <div className="col-lg-6 reveal-up">
            <div className="hero-pill border-primary-subtle text-primary mb-4 shadow-sm" style={{ background: 'rgba(61, 108, 133, 0.08)', width: 'fit-content' }}>
              <i className="bi bi-envelope-check-fill text-primary me-2"></i> Get In Touch
            </div>
            <h2 className="display-3 fw-bold text-dark mb-4" style={{ letterSpacing: '-1.5px', lineHeight: '1.1' }}>
              Ready to <span className="text-gradient">transform</span> <br /> your workforce?
            </h2>
            <p className="text-muted fs-5 mb-5 pe-lg-5">
              Experience the perfect blend of technology and human expertise. Discover how ComplySolutions can secure, streamline, and scale your operations with zero legal risk.
            </p>

            <div className="premium-contact-card mb-5">
              <div className="card-top-accent"></div>
              <div className="d-flex align-items-center gap-4">
                <div className="director-avatar">
                  <span className="text-white fs-2 fw-bold">CM</span>
                  <div className="online-indicator"></div>
                </div>
                <div>
                  <h3 className="mb-0 fw-bold text-dark fs-4">Chintan Mevada</h3>
                  <p className="text-primary mb-0 fw-bold small text-uppercase tracking-wider">Managing Director</p>
                  <div className="mt-2 d-flex align-items-center gap-2 text-muted small">
                    <i className="bi bi-geo-alt-fill text-danger"></i> <span>Gujarat, India</span>
                  </div>
                </div>
              </div>
            </div>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=complysolutionshr@gmail.com" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center gap-3 p-3 rounded-4 bg-primary bg-opacity-10 border border-primary border-opacity-10 shadow-sm text-decoration-none transition-hover-card">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: 48, height: 48 }}>
                <i className="bi bi-envelope-heart text-white fs-5"></i>
              </div>
              <div className="pe-3">
                <div className="small text-muted fw-bold text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>Quick Support</div>
                <span className="fs-6 fw-bold text-dark">complysolutionshr@gmail.com</span>
              </div>
            </a>
          </div>

          <div className="col-lg-6 reveal-up delay-200">
            <div className="inquiry-card-premium shadow-lg bg-white">
              <div className="p-1 mb-4">
                <h3 className="fw-bold text-dark mb-2 fs-2">Send an Inquiry</h3>
                <p className="text-muted small">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>

              {state.succeeded ? (
                <div className="text-center py-5 animate-pop-in">
                  <div className="mb-4">
                    <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '4.5rem' }}></i>
                  </div>
                  <h4 className="fw-bold text-dark mb-3 fs-2">Thank You!</h4>
                  <p className="text-muted fs-5 px-lg-5">Your inquiry has been sent successfully. Our team will contact you shortly.</p>
                  <button className="btn btn-primary btn-glow rounded-pill px-5 py-2 mt-4 fw-bold" onClick={() => window.location.reload()}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 position-relative">
                    <label className="form-label-premium">Representative Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control form-control-premium"
                      placeholder="Enter Name"
                      required
                    />
                    <i className="bi bi-person input-icon"></i>
                  </div>
                  <div className="mb-4 position-relative">
                    <label className="form-label-premium">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control form-control-premium"
                      placeholder="Enter Your E-mail"
                      required
                    />
                    <i className="bi bi-envelope input-icon"></i>
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-danger small mt-1" />
                  </div>
                  <div className="mb-4 position-relative">
                    <label className="form-label-premium">Message Description</label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control form-control-premium"
                      rows="4"
                      placeholder="How can we assist you today?"
                      required
                    ></textarea>
                    <i className="bi bi-chat-dots input-icon" style={{ top: '45px' }}></i>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-danger small mt-1" />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="btn btn-primary btn-glow btn-lg w-100 rounded-4 py-3 fs-5 fw-bold shadow-lg mt-2"
                  >
                    {state.submitting ? 'Sending...' : 'Submit Inquiry'} <i className="bi bi-send-fill ms-2"></i>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
