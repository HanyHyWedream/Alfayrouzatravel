import { Link } from 'react-router-dom';
import tours from '../data/tours.js';
import '../styles/Home.css';

function Home() {
  const whatsapp = 'https://wa.me/201147833098';

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src="/images/Intro.jpg"
          alt="Egypt Landscape"
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -2 }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">&#9679; EST. 2010 &middot; CAIRO</span>
          <h1 className="hero-title">
            Walk where pharaohs walked.<br />
            <span className="hero-title-gold">Sail where the Nile flows.</span>
          </h1>
          <p className="hero-subtitle">
            Hello , I'm a Cairo-based guide with over 15 years of experience leading
            private journeys across Egypt. From the pyramids of Giza to the temples
            of Luxor and the reefs of the Red Sea, I'll show you Egypt the way locals know it.
          </p>
        </div>
      </section>

      {/* FEATURED TOURS */}
      <section className="tours-section" id="tours">
        <div className="tours-header">
          <div>
            <p className="tours-label">TOUR PROGRAMS</p>
            <h2 className="tours-title">Featured journeys</h2>
          </div>
          <Link to="/tours" className="tours-all">
            All tours &rarr;
          </Link>
        </div>
        <div className="tours-grid">
          {tours.slice(0, 6).map((tour) => (
            <div className="tour-card" key={tour.id}>
              <div className="tour-image">
                <span className="tour-badge">{tour.badge}</span>
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="tour-img"
                />
              </div>
              <div className="tour-info">
                <p className="tour-meta">
                  <span>&#x1F4CD; {tour.location}</span>
                  <span>&#x1F550; {tour.duration}</span>
                </p>
                <h3 className="tour-name">{tour.title}</h3>
                <p className="tour-desc">{tour.description}</p>
                <Link to={`/tours/${tour.id}`} className="tour-link">
                  View details &#8599;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-section">
        <div className="cta-box">
          <div className="cta-left">
            <h2 className="cta-title">Have a custom trip in mind?</h2>
            <p className="cta-text">
              Tell me your dates, interests and pace. I'll design a private itinerary
              just for you, handle every booking and be right there with you on the ground.
            </p>
          </div>
          <div className="cta-buttons">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-whatsapp">
              &#x1F4AC; Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn-request">
              Send a request
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;