/* FTA Landing — primitives */
function Icon({ name, size = 20, stroke = 2, color, style = {} }) {
  return (
    <span className="ic" style={{ fontSize: size, color: color || "inherit", ...style }}>
      <i data-lucide={name} data-stroke={stroke}></i>
    </span>
  );
}
function Logo({ variant = "color", height = 34 }) {
  const src = variant === "white" ? "assets/logo-horizontal-white-web.png" : "assets/logo-horizontal-color-web.png";
  return <img src={src} alt="Fundación Transparencia Activa" style={{ height, width: "auto", display: "block" }} />;
}
function Button({ children, variant = "primary", size = "md", icon, iconRight, onClick, type = "button", href, full }) {
  const cls = `btn btn-${variant} btn-${size}` + (full ? " btn-full" : "");
  const inner = (<>
    {icon && <Icon name={icon} size={size === "lg" ? 20 : 18} />}
    {children && <span>{children}</span>}
    {iconRight && <Icon name={iconRight} size={size === "lg" ? 20 : 18} />}
  </>);
  if (href) return <a className={cls} href={href} onClick={onClick}>{inner}</a>;
  return <button type={type} className={cls} onClick={onClick}>{inner}</button>;
}
function Badge({ children, tone = "neutral", dot }) {
  return <span className={`badge badge-${tone}`}>{dot && <span className="badge-dot"></span>}{children}</span>;
}
function Eyebrow({ children, light }) {
  return <div className={"eyebrow" + (light ? " eyebrow-light" : "")}>{children}</div>;
}
function Field({ label, type = "text", placeholder, value, onChange, hint, error, required, options, textarea }) {
  return (
    <label className="field">
      <span className="field-label">{label}{required && <span className="req"> *</span>}</span>
      {options ? (
        <select className={"input" + (error ? " input-error" : "")} value={value} onChange={onChange}>
          <option value="">{placeholder || "Seleccioná una opción"}</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : textarea ? (
        <textarea className={"input input-area" + (error ? " input-error" : "")} placeholder={placeholder} value={value} onChange={onChange} rows={4} />
      ) : (
        <input className={"input" + (error ? " input-error" : "")} type={type} placeholder={placeholder} value={value} onChange={onChange} />
      )}
      {error ? <span className="field-error">{error}</span> : hint ? <span className="field-hint">{hint}</span> : null}
    </label>
  );
}
function Stat({ value, label, accent, light }) {
  return (
    <div className={"stat" + (light ? " stat-light" : "")}>
      <div className={"stat-value" + (accent ? " stat-accent" : "")}>{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
const SOCIAL_PATHS = {
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  youtube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
};
function Social({ name, size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" style={{ display: "block" }}>
      <path d={SOCIAL_PATHS[name]} />
    </svg>
  );
}
Object.assign(window, { Icon, Logo, Button, Badge, Eyebrow, Field, Stat, Social });
