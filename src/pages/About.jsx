import '../styles/About.css';

function About() {
  return (
    <div className="about">

      {/* HERO TEXT */}
      <section className="about-hero">
        <p className="about-label">ABOUT</p>
        <h1 className="about-title">One guide. One passion. All of Egypt.</h1>
        <div className="about-body">
          <p>
            I'm a Cairo-based licensed Egyptologist with over 15 years of experience
            leading private journeys across Egypt. I founded Alfayrouza Egyptian Travel
            to share the Egypt I grew up in — far from the rushed bus-tour clichés,
            crowded convoys and copy-paste itineraries.
          </p>
          <p>
            Over the years I've welcomed travellers from every corner of the world —
            families, couples, solo adventurers and everyone in between. Whether you
            want a single afternoon at the pyramids or a two-week journey from
            Alexandria to Abu Simbel, I'll design it around your pace, your interests
            and your budget.
          </p>
          <p>
            Every booking is handled by me personally. There is no call centre, no
            middleman — when you reach out, you're speaking directly with the person
            who will be with you on the ground.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="about-divider" />

      {/* STATS */}
      <section className="about-stats">
        <div className="stat">
          <span className="stat-number">15+</span>
          <span className="stat-label">Years of experience</span>
        </div>
        <div className="stat">
          <span className="stat-number gold">12k</span>
          <span className="stat-label gold">Happy travellers</span>
        </div>
        <div className="stat">
          <span className="stat-number">30+</span>
          <span className="stat-label">Tour programs</span>
        </div>
      </section>

    </div>
  );
}

export default About;