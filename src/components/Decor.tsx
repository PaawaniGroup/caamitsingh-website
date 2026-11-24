import { Icon } from "./Icon";

/** Flat pastel placeholder shown where a photograph has not been supplied yet (people show initials). */
export function PhotoPlaceholder({
  label, icon = "Building2", initials, className = "aspect-[4/5]",
}: { label: string; icon?: string; initials?: string; className?: string }) {
  return (
    <div role="img" aria-label={label} className={`relative flex items-center justify-center overflow-hidden rounded-sm bg-sage ${className}`}>
      {initials ? (
        <span className="font-display text-6xl font-semibold text-primary sm:text-7xl">{initials}</span>
      ) : (
        <Icon name={icon} className="h-16 w-16 text-primary" strokeWidth={1} />
      )}
      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-brass" aria-hidden="true" />
    </div>
  );
}
