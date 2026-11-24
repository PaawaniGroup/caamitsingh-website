import { contact, firm, founder } from "@/data/site";

/** schema.org: AccountingService + LocalBusiness, with the founder as a Person. */
export function organizationSchema() {
  const real = !contact.isPlaceholder;
  return {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "LocalBusiness"],
    "@id": `${firm.siteUrl}/#organization`,
    name: firm.name,
    description: `${firm.tagline} in ${firm.city}, ${firm.region}.`,
    url: firm.siteUrl,
    slogan: firm.signature,
    ...(real && { telephone: contact.phoneTel, email: contact.email }),
    address: { "@type": "PostalAddress", streetAddress: contact.streetAddress, postalCode: contact.postalCode, addressLocality: firm.city, addressRegion: firm.region, addressCountry: "IN" },
    areaServed: [{ "@type": "AdministrativeArea", name: firm.region }, "India"],
    numberOfEmployees: { "@type": "QuantitativeValue", value: 43 },
    founder: { "@id": `${firm.siteUrl}/founder#person` },
  };
}

export function founderSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${firm.siteUrl}/founder#person`,
    name: founder.name,
    jobTitle: "Founder & Managing Partner",
    worksFor: { "@id": `${firm.siteUrl}/#organization` },
    hasCredential: founder.badges,
    knowsAbout: founder.expertise,
    address: { "@type": "PostalAddress", streetAddress: contact.streetAddress, postalCode: contact.postalCode, addressLocality: firm.city, addressRegion: firm.region, addressCountry: "IN" },
  };
}
