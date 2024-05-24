import React from 'react';
import '../styles.css';

const Experience = () => (
  <section id="experience" className="experience-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Experience</h2>
          <p className="text-muted">Here is a summary of my professional experience.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="experience-item">
            <h3>Front-End Developer</h3>
            <p className="text-muted">ABC Tech Solutions, Bangalore</p>
            <p>Jan 2022 - Present</p>
            <ul>
              <li>Developed responsive web applications using React.js and Bootstrap.</li>
              <li>Collaborated with designers and back-end developers to improve user experience.</li>
              <li>Optimized components for maximum performance across various devices and browsers.</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="experience-item">
            <h3>Web Developer Intern</h3>
            <p className="text-muted">XYZ Innovations, Kanpur</p>
            <p>Jun 2021 - Dec 2021</p>
            <ul>
              <li>Assisted in the development of the company’s main website.</li>
              <li>Worked on front-end design and development using HTML, CSS, and JavaScript.</li>
              <li>Conducted testing and debugging of the website.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
