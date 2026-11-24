import type { MetadataRoute } from "next";
import { firm } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${firm.siteUrl}/sitemap.xml` };
}
