import type { MetadataRoute } from "next";

import { profile } from "@/data/portfolio/profile";
import { absoluteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "monthly",
      images: [absoluteUrl(profile.photoSrc), absoluteUrl(profile.productImageSrc)],
      lastModified: new Date("2026-06-03"),
      priority: 1,
      url: absoluteUrl("/"),
    },
  ];
}
