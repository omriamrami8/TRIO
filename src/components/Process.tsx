import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PROCESS } from "@/content/site";

export default function Process() {
  return (
    <section id="process" className="bg-espresso px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading center eyebrow="How It Works" title="ארבעה שלבים לאירוע מושלם" />
        </Reveal>
        <ol className="mt-14 grid gap-8 md:grid-cols-4">
          {PROCESS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 100} className="relative border-t border-bronze/50 pt-6">
              <span className="font-latin text-5xl text-bronze/70" aria-hidden>0{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl font-bold text-champagne">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-light-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
