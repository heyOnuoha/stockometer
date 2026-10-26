/**
 * Canonical facts about this site, deliberately decoupled from routing.
 * NEXT_PUBLIC_BASE_PATH says where Next serves the app from; these say what a
 * crawler should be told about it.
 */
const DEFAULT_ORIGIN = "https://apilayer.com";
const DEFAULT_PATH = "/devtools/stockometer";

export const SITE = {
  name: "StockoMeter",
  origin: (process.env.NEXT_PUBLIC_SITE_ORIGIN || DEFAULT_ORIGIN).replace(/\/$/, ""),
  publicPath: (process.env.NEXT_PUBLIC_SITE_PATH ?? DEFAULT_PATH).replace(/\/$/, ""),
  tagline: "Live stock prices, movers and market data",
  description:
    "Track live stock prices, top gainers and losers, trading volume, indices, sectors and price history across thousands of tickers in one fast dashboard. Free, no sign-up, powered by the Marketstack API.",
  locale: "en_US",
} as const;

export const SITE_URL = `${SITE.origin}${SITE.publicPath}`;
