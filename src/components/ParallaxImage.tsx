"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  speed?: number;
  priority?: boolean;
  sizes?: string;
};

/** תמונה עם תנועת עומק עדינה בגלילה. מכבדת prefers-reduced-motion. */
export default function ParallaxImage({
  src,
  alt = "",
  className = "",
  speed = 0.12,
  priority,
  sizes = "100vw",
}: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const w = wrap.current;
      const i = img.current;
      if (!w || !i) return;
      const r = w.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -100 || r.top > vh + 100) return;
      const progress = (r.top + r.height / 2 - vh / 2) / vh;
      i.style.transform = `translate3d(0, ${(-progress * speed * 100).toFixed(2)}px, 0) scale(1.15)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={wrap} className={`relative overflow-hidden ${className}`}>
      <div ref={img} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.15)" }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    </div>
  );
}
