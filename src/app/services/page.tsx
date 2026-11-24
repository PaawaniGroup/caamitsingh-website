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

      <section className="section pb-12">
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

      {/* One full section per practice area: overview on the left, every service with its description on the right */}
      {services.map((s, idx) => (
        <section key={s.slug} id={s.slug} className={`section ${idx % 2 === 0 ? "bg-band" : ""}`} aria-labelledby={`${s.slug}-title`}>
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-navy text-steel">
                    <Icon name={s.icon} className="h-7 w-7" strokeWidth={1.25} />
                  </span>
                  <p className="eyebrow">Practice area {String(s.number).padStart(2, "0")} of {String(services.length).padStart(2, "0")}</p>
                </div>
                <h2 id={`${s.slug}-title`} className="mt-5 text-3xl md:text-4xl">{s.title}</h2>
                <span className="brass-rule mt-4" aria-hidden="true" />
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${s.shortTitle} focus areas`}>
                  {s.tagline.split(" | ").map((t) => (
                    <li key={t} className="rounded-sm border border-line bg-surface px-3 py-1 text-sm font-medium text-ink">{t}</li>
                  ))}
                </ul>
                <div className="mt-6 space-y-4">
                  {s.intro.map((p) => <p key={p}>{p}</p>)}
                </div>
                <p className="mt-6 border-l-2 border-brass pl-4 font-display text-lg text-ink">{s.objective}</p>
                <Link href={`/services/${s.slug}`} className="btn btn-navy mt-7">
                  Explore More<span className="sr-only"> about {s.title}</span> <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="eyebrow">{s.includesLead.replace(/:$/, "")}</p>
              <ol className="mt-4 divide-y divide-line rounded-sm border border-line bg-surface">
                {s.subServices.map((sub, i) => (
                  <li key={sub.title} className="flex gap-4 p-5 md:p-6">
                    <span className="font-display text-xl text-muted" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-lg">{sub.title}</h3>
                      <p className="mt-1 text-[0.95rem]">{sub.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
