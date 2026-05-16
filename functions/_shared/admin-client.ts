export const adminEntryJs = `
const ADMIN_HASHES = new Set(["#login", "#admin", "#new"]);
function shouldBoot() {
  return ADMIN_HASHES.has(location.hash) || location.hash.startsWith("#edit-");
}
async function boot() {
  if (!shouldBoot() || window.__chooAdminBooted) return;
  window.__chooAdminBooted = true;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/api/admin/client/styles.css";
  document.head.append(link);
  const mod = await import("/api/admin/client/ui.js");
  mod.mountAdmin();
}
window.addEventListener("hashchange", boot);
boot();
`;

export const adminStylesCss = `
.admin-shell{position:fixed;inset:0;z-index:9999;overflow:auto;background:#101418;color:#f4f1ea;font-family:Inter,system-ui,sans-serif}
.admin-shell *{box-sizing:border-box}
.admin-bar{position:sticky;top:0;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,.12);background:#151b20}
.admin-brand{display:flex;align-items:center;gap:10px;font-weight:700;letter-spacing:.02em}
.admin-dot{width:9px;height:9px;border-radius:50%;background:#e35035}
.admin-main{max-width:1180px;margin:0 auto;padding:28px 18px 48px}
.admin-panel{border:1px solid rgba(255,255,255,.14);border-radius:8px;background:#192026;padding:22px;box-shadow:0 20px 50px rgba(0,0,0,.18)}
.admin-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px}
.admin-field{display:grid;gap:6px;margin-bottom:12px}
.admin-field label,.admin-label{font-size:12px;text-transform:uppercase;color:#aab4bc;font-weight:700}
.admin-field input,.admin-field textarea,.admin-field select{width:100%;border:1px solid rgba(255,255,255,.18);border-radius:6px;background:#0f1418;color:#f4f1ea;padding:10px 11px;font:inherit}
.admin-field textarea{min-height:92px;resize:vertical}
.admin-actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:14px}
.admin-btn{border:1px solid rgba(255,255,255,.18);border-radius:6px;background:#f4f1ea;color:#111820;padding:10px 13px;font:inherit;font-weight:700;cursor:pointer}
.admin-btn.secondary{background:transparent;color:#f4f1ea}
.admin-btn.danger{background:#b73529;color:#fff;border-color:#b73529}
.admin-btn:disabled{opacity:.55;cursor:not-allowed}
.admin-list{display:grid;gap:10px;margin-top:18px}
.admin-row{display:grid;grid-template-columns:1fr auto;gap:14px;align-items:center;border:1px solid rgba(255,255,255,.12);border-radius:8px;background:#12181d;padding:14px}
.admin-row strong{display:block;font-size:18px}
.admin-row span{color:#aab4bc;font-size:13px}
.admin-tabs{display:flex;gap:8px;margin:18px 0 12px;flex-wrap:wrap}
.admin-tab{border:1px solid rgba(255,255,255,.18);border-radius:999px;background:transparent;color:#f4f1ea;padding:8px 12px;cursor:pointer}
.admin-tab[aria-selected=true]{background:#f4f1ea;color:#111820}
.admin-repeat{display:grid;gap:8px}
.admin-repeat-row{display:grid;grid-template-columns:1fr 100px 80px 1fr 48px auto;gap:8px;align-items:center}
.admin-steps-row{display:grid;grid-template-columns:1fr 110px auto;gap:8px;align-items:center}
.admin-status{min-height:20px;color:#f0c36d}
.admin-login{max-width:430px;margin:72px auto}
.admin-muted{color:#aab4bc}
.admin-image-preview{display:flex;gap:10px;flex-wrap:wrap;margin-top:8px}
.admin-image-preview img{width:92px;height:72px;object-fit:cover;border-radius:6px;border:1px solid rgba(255,255,255,.14)}
@media (max-width:760px){.admin-repeat-row,.admin-steps-row,.admin-row{grid-template-columns:1fr}.admin-main{padding:18px 12px 36px}}
`;

export const adminUiJs = `
const $ = (selector, root = document) => root.querySelector(selector);
const locales = ["en", "de", "zh"];
const localeNames = { en: "English", de: "Deutsch", zh: "中文" };
let state = { recipes: [], editing: null, images: [], activeLocale: "en" };

function text(value) { return value == null ? "" : String(value); }
function csrf() {
  return document.cookie.split(";").map((part) => part.trim()).find((part) => part.startsWith("choo_csrf="))?.split("=").slice(1).join("=") || "";
}
async function api(path, options = {}) {
  const headers = new Headers(options.headers || {});
  if (!(options.body instanceof FormData) && options.body && !headers.has("content-type")) headers.set("content-type", "application/json");
  if (!["GET", "HEAD"].includes(options.method || "GET")) headers.set("x-csrf-token", csrf());
  const response = await fetch(path, { ...options, headers, credentials: "same-origin" });
  const data = response.headers.get("content-type")?.includes("application/json") ? await response.json() : null;
  if (!response.ok) throw new Error(data?.error || "Request failed");
  return data;
}
function shell() {
  let root = $(".admin-shell");
  if (!root) {
    root = document.createElement("div");
    root.className = "admin-shell";
    document.body.append(root);
  }
  root.replaceChildren();
  const bar = document.createElement("div");
  bar.className = "admin-bar";
  const brand = document.createElement("div");
  brand.className = "admin-brand";
  const dot = document.createElement("span");
  dot.className = "admin-dot";
  const label = document.createElement("span");
  label.textContent = "Recipe Admin";
  brand.append(dot, label);
  const actions = document.createElement("div");
  actions.className = "admin-actions";
  const list = button("Recipes", "secondary", () => { location.hash = "#admin"; renderDashboard(); });
  const add = button("New recipe", "secondary", () => { state.editing = null; state.images = []; location.hash = "#new"; renderForm(); });
  const logout = button("Logout", "danger", async () => { await api("/api/admin/logout", { method: "POST" }); location.hash = ""; root.remove(); });
  actions.append(list, add, logout);
  bar.append(brand, actions);
  const main = document.createElement("main");
  main.className = "admin-main";
  root.append(bar, main);
  return main;
}
function button(label, kind, onClick) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "admin-btn" + (kind ? " " + kind : "");
  btn.textContent = label;
  btn.addEventListener("click", onClick);
  return btn;
}
function field(label, input) {
  const wrap = document.createElement("div");
  wrap.className = "admin-field";
  const lab = document.createElement("label");
  lab.textContent = label;
  wrap.append(lab, input);
  return wrap;
}
function input(name, value = "", type = "text") {
  const el = document.createElement(type === "textarea" ? "textarea" : "input");
  if (el instanceof HTMLInputElement) el.type = type;
  el.name = name;
  el.value = text(value);
  return el;
}
async function renderLogin() {
  const main = shell();
  main.replaceChildren();
  const panel = document.createElement("section");
  panel.className = "admin-panel admin-login";
  const title = document.createElement("h1");
  title.textContent = "Admin login";
  const form = document.createElement("form");
  const pass = input("password", "", "password");
  const turnstileMount = document.createElement("div");
  const status = document.createElement("p");
  status.className = "admin-status";
  const submit = document.createElement("button");
  submit.type = "submit";
  submit.className = "admin-btn";
  submit.textContent = "Login";
  form.append(field("Password", pass), turnstileMount, status, submit);
  panel.append(title, form);
  main.append(panel);
  const config = await api("/api/admin/config");
  let widgetId = null;
  await loadTurnstile();
  if (window.turnstile && config.siteKey) {
    widgetId = window.turnstile.render(turnstileMount, { sitekey: config.siteKey });
  }
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";
    const token = widgetId != null && window.turnstile ? window.turnstile.getResponse(widgetId) : "";
    try {
      await api("/api/admin/login", { method: "POST", body: JSON.stringify({ password: pass.value, turnstileToken: token }) });
      location.hash = "#admin";
      await renderDashboard();
    } catch (error) {
      status.textContent = "Login failed.";
      if (widgetId != null && window.turnstile) window.turnstile.reset(widgetId);
    }
  });
}
function loadTurnstile() {
  if (window.turnstile) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Turnstile failed"));
    document.head.append(script);
  });
}
async function renderDashboard() {
  const main = shell();
  main.replaceChildren();
  const panel = document.createElement("section");
  panel.className = "admin-panel";
  const title = document.createElement("h1");
  title.textContent = "Recipes";
  const status = document.createElement("p");
  status.className = "admin-status";
  const list = document.createElement("div");
  list.className = "admin-list";
  panel.append(title, status, list);
  main.append(panel);
  try {
    const data = await api("/api/admin/recipes");
    state.recipes = data.recipes || [];
    if (!state.recipes.length) {
      const empty = document.createElement("p");
      empty.className = "admin-muted";
      empty.textContent = "No recipes yet.";
      list.append(empty);
      return;
    }
    state.recipes.forEach((recipe) => {
      const row = document.createElement("div");
      row.className = "admin-row";
      const meta = document.createElement("div");
      const name = document.createElement("strong");
      name.textContent = recipe.title || recipe.name;
      const sub = document.createElement("span");
      sub.textContent = [recipe.slug, recipe.status, (recipe.tags || []).join(", ")].filter(Boolean).join(" · ");
      meta.append(name, sub);
      const actions = document.createElement("div");
      actions.className = "admin-actions";
      actions.append(
        button("Edit", "secondary", async () => { await loadRecipe(recipe.recipeId); location.hash = "#edit-" + recipe.recipeId; renderForm(); }),
        button("Delete", "danger", async () => {
          if (!confirm("Delete this recipe?")) return;
          await api("/api/admin/recipes/" + encodeURIComponent(recipe.recipeId), { method: "DELETE" });
          await renderDashboard();
        })
      );
      row.append(meta, actions);
      list.append(row);
    });
  } catch {
    if (location.hash === "#login") {
      await renderLogin();
    } else {
      $(".admin-shell")?.remove();
    }
  }
}
async function loadRecipe(id) {
  const data = await api("/api/admin/recipes/" + encodeURIComponent(id));
  state.editing = data.recipe;
  state.images = data.recipe.images || [];
}
function defaultTranslation(locale) {
  return { locale, title: "", description: "", origin: "", occasion: "", notes: "", ingredients: [{ name: "", amount: "", unit: "", aisle: "", inStore: false }], steps: [{ text: "", timerSeconds: 0 }], nutrition: {} };
}
function normalizeEditing() {
  const recipe = state.editing || { slug: "", status: "draft", servings: 2, prepMinutes: 0, cookMinutes: 0, totalMinutes: 0, difficulty: "easy", tags: [], translations: [defaultTranslation("en")] };
  const map = new Map((recipe.translations || []).map((item) => [item.locale, item]));
  locales.forEach((locale) => { if (!map.has(locale)) map.set(locale, defaultTranslation(locale)); });
  recipe.translations = locales.map((locale) => map.get(locale));
  return recipe;
}
function renderForm() {
  const main = shell();
  const recipe = normalizeEditing();
  main.replaceChildren();
  const form = document.createElement("form");
  form.className = "admin-panel";
  const title = document.createElement("h1");
  title.textContent = state.editing ? "Edit recipe" : "New recipe";
  const grid = document.createElement("div");
  grid.className = "admin-grid";
  grid.append(
    field("Slug", input("slug", recipe.slug)),
    field("Status", select("status", recipe.status, [["draft","Draft"],["published","Published"]])),
    field("Servings", input("servings", recipe.servings, "number")),
    field("Prep minutes", input("prepMinutes", recipe.prepMinutes, "number")),
    field("Cook minutes", input("cookMinutes", recipe.cookMinutes, "number")),
    field("Total minutes", input("totalMinutes", recipe.totalMinutes, "number")),
    field("Difficulty", select("difficulty", recipe.difficulty, [["easy","Easy"],["medium","Medium"],["hard","Hard"]])),
    field("Tags, comma-separated", input("tags", (recipe.tags || []).join(", ")))
  );
  const imagePanel = renderImagePanel(recipe);
  const tabs = document.createElement("div");
  tabs.className = "admin-tabs";
  locales.forEach((locale) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "admin-tab";
    tab.textContent = localeNames[locale];
    tab.setAttribute("aria-selected", String(state.activeLocale === locale));
    tab.addEventListener("click", () => {
      try { collectRecipe(form, recipe); } catch {}
      state.activeLocale = locale;
      renderForm();
    });
    tabs.append(tab);
  });
  const localeForm = renderTranslationFields(recipe.translations.find((item) => item.locale === state.activeLocale));
  const status = document.createElement("p");
  status.className = "admin-status";
  const actions = document.createElement("div");
  actions.className = "admin-actions";
  actions.append(button("Save recipe", "", async () => {
    status.textContent = "";
    try {
      const payload = collectRecipe(form, recipe);
      const path = state.editing ? "/api/admin/recipes/" + encodeURIComponent(state.editing.recipeId) : "/api/admin/recipes";
      const method = state.editing ? "PUT" : "POST";
      const data = await api(path, { method, body: JSON.stringify(payload) });
      state.editing = data.recipe;
      state.images = data.recipe.images || [];
      status.textContent = "Saved.";
      location.hash = "#edit-" + data.recipe.recipeId;
    } catch (error) {
      status.textContent = error.message || "Save failed.";
    }
  }), button("Cancel", "secondary", () => { location.hash = "#admin"; renderDashboard(); }));
  form.append(title, grid, imagePanel, tabs, localeForm, status, actions);
  main.append(form);
}
function select(name, value, options) {
  const el = document.createElement("select");
  el.name = name;
  options.forEach(([optionValue, label]) => {
    const option = document.createElement("option");
    option.value = optionValue;
    option.textContent = label;
    option.selected = optionValue === value;
    el.append(option);
  });
  return el;
}
function renderImagePanel(recipe) {
  const wrap = document.createElement("section");
  wrap.className = "admin-field";
  const lab = document.createElement("span");
  lab.className = "admin-label";
  lab.textContent = "Hero images";
  const file = input("image", "", "file");
  file.accept = "image/jpeg,image/png,image/webp";
  const alt = input("imageAlt", "", "text");
  alt.placeholder = "Alt text";
  const upload = button("Upload image", "secondary", async () => {
    if (!file.files?.[0]) return;
    const data = new FormData();
    data.append("file", file.files[0]);
    data.append("altText", alt.value);
    const result = await api("/api/admin/images", { method: "POST", body: data });
    state.images.push(result.image);
    renderForm();
  });
  const preview = document.createElement("div");
  preview.className = "admin-image-preview";
  (state.images || recipe.images || []).forEach((image) => {
    const label = document.createElement("label");
    const radio = input("heroImageId", image.id, "radio");
    radio.checked = image.isHero || recipe.heroImageId === image.id;
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.altText || "";
    label.append(radio, img);
    preview.append(label);
  });
  wrap.append(lab, file, alt, upload, preview);
  return wrap;
}
function renderTranslationFields(translation) {
  const wrap = document.createElement("section");
  wrap.dataset.localePanel = translation.locale;
  wrap.append(
    field("Title", input("title", translation.title)),
    field("Description", input("description", translation.description, "textarea")),
    field("Origin", input("origin", translation.origin)),
    field("Occasion", input("occasion", translation.occasion)),
    field("Notes", input("notes", translation.notes, "textarea"))
  );
  wrap.append(repeatIngredients(translation.ingredients || []), repeatSteps(translation.steps || []));
  return wrap;
}
function repeatIngredients(items) {
  const block = document.createElement("div");
  block.className = "admin-field";
  const label = document.createElement("span");
  label.className = "admin-label";
  label.textContent = "Ingredients";
  const rows = document.createElement("div");
  rows.className = "admin-repeat";
  function addRow(item = {}) {
    const row = document.createElement("div");
    row.className = "admin-repeat-row";
    row.append(input("ingName", item.name), input("ingAmount", item.amount), input("ingUnit", item.unit), input("ingAisle", item.aisle));
    const here = input("ingInStore", "1", "checkbox");
    here.checked = Boolean(item.inStore);
    const remove = button("Remove", "danger", () => row.remove());
    row.append(here, remove);
    rows.append(row);
  }
  items.forEach(addRow);
  block.append(label, rows, button("Add ingredient", "secondary", () => addRow()));
  return block;
}
function repeatSteps(items) {
  const block = document.createElement("div");
  block.className = "admin-field";
  const label = document.createElement("span");
  label.className = "admin-label";
  label.textContent = "Steps";
  const rows = document.createElement("div");
  rows.className = "admin-repeat";
  function addRow(item = {}) {
    const row = document.createElement("div");
    row.className = "admin-steps-row";
    row.append(input("stepText", item.text), input("stepTimer", item.timerSeconds || 0, "number"), button("Remove", "danger", () => row.remove()));
    rows.append(row);
  }
  items.forEach(addRow);
  block.append(label, rows, button("Add step", "secondary", () => addRow()));
  return block;
}
function collectRecipe(form, recipe) {
  const data = new FormData(form);
  const current = recipe.translations.find((item) => item.locale === state.activeLocale);
  current.title = text(data.get("title")).trim();
  current.description = text(data.get("description")).trim();
  current.origin = text(data.get("origin")).trim();
  current.occasion = text(data.get("occasion")).trim();
  current.notes = text(data.get("notes")).trim();
  current.ingredients = Array.from(form.querySelectorAll(".admin-repeat-row")).map((row) => ({
    name: row.querySelector("[name=ingName]").value.trim(),
    amount: row.querySelector("[name=ingAmount]").value.trim(),
    unit: row.querySelector("[name=ingUnit]").value.trim(),
    aisle: row.querySelector("[name=ingAisle]").value.trim(),
    inStore: row.querySelector("[name=ingInStore]").checked,
  })).filter((item) => item.name);
  current.steps = Array.from(form.querySelectorAll(".admin-steps-row")).map((row) => ({
    text: row.querySelector("[name=stepText]").value.trim(),
    timerSeconds: Number(row.querySelector("[name=stepTimer]").value || 0),
  })).filter((item) => item.text);
  const imageIds = (state.images || []).map((image) => image.id);
  const checkedHero = form.querySelector("[name=heroImageId]:checked")?.value;
  return {
    slug: text(data.get("slug")).trim(),
    status: text(data.get("status")) || "draft",
    servings: Number(data.get("servings") || 2),
    prepMinutes: Number(data.get("prepMinutes") || 0),
    cookMinutes: Number(data.get("cookMinutes") || 0),
    totalMinutes: Number(data.get("totalMinutes") || 0),
    difficulty: text(data.get("difficulty")) || "easy",
    tags: text(data.get("tags")).split(",").map((tag) => tag.trim().toLowerCase()).filter(Boolean),
    imageIds,
    heroImageId: checkedHero || imageIds[0],
    translations: recipe.translations.filter((item) => item.locale === "en" || item.title || item.description),
  };
}
export async function mountAdmin() {
  try {
    await api("/api/admin/session");
    if (location.hash === "#login") location.hash = "#admin";
    if (location.hash.startsWith("#edit-")) {
      await loadRecipe(location.hash.replace("#edit-", ""));
      renderForm();
      return;
    }
    if (location.hash === "#new") {
      state.editing = null;
      state.images = [];
      renderForm();
      return;
    }
    await renderDashboard();
  } catch {
    if (location.hash === "#login") {
      await renderLogin();
    } else {
      $(".admin-shell")?.remove();
    }
  }
}
`;
