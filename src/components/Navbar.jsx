import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const whatsapp = 'https://wa.me/201147833098';
  const phone = '+20 114 783 3098';
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-circle">A</div>
        <div className="logo-text">
          <span className="logo-name">Alfayrouza</span>
          <span className="logo-sub">EGYPTIAN TRAVEL</span>
        </div>
      </div>

      {/* HAMBURGER */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? 'ham-line open' : 'ham-line'} />
        <span className={menuOpen ? 'ham-line open' : 'ham-line'} />
        <span className={menuOpen ? 'ham-line open' : 'ham-line'} />
      </button>

      {/* MOBILE MENU */}
      <div className={menuOpen ? 'mobile-menu open' : 'mobile-menu'}>
        <ul className="mobile-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/tours" className={location.pathname === '/tours' ? 'active' : ''} onClick={closeMenu}>Tours</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link></li>
        </ul>
        <a href={`tel:${phone}`} className="mobile-phone" onClick={closeMenu}>📞 {phone}</a>
        <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-reserve mobile-wa" onClick={closeMenu}>💬 Reserve on WhatsApp</a>
      </div>

      {/* DESKTOP RIGHT */}
      <ul className="navbar-links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/tours" className={location.pathname === '/tours' ? 'active' : ''}>Tours</Link></li>
        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
      </ul>

      <div className="navbar-right">
        <a href={`tel:${phone}`} className="navbar-phone">📞 {phone}</a>
        <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-reserve">💬 Reserve</a>
      </div>
    </nav>
  );
}

export default Navbar;