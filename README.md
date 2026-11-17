# TRIO BAR

אתר תדמית ולידים לשירותי בר קוקטיילים לאירועים. Next.js (App Router) + TypeScript + Tailwind, עברית RTL.

## פיתוח

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # בדיקת בילד מלא
```

כל התוכן (טלפון, חבילות, תפריט, שאלות נפוצות) נמצא ב-`src/content/site.ts`.

## פריסה ל-Vercel

1. ב-[vercel.com/new](https://vercel.com/new) בוחרים **Import Git Repository** ומחברים את `nurielchaimi/TRIO`.
2. מגדירים Production Branch (הענף שממנו מפרסמים, למשל `main`). ה-Framework מזוהה אוטומטית כ-Next.js, אין צורך בהגדרות בילד.
3. **Settings → Domains**: מוסיפים את הדומיין ומעדכנים ב-DNS לפי ההוראות של Vercel.
4. **Settings → Environment Variables**: מוסיפים `NEXT_PUBLIC_SITE_URL` עם הדומיין הסופי (ראו `.env.example`), ומפעילים Redeploy.
5. **Settings → Speed Insights**: מפעילים (חינם בחבילה הבסיסית).

עד שמוגדר `NEXT_PUBLIC_SITE_URL` האתר נחסם לאינדוקס (`noindex` ו-`robots.txt` חוסם הכול), כדי שכתובת `*.vercel.app` לא תופיע בגוגל. אחרי שהוגדר, האתר נפתח לאינדוקס, ה-sitemap וה-canonical מצביעים על הדומיין.

## אחרי העלייה לאוויר

- לאמת את הדומיין ב-Google Search Console ולהגיש `/sitemap.xml`.
- לוודא ב-[Rich Results Test](https://search.google.com/test/rich-results) שסכמת העסק והשאלות הנפוצות תקינות.
