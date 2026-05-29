export type Lang = "en" | "de" | "zh";

export const SUPPORTED_LANGS: Lang[] = ["en", "de", "zh"];

export function normalizeLang(input: string | null | undefined): Lang {
  const v = (input || "").toLowerCase().slice(0, 2);
  return v === "de" || v === "zh" ? v : "en";
}

interface MetaCopy {
  title: string;
  description: string;
  ogLocale: string;
  htmlLang: string;
}

export const META: Record<Lang, MetaCopy> = {
  en: {
    title: "Choo Foodstore — Asian Supermarket in Vienna 1060 (Naschmarkt) | Snacks, Sauces, Noodles",
    description: "Asian supermarket on Linke Wienzeile 54, Vienna 1060 — next to Naschmarkt. 3,000+ products: noodles, sauces, snacks, rice, fresh & frozen. Wolt & foodora delivery.",
    ogLocale: "en_US",
    htmlLang: "en",
  },
  de: {
    title: "Choo Foodstore — Asia Supermarkt Wien 1060 am Naschmarkt | Nudeln, Saucen, Snacks",
    description: "Asia Supermarkt an der Linken Wienzeile 54, 1060 Wien — direkt am Naschmarkt. Über 3.000 Produkte: Instantnudeln, Saucen, Snacks, Reis, Frischware. Lieferung mit Wolt & foodora.",
    ogLocale: "de_AT",
    htmlLang: "de",
  },
  zh: {
    title: "Choo 亚洲超市 — 维也纳 1060 区，纳什市场旁 | 方便面、酱料、零食",
    description: "维也纳 1060 区 Linke Wienzeile 54 号亚洲超市，紧邻纳什市场。3000 多种产品：方便面、酱料、零食、米、新鲜与冷冻。支持 Wolt 与 foodora 送货。",
    ogLocale: "zh_CN",
    htmlLang: "zh",
  },
};

interface CategorySnapshot {
  id: string;
  title: Record<Lang, string>;
  items: Record<Lang, string[]>;
  brands: string[];
}

export const CATEGORIES: CategorySnapshot[] = [
  {
    id: "instant",
    title: { en: "Instant Noodles", de: "Instant Nudeln", zh: "方便面" },
    items: {
      en: ["Ramen & cup noodles", "Korean instant noodles", "Udon, pho & glass noodles", "Rice cake cups & quick bowls"],
      de: ["Ramen & Cup Noodles", "Koreanische Instantnudeln", "Udon, Pho & Glasnudeln", "Ricecake-Cups & schnelle Bowls"],
      zh: ["拉面与杯面", "韩式方便面", "乌冬、河粉与粉丝", "年糕杯与快捷碗餐"],
    },
    brands: ["Nissin", "Samyang", "Nongshim", "Ottogi", "Mama", "Yopokki", "Paldo", "Indomie", "Acecook", "Master Kong", "Haidilao", "Little Sheep", "Prima Taste", "Lucky Me", "Wai Wai"],
  },
  {
    id: "snacks",
    title: { en: "Snacks & Sweets", de: "Snacks & Süßigkeiten", zh: "零食与甜点" },
    items: {
      en: ["Chips & savory snacks", "Candy, gummies & chocolate", "Cookies, Pocky & wafers", "Jelly, boba & dessert cups"],
      de: ["Chips & Knabbereien", "Bonbons, Fruchtgummi & Schokolade", "Kekse, Pocky & Waffeln", "Jelly, Boba & Dessertbecher"],
      zh: ["薯片与咸味零食", "糖果、软糖与巧克力", "饼干、Pocky 与威化", "果冻、波霸与甜品杯"],
    },
    brands: ["Pocky", "Calbee", "Glico", "Meiji", "Lotte", "Want Want", "Hi-Chew", "Yan Yan", "Hello Panda", "Pejoy", "Kasugai", "Royal Family", "Orion"],
  },
  {
    id: "sauces",
    title: { en: "Sauces & Seasoning", de: "Saucen & Gewürze", zh: "酱料与调味" },
    items: {
      en: ["Soy sauce, fish sauce & vinegar", "Chili oil, gochujang & curry pastes", "Sesame oil & cooking oils", "Spices, blends & seasoning pastes"],
      de: ["Sojasauce, Fischsauce & Essig", "Chiliöl, Gochujang & Currypasten", "Sesamöl & Kochöle", "Gewürze, Mischungen & Würzpasten"],
      zh: ["酱油、鱼露与醋", "辣椒油、韩式辣酱与咖喱酱", "芝麻油与烹调用油", "香料、调味粉与酱料"],
    },
    brands: ["Kikkoman", "Lee Kum Kee", "Pearl River", "Maesri", "Mae Ploy", "Healthy Boy", "Aroy-D", "Chaokoh", "Sempio", "CJ", "Chung Jung One", "S&B", "Yutaka"],
  },
  {
    id: "rice",
    title: { en: "Rice", de: "Reis", zh: "米类" },
    items: {
      en: ["Jasmine rice & basmati rice", "Sushi rice & glutinous rice", "Cooked rice & rice cakes", "Rice paper & rice noodles"],
      de: ["Jasminreis & Basmatireis", "Sushireis & Klebreis", "Gekochter Reis & Reiskuchen", "Reispapier & Reisnudeln"],
      zh: ["茉莉香米与巴斯马蒂米", "寿司米与糯米", "即食米饭与年糕", "米纸与米粉"],
    },
    brands: ["Tilda", "Royal Tiger", "Mali Flower", "Kaset", "Cock Brand", "Thai Pride", "Yume Nishiki", "Sekiryu", "Hakubaku", "Longkou", "Bamboo Tree"],
  },
  {
    id: "drinks",
    title: { en: "Drinks & Alcohol", de: "Getränke & Alkohol", zh: "饮品与酒类" },
    items: {
      en: ["Soft drinks & fruit drinks", "Milk drinks, coffee & bubble tea", "Soju, sake & Asian wine", "Beer & alcohol-free drinks"],
      de: ["Softdrinks & Fruchtgetränke", "Milchdrinks, Kaffee & Bubble Tea", "Soju, Sake & asiatischer Wein", "Bier & alkoholfreie Drinks"],
      zh: ["汽水与果味饮料", "奶饮、咖啡与珍珠奶茶", "烧酒、清酒与亚洲酒", "啤酒与无酒精饮品"],
    },
    brands: ["Pocari Sweat", "Calpis", "Yakult", "Jinro", "Chum Churum", "Soonhari", "Hite", "Asahi", "Sapporo", "Tsingtao", "Vita", "Yeo's"],
  },
  {
    id: "fresh",
    title: { en: "Fresh & Chilled", de: "Frisch & Kühlware", zh: "新鲜与冷藏" },
    items: {
      en: ["Vegetables & herbs", "Tofu & soy products", "Buns, bao & dumpling wrappers", "Mochi & chilled desserts"],
      de: ["Gemüse & Kräuter", "Tofu & Sojaprodukte", "Buns, Bao & Dumpling-Teig", "Mochi & gekühlte Desserts"],
      zh: ["蔬菜与香草", "豆腐与豆制品", "包子、刈包与饺子皮", "麻薯与冷藏甜点"],
    },
    brands: ["Pulmuone", "Joytofu", "Soyspring", "Wel Pac", "Shirakiku"],
  },
  {
    id: "frozen",
    title: { en: "Frozen", de: "Tiefkühl", zh: "冷冻食品" },
    items: {
      en: ["Dumplings & gyoza", "Bao, buns & mochi ice cream", "Fish, seafood & meat", "Frozen vegetables & ready meals"],
      de: ["Dumplings & Gyoza", "Bao, Buns & Mochi-Eis", "Fisch, Seafood & Fleisch", "Tiefkühlgemüse & Fertiggerichte"],
      zh: ["饺子与煎饺", "包子、馒头与麻薯冰淇淋", "鱼、海鲜与肉类", "冷冻蔬菜与即食餐"],
    },
    brands: ["CJ Bibigo", "Wang Korea", "Surasang", "Sanpo", "Shirakiku", "Itsuki"],
  },
  {
    id: "vegan",
    title: { en: "Vegan Products", de: "Vegane Produkte", zh: "纯素产品" },
    items: {
      en: ["Tofu, seitan & bean products", "Vegan sauces & pastes", "Plant-based snacks & sweets", "Rice, noodles & cooking basics"],
      de: ["Tofu, Seitan & Bohnenprodukte", "Vegane Saucen & Pasten", "Pflanzliche Snacks & Süßigkeiten", "Reis, Nudeln & Kochbasics"],
      zh: ["豆腐、面筋与豆制品", "纯素酱料与调味酱", "植物性零食与甜点", "米、面与烹饪基础食材"],
    },
    brands: ["Joytofu", "Pulmuone", "Kikkoman", "Lee Kum Kee", "Hikari Miso", "Hanamaruki"],
  },
  {
    id: "tea",
    title: { en: "Tea", de: "Tee", zh: "茶" },
    items: {
      en: ["Green tea, jasmine tea & oolong", "Matcha & milk tea", "Herbal and flower teas", "Tea sets & gift teas"],
      de: ["Grüner Tee, Jasmintee & Oolong", "Matcha & Milchtee", "Kräuter- und Blütentees", "Teesets & Geschenktee"],
      zh: ["绿茶、茉莉茶与乌龙茶", "抹茶与奶茶", "草本茶与花茶", "茶具与礼盒茶"],
    },
    brands: ["Ten Ren", "Ten Fu", "Sen Cha", "Itoen", "Yamamotoyama", "Lipton Asia"],
  },
  {
    id: "tcm",
    title: { en: "TCM Products", de: "TCM-Produkte", zh: "中式养生产品" },
    items: {
      en: ["Herbal teas & tonics", "Cough syrups & throat remedies", "Balms, ointments & topical care", "Warming drinks & medicinal pastes"],
      de: ["Kräutertees & Tonics", "Hustensäfte & Halsmittel", "Balsame, Salben & äußerliche Anwendungen", "Wärmende Getränke & Heilpasten"],
      zh: ["草本茶与补品", "止咳糖浆与润喉产品", "药膏、油膏与外用护理", "暖饮与药膳膏方"],
    },
    brands: ["Nin Jiom", "Tiger Balm", "Yulin", "Kwangdong", "Wang Lao Ji", "Heng Shou Tang"],
  },
  {
    id: "gifts",
    title: { en: "Gift Sets", de: "Geschenksets", zh: "礼品套装" },
    items: {
      en: ["Tea & snack sets", "Character goods & small extras", "Tableware & kitchen tools", "Seasonal gift ideas"],
      de: ["Tee- & Snack-Sets", "Character-Ware & kleine Extras", "Geschirr & Küchenhelfer", "Saisonale Geschenkideen"],
      zh: ["茶与零食礼盒", "角色商品与小物", "餐具与厨房工具", "季节礼品灵感"],
    },
    brands: ["Sanrio", "Bandai", "Tokyo Design", "Haidilao", "Daoxiangcun", "Haoxiangni"],
  },
];

export const HEADLINE_RECIPES = [
  { id: "mapo", name: "Mapo Tofu", blurb: "Silken tofu in spicy Sichuan sauce with doubanjiang and minced pork." },
  { id: "dandan", name: "Dan Dan Noodles", blurb: "Sichuan classic with sesame paste, chili oil and minced pork." },
  { id: "garlic-bok-choy", name: "Garlic Bok Choy & Shiitake", blurb: "Quick stir-fry with vegetarian oyster sauce." },
  { id: "fried-rice", name: "Egg & Scallion Fried Rice", blurb: "Day-old jasmine rice tossed with soy sauce and sesame oil." },
  { id: "crispy-chili-beef", name: "Crispy Chili Beef Fillet", blurb: "Crispy beef strips with Lee Kum Kee oyster and chili sauces." },
  { id: "garlic-prawns-glass-noodles", name: "Garlic Prawns with Glass Noodles", blurb: "Tiger prawns steamed over vermicelli with soy-oyster garlic sauce." },
  { id: "honey-lime-soy-chicken", name: "Honey Lime Soy Chicken", blurb: "Sticky-glazed chicken with sweet soy, lime and honey." },
  { id: "steamed-fish-slices", name: "Steamed Fish Slices", blurb: "Cantonese-style steamed fish with ginger, scallion and light soy." },
  { id: "tofu-salad", name: "Tofu Salad", blurb: "Cold silken tofu with sesame oil, soy sauce and crunchy toppings." },
  { id: "vietnamese-prawn-mango-rolls", name: "Vietnamese Prawn & Mango Rice Paper Rolls", blurb: "Fresh rice paper rolls with prawns, mango, herbs and peanut sauce." },
  { id: "poke-bowl", name: "Poke Bowl", blurb: "Hawaiian-style bowl with sushi rice, sashimi, avocado and seaweed." },
  { id: "noodle-salad-chicken", name: "Noodle Salad with Chicken", blurb: "Egg noodles with chicken, vegetables and Lee Kum Kee peanut sauce." },
  { id: "satay-rice-noodle-soup", name: "Satay Rice Noodle Soup", blurb: "Rice noodles in satay bouillon with chicken, carrot and baby corn." },
  { id: "spicy-fish-soup", name: "Spicy Fish Soup", blurb: "Sichuan-style fish soup with chili and Sichuan peppercorns." },
  { id: "tom-yum-chicken-spaghetti", name: "Tom Yum Chicken Spaghetti", blurb: "Spaghetti tossed in spicy-sour tom yum broth with chicken." },
];

export const FESTIVALS_2026 = [
  { date: "FEB 16", title: "Spring Festival Eve", cn: "除夕" },
  { date: "FEB 17", title: "Spring Festival (Year of the Fire Horse)", cn: "春节" },
  { date: "MAR 03", title: "Lantern Festival", cn: "元宵节" },
  { date: "APR 05", title: "Qingming Festival", cn: "清明节" },
  { date: "MAY 01", title: "Labour Day", cn: "劳动节" },
  { date: "JUN 19", title: "Dragon Boat Festival", cn: "端午节" },
  { date: "SEP 25", title: "Mid-Autumn Festival", cn: "中秋节" },
  { date: "OCT 01", title: "National Day Golden Week", cn: "国庆节" },
];

const SECTION_LABELS: Record<Lang, { categories: string; brands: string; recipes: string; festivals: string; intro: string }> = {
  en: {
    categories: "Aisles and product groups at Choo Foodstore",
    brands: "Brands you'll find in the store",
    recipes: "Recipes you can make with our shelves",
    festivals: "Traditional Chinese festivals in 2026",
    intro: "Choo Foodstore is an Asian supermarket at Linke Wienzeile 54 in Vienna 1060, next to Naschmarkt. Over 3,000 products across 11 aisles — from instant noodles and sauces to fresh tofu, frozen dumplings, tea and TCM remedies. Delivery across Vienna via Wolt and foodora.",
  },
  de: {
    categories: "Gänge und Produktgruppen im Choo Foodstore",
    brands: "Marken, die du im Geschäft findest",
    recipes: "Rezepte, die du mit unseren Regalen kochen kannst",
    festivals: "Traditionelle chinesische Feiertage 2026",
    intro: "Choo Foodstore ist ein Asia Supermarkt an der Linken Wienzeile 54 in Wien 1060, direkt am Naschmarkt. Über 3.000 Produkte in 11 Gängen — von Instantnudeln und Saucen über frischen Tofu, Tiefkühl-Dumplings, Tee und TCM-Produkten. Lieferung in ganz Wien mit Wolt und foodora.",
  },
  zh: {
    categories: "Choo 亚洲超市的货架与商品分类",
    brands: "您可以在店内找到的品牌",
    recipes: "您可以使用我们货架食材烹饪的菜谱",
    festivals: "2026 年中国传统节日",
    intro: "Choo 亚洲超市位于维也纳 1060 区 Linke Wienzeile 54 号，紧邻纳什市场。3000 多种商品分布于 11 个货架——方便面、酱料、新鲜豆腐、冷冻饺子、茶叶与中式养生产品。Wolt 与 foodora 全维也纳配送。",
  },
};

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function buildSeoContentHtml(lang: Lang): string {
  const t = SECTION_LABELS[lang];
  const cats = CATEGORIES.map((c) => {
    const items = c.items[lang].map((i) => `<li>${esc(i)}</li>`).join("");
    const brands = c.brands.map((b) => esc(b)).join(", ");
    return `<section><h3>${esc(c.title[lang])}</h3><ul>${items}</ul><p><strong>${esc(t.brands)}:</strong> ${brands}</p></section>`;
  }).join("");

  const recipes = HEADLINE_RECIPES.map((r) => `<li><strong>${esc(r.name)}</strong> — ${esc(r.blurb)}</li>`).join("");
  const festivals = FESTIVALS_2026.map((f) => `<li><time>${esc(f.date)}</time> ${esc(f.title)} (${esc(f.cn)})</li>`).join("");

  return `<aside id="seo-content" aria-hidden="true" hidden style="display:none">
<p>${esc(t.intro)}</p>
<h2>${esc(t.categories)}</h2>
${cats}
<h2>${esc(t.recipes)}</h2>
<ul>${recipes}</ul>
<h2>${esc(t.festivals)}</h2>
<ul>${festivals}</ul>
</aside>`;
}

export function buildRecipeJsonLd(): string {
  const recipes = HEADLINE_RECIPES.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": r.name,
    "description": r.blurb,
    "image": "https://choo-foodstore.at/images/recipe-placeholder.webp",
    "author": { "@type": "Organization", "name": "Choo Foodstore" },
    "recipeCuisine": "Asian",
    "publisher": { "@id": "https://choo-foodstore.at/#org" },
    "url": `https://choo-foodstore.at/#recipes`,
  }));
  return `<script type="application/ld+json">${JSON.stringify(recipes)}</script>`;
}
