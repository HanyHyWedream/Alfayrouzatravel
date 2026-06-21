import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const whatsapp = 'https://wa.me/201147833098';
  const phone = '+20 114 783 3098';

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h3 className="footer-brand">Alfayrouza Egyptian Travel</h3>
          <p className="footer-tagline">
            Curated journeys through the land of pharaohs. Locally based experts
            crafting authentic journeys across Egypt.
          </p>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">EXPLORE</p>
          <ul>
            <li><Link to="/tours">All tours</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">REACH US</p>
          <ul>
            <li>Cairo, Egypt</li>
            <li>essamways@hotmail.com</li>
            <li>
              <a href={`tel:${phone}`}>{phone}</a>
            </li>
            <li>
              <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Alfayrouza Egyptian Travel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;