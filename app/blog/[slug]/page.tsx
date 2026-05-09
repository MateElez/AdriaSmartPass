import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/layout/site-shell";
import { BlogPostBody } from "@/components/marketing/blog-post-body";
import { getBlogArticleBySlug } from "@/lib/blog-article";
import { BLOG_POSTS } from "@/lib/blog-meta";

type ParamsInput = Promise<{ slug: string }> | { slug: string };

/** Samo poznati slugovi iz `generateStaticParams` — stabilniji dev/build od `force-dynamic` + SSG. */
export const dynamicParams = false;

async function resolveSlug(params: ParamsInput): Promise<string> {
  const resolved = params instanceof Promise ? await params : params;
  return resolved.slug ?? "";
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

/** Stranica mora biti async da params (Next 14/15) ispravno dobije slug — inače ostane prazno/notFound. */
export default async function BlogPostPage({ params }: { params: ParamsInput }) {
  const slug = await resolveSlug(params);
  if (!slug) return notFound();

  const post = getBlogArticleBySlug(slug);
  if (!post) return notFound();

  return (
    <SiteShell>
      <article className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-16 pt-14 text-slate-900 md:px-6 md:pb-24 md:pt-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:underline"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          Natrag na blog
        </Link>

        <header className="mt-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">{post.category}</p>
          <h1 id="post-title" className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="text-sm text-slate-600">
            {post.dateLabel} · {post.readTimeLabel}
          </p>
          <p className="border-l-4 border-slate-900/50 pl-6 text-lg leading-relaxed text-slate-700 md:text-xl">{post.excerpt}</p>
        </header>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-soft">
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-8" aria-labelledby="post-title">
          <BlogPostBody markdown={post.content} />
          <div className="mt-10 border-t border-slate-200 pt-6">
            <a
              href="/#kontakt"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:underline"
            >
              Kontaktirajte nas
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
