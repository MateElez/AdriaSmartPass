"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-brand-500 text-white hover:bg-brand-600",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  ghost: "bg-transparent text-slate-200 hover:bg-white/10",
  danger: "bg-rose-500 text-white hover:bg-rose-600"
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base"
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition disabled:cursor-not-allowed disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
}
