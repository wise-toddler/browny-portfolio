import React from 'react';
import '../styles.css';

const Clients = () => (
  <section id="clients" className="clients-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Clients</h2>
          <p className="text-muted">Here are some of the clients I have worked with.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="client-item">
            <img src="path/to/client1-logo.jpg" className="img-fluid" alt="Client 1" />
            <h4>Client 1</h4>
            <p className="text-muted">Description of work done for Client 1.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="client-item">
            <img src="path/to/client2-logo.jpg" className="img-fluid" alt="Client 2" />
            <h4>Client 2</h4>
            <p className="text-muted">Description of work done for Client 2.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="client-item">
            <img src="path/to/client3-logo.jpg" className="img-fluid" alt="Client 3" />
            <h4>Client 3</h4>
            <p className="text-muted">Description of work done for Client 3.</p>
          </div>
        </div>
        {/* Add more clients similarly */}
      </div>
    </div>
  </section>
);

export default Clients;
