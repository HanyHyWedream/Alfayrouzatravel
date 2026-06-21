import { Link } from 'react-router-dom';
import tours from '../data/tours';
import '../styles/Tours.css';

function Tours() {
  return (
    <div className="tours-page">
      <div className="tours-page-header">
        <p className="tours-page-label">TOUR PROGRAMS</p>
        <h1 className="tours-page-title">All journeys</h1>
      </div>
      <div className="tours-page-grid">
        {tours.map((tour) => (
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
                <span>📍 {tour.location}</span>
                <span>🕐 {tour.duration}</span>
              </p>
              <h3 className="tour-name">{tour.title}</h3>
              <p className="tour-desc">{tour.description}</p>
              <Link to={`/tours/${tour.id}`} className="tour-link">
                View details ↗
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;