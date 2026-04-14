import React from 'react';

const ServiceCard = ({ icon, title, text, delay, color }) => (
  <div className={`col-sm-6 col-lg-4 col-xl-3 reveal-up delay-${delay}`}>
    <div className="service-card">
      <div className={`service-icon-wrapper bg-soft-${color} text-${color} mb-4`} style={{ width: '64px', height: '64px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem' }}>
        <i className={`bi ${icon}`}></i>
      </div>
      <h4 className="fw-bold mb-3 fs-5">{title}</h4>
      <p className="text-muted small mb-0 lh-base">{text}</p>
    </div>
  </div>
);

export default ServiceCard;
