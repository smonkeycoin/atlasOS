const STORE = "atlas_os_local_state_v1";
const SESSION = "atlas_os_session_v1";

const icons = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9h1M9 13h1M9 17h1M16 13h1M16 17h1"/></svg>',
  board: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M15 4v16"/></svg>',
  message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h8l-1 8 11-14h-8z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20"/><path d="M12 2a15 15 0 0 0 0 20"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="5"/><rect x="12" y="8" width="3" height="9"/><rect x="17" y="5" width="3" height="12"/></svg>',
  shop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10h16l-1-6H5z"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.4.22.76.55 1 .95.24.4.37.85.4 1.3V12a1.7 1.7 0 0 0-1.4 3z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>'
};

const nav = [
  ["command", "Command Center", icons.grid],
  ["properties", "Properties", icons.building],
  ["crm", "CRM", icons.users],
  ["deals", "Deals / Kanban", icons.board],
  ["whatsapp", "WhatsApp OS", icons.message],
  ["automation", "Automation Engine", icons.zap],
  ["web", "Web Engine", icons.globe],
  ["docs", "Docs", icons.doc],
  ["analytics", "Analytics", icons.chart],
  ["marketplace", "Marketplace", icons.shop],
  ["settings", "Settings", icons.gear]
];

const routes = new Set(nav.map(([key]) => key));

const seed = {
  tenant: { name: "R³ Realty Demo", plan: "Founder", tenantId: "tenant_r3_atlas_demo", status: "Local demo" },
  users: [
    { name: "Trino Founder", role: "Founder", initials: "TF" },
    { name: "Mariana López", role: "Asesora Senior", initials: "ML" },
    { name: "Daniel Torres", role: "Asesor", initials: "DT" },
    { name: "Sofía Herrera", role: "Coordinación", initials: "SH" }
  ],
  properties: [
    { id: "p1", title: "Penthouse Arcos Vallarta", city: "Guadalajara", area: "Arcos Vallarta", price: 18400000, op: "Venta", status: "Publicado", advisor: "Mariana López", leads: 18, score: 92, updated: "Hoy 10:40", web: "Sincronizado", mls: "Activo", media: 96 },
    { id: "p2", title: "Casa Bosques de Santa Anita", city: "Zapopan", area: "Bosques de Santa Anita", price: 8750000, op: "Venta", status: "En revisión", advisor: "Daniel Torres", leads: 11, score: 81, updated: "Ayer 18:10", web: "Pendiente", mls: "Borrador", media: 74 },
    { id: "p3", title: "Departamento Providencia", city: "Guadalajara", area: "Providencia", price: 42500, op: "Renta", status: "Publicado", advisor: "Mariana López", leads: 26, score: 88, updated: "Hoy 09:20", web: "Sincronizado", mls: "Activo", media: 89 },
    { id: "p4", title: "Local Comercial Andares", city: "Zapopan", area: "Andares", price: 92000, op: "Renta", status: "Publicado", advisor: "Sofía Herrera", leads: 9, score: 76, updated: "Lun 14:05", web: "Sincronizado", mls: "Activo", media: 82 },
    { id: "p5", title: "Terreno Punta Mita", city: "Puerto Vallarta", area: "Punta Mita", price: 31200000, op: "Venta", status: "Privado", advisor: "Trino Founder", leads: 6, score: 69, updated: "Vie 12:44", web: "No publicado", mls: "Privado", media: 58 },
    { id: "p6", title: "Desarrollo Aura Living", city: "Cancún", area: "Zona Hotelera", price: 6400000, op: "Venta", status: "Publicado", advisor: "Daniel Torres", leads: 34, score: 94, updated: "Hoy 11:12", web: "Cambios listos", mls: "Activo", media: 91 }
  ],
  leads: [
    { id: "l1", name: "Carlos Méndez", source: "WhatsApp", advisor: "Mariana López", next: "Hoy 16:00", temp: "caliente", score: 91, property: "Penthouse Arcos Vallarta", summary: "Busca inversión premium en Guadalajara; pidió ficha y disponibilidad para visita privada." },
    { id: "l2", name: "Fernanda Ríos", source: "Facebook", advisor: "Daniel Torres", next: "Mañana 10:30", temp: "tibio", score: 74, property: "Desarrollo Aura Living", summary: "Interés en preventa para Cancún, presupuesto claro y decisión familiar." },
    { id: "l3", name: "Jorge Salvatierra", source: "Web", advisor: "Sofía Herrera", next: "Hoy 13:00", temp: "frío", score: 52, property: "Local Comercial Andares", summary: "Explora locales para expansión; requiere comparativo de renta y condiciones." },
    { id: "l4", name: "Ana Paula Cortés", source: "Portal", advisor: "Mariana López", next: "Jue 17:30", temp: "caliente", score: 87, property: "Departamento Providencia", summary: "Necesita mudanza en 30 días, perfil compatible con renta ejecutiva." },
    { id: "l5", name: "Roberto Larios", source: "Referido", advisor: "Trino Founder", next: "Vie 12:00", temp: "tibio", score: 68, property: "Terreno Punta Mita", summary: "Cliente patrimonial; requiere análisis de plusvalía y uso de suelo." },
    { id: "l6", name: "Michelle Zamora", source: "WhatsApp", advisor: "Daniel Torres", next: "Hoy 19:00", temp: "caliente", score: 89, property: "Casa Bosques de Santa Anita", summary: "Familia lista para visitar; pidió ubicación, amenidades y esquema de apartado." }
  ],
  deals: [
    { id: "d1", lead: "Carlos Méndez", property: "Penthouse Arcos Vallarta", value: 18400000, advisor: "Mariana López", stage: "Calificado", last: "WhatsApp hace 18 min", score: 91 },
    { id: "d2", lead: "Fernanda Ríos", property: "Desarrollo Aura Living", value: 6400000, advisor: "Daniel Torres", stage: "Contactado", last: "Facebook hace 2 h", score: 74 },
    { id: "d3", lead: "Ana Paula Cortés", property: "Departamento Providencia", value: 42500, advisor: "Mariana López", stage: "Visita agendada", last: "Web hace 1 h", score: 87 },
    { id: "d4", lead: "Roberto Larios", property: "Terreno Punta Mita", value: 31200000, advisor: "Trino Founder", stage: "Negociación", last: "Llamada ayer", score: 68 },
    { id: "d5", lead: "Michelle Zamora", property: "Casa Bosques de Santa Anita", value: 8750000, advisor: "Daniel Torres", stage: "Nuevo", last: "WhatsApp hace 7 min", score: 89 }
  ],
  activities: [
    "Lead nuevo desde Facebook: Fernanda Ríos",
    "WhatsApp enviado a Carlos Méndez",
    "Propiedad actualizada: Desarrollo Aura Living",
    "Deal movido a Seguimiento: Ana Paula Cortés",
    "Documento generado: carta oferta",
    "Listing sincronizado: Penthouse Arcos Vallarta"
  ],
  workflows: [
    { name: "Lead nuevo desde web", trigger: "New Lead", actions: ["Asignar asesor", "Enviar WhatsApp", "Crear deal", "Crear tarea", "Notificar gerente"], status: "Activo" },
    { name: "Propiedad actualizada", trigger: "Property Updated", actions: ["Actualizar Web Engine", "Revisar completitud", "Publicar cambios", "Notificar asesor"], status: "Activo" },
    { name: "Deal sin seguimiento 48h", trigger: "Deal Idle", actions: ["Alertar asesor", "Enviar recordatorio", "Subir prioridad"], status: "Activo" }
  ],
  messages: [
    { lead: "Carlos Méndez", preview: "¿Podemos agendar visita esta semana?", temp: "caliente", messages: [["in", "Hola, vi el penthouse y quiero entender disponibilidad."], ["out", "Claro, Carlos. Tengo ficha, galería y horarios disponibles para visita privada."], ["in", "Perfecto. ¿Me la puedes mandar por WhatsApp?"]] },
    { lead: "Michelle Zamora", preview: "Me interesa Bosques de Santa Anita", temp: "caliente", messages: [["in", "Buscamos casa al sur para familia de 4."], ["out", "Michelle, esta propiedad calza muy bien. Te comparto ficha y opciones de visita."]] },
    { lead: "Jorge Salvatierra", preview: "Necesito condiciones del local", temp: "frío", messages: [["in", "¿El local permite giro restaurante?"], ["out", "Lo confirmo con coordinación y te mando condiciones de operación."]] }
  ]
};

let state = loadState();
let current = normalizeRoute(location.hash.replace("#", ""));
let activeChat = 0;

function normalizeRoute(route) {
  return routes.has(route) ? route : "command";
}

function loadState() {
  const raw = localStorage.getItem(STORE);
  if (!raw) {
    localStorage.setItem(STORE, JSON.stringify(seed));
    return structuredClone(seed);
  }
  try { return JSON.parse(raw); } catch { return structuredClone(seed); }
}

function saveState() { localStorage.setItem(STORE, JSON.stringify(state)); }
function money(n) { return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n); }
function el(id) { return document.getElementById(id); }
function slug(text) { return String(text).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); }
function tempBadge(temp) { return `<span class="badge ${temp === "caliente" ? "hot" : temp === "tibio" ? "warm" : "cold"}">${temp}</span>`; }

function boot() {
  if (!localStorage.getItem(SESSION)) renderLogin();
  else renderApp();
}

function renderLogin() {
  el("app").innerHTML = `
    <main class="login-shell">
      <section class="login-brand">
        <div class="login-mark">
          <img src="assets/brand/atlas-symbol.svg" alt="ATLAS OS">
          <div><h1>ATLAS OS</h1><p>El sistema operativo para inmobiliarias modernas.</p></div>
        </div>
        <div class="login-copy">
          <span class="eyebrow">Founder Build · México y LATAM</span>
          <h2>No más CRM pasivo. Atlas opera contigo.</h2>
          <p>Atlas conecta tu inventario, tus leads y tus procesos comerciales en un solo núcleo operativo. Cada evento puede activar seguimiento, WhatsApp, tareas, publicación web o alerta gerencial.</p>
        </div>
        <div class="login-metrics">
          <div class="login-metric"><strong>11</strong><span>Módulos SaaS</span></div>
          <div class="login-metric"><strong>24/7</strong><span>Operación local</span></div>
          <div class="login-metric"><strong>0</strong><span>APIs reales aún</span></div>
        </div>
      </section>
      <section class="login-panel">
        <form class="login-card" id="loginForm">
          <span class="eyebrow">Acceso demo</span>
          <h2>Entrar a ATLAS OS</h2>
          <p class="muted">Usuario demo: <strong>admin@atlasos.mx</strong><br>Password: <strong>atlas123</strong></p>
          <div class="field"><label>Email</label><input id="email" type="email" value="admin@atlasos.mx" autocomplete="username"></div>
          <div class="field"><label>Password</label><input id="password" type="password" value="atlas123" autocomplete="current-password"></div>
          <div class="error" id="loginError"></div>
          <div class="login-actions">
            <button class="btn primary" type="submit">Entrar a demo</button>
            <button class="btn dark" type="button" id="founderBtn">Entrar como Founder Demo</button>
          </div>
        </form>
      </section>
    </main>`;
  el("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = el("email").value.trim() === "admin@atlasos.mx" && el("password").value === "atlas123";
    if (!ok) return el("loginError").textContent = "Credenciales demo inválidas.";
    login();
  });
  el("founderBtn").addEventListener("click", login);
}

function login() {
  localStorage.setItem(SESSION, JSON.stringify({ user: "Trino Founder", at: new Date().toISOString() }));
  renderApp();
}

function logout() {
  localStorage.removeItem(SESSION);
  location.hash = "";
  renderLogin();
}

function shell(content) {
  return `
    <div class="app-shell">
      <aside class="sidebar" id="sidebar">
        <div class="brand-row"><img src="assets/brand/atlas-symbol.svg" alt=""><div><strong>ATLAS OS</strong><span>Operating system</span></div></div>
        <div class="workspace-card">
          <span>Workspace</span><strong>${state.tenant.name}</strong>
          <div class="workspace-meta"><span class="chip gold">Founder Build</span><span class="chip gray">${state.tenant.plan}</span></div>
        </div>
        <div class="nav-label">Navigation</div>
        <nav class="nav-list">${nav.map(([key, label, icon]) => `<button class="nav-item ${current === key ? "active" : ""}" data-route="${key}">${icon}<span>${label}</span></button>`).join("")}</nav>
        <div class="sidebar-footer"><strong>Tenant ID</strong><p>${state.tenant.tenantId}<br>Módulos activables, roles y billing placeholder listos para evolucionar.</p></div>
      </aside>
      <main class="main">
        <header class="topbar">
          <button class="btn icon mobile-menu" id="menuBtn" title="Abrir navegación">${icons.menu}</button>
          <div class="command">${icons.search}<input id="searchBox" placeholder="Buscar lead, propiedad, deal o comando..."><span class="kbd">⌘K</span></div>
          <div class="top-actions">
            <span class="chip green status-chip">Local demo</span>
            <button class="btn">${icons.plus}Nuevo</button>
            <button class="btn dark automation-top" data-route="automation">${icons.zap}Automation</button>
            <div class="avatar">TF</div>
            <button class="btn ghost small" id="logoutBtn">Cerrar sesión</button>
          </div>
        </header>
        <section class="content">${content}</section>
      </main>
    </div>
    <div class="drawer-backdrop" id="drawerBackdrop"></div><aside class="drawer" id="drawer"></aside>
    <div class="modal-backdrop" id="modalBackdrop"></div><section class="modal" id="modal"></section>`;
}

function renderApp() {
  current = normalizeRoute(location.hash.replace("#", "") || current);
  const views = { command, properties, crm, deals, whatsapp, automation, web, docs, analytics, marketplace, settings };
  el("app").innerHTML = shell((views[current] || command)());
  bindShell();
  bindView();
}

function bindShell() {
  document.querySelectorAll("[data-route]").forEach(btn => btn.addEventListener("click", () => navigateTo(btn.dataset.route)));
  el("logoutBtn").addEventListener("click", logout);
  el("menuBtn")?.addEventListener("click", () => el("sidebar").classList.toggle("open"));
  el("drawerBackdrop").addEventListener("click", closeDrawer);
  el("modalBackdrop").addEventListener("click", closeModal);
  el("searchBox").addEventListener("focus", () => openModal("Command Palette", commandPalette()));
}

function navigateTo(route) {
  const next = normalizeRoute(route);
  if (current === next && location.hash === `#${next}`) {
    renderApp();
    return;
  }
  current = next;
  location.hash = next;
}

window.addEventListener("hashchange", renderApp);

function page(title, subcopy, body, actions = "") {
  return `<div class="page-head"><div class="page-title"><h1>${title}</h1><p>${subcopy}</p></div><div class="top-actions">${actions}</div></div>${body}`;
}

function command() {
  const totalValue = state.properties.reduce((sum, p) => sum + (p.op === "Venta" ? p.price : p.price * 120), 0);
  return `
    <section class="hero-card">
      <div><span class="eyebrow">Command Center</span><h1>Tu inmobiliaria operando en tiempo real</h1><p>Leads, propiedades, asesores, automatizaciones y web sync conectados en un solo núcleo. Atlas conecta tu inventario, tus leads y tus procesos comerciales en un solo núcleo operativo.</p></div>
      <div class="hero-stat"><strong>${state.activities.length}</strong><span>eventos recientes</span></div>
    </section>
    <div style="height:16px"></div>
    <section class="grid kpi-grid">
      ${kpi("Leads nuevos", "42", "+18% vs semana", icons.users)}
      ${kpi("Propiedades activas", state.properties.filter(p => p.status !== "Privado").length, "3 con cambios", icons.building)}
      ${kpi("Valor de inventario", money(totalValue), "+12% pipeline", icons.home)}
      ${kpi("Respuesta WhatsApp", "91%", "8 min promedio", icons.message)}
      ${kpi("Deals seguimiento", state.deals.length, "2 calientes", icons.board)}
      ${kpi("Automatizaciones", state.workflows.length, "todas activas", icons.zap)}
    </section>
    <div style="height:16px"></div>
    <section class="grid sidebar-layout">
      <div class="card"><h2>Atlas Intelligence</h2><div class="list">
        ${["14 leads requieren seguimiento hoy", "3 propiedades llevan más de 21 días sin movimiento", "El asesor con mejor conversión esta semana es Mariana López", "2 listings necesitan actualización de precio", "El Web Engine tiene 8 cambios listos para publicar"].map((x, i) => `<div class="row-item"><div class="row-main"><strong>${x}</strong><span>Insight operativo #${i + 1}</span></div><span class="chip cyan">AI</span></div>`).join("")}
      </div></div>
      <div class="card"><h2>Live Activity</h2><div class="list">${state.activities.slice(0, 8).map(x => `<div class="row-item"><div class="row-main"><strong>${x}</strong><span>Ahora en el event stream local</span></div></div>`).join("")}</div></div>
    </section>
    <div style="height:16px"></div>
    <section class="card"><h2>Operating Flow</h2><p>Cada evento puede activar una acción: seguimiento, WhatsApp, tarea, publicación web o alerta gerencial.</p><div class="flow">${["Lead Engine", "CRM", "WhatsApp", "Kanban", "Web Engine", "Analytics"].map((x, i) => `<div class="flow-step">${[icons.zap, icons.users, icons.message, icons.board, icons.globe, icons.chart][i]}<strong>${x}</strong><span>${i === 0 ? "Entrada" : i === 5 ? "Medición" : "Evento conectado"}</span></div>`).join("")}</div></section>`;
}

function kpi(label, value, trend, icon) {
  return `<div class="card kpi"><div class="iconbubble">${icon}</div><strong>${value}</strong><span>${label}</span><em class="trend">${trend}</em></div>`;
}

function properties() {
  const rows = state.properties.map(p => `
    <tr data-property="${p.id}">
      <td><strong>${p.title}</strong><br><span class="muted">${p.area}, ${p.city}</span></td><td>${money(p.price)}</td><td>${p.op}</td><td><span class="badge">${p.status}</span></td><td>${p.advisor}</td><td>${p.leads}</td><td>${p.web}</td><td><div class="scorebar"><span style="width:${p.score}%"></span></div></td><td>${p.updated}</td>
    </tr>`).join("");
  return page("Properties", "El Property Engine evita doble captura y mantiene sincronizada la información comercial, operativa y pública.",
    `<div class="filters">
      <select><option>Venta y renta</option><option>Venta</option><option>Renta</option></select><select><option>Todas las ciudades</option><option>Guadalajara</option><option>Zapopan</option><option>Cancún</option></select><select><option>Todos los status</option><option>Publicado</option><option>En revisión</option></select><input placeholder="Buscar propiedad">
    </div>
    <div class="grid three">${state.properties.slice(0,3).map(propertyCard).join("")}</div><div style="height:16px"></div>
    <div class="table-wrap"><table><thead><tr><th>Propiedad</th><th>Precio</th><th>Operación</th><th>Status</th><th>Asesor</th><th>Leads</th><th>Web Sync</th><th>Score</th><th>Actualización</th></tr></thead><tbody>${rows}</tbody></table></div>`,
    `<button class="btn primary">${icons.plus}Nueva propiedad</button>`);
}

function propertyCard(p) {
  return `<button class="card property-card" data-property="${p.id}" style="text-align:left;width:100%">
    <div class="property-top"><div><strong>${p.title}</strong><p>${p.area}, ${p.city}</p></div><span class="price">${money(p.price)}</span></div>
    <div><div class="workspace-meta"><span class="chip">${p.web}</span><span class="chip gray">MLS ${p.mls}</span><span class="chip green">Media ${p.media}%</span></div><div class="scorebar" style="margin-top:14px"><span style="width:${p.score}%"></span></div></div>
  </button>`;
}

function crm() {
  return page("CRM", "Lead inbox, scoring, fuente, asesor asignado y próxima mejor acción en contexto operativo.",
    `<section class="grid sidebar-layout">
      <div class="card"><h2>Lead Inbox</h2><div class="list">${state.leads.map((l, i) => `<button class="row-item" data-lead="${i}" style="width:100%;text-align:left"><div class="row-main"><strong>${l.name}</strong><span>${l.source} · ${l.property} · ${l.advisor}</span></div><span class="chip">Score ${l.score}</span>${tempBadge(l.temp)}</button>`).join("")}</div></div>
      <aside class="card" id="leadPanel">${leadPanel(state.leads[0])}</aside>
    </section>`);
}

function leadPanel(l) {
  return `<h2>Lead Intelligence</h2><p>${l.summary}</p><div class="list">
    <div class="row-item"><div class="row-main"><strong>Próxima mejor acción</strong><span>Enviar ficha y proponer dos horarios de visita.</span></div></div>
    <div class="row-item"><div class="row-main"><strong>Propiedad recomendada</strong><span>${l.property}</span></div></div>
    <div class="row-item"><div class="row-main"><strong>Mensaje sugerido</strong><span>Hola ${l.name.split(" ")[0]}, tengo lista la ficha y disponibilidad para visita. ¿Te funciona hoy por la tarde?</span></div></div>
  </div>`;
}

function deals() {
  const stages = ["Nuevo", "Contactado", "Calificado", "Visita agendada", "Negociación", "Apartado", "Cierre"];
  return page("Deals / Kanban", "Pipeline premium con drag & drop local. Al mover un deal, Atlas genera actividad y una automatización mock.",
    `<div class="kanban">${stages.map(stage => `<div class="kanban-col" data-stage="${stage}"><div class="kanban-title">${stage}<span class="chip gray">${state.deals.filter(d => d.stage === stage).length}</span></div>${state.deals.filter(d => d.stage === stage).map(dealCard).join("")}</div>`).join("")}</div>`);
}

function dealCard(d) {
  return `<div class="deal-card" draggable="true" data-deal="${d.id}">
    <strong>${d.lead}</strong><div class="deal-meta"><span>${d.property}</span><span>${money(d.value)} · ${d.advisor}</span><span>${d.last}</span></div>
    <div class="workspace-meta"><span class="chip green">WhatsApp</span><span class="chip">Score ${d.score}</span></div>
    <div class="deal-actions"><button class="btn small" data-move="${d.id}" data-dir="-1">←</button><button class="btn small" data-move="${d.id}" data-dir="1">→</button></div>
  </div>`;
}

function whatsapp() {
  const chat = state.messages[activeChat] || state.messages[0];
  return page("WhatsApp OS", "Centro operativo de conversaciones, contexto comercial, plantillas y acciones conectadas al pipeline.",
    `<section class="chat-shell">
      <div class="card"><h2>Inbox</h2><div class="list">${state.messages.map((m, i) => `<button class="conversation ${i === activeChat ? "active" : ""}" data-chat="${i}" style="text-align:left"><strong>${m.lead}</strong><span class="muted">${m.preview}</span>${tempBadge(m.temp)}</button>`).join("")}</div></div>
      <div class="card chat-panel"><h2>${chat.lead}</h2><div class="messages">${chat.messages.map(([type, msg]) => `<div class="message ${type}">${msg}</div>`).join("")}</div><div class="composer"><input id="replyInput" placeholder="Responder con contexto operativo..."><button class="btn primary" id="sendReply">Enviar</button></div></div>
      <aside class="card context-panel"><h2>Contexto operativo</h2><div class="list">${["Responder con plantilla", "Generar respuesta con IA", "Asignar asesor", "Crear deal", "Programar seguimiento", "Enviar ficha de propiedad", "Marcar como caliente"].map(x => `<button class="row-item" data-action="${x}" style="width:100%;text-align:left"><div class="row-main"><strong>${x}</strong><span>Acción mock conectada a Atlas</span></div></button>`).join("")}</div><h3>Plantillas</h3><div class="workspace-meta">${["Primer contacto", "Enviar ficha", "Agendar visita", "Seguimiento 24h", "Reenganche", "Cierre"].map(x => `<span class="chip">${x}</span>`).join("")}</div></aside>
    </section>`);
}

function automation() {
  return page("Automation Engine", "El Automation Engine convierte tu proceso comercial en flujos medibles y repetibles.",
    `<section class="grid sidebar-layout">
      <div class="card"><h2>Builder visual</h2><div class="workflow-builder"><div class="block"><small>WHEN</small><strong>New Lead</strong><p>Entrada desde web, Facebook, portal o WhatsApp.</p></div><div class="block"><small>IF</small><strong>Score mayor a 70</strong><p>Condiciones por fuente, ciudad, presupuesto y temperatura.</p></div><div class="block"><small>THEN</small><strong>Asignar + WhatsApp + Deal</strong><p>Acciones repetibles con medición y auditoría.</p></div></div></div>
      <div class="card"><h2>Workflows activos</h2><div class="list">${state.workflows.map(w => `<div class="row-item"><div class="row-main"><strong>${w.name}</strong><span>Trigger: ${w.trigger}<br>${w.actions.join(" · ")}</span></div><span class="chip green">${w.status}</span></div>`).join("")}</div></div>
    </section><div style="height:16px"></div><section class="grid three">${["Triggers", "Conditions", "Actions"].map((x, i) => `<div class="card"><h2>${x}</h2><p>${["New Lead, Property Updated, Deal Idle, Task Due", "Score, ciudad, asesor, etapa, inactividad", "WhatsApp, tareas, alertas, Web Sync, docs"][i]}</p></div>`).join("")}</section>`);
}

function web() {
  return page("Web Engine", "Atlas no edita HTML manualmente. Atlas crea un Property Engine central y el sitio consume datos desde API/Web Engine.",
    `<section class="card"><h2>Property Engine → Web Engine → Canales</h2><div class="pipeline">${["Property Engine", "Web Engine", "Website", "MLS", "Landing pages", "Portales"].map((x, i) => `<div class="pipeline-node"><strong>${x}</strong><br><span>${["Fuente central", "Publicación y SEO", "Sitio sincronizado", "Inventario externo", "Campañas por propiedad", "Distribución futura"][i]}</span></div>`).join("")}</div></section><div style="height:16px"></div>
    <section class="grid three">${["Web Sync Queue", "Cambios pendientes", "Listings publicados", "Errores de publicación", "SEO status", "Preview cards"].map((x, i) => `<div class="card"><h2>${x}</h2><p>${[8, 12, 48, 1, "94%", 6][i]} elementos en demo.</p><button class="btn small">${["Publicar cambios", "Ver preview", "Reindexar SEO", "Generar landing", "Auditar SEO", "Abrir card"][i]}</button></div>`).join("")}</section>`);
}

function docs() {
  const docs = ["Contratos", "Cartas oferta", "Expedientes", "NDAs", "Recibos", "Promesas", "Checklists"];
  return page("Docs", "Documentos inmobiliarios relacionados con lead, deal y property, con generación mock por IA y estado de firma.",
    `<section class="grid three">${docs.map((d, i) => `<div class="card"><h2>${d}</h2><p>Template operativo con relación a ${i % 2 ? "deal" : "property"}.</p><div class="workspace-meta"><span class="chip ${i % 3 === 0 ? "green" : "gray"}">${i % 3 === 0 ? "Firmado" : "Pendiente firma"}</span><span class="chip cyan">AI generated</span></div></div>`).join("")}</section>`);
}

function analytics() {
  return page("Analytics", "Dashboards de funnel comercial, inventario, asesores, comisiones proyectadas y actividad WhatsApp.",
    `<section class="grid two"><div class="card"><h2>Funnel comercial</h2><div class="chart-bars">${[92, 74, 61, 48, 34, 21, 12].map((h, i) => `<div class="bar" style="height:${h}%"><span>${["Lead", "Cont", "Cal", "Vis", "Neg", "Apa", "Cie"][i]}</span></div>`).join("")}</div></div><div class="card"><h2>Leads por fuente</h2><div class="donut"></div></div></section><div style="height:16px"></div><section class="grid four">${["Conversión por asesor", "Inventario por ciudad", "Tiempo promedio a cierre", "Propiedades más consultadas", "Comisiones proyectadas", "Actividad WhatsApp", "Response SLA", "Web Sync health"].map((x, i) => `<div class="card"><h2>${x}</h2><strong style="font-size:28px">${["32%", "6", "41d", "Aura", "$4.8M", "624", "91%", "98%"][i]}</strong><p>Indicador demo para decisiones ejecutivas.</p></div>`).join("")}</section>`);
}

function marketplace() {
  const apps = ["WhatsApp Business", "Facebook Leads", "Google Calendar", "EasyBroker", "Stripe", "Mercado Pago", "DocuSign", "Google Drive", "Website API", "OpenAI", "Portales inmobiliarios"];
  return page("Marketplace", "Integraciones modulares para extender Atlas OS sin convertirlo en desarrollo a la medida.",
    `<section class="grid three">${apps.map((a, i) => `<div class="card integration"><div style="display:flex;gap:12px;align-items:center"><div class="integration-icon">${a.slice(0,2).toUpperCase()}</div><div><strong>${a}</strong><p style="margin:3px 0 0">${i % 4 === 0 ? "Conectado" : i % 3 === 0 ? "Beta" : "Disponible pronto"}</p></div></div><span class="chip ${i % 4 === 0 ? "green" : i % 3 === 0 ? "cyan" : "gray"}">${i % 4 === 0 ? "Conectado" : i % 3 === 0 ? "Beta" : "Pronto"}</span></div>`).join("")}</section>`);
}

function settings() {
  const items = ["Workspace", "Usuarios", "Roles", "Branding", "Pipeline", "Automatizaciones", "Integraciones", "Web Engine", "Facturación", "Seguridad"];
  return page("Settings", "Configuración multiempresa: workspace, roles, módulos activables, tenant ID demo y billing placeholder.",
    `<section class="grid sidebar-layout"><div class="card"><h2>Configuración</h2><div class="list">${items.map(x => `<div class="row-item"><div class="row-main"><strong>${x}</strong><span>Configuración placeholder para SaaS multi-tenant.</span></div><button class="btn small">Editar</button></div>`).join("")}</div></div><aside class="card"><h2>Workspace SaaS</h2><p><strong>${state.tenant.name}</strong><br>Plan: ${state.tenant.plan}<br>Tenant ID: ${state.tenant.tenantId}</p><div class="workspace-meta"><span class="chip green">Roles</span><span class="chip">Módulos activables</span><span class="chip gold">Billing placeholder</span></div></aside></section>`);
}

function bindView() {
  if (current === "properties") document.querySelectorAll("[data-property]").forEach(x => x.addEventListener("click", () => openProperty(x.dataset.property)));
  if (current === "crm") document.querySelectorAll("[data-lead]").forEach(x => x.addEventListener("click", () => el("leadPanel").innerHTML = leadPanel(state.leads[Number(x.dataset.lead)])));
  if (current === "deals") bindDeals();
  if (current === "whatsapp") bindWhatsApp();
}

function bindDeals() {
  const stages = ["Nuevo", "Contactado", "Calificado", "Visita agendada", "Negociación", "Apartado", "Cierre"];
  document.querySelectorAll("[data-move]").forEach(btn => btn.addEventListener("click", e => {
    e.stopPropagation();
    const deal = state.deals.find(d => d.id === btn.dataset.move);
    const next = Math.max(0, Math.min(stages.length - 1, stages.indexOf(deal.stage) + Number(btn.dataset.dir)));
    moveDeal(deal, stages[next]);
  }));
  document.querySelectorAll(".deal-card").forEach(card => card.addEventListener("dragstart", e => e.dataTransfer.setData("deal", card.dataset.deal)));
  document.querySelectorAll(".kanban-col").forEach(col => {
    col.addEventListener("dragover", e => e.preventDefault());
    col.addEventListener("drop", e => {
      e.preventDefault();
      const deal = state.deals.find(d => d.id === e.dataTransfer.getData("deal"));
      moveDeal(deal, col.dataset.stage);
    });
  });
}

function moveDeal(deal, stage) {
  if (!deal || deal.stage === stage) return;
  deal.stage = stage;
  state.activities.unshift(`Deal movido a ${stage}: ${deal.lead}`);
  state.activities.unshift(`WhatsApp follow-up programado para ${deal.lead}`);
  saveState();
  renderApp();
}

function bindWhatsApp() {
  document.querySelectorAll("[data-chat]").forEach(btn => btn.addEventListener("click", () => { activeChat = Number(btn.dataset.chat); renderApp(); }));
  el("sendReply").addEventListener("click", () => {
    const input = el("replyInput");
    if (!input.value.trim()) return;
    state.messages[activeChat].messages.push(["out", input.value.trim()]);
    state.activities.unshift(`WhatsApp enviado a ${state.messages[activeChat].lead}`);
    saveState();
    renderApp();
  });
  document.querySelectorAll("[data-action]").forEach(btn => btn.addEventListener("click", () => {
    state.activities.unshift(`${btn.dataset.action}: ${state.messages[activeChat].lead}`);
    saveState();
    openModal("Acción registrada", `<p class="muted">${btn.dataset.action} se registró como evento local en ATLAS OS.</p>`);
  }));
}

function openProperty(id) {
  const p = state.properties.find(x => x.id === id);
  el("drawer").innerHTML = `<div class="drawer-head"><div><span class="eyebrow">Property Engine</span><h2>${p.title}</h2><p class="muted">${p.area}, ${p.city}</p></div><button class="btn icon" id="closeDrawer">${icons.x}</button></div><div class="drawer-body">
    <div class="workspace-meta"><span class="chip">${p.op}</span><span class="chip green">${p.web}</span><span class="chip gray">MLS ${p.mls}</span><span class="chip cyan">Score ${p.score}</span></div>
    <div class="tabs">${["Datos", "Media", "Publicación", "Leads relacionados", "Actividad", "Web Sync", "AI suggestions"].map((x, i) => `<button class="tab ${i === 0 ? "active" : ""}">${x}</button>`).join("")}</div>
    <div class="grid two"><div class="card tight"><h3>Datos</h3><p>Precio: ${money(p.price)}<br>Asesor: ${p.advisor}<br>Status: ${p.status}<br>Última actualización: ${p.updated}</p></div><div class="card tight"><h3>Completitud</h3><p>Media ${p.media}% · ${p.leads} leads interesados</p><div class="scorebar"><span style="width:${p.media}%"></span></div></div></div>
    <div class="card" style="margin-top:16px"><h3>AI suggestions</h3><p>Actualizar descripción SEO, revisar precio contra comparables y generar landing segmentada para leads con score mayor a 80.</p></div>
  </div>`;
  el("drawerBackdrop").classList.add("open");
  el("drawer").classList.add("open");
  el("closeDrawer").addEventListener("click", closeDrawer);
}

function closeDrawer() {
  el("drawerBackdrop")?.classList.remove("open");
  el("drawer")?.classList.remove("open");
}

function openModal(title, body) {
  el("modal").innerHTML = `<div class="modal-head"><h2>${title}</h2><button class="btn icon" id="closeModal">${icons.x}</button></div><div class="modal-body">${body}</div>`;
  el("modalBackdrop").classList.add("open");
  el("modal").classList.add("open");
  el("closeModal").addEventListener("click", closeModal);
  el("modal").querySelectorAll("[data-route]").forEach(btn => btn.addEventListener("click", () => {
    closeModal();
    navigateTo(btn.dataset.route);
  }));
}

function closeModal() {
  el("modalBackdrop")?.classList.remove("open");
  el("modal")?.classList.remove("open");
}

function commandPalette() {
  return `<div class="list">${nav.map(([key, label, icon]) => `<button class="row-item" data-route="${key}" style="width:100%;text-align:left"><div style="display:flex;gap:10px;align-items:center">${icon}<div class="row-main"><strong>${label}</strong><span>Abrir módulo</span></div></div></button>`).join("")}</div>`;
}

boot();
