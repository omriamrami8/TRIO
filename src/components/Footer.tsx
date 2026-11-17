import Image from "next/image";
import { CONTACT, NAV } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-espresso px-6 py-14 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-start">
        <Image src="/images/logo-full.png" alt="TRIO – Luxury Events & Hospitality" width={160} height={137} className="h-auto w-36" />
        <nav aria-label="ניווט תחתון" className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-light-muted">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-champagne">{n.label}</a>
          ))}
        </nav>
        <div className="text-sm text-light-muted">
          <p dir="ltr">{CONTACT.phoneDisplay} · {CONTACT.email}</p>
          <p className="mt-1" dir="ltr">{CONTACT.instagramHandle}</p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-light-muted/70">
        © {new Date().getFullYear()} TRIO BAR. כל הזכויות שמורות.
      </p>
    </footer>
  );
}
