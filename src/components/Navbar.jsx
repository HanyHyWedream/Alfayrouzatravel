import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const whatsapp = 'https://wa.me/201147833098';
  const phone = '+20 114 783 3098';
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-circle">A</div>
        <div className="logo-text">
          <span className="logo-name">Alfayrouza</span>
          <span className="logo-sub">EGYPTIAN TRAVEL</span>
        </div>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/tours" className={location.pathname === '/tours' ? 'active' : ''}>Tours</Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <a href={`tel:${phone}`} className="navbar-phone">
          📞 {phone}
        </a>
        <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-reserve">
          💬 Reserve
        </a>
      </div>
    </nav>
  );
}

export default Navbar;