import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import {
  categoryOurFleet,
  dataFirstBlockOurFleet,
  dataSecondBlockOurFleet,
} from "./OurFleet.data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function OurFleet() {
  return (
    <div className="max-w-6xl p-6 py-12 mx-auto text-center lg:py-40">
      <h3 className="text-2xl lg:text-6xl font-extrabold text-[#CA9352]">
        Nuestra Lista de Vehículos
      </h3>
      <p className="w-full max-w-2xl mx-auto mt-2 mb-5 text-lg text-center text-gray-300 lg:mt-5 lg:text-xl lg:mb-10">
        No te niegues el placer de conducir los mejores autos premium del mundo, aquí y ahora.
      </p>
      <div className="grid items-center justify-center max-w-2xl grid-cols-2 gap-4 mx-auto mb-5 lg:grid-cols-6">
        {categoryOurFleet.map(({ name, active }) => (
          <div
            key={name}
            className={cn(
              "rounded-xl py-2 px-3 text-center font-semibold",
              active
                ? "bg-[#CA9352] text-white"
                : "bg-[#775732] text-gray-300 hover:bg-[#CA9352] hover:text-white transition-all duration-300"
            )}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="mb-10">
        <div className="grid grid-cols-3 mb-6 gap-x-6">
          {dataFirstBlockOurFleet.map(({ url }) => (
            <div key={url} className="relative group">
              <Image
                src={`/images/cars/${url}`}
                alt="Car"
                width={400}
                height={300}
                className="object-cover transition-all duration-300 transform rounded-xl group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 bg-black bg-opacity-25 opacity-0 rounded-xl group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
        <div className="grid max-w-5xl grid-cols-4 mx-auto gap-x-6">
          {dataSecondBlockOurFleet.map(({ url }) => (
            <div key={url} className="relative group">
              <Image
                src={`/images/cars/${url}`}
                alt="Car"
                width={400}
                height={300}
                className="rounded-xl aspect-[3/2] object-cover transition-all duration-300 transform group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 bg-black bg-opacity-25 opacity-0 rounded-xl group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
      <Link href="/cars">
        <Button className="rounded-xl p-6 text-lg mt-5 border-2 border-[#CA9352] text-[#CA9352] hover:bg-[#CA9352] hover:text-white transition-all duration-300">
          Ver todos los modelos
          <MoveRight className="ml-2" />
        </Button>
      </Link>
    </div>
  );
}