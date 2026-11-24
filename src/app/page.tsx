import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Counter } from "@/components/Counter";
import { CtaBand, SectionHeading, ServiceCard } from "@/components/Blocks";
import { HairlineGrid, PhotoPlaceholder, Skyline } from "@/components/Decor";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { about, firm, founder, home, services } from "@/data/site";
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
      <section className="relative overflow-hidden bg-navy text-white">
        <HairlineGrid />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy-700/70" aria-hidden="true" />
        <Skyline />
        <div className="container relative pb-32 pt-20 md:pb-44 md:pt-28">
          <p className="eyebrow !text-gold hero-in">{home.hero.eyebrow}</p>
          <h1 className="hero-in-2 mt-5 max-w-4xl text-4xl !text-white sm:text-5xl md:text-6xl">{home.hero.title}</h1>
          <p className="hero-in-3 mt-6 max-w-2xl text-lg text-white/80 md:text-xl">{home.hero.sub}</p>
          <div className="hero-in-3 mt-10 flex flex-wrap gap-4">
            <Link href="/services" className="btn btn-gold">Explore Services</Link>
            <Link href="/contact" className="btn btn-outline-light">Book a Consultation</Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section aria-label="The firm at a glance" className="relative z-10 -mt-14">
        <div className="container">
          <dl className="card grid grid-cols-2 gap-y-8 px-6 py-8 shadow-lift md:grid-cols-4 md:py-10">
            {home.stats.map((s, i) => (
              <div key={s.label} className={`flex flex-col text-center ${i > 0 ? "md:border-l md:border-line" : ""}`}>
                <dt className="order-2 mt-2 px-2 text-xs font-semibold uppercase tracking-[0.14em] text-body">{s.label}</dt>
                <dd className="font-display text-3xl font-semibold text-ink md:text-4xl">
                  {s.value !== undefined ? <Counter to={s.value} suffix={s.suffix} /> : <span className="text-xl md:text-2xl">{s.text}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <PhotoPlaceholder label="Office photo placeholder" icon="Building2" className="aspect-[5/4]" />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="About the firm" title={`About ${firm.name}`} />
            <p className="mt-6">{about.paragraphs[0]}</p>
            <p className="mt-4">{about.paragraphs[2]}</p>
            <Link href="/about" className="btn btn-navy mt-8">Read More<span className="sr-only"> about {firm.name}</span> <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section bg-surface/60">
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold">
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

      {/* FOUNDER SPOTLIGHT */}
      <section className="section relative overflow-hidden bg-navy text-white">
        <HairlineGrid />
        <div className="container relative grid items-center gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20">
          <Reveal>
            <PhotoPlaceholder label="Photo placeholder for CA Amit Singh" initials={founder.initials} className="mx-auto aspect-[4/5] w-full max-w-sm" />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow !text-gold">Founder &amp; Managing Partner</p>
            <h2 className="mt-3 text-3xl !text-white md:text-4xl">{founder.name}</h2>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Credentials">
              {founder.badges.map((b) => (
                <li key={b} className="rounded-full border border-gold/60 px-4 py-1 text-sm font-semibold text-gold">{b}</li>
              ))}
            </ul>
            <figure className="mt-8 border-l-2 border-gold pl-6">
              <figcaption className="eyebrow !text-gold">Professional philosophy</figcaption>
              <blockquote className="mt-3 font-display text-xl italic leading-relaxed text-white/90 md:text-2xl">
                {founder.philosophy}
              </blockquote>
            </figure>
            <Link href="/founder" className="btn btn-gold mt-9">View full profile <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
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
                <li key={i.label} className="flex min-h-[48px] items-center gap-3 rounded-full border border-line bg-surface px-6 py-2.5 shadow-card transition hover:border-gold">
                  <Icon name={i.icon} className="h-5 w-5 text-gold-text" />
                  <span className="font-medium text-ink">{i.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-surface/60">
        <div className="container">
          <Reveal>
            <SectionHeading center eyebrow="How we work" title="Our Process" />
          </Reveal>
          <ol className="relative mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
            <span className="absolute left-0 right-0 top-6 hidden h-px bg-gold/50 md:block" aria-hidden="true" />
            {home.process.map((p, i) => (
              <Reveal key={p.title} as="li" delay={i * 90} className="relative text-center">
                <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-navy font-display text-lg text-gold">{i + 1}</span>
                <h3 className="mt-5 text-xl">{p.title}</h3>
                <p className="mt-2 text-[0.92rem]">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
