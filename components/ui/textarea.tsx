import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 sm:text-sm",
        className
      )}
      {...props}
    />
  );
});
