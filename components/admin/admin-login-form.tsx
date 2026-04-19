"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { adminLoginSchema, type AdminLoginInput } from "@/lib/schemas/auth";

type AdminLoginFormProps = {
  nextPath: string;
};

const defaultValues: AdminLoginInput = {
  email: "",
  password: ""
};

export function AdminLoginForm({ nextPath }: AdminLoginFormProps) {
  const router = useRouter();
  const { pushToast } = useToast();
  const form = useForm<AdminLoginInput>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues
  });

  async function onSubmit(values: AdminLoginInput) {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Autentifikacija nije uspjela.");
      }

      pushToast({
        title: "Prijava uspješna",
        description: "Dobrodošli u CRM nadzornu ploču.",
        variant: "success"
      });
      router.push(nextPath);
      router.refresh();
    } catch (error) {
      pushToast({
        title: "Prijava nije uspjela",
        description: error instanceof Error ? error.message : "Provjerite svoje vjerodajnice.",
        variant: "error"
      });
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-7 shadow-soft backdrop-blur">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
          <LockKeyhole className="h-5 w-5" />
        </span>
        <div>
          <h1 className="font-heading text-2xl font-semibold text-white">Prijava administratora</h1>
          <p className="text-sm text-slate-400">Pristup lead pipelineu i CRM kontrolama.</p>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm text-slate-300">E-mail</label>
        <Input
          type="email"
          placeholder="admin@adriasmartpass.com"
          className="border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500"
          {...register("email")}
        />
        {errors.email ? <p className="mt-1 text-xs text-rose-400">{errors.email.message}</p> : null}
      </div>

      <div>
        <label className="mb-1.5 block text-sm text-slate-300">Lozinka</label>
        <Input
          type="password"
          placeholder="••••••••"
          className="border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500"
          {...register("password")}
        />
        {errors.password ? (
          <p className="mt-1 text-xs text-rose-400">{errors.password.message}</p>
        ) : null}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Prijava...
          </>
        ) : (
          "Prijavi se"
        )}
      </Button>
    </form>
  );
}
