import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { SAMPLE_COCKTAILS } from "@/content/site";

export default function CocktailMenu() {
  return (
    <section id="menu" className="on-cream bg-cream px-6 py-24 text-brown md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-bronze/50 sm:aspect-[3/1] lg:aspect-[4/1]">
          <Image
            src="/images/cocktail-spritz.webp"
            alt="קוקטיילים עם שפת מלח ופלח לימון"
            fill
            sizes="(min-width:1280px) 1280px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Cocktail Bar"
              title="בר קוקטיילים"
              lead="תפריט קוקטיילים ייחודי שנבנה בידי צוות מיקסולוגים יצירתי ומנוסה. כל קוקטייל הוא עולם של טעמים, ניחוחות וצבעים, מהאפרול שפריץ הקלאסי ועד שילובים מפתיעים כמו Cosmo Lichi ו-Basil Smash. לכל אירוע נבנה תפריט בהתאמה אישית, לפי הסגנון והקונספט."
            />
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-bronze/50 bg-cream-2 p-8">
            <h3 className="mb-6 text-center text-sm font-bold">תפריט קוקטיילים לדוגמה</h3>
            <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {SAMPLE_COCKTAILS.map((c) => (
                <li key={c.name} className="text-center">
                  <p className="eyebrow !text-base !tracking-[0.2em] text-brown" dir="ltr">
                    {c.name}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{c.ingredients}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
