"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

/* ---------------- Types ---------------- */
export type BreadcrumbItem = {
  name: string;
  path: string;
};

/* ---------------- Config ---------------- */
const BASE_URL = "https://unifixictsolutions.com";

/* ---------------- Component ---------------- */
export default function Breadcrumbs({
  items,
  className,
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  if (!items || items.length === 0) return null;

  /* ---------------- SEO Schema ---------------- */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };

  return (
    <>
      {/* UI Breadcrumb */}
      <nav
        aria-label="breadcrumb"
        className={cn("text-sm text-gray-600 mb-4", className)}
      >
        <ol className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              <Link href={item.path} className="hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      {/* SEO Breadcrumb (Google) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}