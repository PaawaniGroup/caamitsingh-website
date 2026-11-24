import { ExternalLink } from "lucide-react";
import { contact, firm } from "@/data/site";

/** Embedded Google Map of the office, with a plain link for visitors who want directions. */
export function OfficeMap({ className = "h-64", onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <div>
      <iframe
        title={`Map showing the ${firm.name} office, ${contact.addressLines[0]}, ${firm.city}`}
        src={contact.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`w-full rounded-sm border bg-band ${onDark ? "border-white/15" : "border-line"} ${className}`}
      />
      <a
        href={contact.mapLinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-3 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium ${onDark ? "text-steel hover:text-white" : "text-ink underline underline-offset-4"}`}
      >
        Open in Google Maps <ExternalLink className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}
