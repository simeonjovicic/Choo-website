export const adminEntryJs = `
const ADMIN_HASHES = new Set(["#login", "#admin", "#new"]);
function shouldBoot() {
  return ADMIN_HASHES.has(location.hash) || location.hash.startsWith("#edit-") || location.hash.startsWith("#view-");
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
:root{--admin-bg:#f6f3ed;--admin-surface:#fffdfa;--admin-ink:#171615;--admin-muted:#6f6a61;--admin-line:#ded6c9;--admin-strong:#0e3b3a;--admin-accent:#d94f2b;--admin-warn:#a96f00;--admin-good:#1e7a55;--admin-shadow:0 18px 45px rgba(24,20,15,.12)}
.admin-shell{position:fixed;inset:0;z-index:9999;overflow:auto;background:var(--admin-bg);color:var(--admin-ink);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
.admin-shell *{box-sizing:border-box}
.admin-shell button,.admin-shell input,.admin-shell textarea,.admin-shell select{font:inherit}
.admin-bar{position:sticky;top:0;z-index:5;display:flex;align-items:center;justify-content:space-between;gap:18px;padding:14px 22px;border-bottom:1px solid var(--admin-line);background:rgba(255,253,250,.94);backdrop-filter:blur(14px)}
.admin-brand{display:flex;align-items:center;gap:11px;font-weight:800;letter-spacing:.01em}
.admin-dot{width:10px;height:10px;border-radius:999px;background:var(--admin-accent);box-shadow:0 0 0 4px rgba(217,79,43,.13)}
.admin-nav{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.admin-main{max-width:1320px;margin:0 auto;padding:26px 18px 54px}
.admin-page-head{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;margin-bottom:18px}
.admin-page-head.is-sticky{position:sticky;top:60px;z-index:4;background:rgba(246,243,237,.94);backdrop-filter:blur(14px);padding:12px 0;margin:-12px 0 18px;border-bottom:1px solid var(--admin-line)}
.admin-page-head h1{font-size:clamp(26px,3vw,42px);line-height:1.05;margin:0;color:var(--admin-ink);letter-spacing:0}
.admin-kicker{margin:0 0 7px;color:var(--admin-accent);font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}
.admin-muted{color:var(--admin-muted)}
.admin-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:38px;border:1px solid var(--admin-line);border-radius:7px;background:var(--admin-surface);color:var(--admin-ink);padding:9px 13px;font-weight:760;cursor:pointer;text-decoration:none}
.admin-btn.primary{background:var(--admin-strong);border-color:var(--admin-strong);color:#fff}
.admin-btn.secondary{background:#f0ebe2}
.admin-btn.ghost{background:transparent}
.admin-btn.danger{background:#fff3ef;border-color:#e6b09e;color:#a83218}
.admin-btn:disabled{opacity:.54;cursor:not-allowed}
.admin-btn:hover{filter:brightness(.985)}
.admin-panel,.admin-card{border:1px solid var(--admin-line);border-radius:8px;background:var(--admin-surface);box-shadow:var(--admin-shadow)}
.admin-panel{padding:22px}
.admin-card{padding:18px}
.admin-card + .admin-card{margin-top:14px}
.admin-card-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:14px}
.admin-card-head h2{font-size:18px;line-height:1.2;margin:0}
.admin-card-head p{margin:4px 0 0;color:var(--admin-muted);font-size:13px}
.admin-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
.admin-field{display:grid;gap:6px;margin:0}
.admin-field.full{grid-column:1/-1}
.admin-label,.admin-field label{font-size:12px;text-transform:uppercase;color:var(--admin-muted);font-weight:800;letter-spacing:.045em}
.admin-field input,.admin-field textarea,.admin-field select,.admin-control{width:100%;border:1px solid var(--admin-line);border-radius:7px;background:#fff;color:var(--admin-ink);padding:10px 11px;min-height:40px}
.admin-field textarea{min-height:96px;resize:vertical;line-height:1.45}
.admin-field input:focus,.admin-field textarea:focus,.admin-field select:focus,.admin-control:focus{outline:2px solid rgba(14,59,58,.22);border-color:var(--admin-strong)}
.admin-hint{margin:0;color:var(--admin-muted);font-size:12px}
.admin-status{min-height:20px;margin:12px 0 0;color:var(--admin-warn);font-weight:700}
.admin-login{max-width:440px;margin:70px auto}
.admin-login h1{margin:0 0 18px;font-size:30px}
.admin-toolbar{display:grid;grid-template-columns:minmax(220px,1fr) 180px auto;gap:10px;margin-bottom:16px}
.admin-bulk{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px;padding:10px 12px;border:1px solid var(--admin-line);border-radius:8px;background:#fbf7f0}
.admin-check{display:flex;align-items:center;justify-content:center}
.admin-check input{width:18px;height:18px;accent-color:var(--admin-strong)}
.admin-list{display:grid;gap:10px}
.admin-row{display:grid;grid-template-columns:28px 56px 1fr auto;gap:12px;align-items:center;border:1px solid var(--admin-line);border-radius:8px;background:var(--admin-surface);padding:10px 12px}
.admin-row-media{width:76px;aspect-ratio:1.2;border-radius:7px;background:#eee7dc;overflow:hidden;display:grid;place-items:center;color:var(--admin-muted);font-weight:800}
.admin-row-media img{width:100%;height:100%;object-fit:cover}
.admin-row strong{display:block;font-size:17px}
.admin-row span{color:var(--admin-muted);font-size:13px}
.admin-chip{display:inline-flex;align-items:center;border:1px solid var(--admin-line);border-radius:999px;background:#f5efe5;color:var(--admin-muted);padding:3px 8px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.04em}
.admin-chip.published{background:#e9f6ef;color:var(--admin-good);border-color:#b8deca}
.admin-chip.draft{background:#fff7df;color:var(--admin-warn);border-color:#ead39b}
.admin-editor{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:18px;align-items:start}
.admin-editor-main{display:grid;gap:14px}
.admin-editor-side{position:sticky;top:84px;display:grid;gap:14px}
.admin-actions{display:flex;gap:9px;align-items:center;flex-wrap:wrap}
.admin-tabs{display:flex;gap:8px;flex-wrap:wrap}
.admin-tab{border:1px solid var(--admin-line);border-radius:999px;background:#f0ebe2;color:var(--admin-ink);padding:9px 13px;cursor:pointer;font-weight:800}
.admin-tab[aria-selected=true]{background:var(--admin-strong);border-color:var(--admin-strong);color:#fff}
.admin-repeat{display:grid;gap:8px}
.admin-ingredient-row{display:grid;grid-template-columns:minmax(140px,1.3fr) 92px 82px minmax(120px,1fr) 94px auto;gap:8px;align-items:center}
.admin-step-row{display:grid;grid-template-columns:minmax(180px,1fr) 116px auto;gap:8px;align-items:center}
.admin-row-label{display:flex;gap:7px;align-items:center;color:var(--admin-muted);font-size:13px;font-weight:750}
.admin-upload{display:grid;grid-template-columns:minmax(210px,260px) minmax(0,1fr);gap:14px;align-items:start}
.admin-drop{position:relative;display:grid;place-items:center;min-height:178px;border:1px dashed #cbbfad;border-radius:8px;background:#faf6ef;overflow:hidden;cursor:pointer}
.admin-drop input{position:absolute;inset:0;opacity:0;cursor:pointer}
.admin-drop img{width:100%;height:100%;object-fit:cover}
.admin-drop-empty{text-align:center;color:var(--admin-muted);font-weight:800;padding:18px}
.admin-file-meta{display:grid;gap:8px}
.admin-image-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(128px,1fr));gap:10px;margin-top:14px}
.admin-image-card{border:1px solid var(--admin-line);border-radius:8px;background:#fff;overflow:hidden}
.admin-image-card img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover;background:#eee7dc}
.admin-image-card-body{display:grid;gap:7px;padding:9px}
.admin-hero-choice{display:flex;align-items:center;gap:7px;color:var(--admin-muted);font-size:13px;font-weight:760}
.admin-preview{overflow:hidden}
.admin-preview-image{aspect-ratio:4/3;background:#eee7dc;display:grid;place-items:center;color:var(--admin-muted);font-weight:800}
.admin-preview-image img{width:100%;height:100%;object-fit:cover}
.admin-preview-body{padding:16px;display:grid;gap:10px}
.admin-preview h2{font-size:24px;line-height:1.15;margin:0;color:var(--admin-ink)}
.admin-preview p{margin:0;color:var(--admin-muted);line-height:1.45}
.admin-preview-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.admin-preview-stat{border:1px solid var(--admin-line);border-radius:7px;padding:8px;background:#fbf7f0}
.admin-preview-stat span{display:block;color:var(--admin-muted);font-size:11px;text-transform:uppercase;font-weight:800}
.admin-preview-stat strong{font-size:15px}
.admin-tags{display:flex;gap:6px;flex-wrap:wrap}
.admin-nutrition{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
.admin-view-grid{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:18px;align-items:start}
.admin-view-stack{display:grid;gap:14px}
.admin-definition{display:grid;grid-template-columns:140px 1fr;gap:8px 14px;margin:0}
.admin-definition dt{color:var(--admin-muted);font-weight:800}
.admin-definition dd{margin:0}
.admin-read-list{display:grid;gap:8px;margin:0;padding:0;list-style:none}
.admin-read-list li{border:1px solid var(--admin-line);border-radius:7px;background:#fbf7f0;padding:10px}
@media (max-width:980px){.admin-editor{grid-template-columns:1fr}.admin-editor-side{position:static}.admin-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.admin-toolbar{grid-template-columns:1fr}.admin-upload{grid-template-columns:1fr}}
@media (max-width:720px){.admin-bar,.admin-page-head,.admin-view-grid{grid-template-columns:1fr;display:grid}.admin-list{gap:5px}.admin-row{grid-template-columns:18px 38px 1fr auto;gap:7px;padding:7px 9px;border-radius:6px}.admin-row-media{width:38px;height:38px;aspect-ratio:1;border-radius:5px}.admin-row strong{font-size:13px;line-height:1.25}.admin-row>div>span{font-size:11px}.admin-row .admin-actions{flex-wrap:nowrap;gap:4px}.admin-row .admin-actions .admin-btn{min-height:24px;padding:2px 7px;font-size:11px;border-radius:5px}.admin-row .admin-chip{font-size:10px;padding:1px 5px}.admin-grid,.admin-ingredient-row,.admin-step-row,.admin-nutrition{grid-template-columns:1fr}.admin-definition{grid-template-columns:auto 1fr;gap:4px 12px}.admin-page-head.is-sticky{position:static;padding:0;margin:0 0 18px;border-bottom:none;backdrop-filter:none;background:transparent}.admin-main{padding:18px 12px 40px}.admin-bulk{align-items:flex-start;flex-direction:column}}
`;

export const adminUiJs = `
const $ = (selector, root = document) => root.querySelector(selector);
const all = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const locales = ["en", "de", "zh"];
const localeNames = { en: "English", de: "Deutsch", zh: "中文" };
let state = { recipes: [], editing: null, draft: null, images: [], activeLocale: "en", selectedFile: null, selectedPreviewUrl: "", selectedRecipeIds: new Set() };

function text(value) { return value == null ? "" : String(value); }
function formatBytes(size) {
  if (!Number.isFinite(size)) return "";
  if (size < 1024) return size + " B";
  if (size < 1024 * 1024) return Math.round(size / 1024) + " KB";
  return (size / 1024 / 1024).toFixed(1) + " MB";
}
function recipeTitle(recipe, fallback = "Untitled recipe") {
  const translations = recipe.translations || [];
  const translated = translations.find((item) => item.locale === state.activeLocale && item.title) || translations.find((item) => item.locale === "en" && item.title) || translations.find((item) => item.title);
  return recipe.title || recipe.name || translated?.title || fallback;
}
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
function resetSelectedFile() {
  if (state.selectedPreviewUrl) URL.revokeObjectURL(state.selectedPreviewUrl);
  state.selectedFile = null;
  state.selectedPreviewUrl = "";
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
  const nav = document.createElement("div");
  nav.className = "admin-nav";
  nav.append(
    button("All recipes", "ghost", () => { location.hash = "#admin"; renderDashboard(); }),
    button("Create recipe", "primary", () => { state.editing = null; state.draft = null; state.images = []; resetSelectedFile(); location.hash = "#new"; renderForm(); }),
    button("Log out", "danger", async () => { await api("/api/admin/logout", { method: "POST" }); location.hash = ""; root.remove(); })
  );
  bar.append(brand, nav);
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
  if (onClick) btn.addEventListener("click", onClick);
  return btn;
}
function pageHead(kicker, title, actions) {
  const head = document.createElement("div");
  head.className = "admin-page-head";
  const copy = document.createElement("div");
  const k = document.createElement("p");
  k.className = "admin-kicker";
  k.textContent = kicker;
  const h = document.createElement("h1");
  h.textContent = title;
  copy.append(k, h);
  const actionWrap = document.createElement("div");
  actionWrap.className = "admin-actions";
  if (actions) actionWrap.append(...actions);
  head.append(copy, actionWrap);
  return head;
}
function card(title, subtext) {
  const panel = document.createElement("section");
  panel.className = "admin-card";
  const head = document.createElement("div");
  head.className = "admin-card-head";
  const copy = document.createElement("div");
  const h = document.createElement("h2");
  h.textContent = title;
  copy.append(h);
  if (subtext) {
    const p = document.createElement("p");
    p.textContent = subtext;
    copy.append(p);
  }
  head.append(copy);
  panel.append(head);
  return panel;
}
function field(label, inputEl, hint) {
  const wrap = document.createElement("label");
  wrap.className = "admin-field";
  const lab = document.createElement("span");
  lab.textContent = label;
  wrap.append(lab, inputEl);
  if (hint) {
    const p = document.createElement("p");
    p.className = "admin-hint";
    p.textContent = hint;
    wrap.append(p);
  }
  return wrap;
}
function input(name, value = "", type = "text") {
  const el = document.createElement(type === "textarea" ? "textarea" : "input");
  if (el instanceof HTMLInputElement) el.type = type;
  el.name = name;
  el.value = text(value);
  if (type === "number") {
    el.min = "0";
    el.inputMode = "numeric";
  }
  return el;
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
async function renderLogin() {
  const main = shell();
  main.replaceChildren();
  const panel = document.createElement("section");
  panel.className = "admin-panel admin-login";
  const title = document.createElement("h1");
  title.textContent = "Admin login";
  const form = document.createElement("form");
  const pass = input("password", "", "password");
  pass.autocomplete = "current-password";
  const turnstileMount = document.createElement("div");
  const status = document.createElement("p");
  status.className = "admin-status";
  const submit = button("Login", "primary");
  submit.type = "submit";
  form.append(field("Password", pass), turnstileMount, status, submit);
  panel.append(title, form);
  main.append(panel);
  const config = await api("/api/admin/config");
  let widgetId = null;
  await loadTurnstile();
  if (window.turnstile && config.siteKey) widgetId = window.turnstile.render(turnstileMount, { sitekey: config.siteKey });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";
    submit.disabled = true;
    const token = widgetId != null && window.turnstile ? window.turnstile.getResponse(widgetId) : "";
    try {
      await api("/api/admin/login", { method: "POST", body: JSON.stringify({ password: pass.value, turnstileToken: token }) });
      location.hash = "#admin";
      await renderDashboard();
    } catch (error) {
      status.textContent = "Login failed.";
      submit.disabled = false;
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
  resetSelectedFile();
  const main = shell();
  main.replaceChildren();
  main.append(pageHead("Recipe list", "All recipes", [button("Create recipe", "primary", () => { state.editing = null; state.draft = null; state.images = []; location.hash = "#new"; renderForm(); })]));
  const panel = document.createElement("section");
  panel.className = "admin-panel";
  const toolbar = document.createElement("div");
  toolbar.className = "admin-toolbar";
  const search = input("search", "");
  search.placeholder = "Search title, slug or tag";
  const statusFilter = select("statusFilter", "all", [["all","All statuses"],["published","Published"],["draft","Draft"]]);
  const count = document.createElement("p");
  count.className = "admin-muted";
  const bulk = document.createElement("div");
  bulk.className = "admin-bulk";
  const selectAllWrap = document.createElement("label");
  selectAllWrap.className = "admin-row-label";
  const selectAll = input("selectAllRecipes", "1", "checkbox");
  selectAllWrap.append(selectAll, document.createTextNode("Select visible recipes"));
  const bulkMeta = document.createElement("span");
  bulkMeta.className = "admin-muted";
  const bulkDelete = button("Delete selected", "danger", async () => {
    const ids = Array.from(state.selectedRecipeIds);
    if (!ids.length) return;
    if (!confirm("Delete " + ids.length + " selected recipe" + (ids.length === 1 ? "" : "s") + "? This permanently removes them and their attached images.")) return;
    bulkDelete.disabled = true;
    await Promise.all(ids.map((id) => api("/api/admin/recipes/" + encodeURIComponent(id), { method: "DELETE" })));
    state.selectedRecipeIds.clear();
    await renderDashboard();
  });
  bulk.append(selectAllWrap, bulkMeta, bulkDelete);
  const list = document.createElement("div");
  list.className = "admin-list";
  toolbar.append(search, statusFilter, count);
  panel.append(toolbar, bulk, list);
  main.append(panel);
  function paint() {
    const term = search.value.trim().toLowerCase();
    const status = statusFilter.value;
    list.replaceChildren();
    const recipes = state.recipes.filter((recipe) => {
      const haystack = [recipe.title || recipe.name, recipe.slug, (recipe.tags || []).join(" ")].join(" ").toLowerCase();
      return (!term || haystack.includes(term)) && (status === "all" || recipe.status === status);
    });
    count.textContent = recipes.length + " visible";
    const shownIds = recipes.map((recipe) => recipe.recipeId);
    const selectedShown = shownIds.filter((id) => state.selectedRecipeIds.has(id)).length;
    selectAll.checked = Boolean(shownIds.length && selectedShown === shownIds.length);
    selectAll.indeterminate = Boolean(selectedShown && selectedShown < shownIds.length);
    bulkMeta.textContent = state.selectedRecipeIds.size + " selected";
    bulkDelete.disabled = state.selectedRecipeIds.size === 0;
    if (!recipes.length) {
      const empty = document.createElement("p");
      empty.className = "admin-muted";
      empty.textContent = "No recipes match.";
      list.append(empty);
      return;
    }
    recipes.forEach((recipe) => list.append(recipeRow(recipe, paint)));
  }
  try {
    const data = await api("/api/admin/recipes");
    state.recipes = data.recipes || [];
    search.addEventListener("input", paint);
    statusFilter.addEventListener("change", paint);
    selectAll.addEventListener("change", () => {
      const term = search.value.trim().toLowerCase();
      const status = statusFilter.value;
      state.recipes.forEach((recipe) => {
        const haystack = [recipe.title || recipe.name, recipe.slug, (recipe.tags || []).join(" ")].join(" ").toLowerCase();
        const visible = (!term || haystack.includes(term)) && (status === "all" || recipe.status === status);
        if (!visible) return;
        if (selectAll.checked) state.selectedRecipeIds.add(recipe.recipeId);
        else state.selectedRecipeIds.delete(recipe.recipeId);
      });
      paint();
    });
    paint();
  } catch {
    $(".admin-shell")?.remove();
  }
}
function recipeRow(recipe, onSelectionChange) {
  const row = document.createElement("div");
  row.className = "admin-row";
  const checkWrap = document.createElement("label");
  checkWrap.className = "admin-check";
  const check = input("recipeSelect", recipe.recipeId, "checkbox");
  check.checked = state.selectedRecipeIds.has(recipe.recipeId);
  check.addEventListener("change", () => {
    if (check.checked) state.selectedRecipeIds.add(recipe.recipeId);
    else state.selectedRecipeIds.delete(recipe.recipeId);
    onSelectionChange();
  });
  checkWrap.append(check);
  const media = document.createElement("div");
  media.className = "admin-row-media";
  if (recipe.imageUrl) {
    const img = document.createElement("img");
    img.src = recipe.imageUrl;
    img.alt = "";
    media.append(img);
  } else {
    media.textContent = "CH";
  }
  const meta = document.createElement("div");
  const name = document.createElement("strong");
  name.textContent = recipeTitle(recipe);
  const sub = document.createElement("span");
  sub.textContent = [recipe.slug, (recipe.tags || []).join(", ")].filter(Boolean).join(" · ");
  const status = document.createElement("span");
  status.className = "admin-chip " + (recipe.status || "draft");
  status.textContent = recipe.status || "draft";
  meta.append(name, sub, document.createElement("br"), status);
  const actions = document.createElement("div");
  actions.className = "admin-actions";
  actions.append(
    button("View", "ghost", async () => { await loadRecipe(recipe.recipeId); location.hash = "#view-" + recipe.recipeId; renderRecipeView(); }),
    button("Edit", "secondary", async () => { await loadRecipe(recipe.recipeId); location.hash = "#edit-" + recipe.recipeId; renderForm(); }),
    button("Delete", "danger", async () => {
      if (!confirm("Delete this recipe? This permanently removes it and its attached images.")) return;
      await api("/api/admin/recipes/" + encodeURIComponent(recipe.recipeId), { method: "DELETE" });
      state.selectedRecipeIds.delete(recipe.recipeId);
      await renderDashboard();
    })
  );
  row.append(checkWrap, media, meta, actions);
  return row;
}
async function loadRecipe(id) {
  const data = await api("/api/admin/recipes/" + encodeURIComponent(id));
  state.editing = data.recipe;
  state.draft = null;
  state.images = data.recipe.images || [];
  resetSelectedFile();
}
function renderRecipeView() {
  const recipe = normalizeEditing();
  const main = shell();
  main.replaceChildren();
  const breadcrumb = document.createElement("nav");
  breadcrumb.style.cssText = "margin-bottom:2px";
  const backLink = button("← All recipes", "ghost", () => { location.hash = "#admin"; renderDashboard(); });
  backLink.style.cssText = "font-size:13px;padding:5px 10px;opacity:.65";
  breadcrumb.append(backLink);
  main.append(breadcrumb);
  const edit = button("Edit recipe", "primary", () => { location.hash = "#edit-" + recipe.recipeId; renderForm(); });
  const divider = document.createElement("span");
  divider.setAttribute("aria-hidden", "true");
  divider.style.cssText = "display:inline-block;width:1px;height:20px;background:var(--admin-line);margin:0 2px;align-self:center;flex-shrink:0";
  const remove = button("Delete recipe", "danger", async () => {
    if (!confirm("Delete this recipe? This permanently removes it and its attached images.")) return;
    await api("/api/admin/recipes/" + encodeURIComponent(recipe.recipeId), { method: "DELETE" });
    state.selectedRecipeIds.delete(recipe.recipeId);
    location.hash = "#admin";
    await renderDashboard();
  });
  const viewHead = pageHead("Viewing recipe", recipeTitle(recipe, "Recipe preview"), [edit, divider, remove]);
  viewHead.classList.add("is-sticky");
  main.append(viewHead);
  const layout = document.createElement("div");
  layout.className = "admin-view-grid";
  const stack = document.createElement("div");
  stack.className = "admin-view-stack";
  const side = document.createElement("aside");
  side.className = "admin-editor-side";
  const preview = document.createElement("section");
  preview.className = "admin-card admin-preview";
  side.append(preview);
  renderLivePreview(recipe, preview);
  stack.append(readOnlyBasics(recipe), readOnlyImages(recipe), ...recipe.translations.map(readOnlyTranslation));
  layout.append(stack, side);
  main.append(layout);
}
function definition(items) {
  const dl = document.createElement("dl");
  dl.className = "admin-definition";
  items.forEach(([label, value]) => {
    const dt = document.createElement("dt");
    dt.textContent = label;
    const dd = document.createElement("dd");
    dd.textContent = text(value || "-");
    dl.append(dt, dd);
  });
  return dl;
}
function readOnlyBasics(recipe) {
  const panel = card("Basics", "");
  panel.append(definition([
    ["Slug", recipe.slug],
    ["Status", recipe.status],
    ["Difficulty", recipe.difficulty],
    ["Servings", recipe.servings],
    ["Prep", recipe.prepMinutes + " min"],
    ["Cook", recipe.cookMinutes + " min"],
    ["Total", recipe.totalMinutes + " min"],
    ["Tags", (recipe.tags || []).join(", ")],
  ]));
  return panel;
}
function readOnlyImages(recipe) {
  const panel = card("Images", "");
  const grid = document.createElement("div");
  grid.className = "admin-image-grid";
  (state.images || recipe.images || []).forEach((image) => {
    const item = document.createElement("article");
    item.className = "admin-image-card";
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.altText || "";
    const body = document.createElement("div");
    body.className = "admin-image-card-body";
    const meta = document.createElement("span");
    meta.className = "admin-muted";
    meta.textContent = image.isHero || recipe.heroImageId === image.id ? "Hero image" : (image.altText || "Recipe image");
    body.append(meta);
    item.append(img, body);
    grid.append(item);
  });
  if (!grid.children.length) {
    const empty = document.createElement("p");
    empty.className = "admin-muted";
    empty.textContent = "No images.";
    panel.append(empty);
  } else {
    panel.append(grid);
  }
  return panel;
}
function readOnlyTranslation(translation) {
  const panel = card(localeNames[translation.locale] + " content", "");
  panel.append(definition([
    ["Title", translation.title],
    ["Description", translation.description],
    ["Origin", translation.origin],
    ["Occasion", translation.occasion],
    ["Notes", translation.notes],
  ]));
  const ingredientsTitle = document.createElement("h3");
  ingredientsTitle.textContent = "Ingredients";
  const ingredients = document.createElement("ul");
  ingredients.className = "admin-read-list";
  (translation.ingredients || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = [item.amount, item.unit, item.name, item.aisle ? "(" + item.aisle + ")" : "", item.inStore ? "in store" : ""].filter(Boolean).join(" ");
    ingredients.append(li);
  });
  const stepsTitle = document.createElement("h3");
  stepsTitle.textContent = "Steps";
  const steps = document.createElement("ol");
  steps.className = "admin-read-list";
  (translation.steps || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.text + (item.timerSeconds ? " · " + item.timerSeconds + "s" : "");
    steps.append(li);
  });
  panel.append(ingredientsTitle, ingredients, stepsTitle, steps);
  return panel;
}
function defaultTranslation(locale) {
  return {
    locale,
    title: "",
    description: "",
    origin: "",
    occasion: "",
    notes: "",
    ingredients: [{ name: "", amount: "", unit: "", aisle: "", inStore: false }],
    steps: [{ text: "", timerSeconds: 0 }],
    nutrition: {},
  };
}
function newDraft() {
  return { slug: "", status: "draft", servings: 2, prepMinutes: 0, cookMinutes: 0, totalMinutes: 0, difficulty: "easy", tags: [], translations: [defaultTranslation("en")] };
}
function normalizeEditing() {
  const recipe = state.editing || state.draft || newDraft();
  if (!state.editing) state.draft = recipe;
  const map = new Map((recipe.translations || []).map((item) => [item.locale, item]));
  locales.forEach((locale) => { if (!map.has(locale)) map.set(locale, defaultTranslation(locale)); });
  recipe.translations = locales.map((locale) => map.get(locale));
  if (!state.images.length && Array.isArray(recipe.images)) state.images = recipe.images.slice();
  return recipe;
}
function showSuccessModal(message) {
  const overlay = document.createElement("div");
  overlay.style.cssText = "position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.4)";
  const box = document.createElement("div");
  box.style.cssText = "background:#fff;border-radius:12px;padding:36px 44px;text-align:center;max-width:340px;width:90%;box-shadow:0 24px 64px rgba(0,0,0,.18)";
  const icon = document.createElement("div");
  icon.style.cssText = "width:56px;height:56px;border-radius:999px;background:#e9f6ef;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:26px;color:#1e7a55";
  icon.textContent = "✓";
  const msg = document.createElement("p");
  msg.style.cssText = "font-size:18px;font-weight:700;color:#171615;margin:0 0 22px";
  msg.textContent = message;
  const ok = button("OK", "primary");
  ok.style.cssText = "width:100%;min-height:42px";
  ok.addEventListener("click", () => overlay.remove());
  box.append(icon, msg, ok);
  overlay.append(box);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.append(overlay);
  setTimeout(() => { if (document.body.contains(overlay)) overlay.remove(); }, 4000);
}
function renderForm() {
  const main = shell();
  const recipe = normalizeEditing();
  main.replaceChildren();
  const status = document.createElement("p");
  status.className = "admin-status";
  const save = button("Save recipe", "primary");
  const form = document.createElement("form");
  form.className = "admin-editor";
  save.addEventListener("click", () => form.requestSubmit());
  const mainColumn = document.createElement("div");
  mainColumn.className = "admin-editor-main";
  const sideColumn = document.createElement("aside");
  sideColumn.className = "admin-editor-side";
  const previewCard = document.createElement("section");
  previewCard.className = "admin-card admin-preview";
  sideColumn.append(previewCard);
  const formBreadcrumb = document.createElement("nav");
  formBreadcrumb.style.cssText = "margin-bottom:2px";
  const formBackLink = button("← All recipes", "ghost", () => { location.hash = "#admin"; renderDashboard(); });
  formBackLink.style.cssText = "font-size:13px;padding:5px 10px;opacity:.65";
  formBreadcrumb.append(formBackLink);
  main.append(formBreadcrumb);
  main.append(pageHead(state.editing ? "Editing recipe" : "Creating recipe", state.editing ? recipeTitle(recipe, "Edit recipe") : "New recipe", [save]));
  main.append(form);
  mainColumn.append(renderBasics(recipe), renderImagePanel(recipe), renderLocaleTabs(recipe), renderTranslationFields(recipe.translations.find((item) => item.locale === state.activeLocale)));
  mainColumn.append(status);
  form.append(mainColumn, sideColumn);
  renderLivePreview(recipe, previewCard);
  form.addEventListener("input", () => {
    try {
      collectRecipe(form, recipe);
      renderLivePreview(recipe, previewCard);
    } catch {}
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";
    save.disabled = true;
    try {
      const payload = collectRecipe(form, recipe);
      const path = state.editing ? "/api/admin/recipes/" + encodeURIComponent(state.editing.recipeId) : "/api/admin/recipes";
      const method = state.editing ? "PUT" : "POST";
      const data = await api(path, { method, body: JSON.stringify(payload) });
      state.editing = data.recipe;
      state.draft = null;
      state.images = data.recipe.images || [];
      resetSelectedFile();
      location.hash = "#edit-" + data.recipe.recipeId;
      renderForm();
      showSuccessModal("Rezept gespeichert!");
    } catch (error) {
      status.textContent = error.message || "Save failed.";
      save.disabled = false;
    }
  });
}
function renderBasics(recipe) {
  const panel = card("Basics", "Publishing, URL and timing.");
  const grid = document.createElement("div");
  grid.className = "admin-grid";
  const slugInput = input("slug", recipe.slug);
  slugInput.placeholder = "mapo-tofu";
  grid.append(
    field("Slug", slugInput),
    field("Status", select("status", recipe.status, [["draft","Draft"],["published","Published"]])),
    field("Difficulty", select("difficulty", recipe.difficulty, [["easy","Easy"],["medium","Medium"],["hard","Hard"]])),
    field("Servings", input("servings", recipe.servings, "number")),
    field("Prep min", input("prepMinutes", recipe.prepMinutes, "number")),
    field("Cook min", input("cookMinutes", recipe.cookMinutes, "number")),
    field("Total min", input("totalMinutes", recipe.totalMinutes, "number")),
    field("Tags", input("tags", (recipe.tags || []).join(", ")), "Comma-separated")
  );
  panel.append(grid);
  return panel;
}
function renderImagePanel(recipe) {
  const panel = card("Images", "Upload, preview and choose the hero image.");
  const upload = document.createElement("div");
  upload.className = "admin-upload";
  const drop = document.createElement("label");
  drop.className = "admin-drop";
  const file = input("image", "", "file");
  file.accept = "image/jpeg,image/png,image/webp";
  if (state.selectedPreviewUrl) {
    const img = document.createElement("img");
    img.src = state.selectedPreviewUrl;
    img.alt = "";
    drop.append(img);
  } else {
    const empty = document.createElement("span");
    empty.className = "admin-drop-empty";
    empty.textContent = "Choose image";
    drop.append(empty);
  }
  drop.append(file);
  const meta = document.createElement("div");
  meta.className = "admin-file-meta";
  const alt = input("imageAlt", "", "text");
  alt.placeholder = "Alt text";
  const fileInfo = document.createElement("p");
  fileInfo.className = "admin-muted";
  fileInfo.textContent = state.selectedFile ? state.selectedFile.name + " · " + formatBytes(state.selectedFile.size) : "JPEG, PNG or WebP up to 5 MB.";
  const uploadBtn = button("Upload image", "secondary", async () => {
    if (!state.selectedFile) return;
    const form = panel.closest("form");
    try { if (form) collectRecipe(form, recipe); } catch {}
    uploadBtn.disabled = true;
    const data = new FormData();
    data.append("file", state.selectedFile);
    data.append("altText", alt.value);
    const result = await api("/api/admin/images", { method: "POST", body: data });
    state.images.push(result.image);
    resetSelectedFile();
    renderForm();
  });
  file.addEventListener("change", () => {
    const form = panel.closest("form");
    try { if (form) collectRecipe(form, recipe); } catch {}
    resetSelectedFile();
    state.selectedFile = file.files && file.files[0] ? file.files[0] : null;
    state.selectedPreviewUrl = state.selectedFile ? URL.createObjectURL(state.selectedFile) : "";
    renderForm();
  });
  meta.append(field("Alt text", alt), fileInfo, uploadBtn);
  upload.append(drop, meta);
  panel.append(upload, imageGrid(recipe));
  return panel;
}
function imageGrid(recipe) {
  const grid = document.createElement("div");
  grid.className = "admin-image-grid";
  const images = state.images || recipe.images || [];
  images.forEach((image, index) => {
    const item = document.createElement("article");
    item.className = "admin-image-card";
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.altText || "";
    const body = document.createElement("div");
    body.className = "admin-image-card-body";
    const hero = document.createElement("label");
    hero.className = "admin-hero-choice";
    const radio = input("heroImageId", image.id, "radio");
    radio.checked = image.isHero || recipe.heroImageId === image.id || (!recipe.heroImageId && index === 0);
    radio.addEventListener("change", () => {
      images.forEach((entry) => { entry.isHero = entry.id === image.id; });
      recipe.heroImageId = image.id;
      const preview = $(".admin-preview");
      if (preview) renderLivePreview(recipe, preview);
    });
    hero.append(radio, document.createTextNode("Hero"));
    const remove = button("Delete", "danger", async () => {
      if (!confirm("Delete this image?")) return;
      await api("/api/admin/images/" + encodeURIComponent(image.id), { method: "DELETE" });
      state.images = state.images.filter((entry) => entry.id !== image.id);
      renderForm();
    });
    body.append(hero, remove);
    item.append(img, body);
    grid.append(item);
  });
  return grid;
}
function renderLocaleTabs(recipe) {
  const panel = card("Language", "Edit one language at a time.");
  const tabs = document.createElement("div");
  tabs.className = "admin-tabs";
  locales.forEach((locale) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "admin-tab";
    tab.textContent = localeNames[locale];
    tab.setAttribute("aria-selected", String(state.activeLocale === locale));
    tab.addEventListener("click", () => {
      const form = tab.closest("form");
      try { if (form) collectRecipe(form, recipe); } catch {}
      state.activeLocale = locale;
      renderForm();
    });
    tabs.append(tab);
  });
  panel.append(tabs);
  return panel;
}
function renderTranslationFields(translation) {
  const panel = card(localeNames[translation.locale] + " content", "Title, copy, ingredients, steps and nutrition.");
  const grid = document.createElement("div");
  grid.className = "admin-grid";
  const title = input("title", translation.title);
  title.placeholder = "Recipe title";
  const description = input("description", translation.description, "textarea");
  const notes = input("notes", translation.notes, "textarea");
  grid.append(
    field("Title", title),
    field("Origin", input("origin", translation.origin)),
    field("Occasion", input("occasion", translation.occasion)),
    field("Description", description),
    field("Notes", notes)
  );
  grid.lastChild.classList.add("full");
  panel.append(grid, repeatIngredients(translation.ingredients || []), repeatSteps(translation.steps || []), nutritionFields(translation.nutrition || {}));
  return panel;
}
function repeatIngredients(items) {
  const block = card("Ingredients", "");
  const rows = document.createElement("div");
  rows.className = "admin-repeat";
  function addRow(item = {}) {
    const row = document.createElement("div");
    row.className = "admin-ingredient-row";
    const here = input("ingInStore", "1", "checkbox");
    here.checked = Boolean(item.inStore);
    const inStore = document.createElement("label");
    inStore.className = "admin-row-label";
    inStore.append(here, document.createTextNode("In store"));
    row.append(input("ingName", item.name), input("ingAmount", item.amount), input("ingUnit", item.unit), input("ingAisle", item.aisle), inStore, button("Remove", "danger", () => row.remove()));
    rows.append(row);
  }
  (items.length ? items : [{}]).forEach(addRow);
  block.append(rows, button("Add ingredient", "secondary", () => addRow()));
  return block;
}
function repeatSteps(items) {
  const block = card("Steps", "");
  const rows = document.createElement("div");
  rows.className = "admin-repeat";
  function addRow(item = {}) {
    const row = document.createElement("div");
    row.className = "admin-step-row";
    row.append(input("stepText", item.text), input("stepTimer", item.timerSeconds || 0, "number"), button("Remove", "danger", () => row.remove()));
    rows.append(row);
  }
  (items.length ? items : [{}]).forEach(addRow);
  block.append(rows, button("Add step", "secondary", () => addRow()));
  return block;
}
function nutritionFields(nutrition) {
  const block = card("Nutrition", "Optional values per serving.");
  const grid = document.createElement("div");
  grid.className = "admin-nutrition";
  grid.append(
    field("Kcal", input("nutritionKcal", nutrition.kcal || "", "number")),
    field("Protein", input("nutritionProtein", nutrition.protein || "", "number")),
    field("Carbs", input("nutritionCarbs", nutrition.carbs || "", "number")),
    field("Fat", input("nutritionFat", nutrition.fat || "", "number"))
  );
  block.append(grid);
  return block;
}
function numberOrUndefined(value) {
  const next = Number(value);
  return Number.isFinite(next) && next > 0 ? next : undefined;
}
function collectRecipe(form, recipe) {
  const data = new FormData(form);
  const current = recipe.translations.find((item) => item.locale === state.activeLocale);
  current.title = text(data.get("title")).trim();
  current.description = text(data.get("description")).trim();
  current.origin = text(data.get("origin")).trim();
  current.occasion = text(data.get("occasion")).trim();
  current.notes = text(data.get("notes")).trim();
  current.ingredients = all(".admin-ingredient-row", form).map((row) => ({
    name: row.querySelector("[name=ingName]").value.trim(),
    amount: row.querySelector("[name=ingAmount]").value.trim(),
    unit: row.querySelector("[name=ingUnit]").value.trim(),
    aisle: row.querySelector("[name=ingAisle]").value.trim(),
    inStore: row.querySelector("[name=ingInStore]").checked,
  })).filter((item) => item.name);
  current.steps = all(".admin-step-row", form).map((row) => ({
    text: row.querySelector("[name=stepText]").value.trim(),
    timerSeconds: Number(row.querySelector("[name=stepTimer]").value || 0),
  })).filter((item) => item.text);
  current.nutrition = {
    ...(numberOrUndefined(data.get("nutritionKcal")) ? { kcal: numberOrUndefined(data.get("nutritionKcal")) } : {}),
    ...(numberOrUndefined(data.get("nutritionProtein")) ? { protein: numberOrUndefined(data.get("nutritionProtein")) } : {}),
    ...(numberOrUndefined(data.get("nutritionCarbs")) ? { carbs: numberOrUndefined(data.get("nutritionCarbs")) } : {}),
    ...(numberOrUndefined(data.get("nutritionFat")) ? { fat: numberOrUndefined(data.get("nutritionFat")) } : {}),
  };
  const imageIds = (state.images || []).map((image) => image.id);
  const checkedHero = form.querySelector("[name=heroImageId]:checked")?.value;
  recipe.slug = text(data.get("slug")).trim();
  recipe.status = text(data.get("status")) || "draft";
  recipe.servings = Number(data.get("servings") || 2);
  recipe.prepMinutes = Number(data.get("prepMinutes") || 0);
  recipe.cookMinutes = Number(data.get("cookMinutes") || 0);
  recipe.totalMinutes = Number(data.get("totalMinutes") || 0);
  recipe.difficulty = text(data.get("difficulty")) || "easy";
  recipe.tags = text(data.get("tags")).split(",").map((tag) => tag.trim().toLowerCase()).filter(Boolean);
  recipe.heroImageId = checkedHero || imageIds[0] || "";
  return {
    slug: recipe.slug,
    status: recipe.status,
    servings: recipe.servings,
    prepMinutes: recipe.prepMinutes,
    cookMinutes: recipe.cookMinutes,
    totalMinutes: recipe.totalMinutes,
    difficulty: recipe.difficulty,
    tags: recipe.tags,
    imageIds,
    ...(recipe.heroImageId ? { heroImageId: recipe.heroImageId } : {}),
    translations: recipe.translations.filter((item) => item.locale === "en" || item.title || item.description),
  };
}
function renderLivePreview(recipe, target) {
  target.replaceChildren();
  const translation = recipe.translations.find((item) => item.locale === state.activeLocale) || recipe.translations[0] || defaultTranslation("en");
  const heroId = recipe.heroImageId || (target.closest("form")?.querySelector("[name=heroImageId]:checked")?.value);
  const hero = (state.images || []).find((image) => image.id === heroId) || (state.images || [])[0];
  const media = document.createElement("div");
  media.className = "admin-preview-image";
  if (hero?.url) {
    const img = document.createElement("img");
    img.src = hero.url;
    img.alt = hero.altText || "";
    media.append(img);
  } else {
    media.textContent = "No image";
  }
  const body = document.createElement("div");
  body.className = "admin-preview-body";
  const title = document.createElement("h2");
  title.textContent = translation.title || "Untitled recipe";
  const desc = document.createElement("p");
  desc.textContent = translation.description || "Description preview";
  const tags = document.createElement("div");
  tags.className = "admin-tags";
  (recipe.tags || []).forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "admin-chip";
    chip.textContent = tag;
    tags.append(chip);
  });
  const stats = document.createElement("div");
  stats.className = "admin-preview-stats";
  [["Time", recipe.totalMinutes ? recipe.totalMinutes + " min" : "-"], ["Serves", recipe.servings || "-"], ["Status", recipe.status || "draft"]].forEach(([label, value]) => {
    const stat = document.createElement("div");
    stat.className = "admin-preview-stat";
    const span = document.createElement("span");
    span.textContent = label;
    const strong = document.createElement("strong");
    strong.textContent = value;
    stat.append(span, strong);
    stats.append(stat);
  });
  body.append(title, desc, tags, stats);
  target.append(media, body);
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
    if (location.hash.startsWith("#view-")) {
      await loadRecipe(location.hash.replace("#view-", ""));
      renderRecipeView();
      return;
    }
    if (location.hash === "#new") {
      state.editing = null;
      state.draft = null;
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
