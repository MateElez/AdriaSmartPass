import { Card } from "@/components/ui/card";

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
};

export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <Card className="h-full border-slate-200 bg-white">
      <p className="text-sm leading-relaxed text-slate-600">
        &ldquo;
        {quote}
        &rdquo;
      </p>
      <div className="mt-5">
        <p className="font-semibold text-slate-900">{name}</p>
        <p className="text-xs text-slate-500">{role}</p>
      </div>
    </Card>
  );
}
