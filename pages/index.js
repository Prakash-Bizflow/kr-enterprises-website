import { useState, useEffect } from "react";

const NAV = ["Home", "About", "Products", "Sustainability", "Clients", "Contact"];

const PRODUCTS = [
  { icon: "⬛", name: "CRC & HRC Baled", tag: "Core Product", spec: "Thickness: 0.3mm – 3mm · High Density Baled" },
  { icon: "🏗", name: "HMS Scrap", tag: "High Volume", spec: "Grade: HMS 1 & HMS 2 · Min thickness 6mm" },
  { icon: "📐", name: "Structural Scrap", tag: "Bulk Supply", spec: "Angles · Channels · Beams · Plates" },
  { icon: "🏭", name: "Dismantled Scrap", tag: "Specialized", spec: "Plant shutdowns · Factory demolitions" },
  { icon: "⚙️", name: "Sheet Scrap", tag: "Regular Supply", spec: "Thickness: 1mm – 6mm · Clean grade" },
  { icon: "✨", name: "Stainless & Alloy", tag: "Premium Grade", spec: "Grades: 202 · 304 · 316 · Special Alloys" },
];

const CLIENTS = [
  "Tata Steel Ltd",
  "Jindal Stainless Ltd",
  "AMNS – ArcelorMittal Nippon India",
  "JSW Ltd",
  "Ramakrishna Group",
  "TSPDL",
  "Arush Metalcast Ltd",
  "RSB Transmission India Ltd",
];

const STATS = [
  { val: "1984", label: "Established" },
  { val: "6000+ MT", label: "Monthly Supply" },
  { val: "40+", label: "Years of Trust" },
  { val: "99%", label: "On-Time Delivery" },
];

const WHY = [
  {
    icon: "🎯",
    title: "99% On-Time Delivery",
    body: "Our clients at TATA Steel, Jindal and JSW plan their production schedules around our commitments. Four decades of on-time supply — not a claim, a track record that speaks for itself."
  },
  {
    icon: "⚖️",
    title: "Precision Grading & Cutting",
    body: "Every lot is quality-checked, sorted grade-wise and cut to exact buyer specification. Foundry-ready material reaches you with zero rework and zero rejections."
  },
  {
    icon: "🔗",
    title: "Direct Source Network",
    body: "Procurement directly from TATA Steel, Jindal, JSW and major plant generators in Eastern India — assured, consistent supply at transparent, competitive pricing."
  },
  {
    icon: "📦",
    title: "100 MT – 2000 MT. One Order.",
    body: "From a 100 MT spot requirement to a 2000 MT bulk contract — we handle it all under one roof. Same quality, same documentation, same commitment regardless of order size."
  },
  {
    icon: "🏗️",
    title: "In-House Baling Facility",
    body: "We bail CR/HR scrap at our own yard to exact foundry specification — right density, right dimension, right grade. Material reaches you charge-ready, with zero processing required at your end."
  },
  {
    icon: "🚛",
    title: "Own Fleet for Supply & Procurement",
    body: "Our dedicated transport fleet handles both local procurement and last-mile delivery. No third-party dependency — material moves on our timeline, predictable and on schedule."
  },
  {
    icon: "💰",
    title: "Strong Financial Backing",
    body: "Backed by solid financials, we procure and hold large volumes without breaking the supply chain. When buyers need 500 MT, 1000 MT or more — we have the capital to deliver."
  },
  {
    icon: "⚡",
    title: "Ready Inventory. Rapid Supply.",
    body: "We maintain ready stock of key grades at our yard at all times. When your requirement is urgent, we are not starting from zero — quick turnaround on spot orders is how we operate."
  },
];

const ENV_STATS = [
  { val: "1.1 T", label: "Iron ore saved per tonne recycled", icon: "⛏️" },
  { val: "58%", label: "Lower GHG emissions vs primary steel", icon: "🌱" },
  { val: "75%", label: "Less energy vs virgin production", icon: "⚡" },
  { val: "76%", label: "Reduction in water pollution", icon: "💧" },
];

const ENV_POINTS = [
  { icon: "⛏️", title: "Reduces Destructive Mining", desc: "Every tonne we trade saves 1.1 tonnes of iron ore, 630 kg of coking coal and 55 kg of limestone — preserving India's natural resources for future generations." },
  { icon: "🌿", title: "Cuts Carbon Emissions by 58%", desc: "Scrap-based induction furnace steel emits just 0.53 tonnes of CO₂ per tonne — versus 2.54 tonnes from the traditional blast furnace route. Every shipment we supply is a step toward green steel." },
  { icon: "⚡", title: "Conserves Significant Energy", desc: "Recycling steel saves up to 75% of the energy used in primary production. With India's steel sector accounting for 12% of national GHG emissions, organised scrap trading is a national imperative." },
  { icon: "♻️", title: "Powers India's Circular Economy", desc: "As per India's Steel Scrap Recycling Policy 2019, organised scrap trading is a national priority. K R Enterprises has been contributing to this mission since 1984 — long before it became policy." },
];

const PROCESS = [
  { num: "01", title: "Sourcing & Procurement", desc: "Direct procurement from TATA Steel, Jindal, JSW and major plant generators across PAN India." },
  { num: "02", title: "Supplier Verification", desc: "Every source assessed for material consistency before onboarding. We work only with verified, trusted generators." },
  { num: "03", title: "Quality Inspection", desc: "On-site inspection at receipt. Every lot verified before entering our yard — no shortcuts, no compromises." },
  { num: "04", title: "Weighbridge", desc: "Accurate weighbridge measurement at receipt and dispatch. Full transparency on weight — no disputes later." },
  { num: "05", title: "Sorting & Grading", desc: "Grade-wise sorting at our facility. Each grade segregated to prevent mixing and maintain consistency." },
  { num: "06", title: "Baling & Cutting", desc: "CR/HR scrap baled in-house to exact foundry density and dimension. Cut to buyer specification — charge-ready." },
  { num: "07", title: "Yard Storage", desc: "Dedicated material-wise yard sections. Proper segregation and inventory tracking at all times." },
  { num: "08", title: "Documentation", desc: "Weighment slip, quality cert, GST invoice and e-way bill — complete documentation for every shipment." },
  { num: "09", title: "Dispatch & Delivery", desc: "On-time delivery via our own fleet. Proof of delivery shared immediately — 99% on-time over 40+ years." },
];

const C = {
  navy: "#0D1B2A", navyMid: "#162030", navyLight: "#1E2E42", navySurface: "#1A2840",
  gold: "#C9A84C", goldHover: "#DFB94A", goldDim: "rgba(201,168,76,0.1)",
  goldBorder: "rgba(201,168,76,0.22)",
  white: "#FFFFFF", text: "#E8EDF2", textDim: "rgba(232,237,242,0.6)",
  border: "rgba(255,255,255,0.08)", borderGold: "rgba(201,168,76,0.2)",
  green: "#0A1F12", greenMid: "#1A5C35", greenAccent: "#4CAF7A",
  muted: "rgba(232,237,242,0.45)",
};

const Tag = ({ label, green }) => (
  <span style={{
    display: "inline-block",
    background: green ? "rgba(76,175,122,0.12)" : C.goldDim,
    color: green ? C.greenAccent : C.gold,
    border: `1px solid ${green ? "rgba(76,175,122,0.25)" : C.goldBorder}`,
    fontSize: 10, fontWeight: 700, padding: "4px 12px", borderRadius: 20,
    letterSpacing: 1.2, textTransform: "uppercase"
  }}>{label}</span>
);

const Card = ({ children, style = {} }) => (
  <div style={{ background: C.navySurface, border: `1px solid ${C.border}`, borderRadius: 16, ...style }}>
    {children}
  </div>
);

export default function App() {
  const [nav, setNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", material: "", qty: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const goTo = (p) => { setNav(p); window.scrollTo(0, 0); };

  return (
    <div style={{ fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif", background: C.navy, color: C.text, minHeight: "100vh" }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        background: scrolled ? "rgba(13,27,42,0.98)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
        padding: "0 5%", height: 70,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.3s"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }} onClick={() => goTo("Home")}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: `linear-gradient(145deg,${C.gold},${C.goldHover})`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: C.navy, fontSize: 15, boxShadow: `0 4px 16px ${C.goldDim}` }}>KR</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: C.white }}>K R Enterprises</div>
            <div style={{ fontSize: 10, color: C.gold, letterSpacing: 2, textTransform: "uppercase" }}>Iron & Steel · Est. 1984</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {NAV.map(n => (
            <button key={n} onClick={() => goTo(n)} style={{
              background: "none", border: "none", cursor: "pointer", fontSize: 13,
              fontWeight: nav === n ? 700 : 400,
              color: nav === n ? C.gold : C.textDim,
              borderBottom: nav === n ? `2px solid ${C.gold}` : "2px solid transparent",
              paddingBottom: 2, transition: "all 0.2s"
            }}>{n}</button>
          ))}
          <button onClick={() => goTo("Contact")} style={{ background: C.gold, color: C.navy, padding: "10px 22px", borderRadius: 8, fontSize: 13, fontWeight: 800, border: "none", cursor: "pointer", boxShadow: `0 4px 16px ${C.goldDim}` }}>Get a Quote</button>
        </div>
      </nav>

      {/* ══════════ HOME ══════════ */}
      {nav === "Home" && (
        <>
          {/* HERO */}
          <div style={{ minHeight: "100vh", background: `linear-gradient(150deg,${C.navy} 0%,${C.navyMid} 55%,#1A2F45 100%)`, display: "flex", alignItems: "center", padding: "0 6%", position: "relative", overflow: "hidden" }}>
            {[520, 360, 200].map((s, i) => (
              <div key={i} style={{ position: "absolute", right: `${2 + i * 4}%`, top: `${8 + i * 10}%`, width: s, height: s, borderRadius: "50%", border: `1px solid rgba(201,168,76,${0.05 + i * 0.04})`, pointerEvents: "none" }} />
            ))}
            <div style={{ maxWidth: 720, zIndex: 2, paddingTop: 70 }}>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.goldDim, border: `1px solid ${C.goldBorder}`, color: C.gold, padding: "7px 16px", borderRadius: 24, fontSize: 11, fontWeight: 700, letterSpacing: 1.3, textTransform: "uppercase" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.gold, display: "inline-block" }} />
                  Eastern India's Leading Scrap Supplier
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`, color: C.muted, padding: "7px 14px", borderRadius: 24, fontSize: 11, letterSpacing: 1 }}>
                  Est. 1984 · Jamshedpur
                </div>
              </div>

              <h1 style={{ fontSize: "clamp(38px,5.5vw,68px)", fontWeight: 900, color: C.white, lineHeight: 1.06, margin: "0 0 28px", letterSpacing: -1 }}>
                Where Quality<br />
                <span style={{ color: C.gold }}>Meets Reliability</span><br />
                in Scrap Trading
              </h1>

              <p style={{ fontSize: 17, color: C.textDim, lineHeight: 1.88, maxWidth: 580, marginBottom: 44 }}>
                Jamshedpur-based ferrous scrap trader supplying <strong style={{ color: C.white }}>6000+ MT monthly</strong> of HMS, CRC/HRC Baled, Structural and Stainless scrap to India's largest steel manufacturers — for over four decades.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button onClick={() => goTo("Contact")} style={{ background: C.gold, color: C.navy, padding: "16px 36px", borderRadius: 10, fontSize: 15, fontWeight: 800, border: "none", cursor: "pointer", boxShadow: `0 6px 28px rgba(201,168,76,0.3)` }}>
                  Request a Quote →
                </button>
                <button onClick={() => goTo("Products")} style={{ background: "transparent", color: C.white, padding: "16px 36px", borderRadius: 10, fontSize: 15, fontWeight: 500, border: `1px solid ${C.border}`, cursor: "pointer" }}>
                  Our Products
                </button>
              </div>
            </div>
          </div>

          {/* GOLD STATS BAR */}
          <div style={{ background: C.gold, padding: "26px 6%", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 12 }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "4px 16px" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: C.navy }}>{s.val}</div>
                <div style={{ fontSize: 11, color: "rgba(13,27,42,0.58)", letterSpacing: 1.2, textTransform: "uppercase", marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── WHAT SETS US APART ── FULL FOCUS */}
          <div style={{ padding: "90px 6%", background: C.navy }}>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <Tag label="Why K R Enterprises" />
              <h2 style={{ fontSize: 40, fontWeight: 900, margin: "16px 0 10px", color: C.white }}>What Sets Us Apart</h2>
              <p style={{ fontSize: 16, color: C.textDim, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
                Four decades of building a reputation that India's largest steel producers rely on — every month, every shipment, without exception.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, maxWidth: 1100, margin: "0 auto", border: `1px solid ${C.borderGold}`, borderRadius: 20, overflow: "hidden" }}>
              {WHY.map((w, i) => (
                <div key={i} style={{
                  padding: "40px 32px",
                  background: i % 2 === 0 ? C.navySurface : C.navyMid,
                  borderRight: ((i + 1) % 4 !== 0) ? `1px solid ${C.borderGold}` : "none",
                  borderBottom: i < 4 ? `1px solid ${C.borderGold}` : "none",
                  transition: "all 0.2s", cursor: "default"
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.navyLight; }}
                  onMouseLeave={e => { e.currentTarget.style.background = i % 2 === 0 ? C.navySurface : C.navyMid; }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: C.goldDim, border: `1px solid ${C.goldBorder}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 20 }}>{w.icon}</div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: C.white, marginBottom: 12, lineHeight: 1.3 }}>{w.title}</div>
                  <div style={{ fontSize: 13.5, color: C.textDim, lineHeight: 1.78 }}>{w.body}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CLIENTS STRIP */}
          <div style={{ padding: "56px 6%", background: C.navyMid, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{ fontSize: 11, color: C.gold, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Trusted By</div>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: C.white, margin: "10px 0 0" }}>India's Leading Steel Manufacturers</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12, maxWidth: 900, margin: "0 auto" }}>
              {CLIENTS.map((c, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${C.borderGold}`, borderRadius: 10, padding: "11px 22px", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.78)" }}>{c}</div>
              ))}
            </div>
          </div>

          {/* ENV TEASER */}
          <div style={{ padding: "70px 6%", background: C.green }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 40 }}>
              <div style={{ maxWidth: 460 }}>
                <Tag label="Sustainability" green />
                <h2 style={{ fontSize: 30, fontWeight: 900, color: C.white, margin: "16px 0 14px" }}>Scrap Trading is Green Business</h2>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.58)", lineHeight: 1.85, marginBottom: 22 }}>
                  Every tonne of ferrous scrap traded saves <strong style={{ color: C.greenAccent }}>1.1 tonnes of iron ore</strong> and cuts CO₂ emissions by <strong style={{ color: C.greenAccent }}>58%</strong> versus primary steel production. K R Enterprises has been contributing to India's circular economy since 1984.
                </p>
                <button onClick={() => goTo("Sustainability")} style={{ background: "transparent", color: C.greenAccent, padding: "10px 22px", borderRadius: 8, fontSize: 13, fontWeight: 700, border: "1px solid rgba(76,175,122,0.35)", cursor: "pointer" }}>
                  Our Environmental Impact →
                </button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {ENV_STATS.map((e, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(76,175,122,0.15)", borderRadius: 14, padding: "20px 18px", textAlign: "center", minWidth: 140 }}>
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{e.icon}</div>
                    <div style={{ fontSize: 26, fontWeight: 900, color: C.greenAccent, marginBottom: 4 }}>{e.val}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>{e.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PROCESS */}
          <div style={{ padding: "80px 6%", background: C.navy }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <Tag label="How We Work" />
              <h2 style={{ fontSize: 34, fontWeight: 900, margin: "14px 0 0", color: C.white }}>From Procurement to Dispatch</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, maxWidth: 1100, margin: "0 auto", background: C.borderGold, borderRadius: 16, overflow: "hidden", border: `1px solid ${C.borderGold}` }}>
              {PROCESS.map((p, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? C.navySurface : C.navyMid, padding: "28px 22px" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: C.goldDim, border: `1px solid ${C.goldBorder}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: C.gold, marginBottom: 14 }}>{p.num}</div>
                  <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 8, color: C.white }}>{p.title}</div>
                  <div style={{ fontSize: 12.5, color: C.muted, lineHeight: 1.7 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ══════════ ABOUT ══════════ */}
      {nav === "About" && (
        <div style={{ paddingTop: 70 }}>
          <div style={{ background: `linear-gradient(150deg,${C.navy},${C.navyMid})`, padding: "80px 6% 70px", borderBottom: `1px solid ${C.border}` }}>
            <Tag label="Our Story" />
            <h1 style={{ fontSize: 48, fontWeight: 900, color: C.white, margin: "16px 0 20px" }}>About K R Enterprises</h1>
            <p style={{ fontSize: 17, color: C.textDim, maxWidth: 640, lineHeight: 1.88 }}>
              Eastern India's leading iron and steel scrap trader — four decades of trust, reliability and growth from the steel capital of the country.
            </p>
          </div>

          <div style={{ padding: "70px 6%", background: C.navy }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, maxWidth: 1100, margin: "0 auto", alignItems: "start" }}>
              <div>
                <h2 style={{ fontSize: 30, fontWeight: 900, marginBottom: 20, color: C.white }}>Four Decades of Excellence</h2>
                <p style={{ fontSize: 15, color: C.textDim, lineHeight: 1.92, marginBottom: 18 }}>
                  Founded in 1984 by <strong style={{ color: C.white }}>Shri Kailash Rai Malhotra</strong> in Jamshedpur — the steel capital of India — K R Enterprises began as a focused scrap supply operation and grew, relationship by relationship, into one of Eastern India's most trusted names in iron and steel scrap trading.
                </p>
                <p style={{ fontSize: 15, color: C.textDim, lineHeight: 1.92, marginBottom: 18 }}>
                  Strategically located in Adityapur Industrial Area — within direct reach of TATA Steel, Jindal, JSW and other major steel generators — K R Enterprises sits at the heart of India's ferrous scrap ecosystem. This proximity means faster sourcing, fresher material and better pricing for our buyers.
                </p>
                <p style={{ fontSize: 15, color: C.textDim, lineHeight: 1.92, marginBottom: 18 }}>
                  In 2008–09, <strong style={{ color: C.white }}>Shri Vivek Malhotra</strong> joined after his post-graduation from the USA. His strategic vision expanded KR's corporate client base to TATA Steel, Jindal Stainless, JSW and AMNS–Nippon India — transforming a regional operation into a growing PAN India scrap trading enterprise.
                </p>
                <p style={{ fontSize: 15, color: C.textDim, lineHeight: 1.92 }}>
                  Today, K R Enterprises handles single orders from <strong style={{ color: C.white }}>100 MT to 2000 MT</strong>, maintains a <strong style={{ color: C.white }}>99% on-time delivery</strong> record and is actively building new supply corridors across India — with shredding scrap and rail scrap as emerging categories.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 32 }}>
                  {[["Founded", "1984, Jamshedpur"], ["Monthly Supply", "6000+ MT"], ["On-Time Delivery", "99%"], ["Order Range", "100–2000 MT"], ["MSME Category", "Medium Enterprise"], ["Coverage", "PAN India"]].map(([l, v]) => (
                    <div key={l} style={{ background: C.navySurface, borderRadius: 10, padding: "16px 18px", borderLeft: `3px solid ${C.gold}` }}>
                      <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{l}</div>
                      <div style={{ fontSize: 15, fontWeight: 900, color: C.white }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ background: C.navySurface, border: `1px solid ${C.border}`, borderRadius: 16, padding: 32, marginBottom: 16 }}>
                  <div style={{ fontSize: 10, color: C.gold, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 24 }}>Leadership</div>
                  {[
                    { init: "KRM", name: "Shri Kailash Rai Malhotra", role: "Founder & Partner", note: "Founded K R Enterprises in 1984 · 40+ years of deep industry relationships with India's top steel producers · The cornerstone of trust that defines our business." },
                    { init: "VM", name: "Shri Vivek Malhotra", role: "Partner", note: "Post-Graduate from USA · Joined 2008–09 · Expanded corporate clients to TATA Steel, Jindal, AMNS, JSW · Driving modernisation and PAN India expansion." }
                  ].map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: i === 0 ? 24 : 0, paddingBottom: i === 0 ? 24 : 0, borderBottom: i === 0 ? `1px solid ${C.border}` : "none" }}>
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: C.gold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 900, color: C.navy, flexShrink: 0 }}>{p.init}</div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 800, color: C.white, marginBottom: 3 }}>{p.name}</div>
                        <div style={{ fontSize: 10, color: C.gold, fontWeight: 700, marginBottom: 6, letterSpacing: 0.5, textTransform: "uppercase" }}>{p.role}</div>
                        <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.65 }}>{p.note}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: C.navySurface, borderRadius: 16, padding: 28, border: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 10, color: C.gold, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 18 }}>Company Details</div>
                  {[
                    ["Registered Office", "Assangi Survey Ward No.9, Industrial Area, Adityapur, Jamshedpur"],
                    ["Additional Place", "M-6(P) Large Sector Gamharia, Jamshedpur"],
                    ["Nature of Business", "Trading in Iron & Steel Scrap"],
                    ["GST", "20AAHFK1739R2Z1"],
                    ["PAN", "AAHFK1739R"],
                    ["MSME", "Medium Enterprise · UDYAM-JH-06-0001117"],
                    ["IEC", "2114001105"],
                  ].map(([l, v], i, arr) => (
                    <div key={l} style={{ display: "flex", gap: 14, paddingBottom: 11, marginBottom: 11, borderBottom: i < arr.length - 1 ? `1px solid ${C.border}` : "none" }}>
                      <div style={{ fontSize: 11, color: C.muted, minWidth: 110, paddingTop: 1, flexShrink: 0 }}>{l}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: C.text, lineHeight: 1.5 }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════ PRODUCTS ══════════ */}
      {nav === "Products" && (
        <div style={{ paddingTop: 70 }}>
          <div style={{ background: `linear-gradient(150deg,${C.navy},${C.navyMid})`, padding: "80px 6% 70px", borderBottom: `1px solid ${C.border}` }}>
            <Tag label="What We Trade" />
            <h1 style={{ fontSize: 48, fontWeight: 900, color: C.white, margin: "16px 0 14px" }}>Products</h1>
            <p style={{ fontSize: 16, color: C.textDim, maxWidth: 520, lineHeight: 1.8 }}>Iron & Steel scrap in all major grades — sourced from Eastern India's leading industrial generators. 6000+ MT monthly supply capacity.</p>
          </div>
          <div style={{ padding: "70px 6%", background: C.navy }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 1, maxWidth: 1100, margin: "0 auto", border: `1px solid ${C.borderGold}`, borderRadius: 20, overflow: "hidden", background: C.borderGold }}>
              {PRODUCTS.map((p, i) => (
                <div key={i} style={{
                  background: i % 2 === 0 ? C.navySurface : C.navyMid,
                  padding: "32px 28px",
                  transition: "all 0.2s"
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.navyLight; }}
                  onMouseLeave={e => { e.currentTarget.style.background = i % 2 === 0 ? C.navySurface : C.navyMid; }}>
                  <div style={{ marginBottom: 14 }}><Tag label={p.tag} /></div>
                  <div style={{ fontSize: 20, fontWeight: 900, marginBottom: 12, color: C.white }}>{p.name}</div>

                </div>
              ))}
            </div>

            <div style={{ background: C.navySurface, borderRadius: 16, padding: "28px 36px", maxWidth: 1100, margin: "24px auto 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20, border: `1px solid ${C.borderGold}` }}>
              <div>
                <div style={{ fontSize: 17, fontWeight: 800, color: C.white, marginBottom: 4 }}>Need a specific grade or bulk volume?</div>
                <div style={{ fontSize: 13, color: C.muted }}>Single orders from 100 MT to 2000 MT · PAN India delivery</div>
              </div>
              <button onClick={() => goTo("Contact")} style={{ background: C.gold, color: C.navy, padding: "13px 28px", borderRadius: 10, fontSize: 14, fontWeight: 800, border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
                Request a Quote →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════ SUSTAINABILITY ══════════ */}
      {nav === "Sustainability" && (
        <div style={{ paddingTop: 70 }}>
          <div style={{ background: `linear-gradient(150deg,${C.green},#1A3825)`, padding: "80px 6% 70px" }}>
            <Tag label="Environmental Impact" green />
            <h1 style={{ fontSize: 48, fontWeight: 900, color: C.white, margin: "16px 0 20px" }}>Scrap Trading &<br />the Environment</h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 600, lineHeight: 1.88 }}>
              Recycling isn't just our business — it's our contribution to India's sustainable future. Every tonne of scrap we trade reduces mining, cuts emissions and conserves energy.
            </p>
          </div>
          <div style={{ background: C.green, padding: "0 6% 60px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16, maxWidth: 1100, margin: "0 auto" }}>
              {[["1.1 T", "Iron ore saved per tonne recycled"],["58%","Lower GHG emissions vs primary steel"],["75%","Less energy vs virgin production"],["76%","Reduction in water pollution"],["630 kg","Coking coal saved per tonne"],["0.53 T","CO₂ per tonne via induction furnace"]].map(([v, l], i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(76,175,122,0.18)", borderRadius: 14, padding: "24px 18px", textAlign: "center" }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: C.greenAccent, marginBottom: 8 }}>{v}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: "70px 6%", background: "#0F2418" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <Tag label="How We Contribute" green />
              <h2 style={{ fontSize: 34, fontWeight: 900, margin: "14px 0 10px", color: C.white }}>Our Role in India's Green Steel Vision</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 540, margin: "0 auto" }}>India's Steel Scrap Recycling Policy 2019 recognises organised scrap trading as a national priority. K R Enterprises has been doing it since 1984.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 1, maxWidth: 1100, margin: "0 auto", border: "1px solid rgba(76,175,122,0.2)", borderRadius: 16, overflow: "hidden", background: "rgba(76,175,122,0.08)" }}>
              {ENV_POINTS.map((e, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? "#0D2018" : "#0F2416", padding: "32px 28px" }}>
                  <div style={{ fontSize: 28, marginBottom: 14 }}>{e.icon}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 10, color: C.white }}>{e.title}</div>
                  <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.78 }}>{e.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ maxWidth: 760, margin: "52px auto 0", textAlign: "center", padding: "40px", background: "rgba(76,175,122,0.05)", border: "1px solid rgba(76,175,122,0.15)", borderRadius: 16 }}>
              <div style={{ fontSize: 12, color: C.greenAccent, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>India's Steel Scrap Recycling Policy 2019</div>
              <div style={{ fontSize: 18, color: C.white, fontWeight: 300, lineHeight: 1.85, fontStyle: "italic", marginBottom: 18 }}>
                "Processing and recycling of scrap in an organised, safe and environment-friendly manner is now a national priority — essential for sustainable steel production in India."
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>K R Enterprises has been contributing to this mission since 1984 — long before it became policy.</div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════ CLIENTS ══════════ */}
      {nav === "Clients" && (
        <div style={{ paddingTop: 70 }}>
          <div style={{ background: `linear-gradient(150deg,${C.navy},${C.navyMid})`, padding: "80px 6% 70px", borderBottom: `1px solid ${C.border}` }}>
            <Tag label="Our Partners" />
            <h1 style={{ fontSize: 48, fontWeight: 900, color: C.white, margin: "16px 0 20px" }}>Clients</h1>
            <p style={{ fontSize: 17, color: C.textDim, maxWidth: 560, lineHeight: 1.85 }}>
              Trusted by India's most respected steel manufacturers — relationships built on consistent quality, reliable supply and honest pricing.
            </p>
          </div>
          <div style={{ padding: "70px 6%", background: C.navy }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14 }}>
                {CLIENTS.map((c, i) => (
                  <div key={i} style={{ background: C.navySurface, border: `1px solid ${C.borderGold}`, borderRadius: 14, padding: "22px 26px", display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.gold, flexShrink: 0 }} />
                    <div style={{ fontSize: 15, fontWeight: 700, color: C.white }}>{c}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 48, background: C.navySurface, border: `1px solid ${C.border}`, borderRadius: 16, padding: "32px 36px", textAlign: "center" }}>
                <div style={{ fontSize: 14, color: C.muted, lineHeight: 1.8 }}>
                  Our client relationships span primary steel producers, secondary steel manufacturers, special alloy producers and steel foundries across India. We serve buyers requiring regular monthly volumes as well as one-time bulk procurement.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════ CONTACT ══════════ */}
      {nav === "Contact" && (
        <div style={{ paddingTop: 70 }}>
          <div style={{ background: `linear-gradient(150deg,${C.navy},${C.navyMid})`, padding: "80px 6% 70px", borderBottom: `1px solid ${C.border}` }}>
            <Tag label="Get In Touch" />
            <h1 style={{ fontSize: 48, fontWeight: 900, color: C.white, margin: "16px 0 16px" }}>Request a Quote</h1>
            <p style={{ fontSize: 17, color: C.textDim, maxWidth: 500, lineHeight: 1.85 }}>Tell us your requirement — material type, quantity and location. Our team responds within 4 business hours.</p>
          </div>
          <div style={{ padding: "70px 6%", background: C.navy }}>
            <div style={{ maxWidth: 740, margin: "0 auto" }}>
              {submitted ? (
                <div style={{ background: C.navySurface, borderRadius: 20, padding: 64, textAlign: "center", border: `1px solid ${C.border}` }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg,${C.gold},${C.goldHover})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, margin: "0 auto 20px", fontWeight: 900, color: C.navy }}>✓</div>
                  <div style={{ fontSize: 26, fontWeight: 900, marginBottom: 8, color: C.white }}>Enquiry Received!</div>
                  <div style={{ color: C.muted, fontSize: 15, marginBottom: 6 }}>Our team will contact you within 4 business hours.</div>
                  <div style={{ color: C.muted, fontSize: 13, marginBottom: 28 }}>Sent to <strong style={{ color: C.text }}>CRM@kregroup.co.in</strong></div>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", company: "", phone: "", email: "", material: "", qty: "" }); }} style={{ background: C.gold, color: C.navy, padding: "12px 28px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 800 }}>New Enquiry</button>
                </div>
              ) : (
                <div style={{ background: C.navySurface, borderRadius: 20, padding: 44, border: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: C.white, marginBottom: 6 }}>Fill in your details</div>
                  <div style={{ fontSize: 13, color: C.muted, marginBottom: 28 }}>Handled by our CRM team at <strong style={{ color: C.text }}>CRM@kregroup.co.in</strong></div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
                    {[["name","Your Name"],["company","Company Name"],["phone","Phone / WhatsApp"],["email","Email Address"]].map(([k, l]) => (
                      <div key={k}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.8 }}>{l}</div>
                        <input value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })} placeholder={`Enter ${l}`} style={{ width: "100%", background: C.navyMid, border: `1px solid ${C.border}`, borderRadius: 8, padding: "12px 14px", fontSize: 14, outline: "none", boxSizing: "border-box", color: C.text, fontFamily: "inherit" }} />
                      </div>
                    ))}
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.8 }}>Material Type</div>
                      <select value={form.material} onChange={e => setForm({ ...form, material: e.target.value })} style={{ width: "100%", background: C.navyMid, border: `1px solid ${C.border}`, borderRadius: 8, padding: "12px 14px", fontSize: 14, outline: "none", color: form.material ? C.text : C.muted, fontFamily: "inherit" }}>
                        <option value="">Select Material</option>
                        {["CRC / HRC Baled","HMS Scrap (HMS 1 & 2)","Structural Scrap","Dismantled Scrap","Sheet Scrap","Stainless Steel / Alloy Scrap","Other"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.8 }}>Quantity (MT)</div>
                      <input value={form.qty} onChange={e => setForm({ ...form, qty: e.target.value })} placeholder="e.g. 200 MT / month" style={{ width: "100%", background: C.navyMid, border: `1px solid ${C.border}`, borderRadius: 8, padding: "12px 14px", fontSize: 14, outline: "none", boxSizing: "border-box", color: C.text, fontFamily: "inherit" }} />
                    </div>
                  </div>
                  <button onClick={() => setSubmitted(true)} style={{ width: "100%", background: C.gold, color: C.navy, padding: "16px", borderRadius: 10, fontSize: 16, fontWeight: 800, border: "none", cursor: "pointer" }}>
                    Submit Enquiry →
                  </button>
                </div>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 16 }}>
                {[["📍","Address","Adityapur Industrial Area, Jamshedpur"],["📧","CRM Email","CRM@kregroup.co.in"],["🌐","Website","kregroup.co.in"]].map(([icon, l, v]) => (
                  <div key={l} style={{ background: C.navySurface, border: `1px solid ${C.border}`, borderRadius: 12, padding: 18, textAlign: "center" }}>
                    <div style={{ fontSize: 20, marginBottom: 6 }}>{icon}</div>
                    <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{l}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <div style={{ background: C.navyMid, borderTop: `1px solid ${C.border}`, padding: "44px 6%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: C.gold, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: C.navy, fontSize: 11 }}>KR</div>
            <span style={{ fontWeight: 900, color: C.white, fontSize: 15 }}>K R Enterprises</span>
          </div>
          <div style={{ color: C.muted, fontSize: 12, marginBottom: 2 }}>© 2025 · kregroup.co.in · Iron & Steel Scrap Trading · Jamshedpur, Jharkhand</div>
          <div style={{ color: "rgba(255,255,255,0.15)", fontSize: 10 }}>GST: 20AAHFK1739R2Z1 · MSME: UDYAM-JH-06-0001117 · IEC: 2114001105</div>
          <div style={{ color: "rgba(255,255,255,0.1)", fontSize: 10, marginTop: 3 }}>iron scrap Jamshedpur · steel scrap trader Jharkhand · HMS scrap supplier India · ferrous scrap Eastern India</div>
          <div style={{ color: 'rgba(255,255,255,0.15)', fontSize: 10, marginTop: 8 }}>This site is powered by <span style={{ color: '#C9A84C', opacity: 0.5 }}>BizFlow</span></div>
        </div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {NAV.map(n => <button key={n} onClick={() => goTo(n)} style={{ background: "none", border: "none", color: C.muted, cursor: "pointer", fontSize: 13 }}>{n}</button>)}
        </div>
        <button onClick={() => goTo("Contact")} style={{ background: C.goldDim, color: C.gold, padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 700, border: `1px solid ${C.goldBorder}`, cursor: "pointer" }}>
          🔐 Employee Portal
        </button>
      </div>
    </div>
  );
}
