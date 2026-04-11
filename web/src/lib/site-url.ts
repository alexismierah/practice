const CANONICAL_SITE = "https://unifixictsolutions.com"

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "")
  }
  // In preview, VERCEL_URL is the only stable public URL for that deployment.
  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/$/, "")
  }
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000"
  }
  return CANONICAL_SITE
}