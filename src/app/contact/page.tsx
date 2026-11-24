import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { OfficeMap } from "@/components/OfficeMap";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { contact, contactPage, firm, photos } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Contact Singh Amit & Associates | Chartered Accountant in Roorkee",
  "Contact details, office hours and enquiry form for Singh Amit & Associates, Chartered Accountants & Legal Advisors in Roorkee, Uttarakhand.",
  "/contact",
);

export default function ContactPage() {
  const items = [
    { icon: MapPin, label: "Office address", body: <address className="not-italic">{contact.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</address> },
    { icon: Phone, label: "Phone", body: <a href={`tel:${contact.phoneTel}`} className="hover:text-ink">{contact.phoneDisplay}</a> },
    { icon: Mail, label: "Email", body: <a href={`mailto:${contact.email}`} className="break-all hover:text-ink">{contact.email}</a> },
  ];

  return (
    <>
      <PageHero eyebrow={firm.name} title={contactPage.heading} sub={contactPage.intro} crumbs={[{ label: "Contact" }]} />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="mb-6 text-3xl">Send an enquiry</h2>
            <ContactForm />
          </Reveal>

          <Reveal delay={100} className="space-y-8">
            <Photo photo={photos.corridor} ratio="aspect-[16/9]" sizes="(min-width: 1024px) 40vw, 100vw" />
            <div className="card divide-y divide-line">
              {items.map(({ icon: I, label, body }) => (
                <div key={label} className="flex gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy text-steel"><I className="h-5 w-5" aria-hidden="true" /></span>
                  <div>
                    <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-ink">{label}</h3>
                    <div className="mt-1 text-[0.98rem]">{body}</div>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy text-steel"><Clock className="h-5 w-5" aria-hidden="true" /></span>
                <div className="w-full">
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-ink">Office hours</h3>
                  <ul className="mt-1 space-y-1 text-[0.98rem]">
                    {contact.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-4"><span>{h.days}</span><span className="text-ink">{h.time}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-full"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" /> Message on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
            </a>

            <OfficeMap className="h-72" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
