import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCars() {
  const numberItems = 8;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[...Array(numberItems)].map((_, index) => (
        <div key={index} className="space-y-4">
          <Skeleton className="h-[200px] w-full rounded-xl bg-[#E8D6B0]" />
          <Skeleton className="h-4 w-[200px] mt-2 bg-[#D2B89D]" />
          <Skeleton className="h-4 w-[200px] mt-2 bg-[#D2B89D]" />
          <Skeleton className="h-4 w-[200px] mt-2 bg-[#D2B89D]" />
        </div>
      ))}
    </div>
  );
}