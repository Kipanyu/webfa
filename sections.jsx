/* FTA Landing — sections (contenidos cliente) */
const { useState, useEffect, useRef } = React;

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScMNlWoJRzMkWV9DDjoSxzsulEVu5TSJgQsgcwlr7SuZGEEAw/viewform?usp=sharing&ouid=117727770341074460524";
const FOPEA_URL = "https://fopea.org/transparencia-activa-y-fopea-presentan-foco-bootcamp/";
const EMAIL = "info@transparenciaactiva.com.ar";

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
    { id: "que-hacemos", label: "Qué hacemos" },
    { id: "en-accion", label: "En acción" },
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
          <div className="nav-cta-mobile"><Button variant="primary" size="sm" icon="hand-heart" href={FORM_URL} newTab full>Solicitá apoyo</Button></div>
        </nav>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Cambiar tema" title={theme === "dark" ? "Modo claro" : "Modo oscuro"}>
          <Icon name={theme === "dark" ? "sun" : "moon"} size={20} />
        </button>
        <div className="nav-actions">
          <Button variant="primary" size="sm" icon="hand-heart" href={FORM_URL} newTab>Solicitá apoyo</Button>
        </div>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menú">
          <Icon name={open ? "x" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}

/* ---------------- HERO VARIANTS ---------------- */
const HERO_TITLE = <>Acceso a la información que <span className="hl">activa derechos</span>.</>;
const HERO_SUB = "Promovemos el acceso a la información de interés público para fortalecer la participación y la toma de decisiones.";
const HERO_BODY = "Trabajamos junto a ciudadanos, comunicadores, organizaciones y empresas para ampliar el acceso a la información y fortalecer su disponibilidad y uso social.";

function HeroCtas({ dark }) {
  return (
    <div className={"hero-cta" + (dark ? "" : "")}>
      <Button variant={dark ? "ondark" : "primary"} size="lg" icon="hand-heart" href={FORM_URL} newTab>Solicitá apoyo</Button>
      <Button variant={dark ? "ghostdark" : "outline"} size="lg" iconRight="arrow-right" onClick={() => scrollToId("en-accion")}>En acción</Button>
    </div>
  );
}

function HeroSplit() {
  return (
    <section className="hero hero-split" id="inicio">
      <div className="hero-grid">
        <div className="hero-copy">
          <Eyebrow>Fundación Transparencia Activa</Eyebrow>
          <h1 className="hero-title">{HERO_TITLE}</h1>
          <p className="hero-lead">{HERO_SUB}</p>
          <p className="hero-body">{HERO_BODY}</p>
          <HeroCtas />
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
        <p className="hero-body hero-body-dark">{HERO_BODY}</p>
        <HeroCtas dark />
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
        <p className="hero-body hero-body-center">{HERO_BODY}</p>
        <div className="hero-cta hero-cta-center">
          <Button variant="primary" size="lg" icon="hand-heart" href={FORM_URL} newTab>Solicitá apoyo</Button>
          <Button variant="outline" size="lg" iconRight="arrow-right" onClick={() => scrollToId("en-accion")}>En acción</Button>
        </div>
      </div>
    </section>
  );
}

function Hero({ variant }) {
  if (variant === "dark") return <HeroDark />;
  if (variant === "centered") return <HeroCentered />;
  return <HeroSplit />;
}

/* ---------------- FOCO BOOTCAMP ---------------- */
function Bootcamp() {
  return (
    <section className="bootcamp" id="bootcamp">
      <img src="assets/isotipo-white-web.png" alt="" className="bootcamp-iso" />
      <div className="bootcamp-inner">
        <Eyebrow light>Convocatoria</Eyebrow>
        <h2 className="bootcamp-title">FOCO Bootcamp 2026</h2>
        <p className="bootcamp-lead">Experiencia intensiva de formación en periodismo, acceso a la información pública y visualización de datos desarrollada por la Fundación Transparencia Activa y FOPEA.</p>
        <p className="bootcamp-body">El programa reúne periodistas, programadores, analistas de datos y diseñadores para desarrollar investigaciones basadas en pedidos de acceso a la información pública y producir proyectos digitales de alto impacto.</p>
        <div className="bootcamp-actions">
          <Button variant="ondark" size="lg" iconRight="arrow-up-right" href={FOPEA_URL} newTab>Conocer la convocatoria</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MANIFIESTO ---------------- */
function Manifiesto() {
  return (
    <section className="section" id="manifiesto">
      <div className="section-inner">
        <div className="manifiesto-head">
          <Eyebrow>Manifiesto</Eyebrow>
          <h2 className="section-title manifiesto-title">La información es poder.</h2>
        </div>
        <div className="manifiesto-cols">
          <div className="manifiesto-col">
            <p className="manifiesto-lead">La información influye en las decisiones que tomamos, en las oportunidades que tenemos y en la forma en que participamos en la vida pública. Cuando el acceso a esa información es desigual, también lo son las posibilidades de comprender, participar e incidir.</p>
            <p className="manifiesto-p">Por eso trabajamos para democratizar el acceso a la información y ampliar las posibilidades de participación, control y toma de decisiones.</p>
          </div>
          <div className="manifiesto-col">
            <p className="manifiesto-p">Entendemos que la información es un recurso esencial para comprender el entorno, participar en los asuntos públicos, controlar el ejercicio del poder y tomar decisiones.</p>
            <p className="manifiesto-p">Impulsamos iniciativas orientadas a fortalecer la circulación y el uso social de la información. Trabajamos sobre transparencia, justicia abierta, protección de datos personales y acceso a información de interés público.</p>
            <p className="manifiesto-p">Promovemos el fortalecimiento de las capacidades de periodistas y comunicadores, actores fundamentales para ampliar el acceso a la información y multiplicar su impacto en la sociedad.</p>
            <p className="manifiesto-p">Promovemos mejoras normativas e institucionales y articulamos iniciativas junto a organizaciones, universidades e instituciones públicas y privadas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- QUÉ HACEMOS ---------------- */
const QUE_HACEMOS = [
  { icon: "file-search", title: "Programa de Acceso a la Información", desc: "Brindamos asistencia técnica y jurídica para acceder a información de interés público y superar barreras que dificultan su obtención y utilización." },
  { icon: "monitor-cog", title: "Desarrollos Digitales e Innovación", desc: "Impulsamos herramientas tecnológicas que facilitan el acceso, análisis, reutilización y visualización de información para ampliar la participación y la rendición de cuentas." },
  { icon: "scale", title: "Litigio Estratégico", desc: "Impulsamos acciones administrativas y judiciales para proteger el derecho a saber, fortalecer estándares de transparencia y combatir prácticas de opacidad y secretismo." },
  { icon: "graduation-cap", title: "Formación y Fortalecimiento de Capacidades", desc: "Capacitamos a ciudadanos, periodistas, comunicadores y organizaciones para que puedan acceder, comprender y utilizar información de manera efectiva." },
  { icon: "book-open", title: "Investigación y Conocimiento", desc: "Desarrollamos estudios, informes y recursos orientados a promover una cultura de transparencia y ampliar el acceso al conocimiento de interés público." },
  { icon: "landmark", title: "Incidencia y Colaboración Institucional", desc: "Promovemos mejoras normativas e institucionales y articulamos iniciativas junto a organizaciones, universidades e instituciones públicas y privadas." },
];
function QueHacemos() {
  return (
    <section className="section section-soft" id="que-hacemos">
      <div className="section-inner">
        <div className="qh-head">
          <Eyebrow>Qué hacemos</Eyebrow>
          <h2 className="section-title">Seis frentes de trabajo por el derecho a saber</h2>
        </div>
        <div className="qh-grid">
          {QUE_HACEMOS.map((c, i) => (
            <div className="pillar qh-card" key={i}>
              <div className="pillar-ic"><Icon name={c.icon} size={24} /></div>
              <div className="pillar-title">{c.title}</div>
              <div className="pillar-desc">{c.desc}</div>
            </div>
          ))}
        </div>
        <div className="qh-cta">
          <p className="qh-cta-text">¿Necesitás apoyo para acceder a información o impulsar una iniciativa?</p>
          <Button variant="primary" size="lg" icon="hand-heart" href={FORM_URL} newTab>Solicitá apoyo</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EN ACCIÓN ---------------- */
const ENTRADAS = [
  { cat: "Convocatoria", group: "Convocatorias", date: "5 de junio de 2025", title: "Abierta la convocatoria para FOCO Bootcamp 2026",
    desc: "Experiencia intensiva de formación en periodismo, acceso a la información pública y visualización de datos desarrollada junto a FOPEA.",
    link: "Leer más", href: FOPEA_URL },
  { cat: "Informe", group: "Informes", date: "Mayo de 2025", title: "Barreras de accesibilidad de la información pública en la Ciudad de Buenos Aires",
    desc: "Diagnóstico sobre los principales obstáculos que enfrenta la ciudadanía para ejercer el derecho de acceso a la información pública.",
    link: "Leer más", href: null },
  { cat: "Actividad", group: "Actividades", date: "Junio de 2025", title: "Participación en la Conferencia Internacional de Justicia Abierta",
    desc: "Intercambio regional dedicado a promover una justicia más transparente, accesible y participativa.",
    link: "Ver Declaración de Santo Domingo", href: "https://drive.google.com/file/d/1sp17I6C-t6Em9Z9ZTgr4TDoYvK8eyDr3/view" },
  { cat: "Publicación", group: "Publicaciones", date: "Mayo de 2025", title: "Lineamientos de acceso a la información jurisdiccional para operadores de justicia",
    desc: "Junto a la Red Internacional de Justicia Abierta, evaluamos las tensiones entre el acceso a la información judicial y la protección de datos personales en documentos judiciales.",
    link: "Ver documento", href: "https://www.unesco.org/es/articles/especialistas-de-america-latina-avanzaron-en-lineamientos-sobre-acceso-la-informacion-publica-en-los" },
  { cat: "Litigio estratégico", group: "Litigio", date: "Febrero de 2024", title: "Acciones para fortalecer la privacidad y seguridad de los solicitantes",
    desc: "Iniciativas para reducir riesgos de represalias, proteger la privacidad de solicitantes y fortalecer la participación ciudadana.",
    link: "Leer más", href: "https://drive.google.com/file/d/1tHKsNKtkLwTx_q0MTkELWD-n4zr_4L3H/view?usp=sharing" },
  { cat: "Capacitación", group: "Capacitaciones", date: "Noviembre de 2023", title: "Nuevas capacitaciones sobre acceso a la información pública",
    desc: "Actividades de formación destinadas a periodistas, organizaciones, estudiantes y ciudadanía en general.",
    link: null, href: null },
];
const FILTROS = ["Todas", "Convocatorias", "Informes", "Actividades", "Litigio", "Capacitaciones", "Publicaciones"];

function EnAccion() {
  const [filtro, setFiltro] = useState("Todas");
  const list = filtro === "Todas" ? ENTRADAS : ENTRADAS.filter((e) => e.group === filtro);
  return (
    <section className="section" id="en-accion">
      <div className="section-inner">
        <div className="qh-head">
          <Eyebrow>En acción</Eyebrow>
          <h2 className="section-title">Lo que estamos impulsando</h2>
          <p className="section-lead">Compartimos aquí nuestras actividades, investigaciones, litigios, convocatorias e iniciativas para ampliar el acceso a la información y fortalecer su circulación y uso social.</p>
        </div>
        <div className="filtros">
          {FILTROS.map((f) => (
            <button key={f} className={"tab" + (filtro === f ? " tab-active" : "")} onClick={() => setFiltro(f)}>{f}</button>
          ))}
        </div>
        <div className="informe-grid accion-grid">
          {list.map((e, k) => (
            <article className="informe" key={k}>
              <div className="informe-body">
                <div className="informe-toprow">
                  <Eyebrow>{e.cat}</Eyebrow>
                  <span className="accion-fecha">{e.date}</span>
                </div>
                <h3 className="informe-title">{e.title}</h3>
                <p className="informe-desc">{e.desc}</p>
                <div className="informe-meta accion-meta">
                  {e.link ? (
                    e.href
                      ? <a className="informe-dl" href={e.href} target="_blank" rel="noopener noreferrer">{e.link} <Icon name="arrow-up-right" size={16} /></a>
                      : <span className="accion-soon"><Icon name="clock" size={14} /> Próximamente</span>
                  ) : <span className="accion-soon"><Icon name="minus" size={14} /> Sin enlace</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="accion-final">
          <Button variant="ghost" iconRight="arrow-right" onClick={() => scrollToId("contacto")}>Ver todas las publicaciones</Button>
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
    <section className="section section-soft" id="contacto">
      <div className="section-inner contacto-grid">
        <div className="contacto-aside">
          <Eyebrow>Contacto</Eyebrow>
          <h2 className="section-title">Escribinos</h2>
          <p className="section-lead">Si necesitás acceder a información de interés público, desarrollar una investigación, fortalecer capacidades institucionales, impulsar iniciativas vinculadas con nuestras áreas de trabajo o realizar una consulta sobre alguno de nuestros programas, podés comunicarte con nuestro equipo.</p>
          <p className="contacto-p">Trabajamos junto a ciudadanos, comunicadores, organizaciones, instituciones y empresas para ampliar el acceso a la información y fortalecer su circulación y utilización.</p>
          <ul className="contacto-list">
            <li><Icon name="mail" size={18} color="var(--blue-500)" /> {EMAIL}</li>
            <li><Icon name="map-pin" size={18} color="var(--blue-500)" /> Buenos Aires, Argentina</li>
          </ul>
          <div className="footer-social contacto-social">
            <a className="soc" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Social name="linkedin" /></a>
          </div>
        </div>
        <div className="contacto-card">
          {sent ? (
            <div className="contacto-sent">
              <div className="confirm-icon"><Icon name="check" size={36} stroke={3} color="#fff" /></div>
              <h3 className="contacto-sent-title">¡Gracias! Recibimos tu mensaje.</h3>
              <p className="contacto-sent-sub">Te responderemos a la brevedad a la dirección que nos indicaste.</p>
              <Button variant="outline" onClick={() => { setSent(false); setForm({ nombre: "", email: "", motivo: "", mensaje: "" }); }}>Enviar otro mensaje</Button>
            </div>
          ) : (
            <>
              <div className="form-row">
                <Field label="Nombre y apellido" placeholder="Tu nombre" value={form.nombre} onChange={set("nombre")} error={errors.nombre} required />
                <Field label="Correo electrónico" type="email" placeholder="vos@ejemplo.com" value={form.email} onChange={set("email")} error={errors.email} required />
              </div>
              <Field label="Motivo" value={form.motivo} onChange={set("motivo")} error={errors.motivo} required
                options={["Solicitar apoyo / acceso a información", "Investigación o desarrollo digital", "Formación y capacitación", "Prensa", "Alianzas institucionales", "Otro"]} />
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
  const nav = [
    { id: "inicio", label: "Inicio" },
    { id: "que-hacemos", label: "Qué hacemos" },
    { id: "en-accion", label: "En acción" },
    { id: "contacto", label: "Contacto" },
  ];
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo variant="white" height={30} />
          <p className="footer-desc">Promovemos el acceso a información de interés público para fortalecer la participación, la toma de decisiones y la protección de derechos.</p>
          <p className="footer-desc footer-claim">Acceso a la información que activa derechos.</p>
          <div className="footer-social">
            <a className="soc" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Social name="linkedin" /></a>
          </div>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Navegación</h4>
            {nav.map((l) => <a key={l.id} onClick={() => scrollToId(l.id)}>{l.label}</a>)}
          </div>
          <div className="footer-col">
            <h4>Trabajamos en</h4>
            <a onClick={() => scrollToId("que-hacemos")}>Transparencia</a>
            <a onClick={() => scrollToId("que-hacemos")}>Justicia abierta</a>
            <a onClick={() => scrollToId("que-hacemos")}>Protección de datos</a>
            <a onClick={() => scrollToId("que-hacemos")}>Acceso a la información</a>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <a href={"mailto:" + EMAIL}>{EMAIL}</a>
            <a>Buenos Aires, Argentina</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Fundación Transparencia Activa</span>
        <span>Buenos Aires, Argentina · {EMAIL}</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Bootcamp, Manifiesto, QueHacemos, EnAccion, Contacto, Footer, scrollToId });
