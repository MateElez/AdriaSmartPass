import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="mt-10 scroll-mt-24 text-xl font-bold tracking-tight text-slate-900 first:mt-0 md:text-2xl">
      {children}
    </h2>
  ),
  p: ({ children }) => <p className="mt-4 text-base leading-relaxed text-slate-700 first:mt-0">{children}</p>,
  ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">{children}</ul>,
  ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-semibold text-brand-600 underline-offset-2 transition hover:text-brand-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
    >
      {children}
    </a>
  )
};

type BlogPostBodyProps = {
  markdown: string;
};

export function BlogPostBody({ markdown }: BlogPostBodyProps) {
  return (
    <div className="blog-post-body">
      <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
    </div>
  );
}
