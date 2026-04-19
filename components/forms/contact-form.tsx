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
import { cn } from "@/lib/utils";
import { createLeadSchema, type CreateLeadInput } from "@/lib/schemas/lead";

const defaultValues: CreateLeadInput = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "APARTMENT",
  message: "",
  source: "website"
};

const SUBMIT_ERROR_MESSAGE = "Došlo je do greške. Pokušajte ponovno.";

export function ContactForm() {
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
      className={cn(MARKETING_SURFACE, "min-w-0 space-y-5 p-5 md:p-8")}
    >
      {submitError ? (
        <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-800" role="alert">
          {submitError}
        </p>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Ime i prezime *</label>
          <Input placeholder="Ivan Horvat" {...register("fullName")} />
          {errors.fullName ? <p className="mt-1 text-xs text-rose-600">{errors.fullName.message}</p> : null}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">E-mail *</label>
          <Input type="email" placeholder="ime@tvrtka.com" {...register("email")} />
          {errors.email ? <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Telefon *</label>
          <Input placeholder="+385 95 5753959" {...register("phone")} />
          {errors.phone ? <p className="mt-1 text-xs text-rose-600">{errors.phone.message}</p> : null}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">Tvrtka</label>
          <Input placeholder="Neobavezno" {...register("company")} />
          {errors.company ? <p className="mt-1 text-xs text-rose-600">{errors.company.message}</p> : null}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">Vrsta projekta *</label>
        <Select
          options={PROJECT_TYPE_OPTIONS.map((option) => ({
            value: option.value,
            label: option.label
          }))}
          {...register("projectType")}
        />
        {errors.projectType ? (
          <p className="mt-1 text-xs text-rose-600">{errors.projectType.message}</p>
        ) : null}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">Poruka *</label>
        <Textarea
          rows={6}
          placeholder="Opišite svoj objekt i ciljeve kontrole pristupa."
          {...register("message")}
        />
        {errors.message ? <p className="mt-1 text-xs text-rose-600">{errors.message.message}</p> : null}
      </div>

      <Button
        type="submit"
        size="lg"
        className="h-12 w-full touch-manipulation sm:h-11 md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Šaljem...
          </>
        ) : (
          "Pošalji upit"
        )}
      </Button>
    </form>
  );
}
