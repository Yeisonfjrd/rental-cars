"use client";

import { Button } from "@/components/ui/button";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { useAuth } from "@clerk/nextjs";
import { Car } from "@prisma/client";
import Link from "next/link";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { ListCarsProps } from "./ListCars.types";
import { SkeletonCars } from "@/components/Shared/SkeletonCars";

export function ListCars(props: ListCarsProps) {
  const { cars } = props;
  const { userId } = useAuth();
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedCars();

  if (!cars) {
    return <SkeletonCars />;
  }

  return (
    <>
      {cars.length === 0 && (
        <p className="text-lg font-semibold text-center text-gray-600">
          No se han encontrado vehículos con estos filtros
        </p>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cars.map((car: Car) => {
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
          const likedCar = lovedItems.some((item) => item.id === car.id);

          return (
            <div
              key={id}
              className="rounded-lg border border-transparent hover:border-[#E3B97B] shadow-md hover:shadow-lg transition duration-300"
            >
              <Image
                src={photo}
                alt=""
                width={400}
                height={600}
                className="object-cover rounded-t-lg"
              />
              <div className="p-4">
                <div className="flex flex-col mb-4 gap-x-4">
                  <p className="text-xl font-semibold text-gray-800">{name}</p>
                  <p className="text-lg text-[#E3B97B]">{priceDay}€</p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-600">
                    <Gem className="w-4 h-4 mr-2" strokeWidth={1} />
                    {type}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Wrench className="w-4 h-4 mr-2" strokeWidth={1} />
                    {transmission}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" strokeWidth={1} />
                    {people}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Fuel className="w-4 h-4 mr-2" strokeWidth={1} />
                    {engine}
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Gauge className="w-4 h-4 mr-2" strokeWidth={1} />
                    {cv} CV
                  </p>
                </div>

                {userId ? (
                  <div className="flex items-center justify-center mt-4 gap-x-3">
                    <ModalAddReservation car={car} />
                    <Heart
                      className={`cursor-pointer ${likedCar ? "fill-[#E3B97B]" : "fill-gray-400"}`}
                      onClick={
                        likedCar
                          ? () => removeLovedItem(car.id)
                          : () => addLoveItem(car)
                      }
                    />
                  </div>
                ) : (
                  <div className="w-full mt-4 text-center">
                    <Link href="/sign-in">
                      <Button variant="outline" className="w-full text-[#E3B97B]">
                        Inicia sesión para reservar
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}