(() => {
  const LANGS = ["en", "de", "zh"];
  const LABELS = { en: "EN", de: "DE", zh: "中文" };
  const HTML_LANG = { en: "en", de: "de", zh: "zh-Hans" };
  const STRINGS = {
    en: {
      "meta.title": "Choo Foodstore | Asian Supermarket Vienna",
      "meta.description": "Choo Foodstore is a curated Asian supermarket at Linke Wienzeile 54 in Vienna.",
      "top.address": "Address: Linke Wienzeile 54, 1060 Vienna",
      "top.phone": "Phone: 01 9605678",
      "nav.home": "Home",
      "nav.selection": "Selection",
      "nav.new": "New",
      "nav.recipes": "Recipes",
      "nav.events": "Events",
      "nav.reviews": "Reviews",
      "hero.eyebrow": "Asian supermarket · Vienna 1060",
      "hero.title": "Snacks, sauces & staples.",
      "hero.text": "An Asian market on Linke Wienzeile. Pantry staples, noodles, snacks and sauces from across Asia.",
      "hero.cta": "Visit ↗",
      "hero.address": "Linke Wienzeile 54 · 1060 Vienna",
      "cat.china": "Main aisle",
      "cat.vietnam": "Pho · Rice paper",
      "cat.thailand": "Curry · Coconut",
      "story.eyebrow": "Our market",
      "story.title": "Asia, carefully sorted.",
      "story.p1": "More than 3,000 products from China, Japan, Korea, Vietnam and Southeast Asia, from soy sauce to rice cookers. Clear, clean and easy to shop.",
      "story.p2": "We curate the selection ourselves and are happy to help, whether you need the right soy sauce, a specific paste or a gift.",
      "story.cta": "Learn more",
      "aisle.eyebrow": "02 - Inside the shop",
      "aisle.title": "Tap a shelf.<br /><em>It's stocked.</em>",
      "aisle.text": "Three aisles, low ceiling, paper lanterns. We carry around 1,200 lines - pantry deep on sauces, noodles and rice, with a steady rotation of regional snacks. Tap the illustration to find a section.",
      "recipes.eyebrow": "03 - From the kitchen",
      "recipes.title": "Four recipes, four aisles.",
      "recipes.text": "Traditional dishes you can finish on a Tuesday - most of the pantry is on our shelves.",
      "filter.all": "all",
      "filter.vegetarian": "vegetarian",
      "filter.spicy": "spicy",
      "filter.quick": "quick",
      "events.eyebrow": "04 - Chinese calendar",
      "events.title": "Traditional festivals in 2026.",
      "events.text": "Starts with the next three dates, then lets you jump month by month.",
      "reviews.eyebrow": "Reviews",
      "reviews.title": "What customers say.",
      "reviews.sub": "Based on 312 Google reviews.",
      "review.anna": "Very clean, well sorted, great advice and many products that are otherwise hard to find in Vienna.",
      "review.daniel": "I come for sauces, rice and snacks. You quickly find what you need without market chaos.",
      "review.mei": "Friendly, calm and well curated. The tea selection and small recommendations are especially strong.",
      "review.markus": "Finally an Asian market where you do not have to search forever. The shelves make sense and the selection fits.",
      "review.sofia": "Very good selection of noodles, chili crisp and rice. I take something new almost every time.",
      "review.linh": "The staff really know the products. I found exactly the sauce I needed.",
      "place.anna": "Vienna · 6th district",
      "place.daniel": "Vienna · Neubau",
      "place.mei": "Vienna · Mariahilf",
      "place.markus": "Vienna · Innere Stadt",
      "place.sofia": "Vienna · Wieden",
      "place.linh": "Vienna · Margareten",
      "student.eyebrow": "Exclusive for students",
      "student.title": "Student discount",
      "student.stamp": "Off",
      "student.sub": "Upload your student ID and save",
      "student.step1.title": "Upload student ID",
      "student.step1.text": "Fast & simple",
      "student.step2.title": "Get the discount automatically",
      "student.step2.text": "Save 5%",
      "student.step3.title": "Shop & benefit",
      "student.step3.text": "Save right away",
      "visit.eyebrow": "05 - Find us",
      "visit.title": "Linke Wienzeile 54<br /><em>1060 Vienna.</em>",
      "visit.contact": "<strong>Address:</strong> Linke Wienzeile 54, 1060 Vienna<br /><strong>Phone:</strong> <a href=\"tel:019605678\">01 9605678</a>",
      "hours.weekdays": "Mon - Fri",
      "hours.saturday": "Saturday",
      "hours.sunday": "Sunday",
      "hours.closed": "closed",
      "footer.links": "Links",
      "footer.about": "About us",
      "footer.visit": "Visit",
      "footer.hours1": "Mon-Fri 09-20:00",
      "footer.hours2": "Sat 09-18:00",
      "footer.phone": "Phone: <a href=\"tel:019605678\">01 9605678</a>",
      "footer.text": "Asian supermarket in Vienna's sixth district. Carefully sorted, friendly advice.",
      "footer.copy": "© 2026 Choo Foodstore · Linke Wienzeile 54, 1060 Vienna",
      "footer.imprint": "Imprint",
      "footer.privacy": "Privacy",
      "lang.aria": "Switch language",
      "menu.open": "Open menu",
      "menu.close": "Close menu",
      "status.openUntil": "Open now · until {time}",
      "status.closedBefore": "Closed now · opens at 09:00",
      "status.closedMonday": "Closed today · Monday from 09:00",
      "status.closedTomorrow": "Closed now · tomorrow from 09:00",
      "status.openNow": "Open now",
      "status.closedNow": "Closed now",
      "recipe.label": "Recipe",
      "recipe.inStore": "{current}/{total} in store",
      "recipe.back": "Back to recipes",
      "recipe.next": "Next recipe",
      "recipe.serves": "serves",
      "recipe.atChoo": "at Choo",
      "recipe.eyebrow": "Recipe - Choo pantry",
      "recipe.time": "Time",
      "recipe.servesLabel": "Serves",
      "recipe.tags": "Tags",
      "recipe.ingredients": "Ingredients",
      "recipe.method": "Method",
      "event.one": "event",
      "event.many": "events",
      "event.today": "Today",
      "event.tomorrow": "Tomorrow",
      "event.inDays": "In {days} days",
      "event.yesterday": "Yesterday",
      "event.daysAgo": "{days} days ago",
      "event.meaning": "Meaning",
      "event.shelf": "Choo shelf",
      "event.noMonth": "No Chinese calendar entries for {month}.",
      "event.noUpcoming": "No upcoming Chinese calendar entries."
    },
    de: {
      "meta.title": "Choo Foodstore | Asia-Supermarkt Wien",
      "meta.description": "Choo Foodstore ist ein kuratierter Asia-Supermarkt an der Linken Wienzeile 54 in Wien.",
      "top.address": "Adresse: Linke Wienzeile 54, 1060 Wien",
      "top.phone": "Telefon: 01 9605678",
      "nav.home": "Home",
      "nav.selection": "Sortiment",
      "nav.new": "Neu",
      "nav.recipes": "Rezepte",
      "nav.events": "Events",
      "nav.reviews": "Bewertungen",
      "hero.eyebrow": "Asia-Supermarkt · Wien 1060",
      "hero.title": "Snacks, Saucen & Basics.",
      "hero.text": "Asia-Markt an der Linken Wienzeile. Vorrat, Nudeln, Snacks und Saucen aus ganz Asien.",
      "hero.cta": "Besuchen ↗",
      "hero.address": "Linke Wienzeile 54 · 1060 Wien",
      "cat.china": "Hauptregal",
      "cat.vietnam": "Pho · Reispapier",
      "cat.thailand": "Curry · Kokos",
      "story.eyebrow": "Unser Markt",
      "story.title": "Asien, sorgfältig sortiert.",
      "story.p1": "Über 3.000 Produkte aus China, Japan, Korea, Vietnam und ganz Südostasien, von der Sojasauce bis zum Reiskocher. Übersichtlich, sauber, gut beraten.",
      "story.p2": "Wir kuratieren das Sortiment selbst und beraten dich gerne, egal ob es um die richtige Sojasauce, eine bestimmte Paste oder ein Geschenk geht.",
      "story.cta": "Mehr erfahren",
      "aisle.eyebrow": "02 - Im Markt",
      "aisle.title": "Tippe ein Regal an.<br /><em>Es ist voll.</em>",
      "aisle.text": "Drei Gänge, niedrige Decke, Papierlaternen. Wir führen rund 1.200 Artikel - tief sortiert bei Saucen, Nudeln und Reis, mit wechselnden regionalen Snacks. Tippe auf die Illustration, um einen Bereich zu entdecken.",
      "recipes.eyebrow": "03 - Aus der Küche",
      "recipes.title": "Vier Rezepte, vier Gänge.",
      "recipes.text": "Traditionelle Gerichte, die du auch unter der Woche kochen kannst - fast alles dafür steht bei uns im Regal.",
      "filter.all": "alle",
      "filter.vegetarian": "vegetarisch",
      "filter.spicy": "scharf",
      "filter.quick": "schnell",
      "events.eyebrow": "04 - Chinesischer Kalender",
      "events.title": "Traditionelle Feste 2026.",
      "events.text": "Startet mit den nächsten drei Terminen, danach kannst du Monat für Monat springen.",
      "reviews.eyebrow": "Bewertungen",
      "reviews.title": "Was Kundinnen und Kunden sagen.",
      "reviews.sub": "Basierend auf 312 Google-Bewertungen.",
      "review.anna": "Sehr sauber sortiert, super Beratung und viele Produkte, die man sonst in Wien lange suchen muss.",
      "review.daniel": "Ich komme wegen Saucen, Reis und Snacks. Man findet schnell, was man braucht, ohne Markt-Chaos.",
      "review.mei": "Freundlich, ruhig und gut kuratiert. Besonders die Tee-Auswahl und die kleinen Empfehlungen sind stark.",
      "review.markus": "Endlich ein Asia-Markt, in dem man nicht ewig suchen muss. Die Regale sind logisch und die Auswahl passt.",
      "review.sofia": "Sehr gute Auswahl an Nudeln, Chili Crisp und Reissorten. Ich nehme fast jedes Mal etwas Neues mit.",
      "review.linh": "Die Mitarbeitenden kennen die Produkte wirklich. Ich habe genau die Sauce gefunden, die ich gebraucht habe.",
      "place.anna": "Wien · 6. Bezirk",
      "place.daniel": "Wien · Neubau",
      "place.mei": "Wien · Mariahilf",
      "place.markus": "Wien · Innere Stadt",
      "place.sofia": "Wien · Wieden",
      "place.linh": "Wien · Margareten",
      "student.eyebrow": "Exklusiv für Studierende",
      "student.title": "Studentenrabatt",
      "student.stamp": "Rabatt",
      "student.sub": "Studentenausweis hochladen und sparen",
      "student.step1.title": "Studentenausweis hochladen",
      "student.step1.text": "Schnell & einfach",
      "student.step2.title": "Rabatt automatisch erhalten",
      "student.step2.text": "5% sparen",
      "student.step3.title": "Einkaufen & profitieren",
      "student.step3.text": "Sofort sparen",
      "visit.eyebrow": "05 - Find us",
      "visit.title": "Linke Wienzeile 54<br /><em>1060 Wien.</em>",
      "visit.contact": "<strong>Adresse:</strong> Linke Wienzeile 54, 1060 Wien<br /><strong>Telefon:</strong> <a href=\"tel:019605678\">01 9605678</a>",
      "hours.weekdays": "Mo - Fr",
      "hours.saturday": "Samstag",
      "hours.sunday": "Sonntag",
      "hours.closed": "geschlossen",
      "footer.links": "Links",
      "footer.about": "Über uns",
      "footer.visit": "Besuchen",
      "footer.hours1": "Mo-Fr 09-20:00",
      "footer.hours2": "Sa 09-18:00",
      "footer.phone": "Telefon: <a href=\"tel:019605678\">01 9605678</a>",
      "footer.text": "Asia-Supermarkt im sechsten Wiener Bezirk. Sorgfältig sortiert, freundlich beraten.",
      "footer.copy": "© 2026 Choo Foodstore · Linke Wienzeile 54, 1060 Wien",
      "footer.imprint": "Impressum",
      "footer.privacy": "Datenschutz",
      "lang.aria": "Sprache wechseln",
      "menu.open": "Menü öffnen",
      "menu.close": "Menü schließen",
      "status.openUntil": "Jetzt geöffnet · bis {time}",
      "status.closedBefore": "Noch geschlossen · ab 09:00",
      "status.closedMonday": "Heute geschlossen · Montag ab 09:00",
      "status.closedTomorrow": "Heute geschlossen · morgen ab 09:00",
      "status.openNow": "Geöffnet",
      "status.closedNow": "Geschlossen",
      "recipe.label": "Rezept",
      "recipe.inStore": "{current}/{total} im Markt",
      "recipe.back": "Zurück zu den Rezepten",
      "recipe.next": "Nächstes Rezept",
      "recipe.serves": "für",
      "recipe.atChoo": "bei Choo",
      "recipe.eyebrow": "Rezept - Choo Pantry",
      "recipe.time": "Zeit",
      "recipe.servesLabel": "Portionen",
      "recipe.tags": "Tags",
      "recipe.ingredients": "Zutaten",
      "recipe.method": "Zubereitung",
      "event.one": "Event",
      "event.many": "Events",
      "event.today": "Heute",
      "event.tomorrow": "Morgen",
      "event.inDays": "In {days} Tagen",
      "event.yesterday": "Gestern",
      "event.daysAgo": "Vor {days} Tagen",
      "event.meaning": "Bedeutung",
      "event.shelf": "Choo-Regal",
      "event.noMonth": "Keine chinesischen Kalendereinträge für {month}.",
      "event.noUpcoming": "Keine kommenden chinesischen Kalendereinträge."
    },
    zh: {
      "meta.title": "Choo Foodstore | 维也纳亚洲超市",
      "meta.description": "Choo Foodstore 是位于维也纳 Linke Wienzeile 54 的精选亚洲超市。",
      "top.address": "地址：Linke Wienzeile 54, 1060 维也纳",
      "top.phone": "电话：01 9605678",
      "nav.home": "首页",
      "nav.selection": "商品",
      "nav.new": "新",
      "nav.recipes": "食谱",
      "nav.events": "活动",
      "nav.reviews": "评价",
      "hero.eyebrow": "亚洲超市 · 维也纳 1060",
      "hero.title": "零食、酱料与日常食材。",
      "hero.text": "位于 Linke Wienzeile 的亚洲市场。这里有来自亚洲各地的主食、面、零食和酱料。",
      "hero.cta": "到店看看 ↗",
      "hero.address": "Linke Wienzeile 54 · 1060 维也纳",
      "cat.china": "主货架",
      "cat.vietnam": "河粉 · 米纸",
      "cat.thailand": "咖喱 · 椰奶",
      "story.eyebrow": "我们的市场",
      "story.title": "亚洲风味，精心陈列。",
      "story.p1": "超过 3,000 种来自中国、日本、韩国、越南和东南亚的商品，从酱油到电饭煲，一目了然，干净好逛。",
      "story.p2": "我们亲自挑选商品，也乐意为你推荐合适的酱油、调味酱或礼物。",
      "story.cta": "了解更多",
      "aisle.eyebrow": "02 - 店内",
      "aisle.title": "点一下货架。<br /><em>货很足。</em>",
      "aisle.text": "三条过道、低矮天花和纸灯笼。我们约有 1,200 种商品，酱料、面和米类很齐全，也会持续更换地区零食。点按插图探索不同区域。",
      "recipes.eyebrow": "03 - 来自厨房",
      "recipes.title": "四道食谱，四条过道。",
      "recipes.text": "下班后也能完成的传统菜，大部分食材都能在我们的货架上找到。",
      "filter.all": "全部",
      "filter.vegetarian": "素食",
      "filter.spicy": "辣",
      "filter.quick": "快速",
      "events.eyebrow": "04 - 中国日历",
      "events.title": "2026 传统节日。",
      "events.text": "默认显示接下来三个日期，也可以按月份浏览。",
      "reviews.eyebrow": "评价",
      "reviews.title": "顾客怎么说。",
      "reviews.sub": "基于 312 条 Google 评价。",
      "review.anna": "店里很干净，分类清楚，建议也很实用，很多在维也纳很难找的商品这里都有。",
      "review.daniel": "我常来买酱料、米和零食。不用在混乱的市场里找很久，很快就能找到需要的东西。",
      "review.mei": "友好、安静、选品好。茶的选择和小推荐尤其不错。",
      "review.markus": "终于有一家不用找很久的亚洲市场。货架很有逻辑，选择也刚好。",
      "review.sofia": "面、辣椒脆和米类选择很好。我几乎每次都会带点新东西回家。",
      "review.linh": "店员真的了解商品。我找到了正好需要的那款酱。",
      "place.anna": "维也纳 · 第六区",
      "place.daniel": "维也纳 · Neubau",
      "place.mei": "维也纳 · Mariahilf",
      "place.markus": "维也纳 · 内城区",
      "place.sofia": "维也纳 · Wieden",
      "place.linh": "维也纳 · Margareten",
      "student.eyebrow": "学生专属",
      "student.title": "学生折扣",
      "student.stamp": "优惠",
      "student.sub": "上传学生证即可省钱",
      "student.step1.title": "上传学生证",
      "student.step1.text": "快速简单",
      "student.step2.title": "自动获得折扣",
      "student.step2.text": "节省 5%",
      "student.step3.title": "购物并享受优惠",
      "student.step3.text": "立即节省",
      "visit.eyebrow": "05 - 找到我们",
      "visit.title": "Linke Wienzeile 54<br /><em>1060 维也纳。</em>",
      "visit.contact": "<strong>地址：</strong>Linke Wienzeile 54, 1060 维也纳<br /><strong>电话：</strong><a href=\"tel:019605678\">01 9605678</a>",
      "hours.weekdays": "周一至周五",
      "hours.saturday": "周六",
      "hours.sunday": "周日",
      "hours.closed": "休息",
      "footer.links": "链接",
      "footer.about": "关于我们",
      "footer.visit": "到店",
      "footer.hours1": "周一至周五 09-20:00",
      "footer.hours2": "周六 09-18:00",
      "footer.phone": "电话：<a href=\"tel:019605678\">01 9605678</a>",
      "footer.text": "维也纳第六区的亚洲超市。精心陈列，友好建议。",
      "footer.copy": "© 2026 Choo Foodstore · Linke Wienzeile 54, 1060 维也纳",
      "footer.imprint": "法律信息",
      "footer.privacy": "隐私",
      "lang.aria": "切换语言",
      "menu.open": "打开菜单",
      "menu.close": "关闭菜单",
      "status.openUntil": "营业中 · 到 {time}",
      "status.closedBefore": "暂未营业 · 09:00 开门",
      "status.closedMonday": "今日休息 · 周一 09:00 开门",
      "status.closedTomorrow": "已打烊 · 明天 09:00 开门",
      "status.openNow": "营业中",
      "status.closedNow": "已打烊",
      "recipe.label": "食谱",
      "recipe.inStore": "店内有 {current}/{total}",
      "recipe.back": "返回食谱",
      "recipe.next": "下一道食谱",
      "recipe.serves": "份量",
      "recipe.atChoo": "在 Choo",
      "recipe.eyebrow": "食谱 - Choo 食材",
      "recipe.time": "时间",
      "recipe.servesLabel": "份量",
      "recipe.tags": "标签",
      "recipe.ingredients": "食材",
      "recipe.method": "做法",
      "event.one": "活动",
      "event.many": "活动",
      "event.today": "今天",
      "event.tomorrow": "明天",
      "event.inDays": "{days} 天后",
      "event.yesterday": "昨天",
      "event.daysAgo": "{days} 天前",
      "event.meaning": "含义",
      "event.shelf": "Choo 货架",
      "event.noMonth": "{month} 没有中国日历条目。",
      "event.noUpcoming": "暂无即将到来的中国日历条目。"
    }
  };

  const interpolate = (value, params = {}) => String(value).replace(/\{(\w+)\}/g, (_match, key) => params[key] ?? "");
  const getStoredLang = () => {
    const stored = window.localStorage?.getItem("choo-language");
    return LANGS.includes(stored) ? stored : "en";
  };
  let currentLang = getStoredLang();

  function t(key, params) {
    return interpolate(STRINGS[currentLang]?.[key] ?? STRINGS.en[key] ?? key, params);
  }

  function applyLanguage(lang = currentLang) {
    currentLang = LANGS.includes(lang) ? lang : "en";
    window.localStorage?.setItem("choo-language", currentLang);
    document.documentElement.lang = HTML_LANG[currentLang];
    document.title = t("meta.title");
    document.querySelector("meta[name='description']")?.setAttribute("content", t("meta.description"));

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      node.innerHTML = t(node.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-language-code]").forEach((node) => {
      node.textContent = LABELS[currentLang];
    });
    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.setAttribute("aria-label", t("lang.aria"));
      button.setAttribute("title", t("lang.aria"));
    });

    window.dispatchEvent(new CustomEvent("choo:languagechange", { detail: { lang: currentLang } }));
  }

  function cycleLanguage() {
    const next = LANGS[(LANGS.indexOf(currentLang) + 1) % LANGS.length];
    applyLanguage(next);
  }

  window.ChooI18n = {
    getLanguage: () => currentLang,
    t,
    applyLanguage,
    onChange(callback) {
      window.addEventListener("choo:languagechange", callback);
    }
  };

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-language-toggle]")) cycleLanguage();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => applyLanguage(currentLang), { once: true });
  } else {
    applyLanguage(currentLang);
  }
})();

(() => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const hero = document.querySelector(".hero");
  const heroImages = Array.from(document.querySelectorAll("[data-hero-image]"));
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

  const heroSlide = {
    src: "images/WhatsApp%20Image%202026-05-07%20at%2019.39.46.jpeg",
    mobileSrc: "images/create_the_mobile_optimized_version,_202605072005.jpeg",
    alt: "Choo Foodstore Eingang",
    mobileAlt: "Mobile Hero Ansicht des Choo Foodstore",
  };

  let ticking = false;
  let pageLoaded = false;
  let logoAnimationDone = false;
  let loaderHidden = false;

  const hotspots = [
    {
      id: "h1", x: 28, y: 32,
      copy: {
        en: { label: "Lanterns", aisle: "Seasonal - front window", note: "Stocked all year - bigger run for Lunar New Year." },
        de: { label: "Laternen", aisle: "Saison - Schaufenster", note: "Ganzjährig auf Lager - größere Auswahl zum Lunar New Year." },
        zh: { label: "灯笼", aisle: "季节区 - 橱窗", note: "全年都有，农历新年前选择更多。" }
      }
    },
    {
      id: "h2", x: 76, y: 28,
      copy: {
        en: { label: "Premium soy & sauces", aisle: "Aisle 1 - top two shelves", note: "Kikkoman, Lee Kum Kee, Pearl River, plus small-batch Taiwanese." },
        de: { label: "Premium-Soja & Saucen", aisle: "Gang 1 - obere zwei Regale", note: "Kikkoman, Lee Kum Kee, Pearl River und kleine taiwanesische Chargen." },
        zh: { label: "精选酱油与酱料", aisle: "第 1 过道 - 上方两层", note: "龟甲万、李锦记、珠江桥，还有小批量台湾酱料。" }
      }
    },
    {
      id: "h3", x: 78, y: 62,
      copy: {
        en: { label: "Curry pastes & jars", aisle: "Aisle 1 - lower shelves", note: "Thai red/green/yellow, Maesri, Mae Ploy, plus laksa." },
        de: { label: "Currypasten & Gläser", aisle: "Gang 1 - untere Regale", note: "Thai rot/grün/gelb, Maesri, Mae Ploy und Laksa." },
        zh: { label: "咖喱酱与瓶装调料", aisle: "第 1 过道 - 下方货架", note: "泰式红/绿/黄咖喱、Maesri、Mae Ploy 和叻沙。" }
      }
    },
    {
      id: "h4", x: 50, y: 68,
      copy: {
        en: { label: "Noodles & rice", aisle: "Aisle 2", note: "Hand-pulled, instant, soba, glass, jasmine, sushi, sticky." },
        de: { label: "Nudeln & Reis", aisle: "Gang 2", note: "Handgezogen, Instant, Soba, Glasnudeln, Jasmin, Sushi und Klebreis." },
        zh: { label: "面与米", aisle: "第 2 过道", note: "拉面、方便面、荞麦面、粉丝、茉莉香米、寿司米和糯米。" }
      }
    },
    {
      id: "h5", x: 17, y: 70,
      copy: {
        en: { label: "Snacks & sweets", aisle: "Aisle 3", note: "Pocky, shrimp chips, mochi, haw flakes, lychee jelly." },
        de: { label: "Snacks & Süßes", aisle: "Gang 3", note: "Pocky, Krabbenchips, Mochi, Haw Flakes und Litschi-Gelee." },
        zh: { label: "零食与甜点", aisle: "第 3 过道", note: "Pocky、虾片、麻糬、山楂片和荔枝果冻。" }
      }
    },
  ];

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
    navToggle?.setAttribute("aria-label", window.ChooI18n?.t(open ? "menu.close" : "menu.open") || (open ? "Close menu" : "Open menu"));
  }

  function applyHeroImage() {
    if (!heroImages.length) return;
    const useMobile = mobileHeroQuery.matches && heroSlide.mobileSrc;
    const src = useMobile ? heroSlide.mobileSrc : heroSlide.src;
    const alt = useMobile ? heroSlide.mobileAlt : heroSlide.alt;
    heroImages.forEach((image) => {
      image.src = src;
      image.alt = alt;
    });
  }

  function updateOpeningStatus() {
    if (!statusText) return;
    const tr = (key, params) => window.ChooI18n?.t(key, params) || key;

    const now = new Date();
    const day = now.getDay();
    const currentHour = now.getHours() + now.getMinutes() / 60;
    const isWeekday = day >= 1 && day <= 5;
    const isSaturday = day === 6;
    const closesAt = isWeekday ? "20:00" : isSaturday ? "18:00" : "";
    const opensToday = isWeekday || isSaturday;
    const isOpen = opensToday && currentHour >= 9 && currentHour < (isWeekday ? 20 : 18);

    if (isOpen) {
      statusText.textContent = tr("status.openUntil", { time: closesAt });
      statusDot?.classList.remove("closed");
      return;
    }

    if (opensToday && currentHour < 9) {
      statusText.textContent = tr("status.closedBefore");
    } else if (day === 6 || day === 0) {
      statusText.textContent = tr("status.closedMonday");
    } else {
      statusText.textContent = tr("status.closedTomorrow");
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

  function closeHotspots() {
    document.querySelectorAll("[data-hotspot]").forEach((button) => {
      button.classList.remove("hot--on");
      button.setAttribute("aria-expanded", "false");
      button.querySelector(".hot__card")?.remove();
    });
  }

  function hotspotCopy(hotspot) {
    const lang = window.ChooI18n?.getLanguage?.() || "en";
    return hotspot.copy[lang] || hotspot.copy.en;
  }

  function updateHotspotLabels() {
    document.querySelectorAll("[data-hotspot]").forEach((button) => {
      const hotspot = hotspots.find((item) => item.id === button.dataset.hotspot);
      if (hotspot) button.setAttribute("aria-label", hotspotCopy(hotspot).label);
    });
  }

  function openHotspot(button) {
    const hotspot = hotspots.find((item) => item.id === button.dataset.hotspot);
    if (!hotspot) return;
    const copy = hotspotCopy(hotspot);

    button.classList.add("hot--on");
    button.setAttribute("aria-expanded", "true");

    const card = document.createElement("span");
    card.className = "hot__card";

    const title = document.createElement("strong");
    title.textContent = copy.label;

    const aisle = document.createElement("span");
    aisle.className = "hot__aisle";
    aisle.textContent = copy.aisle;

    const note = document.createElement("span");
    note.className = "hot__note";
    note.textContent = copy.note;

    card.append(title, aisle, note);
    button.append(card);
  }

  function setupHotspots() {
    const mount = document.querySelector("[data-hotspots]");
    if (!mount) return;

    hotspots.forEach((hotspot) => {
      const button = document.createElement("button");
      button.className = `hot${hotspot.x > 60 ? " hot--right" : ""}`;
      button.type = "button";
      button.style.left = `${hotspot.x}%`;
      button.style.top = `${hotspot.y}%`;
      button.dataset.hotspot = hotspot.id;
      button.setAttribute("aria-label", hotspotCopy(hotspot).label);
      button.setAttribute("aria-expanded", "false");

      const dot = document.createElement("span");
      dot.className = "hot__dot";
      const pulse = document.createElement("span");
      pulse.className = "hot__pulse";

      button.append(dot, pulse);
      mount.append(button);
    });

    mount.addEventListener("click", (event) => {
      if (event.target.closest(".hot__card")) return;
      const button = event.target.closest("[data-hotspot]");
      if (!button) return;

      const isOpen = button.classList.contains("hot--on");
      closeHotspots();
      if (!isOpen) openHotspot(button);
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".aisle__art")) closeHotspots();
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

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenu(false);
      closeHotspots();
    }
  });

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", () => {
    requestScrollUpdate();
  });
  mobileHeroQuery.addEventListener("change", () => {
    applyHeroImage();
  });
  window.addEventListener("load", markPageLoaded, { once: true });
  window.ChooI18n?.onChange(() => {
    updateOpeningStatus();
    closeHotspots();
    updateHotspotLabels();
    setMenu(document.body.classList.contains("menu-open"));
  });

  if (document.readyState === "complete") {
    markPageLoaded();
  }

  setupLogoLoader();
  setupHotspots();
  setupCinematicPanels();
  applyHeroImage();
  updateScrollEffects();
  updateOpeningStatus();
})();

/* ===== Recipes — from test34 ===== */
(() => {
  const recipes = [
    {
      id: "mapo",
      name: "Mapo Tofu",
      tags: ["spicy"],
      time: "25 min",
      serves: 2,
      blurb: "Sichuan classic - silken tofu in a numbing chili-bean sauce.",
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
        "Brown pork in oil. Add ginger, garlic, doubanjiang - cook until red oil separates.",
        "Add stock, soy, tofu. Simmer gently 4 min - don't stir, swirl the pan.",
        "Thicken with slurry. Off heat, fold in scallions, dust with peppercorn.",
      ],
    },
    {
      id: "dandan",
      name: "Dan Dan Noodles",
      tags: ["spicy", "quick"],
      time: "15 min",
      serves: 2,
      blurb: "Chengdu street bowl - sesame, chili oil, vinegar, crisp pork.",
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
        "Soak shiitake 20 min in warm water - keep the soaking liquid.",
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
        "More oil, scallion whites, then rice. Press, toss, repeat - break clumps.",
        "Return eggs. Soy down the side of the wok. White pepper.",
        "Off heat: scallion greens, sesame oil. Serve immediately.",
      ],
    },
  ];

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));

  let activeFilter = "all";
  const recipeText = {
    de: {
      mapo: { blurb: "Sichuan-Klassiker - Seidentofu in einer betäubend scharfen Chili-Bohnen-Sauce." },
      dandan: { blurb: "Chengdu-Streetfood - Sesam, Chiliöl, Essig und knuspriges Schwein." },
      "garlic-bok-choy": { blurb: "Zwei Hauptzutaten, viel Geschmack. Glänzend, knoblauchig, in Minuten fertig." },
      "fried-rice": { blurb: "Reis vom Vortag, heißer Wok, drei Zutaten richtig gemacht." }
    },
    zh: {
      mapo: { blurb: "四川经典菜 - 嫩豆腐配麻辣豆瓣酱汁。" },
      dandan: { blurb: "成都街头风味 - 芝麻、辣油、醋和香脆肉末。" },
      "garlic-bok-choy": { blurb: "两种主角，大量风味。蒜香浓郁，几分钟就能上桌。" },
      "fried-rice": { blurb: "隔夜茉莉香米、热锅和简单食材，做出经典炒饭。" }
    }
  };

  const tr = (key, params) => window.ChooI18n?.t(key, params) || key;
  const currentLang = () => window.ChooI18n?.getLanguage?.() || "en";
  const recipeBlurb = (recipe) => recipeText[currentLang()]?.[recipe.id]?.blurb || recipe.blurb;
  const tagLabel = (tag) => tr(`filter.${tag}`);

  function renderRecipes(filter = "all") {
    const mount = document.querySelector("[data-recipes]");
    if (!mount) return;

    const visible = filter === "all" ? recipes : recipes.filter((recipe) => recipe.tags.includes(filter));
    mount.innerHTML = visible.map((recipe) => {
      const originalIndex = recipes.findIndex((item) => item.id === recipe.id) + 1;
      const inStore = recipe.ingredients.filter((ingredient) => ingredient.inStore).length;
      const tags = recipe.tags.map((tag) => `<span class="tag tag--${escapeHtml(tag)}">${escapeHtml(tagLabel(tag))}</span>`).join("");

      return `
        <button class="rc" type="button" data-recipe="${escapeHtml(recipe.id)}">
          <span class="rc__top">
            <span class="rc__no">${escapeHtml(tr("recipe.label"))} ${String(originalIndex).padStart(2, "0")}</span>
            <span class="rc__time">${escapeHtml(recipe.time)}</span>
          </span>
          <span class="rc__body">
            <span class="rc__name">${escapeHtml(recipe.name)}</span>
            <span class="rc__blurb">${escapeHtml(recipeBlurb(recipe))}</span>
          </span>
          <span class="rc__meta">
            <span class="rc__tags">${tags}</span>
            <span class="rc__availability">${escapeHtml(tr("recipe.inStore", { current: inStore, total: recipe.ingredients.length }))}</span>
          </span>
        </button>
      `;
    }).join("");

    if (window.matchMedia("(max-width: 820px)").matches) {
      mount.scrollTo({ left: 0, behavior: "smooth" });
    }
  }

  function openRecipe(id) {
    const recipe = recipes.find((item) => item.id === id);
    const view = document.querySelector("[data-recipe-view]");
    if (!recipe || !view) return;

    const inStore = recipe.ingredients.filter((ingredient) => ingredient.inStore).length;
    const recipeIndex = recipes.findIndex((item) => item.id === id);
    const nextRecipe = recipes[(recipeIndex + 1) % recipes.length];
    const ingredients = recipe.ingredients.map((ingredient) => `
      <li class="ing ${ingredient.inStore ? "ing--here" : ""}">
        <span class="ing__mark" aria-hidden="true">${ingredient.inStore ? "●" : "○"}</span>
        <span class="ing__name">${escapeHtml(ingredient.name)}</span>
        ${ingredient.inStore ? `<span class="ing__aisle">${escapeHtml(ingredient.aisle)}</span>` : ""}
      </li>
    `).join("");
    const steps = recipe.steps.map((step, index) => `
      <li><span class="step__n">${String(index + 1).padStart(2, "0")}</span><span>${escapeHtml(step)}</span></li>
    `).join("");
    const tags = recipe.tags.map((tag) => `<span class="tag tag--${escapeHtml(tag)}">${escapeHtml(tagLabel(tag))}</span>`).join("");

    view.innerHTML = `
      <div class="recipe-view__bar">
        <div class="recipe-view__actions">
          <button class="recipe-view__back" type="button" data-close-recipe>
            <span aria-hidden="true">←</span>
            <span>${escapeHtml(tr("recipe.back"))}</span>
          </button>
          <button class="recipe-view__next" type="button" data-next-recipe="${escapeHtml(nextRecipe.id)}">
            <span>${escapeHtml(tr("recipe.next"))}</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <span class="recipe-view__small">${escapeHtml(recipe.time)} - ${escapeHtml(tr("recipe.serves"))} ${recipe.serves} - ${escapeHtml(tr("recipe.inStore", { current: inStore, total: recipe.ingredients.length }))}</span>
      </div>
      <article class="recipe-page" role="dialog" aria-modal="true" aria-labelledby="recipe-title">
        <div class="recipe-page__hero">
          <div>
            <span class="eyebrow">${escapeHtml(tr("recipe.eyebrow"))}</span>
            <h3 class="recipe-page__title" id="recipe-title">${escapeHtml(recipe.name)}</h3>
            <p class="recipe-page__blurb">${escapeHtml(recipeBlurb(recipe))}</p>
          </div>
          <div class="recipe-page__stats" aria-label="Recipe summary">
            <div class="recipe-stat"><span>${escapeHtml(tr("recipe.time"))}</span><strong>${escapeHtml(recipe.time)}</strong></div>
            <div class="recipe-stat"><span>${escapeHtml(tr("recipe.servesLabel"))}</span><strong>${recipe.serves}</strong></div>
            <div class="recipe-stat"><span>${escapeHtml(tr("recipe.tags"))}</span><strong>${tags}</strong></div>
          </div>
        </div>
        <div class="recipe-page__grid">
          <div class="recipe-panel">
            <div class="ings__head">
              <h4>${escapeHtml(tr("recipe.ingredients"))}</h4>
              <span class="ings__legend"><span class="dot dot--accent"></span> ${escapeHtml(tr("recipe.inStore", { current: inStore, total: recipe.ingredients.length }))}</span>
            </div>
            <ul>${ingredients}</ul>
          </div>
          <div class="recipe-panel">
            <h4>${escapeHtml(tr("recipe.method"))}</h4>
            <ol>${steps}</ol>
          </div>
        </div>
      </article>
    `;

    view.dataset.activeRecipe = id;
    view.setAttribute("aria-hidden", "false");
    document.body.classList.add("recipe-open");
    view.scrollTo({ top: 0, behavior: "auto" });
    requestAnimationFrame(() => view.classList.add("recipe-view--open"));
    view.querySelector("[data-close-recipe]")?.focus();
  }

  function closeRecipe() {
    const view = document.querySelector("[data-recipe-view]");
    if (!view || view.getAttribute("aria-hidden") === "true") return;

    view.classList.remove("recipe-view--open");
    view.setAttribute("aria-hidden", "true");
    document.body.classList.remove("recipe-open");
    delete view.dataset.activeRecipe;

    window.setTimeout(() => {
      if (!view.classList.contains("recipe-view--open")) view.innerHTML = "";
    }, 520);
  }

  function initRecipes() {
    renderRecipes(activeFilter);

    document.querySelector(".filters")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;

      activeFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => {
        item.classList.toggle("filter--on", item === button);
      });
      renderRecipes(activeFilter);
    });

    document.querySelector("[data-recipes]")?.addEventListener("click", (event) => {
      const card = event.target.closest("[data-recipe]");
      if (card) openRecipe(card.dataset.recipe);
    });

    const view = document.querySelector("[data-recipe-view]");
    view?.addEventListener("click", (event) => {
      if (event.target.closest("[data-close-recipe]")) closeRecipe();

      const nextButton = event.target.closest("[data-next-recipe]");
      if (nextButton) openRecipe(nextButton.dataset.nextRecipe);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeRecipe();
    });

    window.ChooI18n?.onChange(() => {
      renderRecipes(activeFilter);
      const activeRecipe = view?.dataset.activeRecipe;
      if (activeRecipe) openRecipe(activeRecipe);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRecipes);
  } else {
    initRecipes();
  }
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

  const EVENT_YEAR = 2026;
  const DAY_MS = 24 * 60 * 60 * 1000;
  const tr = (key, params) => window.ChooI18n?.t(key, params) || key;
  const currentLocale = () => ({
    en: "en-US",
    de: "de-DE",
    zh: "zh-Hans-CN"
  }[window.ChooI18n?.getLanguage?.() || "en"]);

  function viennaTodayTime() {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Europe/Vienna",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(new Date());
    const year = Number(parts.find((part) => part.type === "year")?.value);
    const month = Number(parts.find((part) => part.type === "month")?.value);
    const day = Number(parts.find((part) => part.type === "day")?.value);
    return Date.UTC(year, month - 1, day);
  }

  function eventTime(event) {
    const day = Number(event.date.match(/\d{2}$/)?.[0]);
    return Date.UTC(EVENT_YEAR, event.month - 1, day);
  }

  function daysUntil(event) {
    return Math.round((eventTime(event) - viennaTodayTime()) / DAY_MS);
  }

  function dayDistanceLabel(event) {
    const days = daysUntil(event);
    if (days === 0) return tr("event.today");
    if (days === 1) return tr("event.tomorrow");
    if (days > 1) return tr("event.inDays", { days });
    if (days === -1) return tr("event.yesterday");
    return tr("event.daysAgo", { days: Math.abs(days) });
  }

  function upcomingEvents(minCount = 3) {
    const today = viennaTodayTime();
    const upcoming = CHINESE_EVENTS.filter((event) => eventTime(event) >= today);
    const source = upcoming.length ? upcoming : CHINESE_EVENTS;
    return source.slice(0, minCount);
  }

  let activeEventMonth = upcomingEvents(1)[0]?.month || Number(new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Vienna",
    month: "numeric"
  }).format(new Date()));
  let activeEventMode = "upcoming";
  const mobileMonthQuery = window.matchMedia("(max-width: 980px)");

  function eventsForMonth(month) {
    return CHINESE_EVENTS.filter((event) => event.month === month);
  }

  function monthName(month, style = "short") {
    return new Intl.DateTimeFormat(currentLocale(), { month: style, timeZone: "UTC" })
      .format(new Date(Date.UTC(EVENT_YEAR, month - 1, 1)));
  }

  function renderEventFilters() {
    const wheel = document.querySelector("[data-event-wheel]");
    if (!wheel) return;
    wheel.innerHTML = MONTHS.map((month) => {
      const count = eventsForMonth(month.n).length;
      return `
        <button type="button" data-event-month="${month.n}">
          <b>${escapeHtml(monthName(month.n))}</b>
          <small>${count} ${escapeHtml(tr(count === 1 ? "event.one" : "event.many"))}</small>
        </button>
      `;
    }).join("");
    updateEventWheel();
  }

  function eventCard(event) {
    return `
      <li class="ev" data-event-month="${event.month}">
        <span class="ev__symbol" aria-hidden="true">${escapeHtml(event.symbol)}</span>
        <div class="ev__date"><span class="ev__d">${escapeHtml(event.date)}</span><span class="ev__y">${EVENT_YEAR}</span><span class="ev__distance">${escapeHtml(dayDistanceLabel(event))}</span></div>
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
            <div class="ev__detail"><strong>${escapeHtml(tr("event.meaning"))}</strong><span>${escapeHtml(event.meaning)}</span></div>
            <div class="ev__detail"><strong>${escapeHtml(tr("event.shelf"))}</strong><span>${escapeHtml(event.shelf)}</span></div>
          </div>
        </div>
      </li>
    `;
  }

  function renderEventList(events, emptyMessage, resetScroll = false) {
    const list = document.querySelector(".events__list");
    if (!list) return;
    list.classList.toggle("events__list--upcoming", activeEventMode === "upcoming");
    list.innerHTML = events.length
      ? events.map(eventCard).join("")
      : `<li class="events__empty">${escapeHtml(emptyMessage)}</li>`;
    if (resetScroll) {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      list.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    }
    const first = events[0];
    const currentDate = document.querySelector("[data-event-current-date]");
    const currentTitle = document.querySelector("[data-event-current-title]");
    if (currentDate) currentDate.textContent = first?.date || "";
    if (currentTitle) currentTitle.textContent = first?.title || tr("event.noUpcoming");
  }

  function renderEventsForMonth(month, resetScroll = false) {
    activeEventMode = "month";
    renderEventList(eventsForMonth(month), tr("event.noMonth", { month: monthName(month, "long") }), resetScroll);
  }

  function renderUpcomingEvents(resetScroll = false) {
    activeEventMode = "upcoming";
    renderEventList(upcomingEvents(3), tr("event.noUpcoming"), resetScroll);
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
    wheel.style.transform = mobileMonthQuery.matches ? "none" : `translateY(${-activeIndex * rowHeight}px)`;
    wheel.querySelectorAll("[data-event-month]").forEach((button) => {
      const distance = Math.abs(Number(button.dataset.eventMonth) - activeEventMonth);
      button.classList.toggle("is-active", distance === 0);
      button.classList.toggle("is-near", distance === 1);
    });
    if (mobileMonthQuery.matches) {
      const activeBtn = wheel.querySelector(".is-active");
      const track = activeBtn?.closest(".events__rail-track");
      if (activeBtn && track) {
        const left = activeBtn.offsetLeft - track.clientWidth / 2 + activeBtn.clientWidth / 2;
        track.scrollTo({ left, behavior: "smooth" });
      }
    }
  }

  function setupEventTimeline() {
    const list = document.querySelector(".events__list");
    const wheel = document.querySelector("[data-event-wheel]");
    if (!list || !wheel) return;
    const picker = wheel.parentElement;
    renderEventFilters();
    renderUpcomingEvents();
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
      if (activeEventMode === "upcoming") {
        const cardMonth = Number(activeCard.dataset.eventMonth);
        if (cardMonth && cardMonth !== activeEventMonth) {
          activeEventMonth = cardMonth;
          updateEventWheel();
        }
      }
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
      if (mobileMonthQuery.matches) return;
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
    mobileMonthQuery.addEventListener("change", updateEventWheel);
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
    text.textContent = isOpen ? tr("status.openNow") : tr("status.closedNow");
  }

  function init() {
    setupEventTimeline();
    updateVisitStatus();
    window.ChooI18n?.onChange(() => {
      renderEventFilters();
      if (activeEventMode === "upcoming") {
        renderUpcomingEvents(false);
      } else {
        renderEventsForMonth(activeEventMonth, false);
      }
      updateVisitStatus();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* ===== Country category buttons ===== */
(function () {
  const COUNTRIES = {
    china: {
      glyph: "中",
      image: "images/gallery.png",
      copy: {
        en: { title: "China", eyebrow: "01 - Main aisle", line: "From slow Sichuan braises to clean southern rice - the heart of our market.", alt: "Still life with Chinese ingredients" },
        de: { title: "China", eyebrow: "01 - Hauptregal", line: "Vom langsamen Schmoren in Sichuan bis zum klaren Reis aus dem Süden - das Herz unseres Marktes.", alt: "Stillleben mit chinesischen Zutaten" },
        zh: { title: "中国", eyebrow: "01 - 主货架", line: "从川味慢炖到南方清香米，这里是我们市场的核心。", alt: "中式食材静物" }
      }
    },
    japan: {
      glyph: "日",
      image: "images/gallery_2.png",
      copy: {
        en: { title: "Japan", eyebrow: "02 - Ramen · Matcha", line: "Quiet precision: long-aged soy sauces, fresh udon and bright green matcha from Uji.", alt: "Japanese pantry selection" },
        de: { title: "Japan", eyebrow: "02 - Ramen · Matcha", line: "Stille Präzision: Sojasaucen mit langer Reife, frische Udon und ein leuchtend grüner Matcha aus Uji.", alt: "Japanische Pantry-Auswahl" },
        zh: { title: "日本", eyebrow: "02 - 拉面 · 抹茶", line: "安静而精准：熟成酱油、新鲜乌冬和来自宇治的清亮抹茶。", alt: "日式食材选择" }
      }
    },
    korea: {
      glyph: "韩",
      image: "images/gallery_3.png",
      copy: {
        en: { title: "Korea", eyebrow: "03 - Gochujang · Kimchi", line: "Fermentation as craft - deep heat, gentle sweetness and kimchi from the fridge.", alt: "Korean pastes and kimchi" },
        de: { title: "Korea", eyebrow: "03 - Gochujang · Kimchi", line: "Fermentation als Handwerk - tiefe Schärfe, milde Süße und Kimchi aus dem Kühlregal.", alt: "Koreanische Pasten und Kimchi" },
        zh: { title: "韩国", eyebrow: "03 - 辣椒酱 · 泡菜", line: "发酵是一门手艺：深层辣味、柔和甜感和冷藏泡菜。", alt: "韩国酱料和泡菜" }
      }
    },
    vietnam: {
      glyph: "越",
      image: "images/gallery_4.png",
      copy: {
        en: { title: "Vietnam", eyebrow: "04 - Pho · Rice paper", line: "Clear broths, fresh herbs and fine rice paper - the lighter side of Asian cooking.", alt: "Vietnamese ingredients" },
        de: { title: "Vietnam", eyebrow: "04 - Pho · Reispapier", line: "Klare Brühen, frische Kräuter und feines Reispapier - die leichte Seite der asiatischen Küche.", alt: "Vietnamesische Zutaten" },
        zh: { title: "越南", eyebrow: "04 - 河粉 · 米纸", line: "清澈汤底、新鲜香草和细腻米纸，是亚洲料理轻盈的一面。", alt: "越南食材" }
      }
    },
    thailand: {
      glyph: "泰",
      image: "images/gallery_5.png",
      copy: {
        en: { title: "Thailand", eyebrow: "05 - Curry · Coconut", line: "Curry pastes, coconut milk and lime leaves - a whole country one wok dish away.", alt: "Thai ingredients" },
        de: { title: "Thailand", eyebrow: "05 - Curry · Kokos", line: "Currypasten, Kokosmilch und Limettenblätter - ein Wok-Gericht entfernt von einem ganzen Land.", alt: "Thailändische Zutaten" },
        zh: { title: "泰国", eyebrow: "05 - 咖喱 · 椰奶", line: "咖喱酱、椰奶和青柠叶，一口炒锅就能带你接近整个泰国。", alt: "泰国食材" }
      }
    }
  };

  const buttons = document.querySelectorAll(".cat[data-country]");
  const panel = document.getElementById("country-panel");
  if (!buttons.length || !panel) return;

  const glyphEl = panel.querySelector("[data-country-glyph]");
  const eyebrowEl = panel.querySelector("[data-country-eyebrow]");
  const titleEl = panel.querySelector("[data-country-title]");
  const lineEl = panel.querySelector("[data-country-line]");
  const imageEl = panel.querySelector("[data-country-image]");
  const closeTargets = panel.querySelectorAll("[data-country-close]");

  let active = null;

  function render(key) {
    const data = COUNTRIES[key];
    if (!data) return;
    const lang = window.ChooI18n?.getLanguage?.() || "en";
    const copy = data.copy[lang] || data.copy.en;
    glyphEl.textContent = data.glyph;
    eyebrowEl.textContent = copy.eyebrow;
    titleEl.textContent = copy.title;
    lineEl.textContent = copy.line;
    if (imageEl) {
      imageEl.style.opacity = "0";
      const swap = () => {
        imageEl.src = data.image;
        imageEl.alt = copy.alt || copy.title;
        imageEl.style.opacity = "1";
      };
      if (imageEl.src) {
        setTimeout(swap, 120);
      } else {
        swap();
      }
    }
  }

  function open(key, sourceBtn) {
    active = key;
    render(key);
    panel.hidden = false;
    document.body.classList.add("country-modal-open");
    buttons.forEach((btn) => {
      btn.setAttribute("aria-selected", btn === sourceBtn ? "true" : "false");
    });
  }

  function close() {
    active = null;
    panel.hidden = true;
    document.body.classList.remove("country-modal-open");
    buttons.forEach((btn) => btn.setAttribute("aria-selected", "false"));
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      open(btn.dataset.country, btn);
    });
  });

  closeTargets.forEach((el) => el.addEventListener("click", close));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && active) close();
  });

  window.ChooI18n?.onChange(() => {
    if (active) render(active);
  });
})();

/* ===== Student-band parallax ===== */
(function () {
  const band = document.querySelector(".student-band");
  const bg = band?.querySelector("[data-parallax]");
  if (!band || !bg) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const strength = 0.35;
  let ticking = false;

  function update() {
    ticking = false;
    const rect = band.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    if (rect.bottom < -200 || rect.top > viewportH + 200) return;
    const center = rect.top + rect.height / 2;
    const delta = center - viewportH / 2;
    const offset = -delta * strength;
    bg.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();

/* ===== Reviews carousel ===== */
(function () {
  const grid = document.querySelector(".review-grid");
  if (!grid) return;
  const reviews = Array.from(grid.querySelectorAll(".review"));
  if (reviews.length <= 1) return;

  let activeIndex = 0;
  let timer = null;
  const interval = 5000;

  function show(index) {
    const isMobile = window.innerWidth <= 900;
    const step = isMobile ? 1 : 2;
    
    activeIndex = index % reviews.length;
    activeIndex = Math.floor(activeIndex / step) * step;

    reviews.forEach((review, i) => {
      const isActive = isMobile 
        ? i === activeIndex 
        : (i === activeIndex || i === activeIndex + 1);
      review.classList.toggle("is-active", isActive);
    });
  }

  function start() {
    if (timer) return;
    timer = window.setInterval(() => {
      const step = window.innerWidth <= 900 ? 1 : 2;
      show(activeIndex + step);
    }, interval);
  }

  function restart() {
    window.clearInterval(timer);
    timer = null;
    start();
  }

  grid.addEventListener("mouseenter", () => {
    window.clearInterval(timer);
    timer = null;
  });
  grid.addEventListener("mouseleave", start);
  
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => show(activeIndex), 200);
  });

  show(0);
  start();
})();
