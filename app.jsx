/* FTA Landing — app shell + tweaks */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "split",
  "accent": "#2962FF",
  "density": "regular"
}/*EDITMODE-END*/;

const ACCENTS = ["#2962FF", "#0B1D3A", "#1E50E6", "#1F8A5B"];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = useState("inicio");
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("fta-theme") || "light"; } catch (e) { return "light"; }
  });

  // re-render icons after any change
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  // apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("fta-theme", theme); } catch (e) {}
  }, [theme]);
  const toggleTheme = () => setTheme((p) => (p === "dark" ? "light" : "dark"));

  // apply accent + density to :root
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--action", t.accent);
    r.style.setProperty("--accent-dyn", t.accent);
    r.setAttribute("data-density", t.density);
  }, [t.accent, t.density]);

  // scroll-spy
  useEffect(() => {
    const ids = ["inicio", "quienes", "informes", "campania", "contacto"];
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = "inicio";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [t.heroVariant]);

  return (
    <div className="site">
      <Nav active={active} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero variant={t.heroVariant} />
        <Quienes />
        <Informes />
        <Campania />
        <Contacto />
      </main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio label="Variante" value={t.heroVariant}
          options={["split", "dark", "centered"]}
          onChange={(v) => setTweak("heroVariant", v)} />
        <TweakSection label="Marca" />
        <TweakColor label="Color de acción" value={t.accent} options={ACCENTS}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="Diseño" />
        <TweakRadio label="Densidad" value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={(v) => setTweak("density", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
