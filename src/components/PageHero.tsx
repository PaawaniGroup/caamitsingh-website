import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

/** Navy inner-page hero with breadcrumb, H1 and optional sub-tagline. */
export function PageHero({ title, sub, eyebrow, crumbs }: { title: string; sub?: string; eyebrow?: string; crumbs: Crumb[] }) {
  return (
    <section className="bg-rose">
      <div className="container pb-14 pt-10 md:pb-20 md:pt-14">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-body">
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
                {c.href && i < crumbs.length - 1 ? (
                  <Link href={c.href} className="hover:text-ink">{c.label}</Link>
                ) : (
                  <span aria-current="page" className="text-ink">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow hero-in">{eyebrow}</p>}
        <h1 className="hero-in mt-3 max-w-3xl text-4xl md:text-5xl">{title}</h1>
        {sub && <p className="hero-in-2 mt-5 max-w-2xl text-lg text-body">{sub}</p>}
        <span className="brass-rule mt-8" aria-hidden="true" />
      </div>
    </section>
  );
}
