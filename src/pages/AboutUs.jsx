// ─────────────────────────────────────────────────────────────────────────────
// ABOUT US PAGE
// ─────────────────────────────────────────────────────────────────────────────

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
  { id: 1, name: "Profile",          highlight: false, image: "src/img/sam.png" },
  { id: 2, name: "Samuel Cubacub",   highlight: true,  image: "src/img/sam.png" },
  { id: 3, name: "Jay Evangelista",  highlight: false, image: "src/img/sam.png" },
];

const SENIOR_SAS = [
  { id: 1, name: "Romeroso", label: "SENIOR S.A", highlight: false, image: "src/img/sam.png" },
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
// SMALL REUSABLE COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function PortraitCard({ image, width = 140, borderRadius = 10 }) {
  const height = Math.round(width * 1.42);
  return (
    <div style={{
      width, height, borderRadius,
      overflow: "hidden",
      flexShrink: 0,
      background: "linear-gradient(160deg, #7f1d1d 0%, #450a0a 100%)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
    }}>
      {image && (
        <img src={image} alt="profile"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      )}
    </div>
  );
}

function ProfCard({ person }) {
  const { name, highlight, image } = person;
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      borderRadius: 16,
      border: `2px solid ${highlight ? "rgba(255,255,255,0.38)" : "rgba(255,255,255,0.1)"}`,
      background: highlight ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.05)",
      padding: "24px 20px 20px",
      gap: 14,
      transform: highlight ? "translateY(-14px)" : "none",
      boxShadow: highlight ? "0 18px 52px rgba(0,0,0,0.5)" : "none",
    }}>
      <PortraitCard image={image} width={150} borderRadius={10} />
      <span style={{ color: "#fff", fontWeight: 600, fontSize: 15, textAlign: "center" }}>{name}</span>
    </div>
  );
}

function SACard({ person }) {
  const { name, label, highlight, image } = person;
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      borderRadius: 16,
      border: `2px solid ${highlight ? "#ef4444" : "rgba(255,255,255,0.09)"}`,
      background: highlight
        ? "linear-gradient(160deg, #dc2626 0%, #991b1b 100%)"
        : "rgba(255,255,255,0.04)",
      padding: "16px 14px 22px",
      gap: 12,
      boxShadow: highlight ? "0 8px 36px rgba(220,38,38,0.55)" : "none",
    }}>
      {label && (
        <span style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
          color: highlight ? "#fff" : "#f87171",
          background: highlight ? "rgba(255,255,255,0.18)" : "rgba(220,38,38,0.25)",
          borderRadius: 20, padding: "3px 14px",
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
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${HERO_BG_PHOTO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(139,0,0,0.4) 60%, rgba(200,16,46,0.2) 100%)",
          zIndex: 1,
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 6, backgroundColor: DKRED, zIndex: 2,
        }} />

        <div style={{
          position: "relative", zIndex: 3,
          maxWidth: 1200, margin: "0 auto",
          padding: "0 48px", width: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 40, flexWrap: "wrap",
        }}>
          {/* Left — Text */}
          <div style={{ flex: 1, minWidth: 300, maxWidth: 540, paddingBottom: 60 }}>
            <div className="hero-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <span style={{ display: "block", width: 40, height: 2, backgroundColor: RED }} />
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                About Us
              </span>
            </div>
            <h1 className="hero-heading" style={{
              fontFamily: "'Times New Roman', Times, serif",
              color: "white",
              fontSize: "clamp(38px, 5.5vw, 70px)",
              fontWeight: 900, lineHeight: 1.08,
              letterSpacing: "-0.01em", margin: 0,
            }}>
              Built on <span style={{ fontStyle: "italic", color: RED }}>Integrity,</span>
              <br />Bound by Community.
            </h1>
            <div className="hero-divider" style={{ display: "flex", alignItems: "center", gap: 10, margin: "36px 0", maxWidth: 340 }}>
              <span style={{ flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.18)" }} />
              <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: RED, flexShrink: 0 }} />
              <span style={{ flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.18)" }} />
            </div>
            <p className="hero-body" style={{
              color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.9,
              maxWidth: 460, margin: 0,
            }}>
              Leaders in transformative research and grassroots extension.
              Building knowledge. Empowering communities. Changing lives.
            </p>
          </div>

          {/* Right — Portrait + name tag */}
          <div className="hero-image" style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
              src={HERO_PORTRAIT}
              alt="MRS. FRANCIS BEJOSA"
              style={{
                width: "clamp(340px, 38vw, 560px)",
                height: "auto", maxHeight: "88vh",
                objectFit: "contain", objectPosition: "bottom",
                display: "block", marginBottom: 0,
              }}
            />
            <div className="hero-name" style={{
              backgroundColor: RED, padding: "10px 28px",
              width: "100%", textAlign: "center",
            }}>
              <p style={{ margin: 0, color: "white", fontWeight: 800, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                MRS. FRANCIS BEJOSA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROFESSORS ────────────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(180deg, #cc1f1f 0%, #a81818 100%)",
        padding: "64px 48px 88px",
      }}>
        <h2 style={{
          textAlign: "center", color: "#fff", fontWeight: 900, fontSize: 22,
          letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 52,
        }}>
          Professors
        </h2>
        <div style={{
          maxWidth: 860, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "end",
        }}>
          {PROFESSORS.map((prof) => <ProfCard key={prof.id} person={prof} />)}
        </div>
      </section>

      {/* ── RCE ENTREPRENEUR ──────────────────────────────────────────────────── */}
      {/* Full-screen white section — portrait left, text right, fills 100vw */}
      <section style={{
        background: "#fff",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
      }}>

        {/* Left — portrait flush to edges, takes up ~45% of screen */}
        <div style={{
          width: "45%",
          minWidth: 300,
          flexShrink: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#f9f9f9",
        }}>
          <img
            src={DEAN_PORTRAIT}
            alt="MRS. WILMA CARIDAD TOLENTINO"
            style={{
              width: "100%",
              maxWidth: 600,
              height: "90vh",
              objectFit: "contain",
              objectPosition: "bottom",
              display: "block",
            }}
          />
        </div>

        {/* Right — text, takes up remaining ~55% */}
        <div style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "80px 64px",
        }}>
          <div style={{ marginLeft: 70 }}>
            {/* Section eyebrow */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <span style={{ display: "block", width: 40, height: 2, backgroundColor: RED }} />
              <span style={{ color: RED, fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Leadership
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 900, margin: 0, letterSpacing: "0.02em", lineHeight: 1.1,
            }}>
              <span style={{ color: "#111" }}>THE </span>
              <span style={{ color: RED }}>RCE</span>
              <br />
              <span style={{ color: "#111" }}>ENTREPRENEUR</span>
            </h2>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "28px 0", maxWidth: 300 }}>
              <span style={{ flex: 1, height: 1, backgroundColor: "#e5e7eb" }} />
              <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: RED, flexShrink: 0 }} />
              <span style={{ flex: 1, height: 1, backgroundColor: "#e5e7eb" }} />
            </div>

            <p style={{ color: "#4b5563", fontSize: 15, lineHeight: 1.9, maxWidth: 600, marginBottom: 36 }}>
              The person who started the journey of helping people and having care at the soul of
              their work has now seen that vision bloom into RCE. What began as a single act of
              kindness is now a pillar of hope for our community.
            </p>

            {/* Name with underline accent */}
            <p style={{
              color: "#b91c1c", fontWeight: 800, fontSize: 15,
              letterSpacing: "0.1em", textTransform: "uppercase",
              borderBottom: "2.5px solid #b91c1c",
              display: "inline-block", paddingBottom: 6, margin: 0,
            }}>
              MRS. WILMA CARIDAD TOLENTINO
            </p>
          </div>
        </div>

      </section>

      {/* ── STUDENT ASSISTANTS ────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(180deg, #1c1c1c 0%, #0f0f0f 100%)",
        padding: "68px 48px 88px",
      }}>
        <h2 style={{
          textAlign: "center", color: "#fff", fontWeight: 800, fontSize: 28,
          marginBottom: 10, fontFamily: "Georgia, serif",
        }}>
          Student Assistants
        </h2>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
          <div style={{ width: 64, height: 3, background: RED, borderRadius: 4 }} />
        </div>

        {/* Senior SAs — 3 columns */}
        <div style={{ maxWidth: 860, margin: "0 auto 28px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {SENIOR_SAS.map((sa) => <SACard key={sa.id} person={sa} />)}
        </div>

        {/* New SAs — 4 columns */}
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}>
          {NEW_SAS.map((sa) => <SACard key={sa.id} person={sa} />)}
        </div>
      </section>

    </main>
  );
}