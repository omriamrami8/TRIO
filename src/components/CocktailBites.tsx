import Reveal from "./Reveal";
import ParallaxImage from "./ParallaxImage";
import SectionHeading from "./SectionHeading";
import { COCKTAIL_BITES } from "@/content/site";

export default function CocktailBites() {
  return (
    <section id="bites" className="bg-espresso">
      <ParallaxImage
        src="/images/cocktail-bites.webp"
        alt="קוביות ג׳לי אלכוהוליות בצבעים עזים"
        className="h-[42vh] min-h-[260px]"
        speed={0.2}
      />
      <div className="px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Gems & Trio · Cocktail Bites"
              title="לא עוד שוט רגיל"
              lead="קוביות ג׳לי אלכוהוליות בטעמי קוקטיילים נבחרים, שמוסיפות לאירוע נגיעה יוקרתית, צבעונית ומשעשעת."
            />
          </Reveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COCKTAIL_BITES.map((b, i) => (
              <Reveal as="li" key={b.name} delay={(i % 3) * 90} className="rounded-xl border border-bronze/35 bg-brown p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-champagne">{b.name}</h3>
                  <span className="shrink-0 text-xs text-light-muted">אלכוהול {b.abv}</span>
                </div>
                <p className="mt-2 text-sm text-bronze">{b.ingredients}</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/80">{b.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
