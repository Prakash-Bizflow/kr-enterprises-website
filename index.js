import { useState, useEffect } from "react";
import Head from "next/head";

const NAV = ["Home", "About", "Products", "Clients", "Contact"];

const PRODUCTS = [
  { name: "CRC & HRC Baled", desc: "Cold Rolled & Hot Rolled Coil scrap in baled form — premium grade for re-rollers and steel mills.", icon: "🔩", tag: "Core Product" },
  { name: "HMS Scrap", desc: "Heavy Melting Scrap sourced from industrial units and demolition sites around Jamshedpur.", icon: "🏗️", tag: "High Volume" },
  { name: "Structural Scrap", desc: "MS angles, channels, beams and structural steel scrap in bulk quantities.", icon: "📐", tag: "Bulk Supply" },
  { name: "Dismantled Scrap", desc: "Plant dismantling and factory scrap — sorted, graded, and ready for dispatch.", icon: "🏭", tag: "Specialized" },
  { name: "Sheet Scrap", desc: "MS and alloy sheet scrap from press shops and fabrication units.", icon: "⚙️", tag: "Regular Supply" },
  { name: "Stainless & Alloy", desc: "SS and alloy scrap including grades 202, 304, 316 — sourced from Tata, Jindal plants.", icon: "✨", tag: "Premium Grade" },
];

const CLIENTS = [
  { name: "TATA Steel Limited", type: "Industry Titan", desc: "Long-standing supply partnership for quality scrap grades." },
  { name: "Jindal Stainless Ltd", type: "Industry Titan", desc: "Regular supplier of SS and alloy scrap grades." },
  { name: "AMNS – ArcelorMittal Nippon India", type: "Industry Titan", desc: "Trusted scrap partner for one of India's largest steel makers." },
  { name: "Arush Metalcast Ltd", type: "Network Partner", desc: "Foundry-grade scrap supply for casting operations." },
  { name: "Mal Metaliks Pvt Ltd", type: "Network Partner", desc: "Consistent supply of HMS and structural scrap." },
  { name: "RSB Transmission India – Casting Division", type: "Network Partner", desc: "Specialized casting scrap sourcing and supply." },
];

const STATS = [
  { val: "1984", label: "Established" },
  { val: "6000+ MT", label: "Monthly Capacity" },
  { val: "₹240 Cr+", label: "Turnover FY26" },
  { val: "PAN India", label: "Supply Network" },
];

const REVENUE = [
  { fy: "FY 21–22", val: 75, label: "₹75 Cr" },
  { fy: "FY 22–23", val: 175, label: "₹175 Cr" },
  { fy: "FY 23–24", val: 192, label: "₹192 Cr" },
  { fy: "FY 24–25", val: 225, label: "₹225 Cr" },
  { fy: "FY 25–26", val: 240, label: "₹240 Cr+" },
];

export default function Home() {
  const [nav, setNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", material: "", qty: "" });

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const maxRev = 240;

  const navStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
    background: scrolled ? "rgba(252,250,247,0.97)" : "transparent",
    borderBottom: scrolled ? "1px solid #e5ddd0" : "none",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    padding: "0 6%", height: 68,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    transition: "all 0.3s"
  };

  return (
    <>
      <Head>
        <title>K R Enterprises – Iron & Steel Scrap Trading | Jamshedpur</title>
        <meta name="description" content="K R Enterprises – India's trusted iron and steel scrap trader since 1984. Supplying 6000+ MT monthly to TATA Steel, Jindal Stainless, AMNS. Based in Jamshedpur, Jharkhand." />
        <meta name="keywords" content="iron scrap, steel scrap, scrap trading, Jamshedpur, TATA Steel supplier, HMS scrap, CRC HRC baled" />
        <meta property="og:title" content="K R Enterprises – Iron & Steel Scrap Trading" />
        <meta property="og:description" content="Trusted scrap trader since 1984. 6000+ MT monthly. PAN India supply." />
        <meta property="og:url" content="https://kregroup.co.in" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif", background: "#f7f4ef", color: "#1c1c1c", minHeight: "100vh" }}>

        {/* NAVBAR */}
        <nav style={navStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => setNav("Home")}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: "linear-gradient(145deg,#8b1a1a,#c0392b)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 15, boxShadow: "0 2px 12px rgba(139,26,26,0.35)" }}>KR</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: scrolled ? "#1c1c1c" : "white" }}>K R Enterprises</div>
              <div style={{ fontSize: 10, color: scrolled ? "#999" : "rgba(255,255,255,0.6)", letterSpacing: 1.5, textTransform: "uppercase" }}>Iron & Steel · Since 1984</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {NAV.map(n => (
              <button key={n} onClick={() => setNav(n)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: nav === n ? 700 : 500, color: scrolled ? (nav === n ? "#8b1a1a" : "#555") : (nav === n ? "#ffb3b3" : "rgba(255,255,255,0.82)"), borderBottom: nav === n ? `2px solid ${scrolled ? "#8b1a1a" : "#ff8080"}` : "2px solid transparent", paddingBottom: 2, transition: "all 0.2s" }}>{n}</button>
            ))}
            <button onClick={() => setNav("Contact")} style={{ background: "#8b1a1a", color: "white", padding: "9px 22px", borderRadius: 8, fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 2px 12px rgba(139,26,26,0.3)" }}>Get Quote</button>
          </div>
        </nav>

        {/* HOME */}
        {nav === "Home" && (
          <>
            <div style={{ minHeight: "100vh", background: "linear-gradient(150deg,#0d0404 0%,#2a0808 35%,#5a1010 65%,#8b1a1a 100%)", display: "flex", alignItems: "center", padding: "0 6%", position: "relative", overflow: "hidden" }}>
              {[400, 280, 160].map((s, i) => (
                <div key={i} style={{ position: "absolute", right: `${8 + i * 5}%`, top: `${15 + i * 8}%`, width: s, height: s, borderRadius: "50%", border: `1px solid rgba(255,255,255,${0.03 + i * 0.02})` }} />
              ))}
              <div style={{ maxWidth: 700, zIndex: 2, paddingTop: 80 }}>
                <div style={{ display: "inline-block", background: "rgba(255,180,160,0.12)", border: "1px solid rgba(255,160,140,0.25)", color: "#ffb3a0", padding: "7px 18px", borderRadius: 24, fontSize: 12, fontWeight: 600, letterSpacing: 1.2, marginBottom: 30, textTransform: "uppercase" }}>
                  Established 1984 · Jamshedpur, Jharkhand
                </div>
                <h1 style={{ fontSize: "clamp(38px,5.5vw,68px)", fontWeight: 900, color: "white", lineHeight: 1.08, margin: "0 0 24px", letterSpacing: -0.5 }}>
                  India's Trusted<br /><span style={{ color: "#ff8a7a" }}>Iron & Steel</span><br />Scrap Traders
                </h1>
                <p style={{ fontSize: 17, color: "rgba(255,255,255,0.68)", lineHeight: 1.8, maxWidth: 540, marginBottom: 40 }}>
                  Supplying 6000+ MT monthly to TATA Steel, Jindal Stainless, and AMNS–Nippon India. Strategically located in Jamshedpur — the steel capital of India.
                </p>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <button onClick={() => setNav("Contact")} style={{ background: "#8b1a1a", color: "white", padding: "15px 34px", borderRadius: 10, fontSize: 15, fontWeight: 800, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(139,26,26,0.5)" }}>Request a Quote →</button>
                  <button onClick={() => setNav("Products")} style={{ background: "transparent", color: "white", padding: "15px 34px", borderRadius: 10, fontSize: 15, fontWeight: 600, border: "1px solid rgba(255,255,255,0.25)", cursor: "pointer" }}>View Products</button>
                </div>
              </div>
            </div>

            {/* STATS BAR */}
            <div style={{ background: "#8b1a1a", padding: "30px 6%", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 12 }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ textAlign: "center", padding: "8px 20px" }}>
                  <div style={{ fontSize: 30, fontWeight: 900, color: "white" }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", letterSpacing: 1.2, textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CLIENTS STRIP */}
            <div style={{ padding: "60px 6%", background: "#f7f4ef" }}>
              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <div style={{ fontSize: 11, color: "#8b1a1a", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Trusted By</div>
                <h2 style={{ fontSize: 28, fontWeight: 900 }}>Our Key Clients</h2>
              </div>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 14 }}>
                {["TATA Steel Limited", "Jindal Stainless Ltd", "AMNS – Nippon India", "Arush Metalcast", "Mal Metaliks", "RSB Transmission"].map((c, i) => (
                  <div key={i} style={{ background: "white", border: "1px solid #e5ddd0", borderRadius: 10, padding: "12px 24px", fontSize: 13, fontWeight: 700, color: "#3a3a3a" }}>{c}</div>
                ))}
              </div>
            </div>

            {/* REVENUE CHART */}
            <div style={{ padding: "60px 6% 80px", background: "white" }}>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <div style={{ fontSize: 11, color: "#8b1a1a", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Growth Story</div>
                <h2 style={{ fontSize: 28, fontWeight: 900 }}>Financial Milestones</h2>
              </div>
              <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", alignItems: "flex-end", gap: 20, justifyContent: "center" }}>
                {REVENUE.map((r, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                    <div style={{ fontSize: 14, fontWeight: 900, color: "#8b1a1a" }}>{r.label}</div>
                    <div style={{ width: "100%", borderRadius: "8px 8px 0 0", background: i === 4 ? "#8b1a1a" : `rgba(139,26,26,${0.2 + i * 0.12})`, height: `${Math.round((r.val / maxRev) * 200)}px`, minHeight: 30, transition: "all 0.3s" }} />
                    <div style={{ fontSize: 11, color: "#888", fontWeight: 600 }}>{r.fy}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ABOUT */}
        {nav === "About" && (
          <div style={{ paddingTop: 68 }}>
            <div style={{ background: "linear-gradient(150deg,#0d0404,#5a1010)", padding: "80px 6% 60px", color: "white" }}>
              <div style={{ fontSize: 11, color: "#ffb3a0", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Our Story</div>
              <h1 style={{ fontSize: 46, fontWeight: 900, margin: "0 0 20px" }}>About K R Enterprises</h1>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 620, lineHeight: 1.8 }}>Four decades of trust, integrity, and growth in India's iron & steel scrap industry.</p>
            </div>
            <div style={{ padding: "60px 6%", background: "white" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, maxWidth: 1100, margin: "0 auto" }}>
                <div>
                  <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>Founded in 1984</h2>
                  <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 16 }}>K R Enterprises was founded by <strong>Shri Kailash Rai Malhotra</strong> — a visionary who built the company from a humble scrap supplier to a leading trader in India's Iron & Steel industry.</p>
                  <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 16 }}>In 2008–09, <strong>Shri Vivek Malhotra</strong> joined after completing his post-graduation from the USA, bringing fresh energy and expanding the company's corporate client base.</p>
                  <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85 }}>Today, clients like <strong>TATA Steel, Jindal Stainless and AMNS–Nippon India</strong> place their trust in us — a testimony to four decades of reliable supply and quality.</p>
                </div>
                <div>
                  <div style={{ background: "#f7f4ef", borderRadius: 16, padding: 28, marginBottom: 16 }}>
                    <div style={{ fontSize: 11, color: "#999", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Registered Office</div>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>Assangi Survey Ward No.9</div>
                    <div style={{ fontSize: 14, color: "#555" }}>Industrial Area, Adityapur, Jamshedpur</div>
                  </div>
                  <div style={{ background: "#f7f4ef", borderRadius: 16, padding: 28, marginBottom: 16 }}>
                    <div style={{ fontSize: 11, color: "#999", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Additional Place of Work</div>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>M-6(P) Large Sector Gamharia</div>
                    <div style={{ fontSize: 14, color: "#555" }}>Jamshedpur, Jharkhand</div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {[["GST", "20AAHFK1739R2Z1"], ["PAN", "AAHFK1739R"], ["MSME", "UDYAM-JH-06-0001117"], ["IEC", "2114001105"]].map(([l, v]) => (
                      <div key={l} style={{ background: "white", border: "1px solid #e5ddd0", borderRadius: 10, padding: "14px 16px" }}>
                        <div style={{ fontSize: 10, color: "#999", letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{l}</div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#3a3a3a", wordBreak: "break-all" }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCTS */}
        {nav === "Products" && (
          <div style={{ paddingTop: 68 }}>
            <div style={{ background: "linear-gradient(150deg,#0d0404,#5a1010)", padding: "80px 6% 60px", color: "white" }}>
              <div style={{ fontSize: 11, color: "#ffb3a0", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>What We Trade</div>
              <h1 style={{ fontSize: 46, fontWeight: 900, margin: "0 0 20px" }}>Our Products</h1>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 560, lineHeight: 1.8 }}>Specialized in CRC & HRC Baled, HMS, Structural, Dismantled and Sheet Scraps — 6000+ MT monthly capacity.</p>
            </div>
            <div style={{ padding: "60px 6%", background: "#f7f4ef" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24, maxWidth: 1100, margin: "0 auto" }}>
                {PRODUCTS.map((p, i) => (
                  <div key={i} style={{ background: "white", borderRadius: 16, padding: 30, border: "1px solid #e5ddd0", transition: "all 0.2s", cursor: "default" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(139,26,26,0.1)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                    <div style={{ fontSize: 34, marginBottom: 14 }}>{p.icon}</div>
                    <div style={{ display: "inline-block", background: "#fdf0ee", color: "#8b1a1a", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 12, marginBottom: 10, letterSpacing: 0.5, textTransform: "uppercase" }}>{p.tag}</div>
                    <div style={{ fontSize: 19, fontWeight: 800, marginBottom: 10 }}>{p.name}</div>
                    <div style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CLIENTS */}
        {nav === "Clients" && (
          <div style={{ paddingTop: 68 }}>
            <div style={{ background: "linear-gradient(150deg,#0d0404,#5a1010)", padding: "80px 6% 60px", color: "white" }}>
              <div style={{ fontSize: 11, color: "#ffb3a0", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Powerful Alliances</div>
              <h1 style={{ fontSize: 46, fontWeight: 900, margin: "0 0 20px" }}>Our Clients</h1>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 560, lineHeight: 1.8 }}>Trusted by India's largest steel manufacturers — built on decades of consistent quality and reliable supply.</p>
            </div>
            <div style={{ padding: "60px 6%", background: "#f7f4ef" }}>
              <div style={{ fontSize: 11, color: "#8b1a1a", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Industry Titans</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, marginBottom: 48, maxWidth: 1100 }}>
                {CLIENTS.filter(c => c.type === "Industry Titan").map((c, i) => (
                  <div key={i} style={{ background: "white", borderRadius: 16, padding: 28, border: "2px solid #e5ddd0" }}>
                    <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 8 }}>{c.name}</div>
                    <div style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>{c.desc}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 11, color: "#8b1a1a", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Network Partners</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, maxWidth: 1100 }}>
                {CLIENTS.filter(c => c.type === "Network Partner").map((c, i) => (
                  <div key={i} style={{ background: "white", borderRadius: 16, padding: 28, border: "1px solid #e5ddd0" }}>
                    <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 8 }}>{c.name}</div>
                    <div style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CONTACT */}
        {nav === "Contact" && (
          <div style={{ paddingTop: 68 }}>
            <div style={{ background: "linear-gradient(150deg,#0d0404,#5a1010)", padding: "80px 6% 60px", color: "white" }}>
              <div style={{ fontSize: 11, color: "#ffb3a0", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Get In Touch</div>
              <h1 style={{ fontSize: 46, fontWeight: 900, margin: "0 0 20px" }}>Request a Quote</h1>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 500, lineHeight: 1.8 }}>Tell us what material you need — our team will get back within 4 hours.</p>
            </div>
            <div style={{ padding: "60px 6%", background: "#f7f4ef" }}>
              <div style={{ maxWidth: 720, margin: "0 auto" }}>
                {submitted ? (
                  <div style={{ background: "white", borderRadius: 20, padding: 60, textAlign: "center", border: "1px solid #e5ddd0" }}>
                    <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                    <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}>Enquiry Received!</div>
                    <div style={{ color: "#666", fontSize: 15 }}>Our team will contact you within 4 hours.</div>
                    <button onClick={() => { setSubmitted(false); setForm({ name: "", company: "", phone: "", email: "", material: "", qty: "" }); }} style={{ marginTop: 24, background: "#8b1a1a", color: "white", padding: "12px 28px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 700 }}>New Enquiry</button>
                  </div>
                ) : (
                  <div style={{ background: "white", borderRadius: 20, padding: 40, border: "1px solid #e5ddd0" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                      {[["name", "Your Name"], ["company", "Company Name"], ["phone", "Phone / WhatsApp"], ["email", "Email Address"]].map(([k, l]) => (
                        <div key={k}>
                          <div style={{ fontSize: 12, fontWeight: 700, color: "#444", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>{l}</div>
                          <input value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })} placeholder={`Enter ${l}`} style={{ width: "100%", background: "#f7f4ef", border: "1px solid #e0d8cf", borderRadius: 8, padding: "11px 14px", fontSize: 14, outline: "none" }} />
                        </div>
                      ))}
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#444", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Material Required</div>
                        <select value={form.material} onChange={e => setForm({ ...form, material: e.target.value })} style={{ width: "100%", background: "#f7f4ef", border: "1px solid #e0d8cf", borderRadius: 8, padding: "11px 14px", fontSize: 14, outline: "none" }}>
                          <option value="">Select Material</option>
                          {["CRC / HRC Baled", "HMS Scrap", "Structural Scrap", "Dismantled Scrap", "Sheet Scrap", "Stainless / Alloy", "Other"].map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#444", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Quantity (MT)</div>
                        <input value={form.qty} onChange={e => setForm({ ...form, qty: e.target.value })} placeholder="e.g. 100 MT / month" style={{ width: "100%", background: "#f7f4ef", border: "1px solid #e0d8cf", borderRadius: 8, padding: "11px 14px", fontSize: 14, outline: "none" }} />
                      </div>
                    </div>
                    <button onClick={() => setSubmitted(true)} style={{ width: "100%", background: "#8b1a1a", color: "white", padding: "16px", borderRadius: 10, fontSize: 16, fontWeight: 800, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(139,26,26,0.3)" }}>Submit Enquiry →</button>
                  </div>
                )}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginTop: 20 }}>
                  {[["📍", "Address", "Adityapur Industrial Area, Jamshedpur"], ["📞", "Phone", "Contact via website"], ["🌐", "Website", "kregroup.co.in"]].map(([icon, l, v]) => (
                    <div key={l} style={{ background: "white", border: "1px solid #e5ddd0", borderRadius: 12, padding: 18, textAlign: "center" }}>
                      <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
                      <div style={{ fontSize: 10, color: "#999", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{l}</div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#3a3a3a" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div style={{ background: "#0d0404", padding: "44px 6%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div>
            <div style={{ fontWeight: 900, color: "white", fontSize: 17, marginBottom: 4 }}>K R Enterprises</div>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>© 2025 · kregroup.co.in · Iron & Steel Scrap · Jamshedpur</div>
            <div style={{ color: "rgba(255,255,255,0.25)", fontSize: 11, marginTop: 3 }}>GST: 20AAHFK1739R2Z1 · MSME: UDYAM-JH-06-0001117</div>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {NAV.map(n => <button key={n} onClick={() => setNav(n)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.45)", cursor: "pointer", fontSize: 13 }}>{n}</button>)}
          </div>
          <button onClick={() => setNav("Contact")} style={{ background: "#8b1a1a", color: "white", padding: "10px 22px", borderRadius: 8, fontSize: 13, fontWeight: 700, border: "none", cursor: "pointer" }}>
            🔐 Employee Portal
          </button>
        </div>

      </div>
    </>
  );
}
