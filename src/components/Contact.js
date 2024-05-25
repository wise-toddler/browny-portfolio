import React from 'react';
import '../styles.css';

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Contact</h2>
          <p className="text-muted">Feel free to reach out to me using the form below.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <form name="sentMessage" novalidate>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls">
                <label>Phone Number</label>
                <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls">
                <label>Message</label>
                <textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <br />
            <div id="success"></div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
