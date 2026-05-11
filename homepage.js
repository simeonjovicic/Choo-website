(() => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const hero = document.querySelector(".hero");
  const heroImages = Array.from(document.querySelectorAll("[data-hero-image]"));
  const heroDots = Array.from(document.querySelectorAll("[data-hero-dot]"));
  const heroModeButtons = Array.from(document.querySelectorAll("[data-hero-mode-button]"));
  const productCarousel = document.querySelector("[data-product-carousel]");
  const productTrack = document.querySelector("[data-product-track]");
  const statusText = document.querySelector("[data-open-status]");
  const statusDot = document.querySelector(".dot");
  const logoLoader = document.querySelector("[data-logo-loader]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobileHeroQuery = window.matchMedia("(max-width: 700px)");

  const logoLoaderConfig = {
    svgUrl: "./fortnite.svg",
    strokeWidth: 2.4,
    speed: 1,
    stagger: 0.026,
    detailPathMaxLength: 260,
    repeat: false,
    repeatDelay: 0.7,
  };

  const heroSlides = [
    {
      src: "images/WhatsApp%20Image%202026-05-07%20at%2019.39.46.jpeg",
      mobileSrc: "images/create_the_mobile_optimized_version,_202605072005.jpeg",
      alt: "Choo Foodstore Eingang",
      mobileAlt: "Mobile Hero Ansicht des Choo Foodstore",
    },
    {
      src: "images/create_a_different_variation_of_202605072011.jpeg",
      alt: "Choo Foodstore Stillleben",
    },
    {
      src: "images/create_a_different_variation_of_202605072021.jpeg",
      alt: "Choo Foodstore Auswahl",
    },
  ];

  let activeSlide = 0;
  let heroTimer = null;
  let ticking = false;
  let productDragStartX = 0;
  let productDragStartLeft = 0;
  let productDragging = false;
  let pageLoaded = false;
  let logoAnimationDone = false;
  let loaderHidden = false;

  function requestHideLoader() {
    if (loaderHidden || !pageLoaded || !logoAnimationDone) return;
    loaderHidden = true;

    window.setTimeout(() => {
      document.body.classList.add("is-loaded");
      window.setTimeout(() => {
        document.body.classList.remove("is-loading");
      }, 450);
    }, 350);
  }

  function markPageLoaded() {
    pageLoaded = true;
    requestHideLoader();
  }

  function markLogoAnimationDone() {
    logoAnimationDone = true;
    requestHideLoader();
  }

  function renderLogoFallback() {
    if (!logoLoader) return;

    const image = document.createElement("img");
    image.src = "fortnite.svg";
    image.alt = "";
    image.width = 1080;
    image.height = 1080;
    logoLoader.replaceChildren(image);
    logoLoader.classList.add("is-fallback");
  }

  function getPathX(path) {
    try {
      return path.getBBox().x;
    } catch (error) {
      return 0;
    }
  }

  async function setupLogoLoader() {
    if (!logoLoader) {
      markLogoAnimationDone();
      return;
    }

    if (reduceMotion || !window.gsap) {
      renderLogoFallback();
      window.setTimeout(markLogoAnimationDone, 450);
      return;
    }

    try {
      const response = await fetch(logoLoaderConfig.svgUrl);
      if (!response.ok) throw new Error(`Logo SVG failed: ${response.status}`);

      const svgMarkup = await response.text();
      logoLoader.innerHTML = svgMarkup.replace(/<\?xml[^>]*>\s*/i, "");
      const svg = logoLoader.querySelector("svg");
      if (!svg) throw new Error("Logo SVG is empty");

      if (!svg.getAttribute("viewBox")) {
        const width = Number.parseFloat(svg.getAttribute("width")) || 1080;
        const height = Number.parseFloat(svg.getAttribute("height")) || 1080;
        svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      }

      svg.removeAttribute("width");
      svg.removeAttribute("height");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");

      const paths = Array.from(svg.querySelectorAll("path"))
        .filter((path) => typeof path.getTotalLength === "function")
        .sort((a, b) => getPathX(a) - getPathX(b));

      if (!paths.length) throw new Error("Logo SVG has no animatable paths");

      const strokeWidth = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--loader-stroke-width"),
      ) || logoLoaderConfig.strokeWidth;

      paths.forEach((path) => {
        const length = path.getTotalLength();
        const originalFill = path.getAttribute("fill") || getComputedStyle(path).fill || "#161616";
        const strokeColor = originalFill === "none" || originalFill === "transparent" ? "#161616" : originalFill;
        const isDetailPath = length < logoLoaderConfig.detailPathMaxLength;

        path.dataset.logoFill = originalFill;
        path.dataset.logoLength = String(length);
        path.dataset.logoDetail = String(isDetailPath);
        path.style.fill = "transparent";
        path.style.stroke = strokeColor;
        path.style.strokeWidth = isDetailPath ? "0" : String(strokeWidth);
        path.style.strokeOpacity = isDetailPath ? "0" : "1";
        path.style.strokeLinecap = "round";
        path.style.strokeLinejoin = "round";
        path.style.strokeDasharray = String(length);
        path.style.strokeDashoffset = String(length);
        path.style.vectorEffect = "non-scaling-stroke";
      });

      const drawPaths = paths.filter((path) => path.dataset.logoDetail !== "true");
      const detailPaths = paths.filter((path) => path.dataset.logoDetail === "true");

      const drawDuration = 1.45 * logoLoaderConfig.speed;
      const fillStart = 0.14 + drawDuration * 0.76;
      const timeline = gsap.timeline({
        repeat: logoLoaderConfig.repeat ? -1 : 0,
        repeatDelay: logoLoaderConfig.repeatDelay,
        defaults: { overwrite: "auto" },
      });

      gsap.set(logoLoader, { autoAlpha: 1, scale: 0.985, filter: "blur(2px)" });
      gsap.set(drawPaths, {
        autoAlpha: 0,
        scale: 0.985,
        transformOrigin: "50% 50%",
      });
      gsap.set(detailPaths, {
        autoAlpha: 0,
        scale: 0.995,
        transformOrigin: "50% 50%",
      });
      gsap.set(svg, { transformOrigin: "50% 50%" });

      timeline
        .to(drawPaths, {
          autoAlpha: 1,
          duration: 0.16,
          ease: "power1.out",
          stagger: logoLoaderConfig.stagger * 0.35,
        }, 0)
        .to(logoLoader, {
          filter: "blur(0px)",
          scale: 1,
          duration: 0.85 * logoLoaderConfig.speed,
          ease: "power3.out",
        }, 0)
        .to(drawPaths, {
          strokeDashoffset: 0,
          duration: drawDuration,
          ease: "power3.inOut",
          stagger: logoLoaderConfig.stagger,
        }, 0.14)
        .to(drawPaths, {
          scale: 1,
          duration: 0.92 * logoLoaderConfig.speed,
          ease: "expo.out",
          stagger: logoLoaderConfig.stagger * 0.45,
        }, 0.16)
        .to(paths, {
          fill: (_index, path) => path.dataset.logoFill || "#161616",
          duration: 0.48 * logoLoaderConfig.speed,
          ease: "sine.out",
          stagger: logoLoaderConfig.stagger * 0.55,
        }, fillStart)
        .to(drawPaths, {
          strokeOpacity: 0,
          duration: 0.34 * logoLoaderConfig.speed,
          ease: "sine.out",
          stagger: logoLoaderConfig.stagger * 0.25,
        }, fillStart + 0.05)
        .to(detailPaths, {
          autoAlpha: 1,
          scale: 1,
          duration: 0.38 * logoLoaderConfig.speed,
          ease: "power2.out",
          stagger: logoLoaderConfig.stagger * 0.4,
        }, fillStart + 0.08)
        .to(svg, {
          scale: 1.018,
          duration: 0.34 * logoLoaderConfig.speed,
          ease: "power2.out",
        }, ">-0.08")
        .to(svg, {
          scale: 1,
          duration: 0.62 * logoLoaderConfig.speed,
          ease: "power3.out",
        });

      if (logoLoaderConfig.repeat) {
        window.setTimeout(markLogoAnimationDone, timeline.duration() * 1000);
      } else {
        timeline.eventCallback("onComplete", markLogoAnimationDone);
      }
    } catch (error) {
      renderLogoFallback();
      window.setTimeout(markLogoAnimationDone, 650);
    }
  }

  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    navToggle?.setAttribute("aria-expanded", String(open));
    navToggle?.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  }

  function showSlide(index) {
    if (!heroImages.length || !heroSlides[index]) return;

    activeSlide = index;
    const slide = heroSlides[index];
    const src = mobileHeroQuery.matches && slide.mobileSrc ? slide.mobileSrc : slide.src;
    const alt = mobileHeroQuery.matches && slide.mobileAlt ? slide.mobileAlt : slide.alt;

    heroImages.forEach((image) => {
      image.classList.add("is-fading");
    });

    window.setTimeout(() => {
      heroImages.forEach((image) => {
        image.src = src;
        image.alt = alt;
        image.classList.remove("is-fading");
      });
    }, 140);

    heroDots.forEach((dot, dotIndex) => {
      const selected = dotIndex === index;
      dot.classList.toggle("active", selected);
      dot.setAttribute("aria-pressed", String(selected));
    });
  }

  function startHeroTimer() {
    if (heroTimer || heroSlides.length <= 1) return;
    heroTimer = window.setInterval(() => {
      showSlide((activeSlide + 1) % heroSlides.length);
    }, 6500);
  }

  function restartHeroTimer() {
    window.clearInterval(heroTimer);
    heroTimer = null;
    startHeroTimer();
  }

  function updateOpeningStatus() {
    if (!statusText) return;

    const now = new Date();
    const day = now.getDay();
    const currentHour = now.getHours() + now.getMinutes() / 60;
    const isWeekday = day >= 1 && day <= 5;
    const isSaturday = day === 6;
    const closesAt = isWeekday ? "20:00" : isSaturday ? "18:00" : "";
    const opensToday = isWeekday || isSaturday;
    const isOpen = opensToday && currentHour >= 9 && currentHour < (isWeekday ? 20 : 18);

    if (isOpen) {
      statusText.textContent = `Jetzt geöffnet · bis ${closesAt}`;
      statusDot?.classList.remove("closed");
      return;
    }

    if (opensToday && currentHour < 9) {
      statusText.textContent = "Heute geschlossen · ab 09:00";
    } else if (day === 6 || day === 0) {
      statusText.textContent = "Heute geschlossen · Montag ab 09:00";
    } else {
      statusText.textContent = "Heute geschlossen · morgen ab 09:00";
    }

    statusDot?.classList.add("closed");
  }

  function updateScrollEffects() {
    const scrollY = window.scrollY || window.pageYOffset;
    const heroHeight = hero?.offsetHeight || window.innerHeight;
    const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1);

    document.body.classList.toggle("has-scrolled", scrollY > 12);

    if (hero && !reduceMotion) {
      hero.style.setProperty("--hero-y", `${progress * 34}px`);
      hero.style.setProperty("--hero-scale", String(1.025 + progress * 0.035));
      hero.style.setProperty("--hero-copy-y", `${progress * -18}px`);
      hero.style.setProperty("--hero-copy-opacity", String(Math.max(1 - progress * 1.1, 0)));
    }

    ticking = false;
  }

  function requestScrollUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateScrollEffects);
  }

  function setupCinematicPanels() {
    const panels = Array.from(document.querySelectorAll("main > section:not(.hero), .footer"));

    panels.forEach((panel) => panel.classList.add("cinematic-panel"));

    if (reduceMotion || !("IntersectionObserver" in window)) {
      panels.forEach((panel) => panel.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: "0px 0px -14% 0px",
      threshold: 0.12,
    });

    panels.forEach((panel) => observer.observe(panel));
  }

  function updateProductCarouselDistance() {
    if (!productTrack || reduceMotion) return;

    const originalCount = Number(productTrack.dataset.originalCount || "0");
    if (!originalCount) return;

    const cards = Array.from(productTrack.children).slice(0, originalCount);
    const firstCard = cards[0];
    const lastCard = cards[cards.length - 1];
    if (!firstCard || !lastCard) return;

    const gap = Number.parseFloat(window.getComputedStyle(productTrack).columnGap || "0") || 0;
    const distance = lastCard.getBoundingClientRect().right - firstCard.getBoundingClientRect().left + gap;
    productTrack.style.setProperty("--carousel-distance", `-${distance}px`);
  }

  function setupProductCarousel() {
    if (!productTrack) return;

    const cards = Array.from(productTrack.children);
    productTrack.dataset.originalCount = String(cards.length);
    updateProductCarouselDistance();
  }

  function setupProductScroller() {
    if (!productCarousel) return;

    productCarousel.addEventListener("pointerdown", (event) => {
      if (event.button !== 0 || event.target.closest("a, button, input, select, textarea")) return;

      productDragging = true;
      productDragStartX = event.clientX;
      productDragStartLeft = productCarousel.scrollLeft;
      productCarousel.classList.add("is-dragging");
      productCarousel.setPointerCapture?.(event.pointerId);
    });

    productCarousel.addEventListener("pointermove", (event) => {
      if (!productDragging) return;

      event.preventDefault();
      productCarousel.scrollLeft = productDragStartLeft - (event.clientX - productDragStartX);
    });

    const stopDragging = (event) => {
      if (!productDragging) return;

      productDragging = false;
      productCarousel.classList.remove("is-dragging");
      if (productCarousel.hasPointerCapture?.(event.pointerId)) {
        productCarousel.releasePointerCapture(event.pointerId);
      }
    };

    productCarousel.addEventListener("pointerup", stopDragging);
    productCarousel.addEventListener("pointercancel", stopDragging);
    productCarousel.addEventListener("lostpointercapture", stopDragging);
  }

  function setHeroMode(mode) {
    if (!hero || !["classic", "split"].includes(mode)) return;

    hero.dataset.heroMode = mode;
    hero.querySelector(".hero-panel-classic")?.setAttribute("aria-hidden", String(mode !== "classic"));
    hero.querySelector(".hero-panel-split")?.setAttribute("aria-hidden", String(mode !== "split"));

    heroModeButtons.forEach((button) => {
      const active = button.dataset.heroModeButton === mode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  navToggle?.addEventListener("click", () => {
    setMenu(!document.body.classList.contains("menu-open"));
  });

  navMenu?.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenu(false);
    }
  });

  heroDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.heroDot));
      restartHeroTimer();
    });
  });

  heroModeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setHeroMode(button.dataset.heroModeButton);
    });
  });

  document.addEventListener("click", (event) => {
    const favButton = event.target.closest(".product-fav");
    if (favButton) {
      const active = favButton.getAttribute("aria-pressed") === "true";
      favButton.setAttribute("aria-pressed", String(!active));
      favButton.classList.toggle("is-active", !active);
      favButton.textContent = active ? "♡" : "♥";
    }
  });

  document.querySelector("[data-newsletter-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.querySelector("input[type='email']");
    const message = form.querySelector("[data-form-message]");

    if (!emailInput?.checkValidity()) {
      emailInput?.reportValidity();
      return;
    }

    if (message) {
      message.textContent = "Danke, wir haben deine Adresse vorgemerkt.";
    }

    form.reset();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenu(false);
    }
  });

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", () => {
    requestScrollUpdate();
    updateProductCarouselDistance();
  });
  mobileHeroQuery.addEventListener("change", () => {
    showSlide(activeSlide);
  });
  window.addEventListener("load", markPageLoaded, { once: true });

  if (document.readyState === "complete") {
    markPageLoaded();
  }

  setupLogoLoader();
  setupProductCarousel();
  setupProductScroller();
  setupCinematicPanels();
  showSlide(0);
  updateScrollEffects();
  updateOpeningStatus();
  startHeroTimer();
})();

/* ===== Calendar (events) & Contact (visit) — ported from test34 ===== */
(function () {
  const MONTHS = [
    { n: 1, short: "Jan", label: "January" },
    { n: 2, short: "Feb", label: "February" },
    { n: 3, short: "Mar", label: "March" },
    { n: 4, short: "Apr", label: "April" },
    { n: 5, short: "May", label: "May" },
    { n: 6, short: "Jun", label: "June" },
    { n: 7, short: "Jul", label: "July" },
    { n: 8, short: "Aug", label: "August" },
    { n: 9, short: "Sep", label: "September" },
    { n: 10, short: "Oct", label: "October" },
    { n: 11, short: "Nov", label: "November" },
    { n: 12, short: "Dec", label: "December" }
  ];

  const CHINESE_EVENTS = [
    { month: 1, date: "JAN 01", title: "New Year's Day", cn: "元旦 - Yuandan", symbol: "元", tag: "Public holiday", summary: "China's Gregorian New Year public holiday and a short winter break.", meaning: "A modern national holiday for rest, travel and the start of the calendar year.", shelf: "Tea, snacks, gift boxes and quick pantry restocks." },
    { month: 1, date: "JAN 26", title: "Laba Festival", cn: "腊八节 - Laba", symbol: "腊", tag: "Laba porridge", summary: "The eighth day of the twelfth lunar month, known for laba congee and winter blessings.", meaning: "A pre-New-Year marker tied to harvest, gratitude and preparation for Spring Festival.", shelf: "Glutinous rice, red beans, peanuts, lotus seeds, jujubes and grains." },
    { month: 2, date: "FEB 16", title: "Spring Festival Eve", cn: "除夕 - Chuxi", symbol: "夕", tag: "Reunion dinner", summary: "The reunion dinner night before Lunar New Year begins.", meaning: "Family gathers for the year's most important meal before welcoming the new year.", shelf: "Hot pot bases, dumpling wrappers, noodles, sauces and festive sweets." },
    { month: 2, date: "FEB 17", title: "Spring Festival", cn: "春节 - Year of the Fire Horse", symbol: "春", tag: "Lunar New Year", summary: "Family reunion dinners, red envelopes, door couplets and lion dances mark the first day of the lunar year.", meaning: "Fresh start, family reunion and good fortune for the year ahead.", shelf: "Long-life noodles, red envelopes, sweets, tea and hot pot pantry." },
    { month: 3, date: "MAR 03", title: "Lantern Festival", cn: "元宵节 - Yuanxiao", symbol: "宵", tag: "Lantern night", summary: "The New Year period closes with lanterns, riddles and tangyuan.", meaning: "The fifteenth lunar day closes New Year celebrations with light and reunion.", shelf: "Tangyuan, black sesame, peanut fillings, ginger syrup and paper lanterns." },
    { month: 3, date: "MAR 20", title: "Zhonghe Festival", cn: "中和节 - Blue Dragon", symbol: "龙", tag: "Blue Dragon", summary: "A second-lunar-month observance linked with spring, land and agricultural wishes.", meaning: "Traditionally connected to waking the dragon and asking for rain and good harvests.", shelf: "Rice cakes, spring snacks, tea and pantry gifts." },
    { month: 4, date: "APR 05", title: "Qingming Festival", cn: "清明节 - Tomb Sweeping Day", symbol: "清", tag: "Ancestors", summary: "A spring day for ancestor remembrance, cemetery visits and walking outside.", meaning: "Remembering ancestors, tending graves and marking early spring.", shelf: "Green tea, rice flour, sesame, spring snacks and simple family pantry staples." },
    { month: 5, date: "MAY 01", title: "Labour Day", cn: "劳动节 - Laodong Jie", symbol: "劳", tag: "Public holiday", summary: "A national public holiday period and one of China's major travel breaks.", meaning: "A modern public holiday for workers, rest and domestic travel.", shelf: "Instant noodles, bottled teas, travel snacks and picnic pantry." },
    { month: 5, date: "MAY 04", title: "Youth Day", cn: "青年节 - Qingnian Jie", symbol: "青", tag: "Youth", summary: "A modern observance linked to youth, education and the May Fourth Movement.", meaning: "Recognizes young people and a major moment in modern Chinese cultural history.", shelf: "Milk tea kits, snacks, candies and easy weeknight noodles." },
    { month: 6, date: "JUN 01", title: "Children's Day", cn: "儿童节 - Ertong Jie", symbol: "童", tag: "Children", summary: "A children's observance widely marked with school and family activities.", meaning: "A day centered on children, play, gifts and simple celebrations.", shelf: "Mochi, jelly cups, Pocky, shrimp chips and fruit drinks." },
    { month: 6, date: "JUN 19", title: "Dragon Boat Festival", cn: "端午节 - Duanwu", symbol: "端", tag: "Zongzi season", summary: "Dragon boat racing, zongzi and customs connected with Qu Yuan.", meaning: "Commemoration of Qu Yuan, summer protection customs and racing traditions.", shelf: "Zongzi, sticky rice, bamboo leaves, red bean, mung bean and salted egg yolk." },
    { month: 7, date: "JUL 01", title: "CPC Founding Day", cn: "建党节 - Jiandang Jie", symbol: "建", tag: "Observance", summary: "A modern political observance in China's official calendar.", meaning: "An official observance rather than a traditional family festival.", shelf: "Gift tea, boxed snacks and pantry staples for gatherings." },
    { month: 8, date: "AUG 13", title: "Ghost Month Begins", cn: "鬼月 - Gui Yue", symbol: "鬼", tag: "Ghost Month", summary: "The seventh lunar month begins, associated with ancestor and spirit customs.", meaning: "A period of offerings, remembrance and careful ritual behavior in folk tradition.", shelf: "Incense-adjacent paper goods where available, tea, fruit snacks and rice." },
    { month: 8, date: "AUG 19", title: "Qixi Festival", cn: "七夕节 - Double Seventh", symbol: "七", tag: "Qixi", summary: "Often called Chinese Valentine's Day, linked to the Cowherd and Weaver Girl story.", meaning: "A romantic festival about reunion, longing and skillful hands.", shelf: "Gift sweets, tea, mochi, candies and elegant snack boxes." },
    { month: 8, date: "AUG 27", title: "Ghost Festival", cn: "中元节 - Zhongyuan", symbol: "中", tag: "Spirit Festival", summary: "The fifteenth day of Ghost Month, associated with offerings and remembrance.", meaning: "A folk observance for caring for ancestors and wandering spirits.", shelf: "Rice, tea, fruit, sweets and simple offering-style pantry items." },
    { month: 9, date: "SEP 10", title: "Teachers' Day", cn: "教师节 - Jiaoshi Jie", symbol: "师", tag: "Teachers", summary: "A modern observance recognizing teachers and education.", meaning: "A day for respect, gratitude and small gifts for teachers.", shelf: "Gift teas, biscuits, candies and boxed snacks." },
    { month: 9, date: "SEP 25", title: "Mid-Autumn Festival", cn: "中秋节 - Moon Festival", symbol: "月", tag: "Mooncakes", summary: "Mooncakes, lanterns and reunion meals under the full moon.", meaning: "Full moon, harvest, family reunion and wishes carried by lantern light.", shelf: "Mooncakes, lotus paste, red bean paste, jasmine tea, oolong and lanterns." },
    { month: 10, date: "OCT 01", title: "National Day", cn: "国庆节 - Guoqing Jie", symbol: "国", tag: "Golden Week", summary: "China's National Day starts the Golden Week public holiday.", meaning: "A modern national holiday and one of the year's biggest travel periods.", shelf: "Travel snacks, bottled teas, instant noodles and family-size pantry items." },
    { month: 10, date: "OCT 18", title: "Double Ninth Festival", cn: "重阳节 - Chongyang", symbol: "九", tag: "Longevity", summary: "A day associated with elders, mountain climbing and chrysanthemums.", meaning: "Respect for elders, longevity, autumn climbs and chrysanthemum traditions.", shelf: "Chrysanthemum tea, dried fruit, rice cakes, herbal drinks and gift snacks." },
    { month: 11, date: "NOV 08", title: "Journalists' Day", cn: "记者节 - Jizhe Jie", symbol: "记", tag: "Observance", summary: "A modern professional observance in China's public calendar.", meaning: "Recognizes journalism and media workers.", shelf: "Desk snacks, tea, coffee sachets and quick noodle bowls." },
    { month: 12, date: "DEC 22", title: "Winter Solstice", cn: "冬至 - Dongzhi", symbol: "冬", tag: "Tangyuan", summary: "The winter solstice is associated with reunion foods such as tangyuan.", meaning: "The longest night turns toward longer days; round foods symbolize reunion.", shelf: "Tangyuan, glutinous rice flour, ginger syrup, sesame paste and warming teas." }
  ];

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));

  let activeEventMonth = Number(new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Vienna",
    month: "numeric"
  }).format(new Date()));

  function eventsForMonth(month) {
    return CHINESE_EVENTS.filter((event) => event.month === month);
  }

  function renderEventFilters() {
    const wheel = document.querySelector("[data-event-wheel]");
    if (!wheel) return;
    wheel.innerHTML = MONTHS.map((month) => {
      const count = eventsForMonth(month.n).length;
      return `
        <button type="button" data-event-month="${month.n}">
          <b>${month.short}</b>
          <small>${count} ${count === 1 ? "event" : "events"}</small>
        </button>
      `;
    }).join("");
    updateEventWheel();
  }

  function eventCard(event) {
    return `
      <li class="ev" data-event-month="${event.month}">
        <span class="ev__symbol" aria-hidden="true">${escapeHtml(event.symbol)}</span>
        <div class="ev__date"><span class="ev__d">${escapeHtml(event.date)}</span><span class="ev__y">2026</span></div>
        <button class="ev__toggle" type="button" aria-expanded="false">
          <span class="ev__body">
            <span class="ev__title">${escapeHtml(event.title)}</span>
            <span class="ev__cn">${escapeHtml(event.cn)}</span>
            <span class="ev__summary">${escapeHtml(event.summary)}</span>
          </span>
          <span class="ev__rsvp">${escapeHtml(event.tag)} <span class="ev__chev" aria-hidden="true">+</span></span>
        </button>
        <div class="ev__details" aria-hidden="true">
          <div class="ev__details-inner">
            <div class="ev__detail"><strong>Meaning</strong><span>${escapeHtml(event.meaning)}</span></div>
            <div class="ev__detail"><strong>Choo shelf</strong><span>${escapeHtml(event.shelf)}</span></div>
          </div>
        </div>
      </li>
    `;
  }

  function renderEventsForMonth(month, resetScroll = false) {
    const list = document.querySelector(".events__list");
    if (!list) return;
    const events = eventsForMonth(month);
    list.innerHTML = events.length
      ? events.map(eventCard).join("")
      : `<li class="events__empty">No Chinese calendar entries for ${escapeHtml(MONTHS.find((item) => item.n === month)?.label || "this month")}.</li>`;
    if (resetScroll) {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      list.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    }
    const first = events[0];
    const currentDate = document.querySelector("[data-event-current-date]");
    const currentTitle = document.querySelector("[data-event-current-title]");
    if (currentDate) currentDate.textContent = first?.date || MONTHS.find((item) => item.n === month)?.short || "";
    if (currentTitle) currentTitle.textContent = first?.title || "No events";
  }

  function setActiveEventMonth(month) {
    activeEventMonth = month;
    updateEventWheel();
    renderEventsForMonth(month, true);
  }

  function updateEventWheel() {
    const wheel = document.querySelector("[data-event-wheel]");
    if (!wheel) return;
    const activeIndex = MONTHS.findIndex((month) => month.n === activeEventMonth);
    const rowHeight = 38;
    wheel.style.transform = `translateY(${-activeIndex * rowHeight}px)`;
    wheel.querySelectorAll("[data-event-month]").forEach((button) => {
      const distance = Math.abs(Number(button.dataset.eventMonth) - activeEventMonth);
      button.classList.toggle("is-active", distance === 0);
      button.classList.toggle("is-near", distance === 1);
    });
  }

  function setupEventTimeline() {
    const list = document.querySelector(".events__list");
    const wheel = document.querySelector("[data-event-wheel]");
    if (!list || !wheel) return;
    const picker = wheel.parentElement;
    renderEventFilters();
    renderEventsForMonth(activeEventMonth);
    const section = document.querySelector(".events");
    let ticking = false;
    let dragStartY = 0;
    let dragStartMonth = activeEventMonth;
    let dragging = false;
    const rowHeight = 38;

    const updateRail = () => {
      ticking = false;
      const cards = [...list.querySelectorAll(".ev")];
      const currentDate = document.querySelector("[data-event-current-date]");
      const currentTitle = document.querySelector("[data-event-current-title]");
      if (!cards.length || !section) return;
      const targetY = window.innerHeight * 0.48;
      let activeIndex = 0;
      let bestDistance = Infinity;
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - targetY);
        if (distance < bestDistance) {
          bestDistance = distance;
          activeIndex = index;
        }
      });
      const activeCard = cards[activeIndex];
      if (currentDate) currentDate.textContent = activeCard.querySelector(".ev__d")?.textContent || "";
      if (currentTitle) currentTitle.textContent = activeCard.querySelector(".ev__title")?.textContent || "";
    };

    const requestRailUpdate = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateRail);
    };

    wheel.addEventListener("click", (event) => {
      const button = event.target.closest("[data-event-month]");
      if (!button) return;
      setActiveEventMonth(Number(button.dataset.eventMonth));
      requestRailUpdate();
    });
    const startDrag = (event) => {
      dragging = true;
      dragStartY = event.clientY;
      dragStartMonth = activeEventMonth;
      picker.classList.add("is-dragging");
      picker.setPointerCapture?.(event.pointerId);
    };
    const moveDrag = (event) => {
      if (!dragging) return;
      const deltaRows = Math.round((dragStartY - event.clientY) / rowHeight);
      const next = Math.min(12, Math.max(1, dragStartMonth + deltaRows));
      if (next !== activeEventMonth) {
        setActiveEventMonth(next);
        requestRailUpdate();
      }
    };
    const endDrag = (event) => {
      if (!dragging) return;
      dragging = false;
      picker.classList.remove("is-dragging");
      picker.releasePointerCapture?.(event.pointerId);
    };
    picker.addEventListener("pointerdown", startDrag);
    picker.addEventListener("pointermove", moveDrag);
    picker.addEventListener("pointerup", endDrag);
    picker.addEventListener("pointercancel", endDrag);

    list.addEventListener("click", (event) => {
      const button = event.target.closest(".ev__toggle");
      if (!button) return;
      const item = button.closest(".ev");
      const shouldOpen = !item.classList.contains("ev--open");
      list.querySelectorAll(".ev--open").forEach((openItem) => {
        openItem.classList.remove("ev--open");
        openItem.querySelector(".ev__toggle")?.setAttribute("aria-expanded", "false");
        openItem.querySelector(".ev__details")?.setAttribute("aria-hidden", "true");
      });
      if (shouldOpen) {
        item.classList.add("ev--open");
        button.setAttribute("aria-expanded", "true");
        item.querySelector(".ev__details")?.setAttribute("aria-hidden", "false");
      }
      requestRailUpdate();
    });
    updateRail();
    list.addEventListener("scroll", requestRailUpdate, { passive: true });
    window.addEventListener("scroll", requestRailUpdate, { passive: true });
    window.addEventListener("resize", requestRailUpdate);
  }

  function updateVisitStatus() {
    const status = document.querySelector("[data-status]");
    const text = document.querySelector("[data-status-text]");
    if (!status || !text) return;
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/Vienna",
      weekday: "short",
      hour: "numeric",
      hourCycle: "h23"
    }).formatToParts(new Date());
    const weekday = parts.find((part) => part.type === "weekday")?.value;
    const hour = Number(parts.find((part) => part.type === "hour")?.value);
    const isOpen = weekday !== "Sun" && hour >= 9 && hour < 20;
    status.classList.toggle("status--open", isOpen);
    status.classList.toggle("status--closed", !isOpen);
    text.textContent = isOpen ? "Open now" : "Closed now";
  }

  function init() {
    setupEventTimeline();
    updateVisitStatus();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
