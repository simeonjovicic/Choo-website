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
