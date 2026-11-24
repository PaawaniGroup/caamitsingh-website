import { PageHero } from "@/components/PageHero";
import { disclaimer } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Disclaimer",
  "Disclaimer for the Singh Amit & Associates website: information only, not advertising or solicitation, and no professional-client relationship.",
  "/disclaimer",
);

export default function DisclaimerPage() {
  return (
    <>
      <PageHero title="Disclaimer" crumbs={[{ label: "Disclaimer" }]} />
      <section className="section">
        <div className="container max-w-3xl space-y-10">
          {disclaimer.pageSections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-2xl">{s.heading}</h2>
              <span className="gold-rule mt-3" aria-hidden="true" />
              {s.paragraphs.map((p) => <p key={p} className="mt-4">{p}</p>)}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
