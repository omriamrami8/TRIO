import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { EVENT_TYPES } from "@/content/site";

export default function EventTypes() {
  return (
    <section id="events" className="bg-espresso px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Events"
            title="לכל אירוע, הבר המושלם שלו"
            lead="אנחנו מתאימים את התפריט, העמדה והצוות לסוג האירוע ולקהל שלכם, כדי שהבר ישתלב בדיוק באווירה שאתם רוצים ליצור."
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EVENT_TYPES.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 90}>
              <a href="#contact" className="group block overflow-hidden rounded-2xl border border-bronze/30 bg-brown">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={e.image}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brown via-brown/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-champagne">{e.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/80">{e.text}</p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
