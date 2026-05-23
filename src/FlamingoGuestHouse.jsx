import {
  BedDouble,
  CalendarDays,
  ChefHat,
  MapPin,
  Menu,
  Phone,
  Star,
  Utensils,
  Wifi,
  X,
} from "lucide-react";
import { useState } from "react";

const phoneNumber = "+263 772 286 031";
const whatsappUrl = "https://wa.me/263772286031";

export default function FlamingoGuestHouse() {
  const [menuOpen, setMenuOpen] = useState(false);

  const rooms = [
    {
      name: "Flamingo",
      price: "$65/night",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
      note: "Spacious comfort for a relaxed stay.",
    },
    {
      name: "Sapphire Swan",
      price: "$50/night",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
      note: "Bright, calm, and ideal for business guests.",
    },
    {
      name: "Crowned Crane",
      price: "$50/night",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      note: "A welcoming room for restful nights.",
    },
    {
      name: "Pelican",
      price: "$45/night",
      image:
        "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1200&auto=format&fit=crop",
      note: "Simple, neat, and comfortable.",
    },
    {
      name: "Sparrow",
      price: "$30/night",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      note: "A budget-friendly private room.",
    },
    {
      name: "The Nest",
      price: "$70/night",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",
      note: "Premium space for extra comfort.",
    },
  ];

  const events = [
    {
      title: "Wedding Venue",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      text: "Elegant intimate weddings with beautiful setups and memorable experiences.",
    },
    {
      title: "Private Events",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
      text: "Birthdays, anniversaries, private parties, and celebrations with friends and family.",
    },
    {
      title: "Business Meetings",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      text: "Professional spaces for workshops, conferences, and strategy sessions.",
    },
    {
      title: "Movie Nights",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
      text: "Relax with exciting indoor and outdoor movie night experiences.",
    },
    {
      title: "Games & Chillouts",
      image:
        "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=1200&auto=format&fit=crop",
      text: "Dart boards, games, music, and unforgettable social vibes.",
    },
    {
      title: "Karaoke Nights",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
      text: "Fun karaoke evenings filled with laughter and entertainment.",
    },
  ];

  const meals = [
    {
      title: "Breakfast",
      text: "Fresh coffee, tea, eggs, toast, cereals, fruit, and morning specials.",
      image:
        "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Lunch",
      text: "Tasty traditional and modern meals perfect for business guests and travelers.",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Dinner",
      text: "Relaxed evening dining with grills, braai experiences, and delicious dishes.",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
  ];

  const navItems = ["Rooms", "Events", "Kitchen", "Gallery", "Contact"];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Flamingo Guest House home">
          <span className="brand-mark">F</span>
          <span>Flamingo Guest House</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href={whatsappUrl}>
          <Phone size={18} />
          Book
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Open navigation"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="close-button"
            type="button"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href={whatsappUrl} onClick={() => setMenuOpen(false)}>
            Book on WhatsApp
          </a>
        </div>
      )}

      <main>
        <section
          id="home"
          className="hero"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(15, 17, 20, 0.78), rgba(15, 17, 20, 0.28)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1800&auto=format&fit=crop')",
          }}
        >
          <div className="hero-content">
            <p className="eyebrow">Accommodation, dining and events</p>
            <h1>Flamingo Guest House</h1>
            <p className="hero-copy">
              A warm destination for comfortable stays, intimate celebrations,
              good food, and relaxed entertainment.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href={whatsappUrl}>
                <Phone size={19} />
                Book on WhatsApp
              </a>
              <a className="secondary-button" href="#rooms">
                View Rooms
              </a>
            </div>
          </div>
        </section>

        <section className="intro section">
          <div>
            <p className="eyebrow">Welcome</p>
            <h2>Everything you need in one inviting place.</h2>
          </div>
          <p>
            Flamingo Guest House brings together accommodation, food, events,
            and entertainment with a personal touch. Stay the night, host a
            celebration, plan a meeting, or gather for a relaxed evening.
          </p>
        </section>

        <section className="feature-strip">
          <Feature icon={<BedDouble />} title="6 Rooms" text="Options for solo travelers, couples, and groups." />
          <Feature icon={<CalendarDays />} title="Events" text="Weddings, parties, meetings, movie nights, and karaoke." />
          <Feature icon={<Utensils />} title="Kitchen" text="Breakfast, lunch, dinner, and braai experiences." />
          <Feature icon={<Wifi />} title="Comfort" text="A friendly base for short visits and longer stays." />
        </section>

        <section id="rooms" className="section tinted">
          <SectionHeading
            label="Stay"
            title="Rooms"
            text="Choose the space that fits your visit, then message us directly to confirm availability."
          />
          <div className="room-grid">
            {rooms.map((room) => (
              <article className="room-card" key={room.name}>
                <img src={room.image} alt={`${room.name} room`} />
                <div>
                  <h3>{room.name}</h3>
                  <p>{room.note}</p>
                  <span>{room.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="events" className="section">
          <SectionHeading
            label="Gather"
            title="Events"
            text="From quiet business sessions to joyful celebrations, the space can adapt to the occasion."
          />
          <div className="card-grid">
            {events.map((event) => (
              <article className="image-card" key={event.title}>
                <img src={event.image} alt={event.title} />
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="kitchen" className="section kitchen">
          <SectionHeading
            label="Taste"
            title="The Kitchen"
            text="Fresh meals and familiar favorites for overnight guests, event visitors, and local gatherings."
          />
          <div className="meal-grid">
            {meals.map((meal) => (
              <article className="meal-card" key={meal.title}>
                <img src={meal.image} alt={meal.title} />
                <div>
                  <ChefHat size={24} />
                  <h3>{meal.title}</h3>
                  <p>{meal.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section">
          <SectionHeading
            label="Look Around"
            title="Gallery"
            text="A glimpse of the comfort, food, and social spaces guests can enjoy."
          />
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <img src={image} alt={`Flamingo Guest House gallery ${index + 1}`} key={image} />
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p className="eyebrow">Ready to book?</p>
            <h2>Contact Flamingo Guest House</h2>
            <p>
              Message us on WhatsApp for room availability, event bookings, and
              kitchen enquiries.
            </p>
          </div>
          <div className="contact-card">
            <p>
              <Phone size={20} />
              {phoneNumber}
            </p>
            <p>
              <MapPin size={20} />
              Location details available on request
            </p>
            <p>
              <Star size={20} />
              Accommodation, events, food, and entertainment
            </p>
            <a className="primary-button" href={whatsappUrl}>
              Book on WhatsApp
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <article className="feature">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function SectionHeading({ label, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
