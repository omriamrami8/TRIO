export default function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  center = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "dark" | "light";
  center?: boolean;
}) {
  const light = tone === "light";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow mb-4 ${light ? "text-bronze-deep" : "text-bronze"}`}>{eyebrow}</p>
      <h2 className={`font-display text-4xl font-black leading-tight md:text-5xl ${light ? "text-brown" : "text-cream"}`}>
        {title}
      </h2>
      <span className={`mt-5 block h-px w-16 bg-bronze ${center ? "mx-auto" : ""}`} aria-hidden />
      {lead && (
        <p className={`mt-6 text-lg leading-relaxed ${light ? "text-ink-muted" : "text-light-muted"}`}>{lead}</p>
      )}
    </div>
  );
}
