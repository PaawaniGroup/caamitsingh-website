import { Icon } from "./Icon";

/**
 * Original decorative artwork (no third-party imagery). Swap for real photography later:
 * put a photo behind the overlay and delete the Skyline.
 */
export function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 220"
      preserveAspectRatio="xMidYMax slice"
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full ${className}`}
    >
      <g fill="#173560" fillOpacity="0.55">
        <rect x="40" y="110" width="70" height="110" /><rect x="120" y="70" width="55" height="150" />
        <rect x="190" y="130" width="80" height="90" /><rect x="300" y="40" width="64" height="180" />
        <rect x="380" y="95" width="90" height="125" /><rect x="490" y="140" width="60" height="80" />
        <rect x="570" y="60" width="72" height="160" /><rect x="660" y="115" width="85" height="105" />
        <rect x="770" y="30" width="58" height="190" /><rect x="850" y="100" width="92" height="120" />
        <rect x="960" y="75" width="66" height="145" /><rect x="1045" y="125" width="80" height="95" />
        <rect x="1145" y="50" width="62" height="170" /><rect x="1225" y="105" width="88" height="115" />
        <rect x="1330" y="85" width="70" height="135" />
      </g>
      <g fill="#C9A24A" fillOpacity="0.5">
        <rect x="312" y="62" width="6" height="6" /><rect x="330" y="62" width="6" height="6" /><rect x="312" y="84" width="6" height="6" />
        <rect x="782" y="52" width="6" height="6" /><rect x="800" y="74" width="6" height="6" /><rect x="782" y="96" width="6" height="6" />
        <rect x="582" y="82" width="6" height="6" /><rect x="1157" y="72" width="6" height="6" /><rect x="1175" y="94" width="6" height="6" />
      </g>
      <rect y="214" width="1440" height="1" fill="#C9A24A" fillOpacity="0.5" />
    </svg>
  );
}

/** Soft gold hairline grid used behind navy sections. */
export function HairlineGrid() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hair" width="64" height="64" patternUnits="userSpaceOnUse">
          <path d="M64 0H0V64" fill="none" stroke="#C9A24A" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hair)" />
    </svg>
  );
}

/** Elegant photo placeholder (office, documents, handshake…). Shows initials for people. */
export function PhotoPlaceholder({
  label, icon = "Building2", initials, className = "aspect-[4/5]",
}: { label: string; icon?: string; initials?: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-700 via-navy to-navy-800 ${className}`}
    >
      <HairlineGrid />
      <div className="absolute inset-3 rounded-xl border border-gold/30" aria-hidden="true" />
      {initials ? (
        <span className="relative font-display text-6xl font-semibold text-gold sm:text-7xl">{initials}</span>
      ) : (
        <Icon name={icon} className="relative h-16 w-16 text-gold" strokeWidth={1} />
      )}
      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/55">
        Photo placeholder
      </span>
    </div>
  );
}
