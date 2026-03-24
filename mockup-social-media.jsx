import { useState } from "react";

// ── LOGO (uploaded by user) ──
const LOGO = "https://poils-et-plumes.vercel.app/Logo.png";

// ── STOCK PHOTOS (Unsplash – free to use) ──
const IMG = {
  // Dogs
  goldenRetriever: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop",
  dogPortrait: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=600&fit=crop",
  puppy: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=600&h=600&fit=crop",
  dogSmile: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=600&fit=crop",
  yorkshire: "https://images.unsplash.com/photo-1583337130417-13104dec14a4?w=600&h=600&fit=crop",
  dogBath: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=600&fit=crop",
  // Cats
  catOrange: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=600&fit=crop",
  catLookUp: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop",
  kitten: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=600&h=600&fit=crop",
  catSleep: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=600&h=600&fit=crop",
  // Birds
  parrot: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&h=600&fit=crop",
  parrotGreen: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=600&h=600&fit=crop",
  owl: "https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?w=600&h=600&fit=crop",
  // Vet / Clinic
  vetDog: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&h=600&fit=crop",
  vetCat: "https://images.unsplash.com/photo-1581888227599-779811939961?w=600&h=600&fit=crop",
  stethoscope: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop",
  // Fennec
  fennec: "https://images.unsplash.com/photo-1516728778615-2d590ea1855e?w=600&h=600&fit=crop",
  // Cover (wide)
  coverDogCat: "https://images.unsplash.com/photo-1450778869180-cfd0464be546?w=900&h=350&fit=crop",
  coverPets: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900&h=350&fit=crop",
  // Hamster / Rabbit
  rabbit: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=600&fit=crop",
  hamster: "https://images.unsplash.com/photo-1425082661507-dd330cbc749d?w=600&h=600&fit=crop",
};

// ── ICONS ──
const Ic = {
  like: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>,
  comment: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  share: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>,
  heart: (s=20,f=false) => <svg width={s} height={s} viewBox="0 0 24 24" fill={f?"#ED4956":"none"} stroke={f?"#ED4956":"currentColor"} strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  send: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  bookmark: (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
  globe: (s=14) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
};

// ── AVATAR ──
const Ava = ({size=40, ring=false}) => (
  <div style={{
    width: size, height: size, borderRadius: "50%", flexShrink: 0,
    ...(ring ? { background: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)", padding: 2.5 } : {}),
  }}>
    <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", background: "white", border: ring ? "2.5px solid white" : "none" }}>
      <img src={LOGO} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   FACEBOOK COMPONENTS
   ═══════════════════════════════════════════ */

const FBCover = () => (
  <div style={{ background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", marginBottom: 14 }}>
    {/* Cover photo */}
    <div style={{ height: 200, position: "relative", overflow: "hidden" }}>
      <img src={IMG.coverPets} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(44,197,211,0.9) 0%, rgba(44,197,211,0.35) 35%, transparent 65%)" }} />
      <div style={{ position: "absolute", bottom: 14, left: 110, color: "white" }}>
        <div style={{ fontSize: 22, fontWeight: 800, textShadow: "0 2px 6px rgba(0,0,0,0.4)" }}>Poils & Plumes</div>
        <div style={{ fontSize: 12, opacity: 0.95, textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>Clinique Vétérinaire — Ennasr, Ariana 🐾</div>
      </div>
    </div>
    <div style={{ padding: "0 16px 16px", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 12, marginTop: -36 }}>
        <div style={{ width: 86, height: 86, borderRadius: "50%", border: "4px solid white", overflow: "hidden", background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", flexShrink: 0 }}>
          <img src={LOGO} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
      <p style={{ fontSize: 13, color: "#65676B", margin: "10px 0", lineHeight: 1.55 }}>
        🐾 Clinique vétérinaire à Ennasr, Ariana<br/>
        🩺 Consultation • Vaccination • Chirurgie • Toilettage<br/>
        🦜 Spécialistes NAC : oiseaux, fennecs, rongeurs<br/>
        📍 3 rue Sod Maareb | 7j/7 · 🌐 poils-et-plumes.vercel.app
      </p>
      <div style={{ display: "flex", gap: 16, fontSize: 13, color: "#65676B", marginBottom: 12 }}>
        <span><b style={{ color: "#1C1E21" }}>1.2K</b> J'aime</span>
        <span><b style={{ color: "#1C1E21" }}>1.4K</b> Abonnés</span>
        <span>⭐ <b style={{ color: "#1C1E21" }}>5.0</b> (24 avis)</span>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button style={{ flex: 1, background: "#1877F2", color: "white", border: "none", borderRadius: 8, padding: "8px 0", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>👍 J'aime</button>
        <button style={{ flex: 1, background: "#E4E6EB", color: "#1C1E21", border: "none", borderRadius: 8, padding: "8px 0", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>💬 Message</button>
        <button style={{ width: 48, background: "#E4E6EB", color: "#1C1E21", border: "none", borderRadius: 8, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </button>
      </div>
    </div>
  </div>
);

const FBPost = ({ text, image, images, card, likes, comments, shares, time }) => (
  <div style={{ background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", marginBottom: 14 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px" }}>
      <Ava size={40} />
      <div style={{ flex: 1 }}>
        <span style={{ fontWeight: 700, fontSize: 14, color: "#1C1E21" }}>Poils & Plumes</span>
        <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#65676B" }}>
          <span>{time}</span><span>·</span>{Ic.globe(12)}
        </div>
      </div>
      <span style={{ fontSize: 20, color: "#65676B" }}>···</span>
    </div>
    <div style={{ padding: "0 16px 10px", fontSize: 14, color: "#1C1E21", lineHeight: 1.55, whiteSpace: "pre-line" }}>{text}</div>
    
    {image && <img src={image} alt="" style={{ width: "100%", height: 380, objectFit: "cover" }} />}
    
    {images && (
      <div style={{ display: "grid", gridTemplateColumns: images.length === 3 ? "1fr 1fr" : "1fr 1fr", gridTemplateRows: images.length > 2 ? "1fr 1fr" : "1fr", gap: 2, height: images.length > 2 ? 380 : 260 }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", ...(i === 0 && images.length === 3 ? { gridRow: "1 / 3" } : {}) }} />
        ))}
      </div>
    )}
    
    {card && (
      <div style={{ height: 260, background: card.bg, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 30, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Ctext x='10' y='30' font-size='20'%3E🐾%3C/text%3E%3C/svg%3E")`, backgroundSize: "50px" }} />
        <span style={{ fontSize: 48, marginBottom: 14, position: "relative" }}>{card.emoji}</span>
        <span style={{ color: "white", fontSize: 22, fontWeight: 800, lineHeight: 1.3, position: "relative", whiteSpace: "pre-line" }}>{card.title}</span>
        <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, marginTop: 8, position: "relative" }}>{card.sub}</span>
      </div>
    )}

    <div style={{ padding: "8px 16px", display: "flex", justifyContent: "space-between", fontSize: 13, color: "#65676B", borderBottom: "1px solid #E4E6EB" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <span style={{ background: "#1877F2", borderRadius: "50%", width: 20, height: 20, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>👍</span>
        <span style={{ background: "#ED4956", borderRadius: "50%", width: 20, height: 20, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, marginLeft: -6 }}>❤️</span>
        <span style={{ marginLeft: 4 }}>{likes}</span>
      </div>
      <span>{comments} commentaires · {shares} partages</span>
    </div>
    <div style={{ display: "flex", padding: "4px 8px" }}>
      {[{ i: Ic.like(18), l: "J'aime" }, { i: Ic.comment(18), l: "Commenter" }, { i: Ic.share(18), l: "Partager" }].map((a, idx) => (
        <button key={idx} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 0", border: "none", background: "transparent", color: "#65676B", fontSize: 13, fontWeight: 600, cursor: "pointer", borderRadius: 6 }}>
          {a.i}{a.l}
        </button>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   INSTAGRAM COMPONENTS
   ═══════════════════════════════════════════ */

const IGProfile = ({ igTab, setIgTab }) => {
  const grid = [
    IMG.goldenRetriever, IMG.catOrange, IMG.parrot,
    IMG.yorkshire, IMG.fennec, IMG.kitten,
    IMG.vetDog, IMG.rabbit, IMG.owl,
  ];
  return (
    <div style={{ background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", marginBottom: 14 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid #EFEFEF" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontWeight: 700, fontSize: 17, color: "#262626" }}>poilsetplumes.vet</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div style={{ display: "flex", gap: 18 }}><span style={{ fontSize: 22 }}>＋</span><span style={{ fontSize: 22 }}>☰</span></div>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 14 }}>
          <Ava size={78} ring />
          <div style={{ display: "flex", gap: 18, flex: 1, justifyContent: "center" }}>
            {[{ n: "27", l: "Publications" }, { n: "1.2k", l: "Abonnés" }, { n: "86", l: "Abonnements" }].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#262626" }}>{s.n}</div>
                <div style={{ fontSize: 12, color: "#8E8E8E" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#262626" }}>Poils & Plumes 🐾</div>
          <div style={{ fontSize: 13, color: "#262626", lineHeight: 1.5 }}>
            <span style={{ color: "#8E8E8E" }}>Clinique vétérinaire</span><br/>
            🩺 Consultation • Chirurgie • Toilettage<br/>
            🦜 Spécialistes NAC — 📍 Ennasr, Ariana<br/>
            ⬇️ Prenez RDV en ligne
          </div>
          <span style={{ fontSize: 13, color: "#00376B", fontWeight: 600 }}>poils-et-plumes.vercel.app</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button style={{ flex: 2, background: "#0095F6", color: "white", border: "none", borderRadius: 8, padding: "7px 0", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Suivre</button>
          <button style={{ flex: 2, background: "#EFEFEF", color: "#262626", border: "none", borderRadius: 8, padding: "7px 0", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Message</button>
          <button style={{ width: 36, background: "#EFEFEF", border: "none", borderRadius: 8, fontSize: 12, cursor: "pointer" }}>▾</button>
        </div>
      </div>
      {/* Stories highlights with real photos */}
      <div style={{ padding: "6px 16px 10px", display: "flex", gap: 14, overflowX: "auto" }}>
        {[
          { l: "Toilettage", img: IMG.dogBath, c: "#2CC5D3" },
          { l: "Chats", img: IMG.catOrange, c: "#F5A623" },
          { l: "NAC", img: IMG.parrot, c: "#8BC34A" },
          { l: "Conseils", img: IMG.stethoscope, c: "#1BA8B5" },
          { l: "Avis", img: IMG.goldenRetriever, c: "#FF7043" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center", flexShrink: 0 }}>
            <div style={{ width: 62, height: 62, borderRadius: "50%", border: `2.5px solid ${s.c}`, padding: 2, marginBottom: 4 }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden" }}>
                <img src={s.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
            <span style={{ fontSize: 11, color: "#262626" }}>{s.l}</span>
          </div>
        ))}
      </div>
      {/* Tabs */}
      <div style={{ display: "flex", borderTop: "1px solid #EFEFEF" }}>
        {["grid", "reels", "tagged"].map(t => (
          <button key={t} onClick={() => setIgTab(t)} style={{
            flex: 1, padding: "11px 0", border: "none", background: "transparent",
            borderTop: igTab === t ? "2px solid #262626" : "2px solid transparent",
            color: igTab === t ? "#262626" : "#8E8E8E",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", marginTop: -1,
          }}>
            {t === "grid" && <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="1" width="6.5" height="6.5" rx=".5"/><rect x="8.75" y="1" width="6.5" height="6.5" rx=".5"/><rect x="16.5" y="1" width="6.5" height="6.5" rx=".5"/><rect x="1" y="8.75" width="6.5" height="6.5" rx=".5"/><rect x="8.75" y="8.75" width="6.5" height="6.5" rx=".5"/><rect x="16.5" y="8.75" width="6.5" height="6.5" rx=".5"/><rect x="1" y="16.5" width="6.5" height="6.5" rx=".5"/><rect x="8.75" y="16.5" width="6.5" height="6.5" rx=".5"/><rect x="16.5" y="16.5" width="6.5" height="6.5" rx=".5"/></svg>}
            {t === "reels" && <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="4"/><polygon points="10 8 16 12 10 16" fill="currentColor" stroke="none"/></svg>}
            {t === "tagged" && <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
          </button>
        ))}
      </div>
      {igTab === "grid" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}>
          {grid.map((src, i) => (
            <div key={i} style={{ position: "relative", paddingBottom: "100%", overflow: "hidden" }}>
              <img src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      )}
      {igTab !== "grid" && (
        <div style={{ padding: 36, textAlign: "center", color: "#8E8E8E", fontSize: 13 }}>
          {igTab === "reels" ? "🎬 Reels : coulisses, transformations, FAQ véto…" : "📸 Photos identifiées par les clients"}
        </div>
      )}
    </div>
  );
};

const IGPost = ({ image, caption, hashtags, likes, comments, time, location }) => (
  <div style={{ background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.08)", marginBottom: 14 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px" }}>
      <Ava size={32} ring />
      <div style={{ flex: 1 }}>
        <span style={{ fontWeight: 600, fontSize: 13, color: "#262626" }}>poilsetplumes.vet</span>
        {location && <div style={{ fontSize: 11, color: "#8E8E8E" }}>{location}</div>}
      </div>
      <span style={{ fontSize: 16, color: "#262626" }}>···</span>
    </div>
    <img src={image} alt="" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} />
    <div style={{ padding: "10px 14px 4px", display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>{Ic.heart(24, true)}{Ic.comment(24)}{Ic.send(24)}</div>
      {Ic.bookmark(24)}
    </div>
    <div style={{ padding: "4px 14px 12px" }}>
      <div style={{ fontWeight: 600, fontSize: 13, color: "#262626", marginBottom: 4 }}>{likes} J'aime</div>
      <div style={{ fontSize: 13, color: "#262626", lineHeight: 1.55 }}>
        <span style={{ fontWeight: 600 }}>poilsetplumes.vet</span> {caption}
        <br/><span style={{ color: "#00376B" }}>{hashtags}</span>
      </div>
      <div style={{ fontSize: 12, color: "#8E8E8E", marginTop: 5 }}>Voir les {comments} commentaires</div>
      <div style={{ fontSize: 11, color: "#C7C7C7", marginTop: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>{time}</div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════ */
export default function App() {
  const [tab, setTab] = useState("facebook");
  const [igTab, setIgTab] = useState("grid");

  return (
    <div style={{ minHeight: "100vh", background: "#F0EDE8", fontFamily: "'Segoe UI', -apple-system, sans-serif" }}>
      
      {/* HEADER */}
      <div style={{ background: "linear-gradient(135deg, #6D4C2E 0%, #A67C52 40%, #2CC5D3 100%)", padding: "36px 20px 28px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Ctext x='10' y='30' font-size='20'%3E🐾%3C/text%3E%3C/svg%3E")`, backgroundSize: "50px" }} />
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.15)", borderRadius: 50, padding: "5px 16px 5px 5px", backdropFilter: "blur(10px)", marginBottom: 10 }}>
            <img src={LOGO} alt="" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.4)", background: "white" }} />
            <span style={{ color: "white", fontWeight: 700, fontSize: 14, letterSpacing: 0.5 }}>POILS & PLUMES</span>
          </div>
          <h1 style={{ color: "white", fontSize: 24, fontWeight: 800, margin: "10px 0 4px" }}>Maquette Réseaux Sociaux</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, margin: 0 }}>Facebook & Instagram — Proposition professionnelle</p>
        </div>
      </div>

      {/* TABS */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "14px 20px 0", position: "sticky", top: 0, zIndex: 100, background: "#F0EDE8" }}>
        {[{ id: "facebook", label: "Facebook", c: "#1877F2" }, { id: "instagram", label: "Instagram", c: "#E4405F" }].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex: 1, maxWidth: 200, padding: "11px 16px",
            border: tab === t.id ? `2px solid ${t.c}` : "2px solid transparent",
            borderRadius: 12, background: tab === t.id ? "white" : "rgba(255,255,255,0.5)",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            fontWeight: tab === t.id ? 700 : 500, fontSize: 15, color: tab === t.id ? t.c : "#888",
            transition: "all 0.2s", boxShadow: tab === t.id ? `0 2px 10px ${t.c}20` : "none",
          }}>
            {t.id === "facebook" ? <span style={{ background: "#1877F2", color: "white", borderRadius: 6, width: 22, height: 22, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14 }}>f</span> : <span style={{ fontSize: 17 }}>📷</span>}
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 500, margin: "0 auto", padding: "14px 12px 50px" }}>

        {/* ═══════ FACEBOOK ═══════ */}
        {tab === "facebook" && <>
          <div style={{ textAlign: "center", margin: "6px 0 14px" }}>
            <span style={{ background: "#1877F2", color: "white", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20, letterSpacing: 1, textTransform: "uppercase" }}>Maquette Page Facebook</span>
          </div>

          <FBCover />

          <div style={{ textAlign: "center", margin: "18px 0 10px" }}>
            <span style={{ background: "rgba(0,0,0,0.06)", fontSize: 10, fontWeight: 600, padding: "3px 12px", borderRadius: 20, color: "#65676B", letterSpacing: 0.5 }}>EXEMPLES DE PUBLICATIONS</span>
          </div>

          {/* Post 1: Grooming before/after */}
          <FBPost
            time="Hier à 14:30"
            text={"✨ Transformation du jour !\n\nCe petit Yorkshire était tout emmêlé et inconfortable. Après un bain doux, un séchage en cabine pro et une coupe soignée… regardez le résultat ! 😍\n\nVotre compagnon aussi mérite d'être chouchouté 🐶\n📞 Prenez RDV pour un toilettage complet.\n\n#Toilettage #AvantAprès #PoilsEtPlumes #Ariana"}
            image={IMG.yorkshire}
            likes={47} comments={12} shares={5}
          />

          {/* Post 2: Cat consultation */}
          <FBPost
            time="Mardi à 10:15"
            text={"😺 Minou est venu aujourd'hui pour sa visite de contrôle !\n\nPoids stable, vaccins à jour, tout va bien pour ce beau tigré. Son propriétaire repart rassuré 💚\n\nRappel : une visite annuelle suffit pour garder votre chat en pleine forme.\n📍 Poils & Plumes — 3 rue Sod Maareb, Ennasr\n\n#Chat #VisiteVéto #SantéAnimale #PoilsEtPlumes #Ariana"}
            image={IMG.catOrange}
            likes={92} comments={18} shares={7}
          />

          {/* Post 3: Multi-photo clinic tour */}
          <FBPost
            time="Lundi à 16:00"
            text={"📸 Visite guidée de notre clinique !\n\nVoici un aperçu de l'univers Poils & Plumes : nos patients fidèles, nos soins quotidiens et tout l'amour qu'on met dans chaque consultation.\n\nChaque espace est conçu pour le confort de vos compagnons 🏥🐾\n\n#Clinique #Ariana #Ennasr #VétérinaireTunisie"}
            images={[IMG.vetDog, IMG.kitten, IMG.parrot]}
            likes={61} comments={15} shares={8}
          />

          {/* Post 4: Educational card */}
          <FBPost
            time="Dimanche à 09:00"
            text={"💡 Le saviez-vous ?\n\nLa vaccination de votre chat ou chien n'est pas un luxe — c'est une nécessité.\n\n🔹 Protège contre les maladies graves (rage, typhus, parvovirose…)\n🔹 Obligatoire pour voyager\n🔹 Un rappel annuel suffit\n\nVotre animal est-il à jour ? Passez nous voir 📍\n\n#Vaccination #ConseilVéto #SantéAnimale"}
            card={{ bg: "linear-gradient(135deg, #2CC5D3, #1BA8B5)", emoji: "💉", title: "Votre animal est-il\nvacciné ?", sub: "La vaccination protège contre des maladies graves" }}
            likes={34} comments={8} shares={19}
          />

          {/* Post 5: Golden retriever */}
          <FBPost
            time="Samedi à 11:30"
            text={"🐶 Patient du jour : ce magnifique Golden Retriever est venu pour un check-up complet !\n\nExamen clinique, détartrage et rappel vaccin — tout est en ordre. Regardez ce sourire ! 😄\n\nChaque visite est l'occasion de s'assurer que votre compagnon est en pleine santé.\n\n#GoldenRetriever #CheckUp #PoilsEtPlumes #VétérinaireAriana"}
            image={IMG.goldenRetriever}
            likes={128} comments={31} shares={12}
          />

          {/* Post 6: NAC - parrot */}
          <FBPost
            time="Jeudi à 09:45"
            text={"🦜 Chez Poils & Plumes, on soigne aussi les compagnons à plumes !\n\nCe superbe perroquet est venu pour un bilan de santé. Examen du plumage, pesée, conseils alimentation — notre équipe est formée pour chaque espèce.\n\nOiseaux, rongeurs, fennecs, lapins… venez nous voir !\n\n#NAC #Perroquet #Oiseaux #VétérinaireAriana #PoilsEtPlumes"}
            image={IMG.parrot}
            likes={76} comments={22} shares={11}
          />

          {/* Strategy */}
          <div style={{ background: "linear-gradient(135deg, #E0F7FA, #B2EBF2)", borderRadius: 12, padding: 18, marginTop: 6, border: "1px solid #2CC5D344" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1BA8B5", marginBottom: 6 }}>💡 Stratégie proposée — 4 posts/semaine</div>
            <div style={{ fontSize: 12, color: "#6D4C2E", lineHeight: 1.7 }}>
              🐾 Lun — Transformation toilettage (avant/après)<br/>
              💡 Mer — Conseil santé animale<br/>
              🦊 Ven — Patient du jour (photo + histoire)<br/>
              ⭐ Dim — Témoignage client ou FAQ
            </div>
          </div>
        </>}

        {/* ═══════ INSTAGRAM ═══════ */}
        {tab === "instagram" && <>
          <div style={{ textAlign: "center", margin: "6px 0 14px" }}>
            <span style={{ background: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)", color: "white", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20, letterSpacing: 1, textTransform: "uppercase" }}>Maquette Profil Instagram</span>
          </div>

          <IGProfile igTab={igTab} setIgTab={setIgTab} />

          <div style={{ textAlign: "center", margin: "18px 0 10px" }}>
            <span style={{ background: "rgba(0,0,0,0.06)", fontSize: 10, fontWeight: 600, padding: "3px 12px", borderRadius: 20, color: "#65676B", letterSpacing: 0.5 }}>EXEMPLES DE PUBLICATIONS</span>
          </div>

          <IGPost
            image={IMG.goldenRetriever}
            caption="🐶 Patient du jour ! Ce magnifique Golden est venu pour son check-up annuel. Poids stable, vaccins à jour, dents détartrées — il repart en pleine forme ! 💪"
            hashtags="#GoldenRetriever #CheckUp #VétérinaireAriana #PoilsEtPlumes #Ariana #Tunisie"
            likes={128} comments={31} time="Il y a 1 jour" location="Poils & Plumes — Clinique Vétérinaire"
          />

          <IGPost
            image={IMG.catOrange}
            caption="😺 Minou le tigré est passé pour sa visite de contrôle. Tout va bien pour ce beau bonhomme ! Rappel : une visite par an suffit pour garder votre chat en pleine santé 💚"
            hashtags="#Chat #Minou #ConsultationVéto #PoilsEtPlumes #SantéAnimale #Ariana"
            likes={92} comments={18} time="Il y a 3 jours" location="Ennasr, Ariana"
          />

          <IGPost
            image={IMG.parrot}
            caption="🦜 On soigne aussi les compagnons à plumes ! Ce superbe perroquet est venu pour un bilan complet : plumage, pesée, alimentation — tout est parfait !"
            hashtags="#Perroquet #NAC #Oiseaux #VétérinaireAriana #PoilsEtPlumes #SoinsAnimaux"
            likes={76} comments={22} time="Il y a 5 jours" location="Poils & Plumes — Clinique Vétérinaire"
          />

          <IGPost
            image={IMG.rabbit}
            caption="🐰 Petit nouveau à la clinique ! Ce lapin nain est venu pour sa première visite. Examen, conseils alimentation et câlins — bienvenue dans la famille Poils & Plumes !"
            hashtags="#Lapin #NAC #NouveauPatient #PoilsEtPlumes #VétérinaireAriana #Ariana"
            likes={64} comments={14} time="Il y a 1 semaine" location="Ennasr, Ariana"
          />

          <IGPost
            image={IMG.yorkshire}
            caption="✨ Avant / Après toilettage ! Ce petit Yorkshire est reparti tout beau tout propre après un bain, séchage cabine pro et coupe soignée. Son proprio n'en revient pas 😍"
            hashtags="#Toilettage #AvantAprès #Yorkshire #PoilsEtPlumes #Ariana #ChienHeureux"
            likes={47} comments={12} time="Il y a 1 semaine" location="Poils & Plumes — Clinique Vétérinaire"
          />

          {/* Strategy */}
          <div style={{ background: "linear-gradient(135deg, #E0F7FA, #B2EBF2)", borderRadius: 12, padding: 18, marginTop: 6, border: "1px solid #2CC5D344" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1BA8B5", marginBottom: 6 }}>📸 Stratégie Instagram — 3 posts + 5 stories/sem</div>
            <div style={{ fontSize: 12, color: "#6D4C2E", lineHeight: 1.7 }}>
              📷 Feed — Photos pro (patients, avant/après, équipe)<br/>
              🎬 Reels — Coulisses, FAQ rapide, transformations<br/>
              📖 Stories — Sondages, quiz santé, quotidien clinique<br/>
              ✨ Highlights — Toilettage, Chats, NAC, Conseils, Avis
            </div>
          </div>
        </>}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "20px 20px 30px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ fontSize: 11, color: "#999" }}>Maquette préparée pour <b style={{ color: "#6D4C2E" }}>Poils & Plumes</b></div>
        <div style={{ fontSize: 10, color: "#BBB", marginTop: 2 }}>Design & stratégie — 2026</div>
      </div>
    </div>
  );
}
