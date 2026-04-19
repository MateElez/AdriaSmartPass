import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-base text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 sm:text-sm",
        className
      )}
      {...props}
    />
  );
});
