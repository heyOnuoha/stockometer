/**
 * FAQ section for the homepage.
 *
 * Rendered on the server with native <details>/<summary> so the answers are
 * in the HTML for search engines (and readable with JS disabled). A FAQPage
 * JSON-LD block is emitted from the same source of truth below.
 */

const SIGNUP_URL =
  "https://apilayer.com/products/marketstack/?utm_source=stockometer_devtools&utm_medium=internal&utm_campaign=featured_section";

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: "What is StockoMeter?",
    a: "StockoMeter is a live stock market dashboard that lets you track stock prices, market movements, trading volume, top gainers, and other market activity. It is powered by Marketstack, a stock market data API that provides real-time, intraday, and historical market data for developers.",
  },
  {
    q: "What is the data source for StockoMeter?",
    a: "StockoMeter is powered by the Marketstack API. The dashboard uses Marketstack to retrieve stock market data, including prices, daily changes, trading volume, and other market information. Developers can access the same type of market data programmatically through the Marketstack API.",
  },
  {
    q: "Is StockoMeter showing real-time stock market data?",
    a: "StockoMeter provides continuously updated market information for the stocks displayed on the dashboard. Marketstack provides real-time and intraday stock market data through its API, allowing developers to retrieve up-to-date market information for supported securities and exchanges.",
  },
  {
    q: "What is the Marketstack API?",
    a: "Marketstack is a REST API for accessing real-time, intraday, and historical stock market data. It provides structured JSON data for stock prices, end-of-day data, intraday quotes, tickers, exchanges, market indices, dividends, splits, and other financial information. Marketstack covers more than 170,000 stock tickers across 70+ global exchanges.",
  },
  {
    q: "How can I use Marketstack API to get stock prices?",
    a: "Developers can use Marketstack API endpoints to retrieve stock prices and market data by providing stock ticker symbols and other parameters. The API supports endpoints for end-of-day and intraday data, including the latest available stock prices, OHLCV data, historical records, and trading volume.",
  },
  {
    q: "What stock market data does Marketstack API provide?",
    a: "Marketstack provides a wide range of financial market data, including real-time stock prices, intraday quotes, end-of-day data, historical prices, stock tickers, exchanges, market indices, dividends, stock splits, bonds, ETF holdings, and company information. It also provides more than 30 years of historical market data on supported plans.",
  },
  {
    q: "What can I build with the Marketstack API?",
    a: "Marketstack can be used to build stock market dashboards, portfolio trackers, financial applications, trading tools, investment platforms, market analytics products, and data-driven websites. Developers can combine real-time, intraday, and historical market data to create applications that monitor stock prices, analyze market trends, visualize historical performance, or track portfolios.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function FaqItem({ faq }: { faq: Faq }) {
  return (
    <details className="group rounded-xl border border-(--color-border) bg-(--color-surface) transition-colors open:bg-(--color-surface-2) hover:border-(--color-border-strong)">
      <summary className="flex list-none items-center justify-between gap-4 px-4 py-3.5 text-sm font-semibold text-(--color-text) transition-colors group-open:text-(--color-brand) [&::-webkit-details-marker]:hidden">
        {faq.q}
        <svg
          className="h-4 w-4 shrink-0 text-(--color-text-dim) transition-transform duration-200 group-open:rotate-180 group-open:text-(--color-brand)"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25 12 15.75 4.5 8.25" />
        </svg>
      </summary>
      <p className="animate-fade-in border-t border-(--color-border) px-4 py-3.5 text-sm leading-relaxed text-(--color-text-muted)">
        {faq.a}
      </p>
    </details>
  );
}

export function FaqSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="space-y-3 lg:sticky lg:top-6 lg:self-start">
        <p className="text-[10px] font-bold tracking-widest text-(--color-brand) uppercase">
          FAQ
        </p>
        <h2 className="text-xl font-semibold">Frequently asked questions</h2>
        <p className="text-sm leading-relaxed text-(--color-text-muted)">
          What StockoMeter tracks, where the numbers come from, and how to get
          the same market data for your own project.
        </p>
        <a
          href={SIGNUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-(--color-brand)/40 px-3 py-1.5 text-xs font-semibold text-(--color-brand) transition-colors hover:bg-(--color-brand)/10"
        >
          Explore the Marketstack API
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="space-y-2">
        {FAQS.map((faq) => (
          <FaqItem key={faq.q} faq={faq} />
        ))}
      </div>
    </section>
  );
}
