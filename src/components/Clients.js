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
            <img src="assests/client1-logo.jpg" className="img-fluid" alt="Acme Corporation" />
            <h4>Acme Corporation</h4>
            <p className="text-muted">Developed a responsive e-commerce website, improving sales by 20%.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="client-item">
            <img src="assests/client2-logo.jpg" className="img-fluid" alt="Globex Industries" />
            <h4>Globex Industries</h4>
            <p className="text-muted">Implemented a secure customer data management system, reducing data breaches to zero.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="client-item">
            <img src="assests/client3-logo.jpg" className="img-fluid" alt="Soylent Corp" />
            <h4>Soylent Corp</h4>
            <p className="text-muted">Optimized website SEO, increasing organic traffic by 30%.</p>
          </div>
        </div>
        {/* Add more clients similarly */}
      </div>
    </div>
  </section>
);

export default Clients;