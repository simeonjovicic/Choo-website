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
      "nav.events": "Calendar",
      "nav.visit": "Find us",
      "hero.eyebrow": "Asian supermarket · Vienna 1060",
      "hero.title": "Snacks, Sauces and Staples.",
      "hero.text": "Asian supermarket on Linke Wienzeile, next to the Naschmarkt in Vienna 1060. Pantry staples, instant noodles, snacks, sauces and fresh goods from across Asia.",
      "hero.cta": "Visit ↗",
      "hero.address": "Linke Wienzeile 54 · 1060 Vienna",
      "categories.tablist": "Store categories",
      "categories.open": "Open {category}",
      "categories.close": "Close category",
      "categories.modalIntro": "Usually on these shelves",
      "categories.itemCount": "{count} groups",
      "categories.brandsLabel": "Brands you'll find",
      "categories.featuredAria": "Popular picks",
      "categories.brandPreview": "{brands} +{count} more",
      "categories.editorialEyebrow": "01 - Browse the store",
      "categories.editorialTitle": "Asia, by aisle.",
      "categories.editorialText": "11 core aisles, clearly sorted. Tap a tile for what's inside.",
      "categories.editorialFeatured": "Cross-shelf picks",
      "categories.carouselPrev": "Previous categories",
      "categories.carouselNext": "Next categories",
      "story.eyebrow": "Our market",
      "story.sectionEyebrow": "02 - Our market",
      "story.title": "Asia, carefully sorted.",
      "story.p1": "More than 3,000 products from China, Japan, Korea, Vietnam and Southeast Asia, from soy sauce to rice cookers. Clear, clean and easy to shop.",
      "story.p2": "We curate the selection ourselves and are happy to help, whether you need the right soy sauce, a specific paste or a gift.",
      "story.cta": "Learn more",
      "aisle.eyebrow": "02 - Inside the shop",
      "aisle.title": "Tap a shelf.<br /><em>It's stocked.</em>",
      "aisle.text": "Three aisles, low ceiling, paper lanterns. We carry around 1,200 lines - pantry deep on sauces, noodles and rice, with a steady rotation of regional snacks. Tap the illustration to find a section.",
      "aisle.unmute": "Unmute video",
      "aisle.mute": "Mute video",
      "recipes.eyebrow": "03 - From the kitchen",
      "recipes.title": "Recipes from our shelves.",
      "recipes.text": "Dishes you can finish on a weekday - most of the pantry is on our shelves.",
      "recipes.filters": "Recipe filters",
      "filter.all": "all",
      "filter.vegetarian": "vegetarian",
      "filter.spicy": "spicy",
      "filter.quick": "quick",
      "events.eyebrow": "04 - Chinese calendar",
      "events.title": "Chinese festivals and holidays in 2026.",
      "events.text": "See the next dates first, then browse month by month.",
      "fresh.eyebrow": "Fresh in store",
      "fresh.title": "Fresh this week.",
      "fresh.text": "Baked daily and delivered on a fixed rhythm — plan your visit.",
      "fresh.buns.title": "Steamed buns",
      "fresh.buns.text": "Fresh every morning, straight from the steamer.",
      "fresh.buns.stamp": "Daily",
      "fresh.mochi.title": "Mochi, toast & pastries",
      "fresh.mochi.text": "Baked fresh twice a week — Mondays and Thursdays.",
      "fresh.mochi.stamp": "Mon · Thu",
      "fresh.veg.title": "Fresh vegetables",
      "fresh.veg.text": "Delivered straight to the store on Mondays and Thursdays.",
      "fresh.veg.stamp": "Mon · Thu",
      "student.eyebrow": "Exclusive for students",
      "student.title": "Student discount",
      "student.stamp": "Off",
      "student.sub": "Valid in-store only — show your student ID at checkout to save",
      "student.step1.title": "Show student ID",
      "student.step1.text": "At checkout in store",
      "student.step2.title": "Get 5% discount",
      "student.step2.text": "Applied at checkout",
      "student.step3.title": "Shop & benefit",
      "student.step3.text": "Save on your purchase",
      "visit.eyebrow": "05 - Find us",
      "visit.title": "Linke Wienzeile 54<br /><em>1060 Vienna.</em>",
      "visit.contact": "<strong>Address:</strong> Linke Wienzeile 54, 1060 Vienna<br /><strong>Phone:</strong> <a href=\"tel:019605678\">01 9605678</a>",
      "delivery.fab": "Order delivery",
      "delivery.fabToggle": "Order delivery via Wolt or foodora",
      "delivery.wolt": "Order on Wolt",
      "delivery.foodora": "Order on foodora",
      "hours.weekdays": "Mon - Fri",
      "hours.saturday": "Saturday",
      "hours.sunday": "Sunday",
      "hours.closed": "closed",
      "payments.title": "Accepted payments",
      "payments.note": "Card, mobile wallet and selected voucher payments accepted in store.",
      "footer.links": "Links",
      "footer.visit": "Visit",
      "footer.hours1": "Mon-Fri 09-19:00",
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
      "recipe.navigation": "Recipe navigation",
      "recipe.previous": "Previous recipe",
      "recipe.next": "Next recipe",
      "recipe.serves": "serves",
      "recipe.atChoo": "at Choo",
      "recipe.eyebrow": "Recipe - Choo pantry",
      "recipe.time": "Time",
      "recipe.servesLabel": "Serves",
      "recipe.tags": "Tags",
      "recipe.ingredients": "Ingredients",
      "recipe.method": "Method",
      "recipe.summary": "Recipe summary",
      "recipe.showIngredients": "Show ingredients",
      "recipe.hideIngredients": "Hide ingredients",
      "recipe.moreIngredients": "{count} more ingredients",
      "recipe.nutrition": "Nutrition",
      "recipe.per100g": "per 100g",
      "recipe.perServing": "per serving",
      "nutrition.energy": "Energy",
      "nutrition.protein": "Protein",
      "nutrition.carbs": "Carbs",
      "nutrition.fat": "Fat",
      "timer.start": "Start",
      "timer.pause": "Pause",
      "timer.keepAwake": "Keep screen on",
      "timer.off": "Off",
      "timer.on": "On",
      "timer.paused": "Paused",
      "timer.blocked": "Blocked",
      "timer.unsupported": "Not supported",
      "event.one": "entry",
      "event.many": "entries",
      "event.today": "Today",
      "event.tomorrow": "Tomorrow",
      "event.inDays": "In {days} days",
      "event.yesterday": "Yesterday",
      "event.daysAgo": "{days} days ago",
      "event.meaning": "What it means",
      "event.shelf": "At Choo",
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
      "nav.events": "Kalender",
      "nav.visit": "Finde uns",
      "hero.eyebrow": "Asia-Supermarkt · Wien 1060",
      "hero.title": "Snacks, Saucen und Basics.",
      "hero.text": "Asia-Supermarkt an der Linken Wienzeile, direkt am Naschmarkt in Wien 1060. Vorrat, Instantnudeln, Snacks, Saucen und Frischware aus ganz Asien.",
      "hero.cta": "Besuchen ↗",
      "hero.address": "Linke Wienzeile 54 · 1060 Wien",
      "categories.tablist": "Sortimentskategorien",
      "categories.open": "{category} öffnen",
      "categories.close": "Kategorie schließen",
      "categories.modalIntro": "Meistens in diesem Regal",
      "categories.itemCount": "{count} Produktgruppen",
      "categories.brandsLabel": "Marken bei uns",
      "categories.featuredAria": "Beliebte Auswahl",
      "categories.brandPreview": "{brands} +{count} weitere",
      "categories.editorialEyebrow": "01 - Im Markt stöbern",
      "categories.editorialTitle": "Asien, regalweise.",
      "categories.editorialText": "11 Kernbereiche, klar sortiert. Tippe auf eine Kachel für den Inhalt.",
      "categories.editorialFeatured": "Quer durchs Sortiment",
      "categories.carouselPrev": "Vorherige Kategorien",
      "categories.carouselNext": "Nächste Kategorien",
      "story.eyebrow": "Unser Markt",
      "story.sectionEyebrow": "02 - Unser Markt",
      "story.title": "Asien, sorgfältig sortiert.",
      "story.p1": "Über 3.000 Produkte aus China, Japan, Korea, Vietnam und ganz Südostasien, von der Sojasauce bis zum Reiskocher. Übersichtlich, sauber, gut beraten.",
      "story.p2": "Wir kuratieren das Sortiment selbst und beraten dich gerne, egal ob es um die richtige Sojasauce, eine bestimmte Paste oder ein Geschenk geht.",
      "story.cta": "Mehr erfahren",
      "aisle.eyebrow": "02 - Im Markt",
      "aisle.title": "Tippe ein Regal an.<br /><em>Es ist voll.</em>",
      "aisle.text": "Drei Gänge, niedrige Decke, Papierlaternen. Wir führen rund 1.200 Artikel - tief sortiert bei Saucen, Nudeln und Reis, mit wechselnden regionalen Snacks. Tippe auf die Illustration, um einen Bereich zu entdecken.",
      "aisle.unmute": "Ton einschalten",
      "aisle.mute": "Stummschalten",
      "recipes.eyebrow": "03 - Aus der Küche",
      "recipes.title": "Rezepte aus unseren Regalen.",
      "recipes.text": "Gerichte, die du auch unter der Woche kochen kannst - fast alles dafür steht bei uns im Regal.",
      "recipes.filters": "Rezeptfilter",
      "filter.all": "alle",
      "filter.vegetarian": "vegetarisch",
      "filter.spicy": "scharf",
      "filter.quick": "schnell",
      "events.eyebrow": "04 - Chinesischer Kalender",
      "events.title": "Chinesische Feste und Feiertage 2026.",
      "events.text": "Zuerst siehst du die nächsten Termine; danach kannst du dich Monat für Monat durchklicken.",
      "fresh.eyebrow": "Frisch im Markt",
      "fresh.title": "Diese Woche frisch.",
      "fresh.text": "Täglich frisch gebacken und nach festem Rhythmus geliefert — plane deinen Besuch.",
      "fresh.buns.title": "Dampfgegarte Buns",
      "fresh.buns.text": "Jeden Morgen frisch aus dem Dampfgarer.",
      "fresh.buns.stamp": "Täglich",
      "fresh.mochi.title": "Mochi, Toast & Gebäck",
      "fresh.mochi.text": "Zweimal pro Woche frisch — montags und donnerstags.",
      "fresh.mochi.stamp": "Mo · Do",
      "fresh.veg.title": "Frisches Gemüse",
      "fresh.veg.text": "Wird montags und donnerstags direkt in den Markt geliefert.",
      "fresh.veg.stamp": "Mo · Do",
      "student.eyebrow": "Exklusiv für Studierende",
      "student.title": "Studentenrabatt",
      "student.stamp": "Rabatt",
      "student.sub": "Nur vor Ort im Geschäft gültig — zeige deinen Ausweis an der Kassa",
      "student.step1.title": "Ausweis vorzeigen",
      "student.step1.text": "Direkt an der Kassa",
      "student.step2.title": "Rabatt erhalten",
      "student.step2.text": "5% sparen",
      "student.step3.title": "Einkaufen & profitieren",
      "student.step3.text": "Sofort sparen",
      "visit.eyebrow": "05 - Find us",
      "visit.title": "Linke Wienzeile 54<br /><em>1060 Wien.</em>",
      "visit.contact": "<strong>Adresse:</strong> Linke Wienzeile 54, 1060 Wien<br /><strong>Telefon:</strong> <a href=\"tel:019605678\">01 9605678</a>",
      "delivery.fab": "Liefern lassen",
      "delivery.fabToggle": "Bestellen über Wolt oder foodora",
      "delivery.wolt": "Auf Wolt bestellen",
      "delivery.foodora": "Auf foodora bestellen",
      "hours.weekdays": "Mo - Fr",
      "hours.saturday": "Samstag",
      "hours.sunday": "Sonntag",
      "hours.closed": "geschlossen",
      "payments.title": "Zahlungsmethoden",
      "payments.note": "Kartenzahlung, Mobile Wallets und ausgewählte Gutscheinkarten im Store möglich.",
      "footer.links": "Links",
      "footer.visit": "Besuchen",
      "footer.hours1": "Mo-Fr 09-19:00",
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
      "recipe.navigation": "Rezeptnavigation",
      "recipe.previous": "Voriges Rezept",
      "recipe.next": "Nächstes Rezept",
      "recipe.serves": "für",
      "recipe.atChoo": "bei Choo",
      "recipe.eyebrow": "Rezept - Choo Pantry",
      "recipe.time": "Zeit",
      "recipe.servesLabel": "Portionen",
      "recipe.tags": "Tags",
      "recipe.ingredients": "Zutaten",
      "recipe.method": "Zubereitung",
      "recipe.summary": "Rezeptübersicht",
      "recipe.showIngredients": "Zutaten anzeigen",
      "recipe.hideIngredients": "Zutaten ausblenden",
      "recipe.moreIngredients": "{count} weitere Zutaten",
      "recipe.nutrition": "Nährwerte",
      "recipe.per100g": "pro 100g",
      "recipe.perServing": "pro Portion",
      "nutrition.energy": "Energie",
      "nutrition.protein": "Eiweiß",
      "nutrition.carbs": "Kohlenhydrate",
      "nutrition.fat": "Fett",
      "timer.start": "Start",
      "timer.pause": "Pause",
      "timer.keepAwake": "Bildschirm anlassen",
      "timer.off": "Aus",
      "timer.on": "An",
      "timer.paused": "Pausiert",
      "timer.blocked": "Blockiert",
      "timer.unsupported": "Nicht unterstützt",
      "event.one": "Eintrag",
      "event.many": "Einträge",
      "event.today": "Heute",
      "event.tomorrow": "Morgen",
      "event.inDays": "In {days} Tagen",
      "event.yesterday": "Gestern",
      "event.daysAgo": "Vor {days} Tagen",
      "event.meaning": "Worum es geht",
      "event.shelf": "Bei Choo",
      "event.noMonth": "Keine Einträge im chinesischen Kalender für {month}.",
      "event.noUpcoming": "Keine kommenden Einträge im chinesischen Kalender."
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
      "nav.events": "日历",
      "nav.visit": "找到我们",
      "hero.eyebrow": "亚洲超市 · 维也纳 1060",
      "hero.title": "零食、酱料与日常食材。",
      "hero.text": "维也纳 1060 区 Linke Wienzeile 亚洲超市，紧邻纳什市场。来自亚洲各地的主食、方便面、零食、酱料和新鲜商品。",
      "hero.cta": "到店看看 ↗",
      "hero.address": "Linke Wienzeile 54 · 1060 维也纳",
      "categories.tablist": "商品分类",
      "categories.open": "打开{category}",
      "categories.close": "关闭分类",
      "categories.modalIntro": "这个货架常见的商品",
      "categories.itemCount": "{count} 个商品组",
      "categories.brandsLabel": "店内品牌",
      "categories.featuredAria": "热门选择",
      "categories.brandPreview": "{brands} 等 +{count}",
      "categories.editorialEyebrow": "01 - 逛逛货架",
      "categories.editorialTitle": "亚洲，按货架陈列。",
      "categories.editorialText": "11 个核心区域，清楚分类。点击图块查看内容。",
      "categories.editorialFeatured": "跨货架精选",
      "categories.carouselPrev": "上一组分类",
      "categories.carouselNext": "下一组分类",
      "story.eyebrow": "我们的市场",
      "story.sectionEyebrow": "02 - 我们的市场",
      "story.title": "亚洲风味，精心陈列。",
      "story.p1": "超过 3,000 种来自中国、日本、韩国、越南和东南亚的商品，从酱油到电饭煲，一目了然，干净好逛。",
      "story.p2": "我们亲自挑选商品，也乐意为你推荐合适的酱油、调味酱或礼物。",
      "story.cta": "了解更多",
      "aisle.eyebrow": "02 - 店内",
      "aisle.title": "点一下货架。<br /><em>货很足。</em>",
      "aisle.text": "三条过道、低矮天花和纸灯笼。我们约有 1,200 种商品，酱料、面和米类很齐全，也会持续更换地区零食。点按插图探索不同区域。",
      "aisle.unmute": "开启声音",
      "aisle.mute": "静音",
      "recipes.eyebrow": "03 - 来自厨房",
      "recipes.title": "来自货架的食谱。",
      "recipes.text": "工作日也能完成的菜，大部分食材都能在我们的货架上找到。",
      "recipes.filters": "食谱筛选",
      "filter.all": "全部",
      "filter.vegetarian": "素食",
      "filter.spicy": "辣",
      "filter.quick": "快速",
      "events.eyebrow": "04 - 中国日历",
      "events.title": "2026年传统节日。",
      "events.text": "先显示最近的日期，也可以按月份浏览。",
      "fresh.eyebrow": "店内新鲜",
      "fresh.title": "本周新鲜。",
      "fresh.text": "每日现蒸现烤，按固定节奏配送 — 安排你的到店时间。",
      "fresh.buns.title": "鲜蒸包子",
      "fresh.buns.text": "每天清晨现蒸出炉。",
      "fresh.buns.stamp": "每天",
      "fresh.mochi.title": "麻薯、吐司与糕点",
      "fresh.mochi.text": "每周两次新鲜烘焙 — 周一与周四。",
      "fresh.mochi.stamp": "周一·周四",
      "fresh.veg.title": "新鲜蔬菜",
      "fresh.veg.text": "周一和周四直送到店。",
      "fresh.veg.stamp": "周一·周四",
      "student.eyebrow": "学生专属",
      "student.title": "学生折扣",
      "student.stamp": "优惠",
      "student.sub": "仅限到店使用 — 结账时出示您的学生证即可享受优惠",
      "student.step1.title": "出示学生证",
      "student.step1.text": "在店内收银台",
      "student.step2.title": "获得 5% 折扣",
      "student.step2.text": "结账直接减免",
      "student.step3.title": "购物并享受优惠",
      "student.step3.text": "立即节省",
      "visit.eyebrow": "05 - 找到我们",
      "visit.title": "Linke Wienzeile 54<br /><em>1060 维也纳。</em>",
      "visit.contact": "<strong>地址：</strong>Linke Wienzeile 54, 1060 维也纳<br /><strong>电话：</strong><a href=\"tel:019605678\">01 9605678</a>",
      "delivery.fab": "外送下单",
      "delivery.fabToggle": "通过 Wolt 或 foodora 下单",
      "delivery.wolt": "在 Wolt 下单",
      "delivery.foodora": "在 foodora 下单",
      "hours.weekdays": "周一至周五",
      "hours.saturday": "周六",
      "hours.sunday": "周日",
      "hours.closed": "休息",
      "payments.title": "付款方式",
      "payments.note": "店内支持银行卡、手机钱包和部分餐券卡付款。",
      "footer.links": "链接",
      "footer.visit": "到店",
      "footer.hours1": "周一至周五 09-19:00",
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
      "recipe.navigation": "食谱导航",
      "recipe.previous": "上一道食谱",
      "recipe.next": "下一道食谱",
      "recipe.serves": "份量",
      "recipe.atChoo": "在 Choo",
      "recipe.eyebrow": "食谱 - Choo 食材",
      "recipe.time": "时间",
      "recipe.servesLabel": "份量",
      "recipe.tags": "标签",
      "recipe.ingredients": "食材",
      "recipe.method": "做法",
      "recipe.summary": "食谱概要",
      "recipe.showIngredients": "显示食材",
      "recipe.hideIngredients": "隐藏食材",
      "recipe.moreIngredients": "还有 {count} 种食材",
      "recipe.nutrition": "营养",
      "recipe.per100g": "每100克",
      "recipe.perServing": "每份",
      "nutrition.energy": "能量",
      "nutrition.protein": "蛋白质",
      "nutrition.carbs": "碳水化合物",
      "nutrition.fat": "脂肪",
      "timer.start": "开始",
      "timer.pause": "暂停",
      "timer.keepAwake": "保持屏幕常亮",
      "timer.off": "关闭",
      "timer.on": "开启",
      "timer.paused": "已暂停",
      "timer.blocked": "被阻止",
      "timer.unsupported": "不支持",
      "event.one": "个节日",
      "event.many": "个节日",
      "event.today": "今天",
      "event.tomorrow": "明天",
      "event.inDays": "{days} 天后",
      "event.yesterday": "昨天",
      "event.daysAgo": "{days} 天前",
      "event.meaning": "节日意义",
      "event.shelf": "Choo 可买到",
      "event.noMonth": "{month}暂无中国日历条目。",
      "event.noUpcoming": "暂无即将到来的中国日历条目。"
    }
  };

  const interpolate = (value, params = {}) => String(value).replace(/\{(\w+)\}/g, (_match, key) => params[key] ?? "");
  const getStoredLang = () => {
    const stored = window.localStorage?.getItem("choo-language");
    return LANGS.includes(stored) ? stored : "de";
  };
  let currentLang = getStoredLang();

  function t(key, params) {
    return interpolate(STRINGS[currentLang]?.[key] ?? STRINGS.en[key] ?? key, params);
  }

  function applyLanguage(lang = currentLang) {
    currentLang = LANGS.includes(lang) ? lang : "de";
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
    document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
      node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
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
    src: "images/HERO_BG.png",
    mobileSrc: "images/HERO_BG-Mobile.png",
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

      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
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
    const closesAt = isWeekday ? "19:00" : isSaturday ? "18:00" : "";
    const opensToday = isWeekday || isSaturday;
    const isOpen = opensToday && currentHour >= 9 && currentHour < (isWeekday ? 19 : 18);

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
  setupDeliveryFab();
  setupAisleVideo();
  applyHeroImage();
  updateScrollEffects();
  updateOpeningStatus();

  function setupAisleVideo() {
    const video = document.querySelector("[data-aisle-video]");
    const button = document.querySelector("[data-aisle-video-mute]");
    if (!video || !button) return;

    video.muted = true;
    video.defaultMuted = true;

    let sourceLoaded = false;

    function ensureSource() {
      if (sourceLoaded) return;
      const src = video.dataset.src;
      if (!src) return;
      video.src = src;
      video.load?.();
      sourceLoaded = true;
    }

    function tryPlay() {
      ensureSource();
      const promise = video.play?.();
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {
          video.muted = true;
          video.play?.().catch(() => {});
        });
      }
    }

    video.addEventListener("loadeddata", () => {
      const p = video.play?.();
      p && typeof p.catch === "function" && p.catch(() => {});
    }, { once: true });

    // Lazy-load video when the section enters the viewport
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            tryPlay();
            io.disconnect();
            break;
          }
        }
      }, { rootMargin: "200px 0px" });
      io.observe(video);
    } else {
      tryPlay();
    }

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && sourceLoaded && video.paused) tryPlay();
    });

    function setMuted(muted) {
      video.muted = muted;
      button.setAttribute("aria-pressed", muted ? "false" : "true");
      if (video.paused) tryPlay();
    }

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      setMuted(!video.muted);
    });
    video.addEventListener("click", () => {
      setMuted(!video.muted);
    });
  }

  function setupDeliveryFab() {
    const root = document.querySelector("[data-delivery-fab]");
    if (!root) return;
    const toggle = root.querySelector("[data-delivery-fab-toggle]");
    const menu = root.querySelector("[data-delivery-fab-menu]");
    if (!toggle || !menu) return;

    function close() {
      menu.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    }
    function open() {
      menu.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
    }

    toggle.addEventListener("click", () => {
      menu.hidden ? open() : close();
    });
    document.addEventListener("click", (event) => {
      if (menu.hidden) return;
      if (root.contains(event.target)) return;
      close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !menu.hidden) {
        close();
        toggle.focus();
      }
    });
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => close());
    });
  }
})();

/* ===== Recipes — from test34 ===== */
(() => {
  let recipes = [
    {
      id: "mapo",
      name: "Mapo Tofu",
      tags: ["spicy"],
      time: "25 min",
      serves: 2,
      blurb: "Sichuan classic - silken tofu in a numbing chili-bean sauce.",
      ingredients: [
        { name: "400g silken tofu", inStore: true, aisle: "Fresh / fridge" },
        { name: "Doubanjiang (broad-bean paste)", inStore: true, aisle: "Sauces" },
        { name: "1 tsp Sichuan peppercorns", inStore: true, aisle: "Spices" },
        { name: "150g ground pork", inStore: false },
        { name: "2 scallions", inStore: true, aisle: "Fresh / fridge" },
        { name: "Garlic + ginger", inStore: true, aisle: "Fresh / fridge" },
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
        { name: "200g wheat noodles", inStore: true, aisle: "Noodles" },
        { name: "2 tbsp Chinese sesame paste", inStore: true, aisle: "Sauces" },
        { name: "2 tbsp chili crisp / chili oil", inStore: true, aisle: "Sauces" },
        { name: "1 tbsp Chinkiang black vinegar", inStore: true, aisle: "Sauces" },
        { name: "1 tbsp light soy sauce", inStore: true, aisle: "Sauces" },
        { name: "Sui mi ya cai (preserved mustard)", inStore: true, aisle: "Pantry" },
        { name: "100g ground pork", inStore: false },
        { name: "Scallions", inStore: true, aisle: "Fresh / fridge" },
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
        { name: "4 heads baby bok choy", inStore: true, aisle: "Fresh / fridge" },
        { name: "6 dried shiitake", inStore: true, aisle: "Pantry" },
        { name: "Vegetarian oyster (mushroom) sauce", inStore: true, aisle: "Sauces" },
        { name: "1 tbsp Shaoxing wine", inStore: true, aisle: "Pantry" },
        { name: "4 cloves garlic", inStore: true, aisle: "Fresh / fridge" },
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
        { name: "400g day-old jasmine rice", inStore: true, aisle: "Pantry" },
        { name: "3 eggs", inStore: true, aisle: "Fresh / fridge" },
        { name: "4 scallions", inStore: true, aisle: "Fresh / fridge" },
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
    {
      id: "crispy-chili-beef",
      name: "Crispy Chili Beef Fillet",
      tags: ["spicy"],
      time: "30 min",
      serves: 2,
      blurb: "Thin beef strips fried crisp, tossed in a tangy chili-soy glaze.",
      ingredients: [
        { name: "400g beef fillet", inStore: false },
        { name: "2 1/2 tbsp corn starch", inStore: true, aisle: "Pantry" },
        { name: "2 tbsp cooking oil", inStore: false },
        { name: "1 tsp sesame seeds", inStore: true, aisle: "Pantry" },
        { name: "Marinade: 1 tbsp Lee Kum Kee Premium Oyster Sauce", inStore: true, aisle: "Sauces" },
        { name: "Sauce: 2 tbsp Lee Kum Kee Premium Soy Sauce", inStore: true, aisle: "Sauces" },
        { name: "Sauce: 2 tbsp Lee Kum Kee Seasoned Rice Vinegar", inStore: true, aisle: "Sauces" },
        { name: "Sauce: 1 tbsp Lee Kum Kee Chiu Chow Chili Oil", inStore: true, aisle: "Sauces" },
        { name: "Sauce: 5 tbsp water", inStore: false },
        { name: "Sauce: 1/2 tbsp sugar", inStore: false },
        { name: "Sauce: 1/2 tbsp cooking wine", inStore: true, aisle: "Pantry" },
        { name: "Sauce: 1 tbsp corn starch", inStore: true, aisle: "Pantry" },
      ],
      steps: [
        "Cut the beef into thin strips and marinate with oyster sauce for 15-20 minutes.",
        "Coat the beef strips in corn starch.",
        "Heat oil in a pan over medium heat and fry the beef until browned. Remove and set aside.",
        "Add the sauce mixture to the pan and cook for about 5 minutes until slightly thickened.",
        "Return the beef to the pan and toss until evenly coated.",
        "Sprinkle with sesame seeds before serving.",
      ],
    },
    {
      id: "golden-wonton-pockets",
      name: "Golden Wonton Pockets / Gyoza",
      tags: ["quick"],
      time: "10 min",
      serves: 2,
      blurb: "Crisp wonton pockets or gyoza served with bright Lee Kum Kee chili sauces.",
      ingredients: [
        { name: "Fried wonton pockets or gyoza", inStore: true, aisle: "Freezer" },
        { name: "Seaweed salad for garnish", inStore: true, aisle: "Fresh / fridge" },
        { name: "Lee Kum Kee Chili Sauce with Yuzu Aroma", inStore: true, aisle: "Sauces" },
        { name: "Lee Kum Kee Sweet Chili Sauce", inStore: true, aisle: "Sauces" },
        { name: "Lee Kum Kee Chili Sauce with Kaffir Lime Leaf Aroma", inStore: true, aisle: "Sauces" },
      ],
      steps: [
        "Fry the wontons or gyoza until golden brown.",
        "Arrange three pieces on each plate.",
        "Place the seaweed salad in the center as garnish.",
        "Serve with the sauces.",
      ],
    },
    {
      id: "spicy-eggplant-salad",
      name: "Spicy Eggplant Salad",
      tags: ["spicy", "vegetarian"],
      time: "45 min",
      serves: 2,
      blurb: "Steamed eggplant with garlic, spring onion, sesame and a spicy Ma-La sauce.",
      ingredients: [
        { name: "2 eggplants, trimmed and cut into 5 cm strips", inStore: true, aisle: "Fresh / fridge" },
        { name: "1 tbsp sesame seeds", inStore: true, aisle: "Pantry" },
        { name: "2 tbsp oil", inStore: false },
        { name: "3 garlic cloves, crushed", inStore: true, aisle: "Fresh / fridge" },
        { name: "1 spring onion, finely chopped", inStore: true, aisle: "Fresh / fridge" },
        { name: "Sauce: 2 tbsp Lee Kum Kee soy sauce with shallot aroma", inStore: true, aisle: "Sauces" },
        { name: "Sauce: Lee Kum Kee Red Ma-La Chili Sauce", inStore: true, aisle: "Sauces" },
      ],
      steps: [
        "Soak the eggplant in water and vinegar for 30 minutes to keep its purple color. Drain and set aside.",
        "Bring water to a boil, place eggplant in a steamer basket and steam for 10 minutes.",
        "Put garlic, spring onion and sesame seeds in a bowl. Heat about 2 tbsp oil and pour it over the mixture.",
        "Stir in the remaining sauce ingredients.",
        "Arrange the cooled eggplant on a plate, pour the sauce over it and serve.",
      ],
    },
    {
      id: "garlic-prawns-glass-noodles",
      name: "Garlic Prawns with Glass Noodles",
      tags: ["quick"],
      time: "20 min",
      serves: 2,
      blurb: "Tiger prawns steamed over glass noodles with a glossy garlic soy-oyster sauce.",
      ingredients: [
        { name: "12-15 tiger prawns with shell", inStore: false },
        { name: "1 nest vermicelli glass noodles", inStore: true, aisle: "Noodles" },
        { name: "2 tbsp vegetable oil", inStore: false },
        { name: "2 garlic cloves, finely chopped", inStore: true, aisle: "Fresh / fridge" },
        { name: "1 spring onion, finely chopped", inStore: true, aisle: "Fresh / fridge" },
        { name: "Sauce: 1/2 tbsp Lee Kum Kee Premium Oyster Sauce", inStore: true, aisle: "Sauces" },
        { name: "Sauce: 1/2 tbsp Lee Kum Kee Premium Light Soy Sauce", inStore: true, aisle: "Sauces" },
        { name: "Sauce: 1 tsp Lee Kum Kee Pure Sesame Oil", inStore: true, aisle: "Sauces" },
      ],
      steps: [
        "Soak the glass noodles in warm water until soft. Drain and place on a plate.",
        "Rinse the prawns and pat dry. Peel them, leaving the tail section on.",
        "Gently fry the garlic in sesame oil until lightly golden. Add oyster sauce and light soy sauce.",
        "Place the prawns on the glass noodles and pour the garlic sauce over them.",
        "Steam over boiling water for 5-7 minutes.",
        "Sprinkle with spring onion. Heat oil and pour it over the prawns before serving.",
      ],
    },
    {
      id: "honey-lime-soy-chicken",
      name: "Honey-Lime Soy Chicken",
      tags: [],
      time: "45 min + marinating",
      serves: 3,
      blurb: "Chicken thigh fillets baked with honey, lime, garlic and light soy sauce.",
      ingredients: [
        { name: "500g chicken thigh fillets", inStore: false },
        { name: "1 handful coriander or spring onions, chopped", inStore: true, aisle: "Fresh / fridge" },
        { name: "Marinade: 2 tbsp Lee Kum Kee Premium Light Soy Sauce", inStore: true, aisle: "Sauces" },
        { name: "Marinade: 2 tbsp honey", inStore: false },
        { name: "Marinade: 2 tbsp fresh lime juice", inStore: false },
        { name: "Marinade: 2 garlic cloves, crushed", inStore: true, aisle: "Fresh / fridge" },
        { name: "Marinade: 1/2 tsp ground black pepper", inStore: true, aisle: "Spices" },
      ],
      steps: [
        "Marinate the chicken for at least 2 hours.",
        "Preheat oven to 180 degrees C.",
        "Place the chicken on a baking tray and reserve the marinade.",
        "Bake for 25 minutes. Halfway through, brush the chicken with the reserved marinade.",
        "Garnish with coriander or spring onions and serve.",
      ],
    },
    {
      id: "lucky-cabbage-parcels",
      name: "Lucky Cabbage Parcels",
      tags: [],
      time: "35 min",
      serves: 3,
      blurb: "Soft Chinese cabbage leaves wrapped around pork, carrot and water chestnut filling.",
      ingredients: [
        { name: "300g minced pork", inStore: false },
        { name: "Chinese cabbage leaves", inStore: true, aisle: "Fresh / fridge" },
        { name: "40g water chestnuts, finely diced", inStore: true, aisle: "Pantry" },
        { name: "1 carrot, finely diced", inStore: true, aisle: "Fresh / fridge" },
        { name: "Marinade: 1 tbsp Lee Kum Kee Premium Oyster Sauce", inStore: true, aisle: "Sauces" },
        { name: "Marinade: 1 tbsp Lee Kum Kee Premium Light Soy Sauce", inStore: true, aisle: "Sauces" },
        { name: "Marinade: 1 tbsp Lee Kum Kee Pure Sesame Oil", inStore: true, aisle: "Sauces" },
        { name: "Marinade: 1 tsp sugar", inStore: false },
        { name: "Marinade: 1 tsp corn starch", inStore: true, aisle: "Pantry" },
        { name: "Marinade: 1 tsp water", inStore: false },
        { name: "Marinade: 1 tsp ground white pepper", inStore: true, aisle: "Spices" },
        { name: "Sauce: 2 tbsp Lee Kum Kee Premium Oyster Sauce", inStore: true, aisle: "Sauces" },
        { name: "Sauce: 1 tsp Lee Kum Kee Pure Sesame Oil", inStore: true, aisle: "Sauces" },
        { name: "Sauce: 2 tbsp water", inStore: false },
        { name: "Sauce: 1 tsp corn starch", inStore: true, aisle: "Pantry" },
      ],
      steps: [
        "Boil the Chinese cabbage leaves in hot water until soft. Drain and set aside.",
        "Mix minced pork, diced carrot, water chestnuts and all marinade ingredients thoroughly.",
        "Fill the soft cabbage leaves with the pork mixture.",
        "Steam over high heat for 10 minutes until fully cooked.",
        "Cook the sauce mixture over low heat until thickened.",
        "Pour the sauce over the parcels and serve.",
      ],
    },
    {
      id: "steamed-fish-slices",
      name: "Steamed Fish Slices",
      tags: ["quick"],
      time: "30 min",
      serves: 2,
      blurb: "Sea bass slices steamed over tofu with black bean garlic oyster sauce.",
      ingredients: [
        { name: "250g sea bass fillet", inStore: false },
        { name: "10 soft tofu cubes", inStore: true, aisle: "Fresh / fridge" },
        { name: "1/2 pinch salt", inStore: false },
        { name: "1 tsp Lee Kum Kee Premium Mushroom Seasoning Powder", inStore: true, aisle: "Pantry" },
        { name: "1 pinch ground white pepper", inStore: true, aisle: "Spices" },
        { name: "1 tsp water", inStore: false },
        { name: "1 bunch pak choi, thinly sliced", inStore: true, aisle: "Fresh / fridge" },
        { name: "2 spring onions, finely chopped", inStore: true, aisle: "Fresh / fridge" },
        { name: "Sauce: 1 tbsp Lee Kum Kee Black Bean Garlic Sauce", inStore: true, aisle: "Sauces" },
        { name: "Sauce: 1 tbsp Lee Kum Kee Premium Oyster Sauce", inStore: true, aisle: "Sauces" },
        { name: "Sauce: 1 tsp sugar", inStore: false },
        { name: "Sauce: 1 tsp corn starch", inStore: true, aisle: "Pantry" },
        { name: "Sauce: 1 tbsp water", inStore: false },
      ],
      steps: [
        "Cut the sea bass fillet into 5 thin slices. Marinate for 15 minutes with mushroom seasoning powder, white pepper and water.",
        "Cut the soft tofu into 10 cubes.",
        "Spread the tofu cubes on a serving plate and place the marinated fish slices on top.",
        "Steam over high heat for 8 minutes.",
        "Meanwhile, mix all sauce ingredients in a small pot and cook over low heat until slightly thickened.",
        "When the fish is cooked, pour the sauce over the fish and tofu.",
        "Garnish with chili and spring onions and serve immediately.",
      ],
    },
    {
      id: "harvest-vegetable-pan",
      name: "Harvest Vegetable Pan",
      tags: ["vegetarian", "quick"],
      time: "15 min",
      serves: 2,
      blurb: "Sweet corn, carrot, peas and pine nuts with mushroom seasoning and sesame oil.",
      ingredients: [
        { name: "1 small can sweet corn, drained", inStore: true, aisle: "Pantry" },
        { name: "Carrots, diced", inStore: true, aisle: "Fresh / fridge" },
        { name: "Frozen peas", inStore: true, aisle: "Freezer" },
        { name: "Pine nuts", inStore: true, aisle: "Pantry" },
        { name: "1 tsp cooking oil", inStore: false },
        { name: "Seasoning: 1 tbsp Lee Kum Kee Premium Mushroom Seasoning Powder", inStore: true, aisle: "Pantry" },
        { name: "Seasoning: 1 tsp Lee Kum Kee Pure Sesame Oil", inStore: true, aisle: "Sauces" },
        { name: "Salt, optional", inStore: false },
      ],
      steps: [
        "Toast the pine nuts in a dry pan over low heat until golden and fragrant. Remove and set aside.",
        "Heat 1 tsp oil in the same pan. Add diced carrots and fry for 2-3 minutes until slightly soft.",
        "Add peas and corn. Stir-fry for another 2-3 minutes.",
        "Add 2-3 tbsp water, cover the pan and steam briefly until the carrots are soft.",
        "Stir in the mushroom seasoning powder and season with salt if needed.",
        "Drizzle with sesame oil and mix well.",
        "Add the toasted pine nuts before serving.",
      ],
    },
    {
      id: "tofu-salad",
      name: "Tofu Salad",
      tags: ["vegetarian", "quick"],
      time: "10 min",
      serves: 2,
      blurb: "Firm tofu, cucumber, lettuce and tomatoes with roasted sesame dressing.",
      ingredients: [
        { name: "200g firm tofu, drained and diced", inStore: true, aisle: "Fresh / fridge" },
        { name: "1 cucumber, sliced", inStore: true, aisle: "Fresh / fridge" },
        { name: "4-6 lettuce leaves, torn into bite-sized pieces", inStore: true, aisle: "Fresh / fridge" },
        { name: "200g cherry tomatoes, halved", inStore: true, aisle: "Fresh / fridge" },
        { name: "Dressing: 3 tbsp Lee Kum Kee Roasted Sesame Dressing", inStore: true, aisle: "Sauces" },
      ],
      steps: [
        "Prepare the tofu according to the package instructions.",
        "Mix all ingredients and the dressing in a large salad bowl.",
        "Toss well and serve.",
      ],
    },
    {
      id: "vietnamese-prawn-mango-rolls",
      name: "Vietnamese Prawn-Mango Summer Rolls",
      tags: ["quick"],
      time: "25 min",
      serves: 4,
      blurb: "Fresh rice paper rolls with prawns, mango, cucumber, lettuce and mint.",
      ingredients: [
        { name: "8 pieces Vietnamese rice paper", inStore: true, aisle: "Pantry" },
        { name: "16 cooked king prawns", inStore: false },
        { name: "100g ripe mango, sliced", inStore: true, aisle: "Fresh / fridge" },
        { name: "80g cucumber, julienned", inStore: true, aisle: "Fresh / fridge" },
        { name: "80g mild lettuce", inStore: true, aisle: "Fresh / fridge" },
        { name: "16 mint leaves", inStore: false },
        { name: "1 red chili, julienned, optional", inStore: true, aisle: "Fresh / fridge" },
        { name: "Dip: 2 tbsp Lee Kum Kee Seasoned Rice Vinegar", inStore: true, aisle: "Sauces" },
        { name: "Dip: 1 tbsp Lee Kum Kee Premium Soy Sauce", inStore: true, aisle: "Sauces" },
        { name: "Dip: 1 tsp Lee Kum Kee Pure Sesame Oil", inStore: true, aisle: "Sauces" },
        { name: "Dip: 1 tsp honey", inStore: false },
      ],
      steps: [
        "Prepare a shallow bowl with water and a clean kitchen towel.",
        "Soak one rice paper sheet at a time in cold water for 20-30 seconds until soft. Place it on the towel to drain.",
        "Place the filling ingredients at one end of the rice paper. Roll tightly, fold in the sides and finish rolling.",
        "Cut the summer rolls in half and serve with the dip sauce.",
      ],
    },
    {
      id: "poke-bowl",
      name: "Poke Bowl",
      tags: ["quick", "spicy"],
      time: "20 min",
      serves: 2,
      blurb: "Rice, salmon, vegetables, kimchi and a chili-garlic oyster sauce.",
      ingredients: [
        { name: "250g cooked rice", inStore: true, aisle: "Rice" },
        { name: "200g raw salmon, sashimi quality, diced", inStore: false },
        { name: "2 tbsp edamame, blanched", inStore: true, aisle: "Freezer" },
        { name: "1 small cucumber, cut into sticks", inStore: true, aisle: "Fresh / fridge" },
        { name: "1/2 carrot, grated", inStore: true, aisle: "Fresh / fridge" },
        { name: "1/2 avocado, diced", inStore: true, aisle: "Fresh / fridge" },
        { name: "2 tbsp kimchi, optional", inStore: true, aisle: "Fresh / fridge" },
        { name: "Sauce: 1 spring onion, finely sliced", inStore: true, aisle: "Fresh / fridge" },
        { name: "Sauce: 1 tbsp Lee Kum Kee Premium Oyster Sauce", inStore: true, aisle: "Sauces" },
        { name: "Sauce: 1 tbsp Lee Kum Kee Chilli Garlic Sauce", inStore: true, aisle: "Sauces" },
        { name: "Sauce: 1 tsp Lee Kum Kee Dumpling Sauce", inStore: true, aisle: "Sauces" },
        { name: "Sauce: 1 tsp honey", inStore: false },
        { name: "Garnish: 1 tsp toasted sesame seeds", inStore: true, aisle: "Pantry" },
        { name: "Garnish: 2 pieces toasted nori", inStore: true, aisle: "Pantry" },
      ],
      steps: [
        "Cook the rice according to the package instructions.",
        "Mix the sauce ingredients in a bowl and add the salmon cubes.",
        "Put the rice in a large bowl. Arrange the vegetables around the rice, leaving space in the middle.",
        "Place the salmon in the center.",
        "Sprinkle with sesame seeds and place the nori on the side. Serve.",
      ],
    },
    {
      id: "noodle-salad-chicken",
      name: "Noodle Salad with Chicken",
      tags: ["quick"],
      time: "15 min",
      serves: 2,
      blurb: "Egg noodles topped with chicken, vegetables and Lee Kum Kee peanut sauce.",
      ingredients: [
        { name: "300g cooked egg noodles", inStore: true, aisle: "Noodles" },
        { name: "1 medium carrot, julienned", inStore: true, aisle: "Fresh / fridge" },
        { name: "100g bean sprouts, blanched", inStore: true, aisle: "Fresh / fridge" },
        { name: "1 cucumber, sliced", inStore: true, aisle: "Fresh / fridge" },
        { name: "400g cooked chicken, shredded", inStore: false },
        { name: "4 tbsp Lee Kum Kee Peanut Sauce", inStore: true, aisle: "Sauces" },
      ],
      steps: [
        "Divide the noodles between two bowls.",
        "Arrange the remaining ingredients on top of the noodles.",
        "Toss with peanut sauce.",
        "Serve and enjoy.",
      ],
    },
    {
      id: "wasabi-prawns-asparagus",
      name: "Fried Wasabi King Prawns with Green Asparagus",
      tags: ["quick"],
      time: "15 min",
      serves: 2,
      blurb: "King prawns and asparagus finished with sesame dressing with wasabi aroma.",
      ingredients: [
        { name: "180g raw peeled king prawns", inStore: false },
        { name: "110g thin green asparagus, cut into 4 cm pieces", inStore: true, aisle: "Fresh / fridge" },
        { name: "1 tbsp light olive oil", inStore: false },
        { name: "1 tbsp Lee Kum Kee Sesame Dressing with Wasabi Aroma", inStore: true, aisle: "Sauces" },
        { name: "Garnish: lime wedges", inStore: false },
      ],
      steps: [
        "Devein the prawns and optionally butterfly them. Blanch the asparagus and drain.",
        "Blanch asparagus pieces for about 2 minutes in simmering water, then drain.",
        "Heat oil in a pan. Add prawns and cook until pink.",
        "Add asparagus and toss everything together.",
        "Remove from heat and mix with the sesame-wasabi dressing.",
        "Garnish with lime wedges and serve.",
      ],
    },
    {
      id: "cold-mixed-vegetables",
      name: "Cold Mixed Vegetables",
      tags: ["vegetarian", "quick"],
      time: "15 min",
      serves: 2,
      blurb: "Lotus root, onion, pepper and carrot in a light mushroom-soy dressing.",
      ingredients: [
        { name: "200g lotus root, thinly sliced", inStore: true, aisle: "Fresh / fridge" },
        { name: "20g red onion, thinly sliced", inStore: true, aisle: "Fresh / fridge" },
        { name: "20g yellow or red bell pepper, sliced", inStore: true, aisle: "Fresh / fridge" },
        { name: "20g carrot, julienned", inStore: true, aisle: "Fresh / fridge" },
        { name: "Sauce: 1 tbsp Lee Kum Kee Premium Mushroom Seasoning Powder", inStore: true, aisle: "Pantry" },
        { name: "Sauce: 2 tsp Lee Kum Kee Premium Light Soy Sauce", inStore: true, aisle: "Sauces" },
        { name: "Sauce: 1 tsp lemon juice", inStore: false },
      ],
      steps: [
        "Bring water to a boil and blanch the lotus root until almost cooked.",
        "Cool in cold water and drain.",
        "Mix the sauce with onion, bell pepper, carrot and lotus root.",
        "Serve cold.",
      ],
    },
    {
      id: "tom-yum-chicken-spaghetti",
      name: "Chicken Basil Spaghetti with Tom Yum Sauce",
      tags: ["spicy"],
      time: "25 min",
      serves: 3,
      blurb: "Spaghetti with chicken, basil and a coconut Tom Yum sauce.",
      ingredients: [
        { name: "350g chicken breast, cut into small pieces", inStore: false },
        { name: "400g spaghetti", inStore: false },
        { name: "1 onion, grated", inStore: true, aisle: "Fresh / fridge" },
        { name: "15 fresh basil leaves, torn", inStore: false },
        { name: "1 pinch ground black pepper", inStore: true, aisle: "Spices" },
        { name: "1 tbsp oil", inStore: false },
        { name: "Marinade: 1 tbsp Lee Kum Kee Tom Yum Bouillon", inStore: true, aisle: "Pantry" },
        { name: "Sauce: 2 tbsp Lee Kum Kee Tom Yum Bouillon", inStore: true, aisle: "Pantry" },
        { name: "Sauce: 2 tbsp coconut milk or water", inStore: true, aisle: "Pantry" },
        { name: "Sauce: 4 tbsp spaghetti cooking water", inStore: false },
      ],
      steps: [
        "Marinate the chicken for 10 minutes.",
        "Cook the spaghetti 1 minute less than the package instructions. Drain and set aside.",
        "Heat oil in a pan over medium heat. Saute the onion, then add chicken and stir-fry for about 3 minutes until almost cooked.",
        "Add sauce mixture and spaghetti. Toss well.",
        "Sprinkle with basil and black pepper and serve.",
      ],
    },
    {
      id: "mushroom-asparagus-risotto",
      name: "Mushroom and Asparagus Risotto",
      tags: ["vegetarian"],
      time: "35 min",
      serves: 3,
      blurb: "Creamy risotto with mushrooms, asparagus and umami mushroom bouillon.",
      ingredients: [
        { name: "300g risotto rice", inStore: false },
        { name: "200g mushrooms, sliced", inStore: true, aisle: "Fresh / fridge" },
        { name: "120g asparagus, peeled and halved", inStore: true, aisle: "Fresh / fridge" },
        { name: "1 onion, chopped", inStore: true, aisle: "Fresh / fridge" },
        { name: "50g vegan parmesan, grated", inStore: false },
        { name: "1 tbsp mixed herbs", inStore: true, aisle: "Spices" },
        { name: "2 tbsp olive oil", inStore: false },
        { name: "1 pinch freshly ground black pepper", inStore: true, aisle: "Spices" },
        { name: "Broth: 1 packet Lee Kum Kee Umami Mushroom Bouillon", inStore: true, aisle: "Pantry" },
        { name: "Broth: 1.2 liters hot water", inStore: false },
      ],
      steps: [
        "Mix the bouillon with hot water and keep warm.",
        "Blanch asparagus, cool in cold water, drain and set aside.",
        "Heat oil in a pan over medium heat. Saute onion, mushrooms and rice.",
        "Gradually add the broth. Each time the rice absorbs the liquid, add more broth and stir.",
        "Continue until the rice is al dente.",
        "Add asparagus and parmesan. Stir well.",
        "Serve with black pepper.",
      ],
    },
    {
      id: "seafood-rice-soup",
      name: "Rice Soup with Assorted Seafood",
      tags: ["quick"],
      time: "25 min",
      serves: 2,
      blurb: "Comforting rice soup with mixed seafood and Lee Kum Kee seafood bouillon.",
      ingredients: [
        { name: "250g mixed seafood, for example prawns, clams, squid or scallops", inStore: false },
        { name: "2 bowls cooked rice", inStore: true, aisle: "Rice" },
        { name: "1 packet Lee Kum Kee Seafood Bouillon", inStore: true, aisle: "Pantry" },
        { name: "1 liter hot water", inStore: false },
        { name: "Chopped spring onion and coriander, optional", inStore: true, aisle: "Fresh / fridge" },
        { name: "Optional dip: 2 tbsp Lee Kum Kee Premium Soy Sauce", inStore: true, aisle: "Sauces" },
        { name: "Optional dip: 1 tsp Lee Kum Kee Seasoned Rice Vinegar", inStore: true, aisle: "Sauces" },
        { name: "Optional dip: 1 tsp Lee Kum Kee Chiu Chow Chili Oil", inStore: true, aisle: "Sauces" },
      ],
      steps: [
        "Add the bouillon to the hot water, mix well and bring to a boil.",
        "Add cooked rice and cook for at least 15 minutes until the rice has swollen.",
        "Add the seafood and cook until done.",
        "Add spring onion and coriander.",
        "Serve with the optional dip sauce if desired.",
      ],
    },
    {
      id: "spicy-fish-soup",
      name: "Spicy Fish Soup with Fish Fillet",
      tags: ["spicy"],
      time: "25 min",
      serves: 3,
      blurb: "Sichuan-style fish fillet soup with tomatoes, enoki and spicy bouillon.",
      ingredients: [
        { name: "400g sea bass or cod fillet", inStore: false },
        { name: "100g enoki mushrooms", inStore: true, aisle: "Fresh / fridge" },
        { name: "3 tomatoes", inStore: true, aisle: "Fresh / fridge" },
        { name: "Coriander for garnish, optional", inStore: true, aisle: "Fresh / fridge" },
        { name: "Marinade: 1 egg", inStore: true, aisle: "Fresh / fridge" },
        { name: "Marinade: 2 tbsp corn starch", inStore: true, aisle: "Pantry" },
        { name: "Marinade: 1 tsp salt", inStore: false },
        { name: "Marinade: 1 tsp cooking wine", inStore: true, aisle: "Pantry" },
        { name: "Marinade: 1/2 tsp ground white pepper", inStore: true, aisle: "Spices" },
        { name: "Bouillon: 1 packet Lee Kum Kee Spicy Bouillon Sichuan Style", inStore: true, aisle: "Pantry" },
        { name: "Bouillon: 1 tbsp Lee Kum Kee Premium Oyster Sauce", inStore: true, aisle: "Sauces" },
        { name: "Bouillon: 1 tsp sugar", inStore: false },
        { name: "Bouillon: 1.2 liters hot water", inStore: false },
      ],
      steps: [
        "Clean the fish fillets, pat dry and cut into thick slices. Marinate for 15 minutes.",
        "Bring the bouillon mixture to a boil. Add enoki mushrooms and tomatoes and cook for 2 minutes.",
        "Add the marinated fish and cook for about 3 minutes or until done.",
        "Serve immediately.",
      ],
    },
    {
      id: "satay-rice-noodle-soup",
      name: "Satay Soup with Rice Noodles, Chicken and Vegetables",
      tags: [],
      time: "25 min",
      serves: 3,
      blurb: "Rice noodles in satay bouillon with chicken, carrot, onion and baby corn.",
      ingredients: [
        { name: "400g cooked rice noodles or 200g raw rice noodles", inStore: true, aisle: "Noodles" },
        { name: "200g chicken breast, cut into pieces", inStore: false },
        { name: "60g carrot, grated", inStore: true, aisle: "Fresh / fridge" },
        { name: "40g onion, grated", inStore: true, aisle: "Fresh / fridge" },
        { name: "60g baby corn, halved", inStore: true, aisle: "Pantry" },
        { name: "1 tbsp oil", inStore: false },
        { name: "Marinade: 1 tbsp Lee Kum Kee Premium Oyster Sauce", inStore: true, aisle: "Sauces" },
        { name: "Bouillon: 1 packet Lee Kum Kee Satay Bouillon", inStore: true, aisle: "Pantry" },
        { name: "Bouillon: 1.2 liters hot water", inStore: false },
      ],
      steps: [
        "Marinate the chicken for 10 minutes.",
        "Heat oil in a pan over medium heat and fry the chicken until cooked.",
        "Add the vegetables and stir-fry for 2 minutes.",
        "Bring 1.2 liters water and the bouillon to a boil. Add rice noodles and cook for 2 minutes or according to the package instructions.",
        "Divide the noodles into bowls, add chicken and vegetables, pour the boiling soup over them and serve.",
      ],
    },
    {
      id: "spicy-oyster-dip",
      name: "Spicy Oyster Dip Sauce",
      tags: ["quick", "spicy"],
      time: "2 min",
      serves: 2,
      blurb: "A two-ingredient hot pot dip with oyster sauce and Chiu Chow chili oil.",
      ingredients: [
        { name: "1 tbsp Lee Kum Kee Premium Oyster Sauce", inStore: true, aisle: "Sauces" },
        { name: "1 tbsp Lee Kum Kee Chiu Chow Chili Oil", inStore: true, aisle: "Sauces" },
      ],
      steps: ["Mix everything together."],
    },
    {
      id: "spicy-sweet-dip",
      name: "Spicy-Sweet Dip Sauce",
      tags: ["quick", "spicy"],
      time: "2 min",
      serves: 2,
      blurb: "Hoisin sauce with chili bean sauce for a fast sweet-spicy dip.",
      ingredients: [
        { name: "2 tbsp Lee Kum Kee Hoisin Sauce", inStore: true, aisle: "Sauces" },
        { name: "1 tsp Lee Kum Kee Chili Bean Sauce", inStore: true, aisle: "Sauces" },
      ],
      steps: ["Mix everything together."],
    },
    {
      id: "garlic-sesame-oil-dip",
      name: "Garlic Sesame Oil Dip Sauce",
      tags: ["quick", "vegetarian"],
      time: "2 min",
      serves: 2,
      blurb: "Pure sesame oil and minced garlic, built for hot pot dipping.",
      ingredients: [
        { name: "3 tbsp Lee Kum Kee Pure Sesame Oil", inStore: true, aisle: "Sauces" },
        { name: "2 tbsp Lee Kum Kee Minced Garlic", inStore: true, aisle: "Sauces" },
      ],
      steps: ["Mix everything together."],
    },
    {
      id: "savory-dip-sauce",
      name: "Savory Dip Sauce",
      tags: ["quick", "spicy"],
      time: "3 min",
      serves: 2,
      blurb: "Soy, chili bean sauce, vinegar, peanut butter and sugar stirred smooth.",
      ingredients: [
        { name: "1 tbsp Lee Kum Kee Premium Soy Sauce", inStore: true, aisle: "Sauces" },
        { name: "1 tsp Lee Kum Kee Chili Bean Sauce", inStore: true, aisle: "Sauces" },
        { name: "1 tsp Lee Kum Kee Seasoned Rice Vinegar", inStore: true, aisle: "Sauces" },
        { name: "1 tsp peanut butter", inStore: false },
        { name: "1 tsp sugar", inStore: false },
      ],
      steps: ["Mix everything together until smooth."],
    },
    {
      id: "fresh-herb-dip",
      name: "Fresh Herb Dip Sauce",
      tags: ["quick"],
      time: "3 min",
      serves: 2,
      blurb: "Oyster sauce, ketchup, fresh tomato and herbs for hot pot.",
      ingredients: [
        { name: "2 tbsp Lee Kum Kee Premium Oyster Sauce", inStore: true, aisle: "Sauces" },
        { name: "2 tbsp ketchup", inStore: false },
        { name: "1 tbsp fresh tomato, finely chopped", inStore: true, aisle: "Fresh / fridge" },
        { name: "Fresh herbs, for example coriander, spring onion or basil", inStore: true, aisle: "Fresh / fridge" },
      ],
      steps: ["Mix everything together."],
    },
    {
      id: "sesame-peanut-sauce",
      name: "Sesame Peanut Sauce",
      tags: ["quick", "spicy"],
      time: "3 min",
      serves: 2,
      blurb: "Sweet soy, chili oil, peanut oil, sesame and herbs mixed creamy.",
      ingredients: [
        { name: "2 tbsp Lee Kum Kee Sweet Soy Sauce", inStore: true, aisle: "Sauces" },
        { name: "1 tsp Lee Kum Kee Chiu Chow Chili Oil", inStore: true, aisle: "Sauces" },
        { name: "1 tbsp peanut oil", inStore: false },
        { name: "1 tsp sesame seeds", inStore: true, aisle: "Pantry" },
        { name: "3 tbsp soup or hot water", inStore: false },
        { name: "2 tbsp spring onion and coriander, finely chopped", inStore: true, aisle: "Fresh / fridge" },
      ],
      steps: ["Mix everything together until creamy."],
    },
    {
      id: "fermented-tofu-sauce",
      name: "Fermented Tofu Sauce",
      tags: ["quick", "vegetarian"],
      time: "3 min",
      serves: 2,
      blurb: "Fermented tofu mashed with sesame oil, hot water and sugar.",
      ingredients: [
        { name: "2 pieces fermented tofu", inStore: true, aisle: "Pantry" },
        { name: "1 tbsp Lee Kum Kee Pure Sesame Oil", inStore: true, aisle: "Sauces" },
        { name: "2 tbsp soup or hot water", inStore: false },
        { name: "1 tsp sugar", inStore: false },
      ],
      steps: ["Mash and mix everything together."],
    },
    {
      id: "spicy-ma-la-sauce",
      name: "Spicy Ma-La Sauce",
      tags: ["quick", "spicy"],
      time: "2 min",
      serves: 2,
      blurb: "Dumpling sauce stirred with spicy Sichuan-style bouillon.",
      ingredients: [
        { name: "4 tbsp Lee Kum Kee Dumpling Sauce", inStore: true, aisle: "Sauces" },
        { name: "1 tsp spicy Sichuan-style bouillon", inStore: true, aisle: "Pantry" },
      ],
      steps: ["Mix everything together."],
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
  const recipeTimer = {
    activeId: null,
    total: 0,
    remaining: 0,
    running: false,
    interval: null,
    wakeWanted: false,
    wakeLock: null,
  };
  const recipeText = {
    de: {
      mapo: {
        name: "Mapo-Tofu",
        time: "25 Min.",
        blurb: "Sichuan-Klassiker - Seidentofu in einer betäubend scharfen Chili-Bohnen-Sauce.",
        ingredients: [
          { name: "400 g Seidentofu", aisle: "Frische / Kühlung" },
          { name: "Doubanjiang (fermentierte Bohnenpaste)", aisle: "Saucen" },
          { name: "1 TL Sichuanpfeffer", aisle: "Gewürze" },
          { name: "150 g Schweinefaschiertes" },
          { name: "2 Frühlingszwiebeln" },
          { name: "Knoblauch + Ingwer" },
          { name: "Helle Sojasauce", aisle: "Saucen" },
          { name: "Speisestärke-Wasser", aisle: "Vorrat" },
        ],
        steps: [
          "Tofu würfeln, 1 Min. in Salzwasser blanchieren und abgießen.",
          "Sichuanpfeffer rösten, mahlen und beiseitestellen.",
          "Schweinefaschiertes in Öl anbraten. Ingwer, Knoblauch und Doubanjiang dazugeben und garen, bis sich rotes Öl absetzt.",
          "Fond, Sojasauce und Tofu zugeben. 4 Min. sanft köcheln; nicht rühren, nur die Pfanne schwenken.",
          "Mit Stärke-Wasser binden. Vom Herd nehmen, Frühlingszwiebeln unterheben und mit Sichuanpfeffer bestreuen.",
        ],
      },
      dandan: {
        name: "Dan-Dan-Nudeln",
        time: "15 Min.",
        blurb: "Chengdu-Streetfood - Sesam, Chiliöl, Essig und knuspriges Schweinefleisch.",
        ingredients: [
          { name: "200 g Weizennudeln", aisle: "Nudelregal" },
          { name: "2 EL chinesische Sesampaste", aisle: "Saucen" },
          { name: "2 EL Chili Crisp / Chiliöl", aisle: "Saucen" },
          { name: "1 EL Chinkiang-Schwarzessig", aisle: "Saucen" },
          { name: "1 EL helle Sojasauce", aisle: "Saucen" },
          { name: "Sui Mi Ya Cai (eingelegter Senfkohl)", aisle: "Vorrat" },
          { name: "100 g Schweinefaschiertes" },
          { name: "Frühlingszwiebeln" },
        ],
        steps: [
          "Sauce verrühren: Sesampaste, Chiliöl, Essig, Sojasauce und etwas Nudelwasser.",
          "Schweinefaschiertes in einer trockenen Pfanne mit Ya Cai knusprig braten, bis es dunkel und duftend ist.",
          "Nudeln bissfest kochen. Eine Kelle Kochwasser aufheben.",
          "Nudeln auf die Sauce geben. Mit Fleisch und Frühlingszwiebeln toppen und am Tisch vermengen.",
        ],
      },
      "garlic-bok-choy": {
        name: "Pak Choi mit Knoblauch & Shiitake",
        time: "10 Min.",
        blurb: "Zwei Hauptzutaten, viel Geschmack. Glänzend, knoblauchig und in Minuten fertig.",
        ingredients: [
          { name: "4 Köpfe Baby-Pak-Choi" },
          { name: "6 getrocknete Shiitake", aisle: "Vorrat" },
          { name: "Vegetarische Austernsauce (Pilzsauce)", aisle: "Saucen" },
          { name: "1 EL Shaoxing-Reiswein", aisle: "Vorrat" },
          { name: "4 Knoblauchzehen" },
          { name: "Speisestärke", aisle: "Vorrat" },
          { name: "Sesamöl", aisle: "Saucen" },
        ],
        steps: [
          "Shiitake 20 Min. in warmem Wasser einweichen; Einweichwasser aufheben.",
          "Pak Choi halbieren, 30 Sek. blanchieren und kalt abschrecken.",
          "Knoblauch in Öl anschwitzen. Shiitake zugeben und mit einem Schuss Shaoxing ablöschen.",
          "Pak Choi, Pilzsauce und ein paar EL Einweichwasser zugeben.",
          "Mit Stärke-Wasser binden und mit Sesamöl abschließen.",
        ],
      },
      "fried-rice": {
        name: "Gebratener Reis mit Ei & Frühlingszwiebel",
        time: "12 Min.",
        blurb: "Jasminreis vom Vortag, heißer Wok und wenige Zutaten, richtig gemacht.",
        ingredients: [
          { name: "400 g Jasminreis vom Vortag", aisle: "Vorrat" },
          { name: "3 Eier" },
          { name: "4 Frühlingszwiebeln" },
          { name: "Helle Sojasauce", aisle: "Saucen" },
          { name: "Weißer Pfeffer", aisle: "Gewürze" },
          { name: "Sesamöl", aisle: "Saucen" },
          { name: "Neutrales Öl" },
        ],
        steps: [
          "Eier mit einer Prise Salz verquirlen. Weiße und grüne Teile der Frühlingszwiebeln getrennt schneiden.",
          "Wok sehr heiß werden lassen, Öl hinein, Eier weich stocken lassen und herausnehmen.",
          "Mehr Öl, weiße Frühlingszwiebeln, dann Reis. Andrücken, wenden, wiederholen; Klumpen lösen.",
          "Eier zurück in den Wok. Sojasauce am Wokrand entlang zugeben und mit weißem Pfeffer würzen.",
          "Vom Herd nehmen: Frühlingszwiebelgrün und Sesamöl unterheben. Sofort servieren.",
        ],
      }
    },
    zh: {
      mapo: {
        name: "麻婆豆腐",
        time: "25 分钟",
        blurb: "四川经典菜：嫩豆腐裹上麻辣豆瓣酱汁。",
        ingredients: [
          { name: "400克 嫩豆腐", aisle: "鲜货 / 冷藏" },
          { name: "豆瓣酱（蚕豆辣酱）", aisle: "酱料区" },
          { name: "1茶匙 花椒", aisle: "香料区" },
          { name: "150克 猪肉末" },
          { name: "2根 葱" },
          { name: "蒜 + 姜" },
          { name: "生抽", aisle: "酱料区" },
          { name: "水淀粉", aisle: "干货区" },
        ],
        steps: [
          "豆腐切块，在盐水中焯1分钟，沥干。",
          "花椒小火炒香后碾碎，备用。",
          "锅中加油炒香猪肉末。加入姜、蒜和豆瓣酱，炒到红油析出。",
          "加入高汤、生抽和豆腐。小火煮4分钟；不要用力搅拌，只轻轻晃锅。",
          "用水淀粉勾芡。离火后拌入葱花，撒上花椒粉。",
        ],
      },
      dandan: {
        name: "担担面",
        time: "15 分钟",
        blurb: "成都街头风味：芝麻、辣油、香醋和酥香肉末。",
        ingredients: [
          { name: "200克 小麦面条", aisle: "面食区" },
          { name: "2汤匙 芝麻酱", aisle: "酱料区" },
          { name: "2汤匙 辣椒脆 / 辣椒油", aisle: "酱料区" },
          { name: "1汤匙 镇江香醋", aisle: "酱料区" },
          { name: "1汤匙 生抽", aisle: "酱料区" },
          { name: "碎米芽菜", aisle: "干货区" },
          { name: "100克 猪肉末" },
          { name: "葱" },
        ],
        steps: [
          "调酱：芝麻酱、辣椒油、醋、生抽和少量面汤拌匀。",
          "干锅把猪肉末和芽菜炒到酥香、颜色变深。",
          "面条煮到有嚼劲，留一勺面汤。",
          "把面条放在酱汁上，铺上肉末和葱花，上桌后拌匀。",
        ],
      },
      "garlic-bok-choy": {
        name: "蒜香小白菜与香菇",
        time: "10 分钟",
        blurb: "两种主料，味道很足。油亮蒜香，几分钟就能完成。",
        ingredients: [
          { name: "4棵 小白菜" },
          { name: "6朵 干香菇", aisle: "干货区" },
          { name: "素蚝油（蘑菇酱）", aisle: "酱料区" },
          { name: "1汤匙 绍兴酒", aisle: "干货区" },
          { name: "4瓣 蒜" },
          { name: "玉米淀粉", aisle: "干货区" },
          { name: "芝麻油", aisle: "酱料区" },
        ],
        steps: [
          "干香菇用温水泡20分钟，保留泡香菇的水。",
          "小白菜对半切，焯30秒后过冷水。",
          "锅中热油爆香蒜。加入香菇，再淋一点绍兴酒。",
          "加入小白菜、素蚝油和几汤匙泡香菇的水。",
          "用水淀粉收汁，最后淋芝麻油。",
        ],
      },
      "fried-rice": {
        name: "鸡蛋葱花炒饭",
        time: "12 分钟",
        blurb: "隔夜茉莉香米、热锅和简单食材，做出地道炒饭。",
        ingredients: [
          { name: "400克 隔夜茉莉香米", aisle: "干货区" },
          { name: "3个 鸡蛋" },
          { name: "4根 葱" },
          { name: "生抽", aisle: "酱料区" },
          { name: "白胡椒", aisle: "香料区" },
          { name: "芝麻油", aisle: "酱料区" },
          { name: "中性食用油" },
        ],
        steps: [
          "鸡蛋加一小撮盐打散。葱白和葱绿分开切。",
          "锅烧到很热，倒油，把鸡蛋炒成嫩蛋块后盛出。",
          "再加油，先下葱白，再下米饭。按压、翻炒、重复，炒散饭团。",
          "鸡蛋回锅。沿锅边淋入生抽，撒白胡椒。",
          "关火后加入葱绿和芝麻油，马上上桌。",
        ],
      }
    }
  };

  const tr = (key, params) => window.ChooI18n?.t(key, params) || key;
  const currentLang = () => window.ChooI18n?.getLanguage?.() || "en";
  const recipeCopy = (recipe, key) => recipeText[currentLang()]?.[recipe.id]?.[key] || recipe[key];
  const recipeName = (recipe) => recipeCopy(recipe, "name");
  const recipeTime = (recipe) => recipeCopy(recipe, "time");
  const recipeBlurb = (recipe) => recipeCopy(recipe, "blurb");
  const recipeSteps = (recipe) => recipeText[currentLang()]?.[recipe.id]?.steps || recipe.steps;
  const recipeIngredients = (recipe) => {
    const translated = recipeText[currentLang()]?.[recipe.id]?.ingredients || [];
    return recipe.ingredients.map((ingredient, index) => ({
      ...ingredient,
      name: translated[index]?.name || ingredient.name,
      aisle: translated[index]?.aisle || ingredient.aisle,
    }));
  };
  const tagLabel = (tag) => tr(`filter.${tag}`);

  function normalizeApiRecipe(recipe) {
    const ingredients = Array.isArray(recipe.ingredients) ? recipe.ingredients : [];
    const steps = Array.isArray(recipe.steps) ? recipe.steps : [];
    return {
      ...recipe,
      id: recipe.slug || recipe.id,
      name: recipe.name || recipe.title || "",
      blurb: recipe.blurb || recipe.description || "",
      time: recipe.time || (recipe.totalMinutes ? `${recipe.totalMinutes} min` : ""),
      serves: Number(recipe.serves || recipe.servings || 2),
      tags: Array.isArray(recipe.tags) ? recipe.tags : [],
      ingredients: ingredients.map((ingredient) => ({
        name: ingredient.name || [ingredient.amount, ingredient.unit, ingredient.rawName].filter(Boolean).join(" "),
        inStore: Boolean(ingredient.inStore),
        aisle: ingredient.aisle || "",
      })),
      steps: steps.map((step) => typeof step === "string" ? step : step.text).filter(Boolean),
      imageUrl: recipe.imageUrl || "",
      imageAlt: recipe.imageAlt || recipe.name || recipe.title || "",
    };
  }

  async function loadRecipes(filter = activeFilter) {
    const params = new URLSearchParams({ lang: currentLang() });

    try {
      const response = await fetch(`/api/recipes?${params.toString()}`, {
        headers: { "Accept": "application/json" },
      });
      if (!response.ok) throw new Error(`Recipe API failed: ${response.status}`);
      const payload = await response.json();
      if (Array.isArray(payload.recipes)) {
        recipes = payload.recipes.map(normalizeApiRecipe);
        renderRecipes(filter);
      }
    } catch (error) {
      renderRecipes(filter);
    }
  }

  async function findRecipeForOpen(id) {
    const found = recipes.find((item) => item.id === id || item.slug === id || item.recipeId === id);
    if (found) return found;

    try {
      const response = await fetch(`/api/recipes/${encodeURIComponent(id)}?lang=${encodeURIComponent(currentLang())}`, {
        headers: { "Accept": "application/json" },
      });
      if (!response.ok) return null;
      const payload = await response.json();
      if (!payload.recipe) return null;
      const loaded = normalizeApiRecipe(payload.recipe);
      recipes = [loaded, ...recipes.filter((item) => item.id !== loaded.id && item.slug !== loaded.slug && item.recipeId !== loaded.recipeId)];
      return loaded;
    } catch (error) {
      return null;
    }
  }

  function stepTimerSeconds(step) {
    const text = String(step);
    const minuteMatch = text.match(/(\d+(?:[.,]\d+)?)\s*(?:min\.?|minutes?|分钟|分鐘)/i);
    if (minuteMatch) return Math.round(Number(minuteMatch[1].replace(",", ".")) * 60);

    const secondMatch = text.match(/(\d+(?:[.,]\d+)?)\s*(?:s|sec\.?|seconds?|sek\.?|sekunden|秒)/i);
    if (secondMatch) return Math.round(Number(secondMatch[1].replace(",", ".")));

    return 0;
  }

  function formatTimer(seconds) {
    const safeSeconds = Math.max(0, seconds);
    const hours = Math.floor(safeSeconds / 3600);
    const minutes = Math.floor((safeSeconds % 3600) / 60);
    const rest = safeSeconds % 60;

    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
    }
    return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
  }

  function updateTimerDisplay() {
    document.querySelectorAll("[data-step-timer]").forEach((button) => {
      const isActive = button.dataset.stepTimer === recipeTimer.activeId;
      const seconds = isActive ? recipeTimer.remaining : Number(button.dataset.stepTimerSeconds || 0);
      const display = button.querySelector("[data-step-timer-display]");

      if (display) display.textContent = formatTimer(seconds);
      button.classList.toggle("step-timer--active", isActive);
      button.classList.toggle("step-timer--running", isActive && recipeTimer.running);
      button.classList.toggle("step-timer--done", isActive && recipeTimer.remaining === 0);
      button.setAttribute("aria-label", `${tr(isActive && recipeTimer.running ? "timer.pause" : "timer.start")} ${formatTimer(seconds)}`);
    });
  }

  function setWakeStatus(key) {
    const status = document.querySelector("[data-wake-status]");
    if (status) status.textContent = tr(key);
  }

  function pauseRecipeTimer() {
    if (recipeTimer.interval) window.clearInterval(recipeTimer.interval);
    recipeTimer.interval = null;
    recipeTimer.running = false;
    updateTimerDisplay();
  }

  async function releaseWakeLock() {
    if (recipeTimer.wakeLock) {
      try {
        await recipeTimer.wakeLock.release();
      } catch (error) {
        // The browser may already have released the lock.
      }
    }
    recipeTimer.wakeLock = null;
    setWakeStatus("timer.off");
  }

  function stopRecipeTimer(resetWake) {
    pauseRecipeTimer();
    recipeTimer.activeId = null;
    recipeTimer.total = 0;
    recipeTimer.remaining = 0;
    updateTimerDisplay();
    if (resetWake) {
      recipeTimer.wakeWanted = false;
      releaseWakeLock();
    }
  }

  async function requestWakeLock() {
    if (!("wakeLock" in navigator)) {
      recipeTimer.wakeWanted = false;
      const checkbox = document.querySelector("[data-wake-lock]");
      if (checkbox) checkbox.checked = false;
      setWakeStatus("timer.unsupported");
      return;
    }

    try {
      recipeTimer.wakeLock = await navigator.wakeLock.request("screen");
      setWakeStatus("timer.on");
      recipeTimer.wakeLock.addEventListener("release", () => {
        recipeTimer.wakeLock = null;
        if (recipeTimer.wakeWanted) setWakeStatus("timer.paused");
      });
    } catch (error) {
      recipeTimer.wakeWanted = false;
      const checkbox = document.querySelector("[data-wake-lock]");
      if (checkbox) checkbox.checked = false;
      setWakeStatus("timer.blocked");
    }
  }

  function startRecipeTimer() {
    if (recipeTimer.running || recipeTimer.remaining <= 0) return;

    recipeTimer.running = true;
    updateTimerDisplay();
    recipeTimer.interval = window.setInterval(() => {
      recipeTimer.remaining = Math.max(0, recipeTimer.remaining - 1);
      updateTimerDisplay();

      if (recipeTimer.remaining === 0) {
        pauseRecipeTimer();
      }
    }, 1000);

    if (recipeTimer.wakeWanted) requestWakeLock();
  }

  function toggleStepTimer(button) {
    if (!button) return;

    const timerId = button.dataset.stepTimer;
    const seconds = Number(button.dataset.stepTimerSeconds || 0);
    if (!timerId || seconds <= 0) return;

    if (recipeTimer.activeId !== timerId) {
      pauseRecipeTimer();
      recipeTimer.activeId = timerId;
      recipeTimer.total = seconds;
      recipeTimer.remaining = seconds;
      startRecipeTimer();
      return;
    }

    if (recipeTimer.running) {
      pauseRecipeTimer();
      return;
    }

    if (recipeTimer.remaining <= 0) recipeTimer.remaining = recipeTimer.total;
    startRecipeTimer();
  }

  function renderRecipes(filter = "all") {
    const mount = document.querySelector("[data-recipes]");
    if (!mount) return;

    mount.innerHTML = recipes.map((recipe, index) => {
      const originalIndex = index + 1;
      const ingredients = recipeIngredients(recipe);
      const inStore = ingredients.filter((ingredient) => ingredient.inStore).length;
      const tags = recipe.tags.map((tag) => `<span class="tag tag--${escapeHtml(tag)}">${escapeHtml(tagLabel(tag))}</span>`).join("");
      const imageSrc = recipe.imageUrl || "images/recipe-placeholder.webp";
      const imageAlt = recipe.imageAlt || "";
      const matches = filter === "all" || recipe.tags.includes(filter);
      const hiddenClass = matches ? "" : " rc--hidden";

      return `
        <button class="rc${hiddenClass}" type="button" data-recipe="${escapeHtml(recipe.id)}" data-recipe-tags="${escapeHtml(recipe.tags.join(","))}">
          <span class="rc__image" aria-hidden="true">
            <img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(imageAlt)}" width="1448" height="1086" loading="lazy" decoding="async" />
          </span>
          <span class="rc__top">
            <span class="rc__no">${escapeHtml(tr("recipe.label"))} ${String(originalIndex).padStart(2, "0")}</span>
            <span class="rc__time">${escapeHtml(recipeTime(recipe))}</span>
          </span>
          <span class="rc__body">
            <span class="rc__name">${escapeHtml(recipeName(recipe))}</span>
            <span class="rc__blurb">${escapeHtml(recipeBlurb(recipe))}</span>
          </span>
          <span class="rc__meta">
            <span class="rc__tags">${tags}</span>
            <span class="rc__availability">${escapeHtml(tr("recipe.inStore", { current: inStore, total: ingredients.length }))}</span>
          </span>
        </button>
      `;
    }).join("");

    if (window.matchMedia("(max-width: 820px)").matches) {
      mount.scrollTo({ left: 0, behavior: "smooth" });
    }
  }

  let activeRecipeFlip = null;

  function applyRecipeFilter(filter) {
    const mount = document.querySelector("[data-recipes]");
    if (!mount) return;
    const items = Array.from(mount.querySelectorAll(".rc"));
    if (!items.length) return;

    const FlipPlugin = window.Flip;
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canAnimate = Boolean(FlipPlugin && window.gsap && !reduceMotion);

    if (activeRecipeFlip) {
      activeRecipeFlip.kill();
      activeRecipeFlip = null;
    }
    if (canAnimate) {
      window.gsap.killTweensOf(items);
      window.gsap.set(items, { clearProps: "transform,opacity" });
    }

    const state = canAnimate ? FlipPlugin.getState(items, { props: "opacity" }) : null;

    items.forEach((item) => {
      const tags = (item.dataset.recipeTags || "").split(",").filter(Boolean);
      const matches = filter === "all" || tags.includes(filter);
      item.classList.toggle("rc--hidden", !matches);
    });

    if (state) {
      activeRecipeFlip = FlipPlugin.from(state, {
        duration: 0.6,
        ease: "power2.inOut",
        stagger: 0.025,
        absoluteOnLeave: true,
        onEnter: (elements) =>
          window.gsap.fromTo(
            elements,
            { opacity: 0, scale: 0.88 },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
          ),
        onLeave: (elements) =>
          window.gsap.to(elements, { opacity: 0, scale: 0.88, duration: 0.4, ease: "power2.in" }),
        onComplete: () => {
          activeRecipeFlip = null;
          window.gsap.set(items, { clearProps: "transform" });
        },
      });
    }
  }

  async function openRecipe(id, options = {}) {
    const recipe = await findRecipeForOpen(id);
    const view = document.querySelector("[data-recipe-view]");
    if (!recipe || !view) return;
    const recipeId = recipe.id || recipe.slug || id;

    const localizedIngredients = recipeIngredients(recipe);
    const localizedSteps = recipeSteps(recipe);
    const inStore = localizedIngredients.filter((ingredient) => ingredient.inStore).length;
    const direction = options.direction === -1 ? -1 : 1;
    const shouldAnimate = Boolean(
      options.animate &&
      view.classList.contains("recipe-view--open") &&
      view.dataset.activeRecipe &&
      view.dataset.activeRecipe !== recipeId
    );

    if (shouldAnimate && view.dataset.recipeSwitching === "true") return;

    const ingredients = localizedIngredients.map((ingredient) => `
      <li class="ing ${ingredient.inStore ? "ing--here" : ""}">
        <span class="ing__mark" aria-hidden="true">${ingredient.inStore ? "●" : "○"}</span>
        <span class="ing__name">${escapeHtml(ingredient.name)}</span>
        ${ingredient.inStore ? `<span class="ing__aisle">${escapeHtml(ingredient.aisle)}</span>` : ""}
      </li>
    `).join("");
    const steps = localizedSteps.map((step, index) => {
      const timerSeconds = stepTimerSeconds(step);
      const timerId = `${recipeId}-${index}`;
      const timer = timerSeconds > 0
        ? `
          <button class="step-timer" type="button" data-step-timer="${escapeHtml(timerId)}" data-step-timer-seconds="${timerSeconds}" aria-label="${escapeHtml(`${tr("timer.start")} ${formatTimer(timerSeconds)}`)}">
            <span class="step-timer__icon" aria-hidden="true">
              <span class="step-timer__play"></span>
              <span class="step-timer__pause"></span>
            </span>
            <span data-step-timer-display>${escapeHtml(formatTimer(timerSeconds))}</span>
          </button>
        `
        : "";

      return `
        <li>
          <span class="step__n">${String(index + 1).padStart(2, "0")}</span>
          <span class="step__body">
            <span>${escapeHtml(step)}</span>
            ${timer}
          </span>
        </li>
      `;
    }).join("");
    const tags = recipe.tags.map((tag) => `<span class="tag tag--${escapeHtml(tag)}">${escapeHtml(tagLabel(tag))}</span>`).join("");
    const nutrition = computeNutrition(recipe);
    const imageSrc = recipe.imageUrl || "images/recipe-placeholder.webp";
    const imageAlt = recipe.imageAlt || recipeName(recipe);

    const markup = `
      <div class="recipe-view__bar">
        <div class="recipe-view__actions">
          <button class="recipe-view__back" type="button" data-close-recipe>
            <svg class="recipe-view__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M15 18 9 12l6-6"></path>
            </svg>
            <span>${escapeHtml(tr("recipe.back"))}</span>
          </button>
        </div>
      </div>
      <nav class="recipe-view__side-nav" aria-label="${escapeHtml(tr("recipe.navigation"))}">
        <button class="recipe-view__nav recipe-view__nav--prev" type="button" data-adjacent-recipe="-1" aria-label="${escapeHtml(tr("recipe.previous"))}" title="${escapeHtml(tr("recipe.previous"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M15 18 9 12l6-6"></path>
          </svg>
          <span class="visually-hidden">${escapeHtml(tr("recipe.previous"))}</span>
        </button>
        <button class="recipe-view__nav recipe-view__nav--next" type="button" data-adjacent-recipe="1" aria-label="${escapeHtml(tr("recipe.next"))}" title="${escapeHtml(tr("recipe.next"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
          <span class="visually-hidden">${escapeHtml(tr("recipe.next"))}</span>
        </button>
      </nav>
      <article class="recipe-page" role="dialog" aria-modal="true" aria-labelledby="recipe-title">
        <div class="recipe-page__hero">
          <header class="recipe-page__header">
            <span class="eyebrow">${escapeHtml(tr("recipe.eyebrow"))}</span>
            <h3 class="recipe-page__title" id="recipe-title">${escapeHtml(recipeName(recipe))}</h3>
            <p class="recipe-page__blurb">${escapeHtml(recipeBlurb(recipe))}</p>
          </header>
          <figure class="recipe-page__image">
            <img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(imageAlt)}" width="1448" height="1086" loading="lazy" decoding="async" />
          </figure>
          <div class="recipe-page__stats" aria-label="${escapeHtml(tr("recipe.summary"))}">
            <div class="recipe-stat"><span>${escapeHtml(tr("recipe.time"))}</span><strong>${escapeHtml(recipeTime(recipe))}</strong></div>
            <div class="recipe-stat"><span>${escapeHtml(tr("recipe.servesLabel"))}</span><strong>${recipe.serves}</strong></div>
            <div class="recipe-stat"><span>${escapeHtml(tr("recipe.tags"))}</span><strong>${tags}</strong></div>
          </div>
          <div class="recipe-panel recipe-panel--ingredients" data-ingredients-panel data-ingredients-collapsed="true">
            <div class="ings__head">
              <h4>${escapeHtml(tr("recipe.ingredients"))}</h4>
              <span class="ings__legend"><span class="dot dot--accent"></span> ${escapeHtml(tr("recipe.inStore", { current: inStore, total: localizedIngredients.length }))}</span>
              <button class="ingredients-toggle" type="button" data-ingredients-toggle aria-expanded="false" aria-controls="recipe-ingredients-${escapeHtml(recipeId)}" aria-label="${escapeHtml(tr("recipe.showIngredients"))}" title="${escapeHtml(tr("recipe.showIngredients"))}">
                <span data-ingredients-toggle-icon aria-hidden="true">+</span>
              </button>
            </div>
            <ul id="recipe-ingredients-${escapeHtml(recipeId)}" class="ingredients-list">${ingredients}</ul>
            ${localizedIngredients.length > 5 ? `<button class="ingredients-show-more" type="button" data-ingredients-toggle>${escapeHtml(tr("recipe.moreIngredients", { count: localizedIngredients.length - 5 }))}</button>` : ""}
          </div>
        </div>
        <div class="recipe-page__grid">
          <div class="recipe-panel">
            <div class="method-head">
              <h4>${escapeHtml(tr("recipe.method"))}</h4>
              <label class="wake-lock">
                <input type="checkbox" data-wake-lock />
                <span class="wake-lock__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <rect x="6" y="4" width="12" height="16" rx="2"></rect>
                    <path d="M10 17h4"></path>
                  </svg>
                </span>
                <span class="wake-lock__text">${escapeHtml(tr("timer.keepAwake"))}</span>
                <span class="wake-status" data-wake-status>${escapeHtml(tr("timer.off"))}</span>
              </label>
            </div>
            <ol>${steps}</ol>
          </div>
          <aside class="recipe-panel recipe-panel--nutrition" data-nutrition-panel data-nutrition-mode="per100g">
            <div class="nutrition-head">
              <h4>${escapeHtml(tr("recipe.nutrition"))}</h4>
              <div class="nutrition-toggle" role="group" aria-label="${escapeHtml(tr("recipe.nutrition"))}">
                <button type="button" class="nutrition-toggle__btn nutrition-toggle__btn--on" data-nutrition-mode="per100g">${escapeHtml(tr("recipe.per100g"))}</button>
                <button type="button" class="nutrition-toggle__btn" data-nutrition-mode="perServing">${escapeHtml(tr("recipe.perServing"))}</button>
              </div>
            </div>
            <ul class="nutrition-list">
              <li><span>${escapeHtml(tr("nutrition.energy"))}</span><strong data-nutri="kcal" data-per100g="${nutrition.per100g.kcal} kcal" data-perserving="${nutrition.perServing.kcal} kcal">${nutrition.per100g.kcal} kcal</strong></li>
              <li><span>${escapeHtml(tr("nutrition.protein"))}</span><strong data-nutri="protein" data-per100g="${nutrition.per100g.protein} g" data-perserving="${nutrition.perServing.protein} g">${nutrition.per100g.protein} g</strong></li>
              <li><span>${escapeHtml(tr("nutrition.carbs"))}</span><strong data-nutri="carbs" data-per100g="${nutrition.per100g.carbs} g" data-perserving="${nutrition.perServing.carbs} g">${nutrition.per100g.carbs} g</strong></li>
              <li><span>${escapeHtml(tr("nutrition.fat"))}</span><strong data-nutri="fat" data-per100g="${nutrition.per100g.fat} g" data-perserving="${nutrition.perServing.fat} g">${nutrition.per100g.fat} g</strong></li>
            </ul>
          </aside>
        </div>
      </article>
    `;

    stopRecipeTimer(true);

    const commitMarkup = () => {
      view.innerHTML = markup;
      view.dataset.activeRecipe = recipeId;
      view.setAttribute("aria-hidden", "false");
      document.body.classList.add("recipe-open");
      setWakeStatus("timer.off");
      view.scrollTo({ top: 0, behavior: "auto" });

      const activePage = view.querySelector(".recipe-page");
      if (shouldAnimate && activePage) {
        activePage.classList.add(direction > 0 ? "recipe-page--enter-right" : "recipe-page--enter-left");
        requestAnimationFrame(() => activePage.classList.add("recipe-page--enter-active"));
        window.setTimeout(() => {
          activePage.classList.remove("recipe-page--enter-right", "recipe-page--enter-left", "recipe-page--enter-active");
          delete view.dataset.recipeSwitching;
          view.querySelector(`[data-adjacent-recipe="${direction}"]`)?.focus();
        }, 420);
      } else {
        view.querySelector("[data-close-recipe]")?.focus();
      }

      requestAnimationFrame(() => view.classList.add("recipe-view--open"));
    };

    if (shouldAnimate) {
      view.dataset.recipeSwitching = "true";
      const currentPage = view.querySelector(".recipe-page");
      currentPage?.classList.add(direction > 0 ? "recipe-page--exit-left" : "recipe-page--exit-right");
      window.setTimeout(commitMarkup, 170);
      return;
    }

    commitMarkup();
  }

  function closeRecipe() {
    const view = document.querySelector("[data-recipe-view]");
    if (!view || view.getAttribute("aria-hidden") === "true") return;

    view.classList.remove("recipe-view--open");
    view.setAttribute("aria-hidden", "true");
    document.body.classList.remove("recipe-open");
    stopRecipeTimer(true);
    delete view.dataset.activeRecipe;
    delete view.dataset.recipeSwitching;

    window.setTimeout(() => {
      if (!view.classList.contains("recipe-view--open")) view.innerHTML = "";
    }, 520);
  }

  function openAdjacentRecipe(direction = 1, options = {}) {
    const view = document.querySelector("[data-recipe-view]");
    if (view?.dataset.recipeSwitching === "true") return;

    const activeRecipe = view?.dataset.activeRecipe;
    const index = recipes.findIndex((item) => item.id === activeRecipe);
    if (index < 0) return;

    const nextIndex = (index + direction + recipes.length) % recipes.length;
    openRecipe(recipes[nextIndex].id, { animate: options.animate ?? true, direction });
  }

  function setIngredientsCollapsed(panel, collapsed) {
    if (!panel) return;

    panel.dataset.ingredientsCollapsed = String(collapsed);
    const button = panel.querySelector("[data-ingredients-toggle]");
    const icon = panel.querySelector("[data-ingredients-toggle-icon]");
    const label = tr(collapsed ? "recipe.showIngredients" : "recipe.hideIngredients");

    button?.setAttribute("aria-expanded", String(!collapsed));
    button?.setAttribute("aria-label", label);
    button?.setAttribute("title", label);
    if (icon) icon.textContent = collapsed ? "+" : "-";
  }

  function computeNutrition(recipe) {
    const seed = recipe.id.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const kcal = 110 + (seed % 80);
    const protein = 6 + (seed % 9);
    const carbs = 9 + (seed % 14);
    const fat = 3 + (seed % 8);
    const portionWeight = 320;
    const fallback = {
      per100g: { kcal, protein, carbs, fat },
      perServing: {
        kcal: Math.round((kcal * portionWeight) / 100),
        protein: Math.round((protein * portionWeight) / 100),
        carbs: Math.round((carbs * portionWeight) / 100),
        fat: Math.round((fat * portionWeight) / 100),
      },
    };
    if (!recipe.nutrition) return fallback;
    if (recipe.nutrition.per100g && recipe.nutrition.perServing) return recipe.nutrition;

    const flat = recipe.nutrition;
    if (flat.kcal || flat.protein || flat.carbs || flat.fat) {
      const per100g = {
        kcal: Math.round(Number(flat.kcal ?? fallback.per100g.kcal)),
        protein: Math.round(Number(flat.protein ?? fallback.per100g.protein)),
        carbs: Math.round(Number(flat.carbs ?? fallback.per100g.carbs)),
        fat: Math.round(Number(flat.fat ?? fallback.per100g.fat)),
      };
      return {
        per100g,
        perServing: {
          kcal: Math.round((per100g.kcal * portionWeight) / 100),
          protein: Math.round((per100g.protein * portionWeight) / 100),
          carbs: Math.round((per100g.carbs * portionWeight) / 100),
          fat: Math.round((per100g.fat * portionWeight) / 100),
        },
      };
    }

    return fallback;
  }

  function setNutritionMode(panel, mode) {
    if (!panel) return;
    const next = mode === "perServing" ? "perServing" : "per100g";
    panel.dataset.nutritionMode = next;
    panel.querySelectorAll("[data-nutrition-mode]").forEach((btn) => {
      btn.classList.toggle("nutrition-toggle__btn--on", btn.dataset.nutritionMode === next);
      btn.setAttribute("aria-pressed", String(btn.dataset.nutritionMode === next));
    });
    const attr = next === "perServing" ? "perserving" : "per100g";
    panel.querySelectorAll("[data-nutri]").forEach((cell) => {
      const value = cell.dataset[attr];
      if (value) cell.textContent = value;
    });
  }

  function initRecipes() {
    renderRecipes(activeFilter);
    loadRecipes(activeFilter);
    const mobileRecipeQuery = window.matchMedia("(max-width: 720px)");
    let swipeStart = null;

    document.querySelector(".filters")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;

      activeFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => {
        item.classList.toggle("filter--on", item === button);
      });
      applyRecipeFilter(activeFilter);
    });

    document.querySelector("[data-recipes]")?.addEventListener("click", (event) => {
      const card = event.target.closest("[data-recipe]");
      if (card) openRecipe(card.dataset.recipe);
    });

    const view = document.querySelector("[data-recipe-view]");
    view?.addEventListener("click", (event) => {
      if (event.target.closest("[data-close-recipe]")) closeRecipe();

      const ingredientsButton = event.target.closest("[data-ingredients-toggle]");
      if (ingredientsButton) {
        const panel = ingredientsButton.closest("[data-ingredients-panel]");
        setIngredientsCollapsed(panel, panel?.dataset.ingredientsCollapsed !== "true");
      }

      const nutritionButton = event.target.closest("[data-nutrition-mode]");
      if (nutritionButton && nutritionButton.matches("button")) {
        const panel = nutritionButton.closest("[data-nutrition-panel]");
        setNutritionMode(panel, nutritionButton.dataset.nutritionMode);
      }

      const stepTimer = event.target.closest("[data-step-timer]");
      if (stepTimer) toggleStepTimer(stepTimer);

      const adjacentButton = event.target.closest("[data-adjacent-recipe]");
      if (adjacentButton) openAdjacentRecipe(Number(adjacentButton.dataset.adjacentRecipe || 1), { animate: true });
    });

    view?.addEventListener("pointerdown", (event) => {
      if (!mobileRecipeQuery.matches || event.pointerType === "mouse") return;
      if (event.target.closest("button, a, input, label, textarea, select")) return;

      swipeStart = {
        x: event.clientX,
        y: event.clientY,
        time: Date.now(),
      };
    });

    view?.addEventListener("pointerup", (event) => {
      if (!swipeStart || !mobileRecipeQuery.matches) return;

      const deltaX = event.clientX - swipeStart.x;
      const deltaY = event.clientY - swipeStart.y;
      const elapsed = Date.now() - swipeStart.time;
      swipeStart = null;

      if (elapsed > 700) return;
      if (Math.abs(deltaX) < 72 || Math.abs(deltaX) < Math.abs(deltaY) * 1.35) return;

      openAdjacentRecipe(deltaX < 0 ? 1 : -1, { animate: true });
    });

    view?.addEventListener("pointercancel", () => {
      swipeStart = null;
    });

    view?.addEventListener("change", (event) => {
      const checkbox = event.target.closest("[data-wake-lock]");
      if (!checkbox) return;

      recipeTimer.wakeWanted = checkbox.checked;
      if (checkbox.checked) requestWakeLock();
      else releaseWakeLock();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeRecipe();
    });

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible" && recipeTimer.wakeWanted) requestWakeLock();
    });

    window.ChooI18n?.onChange(() => {
      loadRecipes(activeFilter);
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
    { month: 1, date: "JAN 01", title: "New Year's Day", cn: "元旦 - Yuandan", symbol: "元", tag: "Public holiday", summary: "China's Gregorian New Year holiday, usually marked by a short winter break.", meaning: "A modern national holiday for rest, travel and the start of the calendar year.", shelf: "Tea, snacks, gift boxes and quick pantry restocks." },
    { month: 1, date: "JAN 26", title: "Laba Festival", cn: "腊八节 - Laba", symbol: "腊", tag: "Laba porridge", summary: "The eighth day of the twelfth lunar month, known for laba congee and winter blessings.", meaning: "A pre-New-Year marker tied to harvest, gratitude and preparation for Spring Festival.", shelf: "Glutinous rice, red beans, peanuts, lotus seeds, jujubes and grains." },
    { month: 2, date: "FEB 16", title: "Spring Festival Eve", cn: "除夕 - Chuxi", symbol: "夕", tag: "Reunion dinner", summary: "The night of the big family reunion dinner before Lunar New Year.", meaning: "Family gathers for the year's most important meal before welcoming the new year.", shelf: "Hot pot bases, dumpling wrappers, noodles, sauces and festive sweets." },
    { month: 2, date: "FEB 17", title: "Spring Festival", cn: "春节 - Year of the Fire Horse", symbol: "春", tag: "Lunar New Year", summary: "Family reunion dinners, red envelopes, door couplets and lion dances mark the first day of the lunar year.", meaning: "Fresh start, family reunion and good fortune for the year ahead.", shelf: "Long-life noodles, red envelopes, sweets, tea and hot pot ingredients." },
    { month: 3, date: "MAR 03", title: "Lantern Festival", cn: "元宵节 - Yuanxiao", symbol: "宵", tag: "Lantern night", summary: "The New Year period closes with lanterns, riddles and tangyuan.", meaning: "The fifteenth lunar day closes New Year celebrations with light and reunion.", shelf: "Tangyuan, black sesame, peanut fillings, ginger syrup and paper lanterns." },
    { month: 3, date: "MAR 20", title: "Zhonghe Festival", cn: "中和节 - Blue Dragon", symbol: "龙", tag: "Blue Dragon", summary: "An observance in the second lunar month linked with spring, land and harvest wishes.", meaning: "Traditionally connected to waking the dragon and asking for rain and good harvests.", shelf: "Rice cakes, spring snacks, tea and small pantry gifts." },
    { month: 4, date: "APR 05", title: "Qingming Festival", cn: "清明节 - Tomb Sweeping Day", symbol: "清", tag: "Ancestors", summary: "A spring day for ancestor remembrance, cemetery visits and outdoor walks.", meaning: "Remembering ancestors, tending graves and marking early spring.", shelf: "Green tea, rice flour, sesame, spring snacks and simple family pantry staples." },
    { month: 5, date: "MAY 01", title: "Labour Day", cn: "劳动节 - Laodong Jie", symbol: "劳", tag: "Public holiday", summary: "A national public holiday and one of China's major travel breaks.", meaning: "A modern public holiday for workers, rest and domestic travel.", shelf: "Instant noodles, bottled teas, travel snacks and picnic supplies." },
    { month: 5, date: "MAY 04", title: "Youth Day", cn: "青年节 - Qingnian Jie", symbol: "青", tag: "Youth", summary: "A modern observance linked to youth, education and the May Fourth Movement.", meaning: "Recognizes young people and a major moment in modern Chinese cultural history.", shelf: "Milk tea kits, snacks, candies and easy weeknight noodles." },
    { month: 6, date: "JUN 01", title: "Children's Day", cn: "儿童节 - Ertong Jie", symbol: "童", tag: "Children", summary: "A day for children, widely marked with school and family activities.", meaning: "A day centered on children, play, gifts and simple celebrations.", shelf: "Mochi, jelly cups, Pocky, shrimp chips and fruit drinks." },
    { month: 6, date: "JUN 19", title: "Dragon Boat Festival", cn: "端午节 - Duanwu", symbol: "端", tag: "Zongzi season", summary: "Dragon boat racing, zongzi and customs connected with Qu Yuan.", meaning: "Commemoration of Qu Yuan, protective summer customs and racing traditions.", shelf: "Zongzi, sticky rice, bamboo leaves, red bean, mung bean and salted egg yolk." },
    { month: 7, date: "JUL 01", title: "CPC Founding Day", cn: "建党节 - Jiandang Jie", symbol: "建", tag: "Observance", summary: "A modern political observance in China's official calendar.", meaning: "An official observance rather than a traditional family festival.", shelf: "Gift tea, boxed snacks and pantry staples for gatherings." },
    { month: 8, date: "AUG 13", title: "Ghost Month Begins", cn: "鬼月 - Gui Yue", symbol: "鬼", tag: "Ghost Month", summary: "The seventh lunar month begins, associated with ancestor and spirit customs.", meaning: "A period of offerings, remembrance and ritual care in folk tradition.", shelf: "Ritual paper goods where available, tea, fruit snacks and rice." },
    { month: 8, date: "AUG 19", title: "Qixi Festival", cn: "七夕节 - Double Seventh", symbol: "七", tag: "Qixi", summary: "Often called Chinese Valentine's Day, linked to the Cowherd and Weaver Girl story.", meaning: "A romantic festival about reunion, longing and traditional craft.", shelf: "Gift sweets, tea, mochi, candies and elegant snack boxes." },
    { month: 8, date: "AUG 27", title: "Ghost Festival", cn: "中元节 - Zhongyuan", symbol: "中", tag: "Spirit Festival", summary: "The fifteenth day of Ghost Month, associated with offerings and remembrance.", meaning: "A folk observance for honoring ancestors and wandering spirits.", shelf: "Rice, tea, fruit, sweets and simple pantry items for offerings." },
    { month: 9, date: "SEP 10", title: "Teachers' Day", cn: "教师节 - Jiaoshi Jie", symbol: "师", tag: "Teachers", summary: "A modern observance recognizing teachers and education.", meaning: "A day for respect, gratitude and small gifts for teachers.", shelf: "Gift teas, biscuits, candies and boxed snacks." },
    { month: 9, date: "SEP 25", title: "Mid-Autumn Festival", cn: "中秋节 - Moon Festival", symbol: "月", tag: "Mooncakes", summary: "Mooncakes, lanterns and reunion meals under the full moon.", meaning: "Full moon, harvest, family reunion and wishes carried by lantern light.", shelf: "Mooncakes, lotus paste, red bean paste, jasmine tea, oolong and lanterns." },
    { month: 10, date: "OCT 01", title: "National Day", cn: "国庆节 - Guoqing Jie", symbol: "国", tag: "Golden Week", summary: "China's National Day starts the Golden Week public holiday.", meaning: "A modern national holiday and one of the year's biggest travel periods.", shelf: "Travel snacks, bottled teas, instant noodles and family-size pantry items." },
    { month: 10, date: "OCT 18", title: "Double Ninth Festival", cn: "重阳节 - Chongyang", symbol: "九", tag: "Longevity", summary: "A day associated with elders, mountain climbing and chrysanthemums.", meaning: "Respect for elders, longevity, autumn climbs and chrysanthemum traditions.", shelf: "Chrysanthemum tea, dried fruit, rice cakes, herbal drinks and gift snacks." },
    { month: 11, date: "NOV 08", title: "Journalists' Day", cn: "记者节 - Jizhe Jie", symbol: "记", tag: "Observance", summary: "A modern professional observance in China's public calendar.", meaning: "Recognizes journalism and media workers.", shelf: "Desk snacks, tea, instant coffee and quick noodle bowls." },
    { month: 12, date: "DEC 22", title: "Winter Solstice", cn: "冬至 - Dongzhi", symbol: "冬", tag: "Tangyuan", summary: "The winter solstice is associated with reunion foods such as tangyuan.", meaning: "The longest night turns toward longer days; round foods symbolize togetherness.", shelf: "Tangyuan, glutinous rice flour, ginger syrup, sesame paste and warming teas." }
  ];

  const EVENT_TRANSLATIONS = {
    "New Year's Day": {
      de: { title: "Neujahrstag", cn: "元旦 - Yuandan", tag: "Feiertag", summary: "Der chinesische Neujahrsfeiertag nach dem gregorianischen Kalender, meist mit kurzer Winterpause.", meaning: "Ein moderner nationaler Feiertag für Erholung, Reisen und den Start ins Kalenderjahr.", shelf: "Tee, Snacks, Geschenkboxen und schnelle Vorratsartikel." },
      zh: { title: "元旦", cn: "公历新年", tag: "法定假日", summary: "中国公历新年的法定假日，也是短暂的冬日休整。", meaning: "这是现代公共假日，适合休息、出行，也标志着新日历年的开始。", shelf: "茶、零食、礼盒，以及快速补齐家中常备食材。" }
    },
    "Laba Festival": {
      de: { title: "Laba-Fest", cn: "腊八节 - Laba", tag: "Laba-Congee", summary: "Der achte Tag des zwölften Mondmonats, bekannt für Laba-Brei und Wintersegen.", meaning: "Ein Auftakt Richtung Neujahr, verbunden mit Ernte, Dankbarkeit und der Vorbereitung auf das Frühlingsfest.", shelf: "Klebreis, rote Bohnen, Erdnüsse, Lotussamen, Jujuben und Getreide." },
      zh: { title: "腊八节", cn: "腊八粥", tag: "腊八粥", summary: "农历腊月初八，常以腊八粥和冬日祈福来迎接年味。", meaning: "它像春节前的信号，和收获、感恩、备年货的传统联系在一起。", shelf: "糯米、红豆、花生、莲子、红枣和杂粮。" }
    },
    "Spring Festival Eve": {
      de: { title: "Vorabend des Frühlingsfests", cn: "除夕 - Chuxi", tag: "Familienessen", summary: "Der Abend des großen Familienessens vor dem Mondneujahr.", meaning: "Die Familie kommt zur wichtigsten Mahlzeit des Jahres zusammen, bevor das neue Jahr begrüßt wird.", shelf: "Hotpot-Basen, Teigblätter für Dumplings, Nudeln, Saucen und festliche Süßigkeiten." },
      zh: { title: "除夕", cn: "团圆饭", tag: "团圆饭", summary: "农历新年前夜，是一年中最重要的团圆饭时间。", meaning: "家人围坐一桌，辞旧迎新，也把来年的祝福放进这顿饭里。", shelf: "火锅底料、饺子皮、面条、酱料和年节糖果。" }
    },
    "Spring Festival": {
      de: { title: "Frühlingsfest", cn: "春节 - Jahr des Feuer-Pferdes", tag: "Mondneujahr", summary: "Familienessen, rote Umschläge, Türspruch-Banner und Löwentänze prägen den ersten Tag des Mondjahres.", meaning: "Neuanfang, Familienzusammenkunft und Glück für das kommende Jahr.", shelf: "Langlebigkeitsnudeln, rote Umschläge, Süßigkeiten, Tee und Hotpot-Zutaten." },
      zh: { title: "春节", cn: "丙午马年", tag: "农历新年", summary: "团圆饭、红包、春联和舞狮，构成农历新年的第一天。", meaning: "春节代表新的开始、家人团聚，以及对新一年好运的祝愿。", shelf: "长寿面、红包、糖果、茶和火锅食材。" }
    },
    "Lantern Festival": {
      de: { title: "Laternenfest", cn: "元宵节 - Yuanxiao", tag: "Laternenabend", summary: "Zum Abschluss der Neujahrszeit gehören Laternen, Rätsel und Tangyuan.", meaning: "Der fünfzehnte Mondtag beendet die Neujahrsfeier mit Licht, Wiedersehen und runden Süßspeisen.", shelf: "Tangyuan, schwarzer Sesam, Erdnussfüllung, Ingwersirup und Papierlaternen." },
      zh: { title: "元宵节", cn: "灯谜与汤圆", tag: "元宵灯会", summary: "春节节期在灯笼、灯谜和汤圆中收尾。", meaning: "农历正月十五以光和团圆结束新年庆祝，圆形食物象征团聚。", shelf: "汤圆、黑芝麻、花生馅、姜糖水和纸灯笼。" }
    },
    "Zhonghe Festival": {
      de: { title: "Zhonghe-Fest", cn: "中和节 - Blauer Drache", tag: "Blauer Drache", summary: "Ein Fest im zweiten Mondmonat, verbunden mit Frühling, Land und Erntewünschen.", meaning: "Traditionell geht es um das Wecken des Drachen und die Bitte um Regen und gute Ernten.", shelf: "Reiskuchen, Frühlingssnacks, Tee und kleine Geschenke aus dem Vorratsregal." },
      zh: { title: "中和节", cn: "青龙节", tag: "青龙", summary: "农历二月的传统节日，和春天、土地与农事祈愿相关。", meaning: "民俗中有唤醒青龙、祈雨和祈求丰收的含义。", shelf: "米糕、春季点心、茶和适合送礼的常备食材。" }
    },
    "Qingming Festival": {
      de: { title: "Qingming-Fest", cn: "清明节 - Tag der Grabpflege", tag: "Ahnengedenken", summary: "Ein Frühlingstag für Ahnengedenken, Friedhofsbesuche und Spaziergänge im Freien.", meaning: "Ahnen erinnern, Gräber pflegen und den frühen Frühling bewusst wahrnehmen.", shelf: "Grüner Tee, Reismehl, Sesam, Frühlingssnacks und einfache Vorratsprodukte für die Familie." },
      zh: { title: "清明节", cn: "扫墓踏青", tag: "祭祖", summary: "清明是春日祭祖、扫墓，也适合外出踏青的日子。", meaning: "这个节日把纪念先人、整理墓地和感受早春联系在一起。", shelf: "绿茶、米粉、芝麻、春季点心和适合家人分享的基础食材。" }
    },
    "Labour Day": {
      de: { title: "Tag der Arbeit", cn: "劳动节 - Laodong Jie", tag: "Feiertag", summary: "Ein nationaler Feiertag und einer der großen Reisezeiträume in China.", meaning: "Ein moderner Feiertag für Arbeit, Erholung und Reisen im eigenen Land.", shelf: "Instantnudeln, Flaschentees, Reisesnacks und Picknick-Zutaten." },
      zh: { title: "劳动节", cn: "五一假期", tag: "法定假日", summary: "五一是中国重要的公共假期，也是全年主要出行时段之一。", meaning: "这是现代劳动者节日，也常被用来休息、短途旅行或家庭聚会。", shelf: "方便面、瓶装茶、旅行零食和野餐常备用品。" }
    },
    "Youth Day": {
      de: { title: "Tag der Jugend", cn: "青年节 - Qingnian Jie", tag: "Jugend", summary: "Ein moderner Gedenktag rund um Jugend, Bildung und die Bewegung des 4. Mai.", meaning: "Er würdigt junge Menschen und einen wichtigen Moment der modernen chinesischen Kulturgeschichte.", shelf: "Milchtee-Sets, Snacks, Süßigkeiten und schnelle Nudeln." },
      zh: { title: "青年节", cn: "五四青年节", tag: "青年", summary: "这个现代纪念日和青年、教育以及五四运动联系在一起。", meaning: "它纪念年轻人，也连接着中国现代文化史中的重要时刻。", shelf: "奶茶套装、零食、糖果和轻松快手的面食。" }
    },
    "Children's Day": {
      de: { title: "Kindertag", cn: "儿童节 - Ertong Jie", tag: "Kinder", summary: "Ein Tag für Kinder, oft mit Aktivitäten in Schule und Familie.", meaning: "Im Mittelpunkt stehen Kinder, Spielen, kleine Geschenke und einfache Feiern.", shelf: "Mochi, Jelly Cups, Pocky, Garnelenchips und Fruchtgetränke." },
      zh: { title: "儿童节", cn: "六一儿童节", tag: "儿童", summary: "儿童节通常在学校和家庭活动中庆祝。", meaning: "这一天围绕孩子、游戏、礼物和轻松的小庆祝展开。", shelf: "麻薯、果冻杯、Pocky、虾片和果味饮料。" }
    },
    "Dragon Boat Festival": {
      de: { title: "Drachenbootfest", cn: "端午节 - Duanwu", tag: "Zongzi-Saison", summary: "Drachenbootrennen, Zongzi und Bräuche rund um Qu Yuan.", meaning: "Das Fest erinnert an Qu Yuan und verbindet sommerliche Schutzbräuche mit Renntraditionen.", shelf: "Zongzi, Klebreis, Bambusblätter, rote Bohnen, Mungbohnen und gesalzenes Eigelb." },
      zh: { title: "端午节", cn: "粽子时节", tag: "粽子", summary: "端午节有龙舟赛、粽子，也和屈原故事及传统习俗有关。", meaning: "它纪念屈原，也包含夏季避邪、护身和竞渡传统。", shelf: "粽子、糯米、粽叶、红豆、绿豆和咸蛋黄。" }
    },
    "CPC Founding Day": {
      de: { title: "Gründungstag der KP Chinas", cn: "建党节 - Jiandang Jie", tag: "Gedenktag", summary: "Ein moderner politischer Gedenktag im offiziellen chinesischen Kalender.", meaning: "Ein offizieller Gedenktag, kein klassisches Familienfest.", shelf: "Geschenktees, Snackboxen und Vorratsprodukte für Treffen." },
      zh: { title: "建党节", cn: "中国共产党成立纪念日", tag: "纪念日", summary: "建党节是中国官方日历中的现代政治纪念日。", meaning: "它属于官方纪念日，并不是传统家庭节日。", shelf: "礼品茶、盒装点心和聚会常备食材。" }
    },
    "Ghost Month Begins": {
      de: { title: "Beginn des Geistermonats", cn: "鬼月 - Gui Yue", tag: "Geistermonat", summary: "Der siebte Mondmonat beginnt, verbunden mit Ahnen- und Geisterbräuchen.", meaning: "Eine Zeit für Opfergaben, Erinnerung und achtsames Verhalten im Volksglauben.", shelf: "Papierwaren für Rituale, soweit verfügbar, dazu Tee, Fruchtsnacks und Reis." },
      zh: { title: "鬼月开始", cn: "农历七月", tag: "鬼月", summary: "农历七月开始，在民俗中和祭祖、祭祀及亡灵习俗有关。", meaning: "这个时期常强调供奉、追思和谨慎的民俗行为。", shelf: "如有供应可选相关纸品，也有茶、水果零食和米。" }
    },
    "Qixi Festival": {
      de: { title: "Qixi-Fest", cn: "七夕节 - Doppel-Sieben", tag: "Qixi", summary: "Oft der chinesische Valentinstag genannt, verbunden mit der Geschichte von Kuhhirte und Weberin.", meaning: "Ein romantisches Fest über Wiedersehen, Sehnsucht und handwerkliches Geschick.", shelf: "Süßigkeiten zum Verschenken, Tee, Mochi, Bonbons und elegante Snackboxen." },
      zh: { title: "七夕节", cn: "牛郎织女", tag: "七夕", summary: "七夕常被称作中国情人节，源自牛郎织女的传说。", meaning: "它讲述相会、思念和巧手，也带有浪漫的节日气氛。", shelf: "适合送礼的甜点、茶、麻薯、糖果和精致零食盒。" }
    },
    "Ghost Festival": {
      de: { title: "Geisterfest", cn: "中元节 - Zhongyuan", tag: "Geisterfest", summary: "Der fünfzehnte Tag des Geistermonats, verbunden mit Opfergaben und Gedenken.", meaning: "Ein Volksbrauch, bei dem man Ahnen und wandernden Geistern Aufmerksamkeit schenkt.", shelf: "Reis, Tee, Obst, Süßigkeiten und einfache Vorratsprodukte für Opfergaben." },
      zh: { title: "中元节", cn: "盂兰盆相关民俗", tag: "中元", summary: "中元节在农历七月十五，和供奉、追思等习俗有关。", meaning: "民俗中会照顾祖先与游魂，表达记念与安抚。", shelf: "米、茶、水果、甜点和适合供奉风格的基础食材。" }
    },
    "Teachers' Day": {
      de: { title: "Lehrertag", cn: "教师节 - Jiaoshi Jie", tag: "Lehrkräfte", summary: "Ein moderner Gedenktag für Lehrkräfte und Bildung.", meaning: "Ein Tag für Respekt, Dankbarkeit und kleine Geschenke an Lehrerinnen und Lehrer.", shelf: "Geschenktees, Kekse, Süßigkeiten und Snackboxen." },
      zh: { title: "教师节", cn: "感谢师恩", tag: "教师", summary: "教师节是表达对老师和教育工作者敬意的现代节日。", meaning: "这一天适合表达尊重、感谢，也常会送上小礼物。", shelf: "礼品茶、饼干、糖果和盒装零食。" }
    },
    "Mid-Autumn Festival": {
      de: { title: "Mondfest", cn: "中秋节 - Mittherbstfest", tag: "Mondkuchen", summary: "Mondkuchen, Laternen und Familienessen unter dem Vollmond.", meaning: "Vollmond, Ernte, Familienzusammenkunft und Wünsche im Licht der Laternen.", shelf: "Mondkuchen, Lotuspaste, rote Bohnenpaste, Jasmintee, Oolong und Laternen." },
      zh: { title: "中秋节", cn: "月圆团圆", tag: "月饼", summary: "中秋节有月饼、灯笼，以及满月下的团圆饭。", meaning: "圆月象征收获、团圆，也承载着家人之间的祝福。", shelf: "月饼、莲蓉、红豆沙、茉莉花茶、乌龙茶和灯笼。" }
    },
    "National Day": {
      de: { title: "Nationalfeiertag", cn: "国庆节 - Guoqing Jie", tag: "Goldene Woche", summary: "Chinas Nationalfeiertag eröffnet die Goldene Woche.", meaning: "Ein moderner nationaler Feiertag und eine der größten Reisezeiten des Jahres.", shelf: "Reisesnacks, Flaschentees, Instantnudeln und Familienpackungen." },
      zh: { title: "国庆节", cn: "黄金周", tag: "黄金周", summary: "国庆节开启中国的黄金周假期。", meaning: "这是现代国家节日，也是全年最重要的出行时段之一。", shelf: "旅行零食、瓶装茶、方便面和家庭装常备食材。" }
    },
    "Double Ninth Festival": {
      de: { title: "Doppel-Neun-Fest", cn: "重阳节 - Chongyang", tag: "Langlebigkeit", summary: "Ein Tag rund um Ältere, Bergsteigen und Chrysanthemen.", meaning: "Respekt vor Älteren, Langlebigkeit, Herbstwanderungen und Chrysanthemen-Traditionen.", shelf: "Chrysanthementee, Trockenfrüchte, Reiskuchen, Kräutergetränke und Snacks zum Verschenken." },
      zh: { title: "重阳节", cn: "敬老与登高", tag: "长寿", summary: "重阳节和敬老、登高、赏菊等秋日习俗相关。", meaning: "它表达对长辈的尊重，也象征长寿、秋游和菊花传统。", shelf: "菊花茶、果干、米糕、草本饮品和礼品零食。" }
    },
    "Journalists' Day": {
      de: { title: "Journalistentag", cn: "记者节 - Jizhe Jie", tag: "Gedenktag", summary: "Ein moderner Gedenktag für einen Berufsstand im öffentlichen Kalender Chinas.", meaning: "Der Tag würdigt Journalismus und Medienschaffende.", shelf: "Schreibtisch-Snacks, Tee, Instantkaffee und schnelle Nudelbowls." },
      zh: { title: "记者节", cn: "新闻工作者日", tag: "纪念日", summary: "记者节是中国公共日历中的现代职业纪念日。", meaning: "它表达对新闻工作和媒体从业者的认可。", shelf: "办公零食、茶、速溶咖啡和快手面碗。" }
    },
    "Winter Solstice": {
      de: { title: "Wintersonnenwende", cn: "冬至 - Dongzhi", tag: "Tangyuan", summary: "Die Wintersonnenwende ist mit Speisen für das Zusammenkommen verbunden, zum Beispiel Tangyuan.", meaning: "Die längste Nacht wendet sich zu längeren Tagen; runde Speisen stehen für Zusammenhalt.", shelf: "Tangyuan, Klebreismehl, Ingwersirup, Sesampaste und wärmende Tees." },
      zh: { title: "冬至", cn: "冬至团圆", tag: "汤圆", summary: "冬至常和汤圆等团圆食物联系在一起。", meaning: "最长的夜晚之后白昼渐长，圆形食物象征团聚。", shelf: "汤圆、糯米粉、姜糖水、芝麻酱和暖身茶。" }
    }
  };

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
  const currentLanguage = () => window.ChooI18n?.getLanguage?.() || "en";
  const currentLocale = () => ({
    en: "en-US",
    de: "de-DE",
    zh: "zh-Hans-CN"
  }[currentLanguage()]);

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

  function eventCopy(event) {
    return { ...event, ...(EVENT_TRANSLATIONS[event.title]?.[currentLanguage()] || {}) };
  }

  function formatEventDate(event) {
    const date = new Date(eventTime(event));
    if (currentLanguage() === "en") {
      return new Intl.DateTimeFormat("en-US", { month: "short", day: "2-digit", timeZone: "UTC" })
        .format(date)
        .replace(",", "")
        .toUpperCase();
    }
    const dayStyle = currentLanguage() === "zh" ? "numeric" : "2-digit";
    return new Intl.DateTimeFormat(currentLocale(), { month: "short", day: dayStyle, timeZone: "UTC" }).format(date);
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
    const copy = eventCopy(event);
    return `
      <li class="ev" data-event-month="${event.month}">
        <span class="ev__symbol" aria-hidden="true">${escapeHtml(event.symbol)}</span>
        <div class="ev__date"><span class="ev__d">${escapeHtml(formatEventDate(event))}</span><span class="ev__y">${EVENT_YEAR}</span><span class="ev__distance">${escapeHtml(dayDistanceLabel(event))}</span></div>
        <button class="ev__toggle" type="button" aria-expanded="false">
          <span class="ev__body">
            <span class="ev__title">${escapeHtml(copy.title)}</span>
            <span class="ev__cn">${escapeHtml(copy.cn)}</span>
            <span class="ev__summary">${escapeHtml(copy.summary)}</span>
          </span>
          <span class="ev__rsvp">${escapeHtml(copy.tag)} <span class="ev__chev" aria-hidden="true">+</span></span>
        </button>
        <div class="ev__details" aria-hidden="true">
          <div class="ev__details-inner">
            <div class="ev__detail"><strong>${escapeHtml(tr("event.meaning"))}</strong><span>${escapeHtml(copy.meaning)}</span></div>
            <div class="ev__detail"><strong>${escapeHtml(tr("event.shelf"))}</strong><span>${escapeHtml(copy.shelf)}</span></div>
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
    if (currentDate) currentDate.textContent = first ? formatEventDate(first) : "";
    if (currentTitle) currentTitle.textContent = first ? eventCopy(first).title : tr("event.noUpcoming");
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

/* ===== Store category buttons ===== */
(function () {
  // Imported from mam-brands-by-origin-2.xlsx. The file has origin data, not shelf/category data.
  const BRANDS_BY_ORIGIN = {
    Japan: ["TOKIMEKI", "KIKKOMAN", "NISSIN", "POCKY", "OBENTO", "HATAKOSEN", "AJINOMOTO", "OTAFUKU", "S&B", "YAMAMORI", "BANDAI", "AYUKO", "HIKARI MISO", "JADE TEMPLE", "ITO EN", "ITSUKI", "JP", "MEIJI", "SANRIO", "KEWPIE", "MORINAGA", "SAKURA", "GENJI", "POKKA", "MARUTOMO", "KIRIN", "BENTO", "NF", "DEATH NOTE", "KOIKEYA", "MEASTY SANRIO", "UHA", "MY HERO ACADEMIA", "KITKAT", "YAMASA", "INAKA", "HATSUNE MIKU", "JUJUTSU KAISEN", "MIYATA", "TOHATO", "GLICO", "SEIKI", "TEA TSUBOICHI", "SAVOUR", "ATOM", "PIGEON BRAND", "RIBON", "KANRO", "JELLY B", "TOKYO DESIGN", "SUKINA", "OBAP", "NITTO", "NATURE", "KADOYA", "FUJIYA", "HINODE", "ICHIEIFOODS", "ATTACK ON TITAN", "KUBOTA", "SANGARIA", "TOMOMASU", "MEASTY", "MIZKAN", "SUNTORY", "BULLDOG", "FUTUBA", "KOH", "WAKASHOU", "HISHIWAEN", "JUNJI ITO", "UJINOTSUYU", "MEJI", "YBC", "BOURBON", "YOKIMCHI", "CALBEE", "SAKUMA", "CHO CHO", "NETFLIX", "NEGISAN", "HAKUBAKU", "LINE FRIENDS BT", "POKEMON", "MEITO", "SOUBRY", "MOMOYA", "TAISHO", "Meito", "KitKat", "JP HARAYA", "SANTAPAI", "SPRING HAPPINESS", "HOUSE", "MISAKO", "SHIMONITA", "DAISHIN", "KASUGAI", "NIHON KAISUI", "NINBEN", "KAMADA", "HAYAKAWA", "SAILOR MOON", "KAORIYA", "BERSERK", "DETECTIVE CONAN", "ABYSTYLE", "SEKIRYU", "GARASHA", "MEIZHOUSHIKE", "TSUBOICHI", "ENSKY", "YAMAMA", "YUME NISHIKI", "YAMATO", "Cocolabu", "OTSUKA", "SUZUKIKOSEN", "MASTER SAUCE BBQ", "HAYIN", "NAMU", "NOBEL", "KURATA VEGAN", "SHINZU", "KOTOBUKI", "MARUTO", "SANTAPEI", "YAMAGEN", "WEL PAC", "SHIRAKIKU", "TAKESAN", "KONBU", "SHIN", "HANAMARUKI", "PINE", "DOLLYS", "SENJAKUAME", "KABAYA FOODS", "JP DAISHO", "MARUMIYA", "ORIHIRO", "DAILY", "ASAHI", "SHIMAYA", "HARUKA", "JADE TENMPLE", "INUYASHA", "FAIRY TAIL", "DR STONE", "HUNTER X HUNTER", "HACHI", "WAKAME", "MIYAMOTO", "TOILET-BOUND HANAKO-KUN", "HAIKYU", "CHAINSAW MAN", "PUELLA MAGI MADOKA MAGICA", "YUZUYA", "KIZAMI", "Miyata", "UBENESS", "WADAKYU", "POCARI"],
    "South Korea": ["SAMYANG", "SEMPIO", "NONGSHIM", "NBH", "OTTOGI", "QLOVE", "LOTTE", "BIBIGO", "YOPOKKI", "ORION", "KOREAN STREET", "PRB", "ALLGROO", "PEPERO", "CHOI'S", "DELAFFE", "JONGGA", "ENNJOI", "YOUNGPOONG", "WANG", "OTTOGI JIN", "PALDO", "HAITAI", "SUGARLOLO", "CHAJU", "CHUNGJUNGONE", "HY BTS", "O'FOOD", "SUNYOUNG", "DONGWON", "JOYTOFU", "CROWN", "CJW", "HBAF", "KWANGCHUN", "CJ", "PROBUNSIK", "SAMLIP", "WOONGJIN", "DELIEF", "HY", "DAEBAK", "EVERYDAZE", "ENNJOI DIY", "PORORO", "AJUMMA REPUBLIC", "BINGGRAE", "JANGSOO", "BLACK PINK", "JLD", "YANGBAN", "ASSI", "SUKHEE HAESOO", "NONGSHIM TAEKYUNG", "SEOJU", "SWEETMONSTER", "HWAGWABANG", "JANEJANE", "RICHY JINJU", "OTTOGI KIMCHI", "BANCHANDAJI", "SINGSONG", "SUNFLOWER", "OFOOD", "SQUID GAME", "BT21", "KR DEMISODA", "BTS", "WOONGJING FOODS", "GARAK", "SEOUL", "MISORI", "ILKWANG", "HARUHARU WONDER", "ANUA", "TORRIDEN", "KOREAN FOOD STYLE", "HARIM", "HANSUNG", "OBOK", "HEART", "POONGNYUN", "KWANGDONG", "ACHIM", "BOSUNG", "JINYANG", "YOONDONG", "HEARTY SPOON", "NBH KR", "LIMGANE", "SAJO", "PULMUONE", "KWANGCHEON", "Ottogi", "OUR HOME", "DANGNYANGI", "PINK FONG", "KOREA SEAFOOD"],
    China: ["LKK", "HAOLIYUAN", "HAIDILAO", "GOLDEN TURTLE", "ITA", "CHACHA", "Y&L", "BAIJIA", "WEILONG", "YULIN", "GOLDEN SAIL", "SHAN WAI SHAN", "MASTER KONG", "WU JIANG", "BAISHANZU", "SANFENG", "HADAY", "YUMEI", "CHI FOREST", "MOUNTAINS", "JML", "QDOL", "FARMER", "GANGFU", "WU CHUNG", "HIGH UP", "TIAN HU SHAN", "JING YI GEN", "KLKW", "WANT WANT QQ", "DOUBLE PANDA", "CN NFS", "CN WFY", "LV ZHENG FOOD", "KAILO", "SLINMY", "FOREWAY", "BEAR COMING", "LITTLE SHEEP", "JXJ", "GUA", "CN XXZ", "YJX FISH HOME BRAND", "CITYAROMA", "GZSL", "SHIH", "YUANFU", "WEIJUTE", "ITA-SAN", "LIU BIJU", "SHUITA", "HBS BBQ", "JIABAO", "COZZO", "HAGOROMO", "JEFI", "HOT CHIP", "SELECO", "DFSY", "WAHAHA AD", "MIPOPO", "BORAMBIO", "MAI WA", "KOOL", "YJPZ", "WEIPA", "WANDERFORT", "CHUNSI", "GOOSUN", "CRISPY FRAGRANCE GARDEN", "EAGLE COIN", "KR JARDIN", "POP MART", "FIVE HOLES", "WANGZHIHE", "QIU SHI", "SZECHUAN TIAN FU", "HUATIAN", "BESTORE", "WINGMAN", "SHENGYAO", "NARCISSUS", "BACO", "AKUAN", "NUTRI SNACK", "GY", "ZHONGJING", "HUAYANG", "LUOBAWANG", "LOUBAWANG", "YOU NI MIAN", "YIZHI", "MAOXIONG", "FTW", "AODA", "MABU", "ALLOY", "WAN JA SHAN", "FROZZ BT", "CN HUANG FEI HONG", "BESTORE BBQ", "DALI", "CN", "YILE", "LJ BROTHER HOTPOT", "KIREI", "PA", "CWZ", "AMOY", "WELLTOP", "CLH", "OBENTI", "HUANG LONG", "CHANGLISHENG", "KING OF PLUM", "GIANT TREE", "FLCK", "DOUBLE RINGS", "DIAMOND", "SUNWAVE", "LJ BROTHER HOTPOT BASE", "NONGSAO", "GE XIANG WENG", "FUXING", "CUIHONG", "CN LYX", "JINZAI", "WSY", "XIA", "CHIP", "JING FANG", "LJ BROTHER", "GREAT WALL", "GANYUAN", "DOUBLE COIN", "FAMOUS HOUSE", "CAMEL", "JINMI", "HENG SHOU TANG", "TYM", "CN BAIJIA", "CHIN", "LIUPO", "JIA FAN", "SOYSPRING", "CN YON HO", "DOYAL", "CHUANNAN", "UNIEAGLE", "OS", "NING PAGODA", "WEIYUEN", "LONGLIFE", "PANGNIU FOOD", "TAIGANG", "SHUANG LE", "SHENG XIANG ZHEN", "Chin Chin", "JIU LONG ZHAI", "HENG SHUN", "CHUN GUANG", "LONGKOU", "JIADUBAO", "FIRE BULL", "LITTLE MOONS", "YESHU", "WANG LAO JI", "COCO", "MALING", "SPESHOW", "STIK", "SUIRYU", "DAOXIANGCUN", "HAOXIANGNI", "TEANNAGOO"],
    Taiwan: ["WANT WANT", "TW", "TW Q", "UNIF", "TW QQ", "HT GOLDEN LABEL", "CHI SHENG", "TTL", "TW FH", "SZU SHEN PO", "GOLDEN LILY", "GOLDEN BOWL", "GOLDLEAF", "TW BULLHEAD", "GREENMAX", "WEI LIH", "ROYAL FAMILY", "GOLD LEAF", "GOLDEN LABEL", "TIN LUNG BRAND", "TW GGE", "TW IMEI", "BULLHEAD", "TAISUN"],
    Thailand: ["FLYING GOOSE", "HEALTHY BOY", "MAMA", "THAI DANCER", "AHG", "PANTAI", "COCK BRAND", "LOBO", "ROYAL ORIENT", "OISHI", "AROY", "THAI PRIDE", "MEGACHEF", "FISH WELL", "ROYAL THAI", "COZY", "MONIKA", "CALYPSO", "ASIAN BOY", "POR KWAN", "ROYAL TIGER", "SMILING FISH", "RANONG TEA", "AROY-D", "MAEPRANOM", "GOLDEN CHEF", "UNCLE BARN", "TARO", "RANONG", "TIPAROS", "X.O", "CARABAO", "MAE KRUA", "GREENDAY", "SQUID", "NIN JIOM", "GOLD PLUM", "JUBJUB", "MALI FLOWER", "NANG FAH", "RED BULL", "NAZIBA", "KOH-KAE", "NICE CHOICE", "AMPAWA", "KHAO SHONG", "KASET", "MAE NAPA", "MATAMUN", "SOUTH WORD", "JUMBO BRAND", "PORK KWAN", "ROYAL LION", "ROSNEUNG", "KUAKON", "SHINE FARM", "TWIN ELEPHANT", "CAP", "SKYBIRD", "KHY", "CHATRAMUNE", "MAE", "SAWAT", "PEAK", "UNCLE BARN'S", "NATUREGIFT"],
    Vietnam: ["BAMBOO TREE", "DH FOODS", "CUNG DINH", "ACECOOK", "VFRESH", "CHOLIMEX", "BAO LONG", "NONGLAMFOOD", "JHFOODS", "WENDJOE", "AN NHIEN", "VINH THUAN", "TAN HIEP PHAT", "CHAOKOH", "MINH LONG", "TOAN NAM", "TAM DUC", "RNONG", "THV", "SA GIANG", "TRUNG NGUYEN", "VINALY", "VIET NAM", "VF", "UNICA", "PENTA", "X", "MOTHER"],
    Indonesia: ["INDOMIE", "BALI KITCHEN", "PONDAN", "SUREE", "UDANG MAS", "KOPIKO", "GS", "GINGERBON", "KAKI TIGA", "BAIWEIZHAI", "ASLI", "BAKERDREAM", "KOEPOE", "ABC"],
    "Malaysia / Singapore": ["TIGER BALM", "SAU TAO", "PRIMA TASTE", "GOLD KILI", "HBS", "SIX FORTUNE", "SUPER", "DRINHO", "TAIYO", "MEE CHUN", "WAI WAI", "OH AIK GUAN", "C2", "TRA CHANG", "MAN CHONG LOONG", "YEO'S", "PATCHUN", "CHEE SENG", "DELI"],
    Philippines: ["MAMA SITA", "LADY BOBA", "CENTURY", "PROM", "LUCKY ME", "NUTSHOLIC", "DATU PUTI", "MARCA PINA", "SILVER SWAN", "OISHI MARTY", "UFC", "DAGUPAN", "ARGENTINA", "PINOY KITCHEN", "SKIN", "CHI CHI", "HAR HAR", "NAGARAYA", "SAVOY", "BOY BAWANG", "OK", "SPOON", "SESALI", "CARMEN", "MANG TOMAS", "FIL", "JC", "KOLOKO", "OK SNACKS", "UBE", "PILLOWS UBE", "REGENT"],
    "India / South Asia": ["TRS", "ASHOKA", "PATAK", "RUBICON", "ENCONA", "HEM", "SWAD", "PATAKS", "MAAZA", "Shan", "TILDA", "KTC", "MEHEK", "AMUTHA", "TEMPLE", "BIRDS", "RAJAH"]
  };

  function uniqueBrands(brands) {
    const seen = new Set();
    return brands.filter((brand) => {
      if (!brand || seen.has(brand)) return false;
      seen.add(brand);
      return true;
    });
  }

  const ALL_BRANDS = uniqueBrands(Object.values(BRANDS_BY_ORIGIN).flat());
  const ALL_BRAND_SET = new Set(ALL_BRANDS);

  function brandList(brands) {
    return uniqueBrands(brands.filter((brand) => ALL_BRAND_SET.has(brand)));
  }

  function originBrands(origins) {
    return uniqueBrands(origins.flatMap((origin) => BRANDS_BY_ORIGIN[origin] || []));
  }

  function remainingBrands(groups) {
    const used = new Set(groups.flat());
    return ALL_BRANDS.filter((brand) => !used.has(brand));
  }

  const BRAND_SEEDS = {
    instant: ["NISSIN", "SAMYANG", "NONGSHIM", "OTTOGI", "MAMA", "YOPOKKI", "YOUNGPOONG", "OTTOGI JIN", "PALDO", "YANGBAN", "PROBUNSIK", "DAEBAK", "OUR HOME", "BAIJIA", "MASTER KONG", "JML", "AKUAN", "LUOBAWANG", "LOUBAWANG", "YOU NI MIAN", "CN BAIJIA", "HAIDILAO", "LITTLE SHEEP", "UNIF", "WEI LIH", "CUNG DINH", "ACECOOK", "INDOMIE", "PRIMA TASTE", "WAI WAI", "SAU TAO", "LUCKY ME", "ASHOKA", "PATAK", "PATAKS"],
    snacks: ["TOKIMEKI", "POCKY", "HAOLIYUAN", "CHACHA", "WEILONG", "WANT WANT", "WANT WANT QQ", "LOTTE", "ORION", "PEPERO", "HAITAI", "CROWN", "HBAF", "SEOJU", "SWEETMONSTER", "HWAGWABANG", "MEIJI", "MORINAGA", "FUJIYA", "KOIKEYA", "UHA", "KITKAT", "TOHATO", "GLICO", "RIBON", "KANRO", "JELLY B", "KASUGAI", "YBC", "BOURBON", "CALBEE", "SAKUMA", "MEITO", "NOBEL", "PINE", "SENJAKUAME", "KABAYA FOODS", "ROYAL FAMILY", "JIABAO", "HOT CHIP", "BESTORE", "NUTRI SNACK", "CN HUANG FEI HONG", "GANYUAN", "LITTLE MOONS", "TARO", "GREENDAY", "KOH-KAE", "KHAO SHONG", "NICE CHOICE", "NAGARAYA", "BOY BAWANG", "KOPIKO", "GINGERBON", "PILLOWS UBE", "REGENT"],
    drinks: ["HATAKOSEN", "ITO EN", "POKKA", "KIRIN", "SANGARIA", "TOMOMASU", "SUNTORY", "TEA TSUBOICHI", "HISHIWAEN", "TSUBOICHI", "OTSUKA", "ASAHI", "POCARI", "QLOVE", "DELAFFE", "WOONGJIN", "BINGGRAE", "KR DEMISODA", "KWANGDONG", "CHI FOREST", "WAHAHA AD", "JIADUBAO", "WANG LAO JI", "COCO", "YESHU", "OISHI", "RANONG TEA", "RANONG", "CARABAO", "RED BULL", "CHATRAMUNE", "VFRESH", "TAN HIEP PHAT", "TRUNG NGUYEN", "GOLD KILI", "SUPER", "DRINHO", "C2", "YEO'S", "RUBICON", "MAAZA"],
    sauces: ["KIKKOMAN", "LKK", "FLYING GOOSE", "HEALTHY BOY", "AHG", "PANTAI", "LOBO", "MEGACHEF", "MAEPRANOM", "TIPAROS", "MAE KRUA", "SQUID", "AMPAWA", "POR KWAN", "MAMA SITA", "DATU PUTI", "SILVER SWAN", "UFC", "MANG TOMAS", "SEMPIO", "CHUNGJUNGONE", "O'FOOD", "OFOOD", "CJW", "OTAFUKU", "S&B", "YAMAMORI", "KEWPIE", "YAMASA", "KADOYA", "MIZKAN", "BULLDOG", "HINODE", "NINBEN", "KAMADA", "TAKESAN", "HACHI", "HADAY", "WAN JA SHAN", "WANGZHIHE", "SZECHUAN TIAN FU", "ZHONGJING", "CUIHONG", "LIUPO", "HENG SHUN", "AMOY", "BULLHEAD", "TW BULLHEAD", "DH FOODS", "CHOLIMEX", "BAO LONG", "BALI KITCHEN", "SUREE", "ABC", "TRS", "PATAK", "PATAKS", "ENCONA", "RAJAH", "Shan"],
    noodlesRice: ["OBENTO", "THAI DANCER", "BAMBOO TREE", "SAU TAO", "SIX FORTUNE", "WAI WAI", "TILDA", "ROYAL TIGER", "MALI FLOWER", "KASET", "COCK BRAND", "THAI PRIDE", "GOLDEN SAIL", "LONGKOU", "YUME NISHIKI", "SEKIRYU", "HAKUBAKU", "ITSUKI", "INAKA", "YAMAGEN", "WEL PAC", "SHIRAKIKU", "UNIF", "WEI LIH", "GOLDEN BOWL", "GOLDEN LILY", "MEE CHUN", "TRA CHANG"],
    pantry: ["AJINOMOTO", "HIKARI MISO", "MARUTOMO", "KONBU", "WAKAME", "HANAMARUKI", "MOMOYA", "MIYATA", "SHIMAYA", "DONGWON", "LADY BOBA", "CENTURY", "DAGUPAN", "ARGENTINA", "PONDAN", "KOEPOE", "UDANG MAS", "SWAD", "KTC", "SANRIO", "BANDAI", "POP MART", "TOKYO DESIGN"]
  };

  const BRAND_GROUPS = (() => {
    const instant = brandList(BRAND_SEEDS.instant);
    const snacks = brandList(BRAND_SEEDS.snacks);
    const drinks = brandList(BRAND_SEEDS.drinks);
    const sauces = brandList(BRAND_SEEDS.sauces);
    const noodlesRice = brandList(BRAND_SEEDS.noodlesRice);
    const pantry = uniqueBrands([...brandList(BRAND_SEEDS.pantry), ...remainingBrands([instant, snacks, drinks, sauces, noodlesRice])]);
    const rice = brandList(["TILDA", "ROYAL TIGER", "MALI FLOWER", "KASET", "COCK BRAND", "THAI PRIDE", "GOLDEN SAIL", "YUME NISHIKI", "SEKIRYU", "OBENTO", "THAI DANCER", "TRA CHANG", "SIX FORTUNE", "BAMBOO TREE", "HINODE"]);
    const drinksAlcohol = uniqueBrands([...drinks, ...brandList(["ASAHI", "KIRIN", "SUNTORY", "TTL", "GOLD LEAF"])]);
    const fresh = brandList(["JOYTOFU", "SOYSPRING", "PULMUONE", "KURATA VEGAN", "BIBIGO", "OTTOGI KIMCHI", "JONGGA", "WANG", "SHIRAKIKU", "ROYAL FAMILY", "SAMLIP", "ALLGROO", "HANAMARUKI"]);
    const frozen = brandList(["BIBIGO", "WANG", "PULMUONE", "AJINOMOTO", "SHIRAKIKU", "SAMLIP", "LITTLE MOONS", "ROYAL FAMILY", "CP"]);
    const tea = brandList(["ITO EN", "POKKA", "KIRIN", "SANGARIA", "TEA TSUBOICHI", "HISHIWAEN", "TSUBOICHI", "JIADUBAO", "WANG LAO JI", "OISHI", "RANONG TEA", "GOLD KILI", "CHATRAMUNE", "KWANGDONG"]);
    const tcm = brandList(["NIN JIOM", "TIGER BALM", "YULIN", "KWANGDONG", "JIADUBAO", "WANG LAO JI", "HENG SHOU TANG", "KAKI TIGA"]);

    return {
      instant,
      snacks,
      drinks,
      drinksAlcohol,
      sauces,
      rice,
      noodlesRice,
      pantry,
      fresh,
      frozen,
      tea,
      tcm,
      chineseClassics: brandList(["LKK", "HAOLIYUAN", "HAIDILAO", "GOLDEN TURTLE"]),
      vegan: brandList(["JOYTOFU", "PULMUONE", "SOYSPRING", "KIKKOMAN", "LKK", "TILDA", "KURATA VEGAN", "HIKARI MISO", "HANAMARUKI", "KONBU", "WAKAME", "LONGKOU", "BAMBOO TREE", "THAI DANCER", "TRS", "SWAD", "ASHOKA", "COCK BRAND", "AROY-D", "CHAOKOH", "SIX FORTUNE", "YUME NISHIKI", "SEKIRYU"]),
      hotPot: brandList(["HAIDILAO", "LITTLE SHEEP"]),
      spicy: brandList(["SAMYANG", "NONGSHIM", "MAMA", "FLYING GOOSE", "WEILONG", "CJ", "CHUNGJUNGONE", "O'FOOD", "OFOOD", "S&B", "SZECHUAN TIAN FU", "CUIHONG", "LIUPO", "CN HUANG FEI HONG", "HOT CHIP", "HAIDILAO", "LITTLE SHEEP", "MAEPRANOM", "PANTAI", "LOBO", "ENCONA", "YUMEI"]),
      gifts: brandList(["SANRIO", "BANDAI", "TOKYO DESIGN", "HAIDILAO", "DAOXIANGCUN", "HAOXIANGNI", "TEANNAGOO"])
    };
  })();

  const STORE_CATEGORIES = [
    {
      id: "instant",
      image: "assets/categories/instant.webp",
      imageInverted: "assets/categories/instan-inverte.webp",
      cardImage: "assets/categories/covers/instant.webp",
      desktopCardImage: "assets/categories/desktop/instant-desktop.webp",
      brands: BRAND_GROUPS.instant,
      copy: {
        en: { title: "Instant Noodles", items: ["Ramen & cup noodles", "Korean instant noodles", "Udon, pho & glass noodles", "Rice cake cups & quick bowls"] },
        de: { title: "Instant Nudeln", items: ["Ramen & Cup Noodles", "Koreanische Instantnudeln", "Udon, Pho & Glasnudeln", "Ricecake-Cups & schnelle Bowls"] },
        zh: { title: "方便面", items: ["拉面与杯面", "韩式方便面", "乌冬、河粉与粉丝", "年糕杯与快捷碗餐"] }
      }
    },
    {
      id: "snacks",
      image: "assets/categories/snacks-sweets.webp",
      imageInverted: "assets/categories/snacks-inverte.webp",
      cardImage: "assets/categories/covers/snack-sweet.webp",
      desktopCardImage: "assets/categories/desktop/snack-desktop.webp",
      brands: BRAND_GROUPS.snacks,
      copy: {
        en: { title: "Snacks & Sweets", items: ["Chips & savory snacks", "Candy, gummies & chocolate", "Cookies, Pocky & wafers", "Jelly, boba & dessert cups"] },
        de: { title: "Snacks & Süßigkeiten", items: ["Chips & Knabbereien", "Bonbons, Fruchtgummi & Schokolade", "Kekse, Pocky & Waffeln", "Jelly, Boba & Dessertbecher"] },
        zh: { title: "零食与甜点", items: ["薯片与咸味零食", "糖果、软糖与巧克力", "饼干、Pocky 与威化", "果冻、波霸与甜品杯"] }
      }
    },
    {
      id: "sauces",
      image: "assets/categories/sauces-seasoning.webp",
      imageInverted: "assets/categories/sauce-inverte.webp",
      cardImage: "assets/categories/covers/sauce.webp",
      desktopCardImage: "assets/categories/desktop/sauce-desktop.webp",
      brands: BRAND_GROUPS.sauces,
      copy: {
        en: { title: "Sauces & Seasoning", items: ["Soy sauce, fish sauce & vinegar", "Chili oil, gochujang & curry pastes", "Sesame oil & cooking oils", "Spices, blends & seasoning pastes"] },
        de: { title: "Saucen & Gewürze", items: ["Sojasauce, Fischsauce & Essig", "Chiliöl, Gochujang & Currypasten", "Sesamöl & Kochöle", "Gewürze, Mischungen & Würzpasten"] },
        zh: { title: "酱料与调味", items: ["酱油、鱼露与醋", "辣椒油、韩式辣酱与咖喱酱", "芝麻油与烹调用油", "香料、调味粉与酱料"] }
      }
    },
    {
      id: "rice",
      image: "assets/categories/noodles-rice.webp",
      imageInverted: "assets/categories/noodle-inverte.webp",
      cardImage: "assets/categories/covers/rice.webp",
      desktopCardImage: "assets/categories/desktop/rice-desktop.webp",
      brands: BRAND_GROUPS.rice,
      copy: {
        en: { title: "Rice", items: ["Jasmine rice & basmati rice", "Sushi rice & glutinous rice", "Cooked rice & rice cakes", "Rice paper & rice noodles"] },
        de: { title: "Reis", items: ["Jasminreis & Basmatireis", "Sushireis & Klebreis", "Gekochter Reis & Reiskuchen", "Reispapier & Reisnudeln"] },
        zh: { title: "米类", items: ["茉莉香米与巴斯马蒂米", "寿司米与糯米", "即食米饭与年糕", "米纸与米粉"] }
      }
    },
    {
      id: "drinks",
      image: "assets/categories/drinks.webp",
      imageInverted: "assets/categories/drinks-inverte.webp",
      cardImage: "assets/categories/covers/drinks.webp",
      desktopCardImage: "assets/categories/desktop/drink-desktop.webp",
      brands: BRAND_GROUPS.drinksAlcohol,
      copy: {
        en: { title: "Drinks & Alcohol", items: ["Soft drinks & fruit drinks", "Milk drinks, coffee & bubble tea", "Soju, sake & Asian wine", "Beer & alcohol-free drinks"] },
        de: { title: "Getränke & Alkohol", items: ["Softdrinks & Fruchtgetränke", "Milchdrinks, Kaffee & Bubble Tea", "Soju, Sake & asiatischer Wein", "Bier & alkoholfreie Drinks"] },
        zh: { title: "饮品与酒类", items: ["汽水与果味饮料", "奶饮、咖啡与珍珠奶茶", "烧酒、清酒与亚洲酒", "啤酒与无酒精饮品"] }
      }
    },
    {
      id: "fresh",
      image: "assets/categories/frish-logo-black.webp",
      cardImage: "assets/categories/covers/cooled.webp",
      desktopCardImage: "assets/categories/desktop/chilled-desktop.webp",
      brands: BRAND_GROUPS.fresh,
      copy: {
        en: { title: "Fresh & Chilled", items: ["Vegetables & herbs", "Tofu & soy products", "Buns, bao & dumpling wrappers", "Mochi & chilled desserts"] },
        de: { title: "Frisch & Kühlware", items: ["Gemüse & Kräuter", "Tofu & Sojaprodukte", "Buns, Bao & Dumpling-Teig", "Mochi & gekühlte Desserts"] },
        zh: { title: "新鲜与冷藏", items: ["蔬菜与香草", "豆腐与豆制品", "包子、刈包与饺子皮", "麻薯与冷藏甜点"] }
      }
    },
    {
      id: "frozen",
      image: "assets/categories/tk-logo-black.webp",
      cardImage: "assets/categories/covers/frozen.webp",
      desktopCardImage: "assets/categories/desktop/frozen-dekstop.webp",
      brands: BRAND_GROUPS.frozen,
      copy: {
        en: { title: "Frozen", items: ["Dumplings & gyoza", "Bao, buns & mochi ice cream", "Fish, seafood & meat", "Frozen vegetables & ready meals"] },
        de: { title: "Tiefkühl", items: ["Dumplings & Gyoza", "Bao, Buns & Mochi-Eis", "Fisch, Seafood & Fleisch", "Tiefkühlgemüse & Fertiggerichte"] },
        zh: { title: "冷冻食品", items: ["饺子与煎饺", "包子、馒头与麻薯冰淇淋", "鱼、海鲜与肉类", "冷冻蔬菜与即食餐"] }
      }
    },
    {
      id: "vegan",
      image: "assets/categories/vegan-logo-black.webp",
      cardImage: "assets/categories/covers/vegan.webp",
      desktopCardImage: "assets/categories/desktop/vegan-desktop.webp",
      brands: BRAND_GROUPS.vegan,
      copy: {
        en: { title: "Vegan Products", items: ["Tofu, seitan & bean products", "Vegan sauces & pastes", "Plant-based snacks & sweets", "Rice, noodles & cooking basics"] },
        de: { title: "Vegane Produkte", items: ["Tofu, Seitan & Bohnenprodukte", "Vegane Saucen & Pasten", "Pflanzliche Snacks & Süßigkeiten", "Reis, Nudeln & Kochbasics"] },
        zh: { title: "纯素产品", items: ["豆腐、面筋与豆制品", "纯素酱料与调味酱", "植物性零食与甜点", "米、面与烹饪基础食材"] }
      }
    },
    {
      id: "tea",
      image: "assets/categories/tee-logo-black.webp",
      cardImage: "assets/categories/covers/tee.webp",
      desktopCardImage: "assets/categories/desktop/tea-dekstop.webp",
      brands: BRAND_GROUPS.tea,
      copy: {
        en: { title: "Tea", items: ["Green tea, jasmine tea & oolong", "Matcha & milk tea", "Herbal and flower teas", "Tea sets & gift teas"] },
        de: { title: "Tee", items: ["Grüner Tee, Jasmintee & Oolong", "Matcha & Milchtee", "Kräuter- und Blütentees", "Teesets & Geschenktee"] },
        zh: { title: "茶", items: ["绿茶、茉莉茶与乌龙茶", "抹茶与奶茶", "草本茶与花茶", "茶具与礼盒茶"] }
      }
    },
    {
      id: "tcm",
      image: "assets/categories/tcm-logo-black.webp",
      cardImage: "assets/categories/covers/tcm.webp",
      desktopCardImage: "assets/categories/desktop/tcm-desktop.webp",
      brands: BRAND_GROUPS.tcm,
      copy: {
        en: { title: "TCM Products", items: ["Herbal teas & tonics", "Cough syrups & throat remedies", "Balms, ointments & topical care", "Warming drinks & medicinal pastes"] },
        de: { title: "TCM-Produkte", items: ["Kräutertees & Tonics", "Hustensäfte & Halsmittel", "Balsame, Salben & äußerliche Anwendungen", "Wärmende Getränke & Heilpasten"] },
        zh: { title: "中式养生产品", items: ["草本茶与补品", "止咳糖浆与润喉产品", "药膏、油膏与外用护理", "暖饮与药膳膏方"] }
      }
    },
    {
      id: "gifts",
      image: "assets/categories/gifts.webp",
      imageInverted: "assets/categories/gitfs-inverte.webp",
      cardImage: "assets/categories/covers/gift.webp",
      desktopCardImage: "assets/categories/desktop/gift-desktop.webp",
      brands: BRAND_GROUPS.gifts,
      copy: {
        en: { title: "Gift Sets", items: ["Tea & snack sets", "Character goods & small extras", "Tableware & kitchen tools", "Seasonal gift ideas"] },
        de: { title: "Geschenksets", items: ["Tee- & Snack-Sets", "Character-Ware & kleine Extras", "Geschirr & Küchenhelfer", "Saisonale Geschenkideen"] },
        zh: { title: "礼品套装", items: ["茶与零食礼盒", "角色商品与小物", "餐具与厨房工具", "季节礼品灵感"] }
      }
    }
  ];

  const STORE_HIGHLIGHTS = [
    {
      id: "chinese-classics",
      brands: BRAND_GROUPS.chineseClassics,
      copy: {
        en: {
          title: "Chinese Classics",
          intro: "A shortcut for classic Chinese home cooking, spread across sauces, rice, fresh and instant shelves.",
          items: ["Light & dark soy sauce", "Black vinegar & chili oil", "Shaoxing wine & sesame oil", "Rice, noodles & dumpling wrappers"]
        },
        de: {
          title: "Chinesische Klassiker",
          intro: "Eine Abkürzung für klassisch chinesisches Kochen, verteilt über Saucen, Reis, Frischware und Instant.",
          items: ["Helle & dunkle Sojasauce", "Schwarzer Essig & Chiliöl", "Shaoxing-Wein & Sesamöl", "Reis, Nudeln & Dumpling-Teig"]
        },
        zh: {
          title: "中式经典",
          intro: "适合经典中式家常菜的快捷选择，分布在酱料、米类、冷藏和方便面区域。",
          items: ["生抽与老抽", "黑醋与辣椒油", "绍兴酒与芝麻油", "米、面与饺子皮"]
        }
      }
    },
    {
      id: "hot-pot",
      image: "assets/categories/hotpot-logo-black.webp",
      brands: BRAND_GROUPS.hotPot,
      copy: {
        en: {
          title: "Hot Pot",
          intro: "Everything for a table full of broth, dips, noodles and add-ins.",
          items: ["Soup bases & chili pastes", "Dipping sauces & sesame paste", "Glass noodles, rice cakes & tofu", "Mushrooms, seaweed & canned vegetables"]
        },
        de: {
          title: "Hot Pot",
          intro: "Alles für einen Tisch mit Brühe, Dips, Nudeln und Einlagen.",
          items: ["Suppenbasen & Chilipasten", "Dip-Saucen & Sesampaste", "Glasnudeln, Reiskuchen & Tofu", "Pilze, Algen & Gemüsekonserven"]
        },
        zh: {
          title: "火锅",
          intro: "火锅汤底、蘸料、面类和配菜的一站式选择。",
          items: ["火锅底料与辣酱", "蘸料与芝麻酱", "粉丝、年糕与豆腐", "蘑菇、海藻与罐装蔬菜"]
        }
      }
    },
    {
      id: "spicy",
      image: "assets/categories/scharf-logo-black.webp",
      brands: BRAND_GROUPS.spicy,
      copy: {
        en: {
          title: "Spicy",
          intro: "For chili heat, numbing pepper and sharp condiments across the shelves.",
          items: ["Chili crisp & chili oil", "Gochujang & kimchi sauces", "Sichuan pepper & spice mixes", "Spicy ramen & snacks"]
        },
        de: {
          title: "Scharf",
          intro: "Für Chili-Schärfe, Sichuan-Prickeln und würzige Condiments aus mehreren Regalen.",
          items: ["Chili-Crisp & Chiliöl", "Gochujang & Kimchi-Saucen", "Sichuanpfeffer & Gewürzmischungen", "Scharfer Ramen & Snacks"]
        },
        zh: {
          title: "辣味选择",
          intro: "适合寻找辣椒香、麻味和重口调味的快捷选择。",
          items: ["辣椒脆与辣椒油", "韩式辣酱与泡菜酱", "花椒与香料混合", "辣味拉面与零食"]
        }
      }
    }
  ];

  const SVG_NS = "http://www.w3.org/2000/svg";

  const STORE_SELECTIONS = [...STORE_CATEGORIES, ...STORE_HIGHLIGHTS];
  const editorialGrid = document.querySelector("[data-store-editorial-grid]");
  const editorial = editorialGrid?.closest(".store-editorial");
  const editorialChips = document.querySelector("[data-store-editorial-chips]");
  const editorialControls = document.querySelector("[data-store-editorial-controls]");
  const editorialPrev = document.querySelector("[data-store-editorial-prev]");
  const editorialNext = document.querySelector("[data-store-editorial-next]");
  const editorialPage = document.querySelector("[data-store-editorial-page]");
  const modal = document.getElementById("store-category-modal");
  if (!modal || !editorialGrid) return;

  const modalIcon = modal.querySelector("[data-store-category-modal-icon]");
  const modalTitle = modal.querySelector("[data-store-category-modal-title]");
  const modalCount = modal.querySelector("[data-store-category-modal-count]");
  const modalIntro = modal.querySelector("[data-store-category-modal-intro]");
  const modalList = modal.querySelector("[data-store-category-modal-list]");
  const modalBrandsLabel = modal.querySelector("[data-store-category-modal-brands-label]");
  const modalBrands = modal.querySelector("[data-store-category-modal-brands]");
  const closeButton = modal.querySelector(".store-category-modal__close");
  const closeTargets = modal.querySelectorAll("[data-store-category-close]");

  let activeId = null;
  let lastFocus = null;
  let lockedScrollY = 0;
  let editorialPageIndex = 0;
  let editorialAutoTimer = 0;
  let editorialSlideTimer = 0;
  let editorialAutoPaused = false;
  let editorialAutoDirection = 1;
  let editorialWheelLocked = false;
  let editorialIsAnimating = false;
  const editorialPageSize = 6;
  const editorialAutoDelay = 5600;
  const editorialSlideDuration = 280;
  const editorialWheelThreshold = 36;
  const editorialDesktopQuery = window.matchMedia("(min-width: 721px)");
  const editorialMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  function getLang() {
    return window.ChooI18n?.getLanguage?.() || "en";
  }

  function tr(key, params) {
    return window.ChooI18n?.t?.(key, params) || key;
  }

  function getCopy(category) {
    return category.copy[getLang()] || category.copy.en;
  }

  function createSvgElement(tagName, attributes = {}) {
    const element = document.createElementNS(SVG_NS, tagName);
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, String(value));
    });
    return element;
  }

  function appendShape(svg, tagName, attributes = {}) {
    const shape = createSvgElement(tagName, {
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2.8",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      ...attributes
    });
    svg.append(shape);
  }

  function createCategoryIcon(id) {
    const svg = createSvgElement("svg", {
      class: "category-icon-svg",
      viewBox: "0 0 64 64",
      "aria-hidden": "true",
      focusable: "false"
    });

    if (id === "instant") {
      appendShape(svg, "path", { d: "M22 29h20l-3 22H25l-3-22Z" });
      appendShape(svg, "path", { d: "M20 29h24" });
      appendShape(svg, "path", { d: "M25 37c4-3 8 3 12 0" });
      appendShape(svg, "path", { d: "M28 15c-4 4 4 6 0 10" });
      appendShape(svg, "path", { d: "M36 12c-4 4 4 7 0 11" });
      appendShape(svg, "path", { d: "M44 16c-4 4 4 6 0 10" });
    } else if (id === "snacks") {
      appendShape(svg, "path", { d: "M18 24l7-6h14l7 6v20l-7 6H25l-7-6V24Z" });
      appendShape(svg, "path", { d: "M25 18l4 8" });
      appendShape(svg, "path", { d: "M39 18l-4 8" });
      appendShape(svg, "circle", { cx: "32", cy: "37", r: "6" });
    } else if (id === "drinks") {
      appendShape(svg, "path", { d: "M25 14h14" });
      appendShape(svg, "path", { d: "M28 14v10l-5 8v18h18V32l-5-8V14" });
      appendShape(svg, "path", { d: "M23 34h18" });
      appendShape(svg, "path", { d: "M29 42h6" });
    } else if (id === "sauces") {
      appendShape(svg, "rect", { x: "26", y: "15", width: "12", height: "8", rx: "1.5" });
      appendShape(svg, "path", { d: "M24 23h16l3 27H21l3-27Z" });
      appendShape(svg, "path", { d: "M25 34h14" });
      appendShape(svg, "path", { d: "M30 41h4" });
    } else if (id === "rice" || id === "noodles-rice") {
      appendShape(svg, "path", { d: "M19 34h26l-4 14H23l-4-14Z" });
      appendShape(svg, "path", { d: "M17 34h30" });
      appendShape(svg, "path", { d: "M25 29c4-3 10-3 14 0" });
      appendShape(svg, "ellipse", { cx: "25", cy: "22", rx: "3", ry: "6" });
      appendShape(svg, "ellipse", { cx: "33", cy: "20", rx: "3", ry: "6" });
      appendShape(svg, "ellipse", { cx: "41", cy: "22", rx: "3", ry: "6" });
    } else if (id === "fresh") {
      appendShape(svg, "path", { d: "M18 34h28l-4 16H22l-4-16Z" });
      appendShape(svg, "path", { d: "M22 34l5-10h10l5 10" });
      appendShape(svg, "path", { d: "M29 25c-7-7-2-13 7-13 0 9-4 13-7 13Z" });
      appendShape(svg, "path", { d: "M35 25c5-5 10-5 13-1-5 5-10 6-13 1Z" });
    } else if (id === "frozen") {
      appendShape(svg, "path", { d: "M32 13v38" });
      appendShape(svg, "path", { d: "M16 22l32 20" });
      appendShape(svg, "path", { d: "M48 22L16 42" });
      appendShape(svg, "path", { d: "M25 18l7 6 7-6" });
      appendShape(svg, "path", { d: "M25 46l7-6 7 6" });
      appendShape(svg, "path", { d: "M18 31l9-2-2-9" });
      appendShape(svg, "path", { d: "M46 33l-9 2 2 9" });
    } else if (id === "tea") {
      appendShape(svg, "path", { d: "M20 31h24v9c0 7-5 11-12 11s-12-4-12-11v-9Z" });
      appendShape(svg, "path", { d: "M44 34h3c4 0 6 3 5 6-1 4-4 6-8 5" });
      appendShape(svg, "path", { d: "M19 51h27" });
      appendShape(svg, "path", { d: "M27 23c-4-4-2-9 5-10 0 6-2 9-5 10Z" });
      appendShape(svg, "path", { d: "M35 24c1-6 5-9 11-8-2 6-6 9-11 8Z" });
    } else if (id === "tcm") {
      appendShape(svg, "path", { d: "M25 17h14" });
      appendShape(svg, "path", { d: "M27 17v9l-6 7v18h22V33l-6-7v-9" });
      appendShape(svg, "path", { d: "M24 36h16" });
      appendShape(svg, "path", { d: "M28 43h8" });
      appendShape(svg, "path", { d: "M18 20c7 0 11 4 12 10-7 0-11-4-12-10Z" });
      appendShape(svg, "path", { d: "M46 19c-7 1-11 5-12 11 7-1 11-5 12-11Z" });
    } else if (id === "pantry") {
      appendShape(svg, "path", { d: "M22 22l8-8h14v38H22V22Z" });
      appendShape(svg, "path", { d: "M30 14v38" });
      appendShape(svg, "path", { d: "M22 22h22" });
      appendShape(svg, "path", { d: "M27 34h12" });
      appendShape(svg, "path", { d: "M27 41h8" });
    } else if (id === "chinese-classics") {
      appendShape(svg, "path", { d: "M19 34h26l-4 14H23l-4-14Z" });
      appendShape(svg, "path", { d: "M17 34h30" });
      appendShape(svg, "path", { d: "M22 22l26-8" });
      appendShape(svg, "path", { d: "M24 26l26-8" });
      appendShape(svg, "path", { d: "M28 39c4-3 8 3 12 0" });
    } else if (id === "vegan") {
      appendShape(svg, "path", { d: "M18 43c13 0 27-12 28-27-16 1-29 10-29 25 0 7 5 11 12 11" });
      appendShape(svg, "path", { d: "M23 43c5-9 12-16 23-27" });
      appendShape(svg, "path", { d: "M27 31c-4-5-8-7-13-7 1 10 6 16 15 17" });
    } else if (id === "hot-pot") {
      appendShape(svg, "path", { d: "M19 34h26l-3 16H22l-3-16Z" });
      appendShape(svg, "path", { d: "M17 34h30" });
      appendShape(svg, "path", { d: "M22 29h20" });
      appendShape(svg, "path", { d: "M26 18c-4 4 4 6 0 10" });
      appendShape(svg, "path", { d: "M35 16c-4 4 4 7 0 11" });
      appendShape(svg, "path", { d: "M44 19c-4 4 4 6 0 9" });
    } else if (id === "spicy") {
      appendShape(svg, "path", { d: "M22 42c9 4 20-1 24-12 2-6-1-11-6-12-1 10-8 18-18 24Z" });
      appendShape(svg, "path", { d: "M40 18c-1-5 2-8 7-8" });
      appendShape(svg, "path", { d: "M25 43c3 7 12 8 18 1" });
    } else if (id === "gifts") {
      appendShape(svg, "rect", { x: "18", y: "27", width: "28", height: "24", rx: "2" });
      appendShape(svg, "path", { d: "M16 27h32v-7H16v7Z" });
      appendShape(svg, "path", { d: "M32 20v31" });
      appendShape(svg, "path", { d: "M25 20c-6-5-1-11 7 0" });
      appendShape(svg, "path", { d: "M39 20c6-5 1-11-7 0" });
    } else {
      appendShape(svg, "circle", { cx: "29", cy: "25", r: "10" });
      appendShape(svg, "path", { d: "M15 49l14-15" });
      appendShape(svg, "path", { d: "M42 16v34" });
      appendShape(svg, "path", { d: "M36 20h12" });
      appendShape(svg, "path", { d: "M36 27h12" });
    }

    return svg;
  }

  function createCategoryVisual(category) {
    if (category.image) {
      const image = document.createElement("img");
      image.className = "category-icon-img";
      image.src = category.image;
      image.alt = "";
      image.decoding = "async";
      image.loading = "lazy";
      image.onerror = () => {
        image.replaceWith(createCategoryIcon(category.id));
      };
      return image;
    }

    return createCategoryIcon(category.id);
  }

  function createTileVisual(category) {
    const src = category.image || category.imageInverted;
    if (src) {
      const image = document.createElement("img");
      image.className = "category-icon-img";
      image.src = src;
      image.alt = "";
      image.decoding = "async";
      image.loading = "lazy";
      image.onerror = () => {
        if (image.dataset.fallback || !category.imageInverted) {
          image.replaceWith(createCategoryIcon(category.id));
          return;
        }
        image.dataset.fallback = "1";
        image.src = category.imageInverted;
      };
      return image;
    }
    return createCategoryIcon(category.id);
  }

  function brandSlug(brand) {
    return String(brand)
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  const BRAND_LOGO_FILES = {
    "AHG": "AHG.webp",
    "AJINOMOTO": "ajinomot.webp",
    "BANDAI": "bandai.svg.webp",
    "BIBIGO": "bibigo.webp",
    "CHACHA": "chacha.webp",
    "COCK BRAND": "cock-brand.webp",
    "DAOXIANGCUN": "Daoxiangcun.webp",
    "FLYING GOOSE": "flyinggoose.webp",
    "GOLDEN TURTLE": "Golden-Turtle.webp",
    "HAIDILAO": "haidilao.webp",
    "HAOLIYUAN": "haoliyuan.webp",
    "HAOXIANGNI": "haoxiangni.webp",
    "HATAKOSEN": "hata.webp",
    "HEALTHY BOY": "healthyboybrand.webp",
    "ITO EN": "ITOEN.webp",
    "JIADUBAO": "JIADUBAO.webp",
    "JOYTOFU": "joytofu.webp",
    "KASET": "kaset.webp",
    "KIKKOMAN": "kikkoman.webp",
    "KIRIN": "kirinibachi.webp",
    "KWANGDONG": "kwangdong.webp",
    "KURATA VEGAN": "kurata.webp",
    "LITTLE SHEEP": "little-sheep.webp",
    "LKK": "lkk.webp",
    "MALI FLOWER": "maliflower.webp",
    "MAMA": "mama.webp",
    "NIN JIOM": "nin-jiom.webp",
    "NISSIN": "nissin-logo.webp",
    "NONGSHIM": "nongshim.webp",
    "OTTOGI": "ottogi.webp",
    "POCKY": "pocky.webp",
    "POKKA": "pokka.webp",
    "PULMUONE": "pulmuone.webp",
    "ROYAL TIGER": "royaltiger.webp",
    "SAMYANG": "samyang.webp",
    "SANRIO": "Sanrio.webp",
    "SANGARIA": "sangaria.webp",
    "SHIRAKIKU": "shirakiku.webp",
    "SOYSPRING": "soyspring.webp",
    "TEANNAGOO": "teannagoo.webp",
    "TILDA": "tilda.webp",
    "TOKIMEKI": "tokimeki.webp",
    "TOKYO DESIGN": "tokoyo-design.webp",
    "TSUBOICHI": "tsubochi.webp",
    "TEA TSUBOICHI": "tsubochi.webp",
    "WANG": "wang.webp",
    "WEILONG": "weilong.webp",
    "YULIN": "yulin.webp",
    "TIGER BALM": "tiger-balm.webp"
  };

  function brandLogoSrc(brand) {
    const file = BRAND_LOGO_FILES[brand];
    return file ? `assets/marken/${file}` : null;
  }

  const BRAND_LOGO_SCALES = {
    "MAMA": 1.51,
    "SAMYANG": 1.05,
    "HAOLIYUAN": 1.54,
    "POCKY": 1.37,
    "KIKKOMAN": 1.62,
    "LKK": 1.40,
    "FLYING GOOSE": 1.62,
    "HEALTHY BOY": 1.62,
    "AHG": 1.40,
    "TILDA": 1.40,
    "ROYAL TIGER": 1.40,
    "MALI FLOWER": 1.40,
    "BIBIGO": 1.38,
    "WANG": 0.90,
    "PULMUONE": 1.44,
    "SHIRAKIKU": 1.32,
    "JOYTOFU": 1.40,
    "SOYSPRING": 1.40,
    "ITO EN": 1.50,
    "POKKA": 1.60,
    "KIRIN": 1.40,
    "SANGARIA": 1.50,
    "TEA TSUBOICHI": 1.20,
    "TSUBOICHI": 1.20,
    "KURATA VEGAN": 1.40,
    "TOKIMEKI": 1.30,
    "WEILONG": 1.40,
    "KWANGDONG": 1.24,
    "YULIN": 1.50,
    "TIGER BALM": 1.40,
    "LITTLE SHEEP": 1.60,
    "HAIDILAO": 1.20,
    "HAOXIANGNI": 1.60,
    "DAOXIANGCUN": 1.25,
    "BANDAI": 0.95,
    "TOKYO DESIGN": 1.20,
    "GOLDEN TURTLE": 1.28
  };

  function brandInitials(brand) {
    const parts = String(brand)
      .split(/[\s·\-_/]+/)
      .filter(Boolean);
    if (!parts.length) return "?";
    if (parts.length === 1) {
      const word = parts[0];
      if (word.length <= 3) return word.toUpperCase();
      return word.slice(0, 2).toUpperCase();
    }
    return parts.slice(0, 3).map((part) => part[0]).join("").toUpperCase();
  }

  function createBrandTile(brand) {
    const tile = document.createElement("li");
    tile.className = "brand-tile";
    tile.setAttribute("title", brand);

    const mark = document.createElement("span");
    mark.className = "brand-tile__mark";
    mark.setAttribute("aria-hidden", "true");

    const initials = brandInitials(brand);
    const initialSpan = document.createElement("span");
    initialSpan.className = "brand-tile__initials";
    initialSpan.textContent = initials;
    if (initials.length >= 3) initialSpan.classList.add("brand-tile__initials--small");
    mark.append(initialSpan);

    const logoSrc = brandLogoSrc(brand);
    if (logoSrc) {
      const img = document.createElement("img");
      img.className = "brand-tile__logo";
      img.src = logoSrc;
      img.alt = brand;
      img.decoding = "async";
      img.loading = "lazy";
      const scale = BRAND_LOGO_SCALES[brand];
      if (scale) img.style.transform = `scale(${scale})`;
      img.onerror = () => { img.remove(); };
      img.onload = () => {
        mark.classList.add("brand-tile__mark--has-logo");
        initialSpan.hidden = true;
      };
      mark.append(img);
    }

    const name = document.createElement("span");
    name.className = "brand-tile__name";
    name.textContent = brand;

    tile.append(mark, name);
    return tile;
  }

  function buildBrandPreview(brands, sampleSize = 3) {
    if (!brands || !brands.length) return "";
    const sample = brands.slice(0, sampleSize).join(" · ");
    const remaining = Math.max(brands.length - sampleSize, 0);
    if (remaining <= 0) return sample;
    return tr("categories.brandPreview", { brands: sample, count: remaining });
  }

  function getEditorialTotalPages() {
    return Math.max(Math.ceil(STORE_CATEGORIES.length / editorialPageSize), 1);
  }

  function isEditorialCarouselActive() {
    return editorialDesktopQuery.matches && STORE_CATEGORIES.length > editorialPageSize;
  }

  function canAnimateEditorialPage() {
    return isEditorialCarouselActive() && !editorialMotionQuery.matches;
  }

  function clearEditorialSlideState() {
    if (editorialSlideTimer) {
      window.clearTimeout(editorialSlideTimer);
      editorialSlideTimer = 0;
    }
    editorialIsAnimating = false;
    editorialGrid.classList.remove("is-slide-deck", "is-slide-active");
    editorialGrid.removeAttribute("data-slide-direction");
    editorialGrid.style.height = "";
  }

  function getEditorialVisibleCategories(pageIndex = editorialPageIndex) {
    if (!isEditorialCarouselActive()) return STORE_CATEGORIES;
    const start = pageIndex * editorialPageSize;
    return STORE_CATEGORIES.slice(start, start + editorialPageSize);
  }

  function createEditorialTile(category) {
    const copy = getCopy(category);
    const button = document.createElement("button");
    const media = document.createElement("span");
    const body = document.createElement("span");
    const name = document.createElement("span");
    const sub = document.createElement("span");

    button.type = "button";
    button.className = "tile";
    if (category.cardImage || category.desktopCardImage) button.classList.add("tile--cover");
    button.dataset.storeEditorial = category.id;
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute("aria-controls", "store-category-modal");
    button.setAttribute("aria-label", tr("categories.open", { category: copy.title }));

    media.className = "tile__media";
    media.append(createTileVisual(category));
    if (category.cardImage) {
      const cover = document.createElement("img");
      cover.className = "tile__cover tile__cover--mobile";
      cover.src = category.cardImage;
      cover.alt = "";
      cover.decoding = "async";
      cover.loading = "lazy";
      cover.onerror = () => {
        if (!category.desktopCardImage) button.classList.remove("tile--cover");
        cover.remove();
      };
      button.append(cover);
    }
    if (category.desktopCardImage) {
      const desktopCover = document.createElement("img");
      desktopCover.className = "tile__cover tile__cover--desktop";
      desktopCover.src = category.desktopCardImage;
      desktopCover.alt = "";
      desktopCover.decoding = "async";
      desktopCover.loading = "lazy";
      desktopCover.onerror = () => {
        desktopCover.remove();
      };
      button.append(desktopCover);
    }

    body.className = "tile__body";
    name.className = "tile__name";
    name.textContent = copy.title;

    sub.className = "tile__sub";
    sub.textContent = buildBrandPreview(category.brands, 2);

    body.append(name, sub);
    button.append(media, body);
    button.addEventListener("click", () => openModal(category.id, button));
    return button;
  }

  function createEditorialSlidePage(categories, type) {
    const page = document.createElement("div");
    page.className = `store-editorial__slide-page store-editorial__slide-page--${type}`;
    categories.forEach((category) => {
      page.append(createEditorialTile(category));
    });
    return page;
  }

  function renderEditorialGrid() {
    if (!editorialGrid) return;
    clearEditorialSlideState();
    editorialGrid.textContent = "";
    editorialGrid.setAttribute("aria-label", tr("categories.tablist"));

    const useCarousel = isEditorialCarouselActive();
    const totalPages = useCarousel ? getEditorialTotalPages() : 1;
    editorialPageIndex = Math.min(editorialPageIndex, totalPages - 1);
    const visibleCategories = getEditorialVisibleCategories();

    if (editorialControls) editorialControls.hidden = !useCarousel;
    if (editorialPrev) {
      editorialPrev.hidden = !useCarousel;
      editorialPrev.disabled = editorialPageIndex === 0;
      editorialPrev.setAttribute("aria-label", tr("categories.carouselPrev"));
    }
    if (editorialNext) {
      editorialNext.hidden = !useCarousel;
      editorialNext.disabled = editorialPageIndex >= totalPages - 1;
      editorialNext.setAttribute("aria-label", tr("categories.carouselNext"));
    }
    if (editorialPage) editorialPage.textContent = `${editorialPageIndex + 1} / ${totalPages}`;

    visibleCategories.forEach((category) => {
      editorialGrid.append(createEditorialTile(category));
    });
  }

  function renderEditorialChips() {
    if (!editorialChips) return;
    editorialChips.textContent = "";
    editorialChips.setAttribute("aria-label", tr("categories.featuredAria"));

    STORE_HIGHLIGHTS.forEach((highlight) => {
      const copy = getCopy(highlight);
      const button = document.createElement("button");
      const icon = document.createElement("span");
      const name = document.createElement("span");

      button.type = "button";
      button.className = "store-highlight store-highlight--editorial";
      button.dataset.storeEditorialPick = highlight.id;
      button.setAttribute("aria-haspopup", "dialog");
      button.setAttribute("aria-controls", "store-category-modal");
      button.setAttribute("aria-label", tr("categories.open", { category: copy.title }));

      icon.className = "store-highlight__icon";
      icon.append(highlight.image ? createCategoryVisual(highlight) : createCategoryIcon(highlight.id));

      name.className = "store-highlight__name";
      name.textContent = copy.title;

      button.append(icon, name);
      button.addEventListener("click", () => openModal(highlight.id, button));
      editorialChips.append(button);
    });
  }

  function setEditorialPage(nextPage, options = {}) {
    const { wrap = false, resetAuto = true, animate = true } = options;
    if (editorialIsAnimating) return;
    const totalPages = getEditorialTotalPages();
    const previousPage = editorialPageIndex;
    const targetPage = wrap
      ? (nextPage + totalPages) % totalPages
      : Math.max(0, Math.min(nextPage, totalPages - 1));
    if (targetPage === previousPage) {
      if (resetAuto) restartEditorialAuto();
      return;
    }
    const direction = targetPage > previousPage ? "next" : "prev";
    const useAnimation = animate && canAnimateEditorialPage();

    function updateAutoDirection() {
      if (targetPage >= totalPages - 1) {
        editorialAutoDirection = -1;
      } else if (targetPage <= 0) {
        editorialAutoDirection = 1;
      }
    }

    function applyPage() {
      editorialPageIndex = targetPage;
      updateAutoDirection();
      renderEditorialGrid();
      if (resetAuto) restartEditorialAuto();
    }

    if (!useAnimation) {
      applyPage();
      return;
    }

    stopEditorialAuto();
    clearEditorialSlideState();
    editorialIsAnimating = true;
    editorialGrid.style.height = `${editorialGrid.offsetHeight}px`;
    editorialGrid.textContent = "";
    editorialGrid.dataset.slideDirection = direction;
    editorialGrid.classList.add("is-slide-deck");
    editorialGrid.append(
      createEditorialSlidePage(getEditorialVisibleCategories(previousPage), "current"),
      createEditorialSlidePage(getEditorialVisibleCategories(targetPage), "incoming")
    );
    window.requestAnimationFrame(() => {
      editorialGrid.classList.add("is-slide-active");
    });
    editorialSlideTimer = window.setTimeout(applyPage, editorialSlideDuration);
  }

  function stopEditorialAuto() {
    if (!editorialAutoTimer) return;
    window.clearInterval(editorialAutoTimer);
    editorialAutoTimer = 0;
  }

  function startEditorialAuto() {
    stopEditorialAuto();
    if (!isEditorialCarouselActive() || editorialAutoPaused || !modal.hidden) return;
    editorialAutoTimer = window.setInterval(() => {
      if (!isEditorialCarouselActive() || editorialAutoPaused || !modal.hidden) return;
      const totalPages = getEditorialTotalPages();
      let nextPage = editorialPageIndex + editorialAutoDirection;
      if (nextPage >= totalPages) {
        editorialAutoDirection = -1;
        nextPage = editorialPageIndex - 1;
      } else if (nextPage < 0) {
        editorialAutoDirection = 1;
        nextPage = editorialPageIndex + 1;
      }
      setEditorialPage(nextPage, { resetAuto: false });
    }, editorialAutoDelay);
  }

  function restartEditorialAuto() {
    stopEditorialAuto();
    startEditorialAuto();
  }

  function setEditorialAutoPaused(paused) {
    editorialAutoPaused = paused;
    if (paused) {
      stopEditorialAuto();
    } else {
      startEditorialAuto();
    }
  }

  function handleEditorialWheel(event) {
    if (!isEditorialCarouselActive() || editorialWheelLocked) return;
    const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY) && Math.abs(event.deltaX) > editorialWheelThreshold;
    if (!horizontal) return;

    event.preventDefault();
    editorialWheelLocked = true;
    setEditorialPage(editorialPageIndex + (event.deltaX > 0 ? 1 : -1));
    window.setTimeout(() => {
      editorialWheelLocked = false;
    }, 520);
  }

  function renderModal() {
    if (!activeId || !modalIcon || !modalTitle || !modalCount || !modalList) return;
    const category = STORE_SELECTIONS.find((entry) => entry.id === activeId) || STORE_CATEGORIES[0];
    const copy = getCopy(category);

    if (closeButton) closeButton.setAttribute("aria-label", tr("categories.close"));
    modalIcon.textContent = "";
    modalIcon.append(createCategoryVisual(category));
    modalTitle.textContent = copy.title;
    modalCount.textContent = tr("categories.itemCount", { count: copy.items.length });
    if (modalIntro) modalIntro.textContent = copy.intro || tr("categories.modalIntro");
    modalList.textContent = "";

    copy.items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      modalList.append(listItem);
    });

    if (modalBrands && modalBrandsLabel) {
      modalBrands.textContent = "";
      modalBrands.classList.add("brand-tile-grid");
      const brandLimit = category.id === "gifts" ? 8 : 5;
      const brands = (category.brands || []).slice(0, brandLimit);
      if (brands.length) {
        modalBrandsLabel.textContent = tr("categories.brandsLabel");
        modalBrandsLabel.hidden = false;
        modalBrands.hidden = false;
        brands.forEach((brand) => {
          modalBrands.append(createBrandTile(brand));
        });
      } else {
        modalBrandsLabel.hidden = true;
        modalBrands.hidden = true;
      }
    }
  }

  function lockPageScroll() {
    if (document.body.classList.contains("store-category-modal-open")) return;
    lockedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    document.documentElement.classList.add("store-category-modal-open");
    document.body.classList.add("store-category-modal-open");
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.right = "0";
    document.body.style.left = "0";
    document.body.style.width = "100%";
  }

  function unlockPageScroll() {
    const targetScrollY = lockedScrollY;
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    document.documentElement.classList.remove("store-category-modal-open");
    document.body.classList.remove("store-category-modal-open");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.right = "";
    document.body.style.left = "";
    document.body.style.width = "";
    try {
      window.scrollTo(0, targetScrollY);
    } catch (error) {
      document.documentElement.scrollTop = targetScrollY;
      document.body.scrollTop = targetScrollY;
    }
    lockedScrollY = 0;
    window.requestAnimationFrame(() => {
      html.style.scrollBehavior = previousScrollBehavior;
    });
  }

  function openModal(id, sourceButton) {
    if (!STORE_SELECTIONS.some((category) => category.id === id)) return;
    stopEditorialAuto();
    activeId = id;
    lastFocus = sourceButton || document.activeElement;
    renderModal();
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    lockPageScroll();
    window.requestAnimationFrame(() => closeButton?.focus());
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    try {
      unlockPageScroll();
    } catch (error) {
      document.documentElement.classList.remove("store-category-modal-open");
      document.body.classList.remove("store-category-modal-open");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.right = "";
      document.body.style.left = "";
      document.body.style.width = "";
      lockedScrollY = 0;
    }
    activeId = null;
    if (lastFocus && document.contains(lastFocus)) {
      lastFocus.focus();
    }
    lastFocus = null;
    startEditorialAuto();
  }

  closeTargets.forEach((target) => {
    target.addEventListener("click", (event) => {
      event.preventDefault();
      closeModal();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (modal.hidden) return;
    if (event.key === "Escape") {
      closeModal();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [...modal.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])")]
      .filter((element) => !element.hasAttribute("disabled"));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  editorialPrev?.addEventListener("click", () => setEditorialPage(editorialPageIndex - 1));
  editorialNext?.addEventListener("click", () => setEditorialPage(editorialPageIndex + 1));
  editorialGrid.addEventListener("wheel", handleEditorialWheel, { passive: false });
  editorial?.addEventListener("mouseenter", () => setEditorialAutoPaused(true));
  editorial?.addEventListener("mouseleave", () => setEditorialAutoPaused(false));
  editorial?.addEventListener("focusin", () => setEditorialAutoPaused(true));
  editorial?.addEventListener("focusout", () => {
    window.requestAnimationFrame(() => {
      if (!editorial.contains(document.activeElement)) setEditorialAutoPaused(false);
    });
  });

  function handleEditorialViewportChange() {
    editorialPageIndex = 0;
    editorialAutoDirection = 1;
    renderEditorialGrid();
    restartEditorialAuto();
  }

  if (typeof editorialDesktopQuery.addEventListener === "function") {
    editorialDesktopQuery.addEventListener("change", handleEditorialViewportChange);
  } else if (typeof editorialDesktopQuery.addListener === "function") {
    editorialDesktopQuery.addListener(handleEditorialViewportChange);
  }

  window.ChooI18n?.onChange(() => {
    renderEditorialGrid();
    renderEditorialChips();
    if (activeId) renderModal();
  });
  renderEditorialGrid();
  renderEditorialChips();
  startEditorialAuto();
})();

/* ===== Student-band parallax ===== */
(function () {
  const band = document.querySelector(".student-band");
  const bg = band?.querySelector("[data-parallax]");
  if (!band || !bg) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const strength = 0.18;
  let ticking = false;

  function update() {
    ticking = false;
    const rect = band.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    if (rect.bottom < -200 || rect.top > viewportH + 200) return;
    const center = rect.top + rect.height / 2;
    const delta = center - viewportH / 2;
    const maxTravel = rect.height * 0.15;
    const raw = -delta * strength;
    const offset = Math.max(-maxTravel, Math.min(maxTravel, raw));
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


/* Fresh — mobile carousel auto-advance */
(() => {
  const carousel = document.querySelector("[data-fresh-carousel]");
  if (!carousel) return;
  const track = carousel.querySelector("[data-fresh-track]");
  const bar = carousel.querySelector("[data-fresh-progress-bar]");
  const dots = [...carousel.querySelectorAll("[data-fresh-dot]")];
  if (!track) return;
  const cards = [...track.children];
  if (cards.length < 2) return;

  const DURATION = 10000;
  const mq = window.matchMedia("(max-width: 880px)");
  let index = 0;
  let timer = null;
  let inView = false;

  function setIndex(i) {
    index = ((i % cards.length) + cards.length) % cards.length;
    track.style.setProperty("--fresh-i", String(index));
    dots.forEach((dot, di) => {
      const on = di === index;
      dot.classList.toggle("is-on", on);
      dot.setAttribute("aria-selected", on ? "true" : "false");
    });
  }

  function clearProgress() {
    if (!bar) return;
    bar.style.transition = "none";
    bar.style.width = "0%";
  }

  function runProgress() {
    if (!bar) return;
    bar.style.transition = "none";
    bar.style.width = "0%";
    // force reflow so the new transition picks up the 0% start
    void bar.offsetWidth;
    bar.style.transition = `width ${DURATION}ms linear`;
    bar.style.width = "100%";
  }

  function start() {
    stop();
    if (!mq.matches || !inView) return;
    runProgress();
    timer = window.setTimeout(() => {
      setIndex(index + 1);
      start();
    }, DURATION);
  }

  function stop() {
    if (timer) { window.clearTimeout(timer); timer = null; }
    clearProgress();
  }

  dots.forEach((dot, di) => {
    dot.addEventListener("click", () => {
      setIndex(di);
      start();
    });
  });

  /* Swipe (pointer events — touch + mouse drag) */
  const viewport = carousel.querySelector(".fresh__viewport") || carousel;
  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let dx = 0;
  let axisLocked = false;
  let dragging = false;

  function endDrag(commit) {
    if (pointerId === null) return;
    try { viewport.releasePointerCapture(pointerId); } catch (_) {}
    pointerId = null;
    const wasDragging = dragging;
    dragging = false;
    track.classList.remove("is-dragging");
    track.style.removeProperty("--fresh-drag");
    if (commit && wasDragging) {
      const w = viewport.clientWidth || track.clientWidth || 1;
      const threshold = Math.max(40, w * 0.18);
      if (dx <= -threshold) setIndex(index + 1);
      else if (dx >= threshold) setIndex(index - 1);
    }
    dx = 0;
    if (mq.matches && inView) start();
  }

  viewport.addEventListener("pointerdown", (event) => {
    if (!mq.matches || pointerId !== null) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    dx = 0;
    axisLocked = false;
    dragging = false;
    stop();
    try { viewport.setPointerCapture(event.pointerId); } catch (_) {}
  });

  viewport.addEventListener("pointermove", (event) => {
    if (pointerId !== event.pointerId) return;
    const ddx = event.clientX - startX;
    const ddy = event.clientY - startY;
    if (!axisLocked) {
      if (Math.abs(ddx) < 6 && Math.abs(ddy) < 6) return;
      axisLocked = true;
      if (Math.abs(ddy) > Math.abs(ddx)) {
        endDrag(false);
        return;
      }
      dragging = true;
      track.classList.add("is-dragging");
    }
    if (!dragging) return;
    if (event.cancelable) event.preventDefault();
    dx = ddx;
    track.style.setProperty("--fresh-drag", `${dx}px`);
  });

  viewport.addEventListener("pointerup", () => endDrag(true));
  viewport.addEventListener("pointercancel", () => endDrag(false));

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      inView = e.isIntersecting;
      if (inView) start();
      else stop();
    }
  }, { threshold: 0.35 });
  io.observe(carousel);

  const onMQ = () => {
    if (mq.matches) {
      track.style.setProperty("--fresh-i", String(index));
      if (inView) start();
    } else {
      stop();
      track.style.removeProperty("--fresh-i");
    }
  };
  if (typeof mq.addEventListener === "function") mq.addEventListener("change", onMQ);
  else if (typeof mq.addListener === "function") mq.addListener(onMQ);
  onMQ();
})();

