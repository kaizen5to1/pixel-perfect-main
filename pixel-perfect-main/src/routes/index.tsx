import { createFileRoute } from "@tanstack/react-router";
import { Nav, Hero, MenuSection, OrderSection, Bakery, Story, Gallery, Reviews, Contact, Footer } from "@/components/site";
import { site } from "@/data/site";

const title = "Martabaan Restaurant & Bakery — Greater Noida";
const description = "Indian favourites, snacks and bakery delights at Shree Brahma Square, Sector 1, Greater Noida. Reserve a table or order online.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "Bakery"],
  name: site.name,
  alternateName: site.hindiName,
  telephone: "+918178233039",
  priceRange: "₹200–₹400",
  servesCuisine: ["North Indian", "Indo-Chinese", "Fast Food", "Bakery"],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  acceptsReservations: site.reserveUrl,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MenuSection />
        <OrderSection />
        <Bakery />
        <Story />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
