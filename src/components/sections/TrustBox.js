import React from 'react';

const TrustBox = ({ logo }) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="p-4 rounded-5 shadow-lg reveal-up" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', position: 'relative', overflow: 'hidden' }}>
          <div className="position-absolute" style={{ top: '-50%', right: '-10%', width: '300px', height: '300px', background: 'var(--primary)', opacity: '0.1', borderRadius: '50%', filter: 'blur(80px)' }}></div>
          <div className="row align-items-center g-4 text-center text-lg-start">
            <div className="col-lg-2 text-center">
              <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle shadow" style={{ width: '90px', height: '90px', padding: '12px' }}>
                <img src={logo} alt="Seal" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            </div>
            <div className="col-lg-7">
              <h3 className="text-white fw-bold mb-2">Committed to your business success</h3>
              <p className="text-white-50 mb-0">Join dozens of Indian businesses that trust ComplySolutions for their HR and statutory compliance needs.</p>
            </div>
            <div className="col-lg-3 text-lg-end">
              <a href="#inquiry" className="btn btn-primary btn-glow rounded-pill px-4 py-2 fw-bold">Contact Director</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBox;
