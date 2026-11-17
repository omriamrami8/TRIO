import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { FAQ } from "@/content/site";
import { ChevronIcon } from "./Icons";

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section id="faq" className="on-cream bg-cream px-6 py-24 text-brown md:px-12 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading center tone="light" eyebrow="FAQ" title="שאלות נפוצות" />
        </Reveal>
        <div className="mt-12 divide-y divide-bronze/30 border-y border-bronze/30">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronIcon className="h-5 w-5 shrink-0 text-bronze transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 leading-relaxed text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
