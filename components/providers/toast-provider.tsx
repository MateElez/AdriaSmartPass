"use client";

import type { ReactNode } from "react";
import { ToastViewport } from "@/components/ui/toast";
import { ToastProviderContext } from "@/hooks/use-toast";

export function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <ToastProviderContext>
      {children}
      <ToastViewport />
    </ToastProviderContext>
  );
}
