// ─────────────────────────────────────────────────────────────────────────────
// ABOUT US PAGE
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from "react";

// ── IMAGES ──
const HERO_BG_PHOTO  = "src/img/schoool_Image_aeq4ijaeq4ijaeq4.png";
const HERO_PORTRAIT  = "src/img/head.1-removebg-preview.png";
const RCE_LOGO       = "src/img/grc logo.png";
const DEAN_PORTRAIT  = "src/img/Image1-removebg-preview.png";

// ── COLORS ──
const RED   = '#C8102E';
const DKRED = '#8B0000';

// ── DATA ──
const PROFESSORS = [
  { id: 1, name: "Jaemyl Romeroso", highlight: false, image: "src/img/Image_jmil.png" },
  { id: 2, name: "Samuel Cubacub",  highlight: true,  image: "src/img/sam.png" },
  { id: 3, name: "Jay Evangelista", highlight: false, image: "src/img/jay.png" },
];

const SENIOR_SAS = [
  { id: 1, name: "Romeroso", label: "SENIOR S.A", highlight: false, image: "src/img/Image_jmil.png" },
  { id: 2, name: "Dela Cruz", label: "SENIOR S.A", highlight: true,  image: "src/img/sam.png" },
  { id: 3, name: "Bautista",  label: "SENIOR S.A", highlight: false, image: "src/img/sam.png" },
];

const NEW_SAS = [
  { id: 1, name: "Romeroso", label: "NEW S.A", image: "src/img/sam.png" },
  { id: 2, name: "Romeroso", label: "NEW S.A", image: "src/img/sam.png" },
  { id: 3, name: "Mendoza",  label: "NEW S.A", image: "src/img/sam.png" },
  { id: 4, name: "Garcia",   label: "NEW S.A", image: "src/img/sam.png" },
];

// ─────────────────────────────────────────────────────────────────────────────
// PORTRAIT CARD
// ─────────────────────────────────────────────────────────────────────────────
function PortraitCard({ image, width = 140, borderRadius = 10 }) {
  const height = Math.round(width * 1.42);
  return (
    <div style={{
      width, height, borderRadius,
      overflow: "hidden", flexShrink: 0,
      background: "linear-gradient(160deg, #7f1d1d 0%, #450a0a 100%)",
      display: "flex", alignItems: "flex-end", justifyContent: "center",
    }}>
      {image && (
        <img src={image} alt="profile"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NAV BUTTON
// ─────────────────────────────────────────────────────────────────────────────
function NavBtn({ onClick, children }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 42, height: 42, borderRadius: "50%",
        border: `2px solid ${hov ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)"}`,
        background: hov ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)",
        color: "#fff", fontSize: 20, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.2s",
      }}
    >{children}</button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3D ROTATING CAROUSEL
// ─────────────────────────────────────────────────────────────────────────────
function RotatingCarousel({ items, cardRenderer, autoPlay = true, interval = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const count = items.length;

  useEffect(() => {
    if (!autoPlay || paused) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [paused, autoPlay, count, interval]);

  const rotateTo = (idx) => {
    setActiveIndex(idx);
    clearInterval(timerRef.current);
    setPaused(true);
    setTimeout(() => setPaused(false), 4000);
  };

  const prev = () => rotateTo((activeIndex - 1 + count) % count);
  const next = () => rotateTo((activeIndex + 1) % count);

  const angleStep = 360 / count;
  const radius = count <= 3 ? 200 : count <= 4 ? 240 : 280;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>

      {/* 3D Stage */}
      <div
        style={{ position: "relative", width: "100%", height: 380, perspective: 900 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          width: 0, height: 0,
          transformStyle: "preserve-3d",
        }}>
          {items.map((item, i) => {
            const angle = angleStep * i - angleStep * activeIndex;
            const rad = (angle * Math.PI) / 180;
            const x = Math.sin(rad) * radius;
            const z = Math.cos(rad) * radius;
            const isActive = i === activeIndex;
            return (
              <div
                key={item.id}
                onClick={() => rotateTo(i)}
                style={{
                  position: "absolute",
                  transform: `translate(-50%, -50%) translate3d(${x}px, 0, ${z}px) rotateY(${-angle}deg)`,
                  transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease",
                  opacity: isActive ? 1 : z < -20 ? 0.28 : 0.6,
                  cursor: isActive ? "default" : "pointer",
                  zIndex: isActive ? 10 : 1,
                  transformStyle: "preserve-3d",
                }}
              >
                {cardRenderer(item, isActive)}
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <NavBtn onClick={prev}>‹</NavBtn>
        <div style={{ display: "flex", gap: 8 }}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => rotateTo(i)}
              style={{
                width: i === activeIndex ? 24 : 8, height: 8,
                borderRadius: 4, border: "none", padding: 0,
                background: i === activeIndex ? RED : "rgba(255,255,255,0.3)",
                cursor: "pointer", transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
        <NavBtn onClick={next}>›</NavBtn>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD RENDERERS
// ─────────────────────────────────────────────────────────────────────────────
function renderProfCard(person, isActive) {
  const { name, image } = person;
  return (
    <div style={{
      position: "relative",
      display: "flex", flexDirection: "column", alignItems: "center",
      borderRadius: 16,
      border: `2px solid ${isActive ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.1)"}`,
      background: isActive ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.05)",
      padding: "24px 20px 20px", gap: 14, width: 190,
      boxShadow: isActive ? "0 24px 60px rgba(0,0,0,0.6)" : "none",
      transition: "all 0.5s ease",
      backdropFilter: "blur(8px)",
    }}>
      {isActive && (
        <div style={{
          position: "absolute", top: -6, left: -6, right: -6, bottom: -6,
          borderRadius: 20, border: `2px solid ${RED}`,
          opacity: 0.55, pointerEvents: "none",
        }} />
      )}
      <PortraitCard image={image} width={150} borderRadius={10} />
      <span style={{ color: "#fff", fontWeight: 600, fontSize: 15, textAlign: "center" }}>{name}</span>
    </div>
  );
}

function renderSACard(person, isActive) {
  const { name, label, image } = person;
  const isSenior = label?.includes("SENIOR");
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      borderRadius: 16,
      border: `2px solid ${isActive ? (isSenior ? "#ef4444" : "rgba(255,255,255,0.4)") : "rgba(255,255,255,0.09)"}`,
      background: isActive
        ? isSenior
          ? "linear-gradient(160deg, #dc2626 0%, #991b1b 100%)"
          : "rgba(255,255,255,0.13)"
        : "rgba(255,255,255,0.04)",
      padding: "16px 14px 22px", gap: 12, width: 165,
      boxShadow: isActive
        ? isSenior ? "0 12px 44px rgba(220,38,38,0.55)" : "0 12px 44px rgba(0,0,0,0.4)"
        : "none",
      transition: "all 0.5s ease",
      backdropFilter: "blur(6px)",
    }}>
      {label && (
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
          color: isActive && isSenior ? "#fff" : "#f87171",
          background: isActive && isSenior ? "rgba(255,255,255,0.18)" : "rgba(220,38,38,0.25)",
          borderRadius: 20, padding: "3px 12px",
        }}>{label}</span>
      )}
      <PortraitCard image={image} width={120} borderRadius={8} />
      <span style={{ color: "#fff", fontWeight: 600, fontSize: 14, textAlign: "center", marginTop: 4 }}>{name}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function AboutUs() {
  return (
    <main style={{ minHeight: "100vh", fontFamily: "'Poppins', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-eyebrow { animation: fadeUp 0.6s ease both; animation-delay: 0.1s; }
        .hero-heading { animation: fadeUp 0.7s ease both; animation-delay: 0.25s; }
        .hero-divider { animation: fadeUp 0.6s ease both; animation-delay: 0.42s; }
        .hero-body    { animation: fadeUp 0.6s ease both; animation-delay: 0.55s; }
        .hero-name    { animation: fadeUp 0.6s ease both; animation-delay: 0.68s; }
        .hero-image   { animation: fadeUp 0.8s ease both; animation-delay: 0.3s; }

        @media (max-width: 900px) {
          .hero-inner { flex-direction: column !important; align-items: center !important; padding: 60px 24px 0 !important; }
          .hero-text  { max-width: 100% !important; padding-bottom: 32px !important; text-align: center; }
          .hero-eyebrow { justify-content: center; }
          .hero-divider { margin-left: auto !important; margin-right: auto !important; }
          .hero-portrait-wrap { width: 100% !important; align-items: center !important; }
          .hero-portrait-wrap img { width: clamp(240px, 70vw, 420px) !important; max-height: 55vh !important; }
          .hero-name-tag { width: clamp(240px, 70vw, 420px) !important; }
          .rce-section { flex-direction: column !important; min-height: auto !important; }
          .rce-portrait-col { width: 100% !important; height: 60vw !important; max-height: 420px !important; }
          .rce-portrait-col img { height: 100% !important; }
          .rce-text-col { padding: 48px 32px !important; }
          .rce-text-col > div { margin-left: 0 !important; }
        }

        @media (max-width: 560px) {
          .hero-heading { font-size: 30px !important; }
          .sa-section { padding: 48px 20px 64px !important; }
          .prof-section { padding: 48px 20px 64px !important; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG_PHOTO})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(139,0,0,0.4) 60%, rgba(200,16,46,0.2) 100%)", zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 6, backgroundColor: DKRED, zIndex: 2 }} />

        <div className="hero-inner" style={{ position: "relative", zIndex: 3, maxWidth: 1200, margin: "0 auto", padding: "0 48px", width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          <div className="hero-text" style={{ flex: 1, minWidth: 280, maxWidth: 540, paddingBottom: 60 }}>
            <div className="hero-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ display: "block", width: 40, height: 2, backgroundColor: RED }} />
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>About Us</span>
            </div>
            <h1 className="hero-heading" style={{ fontFamily: "'Times New Roman', Times, serif", color: "white", fontSize: "clamp(32px, 5.5vw, 70px)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.01em", margin: "0 0 20px 0" }}>
              Built on <span style={{ fontStyle: "italic", color: RED }}>Integrity,</span>
              <br />Bound by Community.
            </h1>
            <div className="hero-divider" style={{ display: "flex", alignItems: "center", gap: 10, margin: "0 0 20px 0", maxWidth: 320 }}>
              <span style={{ flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.18)" }} />
              <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: RED, flexShrink: 0 }} />
              <span style={{ flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.18)" }} />
            </div>
            <p className="hero-body" style={{ color: "rgba(255,255,255,0.78)", fontSize: 15, lineHeight: 1.9, maxWidth: 460, margin: 0 }}>
              Leaders in transformative research and grassroots extension.
              Building knowledge. Empowering communities. Changing lives.
            </p>
          </div>

          <div className="hero-image hero-portrait-wrap" style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src={HERO_PORTRAIT} alt="MRS. FRANCIS BEJOSA" style={{ width: "clamp(300px, 38vw, 520px)", height: "auto", maxHeight: "88vh", objectFit: "contain", objectPosition: "bottom", display: "block", marginBottom: 0 }} />
            <div className="hero-name hero-name-tag" style={{ backgroundColor: RED, padding: "10px 28px", width: "100%", textAlign: "center" }}>
              <p style={{ margin: 0, color: "white", fontWeight: 800, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase" }}>MRS. FRANCIS BEJOSA</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROFESSORS CAROUSEL ───────────────────────────────────────────────── */}
      <section className="prof-section" style={{ background: "linear-gradient(180deg, #cc1f1f 0%, #a81818 100%)", padding: "72px 32px 96px", overflow: "hidden" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Meet Our</span>
        </div>
        <h2 style={{ textAlign: "center", color: "#fff", fontWeight: 900, fontSize: 22, letterSpacing: "0.22em", textTransform: "uppercase", margin: "0 0 12px", fontFamily: "'Times New Roman', serif" }}>
          Professors
        </h2>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
          <div style={{ width: 56, height: 3, background: "rgba(255,255,255,0.35)", borderRadius: 4 }} />
        </div>
        <RotatingCarousel items={PROFESSORS} cardRenderer={renderProfCard} autoPlay interval={3000} />
      </section>

      {/* ── RCE ENTREPRENEUR ──────────────────────────────────────────────────── */}
      <section className="rce-section" style={{ background: "#fff", minHeight: "100vh", width: "100%", display: "flex", alignItems: "stretch", overflow: "hidden" }}>
        <div className="rce-portrait-col" style={{ width: "45%", minWidth: 280, flexShrink: 0, display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden", backgroundColor: "#f9f9f9" }}>
          <img src={DEAN_PORTRAIT} alt="MRS. WILMA CARIDAD TOLENTINO" style={{ width: "100%", maxWidth: 600, height: "90vh", objectFit: "contain", objectPosition: "bottom", display: "block" }} />
        </div>
        <div className="rce-text-col" style={{ flex: 1, display: "flex", alignItems: "center", padding: "80px 64px" }}>
          <div style={{ marginLeft: 40 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ display: "block", width: 40, height: 2, backgroundColor: RED }} />
            </div>
            <h2 style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 900, margin: "0 0 20px 0", letterSpacing: "0.02em", lineHeight: 1.1 }}>
              <span style={{ color: "#111" }}>THE </span>
              <span style={{ color: RED }}>RCE</span>
              <br />
              <span style={{ color: "#111" }}>ENTREPRENEUR</span>
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "0 0 20px 0", maxWidth: 300 }}>
              <span style={{ flex: 1, height: 1, backgroundColor: "#e5e7eb" }} />
              <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: RED, flexShrink: 0 }} />
              <span style={{ flex: 1, height: 1, backgroundColor: "#e5e7eb" }} />
            </div>
            <p style={{ color: "#4b5563", fontSize: 15, lineHeight: 1.9, maxWidth: 520, margin: "0 0 28px 0" }}>
              The person who started the journey of helping people and having care at the soul of their work has now seen that vision bloom into RCE. What began as a single act of kindness is now a pillar of hope for our community.
            </p>
            <p style={{ color: "#b91c1c", fontWeight: 800, fontSize: 15, letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: "2.5px solid #b91c1c", display: "inline-block", paddingBottom: 6, margin: 0 }}>
              MRS. WILMA CARIDAD TOLENTINO
            </p>
          </div>
        </div>
      </section>

      {/* ── STUDENT ASSISTANTS CAROUSEL ───────────────────────────────────────── */}
      <section className="sa-section" style={{ background: "linear-gradient(180deg, #1c1c1c 0%, #0f0f0f 100%)", padding: "72px 32px 100px", overflow: "hidden" }}>
        <h2 style={{ textAlign: "center", color: "#fff", fontWeight: 800, fontSize: 28, margin: "0 0 12px", fontFamily: "Georgia, serif" }}>
          Student Assistants
        </h2>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 60 }}>
          <div style={{ width: 64, height: 3, background: RED, borderRadius: 4 }} />
        </div>

        {/* Senior SAs */}
        <div style={{ marginBottom: 72 }}>
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.38)", fontSize: 11, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 40 }}>
            Senior Student Assistants
          </p>
          <RotatingCarousel items={SENIOR_SAS} cardRenderer={renderSACard} autoPlay interval={3200} />
        </div>

        {/* Divider */}
        <div style={{ maxWidth: 480, margin: "0 auto 64px", display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: RED }} />
          <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
        </div>

        {/* New SAs */}
        <div>
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.38)", fontSize: 11, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 40 }}>
            New Student Assistants
          </p>
          <RotatingCarousel items={NEW_SAS} cardRenderer={renderSACard} autoPlay interval={2600} />
        </div>
      </section>

    </main>
  );
}