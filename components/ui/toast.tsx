"use client";

import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const variantStyles = {
  success: "border-emerald-400/30 bg-emerald-500/10 text-emerald-100",
  error: "border-rose-400/30 bg-rose-500/10 text-rose-100",
  info: "border-sky-400/30 bg-sky-500/10 text-sky-100"
};

export function ToastViewport() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="pointer-events-none fixed right-4 top-4 z-50 flex w-[320px] flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "toast-enter pointer-events-auto rounded-xl border p-4 shadow-soft backdrop-blur-md",
            variantStyles[toast.variant ?? "info"]
          )}
        >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold">{toast.title}</p>
                {toast.description ? (
                  <p className="mt-1 text-xs text-current/80">{toast.description}</p>
                ) : null}
              </div>
              <button
                type="button"
                aria-label="Zatvori obavijest"
                onClick={() => removeToast(toast.id)}
                className="rounded-lg p-1 text-current/80 transition hover:bg-white/10 hover:text-current"
              >
                <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
