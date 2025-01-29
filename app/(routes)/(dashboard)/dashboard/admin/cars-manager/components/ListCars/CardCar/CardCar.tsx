"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CardCarProps } from "./CardCar.type";
import { ButtonEditCar } from "./ButtonEditCar";
import axios from "axios";

export function CardCar(props: CardCarProps) {
  const { car } = props;
  const router = useRouter();

  const deleteCar = async () => {
    try {
      await axios.delete(`/api/car/${car.id}`);
      toast({ title: "Coche eliminado ❌" });
      router.refresh();
    } catch (error) {
      toast({
        title: "Algo salió mal",
        variant: "destructive",
      });
    }
  };

  const handlerPublishCar = async (publish: boolean) => {
    try {
      await axios.patch(`/api/car/${car.id}`, { isPublish: publish });
      if (publish) {
        toast({
          title: "Coche publicado ✌🏽",
        });
      } else {
        toast({
          title: "Coche no publicado ⚠️",
        });
      }
      router.refresh();
    } catch (error) {
      toast({
        title: "Algo salió mal",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative p-4 bg-gradient-to-r from-[#2C1F18] to-[#3A2A23] rounded-lg shadow-lg transition-all duration-300">
      <Image
        src={car.photo}
        alt={car.name}
        width={400}
        height={600}
        className="rounded-lg"
      />
      {car.isPublish ? (
        <p className="absolute top-0 right-0 w-full p-2 text-center text-white bg-[#8A6D3B] rounded-t-lg">
          Publicado
        </p>
      ) : (
        <p className="absolute top-0 left-0 right-0 w-full p-2 text-center text-white bg-[#D27A6F] rounded-t-lg">
          No publicado
        </p>
      )}

      <div className="relative p-4">
        <div className="flex flex-col mb-3 gap-x-4">
          <p className="text-xl text-[#CA9352] font-semibold">{car.name}</p>
          <p className="text-lg text-[#CA9352]">{car.priceDay}€ /día</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-4">
          <p className="flex items-center text-[#DDD]">
            <Gem className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.type}
          </p>

          <p className="flex items-center text-[#DDD]">
            <Wrench className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.transmission}
          </p>

          <p className="flex items-center text-[#DDD]">
            <Users className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.people}
          </p>

          <p className="flex items-center text-[#DDD]">
            <Fuel className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.engine}
          </p>

          <p className="flex items-center text-[#DDD]">
            <Gauge className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.cv} CV
          </p>
        </div>

        <div className="flex justify-between mt-4 gap-x-4">
          <Button
            variant="outline"
            className="border-[#8A6D3B] text-[#8A6D3B] hover:bg-[#8A6D3B] hover:text-white transition-all duration-200"
            onClick={deleteCar}
          >
            Eliminar
            <Trash className="w-4 h-4 ml-2" />
          </Button>

          <ButtonEditCar carData={car} />
        </div>

        {car.isPublish ? (
          <Button
            className="w-full mt-3 border-[#D27A6F] text-[#D27A6F] hover:bg-[#D27A6F] hover:text-white transition-all duration-200"
            variant="outline"
            onClick={() => handlerPublishCar(false)}
          >
            Despublicar
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            className="w-full mt-3 bg-[#8A6D3B] text-white hover:bg-[#6E4B2F] transition-all duration-200"
            onClick={() => handlerPublishCar(true)}
          >
            Publicar
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
