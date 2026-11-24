import type { Metadata } from "next";
import { firm } from "@/data/site";

/** Unique title + description + canonical + Open Graph for each page. */
export function pageMeta(title: string, description: string, path: string, opts: { absolute?: boolean } = {}): Metadata {
  const fullTitle = opts.absolute ? title : `${title} | ${firm.name}`;
  return {
    title: opts.absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle, description, url: path, siteName: firm.name, locale: "en_IN", type: "website",
    },
    twitter: { card: "summary", title: fullTitle, description },
  };
}
