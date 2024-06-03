import React from 'react';
import dp from '../assets/profile.jpg';
import '../styles.css';

const Profile = () => (
  <section id="profile" className="profile-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-5">
          <div className="profile-photo">
            <img src={dp} className="img-fluid" alt="Profile" />
          </div>
        </div>
        <div className="col-lg-8 col-md-7">
          <div className="profile-info">
            <h1 className="profile-name"> Shivansh Singh </h1>
            <p className="profile-bio">Short bio about yourself. Describe your profession, interests, and background.</p>
            <div className="profile-social-links">
              <a href="https://twitter.com/yourprofile" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="https://github.com/yourprofile" className="social-link"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/yourprofile" className="social-link"><i className="fab fa-linkedin"></i></a>
              {/* Add more social links as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Profile;
