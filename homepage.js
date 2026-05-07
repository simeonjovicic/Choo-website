(() => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const hero = document.querySelector(".hero");
  const heroImages = Array.from(document.querySelectorAll("[data-hero-image]"));
  const heroDots = Array.from(document.querySelectorAll("[data-hero-dot]"));
  const heroModeButtons = Array.from(document.querySelectorAll("[data-hero-mode-button]"));
  const productTrack = document.querySelector("[data-product-track]");
  const statusText = document.querySelector("[data-open-status]");
  const statusDot = document.querySelector(".dot");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobileHeroQuery = window.matchMedia("(max-width: 700px)");

  const heroSlides = [
    {
      src: "images/WhatsApp%20Image%202026-05-07%20at%2019.39.46.jpeg",
      mobileSrc: "images/create_the_mobile_optimized_version,_202605072005.jpeg",
      alt: "Choo Foodstore Eingang",
      mobileAlt: "Mobile Hero Ansicht des Choo Foodstore",
    },
    {
      src: "images/gallery.png",
      alt: "Regale im Choo Foodstore",
    },
    {
      src: "images/gallery_2.png",
      alt: "Sortiment und Ladenbereich im Choo Foodstore",
    },
  ];

  let activeSlide = 0;
  let heroTimer = null;
  let ticking = false;
  let loaderHidden = false;

  function hideLoader() {
    if (loaderHidden) return;
    loaderHidden = true;

    window.setTimeout(() => {
      document.body.classList.add("is-loaded");
      window.setTimeout(() => {
        document.body.classList.remove("is-loading");
      }, 450);
    }, 350);
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
    if (!productTrack || reduceMotion) return;

    const cards = Array.from(productTrack.children);
    productTrack.dataset.originalCount = String(cards.length);

    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.setAttribute("inert", "");
      clone.querySelectorAll("a, button, input, select, textarea").forEach((element) => {
        element.setAttribute("tabindex", "-1");
      });
      productTrack.appendChild(clone);
    });

    updateProductCarouselDistance();
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
  window.addEventListener("load", hideLoader, { once: true });

  if (document.readyState === "complete") {
    hideLoader();
  }

  setupProductCarousel();
  setupCinematicPanels();
  showSlide(0);
  updateScrollEffects();
  updateOpeningStatus();
  startHeroTimer();
})();
