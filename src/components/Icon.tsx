import {
  Award, Banknote, Building, Building2, BookOpenCheck, Calculator, ClipboardCheck, Clock, Factory,
  GraduationCap, HardHat, HeartHandshake, HeartPulse, Landmark, Layers, Lock, Scale, ScrollText,
  ShieldCheck, Smile, Stamp, UserCheck, type LucideIcon,
} from "lucide-react";

/**
 * One consistent thin-line icon set (Lucide). Content files refer to icons by name,
 * so editing site.ts never requires touching imports.
 */
const icons: Record<string, LucideIcon> = {
  Award, Banknote, Building, Building2, BookOpenCheck, Calculator, ClipboardCheck, Clock, Factory,
  GraduationCap, HardHat, HeartHandshake, HeartPulse, Landmark, Layers, Lock, Scale, ScrollText,
  ShieldCheck, Smile, Stamp, UserCheck,
};

export function Icon({ name, className = "h-6 w-6", strokeWidth = 1.5 }: { name: string; className?: string; strokeWidth?: number }) {
  const Cmp = icons[name] ?? ShieldCheck;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
