import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MARKETING_SURFACE } from "@/components/marketing/section-panel";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function ProductCard({ title, description, imageSrc, imageAlt }: ProductCardProps) {
  return (
    <Card className={cn(MARKETING_SURFACE, "h-full overflow-hidden p-0 hover:border-brand-200")}>
      <div className="relative h-60 w-full overflow-hidden bg-slate-100 sm:h-64 md:h-72">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageSrc} alt={imageAlt} loading="lazy" className="h-full w-full object-cover object-center" />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-sm text-slate-600">{description}</p>
        <Link href="/contact" className="mt-6 inline-block">
          <Button size="sm">Zatražite ponudu</Button>
        </Link>
      </div>
    </Card>
  );
}
