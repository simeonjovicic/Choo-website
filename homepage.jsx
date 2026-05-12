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
      <span><span className="dot"></span>Open now · until 20:00</span>
      <span>Address: Linke Wienzeile 54, 1060 Vienna</span>
    </div>
    <div className="right">
      <span>Phone: 01 9605678</span>
      <button className="language-toggle" type="button">EN</button>
    </div>
  </div>
);

const Nav = () => (
  <nav className="nav">
    <div className="nav-links">
      <a className="active" href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">Selection <span className="badge">New</span></a>
      <a href="#">Offers</a>
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
    <img src={window.__resources.interior} alt="Choo market" />
    <div className="hero-overlay">
      <div className="hero-content">
        <div className="hero-eyebrow">Asian supermarket · Vienna 1060</div>
        <h1>Linke Wienzeile&nbsp;54.<br/>Since 2009.</h1>
        <a className="btn">View selection</a>
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
    { c: "中", name: "China", sub: "Main aisle" },
    { c: "日", name: "Japan", sub: "Ramen · Matcha" },
    { c: "韩", name: "Korea", sub: "Gochujang · Kimchi" },
    { c: "越", name: "Vietnam", sub: "Pho · Rice paper" },
    { c: "泰", name: "Thailand", sub: "Curry · Coconut" },
  ];
  return (
    <section className="cat-row" id="laender" aria-label="Countries and selection">
      <div className="cat-row-inner" role="tablist" aria-label="Countries of origin">
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
      <img src={window.__resources.shelf} alt="Sauces" />
      <div className="feature-tile-label">Sauces & Pastes</div>
    </div>
    <div className="feature-tile">
      <img src={window.__resources.interior} alt="Tea and drinks" />
      <div className="feature-tile-label">Tea & Drinks</div>
    </div>
  </section>
);

const Story = () => (
  <section className="story">
    <div className="story-text">
      <div className="section-eyebrow">Our market</div>
      <h2>Asia, carefully sorted.</h2>
      <p>
        More than 3,000 products from China, Japan, Korea, Vietnam and Southeast Asia, from soy sauce to rice cookers. Clear, clean and easy to shop.
      </p>
      <p>
        We curate the selection ourselves and are happy to help, whether you need the right soy sauce, a specific paste or a gift.
      </p>
      <a className="btn btn-dark" style={{ marginTop: 16 }}>Learn more</a>
    </div>
    <div className="story-img">
      <img src="store-foto-animated.png" alt="Inside Choo Foodstore in Vienna" />
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
    <p className="section-sub">Tastings, workshops and festivals - directly inside the market on Linke Wienzeile.</p>
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
          <a className="event-link">Learn more →</a>
        </div>
      ))}
    </div>
  </section>
);

const AboutBand = () => (
  <section className="about-band">
    <div className="about-band-inner">
      <div className="section-eyebrow">About Choo</div>
      <h2>时代超市 — Asia in Vienna, since 2009.</h2>
      <p>
        Choo Foodstore is in Vienna's sixth district, directly on Linke Wienzeile. We carry a curated selection of groceries, sauces, teas and kitchen tools from China, Japan, Korea and Southeast Asia.
      </p>
      <p>
        Our aim: a calm, clearly arranged Asian market. No wholesale chaos, no endless searching, just shelves that make sense.
      </p>
    </div>
  </section>
);

const InfoGrid = () => (
  <section className="info-grid">
    <div className="info-cell">
      <div className="section-eyebrow">Visit</div>
      <h3>Address:<br/>Linke Wienzeile 54, 1060 Vienna</h3>
      <p className="dim">U3 Neubaugasse · 2 min walk</p>
    </div>
    <div className="info-cell">
      <div className="section-eyebrow">Opening hours</div>
      <div className="hours-row"><span className="k">Mon – Fri</span><span>09:00 – 20:00</span></div>
      <div className="hours-row"><span className="k">Saturday</span><span>09:00 – 18:00</span></div>
      <div className="hours-row"><span className="k">Sunday</span><span className="dim">closed</span></div>
    </div>
    <div className="info-cell">
      <div className="section-eyebrow">Contact</div>
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
        <p>Asian supermarket in Vienna's sixth district. Carefully sorted, friendly advice.</p>
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
          <li>About us</li><li>Events</li><li>Offers</li><li>FAQ</li>
        </ul>
      </div>
      <div>
        <h4>Visit</h4>
        <ul>
          <li>Address: Linke Wienzeile 54, 1060 Vienna</li><li>Mon-Sat 09-20:00</li><li>Phone: 01 9605678</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Choo Foodstore · Linke Wienzeile 54, 1060 Vienna</span>
      <div className="socials">
        <span>Instagram</span>
        <span>Imprint</span>
        <span>Privacy</span>
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
