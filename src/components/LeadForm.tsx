"use client";

import { useState } from "react";
import { CONTACT, EVENT_TYPE_OPTIONS, PACKAGE_OPTIONS, whatsappLink } from "@/content/site";
import { MailIcon, WhatsAppIcon } from "./Icons";

type Errors = Partial<Record<"name" | "phone" | "email", string>>;

const field =
  "w-full rounded-lg border border-bronze/40 bg-cream px-4 py-3 text-brown placeholder:text-ink-muted/60 focus:border-bronze focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze/40";
const label = "mb-1.5 block text-sm font-medium text-brown";

function formatDate(v: string) {
  if (!v) return "";
  const [y, m, d] = v.split("-");
  return `${d}/${m}/${y}`;
}

export default function LeadForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<{ wa: string; mail: string } | null>(null);
  const today = new Date().toISOString().split("T")[0];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();

    const next: Errors = {};
    if (v("name").length < 2) next.name = "נא למלא שם מלא";
    const digits = v("phone").replace(/\D/g, "");
    if (digits.length < 9 || digits.length > 12) next.phone = "נא להזין מספר טלפון תקין";
    if (v("email") && !/^\S+@\S+\.\S+$/.test(v("email"))) next.email = "כתובת המייל אינה תקינה";
    setErrors(next);
    if (Object.keys(next).length) {
      (e.currentTarget.querySelector("[aria-invalid='true']") as HTMLElement | null)?.focus();
      return;
    }

    const lines = [
      "היי TRIO BAR, אשמח לקבל הצעת מחיר לאירוע:",
      `שם: ${v("name")}`,
      `טלפון: ${v("phone")}`,
      v("email") && `מייל: ${v("email")}`,
      `סוג אירוע: ${v("eventType") || "לא צוין"}`,
      v("date") && `תאריך: ${formatDate(v("date"))}`,
      v("guests") && `מספר אורחים: ${v("guests")}`,
      v("location") && `מיקום: ${v("location")}`,
      v("package") && `חבילה: ${v("package")}`,
      v("notes") && `דרישות נוספות: ${v("notes")}`,
    ].filter(Boolean) as string[];
    const text = lines.join("\n");

    const wa = whatsappLink(text);
    const mail = `mailto:${CONTACT.email}?subject=${encodeURIComponent("בקשה להצעת מחיר לאירוע")}&body=${encodeURIComponent(text)}`;

    // TODO (שלב Supabase): לשמור את הליד בבסיס הנתונים לפני הפתיחה של וואטסאפ.
    window.open(wa, "_blank", "noopener,noreferrer");
    setDone({ wa, mail });
  }

  if (done) {
    return (
      <div role="status" className="rounded-2xl border border-bronze/50 bg-cream p-8 text-center text-brown">
        <p className="font-display text-3xl font-black">תודה, הפרטים מוכנים לשליחה</p>
        <p className="mt-4 leading-relaxed text-ink-muted">
          פתחנו עבורכם הודעת וואטסאפ מוכנה לסוכן המכירות שלנו. רק לוחצים &quot;שלח&quot; והוא יחזור אליכם בהקדם.
          אם החלון לא נפתח, אפשר לשלוח בלחיצה על הכפתורים:
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={done.wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brown px-6 py-3 text-cream transition hover:bg-brown-2"
          >
            <WhatsAppIcon className="h-5 w-5" /> שליחה בוואטסאפ
          </a>
          <a
            href={done.mail}
            className="inline-flex items-center gap-2 rounded-full border border-brown px-6 py-3 transition hover:bg-brown hover:text-cream"
          >
            <MailIcon className="h-5 w-5" /> שליחה במייל
          </a>
        </div>
        <button type="button" onClick={() => setDone(null)} className="mt-6 text-sm text-ink-muted underline">
          חזרה לטופס
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="on-cream rounded-2xl border border-bronze/50 bg-cream-2 p-6 text-brown md:p-8"
      aria-label="טופס פרטי אירוע"
    >
      <h3 className="font-display text-2xl font-bold">פרטי האירוע</h3>
      <p className="mt-1 text-sm text-ink-muted">ככל שנדע יותר, ההצעה תהיה מדויקת יותר. שדות עם * הם חובה.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>שם מלא *</label>
          <input id="name" name="name" autoComplete="name" required aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined} className={field} />
          {errors.name && <p id="err-name" className="mt-1 text-sm text-red-700">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={label}>טלפון *</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr"
            placeholder="05X-XXXXXXX" required aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "err-phone" : undefined} className={`${field} text-end`} />
          {errors.phone && <p id="err-phone" className="mt-1 text-sm text-red-700">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className={label}>אימייל</label>
          <input id="email" name="email" type="email" autoComplete="email" dir="ltr" aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined} className={`${field} text-end`} />
          {errors.email && <p id="err-email" className="mt-1 text-sm text-red-700">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="eventType" className={label}>סוג אירוע</label>
          <select id="eventType" name="eventType" defaultValue="" className={field}>
            <option value="" disabled>בחרו סוג אירוע</option>
            {EVENT_TYPE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="date" className={label}>תאריך האירוע</label>
          <input id="date" name="date" type="date" min={today} className={field} />
        </div>
        <div>
          <label htmlFor="guests" className={label}>כמות אורחים</label>
          <input id="guests" name="guests" type="number" inputMode="numeric" min={1} max={20000} className={field} />
        </div>
        <div>
          <label htmlFor="location" className={label}>מיקום האירוע</label>
          <input id="location" name="location" placeholder="עיר / שם המקום" className={field} />
        </div>
        <div>
          <label htmlFor="package" className={label}>חבילה מבוקשת</label>
          <select id="package" name="package" defaultValue="" className={field}>
            <option value="">לא משנה / עדיין לא בטוח</option>
            {PACKAGE_OPTIONS.slice(1).map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="notes" className={label}>דרישות נוספות</label>
          <textarea id="notes" name="notes" rows={4} className={`${field} resize-none`}
            placeholder="עמדות קונספט, בר קפה, קוקטיילים מיוחדים, שעות פעילות, כל דבר שחשוב לכם..." />
        </div>
      </div>

      <button type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brown px-8 py-4 font-medium text-cream transition hover:bg-brown-2">
        <WhatsAppIcon className="h-5 w-5" />
        שלחו פרטים וקבלו הצעת מחיר
      </button>
      <p className="mt-3 text-center text-xs text-ink-muted">
        לחיצה תפתח הודעת וואטסאפ מוכנה עם כל הפרטים לסוכן המכירות שלנו.
      </p>
    </form>
  );
}
