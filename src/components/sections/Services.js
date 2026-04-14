import React from 'react';
import ServiceCard from '../common/ServiceCard';

const Services = () => {
  return (
    <section id="services" className="services-section" style={{ background: '#f8fafc', position: 'relative', paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="section-glow-bg"></div>
      <div className="container">
        <div className="text-center mx-auto mb-5 pb-4 reveal-up" style={{ maxWidth: '800px' }}>
          <div className="hero-pill mb-4 border-primary-subtle text-primary shadow-sm" style={{ background: 'rgba(37,99,235,0.06)' }}>Our Expertise</div>
          <h2 className="display-4 fw-extrabold mb-4 text-dark">Comprehensive <br /><span className="text-gradient">HR Management Ecosystem</span></h2>
          <p className="lead text-muted fs-5">We provide the strategic backbone for your company's growth through meticulous compliance and talent optimization.</p>
        </div>

        <div className="row g-4 g-lg-5">
          <ServiceCard delay={100} icon="bi-person-fill-add" color="primary" title="Recruitment & Talent Acquisition" text="We help you hire the right talent through a structured and efficient recruitment process aligned with your business goals." />
          <ServiceCard delay={200} icon="bi-wallet2" color="success" title="Attendance & Payroll Processing" text="Accurate attendance tracking and timely payroll processing with full statutory compliance including PF, ESIC, and TDS." />
          <ServiceCard delay={300} icon="bi-person-workspace" color="warning" title="Seamless Employee Onboarding" text="Smooth onboarding experience covering documentation, induction, and employee integration." />
          <ServiceCard delay={400} icon="bi-bullseye" color="danger" title="KRA/KPI Framework Design" text="We design powerful performance frameworks that align employee goals with organizational success." />
          <ServiceCard delay={100} icon="bi-graph-up-arrow" color="info" title="Performance Development" text="Structured appraisal systems and continuous performance management to boost productivity." />
          <ServiceCard delay={200} icon="bi-door-open" color="secondary" title="Exit Management & F&F" text="Professional handling of employee exits, including compliance-driven full & final settlements." />
          <ServiceCard delay={300} icon="bi-mortarboard" color="primary" title="Apprenticeship Program" text="End-to-end support in setting up and managing apprenticeship programs in line with regulations." />
          <ServiceCard delay={400} icon="bi-shield-check" color="success" title="Legal & Statutory Compliance" text="We ensure adherence to all labor laws and regulatory requirements, minimizing risks and ensuring audit readiness." />
        </div>
      </div>
    </section>
  );
};

export default Services;
