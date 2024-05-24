import React from 'react';
import '../styles.css';

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Skills</h2>
          <p className="text-muted">These are the skills I have acquired over my career.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 text-center">
          <div className="skill-item">
            <i className="fab fa-4x fa-html5 text-primary mb-3"></i>
            <h3>HTML5</h3>
            <p className="text-muted">Proficient in creating structured and semantic web pages.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 text-center">
          <div className="skill-item">
            <i className="fab fa-4x fa-css3-alt text-primary mb-3"></i>
            <h3>CSS3</h3>
            <p className="text-muted">Experienced in styling and layout with CSS and frameworks like Bootstrap.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 text-center">
          <div className="skill-item">
            <i className="fab fa-4x fa-js text-primary mb-3"></i>
            <h3>JavaScript</h3>
            <p className="text-muted">Skilled in JavaScript for creating dynamic and interactive web pages.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 text-center">
          <div className="skill-item">
            <i className="fab fa-4x fa-react text-primary mb-3"></i>
            <h3>React</h3>
            <p className="text-muted">Experienced in building scalable and maintainable web applications using React.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 text-center">
          <div className="skill-item">
            <i className="fab fa-4x fa-node-js text-primary mb-3"></i>
            <h3>Node.js</h3>
            <p className="text-muted">Proficient in server-side development using Node.js and Express.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 text-center">
          <div className="skill-item">
            <i className="fab fa-4x fa-git text-primary mb-3"></i>
            <h3>Git</h3>
            <p className="text-muted">Experienced in version control using Git and GitHub.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
