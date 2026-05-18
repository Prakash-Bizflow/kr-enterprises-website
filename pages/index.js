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
  { val: "Pan India", label: "Supply Network" },
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
  { icon: "⛏️", title: "Reduces Destructive Mining", desc: "Every tonne we recycle saves 1.1 tonnes of iron ore, 630 kg of coking coal and 55 kg of limestone — preserving India's natural resources for future generations." },
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
  // Premium Charcoal Steel base
  navy: "#0F1419",        // Deep charcoal (was navy)
  navyMid: "#171D24",     // Mid charcoal
  navyLight: "#1F2630",   // Light charcoal
  navySurface: "#1C2229", // Card surface
  // Recycler Green accent (logo match)
  gold: "#3FB562",        // Recycler green (was gold)
  goldHover: "#54C677",   // Hover green
  goldDim: "rgba(63,181,98,0.1)",
  goldBorder: "rgba(63,181,98,0.25)",
  // Steel silver (logo monogram match)
  silver: "#C5CCD3",
  silverDim: "rgba(197,204,211,0.15)",
  // Text + base
  white: "#FFFFFF",
  text: "#E8EDF2",
  textDim: "rgba(232,237,242,0.6)",
  border: "rgba(255,255,255,0.07)",
  borderGold: "rgba(63,181,98,0.2)",
  // Sustainability dedicated section
  green: "#0A1F12",
  greenMid: "#1A5C35",
  greenAccent: "#4CAF7A",
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
  // Birthday banner — shows from 13 May 00:00 to 14 May 23:59 (IST), auto-hides after
  const isBirthdayPeriod = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 4, 13, 0, 0, 0); // 13 May 00:00
    const end = new Date(now.getFullYear(), 4, 14, 23, 59, 59); // 14 May 23:59
    return now >= start && now <= end;
  };
  const [showBirthday, setShowBirthday] = useState(isBirthdayPeriod());
  const [form, setForm] = useState({ quoteType: "", name: "", company: "", phone: "", email: "", material: "", qty: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").slice(-10));

  const handleSubmit = async () => {
    if (!form.quoteType) {
      setSubmitError("Please select if you want to Buy or Sell scrap");
      return;
    }
    if (!form.name || !form.phone || !form.email) {
      setSubmitError("Please fill Name, Phone and Email");
      return;
    }
    if (!validateEmail(form.email)) {
      setSubmitError("Please enter a valid email address");
      return;
    }
    if (!validatePhone(form.phone)) {
      setSubmitError("Please enter a valid 10-digit Indian phone number");
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/finance@kregroup.co.in", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: `New ${form.quoteType} Quote Request - K R Enterprises`,
          _cc: "quotes@kregroup.co.in",
          _template: "table",
          _honey: "",
          Quote_Type: form.quoteType,
          Name: form.name,
          Company: form.company,
          Phone: form.phone,
          Email: form.email,
          Material: form.material,
          Quantity_MT: form.qty,
          Message: form.message || "Not provided",
        })
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setSubmitted(true);
      } else {
        setSubmitError("Could not send. Please try again or email us directly.");
      }
    } catch (e) {
      setSubmitError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const goTo = (p) => { setNav(p); window.scrollTo(0, 0); };

  return (
    <div style={{ fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif", background: C.navy, color: C.text, minHeight: "100vh" }}>

      {/* ── BIRTHDAY BANNER (Auto-hides after 14 May 23:59) ── */}
      {showBirthday && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: "radial-gradient(ellipse at 20% 50%, rgba(255,215,100,0.35) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(63,181,98,0.25) 0%, transparent 50%), linear-gradient(90deg, #1a1410 0%, #2d1f0a 25%, #0a2415 50%, #2d1f0a 75%, #1a1410 100%)",
          backgroundSize: "100% 100%, 100% 100%, 200% 100%",
          animation: "bdayBgShift 8s ease-in-out infinite",
          borderBottom: "2px solid #C9A84C",
          boxShadow: "0 4px 24px rgba(201,168,76,0.25)",
          padding: "14px 60px 14px 6%",
          overflow: "hidden"
        }}>
          <style>{`
            @keyframes bdayBgShift {
              0%, 100% { background-position: 0% 50%, 0% 50%, 0% 50%; }
              50% { background-position: 100% 50%, 100% 50%, 100% 50%; }
            }
            @keyframes bdayFall1 {
              0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { transform: translateY(90px) rotate(360deg); opacity: 0; }
            }
            @keyframes bdayFall2 {
              0% { transform: translateY(-20px) rotate(0deg) translateX(0); opacity: 0; }
              10% { opacity: 1; }
              50% { transform: translateY(40px) rotate(180deg) translateX(15px); }
              90% { opacity: 1; }
              100% { transform: translateY(90px) rotate(360deg) translateX(-10px); opacity: 0; }
            }
            @keyframes bdayBounce {
              0%, 100% { transform: translateY(0) scale(1) rotate(-5deg); }
              25% { transform: translateY(-7px) scale(1.1) rotate(0deg); }
              50% { transform: translateY(-3px) scale(1.05) rotate(5deg); }
              75% { transform: translateY(-7px) scale(1.1) rotate(0deg); }
            }
            @keyframes bdayTextShine { to { background-position: 200% center; } }
            @keyframes bdayHeartbeat {
              0%, 100% { transform: scale(1); }
              15% { transform: scale(1.25); }
              30% { transform: scale(1); }
              45% { transform: scale(1.25); }
            }
            @keyframes bdaySparkle {
              0%, 100% { opacity: 0; transform: scale(0); }
              50% { opacity: 1; transform: scale(1.5); }
            }
            .bday-confetti { position: absolute; width: 6px; height: 6px; pointer-events: none; }
            .bday-c1 { background: #C9A84C; top: 0; left: 10%; animation: bdayFall1 3s linear infinite; }
            .bday-c2 { background: #3FB562; top: 0; left: 25%; animation: bdayFall2 4s linear infinite 0.5s; }
            .bday-c3 { background: #DFB94A; top: 0; left: 40%; animation: bdayFall1 3.5s linear infinite 1s; border-radius: 50%; }
            .bday-c4 { background: #54C677; top: 0; left: 60%; animation: bdayFall2 3s linear infinite 1.5s; }
            .bday-c5 { background: #C9A84C; top: 0; left: 75%; animation: bdayFall1 4s linear infinite 0.2s; border-radius: 50%; }
            .bday-c6 { background: #3FB562; top: 0; left: 90%; animation: bdayFall2 3.2s linear infinite 0.8s; }
            .bday-c7 { background: #DFB94A; top: 0; left: 15%; animation: bdayFall1 3.8s linear infinite 2s; border-radius: 50%; }
            .bday-c8 { background: #54C677; top: 0; left: 50%; animation: bdayFall2 3.5s linear infinite 1.2s; }
            .bday-c9 { background: #C9A84C; top: 0; left: 85%; animation: bdayFall1 4.2s linear infinite 1.8s; }
            .bday-sparkle { position: absolute; width: 4px; height: 4px; background: white; border-radius: 50%; box-shadow: 0 0 8px 2px rgba(255,215,100,0.8); pointer-events: none; }
            .bday-s1 { top: 30%; left: 18%; animation: bdaySparkle 2s ease-in-out infinite; }
            .bday-s2 { top: 60%; left: 35%; animation: bdaySparkle 2.5s ease-in-out infinite 0.5s; }
            .bday-s3 { top: 25%; right: 25%; animation: bdaySparkle 2.2s ease-in-out infinite 1s; }
            .bday-s4 { top: 70%; right: 12%; animation: bdaySparkle 1.8s ease-in-out infinite 1.5s; }
            .bday-s5 { top: 40%; left: 50%; animation: bdaySparkle 2.3s ease-in-out infinite 0.8s; }
            .bday-emoji { display: inline-block; font-size: 28px; animation: bdayBounce 2s ease-in-out infinite; filter: drop-shadow(0 0 8px rgba(255,215,100,0.6)); }
            .bday-emoji-delay { animation-delay: 0.4s; }
            .bday-heart { color: #FF6B8A; animation: bdayHeartbeat 1.5s ease-in-out infinite; display: inline-block; }
          `}</style>

          <span className="bday-confetti bday-c1"></span>
          <span className="bday-confetti bday-c2"></span>
          <span className="bday-confetti bday-c3"></span>
          <span className="bday-confetti bday-c4"></span>
          <span className="bday-confetti bday-c5"></span>
          <span className="bday-confetti bday-c6"></span>
          <span className="bday-confetti bday-c7"></span>
          <span className="bday-confetti bday-c8"></span>
          <span className="bday-confetti bday-c9"></span>
          <span className="bday-sparkle bday-s1"></span>
          <span className="bday-sparkle bday-s2"></span>
          <span className="bday-sparkle bday-s3"></span>
          <span className="bday-sparkle bday-s4"></span>
          <span className="bday-sparkle bday-s5"></span>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, flexWrap: "wrap", position: "relative", zIndex: 3 }}>
            <span className="bday-emoji">🎂</span>
            <div style={{ textAlign: "center", maxWidth: 820 }}>
              <div style={{
                fontSize: 15, fontWeight: 800,
                background: "linear-gradient(90deg, #FFD966 0%, #FFEB9C 30%, #95E0AC 70%, #FFD966 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "bdayTextShine 3s linear infinite",
                letterSpacing: 0.5, marginBottom: 4
              }}>Happy Birthday, Shri Vivek Malhotra</div>
              <div style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.78)", letterSpacing: 0.2, lineHeight: 1.5 }}>
                Every brick of K R Enterprises has been laid by your sweat and vision <span className="bday-heart">❤</span>
                {" "}From dawn till dusk, your tireless dedication is why we stand where we do today —
                and the same passion will take us where we're going tomorrow.
                The entire K R family wishes you health, happiness, and many more milestones ahead.
              </div>
            </div>
            <span className="bday-emoji bday-emoji-delay">🎉</span>
          </div>

          <button onClick={() => setShowBirthday(false)} style={{
            position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
            color: "rgba(255,255,255,0.7)", width: 28, height: 28, borderRadius: "50%",
            fontSize: 16, cursor: "pointer", padding: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            lineHeight: 1, zIndex: 4
          }} aria-label="Close birthday banner">×</button>
        </div>
      )}

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: showBirthday ? 90 : 0, left: 0, right: 0, zIndex: 999,
        background: scrolled ? "rgba(13,27,42,0.98)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
        padding: "0 5%", height: 70,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.3s"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }} onClick={() => goTo("Home")}>
          <div style={{ height: 50, display: "flex", alignItems: "center", background: scrolled ? "transparent" : "rgba(255,255,255,0.95)", padding: scrolled ? 0 : "4px 10px", borderRadius: 8, transition: "all 0.3s" }}>
            <img src="/logo.png" alt="K R Enterprises" style={{ height: scrolled ? 44 : 42, width: "auto", display: "block" }} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 15, color: C.white }}>K R Enterprises</div>
            <div style={{ fontSize: 10, color: C.gold, letterSpacing: 2, textTransform: "uppercase" }}>Metal Scrap Recycler · Est. 1984</div>
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
                  Eastern India's Leading Metal Scrap Recycler
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`, color: C.muted, padding: "7px 14px", borderRadius: 24, fontSize: 11, letterSpacing: 1 }}>
                  Est. 1984 · Jamshedpur
                </div>
              </div>

              <h1 style={{ fontSize: "clamp(38px,5.5vw,68px)", fontWeight: 900, color: C.white, lineHeight: 1.06, margin: "0 0 20px", letterSpacing: -1 }}>
                Sustainability<br />
                <span style={{ color: C.gold }}>Forged</span><br />
                with Every Ton, Every Time
              </h1>

              <p style={{ fontSize: 17, color: C.textDim, lineHeight: 1.88, maxWidth: 580, marginBottom: 44 }}>
                K R Enterprises is a Jamshedpur-based <strong style={{ color: C.white }}>metal scrap recycler</strong> — supplying HMS, CRC/HRC Baled, Structural and Stainless scrap at scale to India's largest steel manufacturers. Recycling steel, conserving resources, building a circular economy — for four decades.
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

          {/* SUSTAINABILITY — BIG SECTION */}
          <div style={{ padding: "100px 6%", background: `linear-gradient(160deg, ${C.green} 0%, #0F2818 50%, #0A1F12 100%)`, position: "relative", overflow: "hidden" }}>
            {/* Decorative recycle ring */}
            {[600, 420, 240].map((s, i) => (
              <div key={i} style={{ position: "absolute", left: `-${s/3}px`, top: `${10 + i * 15}%`, width: s, height: s, borderRadius: "50%", border: `1px solid rgba(76,175,122,${0.05 + i * 0.03})`, pointerEvents: "none" }} />
            ))}

            <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
              {/* Header */}
              <div style={{ textAlign: "center", marginBottom: 56 }}>
                <Tag label="Sustainability • ESG • Circular Economy" green />
                <h2 style={{ fontSize: "clamp(32px,4vw,46px)", fontWeight: 900, color: C.white, margin: "18px 0 16px", letterSpacing: -0.5 }}>
                  We Don't Just Recycle Metal.<br />
                  <span style={{ color: C.greenAccent }}>We Build a Circular Steel Economy.</span>
                </h2>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.58)", lineHeight: 1.85, maxWidth: 720, margin: "0 auto" }}>
                  For over 40 years, K R Enterprises has been quietly powering India's recycled steel supply — channeling industrial scrap back into the production cycle as a dedicated metal scrap recycler, reducing dependence on iron ore mining, and cutting carbon emissions for our nation's largest steel producers.
                </p>
              </div>

              {/* Big Stats Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginBottom: 48 }}>
                {[
                  { val: "1.1 T", label: "Iron Ore Saved", sub: "per tonne of scrap recycled" },
                  { val: "58%", label: "Lower CO₂ Emissions", sub: "vs primary steel production" },
                  { val: "75%", label: "Energy Conserved", sub: "vs virgin steel manufacturing" },
                  { val: "76%", label: "Less Water Pollution", sub: "compared to primary route" },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(76,175,122,0.18)",
                    borderRadius: 16, padding: "28px 22px", textAlign: "center",
                    transition: "all 0.2s"
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(76,175,122,0.06)"; e.currentTarget.style.borderColor = "rgba(76,175,122,0.4)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(76,175,122,0.18)"; }}>
                    <div style={{ fontSize: 38, fontWeight: 900, color: C.greenAccent, marginBottom: 6, lineHeight: 1 }}>{s.val}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.white, marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Two column callouts */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16, marginBottom: 40 }}>
                <div style={{ background: "rgba(76,175,122,0.06)", border: "1px solid rgba(76,175,122,0.2)", borderRadius: 16, padding: "26px 28px" }}>
                  <div style={{ fontSize: 22, marginBottom: 10 }}>🇮🇳</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: C.white, marginBottom: 8 }}>Aligned with India's Steel Scrap Recycling Policy 2019</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                    Government of India recognises organised scrap recycling as a national priority for sustainable steel production. K R Enterprises has been doing it since 1984 — long before it became policy.
                  </div>
                </div>
                <div style={{ background: "rgba(76,175,122,0.06)", border: "1px solid rgba(76,175,122,0.2)", borderRadius: 16, padding: "26px 28px" }}>
                  <div style={{ fontSize: 22, marginBottom: 10 }}>📈</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: C.white, marginBottom: 8 }}>Future-Ready ESG-Aligned Business</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                    As India targets net-zero by 2070 and steel decarbonisation accelerates, scrap-based steel is the future. We are positioned at the heart of this transition — a sustainable, growing, investment-ready enterprise.
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <button onClick={() => goTo("Sustainability")} style={{ background: C.greenAccent, color: "#0A1F12", padding: "14px 32px", borderRadius: 10, fontSize: 14, fontWeight: 800, border: "none", cursor: "pointer", boxShadow: "0 6px 24px rgba(76,175,122,0.35)" }}>
                  Explore Our Environmental Impact →
                </button>
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
              Eastern India's leading metal scrap recycler — four decades of trust, reliability and growth from the steel capital of the country.
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
                  {[["Founded", "1984, Jamshedpur"], ["Monthly Supply", "Bulk Volumes"], ["On-Time Delivery", "99%"], ["Order Range", "100–2000 MT"], ["MSME Category", "Medium Enterprise"], ["Coverage", "PAN India"]].map(([l, v]) => (
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
            <p style={{ fontSize: 16, color: C.textDim, maxWidth: 520, lineHeight: 1.8 }}>Metal scrap recycling in all major grades — sourced directly from Eastern India's leading industrial generators. Consistent monthly supply at industrial scale.</p>
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
            <h1 style={{ fontSize: 48, fontWeight: 900, color: C.white, margin: "16px 0 20px" }}>Metal Recycling &<br />the Environment</h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 600, lineHeight: 1.88 }}>
              Recycling isn't just our business — it's our contribution to India's sustainable future. Every tonne of metal we recycle reduces mining, cuts emissions and conserves energy.
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
                  <div style={{ color: C.muted, fontSize: 13, marginBottom: 28 }}>Sent to <strong style={{ color: C.text }}>quotes@kregroup.co.in</strong></div>
                  <button onClick={() => { setSubmitted(false); setForm({ quoteType: "", name: "", company: "", phone: "", email: "", material: "", qty: "", message: "" }); }} style={{ background: C.gold, color: C.navy, padding: "12px 28px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 800 }}>New Enquiry</button>
                </div>
              ) : (
                <div style={{ background: C.navySurface, borderRadius: 20, padding: 44, border: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: C.white, marginBottom: 6 }}>Fill in your details</div>
                  <div style={{ fontSize: 13, color: C.muted, marginBottom: 24 }}>Sent to our team at <strong style={{ color: C.text }}>quotes@kregroup.co.in</strong></div>

                  {/* Buy/Sell Selector */}
                  <div style={{ marginBottom: 22 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.8 }}>I want to <span style={{ color: C.gold }}>*</span></div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      {[
                        { val: "Buy", icon: "🛒", desc: "Looking to buy scrap" },
                        { val: "Sell", icon: "📦", desc: "Want to sell scrap" }
                      ].map(opt => (
                        <button key={opt.val} type="button" onClick={() => setForm({ ...form, quoteType: opt.val })} style={{
                          background: form.quoteType === opt.val ? "rgba(201,168,76,0.12)" : C.navyMid,
                          border: form.quoteType === opt.val ? `2px solid ${C.gold}` : `2px solid ${C.border}`,
                          borderRadius: 10, padding: "16px 18px", cursor: "pointer", textAlign: "left",
                          transition: "all 0.2s", fontFamily: "inherit"
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                            <span style={{ fontSize: 18 }}>{opt.icon}</span>
                            <span style={{ fontSize: 14, fontWeight: 800, color: form.quoteType === opt.val ? C.gold : C.white }}>{opt.val} Scrap</span>
                          </div>
                          <div style={{ fontSize: 11, color: C.muted, paddingLeft: 28 }}>{opt.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

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

                  {/* Tell Us Details */}
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.8 }}>Tell Us Details <span style={{ color: C.muted, fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span></div>
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Specific grade, delivery location, frequency, payment terms — anything you'd like us to know..." rows={3} style={{ width: "100%", background: C.navyMid, border: `1px solid ${C.border}`, borderRadius: 8, padding: "12px 14px", fontSize: 14, outline: "none", boxSizing: "border-box", color: C.text, fontFamily: "inherit", resize: "vertical", minHeight: 70 }} />
                  </div>

                  {/* Honeypot for spam protection - hidden field */}
                  <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                  <>
                    {submitError && <div style={{ color: "#ff6b6b", fontSize: 13, marginBottom: 12, padding: "10px 14px", background: "rgba(255,107,107,0.08)", borderRadius: 8, border: "1px solid rgba(255,107,107,0.2)" }}>{submitError}</div>}
                    <button onClick={handleSubmit} disabled={submitting} style={{ width: "100%", background: submitting ? "rgba(201,168,76,0.5)" : C.gold, color: C.navy, padding: "16px", borderRadius: 10, fontSize: 16, fontWeight: 800, border: "none", cursor: submitting ? "wait" : "pointer", opacity: submitting ? 0.7 : 1 }}>
                      {submitting ? "Sending..." : "Submit Enquiry →"}
                    </button>
                  </>
                </div>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 16 }}>
                {[["📍","Address","Adityapur Industrial Area, Jamshedpur"],["📧","Email","quotes@kregroup.co.in"],["🌐","Website","kregroup.co.in"]].map(([icon, l, v]) => (
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
            <div style={{ height: 38, background: "white", padding: "3px 8px", borderRadius: 6, display: "flex", alignItems: "center" }}>
              <img src="/logo.png" alt="K R Enterprises" style={{ height: 32, width: "auto", display: "block" }} />
            </div>
            <span style={{ fontWeight: 900, color: C.white, fontSize: 15 }}>K R Enterprises</span>
          </div>
          <div style={{ color: C.muted, fontSize: 12, marginBottom: 2 }}>© 2025 · kregroup.co.in · Metal Scrap Recycler · Jamshedpur, Jharkhand</div>
          <div style={{ color: "rgba(255,255,255,0.15)", fontSize: 10 }}>GST: 20AAHFK1739R2Z1 · MSME: UDYAM-JH-06-0001117 · IEC: 2114001105</div>
          <div style={{ color: "rgba(255,255,255,0.1)", fontSize: 10, marginTop: 3 }}>metal scrap recycler Jamshedpur · iron steel scrap recycling Jharkhand · HMS scrap supplier · ferrous metal recycler Eastern India · sustainable steel scrap</div>
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
