import { MapPin } from "lucide-react";
import { contact, firm } from "@/data/site";

/** Shows the Google Map when contact.mapEmbedUrl is set, otherwise a tidy placeholder. */
export function MapPlaceholder({ className = "h-64" }: { className?: string }) {
  if (contact.mapEmbedUrl) {
    return (
      <iframe
        title={`Map showing the ${firm.name} office in ${firm.city}`}
        src={contact.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`w-full rounded-xl border border-line ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label="Map placeholder. The office map will appear here."
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-navy-800 ${className}`}
    >
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="map-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="#C9A24A" strokeOpacity="0.35" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)" />
        <path d="M-10 120 C 90 60, 180 190, 300 110 S 460 60, 560 140" fill="none" stroke="#C9A24A" strokeOpacity="0.5" strokeWidth="1.5" />
      </svg>
      <div className="relative flex flex-col items-center gap-2 text-center text-white">
        <MapPin className="h-8 w-8 text-gold" strokeWidth={1.5} aria-hidden="true" />
        <span className="font-display text-lg">{firm.city}, {firm.region}</span>
        <span className="text-xs uppercase tracking-widest text-white/60">Map placeholder</span>
      </div>
    </div>
  );
}
