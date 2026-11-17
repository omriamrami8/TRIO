import Image from "next/image";
import { CONTACT, NAV, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./Icons";

export default function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-12">
        <a href="#top" aria-label="TRIO BAR – לראש העמוד" className="flex items-center gap-3">
          <Image src="/images/logo-mark.png" alt="" width={886} height={893} className="h-11 w-auto" priority />
          <span className="eyebrow hidden text-champagne sm:block">Trio Bar</span>
        </a>

        <nav aria-label="ניווט ראשי" className="hidden items-center gap-8 text-sm md:flex">
          {NAV.slice(0, -1).map((n) => (
            <a key={n.href} href={n.href} className="text-cream/85 transition hover:text-champagne">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink("היי, אשמח לקבל הצעת מחיר לאירוע")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-champagne/50 px-4 py-2 text-sm text-champagne transition hover:bg-champagne hover:text-espresso sm:flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-champagne px-5 py-2 text-sm font-medium text-espresso transition hover:bg-cream"
          >
            הצעת מחיר
          </a>
          <details className="relative md:hidden">
            <summary
              aria-label="תפריט"
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-champagne/40 text-champagne [&::-webkit-details-marker]:hidden"
            >
              <span aria-hidden className="block h-3 w-4 border-y border-current" />
            </summary>
            <nav
              aria-label="ניווט נייד"
              className="absolute end-0 mt-3 flex w-52 flex-col rounded-2xl border border-bronze/40 bg-brown/95 p-3 backdrop-blur"
            >
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="rounded-lg px-3 py-2.5 text-cream hover:bg-brown-2">
                  {n.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
