import '../styles.css';
import scaler_logo from '../assets/scaler-logo.svg';

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
            <img src={scaler_logo} className="img-fluid" alt="Client" style={{ height: '40px', width: '100px' }} />
            <h4>Scaler</h4>
            <p className="text-muted">Under Innovation Lab of Scaler school Of technology we developed a SFU server for scaler school of technology for handling the the bottle neck which was created due to mutiple devices tring to fetch same class from agora servers</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Clients;