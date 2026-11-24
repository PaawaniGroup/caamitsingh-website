import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { photos, services, servicesIntro } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Taxation, Audit & Compliance Services in Roorkee",
  "Six practice areas: taxation and GST, audit and assurance, real estate approvals, company law, trademarks, and finance and statutory compliance, in Roorkee, Uttarakhand.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Practice areas" title={servicesIntro.heading} sub={servicesIntro.subheading} crumbs={[{ label: "Services" }]} />

      <section className="section pb-8">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div className="space-y-5">
              {servicesIntro.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
            <Photo photo={photos.desk} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>

          {/* Jump links */}
          <nav aria-label="Jump to a practice area" className="mt-10">
            <ul className="flex flex-wrap gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <a href={`#${s.slug}`} className="flex min-h-[44px] items-center gap-2 rounded-sm border border-line bg-surface px-5 py-2 text-sm font-medium text-ink transition hover:border-ink/40 hover:text-ink">
                    <Icon name={s.icon} className="h-4 w-4 text-muted" /> {s.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Stacked service blocks */}
      <section className="section pt-8">
        <div className="container space-y-8">
          {services.map((s) => (
            <Reveal key={s.slug}>
              <article id={s.slug} className="card grid gap-8 p-7 md:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
                <div>
                  <span className="flex h-16 w-16 items-center justify-center rounded-sm bg-navy text-steel">
                    <Icon name={s.icon} className="h-8 w-8" strokeWidth={1.25} />
                  </span>
                  <p className="eyebrow mt-6">Practice area {s.number}</p>
                  <h2 className="mt-2 text-3xl">{s.title}</h2>
                  <p className="mt-2 text-sm font-medium text-muted">{s.tagline}</p>
                  <p className="mt-4">{s.intro[0]}</p>
                  <Link href={`/services/${s.slug}`} className="btn btn-navy mt-6">
                    Explore More<span className="sr-only"> about {s.title}</span> <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <ul className="space-y-3 self-center">
                  {s.subServices.map((sub) => (
                    <li key={sub.title} className="flex gap-3 rounded-sm border border-line bg-bg px-5 py-4">
                      <span className="mt-[0.8em] h-px w-4 shrink-0 bg-brass" aria-hidden="true" />
                      <span><strong className="font-semibold text-ink">{sub.title}</strong></span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
