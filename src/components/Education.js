import React from 'react';
import '../styles.css';

const Education = () => (
  <section id="education" className="education-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Education</h2>
          <p className="text-muted">Here is a summary of my academic background.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="education-item">
            <h3>Bachelor of Technology in Computer Science</h3>
            <p className="text-muted">Scaler School of Technology, Bangalore</p>
            <p>2023 - Present</p>
            <p>Relevant coursework: Data Structures, Algorithms, Web Development</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="education-item">
            <h3>Higher Secondary Education</h3>
            <p className="text-muted">XYZ School, Kanpur</p>
            <p>2019 - 2023</p>
            <p>Achievements: Top 5% of class, Science Club President</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
