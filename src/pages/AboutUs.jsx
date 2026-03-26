// Hero section
const HERO_BG_IMAGE = "src/img/schoool_Image_aeq4ijaeq4ijaeq4.png";
const HERO_BG_WIDTH = 600;
const HERO_BG_HEIGHT = 600;
const HERO_IMAGE = "src/img/head.1-removebg-preview.png";
const HERO_IMG_WIDTH = 350;

// RCE Entrepreneur section
const RCE_BG_IMAGE = "src/img/grc logo.png";
const RCE_BG_WIDTH = 480;
const RCE_IMAGE = "src/img/dean-removebg-preview.png";
const RCE_IMG_WIDTH = 260;

// Professors section
const PROFESSORS = [
  { id: 1, name: "Profile", highlight: false, image: "src/img/sam.png" },
  { id: 2, name: "Samuel Cubacub", highlight: true, image: "src/img/sam.png" },
  { id: 3, name: "Jay Evangelista", highlight: false, image: "src/img/sam.png" },
];

// Student Assistants
const SENIOR_SAS = [
  { id: 1, name: "Romeroso", label: "SENIOR S.A", highlight: false, image: "src/img/sam.png" },
  { id: 2, name: "Dela Cruz", label: "SENIOR S.A", highlight: true, image: "src/img/sam.png" },
  { id: 3, name: "Bautista", label: "SENIOR S.A", highlight: false, image: "src/img/sam.png" },
];
const NEW_SAS = [
  { id: 1, name: "Romeroso", label: "NEW S.A", image: "src/img/sam.png" },
  { id: 2, name: "Romeroso", label: "NEW S.A", image: "src/img/sam.png" },
  { id: 3, name: "Mendoza", label: "NEW S.A", image: "src/img/sam.png" },
  { id: 4, name: "Garcia", label: "NEW S.A", image: "src/img/sam.png" },
];

function Silhouette({ width, height, color = "rgba(255,255,255,0.35)" }) {
  return (
    <svg width={width * 0.55} height={height * 0.78} viewBox="0 0 24 32" fill="none">
      <circle cx="12" cy="7" r="5" fill={color} />
      <path d="M1 32c0-6.075 4.925-11 11-11s11 4.925 11 11" fill={color} />
    </svg>
  );
}

function SectionPortrait({
  bgImage,
  bgWidth = 500,
  bgHeight = "100%",
  personImage,
  personWidth = 260,
  height = 420,
  opacity = 0.1,
  silhouetteColor = "rgba(255,255,255,0.35)",
}) {
  const personHeight = Math.round(personWidth * 1.55);

  return (
    <div style={{
      position: "relative",
      width: bgWidth,
      height,
      flexShrink: 0,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
    }}>
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: bgHeight,
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: 2,
            pointerEvents: "none",
            opacity: opacity
          }}
        />
      )}

      <div style={{
        position: "relative",
        zIndex: 2,
        width: personWidth,
        height: personHeight,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}>
        {personImage ? (
          <img
            src={personImage}
            alt="portrait"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "bottom",
              display: "block",
            }}
          />
        ) : (
          <Silhouette width={personWidth} height={personHeight} color={silhouetteColor} />
        )}
      </div>
    </div>
  );
}

function PortraitCard({ image, width = 140, borderRadius = 10 }) {
  const height = Math.round(width * 1.42);
  return (
    <div style={{
      width, height, borderRadius, overflow: "hidden", flexShrink: 0,
      background: "linear-gradient(160deg,#7f1d1d 0%,#450a0a 100%)",
      display: "flex", alignItems: "flex-end", justifyContent: "center",
    }}>
      {image ? (
        <img src={image} alt="profile"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      ) : (
        <Silhouette width={width} height={height} color="rgba(255,255,255,0.28)" />
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
      border: highlight ? "2px solid rgba(255,255,255,0.38)" : "2px solid rgba(255,255,255,0.1)",
      background: highlight ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.05)",
      padding: "24px 20px 20px", gap: 14,
      transform: highlight ? "translateY(-14px)" : "none",
      boxShadow: highlight ? "0 18px 52px rgba(0,0,0,0.5)" : "none",
    }}>
      <PortraitCard image={image} width={150} borderRadius={10} />
      <span style={{ color: "#fff", fontWeight: 600, fontSize: 15, textAlign: "center" }}>{name}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SA Card
// ─────────────────────────────────────────────────────────────────────────────
function SACard({ person }) {
  const { name, label, highlight, image } = person;
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      borderRadius: 16,
      border: highlight ? "2px solid #ef4444" : "2px solid rgba(255,255,255,0.09)",
      background: highlight ? "linear-gradient(160deg,#dc2626 0%,#991b1b 100%)" : "rgba(255,255,255,0.04)",
      padding: "16px 14px 22px", gap: 12,
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
// Main
// ─────────────────────────────────────────────────────────────────────────────
export default function AboutUs() {
  return (
    <main style={{ minHeight: "100vh", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg,#7f1d1d 0%,#b91c1c 45%,#dc2626 75%,#991b1b 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* diagonal stripe texture */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none",
          backgroundImage: "repeating-linear-gradient(135deg,#fff 0,#fff 1px,transparent 0,transparent 18px)",
          backgroundSize: "26px 26px",
        }} />

        <div style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 48px 0",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 48,
        }}>
          {/* Text */}
          <div style={{ flex: 1, minWidth: 0, paddingBottom: 64, alignSelf: "center" }}>
            <h1 style={{
              fontSize: "clamp(2.2rem,4.5vw,3.8rem)",
              fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: 0,
              textShadow: "0 2px 16px rgba(0,0,0,0.4)",
            }}>
              Built on Integrity,<br />
              Bound by<br />
              Community.
            </h1>
            <p style={{ marginTop: 22, color: "#fca5a5", fontSize: 14, lineHeight: 1.75, maxWidth: 380 }}>
              Leaders in transformative research and grassroots extension.
              Building knowledge. Empowering communities. Changing lives.
            </p>
            <p style={{ marginTop: 32, color: "#fff", fontWeight: 800, fontSize: 15, letterSpacing: "0.13em", textTransform: "uppercase" }}>
              MRS. FRANCIS BEJOSA
            </p>
          </div>

          <SectionPortrait
            bgImage={HERO_BG_IMAGE}
            bgWidth={HERO_BG_WIDTH}
            bgHeight={HERO_BG_HEIGHT}
            personImage={HERO_IMAGE}
            personWidth={HERO_IMG_WIDTH}
            height={400}
            opacity={0.25}
            silhouetteColor="rgba(255,255,255,0.4)"
          />
        </div>
      </section>

      {/* ── PROFESSORS ────────────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(180deg,#cc1f1f 0%,#a81818 100%)",
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
          display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, alignItems: "end",
        }}>
          {PROFESSORS.map((p) => <ProfCard key={p.id} person={p} />)}
        </div>
      </section>

      {/* ── RCE ENTREPRENEUR ──────────────────────────────────────────────────── */}
      <section style={{ background: "#fff", overflow: "hidden" }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "72px 48px 0",
          display: "flex",
          alignItems: "flex-end",
          gap: 64,
        }}>
          <SectionPortrait
            bgImage={RCE_BG_IMAGE}
            bgWidth={RCE_BG_WIDTH}
            personImage={RCE_IMAGE}
            personWidth={RCE_IMG_WIDTH}
            height={440}
            opacity={1}
            silhouetteColor="#94a3b8"
          />

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0, paddingBottom: 72, alignSelf: "center" }}>
            <h2 style={{
              fontSize: "clamp(1.6rem,3vw,2.5rem)", fontWeight: 900, margin: 0, letterSpacing: "0.03em",
            }}>
              <span style={{ color: "#111" }}>THE </span>
              <span style={{ color: "#dc2626" }}>RCE</span>
              <span style={{ color: "#111" }}> ENTREPRENEUR</span>
            </h2>
            <p style={{ marginTop: 20, color: "#4b5563", fontSize: 14, lineHeight: 1.85, maxWidth: 480 }}>
              The person who started the journey of helping people and having care at the soul of
              their work has now seen that vision bloom into RCE. What began as a single act of
              kindness is now a pillar of hope for our community.
            </p>
            <p style={{
              marginTop: 32, color: "#b91c1c", fontWeight: 800, fontSize: 15,
              letterSpacing: "0.1em", textTransform: "uppercase",
              borderBottom: "2.5px solid #b91c1c", display: "inline-block", paddingBottom: 5,
            }}>
              MRS. WILMA CARIDAD TOLENTINO
            </p>
          </div>
        </div>
      </section>

      <section style={{
        background: "linear-gradient(180deg,#1c1c1c 0%,#0f0f0f 100%)",
        padding: "68px 48px 88px",
      }}>
        <h2 style={{
          textAlign: "center", color: "#fff", fontWeight: 800, fontSize: 28,
          marginBottom: 10, fontFamily: "Georgia, serif",
        }}>
          Student Assistants
        </h2>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
          <div style={{ width: 64, height: 3, background: "#dc2626", borderRadius: 4 }} />
        </div>

        {/* Senior SA */}
        <div style={{
          maxWidth: 860, margin: "0 auto 28px",
          display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22,
        }}>
          {SENIOR_SAS.map((s) => <SACard key={s.id} person={s} />)}
        </div>

        {/* New SA */}
        <div style={{
          maxWidth: 860, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22,
        }}>
          {NEW_SAS.map((s) => <SACard key={s.id} person={s} />)}
        </div>
      </section>

    </main>
  );
}
