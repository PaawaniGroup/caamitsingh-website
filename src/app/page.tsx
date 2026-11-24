import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Counter } from "@/components/Counter";
import { CtaBand, SectionHeading, ServiceCard } from "@/components/Blocks";
import { CaptionedPhoto, Photo } from "@/components/Photo";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { about, firm, founder, home, lifeAtFirm, photos, services } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Chartered Accountant in Roorkee | Singh Amit & Associates",
  "Chartered Accountants & Legal Advisors in Roorkee, Uttarakhand: audit, income tax, GST, company registration, ROC compliance and business advisory under one roof.",
  "/",
  { absolute: true },
);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-rose">
        <div className="container grid items-center gap-10 pb-14 pt-14 md:pb-20 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="eyebrow hero-in">{home.hero.eyebrow}</p>
            <h1 className="hero-in-2 mt-5 text-4xl sm:text-5xl">{home.hero.title}</h1>
            <span className="brass-rule mt-6" aria-hidden="true" />
            <p className="hero-in-3 mt-6 max-w-2xl text-lg text-muted">{home.hero.sub}</p>
            <div className="hero-in-3 mt-9 flex flex-wrap gap-4">
              <Link href="/services" className="btn btn-primary">Explore Services</Link>
              <Link href="/contact" className="btn btn-outline">Book a Consultation</Link>
            </div>
          </div>
          <div className="hero-in-3">
            <Photo photo={photos.corridor} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 40vw, 100vw" priority />
          </div>
        </div>

        {/* Facts band */}
        <dl aria-label="The firm at a glance" className="border-t border-ink/10 bg-sage">
          <div className="container grid grid-cols-2 md:grid-cols-4">
            {home.stats.map((st, i) => (
              <div key={st.label} className={`flex flex-col px-4 py-7 text-center md:py-9 ${i % 2 === 1 ? "border-l border-ink/10" : ""} ${i > 0 ? "md:border-l md:border-ink/10" : ""} ${i > 1 ? "border-t border-ink/10 md:border-t-0" : ""}`}>
                <dd className="order-1 font-display text-3xl font-semibold text-ink md:text-4xl">
                  {st.value !== undefined ? <Counter to={st.value} suffix={st.suffix} /> : <span className="text-xl md:text-2xl">{st.text}</span>}
                </dd>
                <dt className="order-2 mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-body">{st.label}</dt>
              </div>
            ))}
          </div>
        </dl>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Photo photo={photos.workstations} ratio="aspect-[5/4]" />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="About the firm" title={`About ${firm.name}`} />
            <p className="mt-6">{about.paragraphs[0]}</p>
            <p className="mt-4">{about.paragraphs[2]}</p>
            <Link href="/about" className="btn btn-primary mt-8">Read More<span className="sr-only"> about {firm.name}</span> <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section bg-lilac">
        <div className="container">
          <Reveal>
            <SectionHeading center eyebrow="Practice areas" title="Our Professional Services" intro="Financial, taxation, legal and business advisory solutions from one multidisciplinary team." />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading center eyebrow="Our approach" title={about.whyHeading} intro={about.whyParagraphs[0]} />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {home.whyChooseTiles.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 90}>
                <div className="card card-hover h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary text-on-primary">
                    <Icon name={t.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl">{t.title}</h3>
                  <p className="mt-2 text-[0.95rem]">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PEOPLE */}
      <section aria-labelledby="people-heading" className="relative isolate overflow-hidden bg-band">
        <Photo photo={photos.team} ratio="" sizes="100vw" className="!absolute !inset-0 !rounded-none !border-0" position="center 40%" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/90 to-bg/60 md:via-bg/80 md:to-bg/10" aria-hidden="true" />
        <div className="container relative flex min-h-[420px] items-end pb-10 pt-40 md:min-h-[560px] md:pb-14">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Our people</p>
            <h2 id="people-heading" className="mt-3 text-3xl md:text-4xl">43 professionals and staff under one roof</h2>
            <span className="brass-rule mt-5" aria-hidden="true" />
            <p className="mt-5 text-lg text-muted">Chartered Accountants, Company Secretaries and Advocates working together as one multidisciplinary team.</p>
            <Link href="/team" className="btn btn-primary mt-7">Meet the team <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT */}
      <section className="section bg-sage">
        <div className="container grid items-center gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20">
          <Reveal>
            <Photo photo={photos.founder} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 380px, 90vw" position="0% center" className="mx-auto w-full max-w-sm" />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Founder &amp; Managing Partner</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{founder.name}</h2>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Credentials">
              {founder.badges.map((b) => (
                <li key={b} className="rounded-sm border border-ink/25 px-4 py-1 text-sm font-semibold text-ink">{b}</li>
              ))}
            </ul>
            <figure className="mt-8 border-l-2 border-line pl-6">
              <figcaption className="eyebrow">Professional philosophy</figcaption>
              <blockquote className="mt-3 font-display text-xl leading-relaxed text-ink md:text-2xl">
                {founder.philosophy}
              </blockquote>
            </figure>
            <Link href="/founder" className="btn btn-primary mt-9">View full profile <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading center eyebrow="Sectors" title="Industries Served" intro="Professional experience spanning manufacturing, banking, infrastructure, real estate, education, healthcare, government organisations, and other business sectors." />
          </Reveal>
          <Reveal>
            <ul className="mt-12 flex flex-wrap justify-center gap-4">
              {home.industries.map((i) => (
                <li key={i.label} className="flex min-h-[48px] items-center gap-3 rounded-sm border border-line bg-surface px-6 py-2.5 transition-colors hover:border-ink/40">
                  <Icon name={i.icon} className="h-5 w-5 text-ink" />
                  <span className="font-medium text-ink">{i.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-band">
        <div className="container">
          <Reveal>
            <SectionHeading center eyebrow="How we work" title="Our Process" />
          </Reveal>
          <ol className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-5">
            {home.process.map((p, i) => (
              <Reveal key={p.title} as="li" delay={i * 90} className="border-t-2 border-ink pt-5">
                <span className="font-display text-2xl text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl">{p.title}</h3>
                <p className="mt-2 text-[0.92rem]">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* EVENTS & GATHERINGS */}
      <section className="section">
        <div className="container">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow={lifeAtFirm.eyebrow} title={lifeAtFirm.heading} intro={lifeAtFirm.intro} />
            <Link href="/about#life-at-the-firm" className="btn btn-outline">View all<span className="sr-only"> events and gatherings</span> <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[photos.wofa, photos.training, photos.diwaliSeated].map((p, i) => (
              <Reveal key={p.src} delay={i * 90}>
                <CaptionedPhoto photo={p} ratio="aspect-[4/3]" sizes="(min-width: 768px) 33vw, 100vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
