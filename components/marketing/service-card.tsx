import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href?: string;
};

export function ServiceCard({ title, description, href = "/services" }: ServiceCardProps) {
  return (
    <Card className="group h-full border-slate-200 transition hover:-translate-y-0.5 hover:border-slate-400/70 hover:shadow-xl">
      <h3 className="font-heading text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:underline"
      >
        <span>Saznaj više</span>
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </Card>
  );
}
