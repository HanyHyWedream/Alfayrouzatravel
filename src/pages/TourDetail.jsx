import { useParams, Link } from 'react-router-dom';
import tours from '../data/tours';
import '../styles/TourDetail.css';

function TourDetail() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === id);
  const whatsapp = '201147833098';

  if (!tour) {
    return (
      <div className="tour-not-found">
        <h2>Tour not found.</h2>
        <Link to="/tours">Back to all tours</Link>
      </div>
    );
  }

  const related = tours.filter((t) => t.id !== tour.id).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    'Hello! I am interested in the ' + tour.title + ' tour. Can you send me more details?'
  );

  return (
    <div className="tour-detail">

      {/* HERO */}
      <div className="td-hero">
        <img
          src={tour.image}
          alt={tour.title}
          className="td-hero-img"
        />
        <div className="td-hero-overlay" />
        <div className="td-hero-content">
          <Link to="/tours" className="td-back">&larr; All tours</Link>
          <p className="td-hero-meta">
            <span>&#x1F4CD; {tour.location}</span>
            <span>&#x1F550; {tour.duration.toUpperCase()}</span>
          </p>
          <h1 className="td-hero-title">{tour.title}</h1>
          <p className="td-hero-desc">{tour.description}</p>
        </div>
      </div>

      {/* BODY */}
      <div className="td-body">

        {/* LEFT */}
        <div className="td-left">
          <div>
            <h2 className="td-section-title">What's included</h2>
            <ul className="td-included">
              {tour.included.map((item, i) => (
                <li key={i}>
                  <span className="td-check">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="td-section-title">About this journey</h2>
            <p className="td-about">{tour.about}</p>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="td-sidebar">
          <div className="td-sidebar-box">
            <p className="td-sidebar-label">RESERVE YOUR SPOT</p>
            <h3 className="td-sidebar-tour-name">{tour.title}</h3>
            <div className="td-sidebar-divider" />
            <div className="td-sidebar-info">
              <div className="td-sidebar-row">
                <span>Duration</span>
                <span>{tour.duration}</span>
              </div>
              <div className="td-sidebar-row">
                <span>Location</span>
                <span>{tour.location}</span>
              </div>
              <div className="td-sidebar-row">
                <span>Group size</span>
                <span>{tour.groupSize}</span>
              </div>
              <div className="td-sidebar-row">
                <span>Language</span>
                <span>{tour.language}</span>
              </div>
            </div>
            <div className="td-sidebar-divider" />
            
            {/* 🛠️ FIXED: Added the opening 'a' tag back in place */}
            <a 
              href={'https://wa.me/' + whatsapp + '?text=' + whatsappMessage}
              target="_blank"
              rel="noreferrer"
              className="td-btn-whatsapp"
            >
              &#x1F4AC; Reserve on WhatsApp
            </a>
            <Link to="/contact" className="td-btn-form">
              Request by form
            </Link>
            <p className="td-sidebar-note">No payment until your itinerary is confirmed.</p>
          </div>
        </div>

      </div>

      {/* YOU MAY ALSO LIKE */}
      <div className="td-related">
        <h2 className="td-related-title">You may also like</h2>
        <div className="td-related-grid">
          {related.map((t) => (
            <Link to={'/tours/' + t.id} key={t.id} className="td-related-card">
              <img
                src={t.image}
                alt={t.title}
                className="td-related-img"
              />
              <div className="td-related-info">
                <p className="td-related-meta">&#x1F4CD; {t.location} &middot; {t.duration}</p>
                <h3 className="td-related-name">{t.title}</h3>
                <p className="td-related-desc">{t.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}

export default TourDetail;
