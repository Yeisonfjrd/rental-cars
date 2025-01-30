"use client";
import { Car } from "@prisma/client";
import { ListCarsProps } from "./ListCars.types";
import Image from "next/image";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { useLovedCars } from "@/hooks/use-loved-cars";

export function ListCars(props: ListCarsProps) {
  const { cars } = props;
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedCars();

  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {cars.map((car: Car) => {
        const {
          priceDay,
          photo,
          cv,
          engine,
          id,
          people,
          name,
          transmission,
          type,
        } = car;

        const likedCar = lovedItems.some((item) => item.id === car.id);

        return (
          <div key={id} className="p-4 transition-all shadow-lg rounded-xl hover:shadow-2xl">
            <Image
              src={photo}
              alt={name}
              width={400}
              height={600}
              className="object-cover rounded-xl"
            />
            <div className="p-4">
              <div className="flex flex-col mb-4 gap-x-4">
                <p className="text-2xl font-semibold text-[#CA9352]">{name}</p>
                <p className="text-lg ">{priceDay}€ /día</p>
              </div>
              <p className="flex items-center mb-2 text-sm text-gray-300">
                <Gem className="w-4 h-4 mr-2" strokeWidth={1} />
                {type}
              </p>
              <p className="flex items-center mb-2 text-sm text-gray-300">
                <Wrench className="w-4 h-4 mr-2" strokeWidth={1} />
                {transmission}
              </p>
              <p className="flex items-center mb-2 text-sm text-gray-300">
                <Users className="w-4 h-4 mr-2" strokeWidth={1} />
                {people}
              </p>
              <p className="flex items-center mb-2 text-sm text-gray-300">
                <Fuel className="w-4 h-4 mr-2" strokeWidth={1} />
                {engine}
              </p>
              <p className="flex items-center mb-4 text-sm text-gray-300">
                <Gauge className="w-4 h-4 mr-2" strokeWidth={1} />
                {cv} CV
              </p>

              <div className="flex items-center justify-center gap-x-4">
                <ModalAddReservation car={car} />
                <Heart
                  className={`mt-2 cursor-pointer transition-transform ${likedCar ? "fill-[#CA9352]" : "stroke-[#CA9352]"}`}
                  onClick={
                    likedCar
                      ? () => removeLovedItem(car.id)
                      : () => addLoveItem(car)
                  }
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}