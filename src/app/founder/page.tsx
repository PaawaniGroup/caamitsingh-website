import { CtaBand } from "@/components/Blocks";
import { CaptionedPhoto, Photo } from "@/components/Photo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { founder, photos } from "@/data/site";
import { founderSchema } from "@/lib/jsonld";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "CA Amit Singh | Founder & Managing Partner, Roorkee",
  "Profile of CA Amit Singh, FCA, LL.B., ICAI Gold Medalist: Founder and Managing Partner of Singh Amit & Associates, Chartered Accountants in Roorkee, Uttarakhand.",
  "/founder",
);

export default function FounderPage() {
  return (
    <>
      <JsonLd data={founderSchema()} />
      <PageHero
        eyebrow="Leadership"
        title={founder.heading}
        sub={founder.credentialsLine}
        crumbs={[{ label: "About Us", href: "/about" }, { label: "Founder" }]}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Photo photo={photos.founder} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 380px, 100vw" position="0% center" priority className="w-full" />
              <h2 className="mt-6 text-3xl">{founder.name}</h2>
              <p className="mt-1 text-[0.95rem]">Founder &amp; Managing Partner</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Credentials">
                {founder.badges.map((b) => (
                  <li key={b} className="rounded-sm border border-line px-4 py-1 text-sm font-semibold text-muted">{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div>
            <Reveal className="space-y-5">
              {founder.bio.map((p) => <p key={p}>{p}</p>)}
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="text-2xl">Areas of expertise</h2>
              <span className="brass-rule mt-3" aria-hidden="true" />
              <ul className="mt-6 flex flex-wrap gap-3">
                {founder.expertise.map((t) => (
                  <li key={t} className="rounded-sm border border-line bg-surface px-4 py-2 text-[0.95rem] font-medium text-ink">{t}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="text-2xl">Professional engagements</h2>
              <span className="brass-rule mt-3" aria-hidden="true" />
              <div className="mt-6"><CaptionedPhoto photo={photos.wofa} ratio="aspect-[3/2]" sizes="(min-width: 1024px) 60vw, 100vw" /></div>
            </Reveal>

            <Reveal className="mt-12">
              <figure className="rounded-sm bg-sage p-8 md:p-10">
                <figcaption className="eyebrow">Professional philosophy</figcaption>
                <blockquote className="mt-4 font-display text-xl leading-relaxed md:text-2xl">{founder.philosophy}</blockquote>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
