// Values set by the deploy workflow (.github/workflows/deploy.yml).
export default {
  // Absolute origin + path prefix, used for canonical, Open Graph and sitemap URLs.
  url: (process.env.SITE_URL || "http://localhost:8080").replace(/\/$/, ""),
  // true while the site is a dev copy, so search engines don't index it.
  noindex: process.env.SITE_NOINDEX === "true",
};
