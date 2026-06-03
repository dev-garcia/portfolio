import type { MetadataRoute } from "next";

import { absoluteUrl, site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    host: site.url.origin,
    rules: {
      allow: "/",
      userAgent: "*",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
