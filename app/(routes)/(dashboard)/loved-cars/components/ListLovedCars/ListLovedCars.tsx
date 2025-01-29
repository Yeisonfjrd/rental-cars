"use client";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { Car } from "@prisma/client";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";

export function ListLovedCars() {
  const { lovedItems, removeLovedItem } = useLovedCars();

  return (
    <>
      {lovedItems.length === 0 ? (
        <h2 className="text-xl font-semibold text-[#E3B97B]">
          Aún no dispones de coches que te gustan
        </h2>
      ) : (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {lovedItems.map((car: Car) => {
            const {
              priceDay,
              photo,
              name,
              type,
              transmission,
              people,
              engine,
              cv,
              id,
            } = car;

            return (
              <div
                className="p-1 transition-shadow duration-300 ease-in-out rounded-lg shadow-md hover:shadow-lg"
                key={id}
              >
                <Image
                  src={photo}
                  alt={name}
                  width={400}
                  height={600}
                  className="object-cover rounded-lg"
                />
                <div className="p-4 bg-[#1A120B] text-[#E3B97B] rounded-lg">
                  <div className="flex flex-col mb-3 gap-x-4">
                    <p className="text-2xl font-semibold">{name}</p>
                    <p className="text-lg">{priceDay}€ /día</p>
                  </div>
                  <p className="flex items-center text-gray-300">
                    <Gem className="w-4 h-4 mr-2" strokeWidth={1} />
                    {type}
                  </p>
                  <p className="flex items-center text-gray-300">
                    <Wrench className="w-4 h-4 mr-2" strokeWidth={1} />
                    {transmission}
                  </p>
                  <p className="flex items-center text-gray-300">
                    <Users className="w-4 h-4 mr-2" strokeWidth={1} />
                    {people}
                  </p>
                  <p className="flex items-center text-gray-300">
                    <Fuel className="w-4 h-4 mr-2" strokeWidth={1} />
                    {engine}
                  </p>
                  <p className="flex items-center text-gray-300">
                    <Gauge className="w-4 h-4 mr-2" strokeWidth={1} />
                    {cv} CV
                  </p>

                  <div className="flex items-center justify-center mt-4 gap-x-3">
                    <ModalAddReservation car={car} />
                    <Heart
                      className="transition-colors duration-200 cursor-pointer fill-gray-500 hover:fill-[#CA9352]"
                      onClick={() => removeLovedItem(car.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}