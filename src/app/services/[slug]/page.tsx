import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { CtaBand } from "@/components/Blocks";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { contact, getService, services } from "@/data/site";
import { pageMeta } from "@/lib/seo";
import { slugify } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMeta(service.seoTitle, service.seoDescription, `/services/${service.slug}`);
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== service.slug);
  const next = services[(service.number % services.length)];

  return (
    <>
      <PageHero
        eyebrow={`Practice area ${service.number} of ${services.length}`}
        title={service.title}
        sub={service.tagline}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          {/* Main column */}
          <div>
            <Reveal className="space-y-5 text-lg">
              {service.intro.map((p) => <p key={p}>{p}</p>)}
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="text-2xl md:text-3xl">{service.includesLead.replace(/:$/, "")}</h2>
              <span className="brass-rule mt-3" aria-hidden="true" />
            </Reveal>

            <ol className="mt-8 space-y-4">
              {service.subServices.map((sub, i) => (
                <Reveal key={sub.title} as="li" delay={(i % 3) * 70}>
                  <div id={slugify(sub.title)} className="card card-hover flex gap-5 p-6 md:p-7">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-line font-display text-lg text-muted" aria-hidden="true">{i + 1}</span>
                    <div>
                      <h3 className="text-xl">{sub.title}</h3>
                      <p className="mt-2 text-[0.98rem]">{sub.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal className="mt-10">
              <p className="rounded-sm border-l-4 border-brass bg-sage p-7 font-display text-xl leading-relaxed text-ink md:p-9 md:text-2xl">
                {service.objective}
              </p>
            </Reveal>

            <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
              <Link href="/contact" className="btn btn-primary">Contact the Firm <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              <Link href={`/services/${next.slug}`} className="text-sm font-semibold text-ink hover:text-ink">
                Next: {next.shortTitle} →
              </Link>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start" aria-label="Related information">
            <nav aria-label="Other services" className="card p-6">
              <h2 className="text-xl">Other Services</h2>
              <span className="brass-rule mt-3" aria-hidden="true" />
              <ul className="mt-4 divide-y divide-line">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="group flex min-h-[48px] items-center gap-3 py-2 text-[0.95rem] text-ink hover:text-ink">
                      <Icon name={s.icon} className="h-5 w-5 shrink-0 text-muted" /> {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="rounded-sm bg-rose p-6">
              <h2 className="text-xl">Contact the Office</h2>
              <span className="brass-rule mt-3" aria-hidden="true" />
              <ul className="mt-5 space-y-3 text-[0.95rem]">
                <li><a href={`tel:${contact.phoneTel}`} className="flex min-h-[44px] items-center gap-3 hover:text-ink hover:underline"><Phone className="h-4 w-4 text-muted" aria-hidden="true" /> {contact.phoneDisplay}</a></li>
                <li><a href={`mailto:${contact.email}`} className="flex min-h-[44px] items-center gap-3 break-all hover:text-ink hover:underline"><Mail className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" /> {contact.email}</a></li>
                <li><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex min-h-[44px] items-center gap-3 hover:text-ink hover:underline"><MessageCircle className="h-4 w-4 text-muted" aria-hidden="true" /> WhatsApp</a></li>
              </ul>
              <Link href="/contact" className="btn btn-primary mt-5 w-full">Send an Enquiry</Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
