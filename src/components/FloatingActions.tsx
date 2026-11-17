import { whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./Icons";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col gap-3">
      <a
        href={whatsappLink("היי, אשמח לקבל הצעת מחיר לאירוע")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="שלחו לנו הודעה בוואטסאפ"
        className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
