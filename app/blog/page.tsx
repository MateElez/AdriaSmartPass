import { AnimatedSection } from "@/components/marketing/animated-section";
import { BlogCard } from "@/components/marketing/blog-card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SiteShell } from "@/components/layout/site-shell";
import { BLOG_POSTS } from "@/lib/blog-meta";

/** Zaobilazi povremeni Next 14 webpack chunk bug pri SSG ove rute. */
export const dynamic = "force-dynamic";

export default function BlogIndexPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-14 md:px-6 md:pt-20">
        <SectionHeading
          eyebrow="Blog"
          title="Bilješke i vodiči"
          description="Kratki tekstovi o odabiru, postavljanju i korištenju pametnih brava i kontrole pristupa."
        />
      </section>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 pb-20 md:px-6">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              category={post.category}
              imageSrc={post.imageSrc}
              imageAlt={post.imageAlt}
              excerpt={post.excerpt}
              dateLabel={post.dateLabel}
              readTimeLabel={post.readTimeLabel}
              href={`/blog/${post.slug}`}
            />
          ))}
        </div>
      </AnimatedSection>
    </SiteShell>
  );
}

