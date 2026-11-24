import { CtaBand } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { TeamCard } from "@/components/TeamCard";
import { photos, teamGroups, teamIntro } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Our Team | Chartered Accountants, Company Secretaries & Advocates in Roorkee",
  "Meet the Chartered Accountants, Company Secretaries and Advocates of Singh Amit & Associates, Roorkee, Uttarakhand, led by CA Amit Singh.",
  "/team",
);

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow={teamIntro.subheading} title={teamIntro.heading} crumbs={[{ label: "Our Team" }]} />

      <div className="container pt-12 md:pt-16">
        <Reveal><Photo photo={photos.team} ratio="aspect-[16/9] md:aspect-[21/9]" sizes="(min-width: 1240px) 1176px, 100vw" position="center 40%" priority /></Reveal>
      </div>

      <section className="section pb-6">
        <div className="container">
          <p className="max-w-3xl text-lg">{teamIntro.text}</p>

          {/* Category cards (jump links) */}
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {teamGroups.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`} className="card card-hover flex h-full items-center gap-4 p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy text-steel">
                    <Icon name={g.icon} className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block font-display text-lg leading-snug text-ink">{g.title}</span>
                    <span className="text-sm">{g.blurb}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {teamGroups.map((g) => (
        <section key={g.id} id={g.id} className="section pb-4 pt-12 md:pt-16">
          <div className="container">
            <Reveal>
              <h2 className="text-3xl">{g.title}</h2>
              <span className="brass-rule mt-4" aria-hidden="true" />
            </Reveal>
            <ul className="mt-10 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {g.members.map((m, i) => (
                <Reveal key={m.name} as="li" delay={(i % 3) * 80} className="h-full">
                  <TeamCard member={m} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <div className="mt-16"><CtaBand /></div>
    </>
  );
}
