import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";
import { HairlineGrid } from "./Decor";
import { Reveal } from "./Reveal";
import { firm, type Service } from "@/data/site";

/** Eyebrow + serif heading + gold hairline. */
export function SectionHeading({
  eyebrow, title, intro, center = false, light = false,
}: { eyebrow?: string; title: string; intro?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow ${light ? "!text-gold" : ""}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl md:text-4xl ${light ? "!text-white" : ""}`}>{title}</h2>
      <span className={`gold-rule mt-5 ${center ? "mx-auto" : ""}`} aria-hidden="true" />
      {intro && <p className={`mt-5 text-lg ${light ? "text-white/80" : ""}`}>{intro}</p>}
    </div>
  );
}

/** Service card: icon, title, tagline, three key sub-services. Icon flips to gold-on-navy on hover. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card card-hover group flex h-full flex-col p-8 hover:border-gold/60"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold/50 bg-bg text-gold-text transition-colors duration-300 group-hover:bg-navy group-hover:text-gold">
        <Icon name={service.icon} className="h-7 w-7" strokeWidth={1.25} />
      </span>
      <h3 className="mt-6 text-2xl">{service.title}</h3>
      <p className="mt-2 text-sm font-medium text-gold-text">{service.tagline}</p>
      <ul className="mt-5 space-y-2 text-[0.95rem]">
        {service.subServices.slice(0, 3).map((s) => (
          <li key={s.title} className="flex gap-2">
            <span className="mt-[0.7em] h-px w-3 shrink-0 bg-gold" aria-hidden="true" />
            {s.title}
          </li>
        ))}
      </ul>
      <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-ink group-hover:text-gold-text">
        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}

/** Closing navy band carrying the signature line. Informational: links to the contact page only. */
export function CtaBand({ title = "Your Trust. Our Expertise. Your Growth.", text, label = "Get in Touch" }: { title?: string; text?: string; label?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-center text-white">
      <HairlineGrid />
      <Reveal className="container relative">
        <p className="eyebrow !text-gold">{firm.name}</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-balance font-display text-3xl italic !text-gold md:text-5xl">{title}</h2>
        {text && <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">{text}</p>}
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn btn-gold">{label}</Link>
          <Link href="/services" className="btn btn-outline-light">Explore Services</Link>
        </div>
      </Reveal>
    </section>
  );
}
