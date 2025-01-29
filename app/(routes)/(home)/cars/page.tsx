import { Navbar } from "@/components/Shared/Navbar";
import { db } from "@/lib/db";
import { HeaderCars } from "./components/HeaderCars";
import { FiltersAndListCars } from "./components/FiltersAndListCars";
import { Suspense } from "react";
import { SkeletonCars } from "@/components/Shared/SkeletonCars";

export default async function pageCars() {
  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <div className="p-12 mx-auto max-w-7xl">
        <HeaderCars />
        <div className="mt-8">
          <FiltersAndListCars cars={cars} />
        </div>
      </div>
    </div>
  );
}