import { CtaBand } from "@/components/Blocks";
import { PhotoPlaceholder } from "@/components/Decor";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { founder } from "@/data/site";
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
              <PhotoPlaceholder label="Photo placeholder for CA Amit Singh" initials={founder.initials} className="aspect-[4/5] w-full" />
              <h2 className="mt-6 text-3xl">{founder.name}</h2>
              <p className="mt-1 text-[0.95rem]">Founder &amp; Managing Partner</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Credentials">
                {founder.badges.map((b) => (
                  <li key={b} className="rounded-full border border-gold/70 px-4 py-1 text-sm font-semibold text-gold-text">{b}</li>
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
              <span className="gold-rule mt-3" aria-hidden="true" />
              <ul className="mt-6 flex flex-wrap gap-3">
                {founder.expertise.map((t) => (
                  <li key={t} className="rounded-full border border-line bg-surface px-5 py-2 text-[0.95rem] font-medium text-ink shadow-card">{t}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <figure className="rounded-2xl bg-navy p-8 text-white md:p-10">
                <figcaption className="eyebrow !text-gold">Professional philosophy</figcaption>
                <blockquote className="mt-4 font-display text-xl italic leading-relaxed md:text-2xl">{founder.philosophy}</blockquote>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
