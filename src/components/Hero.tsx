import ClientLogos from "./ClientLogos";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* TODO: להחליף ב-<video> אמיתי (WebM/MP4 + poster) כשהסרטון יתקבל */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,#3a2a14_0%,#0b0907_65%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
      />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <span className="font-display text-2xl font-black tracking-wide">
          TRIO
        </span>
        <nav aria-label="ניווט ראשי" className="hidden gap-8 text-sm md:flex">
          <a href="#events" className="hover:text-accent-soft">אירועים</a>
          <a href="#gallery" className="hover:text-accent-soft">גלריה</a>
          <a href="#menu" className="hover:text-accent-soft">תפריט</a>
          <a href="#contact" className="hover:text-accent-soft">צור קשר</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-accent px-5 py-2 text-sm text-accent-soft transition hover:bg-accent hover:text-background"
        >
          הצעת מחיר
        </a>
      </header>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 md:px-12">
        <p className="mb-4 text-sm tracking-[0.3em] text-accent">
          בר קוקטיילים לאירועים
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-black leading-[1.1] md:text-7xl">
          הבר שהאורחים שלכם
          <br />
          <span className="text-accent-soft">יזכרו אחרי האירוע</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          אירועי חברה, השקות, הייטק וחתונות שטח. קוקטיילים מוקפדים, צוות מקצועי
          והפקה שמתאימה את עצמה אליכם.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-accent px-8 py-3 font-medium text-background transition hover:bg-accent-soft"
          >
            קבלו הצעת מחיר
          </a>
          <a
            href="#gallery"
            className="rounded-full border border-foreground/30 px-8 py-3 transition hover:border-accent-soft"
          >
            לצפייה בגלריה
          </a>
        </div>
      </div>

      <ClientLogos />
    </section>
  );
}
