import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { OfficeMap } from "./OfficeMap";
import { contact, firm, legalLinks, navLinks, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-lilac text-body">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed">
            {firm.name} is a Chartered Accountancy firm in {firm.city}, {firm.region}, offering financial, taxation, auditing, accounting,
            corporate law and business advisory services under one roof.
          </p>
          <p className="mt-5 font-display text-lg text-muted">{firm.signature}</p>
        </div>

        <nav aria-label="Quick links" className="lg:col-span-2">
          <h2 className="font-display text-lg text-ink">Quick Links</h2>
          <span className="brass-rule mt-3" aria-hidden="true" />
          <ul className="mt-5 space-y-1">
            {[...navLinks, { label: "Founder", href: "/founder" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex min-h-[36px] items-center text-[0.95rem] hover:text-ink hover:underline">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="lg:col-span-3">
          <h2 className="font-display text-lg text-ink">Our Services</h2>
          <span className="brass-rule mt-3" aria-hidden="true" />
          <ul className="mt-5 space-y-1">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="flex min-h-[36px] items-center text-[0.95rem] hover:text-ink hover:underline">{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-display text-lg text-ink">Contact</h2>
          <span className="brass-rule mt-3" aria-hidden="true" />
          <ul className="mt-5 space-y-3 text-[0.95rem]">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              <address className="not-italic">{contact.addressLines.join(", ")}</address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              <a href={`tel:${contact.phoneTel}`} className="hover:text-ink hover:underline">{contact.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="break-all hover:text-ink hover:underline">{contact.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-1 h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              <span>{contact.hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-12">
          <OfficeMap className="h-64" />
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="container flex flex-col items-start justify-between gap-3 py-6 text-sm text-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {firm.name}. All rights reserved.</p>
          <ul className="flex gap-6">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex min-h-[36px] items-center hover:text-ink hover:underline">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
