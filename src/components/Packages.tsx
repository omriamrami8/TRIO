import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PACKAGES, PACKAGES_NOTE } from "@/content/site";

export default function Packages() {
  return (
    <section id="packages" className="on-cream bg-cream-2 px-6 py-24 text-brown md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            center
            tone="light"
            eyebrow="Packages"
            title="חבילות בר"
            lead="שלוש חבילות בר, מהבסיס המוקפד ועד הדרגה הבכירה ביותר. כל חבילה ניתנת להתאמה אישית."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 100}
              className={`rounded-2xl border p-8 ${
                p.featured
                  ? "border-brown bg-brown text-cream lg:-my-4 lg:py-12"
                  : "border-bronze/50 bg-cream"
              }`}
            >
              <h3
                className={`eyebrow !text-xl border-b pb-5 text-center ${
                  p.featured ? "border-bronze/60 text-champagne" : "border-bronze/50 text-brown"
                }`}
                dir="ltr"
              >
                {p.name}
              </h3>
              <dl className="mt-6 space-y-5">
                {p.rows.map(([cat, items]) => (
                  <div key={cat}>
                    <dt className={`text-sm font-bold ${p.featured ? "text-bronze" : "text-bronze-deep"}`}>{cat}</dt>
                    <dd className={`mt-1 text-sm leading-relaxed ${p.featured ? "text-cream/90" : "text-ink-muted"}`}>
                      {items}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href="#contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-medium transition ${
                  p.featured
                    ? "bg-champagne text-espresso hover:bg-cream"
                    : "border border-brown text-brown hover:bg-brown hover:text-cream"
                }`}
              >
                קבלו הצעה לחבילה
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-ink-muted">{PACKAGES_NOTE}</p>
      </div>
    </section>
  );
}
