import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Static routes only. The dynamic ones (/stock/[symbol], /compare/[symbols],
 * /movers/[category]) are unbounded, and listing them would be index bloat
 * rather than coverage; they are reachable by crawl from the pages below.
 */
const ROUTES = [
  { path: "", priority: 1, freq: "hourly" as const },
  { path: "/stocks", priority: 0.9, freq: "hourly" as const },
  { path: "/screener", priority: 0.8, freq: "daily" as const },
  { path: "/indices", priority: 0.8, freq: "hourly" as const },
  { path: "/sectors", priority: 0.7, freq: "daily" as const },
  { path: "/markets/sectors", priority: 0.6, freq: "daily" as const },
  { path: "/markets/trading-data", priority: 0.6, freq: "daily" as const },
  { path: "/earnings", priority: 0.7, freq: "daily" as const },
  { path: "/dividends", priority: 0.7, freq: "daily" as const },
  { path: "/compare", priority: 0.6, freq: "weekly" as const },
  { path: "/watchlist", priority: 0.5, freq: "weekly" as const },
  { path: "/portfolio", priority: 0.5, freq: "weekly" as const },
  { path: "/alerts", priority: 0.5, freq: "weekly" as const },
  { path: "/widgets", priority: 0.4, freq: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
