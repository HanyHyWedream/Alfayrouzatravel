import { useState } from 'react';
import tours from '../data/tours';
import '../styles/Tours.css';

const WA = '201147833098';

function TourExpanded({ tour }) {
  const [activeImg, setActiveImg] = useState(0);
  const gallery = tour.gallery || [tour.image];

  const waMsg = encodeURIComponent(
    `Hello! I'm interested in the ${tour.title} tour. Can you send me more details?`
  );

  return (
    <div className="tour-expanded">

      {/* GALLERY */}
      <div className="te-gallery">
        <div className="te-gallery-main">
          <img src={gallery[activeImg]} alt={tour.title} />
        </div>
        {gallery.length > 1 && (
          <div className="te-gallery-thumbs">
            {gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`view-${i}`}
                className={activeImg === i ? 'te-thumb active' : 'te-thumb'}
                onClick={() => setActiveImg(i)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="te-body">

        {/* LEFT */}
        <div className="te-left">

          {/* INCLUDED */}
          <div>
            <p className="te-label">WHAT'S INCLUDED</p>
            <ul className="te-included">
              {tour.included.map((item, i) => (
                <li key={i}>
                  <span className="te-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <p className="te-label">ABOUT THIS JOURNEY</p>
            <p className="te-about">{tour.about}</p>
          </div>

          {/* EXCURSIONS — only if exists */}
          {tour.excursions && (
            <div>
              <p className="te-label">EXCURSIONS</p>
              {tour.excursions.map((region) => (
                <div key={region.region} className="te-region">
                  <h4 className="te-region-title">{region.region}</h4>
                  <ul className="te-region-list">
                    {region.items.map((item) => (
                      <li key={item.name}>
                        <span className="te-check">✓</span>
                        <div>
                          <strong>{item.name}</strong>
                          <p>{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* ITINERARIES — only if exists */}
          {tour.itineraries && (
            <div>
              <p className="te-label">ITINERARIES</p>
              <div className="te-itinerary-cards">
                {tour.itineraries.map((it) => (
                  <div key={it.label} className="te-itinerary-card">
                    <span className="te-it-label">{it.label}</span>
                    <span className="te-it-route">{it.route}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* SIDEBAR */}
        <div className="te-sidebar">
          <div className="te-sidebar-box">
            <p className="te-label">RESERVE YOUR SPOT</p>
            <h3 className="te-sidebar-name">{tour.title}</h3>
            <hr className="te-divider" />
            <div className="te-sidebar-info">
              <div className="te-sidebar-row"><span>Duration</span><span>{tour.duration}</span></div>
              <div className="te-sidebar-row"><span>Location</span><span>{tour.location}</span></div>
              <div className="te-sidebar-row"><span>Group size</span><span>{tour.groupSize}</span></div>
              <div className="te-sidebar-row"><span>Language</span><span>{tour.language}</span></div>
            </div>
            <hr className="te-divider" />
            
            {/* FIX IS RIGHT HERE: Added the missing <a element */}
            <a 
              href={`https://wa.me/${WA}?text=${waMsg}`}
              target="_blank"
              rel="noreferrer"
              className="te-btn-wa"
            >
              💬 Reserve on WhatsApp
            </a>
            <p className="te-sidebar-note">No payment until your itinerary is confirmed.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

function Tours() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="tours-page">
      <div className="tours-page-header">
        <p className="tours-page-label">TOUR PROGRAMS</p>
        <h1 className="tours-page-title">All journeys</h1>
      </div>
      <div className="tours-page-grid">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className={`tour-card ${expandedId === tour.id ? 'tour-card-expanded' : ''}`}
          >
            <div className="tour-image">
              <span className="tour-badge">{tour.badge}</span>
              <img src={tour.image} alt={tour.title} className="tour-img" />
            </div>
            <div className="tour-info">
              <p className="tour-meta">
                <span>📍 {tour.location}</span>
                <span>🕐 {tour.duration}</span>
              </p>
              <h3 className="tour-name">{tour.title}</h3>
              <p className="tour-desc">{tour.description}</p>
              <button
                className="tour-link"
                onClick={() => setExpandedId(expandedId === tour.id ? null : tour.id)}
              >
                {expandedId === tour.id ? 'Hide details ↑' : 'View details ↗'}
              </button>
            </div>

            {expandedId === tour.id && <TourExpanded tour={tour} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;