import { BLOG_POST_MARKDOWN } from "./blog-content";
import { BLOG_POSTS, type BlogPost } from "./blog-meta";

export type BlogArticle = BlogPost & { content: string };

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  const meta = BLOG_POSTS.find((p) => p.slug === slug);
  const content = BLOG_POST_MARKDOWN[slug as BlogPost["slug"]];
  if (!meta || content === undefined) return undefined;
  return { ...meta, content };
}
