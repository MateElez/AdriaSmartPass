import { ProductCard } from "@/components/marketing/product-card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SECTION_HEADING_MARKETING, SectionPanel } from "@/components/marketing/section-panel";
import { SiteShell } from "@/components/layout/site-shell";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

export default function ProductsPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-16 md:px-6 md:pt-24">
        <SectionPanel>
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="Proizvodi"
            title="Kategorije opreme za video nadzor i monitoring sustave"
            description="Strukturirani pregled komponenti sustava video nadzora — od kamere do pohrane i centraliziranog nadzora."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {PRODUCT_CATEGORIES.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </SectionPanel>
      </section>
    </SiteShell>
  );
}
