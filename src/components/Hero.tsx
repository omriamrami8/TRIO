import Image from "next/image";
import ClientLogos from "./ClientLogos";
import SiteHeader from "./SiteHeader";
import { ChevronIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-espresso">
      {/*
        TODO: להחליף ב-<video autoPlay muted loop playsInline poster> כשהסרטון יתקבל.
        עד אז: תמונה מהברושור עם תנועה איטית.
      */}
      <div
        aria-hidden
        className="drift absolute inset-0 bg-[radial-gradient(ellipse_at_25%_35%,rgba(169,128,90,0.28)_0%,transparent_55%),radial-gradient(ellipse_at_80%_85%,rgba(230,213,181,0.10)_0%,transparent_50%)]"
      />
      <Image
        src="/images/logo-mark.png"
        alt=""
        aria-hidden
        width={886}
        height={893}
        priority
        className="pointer-events-none absolute -left-16 top-1/2 hidden h-[88%] w-auto -translate-y-1/2 opacity-[0.07] md:block"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/30" />
      <div aria-hidden className="absolute inset-3 border border-bronze/40 md:inset-5" />

      <SiteHeader />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-8 pt-28 md:px-14">
        <p className="eyebrow mb-5 text-champagne/90">Unforgettable Bar Experience</p>
        <h1 className="max-w-3xl font-display text-5xl font-black leading-[1.08] md:text-7xl">
          חוויית בר
          <br />
          <span className="text-champagne">בלתי נשכחת</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
          בר קוקטיילים יוקרתי לאירועים עסקיים, השקות, אירועי חברה וחתונות שטח.
          צוות מקצועי, תפריט אישי ועיצוב מוקפד, בכל פינה בארץ.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-champagne px-8 py-3.5 font-medium text-espresso transition hover:bg-cream"
          >
            קבלו הצעת מחיר
          </a>
          <a
            href="#menu"
            className="rounded-full border border-cream/30 px-8 py-3.5 transition hover:border-champagne hover:text-champagne"
          >
            לתפריט הקוקטיילים
          </a>
        </div>
      </div>

      <a
        href="#events"
        aria-label="המשך לגלילה"
        className="absolute bottom-40 left-1/2 z-10 hidden -translate-x-1/2 text-champagne/70 md:block"
      >
        <ChevronIcon className="h-7 w-7 animate-bounce motion-reduce:animate-none" />
      </a>

      <ClientLogos />
    </section>
  );
}
