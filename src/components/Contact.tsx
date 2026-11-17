import Reveal from "./Reveal";
import LeadForm from "./LeadForm";
import SectionHeading from "./SectionHeading";
import { CONTACT, whatsappLink } from "@/content/site";
import { InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

const quick = "group flex items-center gap-4 rounded-xl border border-bronze/40 bg-brown-2/60 p-4 transition hover:border-champagne hover:bg-brown-2";

export default function Contact() {
  return (
    <section id="contact" className="bg-brown px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Contact Us"
              title="בואו נבנה יחד את חוויית הבר שלכם"
              lead="נשמח ללוות את האירוע שלכם, בכל פינה בארץ. השאירו פרטים ונחזור עם הצעת מחיר מותאמת, או דברו איתנו ישירות."
            />
          </Reveal>
          <Reveal delay={120} className="mt-10 space-y-3">
            <a href={whatsappLink("היי, אשמח לקבל הצעת מחיר לאירוע")} target="_blank" rel="noopener noreferrer" className={quick}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne text-espresso">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-medium">וואטסאפ לסוכן מכירות</span>
                <span className="block text-sm text-light-muted" dir="ltr">{CONTACT.phoneDisplay}</span>
              </span>
            </a>
            <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className={quick}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne text-champagne">
                <InstagramIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-medium">אינסטגרם</span>
                <span className="block text-sm text-light-muted" dir="ltr">{CONTACT.instagramHandle}</span>
              </span>
            </a>
            <a href={CONTACT.phoneTel} className={quick}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne text-champagne">
                <PhoneIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-medium">שיחת טלפון</span>
                <span className="block text-sm text-light-muted" dir="ltr">{CONTACT.phoneDisplay}</span>
              </span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className={quick}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-champagne text-champagne">
                <MailIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-medium">אימייל</span>
                <span className="block text-sm text-light-muted" dir="ltr">{CONTACT.email}</span>
              </span>
            </a>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
