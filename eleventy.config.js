import { load as loadYaml } from "js-yaml";
import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Content that changes lives in src/_data/*.yml (edited through Pages CMS).
  eleventyConfig.addDataExtension("yml,yaml", (contents) => loadYaml(contents));

  // Rewrites root-relative URLs ("/visit/") when the site is served from a
  // sub-path, e.g. GitHub Pages project sites (/repo-name/visit/).
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // "+1 301-935-5900" style link target from a display phone number.
  eleventyConfig.addFilter("telHref", (phone) => "tel:+1" + String(phone).replace(/\D/g, ""));

  // "Sundays: Sunday School at 9:15 AM and Worship Service at 10:30 AM", from site.services.
  eleventyConfig.addFilter("serviceTimes", (services) => {
    const byDay = new Map();
    for (const s of services) byDay.set(s.day, [...(byDay.get(s.day) || []), `${s.name} at ${s.time}`]);
    return [...byDay].map(([day, items]) => `${day}s: ${items.join(" and ")}`).join("; ");
  });

  // Every page with the base layout needs a meta description; fail the build without one.
  eleventyConfig.addFilter("requireDescription", (description, inputPath) => {
    if (!description) throw new Error(`Missing "description" front matter in ${inputPath}`);
    return description;
  });

  // schema.org Church JSON-LD from site.yml (see partials/schema-church.njk).
  eleventyConfig.addFilter("churchSchema", (site, url) => {
    const ld = {
      "@context": "https://schema.org",
      "@type": "Church",
      name: site.name,
      url: url + "/",
      logo: url + "/assets/img/logo.png",
      image: url + "/assets/img/og-image.png",
      telephone: "+1-" + site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postal_code,
        addressCountry: site.address.country,
      },
      sameAs: site.social.map((s) => s.url),
      // Service start times. (Nested Events would need a startDate, which a weekly service doesn't have.)
      openingHoursSpecification: site.services.map((s) => ({
        "@type": "OpeningHoursSpecification",
        name: s.name,
        dayOfWeek: "https://schema.org/" + s.day,
        opens: s.start + ":00",
      })),
    };
    // Escape "<" so the JSON can't close the <script> tag.
    return JSON.stringify(ld).replace(/</g, "\\u003c");
  });

  return {
    dir: { input: "src", output: "_site" },
    pathPrefix: process.env.PATH_PREFIX || "/",
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
