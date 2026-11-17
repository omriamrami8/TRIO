import Reveal from "./Reveal";
import ParallaxImage from "./ParallaxImage";
import SectionHeading from "./SectionHeading";
import { CONCEPT_STATIONS } from "@/content/site";

export default function Concepts() {
  return (
    <section id="concepts" className="relative overflow-hidden bg-brown">
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
        <div className="px-6 py-24 md:px-12 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Concepts"
              title="עמדות קונספט"
              lead="אופציונלי, בתוספת תשלום. אפשר לשלב, לפי בחירתכם, עמדה אחת או יותר, כדי להפוך את הבר לאטרקציה של האירוע."
            />
          </Reveal>
          <ul className="mt-10 space-y-4">
            {CONCEPT_STATIONS.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 80} className="flex items-start gap-4 text-lg">
                <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-bronze" />
                {c}
              </Reveal>
            ))}
          </ul>
        </div>
        <ParallaxImage
          src="/images/champagne-tower.webp"
          alt="מגדל שמפניות באירוע"
          className="min-h-[360px] lg:min-h-full"
          sizes="(min-width:1024px) 50vw, 100vw"
        />
      </div>
    </section>
  );
}
