import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="font-heading mt-10 scroll-mt-24 text-xl font-bold tracking-tight text-slate-900 first:mt-0 md:text-2xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-heading mt-8 scroll-mt-24 text-lg font-semibold text-slate-900 md:text-xl">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-heading mt-6 scroll-mt-24 text-base font-semibold text-slate-900">{children}</h4>
  ),
  p: ({ children }) => <p className="mt-4 text-base leading-relaxed text-slate-700 first:mt-0">{children}</p>,
  ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">{children}</ul>,
  ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed [&>ul]:mt-2 [&>ol]:mt-2">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-semibold text-slate-900 underline-offset-2 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
    >
      {children}
    </a>
  ),
  hr: () => <hr className="my-10 border-slate-200" />,
  blockquote: ({ children }) => (
    <blockquote className="mt-4 border-l-4 border-brand-500/40 bg-slate-50 py-2 pl-4 pr-2 text-slate-700">{children}</blockquote>
  ),
  code: ({ children, className }) =>
    className ? (
      <code className={className}>{children}</code>
    ) : (
      <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.9em] text-slate-800">{children}</code>
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
