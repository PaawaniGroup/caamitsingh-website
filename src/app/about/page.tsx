import { CtaBand, SectionHeading } from "@/components/Blocks";
import { CaptionedPhoto, Photo } from "@/components/Photo";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { about, firm, lifeAtFirm, photos } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "About Us | Chartered Accountants in Roorkee, Uttarakhand",
  "About Singh Amit & Associates, a Chartered Accountancy firm in Roorkee, Uttarakhand with a multidisciplinary team of CAs, Company Secretaries and Advocates.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={firm.name} title={about.heading} sub={about.subheading} crumbs={[{ label: "About Us" }]} />

      <div className="container -mt-px pt-12 md:pt-16">
        <Reveal><Photo photo={photos.team} ratio="aspect-[16/9] md:aspect-[21/9]" sizes="(min-width: 1240px) 1176px, 100vw" position="center 40%" priority /></Reveal>
      </div>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal className="space-y-5">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
          <Reveal delay={100}>
            <aside className="card p-7" aria-labelledby="glance">
              <h2 id="glance" className="text-2xl">At a glance</h2>
              <span className="brass-rule mt-3" aria-hidden="true" />
              <dl className="mt-5 divide-y divide-line">
                {about.facts.map((f) => (
                  <div key={f.label} className="grid gap-1 py-3 sm:grid-cols-[1fr_1.3fr]">
                    <dt className="text-sm font-semibold text-ink">{f.label}</dt>
                    <dd className="text-[0.95rem]">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section bg-band">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Our approach" title={about.whyHeading} />
            <div className="mt-6 space-y-5">
              {about.whyParagraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
            <p className="mt-8 font-display text-2xl text-muted">{firm.signature}</p>
          </Reveal>
          <Reveal delay={100}>
            <Photo photo={photos.meeting} ratio="aspect-[5/4]" />
          </Reveal>
        </div>
      </section>

      <section id="life-at-the-firm" className="section">
        <div className="container">
          <Reveal><SectionHeading eyebrow={lifeAtFirm.eyebrow} title={lifeAtFirm.heading} intro={lifeAtFirm.intro} /></Reveal>
          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {lifeAtFirm.items.map((p, i) => (
              <Reveal key={p.src} delay={(i % 3) * 80}>
                <CaptionedPhoto photo={p} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-band">
        <div className="container">
          <Reveal><SectionHeading center eyebrow="What guides us" title="Our Values" /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card card-hover h-full p-7 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-sm border border-line text-muted">
                    <Icon name={v.icon} className="h-7 w-7" strokeWidth={1.25} />
                  </span>
                  <h3 className="mt-5 text-xl">{v.title}</h3>
                  <p className="mt-2 text-[0.95rem]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <Reveal className="container">
          <div className="card mx-auto max-w-4xl border-l-4 border-l-brass p-8 md:p-12">
            <h2 className="text-3xl">{about.commitment.heading}</h2>
            <div className="mt-5 space-y-4">
              {about.commitment.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
            <p className="mt-6 font-display text-xl text-muted">{firm.signature}</p>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
