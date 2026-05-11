/* global React */

const Logo = ({ size = 28 }) => (
  <a href="#" className="logo" style={{ fontSize: size }}>
    <span>ch</span>
    <span className="logo-o">o<span className="logo-stamp">福</span></span>
    <span>o</span>
  </a>
);

const TopBar = () => (
  <div className="top-bar">
    <div className="left">
      <span><span className="dot"></span>Jetzt geöffnet · bis 20:00</span>
      <span>Address: Linke Wienzeile 54, 1060 Wien</span>
    </div>
    <div className="right">
      <span>Phone: 01 9605678</span>
      <span>DE / EN</span>
    </div>
  </div>
);

const Nav = () => (
  <nav className="nav">
    <div className="nav-links">
      <a className="active" href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">Sortiment <span className="badge">Neu</span></a>
      <a href="#">Angebote</a>
      <a href="#">Events</a>
    </div>
    <div className="brand"><Logo size={30} /></div>
    <div className="nav-icons">
      <span>⌕</span>
      <span>♡</span>
      <span className="cart">◧<span className="cart-count">2</span></span>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <img src={window.__resources.interior} alt="Choo Markt" />
    <div className="hero-overlay">
      <div className="hero-content">
        <div className="hero-eyebrow">Asia-Supermarkt · Wien 1060</div>
        <h1>Linke Wienzeile&nbsp;54.<br/>Seit 2009.</h1>
        <a className="btn">Sortiment ansehen</a>
      </div>
    </div>
    <div className="hero-dots">
      <span className="active"></span>
      <span></span>
      <span></span>
    </div>
  </section>
);

const Categories = () => {
  const cats = [
    { c: "中", name: "China", sub: "Hauptregal" },
    { c: "日", name: "Japan", sub: "Ramen · Matcha" },
    { c: "韩", name: "Korea", sub: "Gochujang · Kimchi" },
    { c: "越", name: "Vietnam", sub: "Pho · Reispapier" },
    { c: "泰", name: "Thailand", sub: "Curry · Kokos" },
  ];
  return (
    <section className="cat-row" id="laender" aria-label="Länder und Sortiment">
      <div className="cat-row-inner" role="tablist" aria-label="Herkunftsländer">
        {cats.map((x, i) => (
          <button className="cat" type="button" role="tab" aria-selected="false" key={i}>
            <span className="cat-glyph cn" aria-hidden="true">{x.c}</span>
            <span className="cat-name">{x.name}</span>
            <span className="cat-sub">{x.sub}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

const FeatureTiles = () => (
  <section className="feature-row">
    <div className="feature-tile">
      <img src={window.__resources.shelf} alt="Saucen" />
      <div className="feature-tile-label">Saucen & Pasten</div>
    </div>
    <div className="feature-tile">
      <img src={window.__resources.interior} alt="Tee & Getränke" />
      <div className="feature-tile-label">Tee & Getränke</div>
    </div>
  </section>
);

const Story = () => (
  <section className="story">
    <div className="story-text">
      <div className="section-eyebrow">Unser Markt</div>
      <h2>Asien, sorgfältig sortiert.</h2>
      <p>
        Über 3.000 Produkte aus China, Japan, Korea, Vietnam und ganz Südostasien — von der Sojasauce bis zum Reiskocher. Übersichtlich, sauber, gut beraten.
      </p>
      <p>
        Wir kuratieren das Sortiment selbst und beraten dich gerne — egal ob es um die richtige Sojasauce, eine bestimmte Paste oder ein Geschenk geht.
      </p>
      <a className="btn btn-dark" style={{ marginTop: 16 }}>Mehr erfahren</a>
    </div>
    <div className="story-img">
      <img src="store-foto-animated.png" alt="Innenansicht des Choo Foodstore in Wien" />
    </div>
  </section>
);

const HOTSPOTS = [
  { id: "h1", x: 28, y: 32, label: "Lanterns", aisle: "Seasonal - front window", note: "Stocked all year - bigger run for Lunar New Year." },
  { id: "h2", x: 76, y: 28, label: "Premium soy & sauces", aisle: "Aisle 1 - top two shelves", note: "Kikkoman, Lee Kum Kee, Pearl River, plus small-batch Taiwanese." },
  { id: "h3", x: 78, y: 62, label: "Curry pastes & jars", aisle: "Aisle 1 - lower shelves", note: "Thai red/green/yellow, Maesri, Mae Ploy, plus laksa." },
  { id: "h4", x: 50, y: 68, label: "Noodles & rice", aisle: "Aisle 2", note: "Hand-pulled, instant, soba, glass, jasmine, sushi, sticky." },
  { id: "h5", x: 17, y: 70, label: "Snacks & sweets", aisle: "Aisle 3", note: "Pocky, shrimp chips, mochi, haw flakes, lychee jelly." },
];

const AisleExplorer = () => {
  const [open, setOpen] = React.useState(null);

  return (
    <section className="aisle" id="sortiment">
      <div className="aisle__heading">
        <div className="section-eyebrow">02 - Inside the shop</div>
        <h2>Tap a shelf.<br /><em>It's stocked.</em></h2>
        <p>
          Three aisles, low ceiling, paper lanterns. We carry around 1,200 lines - pantry deep on sauces, noodles and rice, with a steady rotation of regional snacks. Tap the illustration to find a section.
        </p>
      </div>
      <div className="aisle__art">
        <img src="assets/aisle.png" alt="Illustration der Regale im Choo Foodstore" draggable="false" />
        {HOTSPOTS.map((hotspot) => (
          <button
            key={hotspot.id}
            className={`hot${hotspot.x > 60 ? " hot--right" : ""}${open === hotspot.id ? " hot--on" : ""}`}
            type="button"
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            onClick={() => setOpen(open === hotspot.id ? null : hotspot.id)}
            aria-label={hotspot.label}
            aria-expanded={open === hotspot.id}
          >
            <span className="hot__dot" />
            <span className="hot__pulse" />
            {open === hotspot.id && (
              <span className="hot__card" onClick={(event) => event.stopPropagation()}>
                <strong>{hotspot.label}</strong>
                <span className="hot__aisle">{hotspot.aisle}</span>
                <span className="hot__note">{hotspot.note}</span>
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

const RECIPES = [
  { id: "mapo", name: "Mapo Tofu", tags: ["spicy"], time: "25 min", blurb: "Sichuan classic - silken tofu in a numbing chili-bean sauce.", inStore: "5/8" },
  { id: "dandan", name: "Dan Dan Noodles", tags: ["spicy", "quick"], time: "15 min", blurb: "Chengdu street bowl - sesame, chili oil, vinegar, crisp pork.", inStore: "6/8" },
  { id: "garlic-bok-choy", name: "Garlic Bok Choy & Shiitake", tags: ["vegetarian", "quick"], time: "10 min", blurb: "Two ingredients, big flavour. Glossy, garlicky, ready in minutes.", inStore: "4/7" },
  { id: "fried-rice", name: "Egg & Scallion Fried Rice", tags: ["vegetarian", "quick"], time: "12 min", blurb: "Day-old jasmine rice, hot wok, three ingredients done right.", inStore: "4/7" },
];

const Recipes = () => {
  const [filter, setFilter] = React.useState("all");
  const visible = filter === "all" ? RECIPES : RECIPES.filter((recipe) => recipe.tags.includes(filter));

  return (
    <section className="recipes" id="recipes">
      <div className="recipes__head">
        <div className="section-eyebrow">03 - From the kitchen</div>
        <h2>Four recipes, four aisles.</h2>
        <p>Traditional dishes you can finish on a Tuesday - most of the pantry is on our shelves.</p>
        <div className="filters" aria-label="Recipe filters">
          {["all", "vegetarian", "spicy", "quick"].map((item) => (
            <button key={item} className={`filter${filter === item ? " filter--on" : ""}`} type="button" onClick={() => setFilter(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="recipes__grid">
        {visible.map((recipe, index) => (
          <button className="rc" type="button" key={recipe.id}>
            <span className="rc__top">
              <span className="rc__no">Recipe {String(index + 1).padStart(2, "0")}</span>
              <span className="rc__time">{recipe.time}</span>
            </span>
            <span className="rc__body">
              <span className="rc__name">{recipe.name}</span>
              <span className="rc__blurb">{recipe.blurb}</span>
            </span>
            <span className="rc__meta">
              <span className="rc__tags">
                {recipe.tags.map((tag) => <span className={`tag tag--${tag}`} key={tag}>{tag}</span>)}
              </span>
              <span className="rc__availability">{recipe.inStore} in store</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

const Events = () => (
  <section className="events">
    <div className="section-eyebrow">Kalender</div>
    <h2 className="section-title">Was läuft</h2>
    <p className="section-sub">Verkostungen, Workshops und Feste — direkt im Markt an der Linken Wienzeile.</p>
    <div className="event-grid">
      {[
        ["14","MAI","Mondfest-Verkostung","Mooncakes, Tee und Geschichten zum traditionellen Fest. Eintritt frei, Platzreservierung empfohlen."],
        ["22","MAI","Tee-Workshop","Eine geführte Verkostung: Grüntee, Oolong, Pu-erh. 18:00, 90 Min, mit Anmeldung."],
        ["05","JUN","Drachenbootfest","Zongzi-Verkostung und kleine Marktführung — komm vorbei, frag nach."],
      ].map(([d,m,t,p],i) => (
        <div className="event" key={i}>
          <div className="event-date">
            <span className="event-day">{d}</span>
            <span className="event-month">{m}</span>
          </div>
          <h3>{t}</h3>
          <p>{p}</p>
          <a className="event-link">Mehr erfahren →</a>
        </div>
      ))}
    </div>
  </section>
);

const AboutBand = () => (
  <section className="about-band">
    <div className="about-band-inner">
      <div className="section-eyebrow">Über Choo</div>
      <h2>时代超市 — Asia in Wien, seit 2009.</h2>
      <p>
        Choo Foodstore steht im sechsten Wiener Bezirk, direkt an der Linken Wienzeile. Wir führen eine kuratierte Auswahl an Lebensmitteln, Saucen, Tees und Küchenutensilien aus China, Japan, Korea und Südostasien.
      </p>
      <p>
        Unser Anspruch: ein ruhiger, übersichtlicher Asia-Markt. Kein Großmarkt-Chaos, kein Suchen — nur Regale, die Sinn ergeben.
      </p>
    </div>
  </section>
);

const InfoGrid = () => (
  <section className="info-grid">
    <div className="info-cell">
      <div className="section-eyebrow">Besuchen</div>
      <h3>Address:<br/>Linke Wienzeile 54, 1060 Wien</h3>
      <p className="dim">U3 Neubaugasse · 2 Min Fußweg</p>
    </div>
    <div className="info-cell">
      <div className="section-eyebrow">Öffnungszeiten</div>
      <div className="hours-row"><span className="k">Mo – Fr</span><span>09:00 – 20:00</span></div>
      <div className="hours-row"><span className="k">Samstag</span><span>09:00 – 18:00</span></div>
      <div className="hours-row"><span className="k">Sonntag</span><span className="dim">geschlossen</span></div>
    </div>
    <div className="info-cell">
      <div className="section-eyebrow">Kontakt</div>
      <p>Phone: 01 9605678</p>
      <p>hallo@choo.at</p>
      <p className="dim">@choo.market</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <Logo size={30} />
        <p>Asia-Supermarkt im sechsten Wiener Bezirk. Sorgfältig sortiert, freundlich beraten.</p>
        <div className="cn-tag">时代超市</div>
      </div>
      <div>
        <h4>Shop</h4>
        <ul>
          <li>China</li><li>Japan</li><li>Korea</li><li>Vietnam</li><li>Thailand</li>
        </ul>
      </div>
      <div>
        <h4>Information</h4>
        <ul>
          <li>Über uns</li><li>Events</li><li>Angebote</li><li>FAQ</li>
        </ul>
      </div>
      <div>
        <h4>Besuchen</h4>
        <ul>
          <li>Address: Linke Wienzeile 54, 1060 Wien</li><li>Mo–Sa 09–20:00</li><li>Phone: 01 9605678</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Choo Foodstore · Linke Wienzeile 54, 1060 Wien</span>
      <div className="socials">
        <span>Instagram</span>
        <span>Impressum</span>
        <span>Datenschutz</span>
      </div>
    </div>
  </footer>
);

const Home = () => (
  <>
    <TopBar />
    <Nav />
    <Hero />
    <Categories />
    <FeatureTiles />
    <Story />
    <AisleExplorer />
    <Recipes />
    <Events />
    <AboutBand />
    <InfoGrid />
    <Footer />
  </>
);

window.Home = Home;
