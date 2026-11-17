import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { BAR_PILLARS, SERVICES } from "@/content/site";
import { CocktailIcon, ShakerIcon, TeamIcon } from "./Icons";

const ICONS = [CocktailIcon, TeamIcon, ShakerIcon];

export default function Services() {
  return (
    <section id="services" className="on-cream bg-cream px-6 py-24 text-brown md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Bar Services"
            title="שירותי הבר שלנו"
            lead="טריו בר היא חברה המתמחה באירועי יוקרה, בחוויות אלכוהול מוקפדות ובשירות אישי וחם. שלושה שותפים, ברמנים ואנשי הפקה, עם ניסיון עשיר ואהבה אמיתית למקצוע."
          />
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 100}>
              <h3 className="font-display text-2xl font-bold">{s.title}</h3>
              <span className="mt-3 block h-px w-12 bg-bronze" aria-hidden />
              <p className="mt-4 leading-relaxed text-ink-muted">{s.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {BAR_PILLARS.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.title} delay={i * 100} className="rounded-2xl border border-bronze/40 bg-cream-2 p-8">
                <Icon className="h-10 w-10 text-bronze" />
                <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-bronze" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
