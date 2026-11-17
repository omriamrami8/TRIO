/**
 * כתובת האתר הקנונית.
 * סדר עדיפויות: NEXT_PUBLIC_SITE_URL (הדומיין הסופי) → כתובת הפרודקשן של Vercel → localhost.
 */
function normalize(url: string) {
  const withProtocol = /^https?:\/\//.test(url) ? url : `https://${url}`;
  return withProtocol.replace(/\/+$/, "");
}

const explicit = process.env.NEXT_PUBLIC_SITE_URL;
const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = normalize(
  explicit || vercelProd || "http://localhost:3000",
);

/**
 * עד שמוגדר דומיין סופי (NEXT_PUBLIC_SITE_URL) האתר לא אמור להיכנס לאינדקס של גוגל,
 * כדי שכתובת *.vercel.app לא תתחרה בדומיין האמיתי.
 */
export const IS_LIVE = Boolean(explicit);
