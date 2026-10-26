import type { NextConfig } from "next";
import { BASE_PATH } from "./lib/basePath";
/**
 * `basePath` lets this app be served under a sub-path such as
 * /devtools/<tool>. Empty by default so local dev runs at the root; the
 * deployment sets NEXT_PUBLIC_BASE_PATH at build time.
 *
 * No `assetPrefix`: that is for CDNs, and the Next docs say plainly "we do not
 * suggest you use a custom Asset Prefix for this use case".
 */

const nextConfig: NextConfig = {
  basePath: BASE_PATH,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.logo.dev" },
      { protocol: "https", hostname: "icons.duckduckgo.com" },
      { protocol: "https", hostname: "www.google.com" },
    ],
  },
  async headers() {
    return [
      {
        // Security headers for all routes except /embed/*
        source: "/((?!embed).*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        // Embed routes need to be iframe-able, so no X-Frame-Options
        source: "/embed/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
