/* FTA Landing — sections */
const { useState, useEffect, useRef } = React;

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
const LOREM_SHORT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 70;
  window.scrollTo({ top, behavior: "smooth" });
}

/* ---------------- NAV ---------------- */
function Nav({ active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: "inicio", label: "Inicio" },
    { id: "quienes", label: "Quiénes somos" },
    { id: "informes", label: "Informes" },
    { id: "campania", label: "Campaña" },
    { id: "contacto", label: "Contacto" },
  ];
  const handle = (id) => { setOpen(false); scrollToId(id); };
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-logo" onClick={() => handle("inicio")}><Logo height={32} variant={theme === "dark" ? "white" : "color"} /></a>
        <nav className={"nav-links" + (open ? " open" : "")}>
          {links.map((l) => (
            <a key={l.id} className={"nav-link" + (active === l.id ? " active" : "")} onClick={() => handle(l.id)}>{l.label}</a>
          ))}
          <div className="nav-cta-mobile"><Button variant="primary" size="sm" icon="file-search" onClick={() => handle("contacto")} full>Solicitá información</Button></div>
        </nav>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Cambiar tema" title={theme === "dark" ? "Modo claro" : "Modo oscuro"}>
          <Icon name={theme === "dark" ? "sun" : "moon"} size={20} />
        </button>
        <div className="nav-actions">
          <Button variant="primary" size="sm" icon="file-search" onClick={() => handle("contacto")}>Solicitá información</Button>
        </div>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menú">
          <Icon name={open ? "x" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}

/* ---------------- HERO VARIANTS ---------------- */
const HERO_TITLE = <>Información pública que <span className="hl">activa derechos</span>.</>;
const HERO_SUB = "Promovemos y garantizamos el acceso a la información del Estado. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.";

function HeroSplit() {
  return (
    <section className="hero hero-split" id="inicio">
      <div className="hero-grid">
        <div className="hero-copy">
          <Eyebrow>Fundación Transparencia Activa</Eyebrow>
          <h1 className="hero-title">{HERO_TITLE}</h1>
          <p className="hero-lead">{HERO_SUB}</p>
          <div className="hero-cta">
            <Button variant="primary" size="lg" icon="file-search" onClick={() => scrollToId("contacto")}>Solicitá información</Button>
            <Button variant="outline" size="lg" iconRight="arrow-right" onClick={() => scrollToId("informes")}>Conocé los informes</Button>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-art-disc"></div>
          <img src="assets/isotipo-color-web.png" alt="" className="hero-iso" />
        </div>
      </div>
    </section>
  );
}

function HeroDark() {
  return (
    <section className="hero hero-dark" id="inicio">
      <img src="assets/isotipo-white-web.png" alt="" className="hero-dark-iso" />
      <div className="hero-dark-inner">
        <Eyebrow light>Fundación Transparencia Activa</Eyebrow>
        <h1 className="hero-title hero-title-xl">{HERO_TITLE}</h1>
        <p className="hero-lead hero-lead-dark">{HERO_SUB}</p>
        <div className="hero-cta">
          <Button variant="ondark" size="lg" icon="file-search" onClick={() => scrollToId("contacto")}>Solicitá información</Button>
          <Button variant="ghostdark" size="lg" iconRight="arrow-right" onClick={() => scrollToId("informes")}>Conocé los informes</Button>
        </div>
        <div className="hero-dark-stats">
          <Stat value="1.284" label="Solicitudes acompañadas" light />
          <Stat value="73%" label="Respondidas a tiempo" accent light />
          <Stat value="142" label="Organismos monitoreados" light />
        </div>
      </div>
    </section>
  );
}

function HeroCentered() {
  return (
    <section className="hero hero-centered" id="inicio">
      <div className="hero-centered-inner">
        <Eyebrow>Fundación Transparencia Activa</Eyebrow>
        <h1 className="hero-title hero-title-center">{HERO_TITLE}</h1>
        <p className="hero-lead hero-lead-center">{HERO_SUB}</p>
        <div className="hero-cta hero-cta-center">
          <Button variant="primary" size="lg" icon="file-search" onClick={() => scrollToId("contacto")}>Solicitá información</Button>
          <Button variant="outline" size="lg" iconRight="arrow-right" onClick={() => scrollToId("informes")}>Conocé los informes</Button>
        </div>
      </div>
      <div className="hero-centered-stats">
        <Stat value="1.284" label="Solicitudes acompañadas" />
        <Stat value="73%" label="Respondidas a tiempo" accent />
        <Stat value="142" label="Organismos monitoreados" />
        <Stat value="18" label="Informes publicados" />
      </div>
    </section>
  );
}

function Hero({ variant }) {
  if (variant === "dark") return <HeroDark />;
  if (variant === "centered") return <HeroCentered />;
  return <HeroSplit />;
}

/* ---------------- QUIÉNES SOMOS ---------------- */
const PILLARS = [
  { icon: "scale", title: "Acceso", desc: LOREM_SHORT },
  { icon: "search-check", title: "Control", desc: LOREM_SHORT },
  { icon: "users", title: "Participación", desc: LOREM_SHORT },
  { icon: "landmark", title: "Democracia", desc: LOREM_SHORT },
];
function Quienes() {
  return (
    <section className="section" id="quienes">
      <div className="section-inner quienes-grid">
        <div className="quienes-copy">
          <Eyebrow>Quiénes somos</Eyebrow>
          <h2 className="section-title">Una organización al servicio del acceso a la información</h2>
          <p className="section-lead">{LOREM}</p>
          <p className="quienes-p">{LOREM} {LOREM_SHORT}</p>
          <Button variant="ghost" iconRight="arrow-right" onClick={() => scrollToId("contacto")}>Conocé al equipo</Button>
        </div>
        <div className="pillars">
          {PILLARS.map((p, i) => (
            <div className="pillar" key={i}>
              <div className="pillar-ic"><Icon name={p.icon} size={24} /></div>
              <div className="pillar-title">{p.title}</div>
              <div className="pillar-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INFORMES (tabs) ---------------- */
const ITEMS = [
  { type: "Informe", tag: "Informe anual", title: "Acceso a la Información Pública 2024", desc: LOREM_SHORT, meta: "PDF · 4.2 MB", featured: true },
  { type: "Dataset", tag: "Datos abiertos", title: "Índice de Transparencia Provincial", desc: LOREM_SHORT, meta: "CSV · Dataset" },
  { type: "Informe", tag: "Investigación", title: "Barreras al acceso ciudadano", desc: LOREM_SHORT, meta: "PDF · 2.1 MB" },
  { type: "Dataset", tag: "Datos abiertos", title: "Solicitudes por organismo 2025", desc: LOREM_SHORT, meta: "CSV · Dataset" },
  { type: "Informe", tag: "Guía", title: "Cómo usar la Ley 27.275", desc: LOREM_SHORT, meta: "PDF · 1.4 MB" },
  { type: "Dataset", tag: "Datos abiertos", title: "Tiempos de respuesta 2025", desc: LOREM_SHORT, meta: "CSV · Dataset" },
];
function Informes() {
  const [tab, setTab] = useState("Todos");
  const tabs = ["Todos", "Informe", "Dataset"];
  const labels = { Todos: "Todos", Informe: "Informes", Dataset: "Datos abiertos" };
  const filtered = tab === "Todos" ? ITEMS : ITEMS.filter((i) => i.type === tab);
  return (
    <section className="section section-soft" id="informes">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <Eyebrow>Publicaciones</Eyebrow>
            <h2 className="section-title">Informes y datos abiertos</h2>
          </div>
          <div className="tabs">
            {tabs.map((t) => (
              <button key={t} className={"tab" + (tab === t ? " tab-active" : "")} onClick={() => setTab(t)}>{labels[t]}</button>
            ))}
          </div>
        </div>
        <div className="informe-grid">
          {filtered.map((i, k) => (
            <article className={"informe" + (i.featured ? " informe-featured" : "")} key={k}>
              {i.featured && <div className="informe-bar"></div>}
              <div className="informe-body">
                <div className="informe-toprow">
                  <Eyebrow>{i.tag}</Eyebrow>
                  <Badge tone={i.type === "Dataset" ? "info" : "neutral"}>{i.type === "Dataset" ? "Dataset" : "Informe"}</Badge>
                </div>
                <h3 className="informe-title">{i.title}</h3>
                <p className="informe-desc">{i.desc}</p>
                <div className="informe-meta">
                  <span className="informe-metainfo"><Icon name={i.type === "Dataset" ? "database" : "file-text"} size={15} />{i.meta}</span>
                  <a className="informe-dl"><Icon name="download" size={16} /> Descargar</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CAMPAÑA ---------------- */
function Campania() {
  return (
    <section className="campania" id="campania">
      <img src="assets/isotipo-white-web.png" alt="" className="campania-iso" />
      <div className="campania-inner">
        <Badge tone="info" dot>Campaña activa</Badge>
        <h2 className="campania-title">Sumate a #DerechoASaber</h2>
        <p className="campania-lead">{LOREM} {LOREM_SHORT}</p>
        <div className="campania-actions">
          <Button variant="ondark" size="lg" icon="megaphone" onClick={() => scrollToId("contacto")}>Sumate a la campaña</Button>
          <Button variant="ghostdark" size="lg" icon="hand-heart" onClick={() => scrollToId("contacto")}>Quiero ser voluntario</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACTO ---------------- */
function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", motivo: "", mensaje: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = () => {
    const er = {};
    if (!form.nombre) er.nombre = "Ingresá tu nombre.";
    if (!form.email || !/.+@.+\..+/.test(form.email)) er.email = "Ingresá un correo válido.";
    if (!form.motivo) er.motivo = "Elegí un motivo.";
    if (!form.mensaje) er.mensaje = "Escribí tu mensaje.";
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };
  return (
    <section className="section" id="contacto">
      <div className="section-inner contacto-grid">
        <div className="contacto-aside">
          <Eyebrow>Contacto</Eyebrow>
          <h2 className="section-title">Escribinos</h2>
          <p className="section-lead">{LOREM_SHORT}</p>
          <ul className="contacto-list">
            <li><Icon name="mail" size={18} color="var(--blue-500)" /> info@transparenciaactiva.org</li>
            <li><Icon name="map-pin" size={18} color="var(--blue-500)" /> Buenos Aires, Argentina</li>
          </ul>
          <div className="footer-social contacto-social">
            <a className="soc"><Social name="x" /></a>
            <a className="soc"><Social name="instagram" /></a>
            <a className="soc"><Social name="linkedin" /></a>
          </div>
        </div>
        <div className="contacto-card">
          {sent ? (
            <div className="contacto-sent">
              <div className="confirm-icon"><Icon name="check" size={36} stroke={3} color="#fff" /></div>
              <h3 className="contacto-sent-title">¡Gracias! Recibimos tu mensaje.</h3>
              <p className="contacto-sent-sub">Te responderemos a la brevedad. Lorem ipsum dolor sit amet.</p>
              <Button variant="outline" onClick={() => { setSent(false); setForm({ nombre: "", email: "", motivo: "", mensaje: "" }); }}>Enviar otro mensaje</Button>
            </div>
          ) : (
            <>
              <div className="form-row">
                <Field label="Nombre y apellido" placeholder="Tu nombre" value={form.nombre} onChange={set("nombre")} error={errors.nombre} required />
                <Field label="Correo electrónico" type="email" placeholder="vos@ejemplo.org" value={form.email} onChange={set("email")} error={errors.email} required />
              </div>
              <Field label="Motivo" value={form.motivo} onChange={set("motivo")} error={errors.motivo} required
                options={["Solicitar información", "Sumarme como voluntario/a", "Prensa", "Alianzas", "Otro"]} />
              <Field label="Mensaje" textarea placeholder="Contanos en qué podemos ayudarte." value={form.mensaje} onChange={set("mensaje")} error={errors.mensaje} required />
              <div className="form-foot">
                <span className="form-note"><Icon name="shield-check" size={15} color="var(--success)" /> Tus datos sólo se usan para responderte.</span>
                <Button variant="primary" size="lg" iconRight="send" onClick={submit}>Enviar mensaje</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const cols = [
    { h: "Fundación", links: ["Quiénes somos", "Equipo", "Aliados", "Memoria y balance"] },
    { h: "Recursos", links: ["Informes", "Datos abiertos", "Guía de la ley 27.275", "Prensa"] },
    { h: "Participá", links: ["Solicitá información", "Voluntariado", "Campañas", "Contacto"] },
  ];
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo variant="white" height={30} />
          <p className="footer-desc">{LOREM_SHORT}</p>
          <div className="footer-social">
            <a className="soc"><Social name="x" /></a>
            <a className="soc"><Social name="instagram" /></a>
            <a className="soc"><Social name="linkedin" /></a>
            <a className="soc"><Social name="youtube" /></a>
          </div>
        </div>
        <div className="footer-cols">
          {cols.map((c, i) => (
            <div className="footer-col" key={i}>
              <h4>{c.h}</h4>
              {c.links.map((l, k) => <a key={k}>{l}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Fundación Transparencia Activa</span>
        <span>Buenos Aires, Argentina · info@transparenciaactiva.org</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Quienes, Informes, Campania, Contacto, Footer, scrollToId });
