"use client";

import { createContext, type ReactNode, useContext, useMemo, useState } from "react";

export type ToastVariant = "success" | "error" | "info";

export type ToastMessage = {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
};

type ToastContextType = {
  toasts: ToastMessage[];
  pushToast: (toast: Omit<ToastMessage, "id">) => void;
  removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

function buildId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function ToastProviderContext({
  children
}: {
  children: ReactNode;
}) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const context = useMemo<ToastContextType>(
    () => ({
      toasts,
      pushToast: (toast) => {
        const id = buildId();
        setToasts((current) => [...current, { ...toast, id }]);
        window.setTimeout(() => {
          setToasts((current) => current.filter((item) => item.id !== id));
        }, 4500);
      },
      removeToast: (id) => {
        setToasts((current) => current.filter((item) => item.id !== id));
      }
    }),
    [toasts]
  );

  return <ToastContext.Provider value={context}>{children}</ToastContext.Provider>;
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within ToastProviderContext");
  }

  return context;
}
