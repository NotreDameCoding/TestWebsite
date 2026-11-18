"use strict";
/* ================== Population data (millions, ~2024 estimates) ==================
   Names match world-atlas countries-50m. Continents: AF AS EU NA SA OC */
const POP_TABLE = `
Algeria:AF:46.8|Angola:AF:37.9|Benin:AF:14.5|Botswana:AF:2.5|Burkina Faso:AF:23.5|Burundi:AF:14.0|Cameroon:AF:29.1|Cabo Verde:AF:0.52|Central African Rep.:AF:5.3|Chad:AF:20.3|Comoros:AF:0.87|Congo:AF:6.3|Dem. Rep. Congo:AF:109.3|Côte d'Ivoire:AF:31.9|Djibouti:AF:1.17|Egypt:AF:116.5|Eq. Guinea:AF:1.9|Eritrea:AF:3.5|eSwatini:AF:1.24|Ethiopia:AF:132.1|Gabon:AF:2.5|Gambia:AF:2.8|Ghana:AF:34.4|Guinea:AF:14.8|Guinea-Bissau:AF:2.2|Kenya:AF:56.4|Lesotho:AF:2.3|Liberia:AF:5.6|Libya:AF:7.4|Madagascar:AF:31.9|Malawi:AF:21.7|Mali:AF:24.5|Mauritania:AF:5.2|Mauritius:AF:1.27|Morocco:AF:38.1|Mozambique:AF:34.6|Namibia:AF:3.0|Niger:AF:27.0|Nigeria:AF:232.7|Rwanda:AF:14.3|São Tomé and Principe:AF:0.24|Senegal:AF:18.5|Seychelles:AF:0.13|Sierra Leone:AF:8.6|Somalia:AF:14.5|Somaliland:AF:4.5|South Africa:AF:64.0|S. Sudan:AF:11.9|Sudan:AF:50.4|Tanzania:AF:68.6|Togo:AF:9.5|Tunisia:AF:12.3|Uganda:AF:50.0|W. Sahara:AF:0.59|Zambia:AF:21.1|Zimbabwe:AF:16.6|
Afghanistan:AS:42.6|Armenia:AS:2.97|Azerbaijan:AS:10.3|Bahrain:AS:1.6|Bangladesh:AS:173.6|Bhutan:AS:0.79|Brunei:AS:0.46|Cambodia:AS:17.6|China:AS:1409|Georgia:AS:3.8|Hong Kong:AS:7.4|Macao:AS:0.71|India:AS:1451|Indonesia:AS:283.5|Iran:AS:91.6|Iraq:AS:46.0|Israel:AS:9.4|Japan:AS:123.8|Jordan:AS:11.6|Kazakhstan:AS:20.6|Kuwait:AS:4.9|Kyrgyzstan:AS:7.2|Laos:AS:7.8|Lebanon:AS:5.8|Malaysia:AS:35.6|Maldives:AS:0.53|Mongolia:AS:3.5|Myanmar:AS:54.5|Nepal:AS:29.7|North Korea:AS:26.5|Oman:AS:5.3|Pakistan:AS:251.3|Palestine:AS:5.5|Philippines:AS:115.8|Qatar:AS:3.0|Saudi Arabia:AS:33.9|Singapore:AS:5.9|South Korea:AS:51.7|Sri Lanka:AS:23.1|Syria:AS:24.7|Taiwan:AS:23.1|Tajikistan:AS:10.6|Thailand:AS:71.7|Timor-Leste:AS:1.4|Turkey:AS:87.5|Turkmenistan:AS:7.5|United Arab Emirates:AS:11.0|Uzbekistan:AS:36.4|Vietnam:AS:101.0|Yemen:AS:40.6|
Albania:EU:2.8|Andorra:EU:0.08|Austria:EU:9.1|Belarus:EU:9.1|Belgium:EU:11.8|Bosnia and Herz.:EU:3.2|Bulgaria:EU:6.4|Croatia:EU:3.9|Cyprus:EU:0.93|N. Cyprus:EU:0.38|Czechia:EU:10.7|Denmark:EU:5.95|Estonia:EU:1.36|Faeroe Is.:EU:0.055|Finland:EU:5.6|Åland:EU:0.03|France:EU:66.5|Germany:EU:84.5|Greece:EU:10.0|Guernsey:EU:0.064|Hungary:EU:9.7|Iceland:EU:0.39|Ireland:EU:5.3|Isle of Man:EU:0.084|Italy:EU:59.0|Jersey:EU:0.10|Kosovo:EU:1.6|Latvia:EU:1.87|Liechtenstein:EU:0.04|Lithuania:EU:2.87|Luxembourg:EU:0.67|Macedonia:EU:1.82|North Macedonia:EU:1.82|Malta:EU:0.54|Moldova:EU:3.0|Monaco:EU:0.04|Montenegro:EU:0.62|Netherlands:EU:18.2|Norway:EU:5.6|Poland:EU:38.5|Portugal:EU:10.4|Romania:EU:19.0|Russia:EU:144.8|San Marino:EU:0.034|Serbia:EU:6.6|Slovakia:EU:5.5|Slovenia:EU:2.1|Spain:EU:48.6|Sweden:EU:10.6|Switzerland:EU:8.9|Ukraine:EU:37.9|United Kingdom:EU:69.1|Vatican:EU:0.0008|
Antigua and Barb.:NA:0.094|Bahamas:NA:0.40|Barbados:NA:0.28|Belize:NA:0.42|Canada:NA:41.3|Costa Rica:NA:5.1|Cuba:NA:11.0|Dominica:NA:0.066|Dominican Rep.:NA:11.4|El Salvador:NA:6.3|Greenland:NA:0.056|Grenada:NA:0.12|Guatemala:NA:18.4|Haiti:NA:11.8|Honduras:NA:10.8|Jamaica:NA:2.8|Mexico:NA:130.9|Nicaragua:NA:7.0|Panama:NA:4.5|Puerto Rico:NA:3.2|Saint Lucia:NA:0.18|St. Kitts and Nevis:NA:0.047|St. Vin. and Gren.:NA:0.10|Trinidad and Tobago:NA:1.5|United States of America:NA:340.1|Bermuda:NA:0.064|Cayman Is.:NA:0.074|Aruba:NA:0.11|Curaçao:NA:0.19|Turks and Caicos Is.:NA:0.046|U.S. Virgin Is.:NA:0.10|British Virgin Is.:NA:0.04|Sint Maarten:NA:0.044|
Argentina:SA:45.7|Bolivia:SA:12.4|Brazil:SA:211.9|Chile:SA:19.8|Colombia:SA:52.9|Ecuador:SA:18.1|Guyana:SA:0.83|Paraguay:SA:6.9|Peru:SA:34.2|Suriname:SA:0.63|Uruguay:SA:3.4|Venezuela:SA:28.4|Falkland Is.:SA:0.0038|
Australia:OC:26.7|Fiji:OC:0.93|Kiribati:OC:0.13|Marshall Is.:OC:0.038|Micronesia:OC:0.11|Nauru:OC:0.012|New Caledonia:OC:0.29|New Zealand:OC:5.2|Palau:OC:0.018|Papua New Guinea:OC:10.6|Samoa:OC:0.22|Solomon Is.:OC:0.82|Tonga:OC:0.10|Vanuatu:OC:0.33|Fr. Polynesia:OC:0.28|Guam:OC:0.17|N. Mariana Is.:OC:0.045|American Samoa:OC:0.046`;
const POP = {};
POP_TABLE.split("|").forEach(s => {
  s = s.trim(); if (!s) return;
  const [n, c, p] = s.split(":");
  POP[n] = { c, p: parseFloat(p) * 1e6 };
});

const CONTINENTS = {
  AF: { name: "Africa",        lon0: 20,  box: [-19, -36, 53, 38] },
  EU: { name: "Europe",        lon0: 15,  box: [-25, 34, 50, 71] },
  AS: { name: "Asia",          lon0: 90,  box: [25, -11, 148, 56] },
  NA: { name: "North America", lon0: -95, box: [-170, 6, -20, 74] },
  SA: { name: "South America", lon0: -60, box: [-83, -56, -33, 13] },
  OC: { name: "Oceania",       lon0: 150, box: [110, -48, 215, 22] },
};
const DATA_URLS = [
  "data/countries-50m.json",
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json",
  "https://unpkg.com/world-atlas@2/countries-50m.json",
];

/* ================== Helpers ================== */
const $ = id => document.getElementById(id);
const RAD = Math.PI / 180;
function wrapLon(l) { while (l > 180) l -= 360; while (l < -180) l += 360; return l; }
function naturalEarth(lon, lat) {
  const l = lon * RAD, p = lat * RAD, p2 = p * p, p4 = p2 * p2;
  return [
    l * (0.8707 - 0.131979 * p2 + p4 * (-0.013791 + p4 * (0.003971 * p2 - 0.001529 * p4))),
    -p * (1.007226 + p2 * (0.015085 + p4 * (-0.044475 + 0.028874 * p2 - 0.005916 * p4))),
  ];
}
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function hashStr(s) { let h = 2166136261; for (const ch of s) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
function pointInRing(x, y, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
    if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) inside = !inside;
  }
  return inside;
}
function ringArea(r) { let a = 0; for (let i = 0, j = r.length - 1; i < r.length; j = i++) a += (r[j][0] + r[i][0]) * (r[j][1] - r[i][1]); return a / 2; }
function ringCentroid(r) {
  let a = 0, cx = 0, cy = 0;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const f = r[j][0] * r[i][1] - r[i][0] * r[j][1];
    a += f; cx += (r[j][0] + r[i][0]) * f; cy += (r[j][1] + r[i][1]) * f;
  }
  if (Math.abs(a) < 1e-12) return r[0].slice();
  return [cx / (3 * a), cy / (3 * a)];
}
function fmtPop(n) {
  if (n >= 1e9) return (n / 1e9).toFixed(2).replace(/\.?0+$/, "") + " billion";
  if (n >= 1e7) return (n / 1e6).toFixed(1).replace(/\.0$/, "") + " million";
  if (n >= 1e6) return (n / 1e6).toFixed(2).replace(/\.?0+$/, "") + " million";
  if (n >= 1e3) return Math.round(n / 1e3).toLocaleString() + "k";
  return Math.round(n).toLocaleString();
}
function roundTarget(n) {
  const mag = Math.pow(10, Math.floor(Math.log10(n)) - 2); // keep 3 significant figures
  return Math.round(n / mag) * mag;
}
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
};

/* ================== Map data ================== */
let countries = []; // {name, pop, cont, polys:[[ring...]], rep:[lon,lat], nbrs:Set}

function decodeTopo(topo) {
  const t = topo.transform;
  const arcs = topo.arcs.map(a => {
    let x = 0, y = 0;
    return a.map(p => {
      if (t) { x += p[0]; y += p[1]; return [x * t.scale[0] + t.translate[0], y * t.scale[1] + t.translate[1]]; }
      return [p[0], p[1]];
    });
  });
  const ring = ids => {
    const pts = [];
    ids.forEach(i => {
      const a = i < 0 ? arcs[~i].slice().reverse() : arcs[i];
      a.forEach((p, j) => { if (j === 0 && pts.length) return; pts.push(p); });
    });
    return pts;
  };
  const geoms = topo.objects.countries.geometries;
  const arcOwners = new Map();
  const out = [];
  geoms.forEach(g => {
    if (!g.arcs) return;
    const name = g.properties && g.properties.name;
    const polysArcs = g.type === "Polygon" ? [g.arcs] : g.type === "MultiPolygon" ? g.arcs : [];
    const polys = polysArcs.map(p => p.map(ring));
    const info = POP[name];
    const c = { name, pop: info ? info.p : 0, cont: info ? info.c : null, polys, nbrs: new Set(), idx: out.length };
    polysArcs.flat(2).forEach(i => {
      const k = i < 0 ? ~i : i;
      if (!arcOwners.has(k)) arcOwners.set(k, []);
      arcOwners.get(k).push(c.idx);
    });
    // representative point: centroid of largest outer ring, nudged inside if needed
    let best = null, bestA = -1;
    polys.forEach(p => { const a = Math.abs(ringArea(p[0])); if (a > bestA) { bestA = a; best = p[0]; } });
    if (best) {
      let rp = ringCentroid(best);
      if (!pointInRing(rp[0], rp[1], best)) {
        let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
        best.forEach(([x, y]) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); });
        let bd = Infinity, bp = best[0];
        for (let i = 1; i < 24; i++) for (let j = 1; j < 24; j++) {
          const x = x0 + (x1 - x0) * i / 24, y = y0 + (y1 - y0) * j / 24;
          if (pointInRing(x, y, best)) { const d = (x - rp[0]) ** 2 + (y - rp[1]) ** 2; if (d < bd) { bd = d; bp = [x, y]; } }
        }
        rp = bp;
      }
      c.rep = rp;
    }
    if (!info && name) console.info("Populatle: no population entry for", name);
    out.push(c);
  });
  arcOwners.forEach(owners => {
    owners.forEach(a => owners.forEach(b => { if (a !== b) out[a].nbrs.add(b); }));
  });
  // also link each country to its 2 nearest same-continent neighbours (connects islands)
  out.forEach(c => {
    if (!c.cont || !c.rep) return;
    const near = out.filter(o => o !== c && o.cont === c.cont && o.rep)
      .map(o => [o.idx, geoDist(c.rep, o.rep)])
      .sort((a, b) => a[1] - b[1] || a[0] - b[0]).slice(0, 2);
    near.forEach(([i]) => { c.nbrs.add(i); out[i].nbrs.add(c.idx); });
  });
  return out;
}
function geoDist(a, b) {
  const p1 = a[1] * RAD, p2 = b[1] * RAD, dl = (b[0] - a[0]) * RAD;
  return Math.acos(Math.min(1, Math.sin(p1) * Math.sin(p2) + Math.cos(p1) * Math.cos(p2) * Math.cos(dl)));
}

async function loadTopo() {
  for (const url of DATA_URLS) {
    try {
      const r = await fetch(url);
      if (r.ok) return await r.json();
    } catch (e) {}
  }
  throw new Error("Could not load map data");
}

/* ================== Daily puzzle ================== */
function todayKey() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function dayNumber() {
  const start = new Date(2026, 10, 18), d = new Date(); // launch day = Day 0
  return Math.floor((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - start) / 864e5);
}
function makePuzzle(dateKey) {
  const rng = mulberry32(hashStr("populatle:" + dateKey));
  const conts = Object.keys(CONTINENTS);
  for (let i = conts.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [conts[i], conts[j]] = [conts[j], conts[i]]; }
  return conts.slice(0, 5).map(code => {
    const pool = countries.filter(c => c.cont === code && c.pop > 0 && c.rep).sort((a, b) => a.name < b.name ? -1 : 1);
    let group = [], sum = 0;
    if (!pool.length) return { code, target: 1e6, answer: [] };
    for (let tries = 0; tries < 30; tries++) {
      const k = code === "OC" ? 2 + Math.floor(rng() * 3) : 2 + Math.floor(rng() * 5);
      const seed = pool[Math.floor(rng() * pool.length)];
      group = [seed]; const inG = new Set([seed.idx]);
      while (group.length < k) {
        const frontier = [];
        group.forEach(g => g.nbrs.forEach(n => { const o = countries[n]; if (!inG.has(n) && o.cont === code && o.pop > 0) frontier.push(n); }));
        const uniq = [...new Set(frontier)].sort((a, b) => a - b);
        if (!uniq.length) break;
        const pick = uniq[Math.floor(rng() * uniq.length)];
        inG.add(pick); group.push(countries[pick]);
      }
      sum = group.reduce((s, c) => s + c.pop, 0);
      if (sum >= 1e6) break;
    }
    return { code, target: roundTarget(sum), answer: group.map(c => c.idx) };
  });
}

/* ================== Rendering ================== */
const canvas = $("map"), ctx = canvas.getContext("2d");
let W = 0, H = 0, DPR = 1, view = null; // view: {code, paths:Map idx->{path, dot}, reps}
let state = null, puzzle = null, selection = new Set(), history = [];
let lasso = null, revealed = false;

function shadeFor(c) {
  const h = hashStr(c.name);
  const greens = ["#a9c49a", "#b7cfa4", "#9fbf93", "#c3d6ae", "#aecaa8", "#bcd2a0", "#a3c2a8"];
  return greens[h % greens.length];
}
function buildView(code) {
  const C = CONTINENTS[code];
  const proj = (lon, lat) => naturalEarth(wrapLon(lon - C.lon0), lat);
  // fit the bounding box
  const [x0, y0, x1, y1] = C.box;
  let mnx = Infinity, mny = Infinity, mxx = -Infinity, mxy = -Infinity;
  for (let i = 0; i <= 20; i++) for (let j = 0; j <= 20; j++) {
    const [px, py] = proj(x0 + (x1 - x0) * i / 20, y0 + (y1 - y0) * j / 20);
    mnx = Math.min(mnx, px); mny = Math.min(mny, py); mxx = Math.max(mxx, px); mxy = Math.max(mxy, py);
  }
  const pad = 14;
  const s = Math.min((W - 2 * pad) / (mxx - mnx), (H - 2 * pad) / (mxy - mny));
  const ox = (W - s * (mxx - mnx)) / 2 - s * mnx, oy = (H - s * (mxy - mny)) / 2 - s * mny;
  const toScreen = (lon, lat) => { const [px, py] = proj(lon, lat); return [px * s + ox, py * s + oy]; };

  const paths = new Map();
  countries.forEach(c => {
    const path = new Path2D();
    let bx0 = Infinity, by0 = Infinity, bx1 = -Infinity, by1 = -Infinity, drew = false;
    c.polys.forEach(poly => {
      // skip polygons that would wrap around the projection edge
      for (const r of poly) {
        let prev = null;
        for (const p of r) { const l = wrapLon(p[0] - C.lon0); if (prev !== null && Math.abs(l - prev) > 180) return; prev = l; }
      }
      poly.forEach(r => {
        r.forEach((p, k) => {
          const [x, y] = toScreen(p[0], p[1]);
          if (k === 0) path.moveTo(x, y); else path.lineTo(x, y);
          bx0 = Math.min(bx0, x); by0 = Math.min(by0, y); bx1 = Math.max(bx1, x); by1 = Math.max(by1, y);
        });
        path.closePath();
      });
      drew = true;
    });
    if (!drew) return;
    const rep = c.rep ? toScreen(c.rep[0], c.rep[1]) : null;
    const tiny = (bx1 - bx0) + (by1 - by0) < 7;
    paths.set(c.idx, { path, rep, tiny, onScreen: bx1 > 0 && bx0 < W && by1 > 0 && by0 < H });
  });
  view = { code, paths };
}

function draw() {
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  // ocean
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, "#d6e9e4"); g.addColorStop(1, "#c3dcd6");
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  // soft ripples
  ctx.strokeStyle = "rgba(255,255,255,.35)"; ctx.lineWidth = 1;
  for (let y = 30; y < H; y += 46) {
    ctx.beginPath();
    for (let x = 0; x <= W; x += 20) ctx.lineTo(x, y + Math.sin((x + y) / 40) * 3);
    ctx.stroke();
  }
  if (!view) return;
  const answer = revealed ? new Set(puzzle[state.round].answer) : null;
  view.paths.forEach((v, idx) => {
    const c = countries[idx];
    const inCont = c.cont === view.code;
    let fill = inCont ? shadeFor(c) : "#e8e2d0";
    if (selection.has(idx)) fill = "#f2b880";
    ctx.fillStyle = fill;
    ctx.fill(v.path, "evenodd");
    ctx.strokeStyle = inCont ? "rgba(70,90,60,.55)" : "rgba(150,140,110,.35)";
    ctx.lineWidth = inCont ? 0.7 : 0.5;
    ctx.stroke(v.path);
    if (v.tiny && inCont && v.rep) {
      ctx.beginPath(); ctx.arc(v.rep[0], v.rep[1], 3.5, 0, Math.PI * 2);
      ctx.fillStyle = selection.has(idx) ? "#e79a55" : "#7f9f73"; ctx.fill();
      ctx.strokeStyle = "#fbf8ef"; ctx.lineWidth = 1; ctx.stroke();
    }
    if (answer && answer.has(idx)) {
      ctx.save(); ctx.setLineDash([5, 3]); ctx.strokeStyle = "#a8552a"; ctx.lineWidth = 2.2;
      ctx.stroke(v.path);
      if (v.tiny && v.rep) { ctx.beginPath(); ctx.arc(v.rep[0], v.rep[1], 6, 0, Math.PI * 2); ctx.stroke(); }
      ctx.restore();
    }
  });
  if (lasso && lasso.length > 1) {
    ctx.save();
    ctx.beginPath(); lasso.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]));
    ctx.fillStyle = "rgba(242,184,128,.18)"; ctx.fill();
    ctx.setLineDash([7, 5]); ctx.strokeStyle = "#c0703a"; ctx.lineWidth = 2.2; ctx.lineCap = "round"; ctx.stroke();
    ctx.restore();
  }
}

function resize() {
  const r = canvas.getBoundingClientRect();
  DPR = window.devicePixelRatio || 1;
  W = r.width; H = r.height;
  canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
  if (puzzle && state) buildView(puzzle[Math.min(state.round, 4)].code);
  draw();
}

/* ================== Interaction ================== */
function evtPoint(e) { const r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
function locked() { return !puzzle || state.done || revealed; }

canvas.addEventListener("pointerdown", e => {
  if (locked()) return;
  canvas.setPointerCapture(e.pointerId);
  lasso = [evtPoint(e)];
});
canvas.addEventListener("pointermove", e => {
  if (!lasso) return;
  const p = evtPoint(e), last = lasso[lasso.length - 1];
  if (Math.hypot(p[0] - last[0], p[1] - last[1]) > 3) { lasso.push(p); draw(); }
});
canvas.addEventListener("pointerup", e => {
  if (!lasso) return;
  const pts = lasso; lasso = null;
  let len = 0; for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  if (len < 12) tapAt(pts[0]); else lassoSelect(pts);
  draw();
});
canvas.addEventListener("pointercancel", () => { lasso = null; draw(); });

function selectable(idx) { const c = countries[idx]; return c.cont === view.code && c.pop > 0; }
function tapAt([x, y]) {
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  let hit = null;
  view.paths.forEach((v, idx) => {
    if (hit !== null || !selectable(idx)) return;
    if (v.tiny && v.rep && Math.hypot(v.rep[0] - x, v.rep[1] - y) < 9) hit = idx;
  });
  if (hit === null) view.paths.forEach((v, idx) => {
    if (hit !== null || !selectable(idx)) return;
    if (ctx.isPointInPath(v.path, x * DPR, y * DPR, "evenodd")) hit = idx;
  });
  if (hit === null) return;
  pushHistory();
  if (selection.has(hit)) selection.delete(hit); else selection.add(hit);
  update();
}
function lassoSelect(pts) {
  const added = [];
  view.paths.forEach((v, idx) => {
    if (!selectable(idx) || !v.rep || selection.has(idx)) return;
    if (pointInRing(v.rep[0], v.rep[1], pts)) added.push(idx);
  });
  if (!added.length) return;
  pushHistory();
  added.forEach(i => selection.add(i));
  update();
}
function pushHistory() { history.push([...selection]); if (history.length > 50) history.shift(); }

$("clearBtn").onclick = () => { if (locked() || !selection.size) return; pushHistory(); selection.clear(); update(); draw(); };
$("undoBtn").onclick = () => { if (locked() || !history.length) return; selection = new Set(history.pop()); update(); draw(); };

function selTotal() { let s = 0; selection.forEach(i => s += countries[i].pop); return s; }
function scoreFor(sum, target) { return Math.round(1000 * Math.exp(-3 * Math.abs(sum - target) / target)); }

function update() {
  const r = puzzle[Math.min(state.round, 4)];
  const sum = selTotal();
  $("total").textContent = sum ? fmtPop(sum) : "0";
  const d = sum - r.target;
  $("diff").textContent = !sum ? "Start drawing to gather countries"
    : Math.abs(d) / r.target < 0.005 ? "Practically perfect 🌸"
    : (d > 0 ? "Over by " : "Under by ") + fmtPop(Math.abs(d)) + " (" + Math.round(Math.abs(d) / r.target * 100) + "%)";
  const max = r.target * 2;
  $("meterFill").style.width = Math.min(100, sum / max * 100) + "%";
  $("meterMark").style.left = "50%";
  const chips = $("chips"); chips.innerHTML = "";
  [...selection].sort((a, b) => countries[b].pop - countries[a].pop).forEach(i => {
    const s = document.createElement("span"); s.className = "chip";
    s.textContent = countries[i].name + " · " + fmtPop(countries[i].pop);
    chips.appendChild(s);
  });
  $("submitBtn").disabled = !sum || locked();
  const total = state.scores.reduce((a, b) => a + b, 0);
  $("scoreSoFar").textContent = "Score: " + total.toLocaleString() + " / 5000";
}

function renderRound() {
  const r = puzzle[Math.min(state.round, 4)];
  $("target").textContent = fmtPop(r.target);
  $("continent").textContent = CONTINENTS[r.code].name;
  const dots = $("rounds"); dots.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const d = document.createElement("span");
    d.className = "dot" + (i < state.scores.length ? " on" : "") + (i === state.round && !state.done ? " cur" : "");
    dots.appendChild(d);
  }
  buildView(r.code);
  update(); draw();
}

const verdicts = [
  [950, "Perfect harmony 🌸"], [800, "Beautifully done 🌿"], [600, "Lovely bundle 🌱"],
  [350, "A gentle start 🍃"], [0, "The wind took that one 🍂"],
];
$("submitBtn").onclick = () => {
  if (locked() || !selection.size) return;
  const r = puzzle[state.round];
  const sum = selTotal(), sc = scoreFor(sum, r.target);
  state.scores.push(sc); state.picks.push([...selection]);
  revealed = true; saveState(); update(); draw();
  $("rTitle").textContent = verdicts.find(v => sc >= v[0])[1];
  $("rScore").textContent = sc + " pts";
  $("rText").innerHTML = "Your bundle: <b>" + fmtPop(sum) + "</b><br>Target: <b>" + fmtPop(r.target) + "</b> (" +
    Math.round(Math.abs(sum - r.target) / r.target * 100) + "% off)";
  $("rAnswer").textContent = "One bundle that fits, outlined on the map: " + r.answer.map(i => countries[i].name).join(", ") + ".";
  $("nextBtn").textContent = state.round >= 4 ? "See today's garden" : "Next round";
  setTimeout(() => $("roundModal").classList.add("show"), 450);
  chime(sc);
};
$("nextBtn").onclick = () => {
  $("roundModal").classList.remove("show");
  revealed = false; selection.clear(); history = [];
  state.round++;
  if (state.round >= 5) { state.done = true; saveState(); finish(); return; }
  saveState(); renderRound();
};

function emojiFor(s) { return s >= 900 ? "🌸" : s >= 700 ? "🌿" : s >= 400 ? "🌱" : s >= 150 ? "🍂" : "🪨"; }
function finish() {
  state.round = 4;
  const total = state.scores.reduce((a, b) => a + b, 0);
  // streak
  const st = store.get("populatle:streak", { last: null, n: 0, best: 0 });
  const key = todayKey();
  if (st.last !== key) {
    const y = new Date(); y.setDate(y.getDate() - 1);
    const yk = y.getFullYear() + "-" + String(y.getMonth() + 1).padStart(2, "0") + "-" + String(y.getDate()).padStart(2, "0");
    st.n = st.last === yk ? st.n + 1 : 1; st.last = key; st.best = Math.max(st.best, st.n);
    store.set("populatle:streak", st);
  }
  $("eScore").textContent = total.toLocaleString() + " / 5000";
  $("eGrid").textContent = state.scores.map(emojiFor).join("");
  $("eStreak").textContent = "Streak: " + st.n + " day" + (st.n === 1 ? "" : "s") + " · Best: " + st.best;
  renderRound();
  $("endModal").classList.add("show");
}
$("closeEnd").onclick = () => $("endModal").classList.remove("show");
$("shareBtn").onclick = async () => {
  const total = state.scores.reduce((a, b) => a + b, 0);
  const text = "Populatle #" + dayNumber() + " 🌿 " + total + "/5000\n" + state.scores.map(emojiFor).join("");
  try { await navigator.clipboard.writeText(text); $("shareBtn").textContent = "Copied ✓"; }
  catch (e) { prompt("Copy your results:", text); }
};
setInterval(() => {
  const n = new Date(), t = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1);
  let s = Math.floor((t - n) / 1000);
  const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60); s %= 60;
  $("countdown").textContent = [h, m, s].map(v => String(v).padStart(2, "0")).join(":");
}, 1000);

function saveState() { store.set("populatle:" + todayKey(), state); }

/* ================== Cozy jazz ambience (Web Audio, generated live) ================== */
const audio = { ctx: null, master: null, jazzOn: false, rainOn: false, birdsOn: false, nextBar: 0, bar: 0, timer: null };
function initAudio() {
  if (audio.ctx) return;
  const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
  const a = audio.ctx = new AC();
  audio.master = a.createGain(); audio.master.gain.value = +$("vol").value * 0.5;
  const warm = a.createBiquadFilter(); warm.type = "lowpass"; warm.frequency.value = 3800;
  audio.master.connect(warm); warm.connect(a.destination);
  audio.jazzBus = a.createGain(); audio.jazzBus.gain.value = 0; audio.jazzBus.connect(audio.master);
  audio.rainBus = a.createGain(); audio.rainBus.gain.value = 0; audio.rainBus.connect(audio.master);
  audio.birdBus = a.createGain(); audio.birdBus.gain.value = 0.5; audio.birdBus.connect(audio.master);
  // shared noise buffer
  const len = a.sampleRate * 2, buf = a.createBuffer(1, len, a.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  audio.noise = buf;
  // vinyl crackle (part of the jazz bus)
  const cbuf = a.createBuffer(1, a.sampleRate * 3, a.sampleRate), cd = cbuf.getChannelData(0);
  for (let i = 0; i < cd.length; i++) cd[i] = Math.random() < 0.0009 ? (Math.random() * 2 - 1) * 0.8 : (Math.random() * 2 - 1) * 0.012;
  const crackle = a.createBufferSource(); crackle.buffer = cbuf; crackle.loop = true;
  const cg = a.createGain(); cg.gain.value = 0.35; crackle.connect(cg); cg.connect(audio.jazzBus); crackle.start();
  // rain: filtered noise
  const rain = a.createBufferSource(); rain.buffer = buf; rain.loop = true;
  const rf = a.createBiquadFilter(); rf.type = "lowpass"; rf.frequency.value = 1400;
  const rh = a.createBiquadFilter(); rh.type = "highpass"; rh.frequency.value = 300;
  const rg = a.createGain(); rg.gain.value = 0.22;
  rain.connect(rh); rh.connect(rf); rf.connect(rg); rg.connect(audio.rainBus); rain.start();
  audio.nextBar = a.currentTime + 0.1;
  audio.timer = setInterval(schedule, 120);
  setInterval(maybeBird, 2500);
}
const BPM = 70, BEAT = 60 / BPM;
const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
// ii-V-I flavoured progression with lush extensions (MIDI notes)
const PROG = [
  { root: 50, notes: [53, 57, 60, 64] },   // Dm9
  { root: 43, notes: [53, 57, 59, 64] },   // G13
  { root: 48, notes: [52, 55, 59, 62] },   // Cmaj9
  { root: 45, notes: [55, 59, 61, 65] },   // A7b13
  { root: 41, notes: [52, 55, 57, 64] },   // Fmaj9
  { root: 40, notes: [50, 55, 59, 62] },   // Em7
  { root: 50, notes: [53, 57, 60, 64] },   // Dm9
  { root: 43, notes: [53, 57, 60, 62] },   // G7sus
];
function keys(t, midi, dur, vel) {
  const a = audio.ctx, o1 = a.createOscillator(), o2 = a.createOscillator(), g = a.createGain(), f = a.createBiquadFilter();
  o1.type = "sine"; o2.type = "triangle";
  o1.frequency.value = mtof(midi); o2.frequency.value = mtof(midi) * 2.001;
  const g2 = a.createGain(); g2.gain.value = 0.18;
  f.type = "lowpass"; f.frequency.value = 1800;
  o1.connect(g); o2.connect(g2); g2.connect(g); g.connect(f); f.connect(audio.jazzBus);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vel, t + 0.015);
  g.gain.exponentialRampToValueAtTime(vel * 0.35, t + 0.5);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o1.start(t); o2.start(t); o1.stop(t + dur + 0.05); o2.stop(t + dur + 0.05);
}
function bass(t, midi, dur) {
  const a = audio.ctx, o = a.createOscillator(), g = a.createGain(), f = a.createBiquadFilter();
  o.type = "triangle"; o.frequency.value = mtof(midi);
  f.type = "lowpass"; f.frequency.value = 600;
  o.connect(f); f.connect(g); g.connect(audio.jazzBus);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.32, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.start(t); o.stop(t + dur + 0.05);
}
function brush(t, vol, len) {
  const a = audio.ctx, s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
  s.buffer = audio.noise; f.type = "bandpass"; f.frequency.value = 5200; f.Q.value = 0.8;
  s.connect(f); f.connect(g); g.connect(audio.jazzBus);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  s.start(t, Math.random()); s.stop(t + len + 0.05);
}
function kick(t) {
  const a = audio.ctx, o = a.createOscillator(), g = a.createGain();
  o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.15);
  g.gain.setValueAtTime(0.35, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
  o.connect(g); g.connect(audio.jazzBus); o.start(t); o.stop(t + 0.3);
}
function schedule() {
  const a = audio.ctx; if (!a) return;
  while (audio.nextBar < a.currentTime + 1.2) {
    const t = audio.nextBar, ch = PROG[audio.bar % PROG.length], nx = PROG[(audio.bar + 1) % PROG.length];
    const sw = BEAT * 0.66; // swing offset
    // chords: lazy comping
    const hum = () => (Math.random() - 0.5) * 0.03;
    ch.notes.forEach((n, i) => keys(t + i * 0.012 + hum(), n, BEAT * 2.4, 0.07));
    if (Math.random() < 0.7) ch.notes.slice(1).forEach((n, i) => keys(t + BEAT * 2 + sw + i * 0.01, n, BEAT * 1.4, 0.05));
    // occasional melody fragments
    if (Math.random() < 0.55) {
      const scale = ch.notes.map(n => n + 12);
      for (let b = 0; b < 4; b++) if (Math.random() < 0.45) {
        keys(t + b * BEAT + (Math.random() < 0.5 ? 0 : sw) + hum(), scale[Math.floor(Math.random() * scale.length)], BEAT * 1.2, 0.045);
      }
    }
    // walking bass
    const r = ch.root, walk = [r, r + 7, r + (Math.random() < 0.5 ? 3 : 4), nx.root + (Math.random() < 0.5 ? 1 : -1)];
    walk.forEach((m, b) => bass(t + b * BEAT, m, BEAT * 0.95));
    // brushes + soft kick
    for (let b = 0; b < 4; b++) {
      brush(t + b * BEAT, b % 2 ? 0.07 : 0.04, b % 2 ? 0.28 : 0.12);
      brush(t + b * BEAT + sw, 0.025, 0.08);
    }
    kick(t); kick(t + BEAT * 2.5);
    audio.nextBar += BEAT * 4; audio.bar++;
  }
}
function maybeBird() {
  if (!audio.ctx || !audio.birdsOn || Math.random() < 0.45) return;
  const a = audio.ctx, t = a.currentTime + Math.random() * 0.5, base = 2200 + Math.random() * 1600, n = 2 + Math.floor(Math.random() * 4);
  for (let i = 0; i < n; i++) {
    const o = a.createOscillator(), g = a.createGain(), st = t + i * 0.13;
    o.type = "sine";
    o.frequency.setValueAtTime(base, st);
    o.frequency.exponentialRampToValueAtTime(base * (1.3 + Math.random() * 0.4), st + 0.06);
    o.frequency.exponentialRampToValueAtTime(base * 0.9, st + 0.1);
    g.gain.setValueAtTime(0, st); g.gain.linearRampToValueAtTime(0.05, st + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, st + 0.11);
    o.connect(g); g.connect(audio.birdBus); o.start(st); o.stop(st + 0.15);
  }
}
function chime(score) {
  if (!audio.ctx) return;
  const t = audio.ctx.currentTime + 0.05, notes = score >= 700 ? [72, 76, 79, 84] : score >= 350 ? [72, 76, 79] : [72, 74];
  notes.forEach((n, i) => keys(t + i * 0.12, n, 1.6, 0.06));
}
function setBus(bus, on) {
  if (!audio.ctx) return;
  const t = audio.ctx.currentTime;
  bus.gain.cancelScheduledValues(t);
  bus.gain.setTargetAtTime(on ? 1 : 0, t, 0.6);
}
function toggle(kind) {
  initAudio(); if (!audio.ctx) return;
  audio.ctx.resume();
  if (kind === "jazz") { audio.jazzOn = !audio.jazzOn; setBus(audio.jazzBus, audio.jazzOn); }
  if (kind === "rain") { audio.rainOn = !audio.rainOn; setBus(audio.rainBus, audio.rainOn); }
  if (kind === "birds") { audio.birdsOn = !audio.birdsOn; }
  $("jazzBtn").classList.toggle("on", audio.jazzOn);
  $("rainBtn").classList.toggle("on", audio.rainOn);
  $("birdBtn").classList.toggle("on", audio.birdsOn);
}
$("jazzBtn").onclick = () => toggle("jazz");
$("rainBtn").onclick = () => toggle("rain");
$("birdBtn").onclick = () => toggle("birds");
$("vol").oninput = e => { if (audio.master) audio.master.gain.value = +e.target.value * 0.5; };
$("helpBtn").onclick = () => $("introModal").classList.add("show");
$("startBtn").onclick = () => {
  $("introModal").classList.remove("show");
  if (!audio.jazzOn) toggle("jazz");
  if (!audio.birdsOn) toggle("birds");
  store.set("populatle:seenIntro", true);
};
$("quietBtn").onclick = () => { $("introModal").classList.remove("show"); store.set("populatle:seenIntro", true); };

/* ================== Scenery ================== */
(function scenery() {
  const sc = $("scene");
  for (let i = 0; i < 4; i++) {
    const c = document.createElement("div"); c.className = "cloud";
    c.style.top = (4 + i * 14) + "vh"; c.style.animationDuration = (90 + i * 35) + "s";
    c.style.animationDelay = (-i * 30) + "s"; c.style.transform = "scale(" + (0.6 + i * 0.15) + ")";
    sc.appendChild(c);
  }
  const leaves = ["🍃", "🍂", "🌸", "🍃"];
  for (let i = 0; i < 9; i++) {
    const l = document.createElement("div"); l.className = "leaf"; l.textContent = leaves[i % leaves.length];
    l.style.left = Math.random() * 100 + "vw"; l.style.animationDuration = (14 + Math.random() * 14) + "s";
    l.style.animationDelay = (-Math.random() * 20) + "s"; sc.appendChild(l);
  }
  for (let i = 0; i < 14; i++) {
    const f = document.createElement("div"); f.className = "firefly";
    f.style.left = Math.random() * 100 + "vw"; f.style.top = (55 + Math.random() * 40) + "vh";
    f.style.animationDuration = (2 + Math.random() * 3) + "s"; f.style.animationDelay = (-Math.random() * 3) + "s";
    sc.appendChild(f);
  }
})();

/* ================== Boot ================== */
(async function boot() {
  $("dayLabel").textContent = "Day " + dayNumber();
  if (!store.get("populatle:seenIntro", false)) $("introModal").classList.add("show");
  try {
    const topo = await loadTopo();
    countries = decodeTopo(topo);
  } catch (e) {
    $("loading").textContent = "The map couldn't load. Check your connection, or add data/countries-50m.json (see README).";
    return;
  }
  $("loading").remove();
  const key = todayKey();
  puzzle = makePuzzle(key);
  state = store.get("populatle:" + key, null) || { round: 0, scores: [], picks: [], done: false };
  window.addEventListener("resize", resize);
  resize();
  renderRound();
  if (state.done) finish();
})();
