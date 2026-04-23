import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="page-header">
        <div className="container">
          <p className="subtitle">Get In Touch</p>
          <h1>Let's Start a <span className="text-red">Conversation</span></h1>
        </div>
      </header>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal active">
              <h2>Become a <span className="text-red">Partner</span></h2>
              <p>Join the Amarkanth family. Whether you are looking for distributorship or wholesale partnerships, let's bring premium tea to more homes together.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <MapPin className="text-red" />
                  <div>
                    <h4>Location</h4>
                    <p>14, Sawarakar Path, Ward 10, Anjad, Dist. Barwani, M.P. — 451556</p>
                  </div>
                </div>
                <div className="info-item">
                  <Mail className="text-red" />
                  <div>
                    <h4>Email</h4>
                    <p>ptc.anjad@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <Phone className="text-red" />
                  <div>
                    <h4>Phone</h4>
                    <p>7879111227</p>
                  </div>
                </div>
                
                <div className="social-connect">
                  <h4>Connect</h4>
                  <div className="social-icons-row">
                    <a href="https://www.instagram.com/amarkanth_tea/" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://www.facebook.com/Amarkanthpremiumtea/" target="_blank" rel="noreferrer">Facebook</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container reveal active">
              <h3 className="form-title">Distributor Inquiry</h3>
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="email@example.com" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>City / Location</label>
                    <input type="text" placeholder="e.g. Indore, M.P." />
                  </div>
                  <div className="form-group">
                    <label>Business Type</label>
                    <select>
                      <option>Select Type</option>
                      <option>Distributor</option>
                      <option>Wholesaler</option>
                      <option>Retailer / Café</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Your Message</label>
                  <textarea rows="4" placeholder="Tell us about your business..."></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px'}}>
                  Send Inquiry <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-embed-section">
        <div className="container">
          <div className="map-frame reveal active">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.0!2d75.0!3d22.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDAwJzAwLjAiTiA3NcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1713890000000!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{border:0, borderRadius: '12px'}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Amarkanth Group Location"
            ></iframe>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-page {
          background: var(--white);
          min-height: 100vh;
        }

        .contact-section {
          padding-bottom: 80px;
        }

        .map-embed-section {
          padding-bottom: 100px;
        }

        .map-frame {
          box-shadow: 0 40px 80px rgba(0,0,0,0.1);
          border-radius: 12px;
          overflow: hidden;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 100px;
          align-items: flex-start;
        }

        .contact-info h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .contact-info p {
          color: var(--text-muted);
          margin-bottom: 50px;
          font-size: 1.1rem;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .info-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .info-item h4 {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
          font-family: 'Outfit', sans-serif;
        }

        .info-item p {
          margin-bottom: 0;
          font-size: 1rem;
        }

        .social-connect {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        .social-connect h4 {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #666;
          margin-bottom: 15px;
        }

        .social-icons-row {
          display: flex;
          gap: 25px;
        }

        .social-icons-row a {
          color: #d50505;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.95rem;
          transition: 0.3s ease;
        }

        .social-icons-row a:hover {
          opacity: 0.7;
        }

        .contact-form-container {
          background: #fdfbf7;
          padding: 60px;
          border-radius: 12px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
        }

        .form-title {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 35px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #111;
          border-bottom: 2px solid #d50505;
          display: inline-block;
          padding-bottom: 5px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .form-row {
          display: flex;
          gap: 20px;
        }

        .form-row .form-group {
          flex: 1;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-group label {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .form-group input, 
        .form-group select, 
        .form-group textarea {
          padding: 15px;
          background: var(--white);
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 2px;
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: var(--transition-smooth);
        }

        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          border-color: var(--primary-red);
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .contact-form-container {
            padding: 30px;
          }
        }
      `}} />
    </div>
  );
};

export default Contact;
