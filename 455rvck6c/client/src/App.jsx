
import { useMemo, useState } from "react";
import "./App.css";

const events = [
  {
    id: 1,
    title: "CodeStorm Hackathon",
    category: "Hackathon",
    date: "OCT 18, 2026",
    time: "09:00 AM",
    location: "Innovation Lab",
    description: "Build bold ideas, solve real problems, and create something extraordinary in a team.",
    icon: "⌘",
    color: "violet",
    seats: 120,
    tag: "FEATURED",
  },
  {
    id: 2,
    title: "AI Nexus",
    category: "Workshop",
    date: "OCT 21, 2026",
    time: "10:30 AM",
    location: "Seminar Hall A",
    description: "Explore artificial intelligence, machine learning, and practical AI applications.",
    icon: "✳",
    color: "cyan",
    seats: 80,
    tag: "POPULAR",
  },
  {
    id: 3,
    title: "Pixel Perfect",
    category: "Design",
    date: "OCT 24, 2026",
    time: "11:00 AM",
    location: "Design Studio",
    description: "A creative UI/UX challenge focused on thoughtful interfaces and great experiences.",
    icon: "✧",
    color: "pink",
    seats: 60,
    tag: "CREATIVE",
  },
  {
    id: 4,
    title: "Battle of Brains",
    category: "Competition",
    date: "OCT 27, 2026",
    time: "01:00 PM",
    location: "Main Auditorium",
    description: "Put your logic, technical knowledge, and problem-solving skills to the test.",
    icon: "⌁",
    color: "orange",
    seats: 100,
    tag: "CHALLENGE",
  },
  {
    id: 5,
    title: "Startup Spark",
    category: "Networking",
    date: "OCT 29, 2026",
    time: "02:00 PM",
    location: "Innovation Hub",
    description: "Share startup ideas, meet ambitious builders, and discover new opportunities.",
    icon: "↗",
    color: "green",
    seats: 75,
    tag: "CONNECT",
  },
  {
    id: 6,
    title: "TechVerse 2026",
    category: "Conference",
    date: "NOV 02, 2026",
    time: "09:30 AM",
    location: "Grand Auditorium",
    description: "Discover emerging technologies and hear fresh perspectives from tech enthusiasts.",
    icon: "◎",
    color: "blue",
    seats: 200,
    tag: "UPCOMING",
  },
];

const filters = [
  "All Events",
  "Hackathon",
  "Workshop",
  "Design",
  "Competition",
  "Networking",
  "Conference",
];

function ArrowIcon({ diagonal = false }) {
  return (
    <span className={`arrow-icon ${diagonal ? "diagonal" : ""}`} aria-hidden="true">
      →
    </span>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All Events");
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registered, setRegistered] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    year: "3rd Year",
  });
  const [message, setMessage] = useState("");

  const filteredEvents = useMemo(() => {
    const term = search.trim().toLowerCase();

    return events.filter((event) => {
      const matchesCategory =
        activeFilter === "All Events" || event.category === activeFilter;

      const matchesSearch =
        !term ||
        event.title.toLowerCase().includes(term) ||
        event.category.toLowerCase().includes(term) ||
        event.location.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, search]);

  const openRegistration = (event) => {
    setSelectedEvent(event);
    setMessage("");
    setForm({
      name: "",
      email: "",
      department: "",
      year: "3rd Year",
    });
  };

  const closeRegistration = () => {
    setSelectedEvent(null);
    setMessage("");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!selectedEvent) return;

    if (registered.includes(selectedEvent.id)) {
      setMessage("You have already registered for this event on this session.");
      return;
    }

    setRegistered((previous) => [...previous, selectedEvent.id]);
    setMessage(`Registration successful for ${selectedEvent.title}!`);
  };

  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <div className="grid-overlay" />

      <header className="navbar">
        <a href="#home" className="brand" aria-label="Festivo home">
          <span className="brand-mark">F<span>.</span></span>
          <span>Festivo</span>
        </a>

        <nav className="nav-links">
          <a className="nav-link active" href="#home">Home</a>
          <a className="nav-link" href="#events">Explore Events</a>
          <a className="nav-link" href="#about">About</a>
        </nav>

        <button className="nav-cta" onClick={scrollToEvents}>
          Find an event <ArrowIcon diagonal />
        </button>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              YOUR CAMPUS. YOUR COMMUNITY.
            </div>

            <h1 className="hero-title">
              Make your next
              <br />
              big thing <span className="gradient-text">happen.</span>
            </h1>

            <p className="hero-description">
              One place for college events, epic hackathons, creative
              workshops, and the people who make campus life unforgettable.
            </p>

            <div className="hero-actions">
              <button className="button-primary" onClick={scrollToEvents}>
                Explore events <ArrowIcon diagonal />
              </button>
              <a href="#about" className="button-secondary">
                Discover Festivo <span className="play-icon">▶</span>
              </a>
            </div>

            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                <span className="avatar avatar-a">S</span>
                <span className="avatar avatar-b">A</span>
                <span className="avatar avatar-c">K</span>
                <span className="avatar avatar-d">+</span>
              </div>
              <div>
                <div className="proof-stars">★★★★★</div>
                <p><strong>Campus life, upgraded.</strong></p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="hero-glass-card">
              <div className="card-topline">
                <span className="live-label"><span /> LIVE ON CAMPUS</span>
                <span className="tiny-menu">•••</span>
              </div>

              <div className="hero-art">
                <div className="art-glow" />
                <div className="art-ring ring-a" />
                <div className="art-ring ring-b" />
                <div className="art-ring ring-c" />
                <div className="art-orb">
                  <span>✳</span>
                </div>
                <span className="art-spark spark-a">✦</span>
                <span className="art-spark spark-b">✧</span>
                <span className="art-spark spark-c">·</span>
                <span className="art-cross cross-a">+</span>
                <span className="art-cross cross-b">+</span>
              </div>

              <div className="hero-card-bottom">
                <div>
                  <span className="small-label">UP NEXT</span>
                  <h3>CodeStorm Hackathon</h3>
                  <p>Build. Create. Compete.</p>
                </div>
                <button
                  className="round-arrow"
                  aria-label="Register for CodeStorm Hackathon"
                  onClick={() => openRegistration(events[0])}
                >
                  <ArrowIcon diagonal />
                </button>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="float-icon float-violet">✳</span>
              <div>
                <strong>Big ideas</strong>
                <small>Start right here</small>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="float-icon float-green">↗</span>
              <div>
                <strong>Find your people</strong>
                <small>Make it happen together</small>
              </div>
            </div>

            <div className="tiny-floating-dot dot-one" />
            <div className="tiny-floating-dot dot-two" />
          </div>
        </section>

        <section className="stats-strip section-container" aria-label="Festivo highlights">
          <div className="stat-item">
            <span className="stat-number">01<span className="stat-plus">.</span></span>
            <span className="stat-label">One campus hub</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">06<span className="stat-plus">+</span></span>
            <span className="stat-label">Event experiences</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Possibilities to explore</span>
          </div>
          <div className="stats-note">
            <span className="status-dot" /> MADE FOR CAMPUS CREATORS
          </div>
        </section>

        <section className="events-section section-container" id="events">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> THE CAMPUS CALENDAR</div>
              <h2>Find your <span className="gradient-text">next thing.</span></h2>
              <p className="section-description">
                New skills, fresh ideas, and unforgettable moments start with one event.
              </p>
            </div>
            <div className="event-count">
              <span>{filteredEvents.length.toString().padStart(2, "0")}</span>
              <small>EVENTS FOUND</small>
            </div>
          </div>

          <div className="event-controls">
            <div className="filter-list" role="group" aria-label="Filter events">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-chip ${activeFilter === filter ? "selected" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search events..."
                aria-label="Search events"
              />
              <kbd>/</kbd>
            </label>
          </div>

          <div className="event-grid">
            {filteredEvents.map((event, index) => {
              const isRegistered = registered.includes(event.id);

              return (
                <article
                  className={`event-card event-${event.color}`}
                  key={event.id}
                  style={{ "--card-index": index }}
                >
                  <div className="event-card-art">
                    <div className="event-art-grid" />
                    <span className="event-tag">{event.tag}</span>
                    <span className="event-art-symbol">{event.icon}</span>
                    <div className="event-art-orbit" />
                    <div className="event-art-orb" />
                    <span className="event-art-cross">✳</span>
                    <span className="event-art-star">✦</span>
                  </div>

                  <div className="event-card-content">
                    <div className="event-meta">
                      <span className="category-label">{event.category}</span>
                      <span className="seats-label">{event.seats} seats</span>
                    </div>

                    <h3>{event.title}</h3>
                    <p className="event-description">{event.description}</p>

                    <div className="event-details">
                      <div className="detail-line">
                        <span className="detail-icon">▦</span>
                        <span>{event.date}</span>
                      </div>
                      <div className="detail-line">
                        <span className="detail-icon">◷</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="detail-line">
                        <span className="detail-icon">⌖</span>
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <button
                      className={`event-register ${isRegistered ? "registered" : ""}`}
                      onClick={() => openRegistration(event)}
                    >
                      {isRegistered ? "Registered" : "Register now"}
                      {isRegistered ? <span>✓</span> : <ArrowIcon diagonal />}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredEvents.length === 0 && (
            <div className="empty-state">
              <span>⌕</span>
              <h3>No events found</h3>
              <p>Try another keyword or choose a different category.</p>
              <button
                className="button-secondary"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All Events");
                }}
              >
                Clear filters <ArrowIcon />
              </button>
            </div>
          )}
        </section>

        <section className="about-section section-container" id="about">
          <div className="about-panel">
            <div className="about-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> WHY Festivo?</div>
              <h2>Campus is better when you <span className="gradient-text">show up.</span></h2>
              <p>
                Your next opportunity might be a workshop, a teammate, or an idea
                you have not discovered yet. Find it all in one place.
              </p>
              <button className="button-primary" onClick={scrollToEvents}>
                Find your next event <ArrowIcon diagonal />
              </button>
            </div>

            <div className="feature-list">
              <div className="feature-row">
                <span className="feature-icon feature-one">⌁</span>
                <div>
                  <h3>Everything in one place</h3>
                  <p>Explore events without jumping between different pages.</p>
                </div>
                <ArrowIcon diagonal />
              </div>
              <div className="feature-row">
                <span className="feature-icon feature-two">✳</span>
                <div>
                  <h3>Built for curious minds</h3>
                  <p>Discover competitions, workshops, and creative meetups.</p>
                </div>
                <ArrowIcon diagonal />
              </div>
              <div className="feature-row">
                <span className="feature-icon feature-three">↗</span>
                <div>
                  <h3>Make connections</h3>
                  <p>Take a first step toward your next great collaboration.</p>
                </div>
                <ArrowIcon diagonal />
              </div>
            </div>
          </div>
        </section>

        <section className="bottom-cta section-container">
          <div className="cta-decoration">✳</div>
          <div>
            <div className="eyebrow"><span className="status-dot" /> YOUR NEXT CHAPTER STARTS HERE</div>
            <h2>Ready to make <span className="gradient-text">some noise?</span></h2>
            <p>Pick an event. Bring your curiosity. See what happens.</p>
          </div>
          <button className="button-primary" onClick={scrollToEvents}>
            Explore the calendar <ArrowIcon diagonal />
          </button>
        </section>
      </main>

      <footer className="footer section-container">
        <a href="#home" className="brand footer-brand">
          <span className="brand-mark">e<span>.</span></span>
          <span>Festivo</span>
        </a>
        <p>Made for campus life. Built for what comes next.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
        <span className="copyright">© 2026 Festivo</span>
      </footer>

      {selectedEvent && (
        <div
          className="modal-backdrop"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeRegistration();
          }}
        >
          <div
            className="registration-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="registration-title"
          >
            <button
              className="modal-close"
              onClick={closeRegistration}
              aria-label="Close registration"
            >
              ×
            </button>

            <div className={`modal-icon event-${selectedEvent.color}`}>
              {selectedEvent.icon}
            </div>
            <div className="eyebrow"><span className="status-dot" /> EVENT REGISTRATION</div>
            <h2 id="registration-title">Save your <span className="gradient-text">spot.</span></h2>
            <p className="modal-event-name">{selectedEvent.title}</p>
            <p className="modal-event-detail">{selectedEvent.date} · {selectedEvent.time}</p>

            {message && (
              <div className={`form-message ${message.startsWith("Registration successful") ? "success" : "error"}`}>
                {message}
              </div>
            )}

            {!(message.startsWith("Registration successful")) && (
              <form className="registration-form" onSubmit={handleRegister}>
                <label>
                  Full name
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                  />
                </label>
                <label>
                  College email
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@college.edu"
                    required
                  />
                </label>
                <div className="form-row">
                  <label>
                    Department
                    <input
                      type="text"
                      value={form.department}
                      onChange={(e) => setForm({ ...form, department: e.target.value })}
                      placeholder="e.g. IT"
                      required
                    />
                  </label>
                  <label>
                    Year
                    <select
                      value={form.year}
                      onChange={(e) => setForm({ ...form, year: e.target.value })}
                    >
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                    </select>
                  </label>
                </div>
                <button className="button-primary form-submit" type="submit">
                  Confirm registration <ArrowIcon diagonal />
                </button>
                <p className="form-note">Demo registration only — details are not saved to a server.</p>
              </form>
            )}

            {message.startsWith("Registration successful") && (
              <button className="button-primary form-submit" onClick={closeRegistration}>
                Done <span>✓</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
