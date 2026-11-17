// TODO: להחליף בלוגואים אמיתיים של לקוחות (באישורם) מתוך /public/clients
const CLIENTS = ["לקוח א׳", "לקוח ב׳", "לקוח ג׳", "לקוח ד׳", "לקוח ה׳", "לקוח ו׳"];

export default function ClientLogos() {
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];
  return (
    <div className="marquee relative z-10 overflow-hidden pb-8" aria-label="לקוחות שעבדנו איתם">
      <p className="mb-4 text-center text-xs tracking-[0.25em] text-muted">
        עובדים עם החברות המובילות
      </p>
      <ul className="marquee-track flex w-max gap-6">
        {items.map((name, i) => (
          <li
            key={i}
            aria-hidden={i >= CLIENTS.length}
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-foreground/20 bg-surface/70 text-center text-[10px] text-muted grayscale transition hover:grayscale-0"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
