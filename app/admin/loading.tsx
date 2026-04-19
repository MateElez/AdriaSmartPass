import { Skeleton } from "@/components/ui/skeleton";

export default function AdminLoading() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 md:px-6">
      <div className="mx-auto w-full max-w-7xl space-y-8">
        <Skeleton className="h-20 bg-white/10" />
        <div className="grid gap-4 md:grid-cols-4">
          <Skeleton className="h-28 bg-white/10" />
          <Skeleton className="h-28 bg-white/10" />
          <Skeleton className="h-28 bg-white/10" />
          <Skeleton className="h-28 bg-white/10" />
        </div>
        <Skeleton className="h-[500px] bg-white/10" />
      </div>
    </main>
  );
}
