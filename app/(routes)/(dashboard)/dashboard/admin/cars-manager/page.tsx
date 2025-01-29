import { auth } from "@clerk/nextjs/server";
import { ButtonAddCar } from "./components/ButtonAddCar";
import { ListCars } from "./components/ListCars";
import { db } from "@/lib/db";

export default async function CarsManagerPage() {
  const { userId } = auth();

  const car = await db.car.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-between mb-8">
        <h2 className="text-3xl font-bold text-[#CA9352]">Gestiona tus coches</h2>
        <ButtonAddCar />
      </div>
      <ListCars cars={car} />
    </div>
  );
}