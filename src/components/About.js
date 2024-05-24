import React from 'react';
import '../styles.css';

const About = () => (
  <section id="about" className="about-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">About Me</h2>
          <p className="text-muted">I am a UI/UX Designer and Web Developer with a passion for creating beautiful and functional websites. I have a background in graphic design and a love for coding.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <i className="fas fa-4x fa-gem text-primary mb-3 sr-icon-1"></i>
            <h3 className="mb-3">Design</h3>
            <p className="text-muted">I create visually appealing designs that engage and attract users.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <i className="fas fa-4x fa-laptop-code text-primary mb-3 sr-icon-2"></i>
            <h3 className="mb-3">Development</h3>
            <p className="text-muted">I develop high-quality websites and web applications using the latest technologies.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <i className="fas fa-4x fa-heart text-primary mb-3 sr-icon-3"></i>
            <h3 className="mb-3">Passion</h3>
            <p className="text-muted">I am passionate about creating great user experiences and delivering the best results.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
