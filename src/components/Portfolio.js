import React from 'react';
import '../styles.css';

const Portfolio = () => (
  <section id="portfolio" className="portfolio-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Portfolio</h2>
          <p className="text-muted">Here are some of my recent works.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="portfolio-item">
            <a href="#project1" className="portfolio-link">
              <img src="path/to/project1.jpg" className="img-fluid" alt="Project 1" />
              <div className="portfolio-caption">
                <h4>Project 1</h4>
                <p className="text-muted">Description of project 1.</p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="portfolio-item">
            <a href="#project2" className="portfolio-link">
              <img src="path/to/project2.jpg" className="img-fluid" alt="Project 2" />
              <div className="portfolio-caption">
                <h4>Project 2</h4>
                <p className="text-muted">Description of project 2.</p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="portfolio-item">
            <a href="#project3" className="portfolio-link">
              <img src="path/to/project3.jpg" className="img-fluid" alt="Project 3" />
              <div className="portfolio-caption">
                <h4>Project 3</h4>
                <p className="text-muted">Description of project 3.</p>
              </div>
            </a>
          </div>
        </div>
        {/* Add more projects similarly */}
      </div>
    </div>
  </section>
);

export default Portfolio;
