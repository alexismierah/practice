import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site-url"

const serviceSlugs = [
  "access-control",
  "cctv",
  "conference",
  "ip-pbx",
  "led-display",
  "network-security",
  "parking",
  "public-address",
  "solar",
  "structured-cabling",
  "ups",
  "video-intercom",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
