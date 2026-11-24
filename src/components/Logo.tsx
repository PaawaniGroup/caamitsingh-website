import Link from "next/link";
import { firm } from "@/data/site";

/** Wordmark: gold "SA&A" monogram + firm name. Replace the monogram box with <Image> when a logo file is ready. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${firm.name} – home`}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/60 bg-navy font-display text-[0.95rem] font-semibold tracking-tight text-gold">
        {firm.shortName}
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-display text-lg font-semibold sm:text-xl ${light ? "text-white" : "text-ink"}`}>{firm.name}</span>
        <span className={`hidden text-[0.68rem] font-medium uppercase tracking-[0.16em] sm:block ${light ? "text-gold" : "text-gold-text"}`}>
          {firm.tagline}
        </span>
      </span>
    </Link>
  );
}
