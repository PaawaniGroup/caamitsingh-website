import { PageHero } from "@/components/PageHero";
import { privacy } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Privacy Policy",
  "How Singh Amit & Associates handles personal information submitted through this website.",
  "/privacy-policy",
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" sub={`Last updated: ${privacy.updated}`} crumbs={[{ label: "Privacy Policy" }]} />
      <section className="section">
        <div className="container max-w-3xl space-y-10">
          {privacy.sections.map((s) => (
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
