"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MARKETING_SURFACE } from "@/components/marketing/section-panel";
import { PROJECT_TYPE_OPTIONS } from "@/lib/constants";
import { KONTAKT_PRIMARY_BUTTON_LABEL } from "@/lib/kontakt-cta";
import { cn } from "@/lib/utils";
import { createLeadSchema, type CreateLeadInput } from "@/lib/schemas/lead";

const defaultValues: CreateLeadInput = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "APARTMENT",
  message: "",
  source: "website",
  fax: ""
};

const SUBMIT_ERROR_MESSAGE = "Došlo je do greške. Pokušajte ponovno.";

export function ContactForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const form = useForm<CreateLeadInput>({
    resolver: zodResolver(createLeadSchema),
    defaultValues
  });

  async function onSubmit(values: CreateLeadInput) {
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (response.status === 429) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        setSubmitError(data?.error ?? SUBMIT_ERROR_MESSAGE);
        return;
      }

      if (!response.ok) {
        setSubmitError(SUBMIT_ERROR_MESSAGE);
        return;
      }

      router.push("/hvala");
    } catch {
      setSubmitError(SUBMIT_ERROR_MESSAGE);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = form;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "relative",
        tone === "dark"
          ? "min-w-0 space-y-5 rounded-3xl border border-slate-600/45 bg-slate-700/20 p-5 shadow-subtle backdrop-blur-sm md:p-8"
          : cn(MARKETING_SURFACE, "min-w-0 space-y-5 p-5 md:p-8")
      )}
    >
      <div className="absolute left-0 top-0 -z-10 h-px w-px overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="contact-fax">Fax</label>
        <Input id="contact-fax" {...register("fax")} tabIndex={-1} autoComplete="off" />
      </div>
      {submitError ? (
        <p
          className={cn(
            "rounded-lg px-3 py-2.5 text-sm",
            tone === "dark"
              ? "border border-rose-400/25 bg-rose-950/30 text-rose-200"
              : "border border-rose-200 bg-rose-50 text-rose-800"
          )}
          role="alert"
        >
          {submitError}
        </p>
      ) : null}

      <p className={cn("text-base font-semibold", tone === "dark" ? "text-slate-100" : "text-slate-950")}>Pošaljite upit</p>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={cn("mb-1.5 block text-sm font-medium", tone === "dark" ? "text-slate-300" : "text-slate-700")}>
            Ime i prezime *
          </label>
          <Input
            placeholder="Ime i prezime"
            className={cn(
              tone === "dark" &&
                "border-slate-600/55 bg-slate-900/25 text-slate-100 placeholder:text-slate-500 focus:border-brand-400 focus:ring-brand-500/15"
            )}
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p className={cn("mt-1 text-xs", tone === "dark" ? "text-rose-400" : "text-rose-600")}>{errors.fullName.message}</p>
          ) : null}
        </div>
        <div>
          <label className={cn("mb-1.5 block text-sm font-medium", tone === "dark" ? "text-slate-300" : "text-slate-700")}>
            E-mail *
          </label>
          <Input
            type="email"
            placeholder="Upišite e-mail"
            className={cn(
              tone === "dark" &&
                "border-slate-600/55 bg-slate-900/25 text-slate-100 placeholder:text-slate-500 focus:border-brand-400 focus:ring-brand-500/15"
            )}
            {...register("email")}
          />
          {errors.email ? (
            <p className={cn("mt-1 text-xs", tone === "dark" ? "text-rose-400" : "text-rose-600")}>{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={cn("mb-1.5 block text-sm font-medium", tone === "dark" ? "text-slate-300" : "text-slate-700")}>
            Telefon *
          </label>
          <Input
            placeholder="+385 99 123 4567"
            className={cn(
              tone === "dark" &&
                "border-slate-600/55 bg-slate-900/25 text-slate-100 placeholder:text-slate-500 focus:border-brand-400 focus:ring-brand-500/15"
            )}
            {...register("phone")}
          />
          {errors.phone ? (
            <p className={cn("mt-1 text-xs", tone === "dark" ? "text-rose-400" : "text-rose-600")}>{errors.phone.message}</p>
          ) : null}
        </div>
        <div>
          <label className={cn("mb-1.5 block text-sm font-medium", tone === "dark" ? "text-slate-300" : "text-slate-700")}>
            Tvrtka / objekt
          </label>
          <Input
            placeholder="Naziv tvrtke ili objekta (neobavezno)"
            className={cn(
              tone === "dark" &&
                "border-slate-600/55 bg-slate-900/25 text-slate-100 placeholder:text-slate-500 focus:border-brand-400 focus:ring-brand-500/15"
            )}
            {...register("company")}
          />
          {errors.company ? (
            <p className={cn("mt-1 text-xs", tone === "dark" ? "text-rose-400" : "text-rose-600")}>{errors.company.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label className={cn("mb-1.5 block text-sm font-medium", tone === "dark" ? "text-slate-300" : "text-slate-700")}>
          Vrsta projekta (vila / apartman / hotel / poslovni prostor) *
        </label>
        <Select
          options={PROJECT_TYPE_OPTIONS.map((option) => ({
            value: option.value,
            label: option.label
          }))}
          className={cn(
            tone === "dark" &&
              "border-slate-600/55 bg-slate-900/25 text-slate-100 focus:border-brand-400 focus:ring-brand-500/15 [&>option]:bg-white [&>option]:text-slate-900"
          )}
          {...register("projectType")}
        />
        {errors.projectType ? (
          <p className={cn("mt-1 text-xs", tone === "dark" ? "text-rose-400" : "text-rose-600")}>{errors.projectType.message}</p>
        ) : null}
      </div>

      <div>
        <label className={cn("mb-1.5 block text-sm font-medium", tone === "dark" ? "text-slate-300" : "text-slate-700")}>
          Poruka *
        </label>
        <Textarea
          rows={6}
          placeholder="Kratko opišite objekt, način korištenja i što želite postići video nadzorom."
          className={cn(
            tone === "dark" &&
              "border-slate-600/55 bg-slate-900/25 text-slate-100 placeholder:text-slate-500 focus:border-brand-400 focus:ring-brand-500/15"
          )}
          {...register("message")}
        />
        {errors.message ? (
          <p className={cn("mt-1 text-xs", tone === "dark" ? "text-rose-400" : "text-rose-600")}>{errors.message.message}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        className={cn("h-12 w-full touch-manipulation sm:h-11 md:w-auto", tone === "dark" && "shadow-soft")}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Šaljem...
          </>
        ) : (
          KONTAKT_PRIMARY_BUTTON_LABEL
        )}
      </Button>
    </form>
  );
}
