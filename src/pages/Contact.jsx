import '../styles/Contact.css';

function Contact() {
  const whatsapp = '201147833098';

  const tours = [
    'Pyramids of Giza & Sphinx',
    'Islamic & Coptic Cairo',
    'Luxor — Karnak & Valley of the Kings',
    'Nile Cruise — Luxor to Aswan',
    'Abu Simbel Sunrise',
    'Red Sea Snorkel — Hurghada',
  ];

  function handleSubmit() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const tour = document.getElementById('tour').value;
    const travellers = document.getElementById('travellers').value.trim();
    const dates = document.getElementById('dates').value.trim();
    const notes = document.getElementById('notes').value.trim();

    const message =
      `Hello, I'd like to reserve a trip!` +
      `\n\n👤 Name: ${name || 'N/A'}` +
      `\n📧 Email: ${email || 'N/A'}` +
      `\n🗺️ Tour: ${tour}` +
      `\n👥 Travellers: ${travellers || 'N/A'}` +
      `\n📅 Preferred Dates: ${dates || 'N/A'}` +
      `\n📝 Notes: ${notes || 'N/A'}`;

    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  return (
    <div className="contact">
      <div className="contact-inner">

        {/* LEFT */}
        <div className="contact-left">
          <p className="contact-label">RESERVE YOUR TRIP</p>
          <h1 className="contact-title">Let's plan your Egypt.</h1>
          <p className="contact-desc">
            Fill in the form and I'll get back to you within a few hours with
            availability, a tailored itinerary and a final price. You can also
            reach me directly:
          </p>
          <ul className="contact-info">
            <li>
              <div className="contact-icon">💬</div>
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
                WhatsApp chat
              </a>
            </li>
            <li>
              <div className="contact-icon">📞</div>
              <a href="tel:+201147833098">+20 114 783 3098</a>
            </li>
            <li>
              <div className="contact-icon">✉️</div>
              <a href="mailto:essamways@hotmail.com">essamways@hotmail.com</a>
            </li>
            <li>
              <div className="contact-icon">📍</div>
              <span>Cairo, Egypt</span>
            </li>
          </ul>
        </div>

        {/* RIGHT — FORM */}
        <div className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">FULL NAME</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input id="email" type="email" placeholder="you@email.com" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tour">CHOOSE A TOUR</label>
              <select id="tour">
                {tours.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="travellers">TRAVELLERS</label>
              <input id="travellers" type="number" defaultValue="2" min="1" />
            </div>
          </div>
          <div className="form-group full">
            <label htmlFor="dates">PREFERRED DATES</label>
            <input id="dates" type="text" placeholder="e.g. 12 – 19 October 2026" />
          </div>
          <div className="form-group full">
            <label htmlFor="notes">NOTES</label>
            <textarea
              id="notes"
              rows="5"
              placeholder="Anything I should know? Accessibility, dietary, special interests..."
            />
          </div>
          <button className="btn-whatsapp-submit" onClick={handleSubmit}>
            💬 Send via WhatsApp
          </button>
          <p className="form-note">
            I'll open WhatsApp with your request pre-filled — just hit send.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Contact;