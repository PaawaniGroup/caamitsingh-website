import type { MetadataRoute } from "next";
import { firm, services } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/founder", "/services", ...services.map((s) => `/services/${s.slug}`), "/team", "/contact", "/disclaimer", "/privacy-policy"];
  return paths.map((p) => ({ url: `${firm.siteUrl}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
