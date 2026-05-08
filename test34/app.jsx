// app.jsx — Choo Asia-Supermarkt single-page site
const { useState, useEffect, useMemo, useRef } = React;

// ── Recipe data ─────────────────────────────────────────────────────────────
const RECIPES = [
  {
    id: "mapo",
    name: "Mapo Tofu",
    tags: ["spicy"],
    time: "25 min",
    serves: 2,
    blurb: "Sichuan classic — silken tofu in a numbing chili-bean sauce.",
    ingredients: [
      { name: "Silken tofu, 400g", inStore: true, aisle: "Fresh / fridge" },
      { name: "Doubanjiang (broad-bean paste)", inStore: true, aisle: "Sauces" },
      { name: "Sichuan peppercorns, 1 tsp", inStore: true, aisle: "Spices" },
      { name: "Ground pork, 150g", inStore: false },
      { name: "Scallions, 2", inStore: false },
      { name: "Garlic + ginger", inStore: false },
      { name: "Light soy sauce", inStore: true, aisle: "Sauces" },
      { name: "Cornstarch slurry", inStore: true, aisle: "Pantry" },
    ],
    steps: [
      "Cube tofu, blanch 1 min in salted water, drain.",
      "Toast Sichuan peppercorns, grind. Set aside.",
      "Brown pork in oil. Add ginger, garlic, doubanjiang — cook until red oil separates.",
      "Add stock, soy, tofu. Simmer gently 4 min — don't stir, swirl the pan.",
      "Thicken with slurry. Off heat, fold in scallions, dust with peppercorn.",
    ],
  },
  {
    id: "dandan",
    name: "Dan Dan Noodles",
    tags: ["spicy", "quick"],
    time: "15 min",
    serves: 2,
    blurb: "Chengdu street bowl — sesame, chili oil, vinegar, crisp pork.",
    ingredients: [
      { name: "Wheat noodles, 200g", inStore: true, aisle: "Noodles" },
      { name: "Chinese sesame paste, 2 tbsp", inStore: true, aisle: "Sauces" },
      { name: "Chili crisp / chili oil, 2 tbsp", inStore: true, aisle: "Sauces" },
      { name: "Chinkiang black vinegar, 1 tbsp", inStore: true, aisle: "Sauces" },
      { name: "Light soy sauce, 1 tbsp", inStore: true, aisle: "Sauces" },
      { name: "Sui mi ya cai (preserved mustard)", inStore: true, aisle: "Pantry" },
      { name: "Ground pork, 100g", inStore: false },
      { name: "Scallions", inStore: false },
    ],
    steps: [
      "Whisk sauce: sesame paste, chili oil, vinegar, soy, splash of noodle water.",
      "Crisp pork in dry pan with ya cai until dark and fragrant.",
      "Boil noodles to bite. Reserve a ladle of water.",
      "Pile noodles over sauce. Crown with pork, scallions. Toss at the table.",
    ],
  },
  {
    id: "garlic-bok-choy",
    name: "Garlic Bok Choy & Shiitake",
    tags: ["vegetarian", "quick"],
    time: "10 min",
    serves: 2,
    blurb: "Two ingredients, big flavour. Glossy, garlicky, ready in minutes.",
    ingredients: [
      { name: "Baby bok choy, 4 heads", inStore: false },
      { name: "Dried shiitake, 6", inStore: true, aisle: "Pantry" },
      { name: "Vegetarian oyster (mushroom) sauce", inStore: true, aisle: "Sauces" },
      { name: "Shaoxing wine, 1 tbsp", inStore: true, aisle: "Pantry" },
      { name: "Garlic, 4 cloves", inStore: false },
      { name: "Cornstarch", inStore: true, aisle: "Pantry" },
      { name: "Sesame oil", inStore: true, aisle: "Sauces" },
    ],
    steps: [
      "Soak shiitake 20 min in warm water — keep the soaking liquid.",
      "Halve bok choy, blanch 30s, shock in cold water.",
      "Sizzle garlic in oil. Add shiitake, splash of wine.",
      "Add bok choy, mushroom sauce, a few tbsp soaking liquid.",
      "Tighten with cornstarch slurry. Finish with sesame oil.",
    ],
  },
  {
    id: "fried-rice",
    name: "Egg & Scallion Fried Rice",
    tags: ["vegetarian", "quick"],
    time: "12 min",
    serves: 2,
    blurb: "Day-old jasmine rice, hot wok, three ingredients done right.",
    ingredients: [
      { name: "Day-old jasmine rice, 400g", inStore: true, aisle: "Pantry" },
      { name: "Eggs, 3", inStore: false },
      { name: "Scallions, 4", inStore: false },
      { name: "Light soy sauce", inStore: true, aisle: "Sauces" },
      { name: "White pepper", inStore: true, aisle: "Spices" },
      { name: "Sesame oil", inStore: true, aisle: "Sauces" },
      { name: "Neutral oil", inStore: false },
    ],
    steps: [
      "Beat eggs with a pinch of salt. Slice scallion whites + greens separately.",
      "Smoking-hot wok, oil, scramble eggs to soft curds. Lift out.",
      "More oil, scallion whites, then rice. Press, toss, repeat — break clumps.",
      "Return eggs. Soy down the side of the wok. White pepper.",
      "Off heat: scallion greens, sesame oil. Serve immediately.",
    ],
  },
];

const EVENTS = [
  { date: "FEB 14", year: "2026", title: "Lunar New Year Tasting", blurb: "Walk-in dumplings, sesame balls, oolong. Free with any purchase." },
  { date: "MAR 22", year: "2026", title: "Sichuan Pantry Workshop", blurb: "Build a chili-oil starter kit with our cook Wen. €15 incl. ingredients." },
  { date: "JUN 07", year: "2026", title: "Cold Noodle Summer Pop-up", blurb: "Saturday only. Liang pi, dan dan, sesame chicken on the bench out front." },
  { date: "SEP 28", year: "2026", title: "Mid-Autumn Mooncake Market", blurb: "Five bakers, one afternoon. Pre-order opens August." },
];

// ── Hand-drawn SVG accents (stroke-dasharray draw-on) ───────────────────────
function DrawnLine({ d, delay = 0, on = true, length = 600, w = 1.4, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.strokeDasharray = length;
    el.style.strokeDashoffset = on ? length : 0;
    if (on) {
      const t = setTimeout(() => {
        el.style.transition = "stroke-dashoffset 1400ms cubic-bezier(.2,.7,.2,1)";
        el.style.strokeDashoffset = 0;
      }, delay);
      return () => clearTimeout(t);
    }
  }, [on, delay, length]);
  return <path ref={ref} d={d} fill="none" stroke="currentColor" strokeWidth={w} strokeLinecap="round" {...rest} />;
}

// scribbled circle around a word/element
function ScribbleCircle({ animOn }) {
  return (
    <svg className="scribble" viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true">
      <DrawnLine
        d="M 14 42 C 14 18, 70 8, 110 10 C 160 12, 192 24, 188 44 C 184 64, 130 74, 80 70 C 30 66, 10 56, 18 38"
        length={520} delay={300} on={animOn} w={1.6}
      />
    </svg>
  );
}

// arrow used after CTA labels
function DrawnArrow({ animOn, size = 18 }) {
  return (
    <svg className="d-arrow" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <DrawnLine d="M 4 12 L 20 12" length={20} on={animOn} delay={100} />
      <DrawnLine d="M 13 5 L 20 12 L 13 19" length={28} on={animOn} delay={300} />
    </svg>
  );
}

// ── Sections ────────────────────────────────────────────────────────────────
function Nav({ palette }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
  };
  return (
    <nav className={"nav " + (scrolled ? "nav--solid" : "")}>
      <a href="#top" onClick={go("top")} className="nav__brand">
        <span className="nav__mark">Ⓒ</span>
        <span>Choo</span>
        <span className="nav__sub">食代超市</span>
      </a>
      <div className="nav__links">
        <a href="#recipes" onClick={go("recipes")}>Recipes</a>
        <a href="#events" onClick={go("events")}>Events</a>
        <a href="#about" onClick={go("about")}>About</a>
        <a href="#visit" onClick={go("visit")}>Visit</a>
      </div>
      <a href="#visit" onClick={go("visit")} className="nav__cta">
        Visit <span aria-hidden>↗</span>
      </a>
    </nav>
  );
}

function Hero({ heroLayout, animOn }) {
  return (
    <header id="top" className={"hero hero--" + heroLayout}>
      <div className="hero__inner">
        <div className="hero__meta">
          <span className="dot" /> ASIA SUPERMARKT · WIEN 1060
        </div>

        <h1 className="hero__title">
          Snacks,<br />
          Sauces &amp; <em className="hero__em">
            Basics.
            <svg className="hero__underline" viewBox="0 0 320 18" preserveAspectRatio="none" aria-hidden="true">
              <DrawnLine d="M 4 12 C 60 4, 160 4, 316 10" length={340} delay={900} on={animOn} w={2} />
            </svg>
          </em>
        </h1>

        <p className="hero__lede">
          An Asian grocer on Mariahilfer Straße. Pantry, noodles, snacks and
          sauces from across the continent — sourced honestly, sold quietly.
        </p>

        <div className="hero__row">
          <a href="#visit" className="btn btn--primary"
             onClick={(e) => { e.preventDefault(); document.getElementById("visit").scrollIntoView({ behavior: "smooth" }); }}>
            <span>Visit the store</span>
            <DrawnArrow animOn={animOn} />
          </a>
          <span className="hero__addr">MARIAHILFER STRASSE 48 · 1060 WIEN</span>
        </div>
      </div>

      <figure className="hero__art" aria-label="Choo storefront illustration">
        <img src="assets/storefront.png" alt="" draggable="false" />
        <figcaption>The shop — Mariahilfer Str. 48</figcaption>
      </figure>
    </header>
  );
}

// Tap-the-shelves illustration with hotspots
const HOTSPOTS = [
  { id: "h1", x: 28, y: 32, label: "Lanterns", aisle: "Seasonal · front window", note: "Stocked all year — bigger run for Lunar New Year." },
  { id: "h2", x: 76, y: 28, label: "Premium soy & sauces", aisle: "Aisle 1 · top two shelves", note: "Kikkoman, Lee Kum Kee, Pearl River, plus small-batch Taiwanese." },
  { id: "h3", x: 78, y: 62, label: "Curry pastes & jars", aisle: "Aisle 1 · lower shelves", note: "Thai red/green/yellow, Maesri, Mae Ploy, plus laksa." },
  { id: "h4", x: 50, y: 68, label: "Noodles & rice", aisle: "Aisle 2", note: "Hand-pulled, instant, soba, glass, jasmine, sushi, sticky." },
  { id: "h5", x: 17, y: 70, label: "Snacks & sweets", aisle: "Aisle 3", note: "Pocky, shrimp chips, mochi, haw flakes, lychee jelly." },
];

function AisleExplorer({ animOn }) {
  const [open, setOpen] = useState(null);
  return (
    <section className="aisle" id="about">
      <div className="aisle__heading">
        <span className="eyebrow">02 · Inside the shop</span>
        <h2>
          Tap a shelf.
          <br />
          <em>It's stocked.</em>
        </h2>
        <p>
          Three aisles, low ceiling, paper lanterns. We carry around 1,200
          lines — pantry deep on sauces, noodles and rice, with a steady
          rotation of regional snacks. Tap the illustration to find a section.
        </p>
      </div>

      <div className="aisle__art">
        <img src="assets/aisle.png" alt="" draggable="false" />
        {HOTSPOTS.map((h) => (
          <button
            key={h.id}
            className={"hot " + (open === h.id ? "hot--on" : "")}
            style={{ left: h.x + "%", top: h.y + "%" }}
            onClick={() => setOpen(open === h.id ? null : h.id)}
            aria-label={h.label}
          >
            <span className="hot__dot" />
            <span className="hot__pulse" />
            {open === h.id && (
              <span className="hot__card" onClick={(e) => e.stopPropagation()}>
                <strong>{h.label}</strong>
                <span className="hot__aisle">{h.aisle}</span>
                <span className="hot__note">{h.note}</span>
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

// Recipes
function RecipeCard({ r, onOpen, animOn }) {
  return (
    <article className="rc" onClick={() => onOpen(r)}>
      <div className="rc__no">No. {String(RECIPES.indexOf(r) + 1).padStart(2, "0")}</div>
      <h3 className="rc__name">{r.name}</h3>
      <p className="rc__blurb">{r.blurb}</p>
      <div className="rc__meta">
        <span>{r.time}</span>
        <span>·</span>
        <span>serves {r.serves}</span>
        <span className="rc__tags">
          {r.tags.map((t) => <span key={t} className={"tag tag--" + t}>{t}</span>)}
        </span>
      </div>
      <div className="rc__cta">
        Open recipe <DrawnArrow animOn={animOn} size={14} />
      </div>
    </article>
  );
}

function RecipeModal({ recipe, onClose, animOn }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  if (!recipe) return null;
  const inStore = recipe.ingredients.filter((i) => i.inStore).length;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__sheet" onClick={(e) => e.stopPropagation()}>
        <button className="modal__x" onClick={onClose} aria-label="Close">×</button>

        <div className="modal__head">
          <span className="eyebrow">Recipe · serves {recipe.serves} · {recipe.time}</span>
          <h3>{recipe.name}</h3>
          <p>{recipe.blurb}</p>
        </div>

        <div className="modal__grid">
          <div className="modal__ings">
            <div className="ings__head">
              <h4>Ingredients</h4>
              <span className="ings__legend">
                <span className="dot dot--accent" /> {inStore} of {recipe.ingredients.length} at Choo
              </span>
            </div>
            <ul>
              {recipe.ingredients.map((i, idx) => (
                <li key={idx} className={i.inStore ? "ing ing--here" : "ing"}>
                  <span className="ing__mark" aria-hidden>{i.inStore ? "●" : "○"}</span>
                  <span className="ing__name">{i.name}</span>
                  {i.inStore && <span className="ing__aisle">{i.aisle}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal__steps">
            <h4>Method</h4>
            <ol>
              {recipe.steps.map((s, idx) => (
                <li key={idx}><span className="step__n">{String(idx + 1).padStart(2, "0")}</span><span>{s}</span></li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function Recipes({ animOn }) {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);
  const visible = useMemo(() => filter === "all" ? RECIPES : RECIPES.filter((r) => r.tags.includes(filter)), [filter]);

  return (
    <section className="recipes" id="recipes">
      <div className="recipes__head">
        <span className="eyebrow">03 · From the kitchen</span>
        <h2>Four recipes, four aisles.</h2>
        <p>Traditional dishes you can finish on a Tuesday — most of the pantry is on our shelves.</p>

        <div className="filters">
          {["all", "vegetarian", "spicy", "quick"].map((f) => (
            <button
              key={f}
              className={"filter " + (filter === f ? "filter--on" : "")}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="recipes__grid">
        {visible.map((r) => <RecipeCard key={r.id} r={r} onOpen={setOpen} animOn={animOn} />)}
      </div>

      <RecipeModal recipe={open} onClose={() => setOpen(null)} animOn={animOn} />
    </section>
  );
}

function Events() {
  return (
    <section className="events" id="events">
      <div className="events__head">
        <span className="eyebrow">04 · This year</span>
        <h2>Things happening at the shop.</h2>
      </div>
      <ul className="events__list">
        {EVENTS.map((e, i) => (
          <li key={i} className="ev">
            <div className="ev__date">
              <span className="ev__d">{e.date}</span>
              <span className="ev__y">{e.year}</span>
            </div>
            <div className="ev__body">
              <h3>{e.title}</h3>
              <p>{e.blurb}</p>
            </div>
            <div className="ev__rsvp">RSVP <span aria-hidden>↗</span></div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function StudentBanner({ animOn }) {
  return (
    <section className="banner">
      <div className="banner__inner">
        <span className="banner__tag">FOR STUDENTS</span>
        <h2 className="banner__h">
          Show your <em>student ID</em>, get
          <span className="banner__pct">
            <span>5%</span>
            <svg viewBox="0 0 120 120" className="banner__circle" aria-hidden="true">
              <DrawnLine
                d="M 60 8 C 90 8, 112 30, 112 60 C 112 90, 90 112, 60 112 C 30 112, 8 90, 8 60 C 8 30, 30 8, 60 8 Z"
                length={360} delay={400} on={animOn} w={2}
              />
            </svg>
          </span>
          off the bill.
        </h2>
        <p>Every visit. Every basket. Just at the till — no app, no card.</p>
      </div>
    </section>
  );
}

function Visit() {
  // simple open/closed
  const now = new Date();
  const day = now.getDay(); // 0 Sun
  const hour = now.getHours();
  const open = day !== 0 && hour >= 9 && hour < 20;
  return (
    <section className="visit" id="visit">
      <div className="visit__col">
        <span className="eyebrow">05 · Find us</span>
        <h2>Mariahilfer Straße 48<br /><em>1060 Wien.</em></h2>
        <p>Two minutes from Museumsquartier U-Bahn. Look for the lanterns in the window.</p>

        <div className="hours">
          <div className="hours__row"><span>Mon — Fri</span><span>09:00 — 20:00</span></div>
          <div className="hours__row"><span>Saturday</span><span>09:00 — 20:00</span></div>
          <div className="hours__row"><span>Sunday</span><span>closed</span></div>
        </div>

        <div className={"status " + (open ? "status--open" : "status--closed")}>
          <span className="status__dot" /> {open ? "Open now" : "Closed now"}
        </div>
      </div>

      <div className="visit__map" aria-label="Map placeholder">
        {/* Stylized map — Mariahilfer Strasse */}
        <svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice">
          <rect width="600" height="420" fill="var(--paper)" />
          {/* Streets */}
          <g stroke="currentColor" strokeWidth="1" opacity=".25">
            <path d="M 0 80 L 600 80" />
            <path d="M 0 160 L 600 160" />
            <path d="M 0 320 L 600 320" />
            <path d="M 120 0 L 120 420" />
            <path d="M 280 0 L 280 420" />
            <path d="M 460 0 L 460 420" />
          </g>
          {/* Mariahilfer */}
          <path d="M 0 240 L 600 240" stroke="currentColor" strokeWidth="6" />
          <text x="20" y="232" fontSize="11" letterSpacing="2" fill="currentColor">MARIAHILFER STRASSE</text>
          {/* Pin */}
          <g transform="translate(300 240)">
            <circle r="24" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity=".35" />
            <circle r="14" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity=".7" />
            <circle r="6" fill="var(--accent)" />
          </g>
          <text x="320" y="236" fontSize="12" fontWeight="600" fill="var(--accent)">Choo · No. 48</text>
        </svg>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="foot__brand">
        <span className="nav__mark">Ⓒ</span>
        <span>Choo · 食代超市</span>
      </div>
      <div className="foot__cols">
        <div>
          <h5>Visit</h5>
          <p>Mariahilfer Str. 48<br />1060 Wien</p>
        </div>
        <div>
          <h5>Hours</h5>
          <p>Mon — Sat · 09:00 — 20:00<br />Sunday closed</p>
        </div>
        <div>
          <h5>Say hi</h5>
          <p>+43 1 000 00 00<br />hallo@choo.wien</p>
        </div>
      </div>
      <div className="foot__bottom">
        <span>© 2026 Choo Asia-Supermarkt</span>
        <span>Made on Mariahilfer Straße</span>
      </div>
    </footer>
  );
}

// ── Tweaks-aware app ────────────────────────────────────────────────────────
const PALETTES = {
  cream: { paper: "#f6f3ec", ink: "#1a1a1a", muted: "#6b665b", accent: "#c0392b", line: "#1a1a1a" },
  bone:  { paper: "#fbfaf7", ink: "#111111", muted: "#6b6b6b", accent: "#d97757", line: "#111111" },
  paper: { paper: "#ffffff", ink: "#0a0a0a", muted: "#666666", accent: "#0a0a0a", line: "#0a0a0a" },
  ink:   { paper: "#0e0e0e", ink: "#f6f3ec", muted: "#8a857a", accent: "#e07a64", line: "#f6f3ec" },
};

function applyPalette(name) {
  const p = PALETTES[name] || PALETTES.cream;
  const r = document.documentElement;
  r.style.setProperty("--paper", p.paper);
  r.style.setProperty("--ink", p.ink);
  r.style.setProperty("--muted", p.muted);
  r.style.setProperty("--accent", p.accent);
  r.style.setProperty("--line", p.line);
}

const PALETTE_ARRAYS = [
  ["#f6f3ec", "#1a1a1a", "#c0392b"],
  ["#fbfaf7", "#111111", "#d97757"],
  ["#ffffff", "#0a0a0a", "#222222"],
  ["#0e0e0e", "#f6f3ec", "#e07a64"],
];
const PALETTE_NAMES = ["cream", "bone", "paper", "ink"];

function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  useEffect(() => { applyPalette(t.palette); }, [t.palette]);
  const animOn = t.animation !== "off";
  const paletteIdx = PALETTE_NAMES.indexOf(t.palette);
  const paletteArr = PALETTE_ARRAYS[paletteIdx >= 0 ? paletteIdx : 0];

  return (
    <div className={"page anim-" + t.animation}>
      <Nav />
      <Hero heroLayout={t.heroLayout} animOn={animOn} />
      <AisleExplorer animOn={animOn} />
      <Recipes animOn={animOn} />
      <StudentBanner animOn={animOn} />
      <Events />
      <Visit />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette" />
        <TweakColor
          label="Theme"
          value={paletteArr}
          options={PALETTE_ARRAYS}
          onChange={(v) => {
            const idx = PALETTE_ARRAYS.findIndex((p) => p.join() === v.join());
            setTweak("palette", PALETTE_NAMES[idx] || "cream");
          }}
        />
        <TweakSection label="Hero" />
        <TweakRadio
          label="Layout"
          value={t.heroLayout}
          options={["split", "stacked", "fullbleed"]}
          onChange={(v) => setTweak("heroLayout", v)}
        />
        <TweakSection label="Motion" />
        <TweakRadio
          label="Animation"
          value={t.animation}
          options={["off", "subtle", "full"]}
          onChange={(v) => setTweak("animation", v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
