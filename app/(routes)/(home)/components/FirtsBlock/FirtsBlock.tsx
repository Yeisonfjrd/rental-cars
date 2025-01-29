import { Reveal } from "@/components/Shared/Reveal";
import Image from "next/image";

export function FirtsBlock() {
  return (
    <div className="grid items-center lg:grid-cols-2 lg:px-0 lg:py-32">
      <Reveal className="p-8 lg:pl-30" position="bottom">
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight text-[#CA9352]">
          Autos
          <span className="block text-[#775732]">De Alquiler Premium</span>
          <span className="block text-[#CA9352]">En todo el mundo</span>
        </h1>
        <p className="max-w-md mt-4 text-lg text-gray-300 lg:mt-6 lg:text-2xl">
          No te nieges el placer de conducir los mejores autos premium de todo el mundo aquí y ahora.
        </p>
      </Reveal>
      <Reveal className="flex justify-end" position="right">
        <Image
          src="/images/porsche.png"
          alt="Rent cars"
          width={900}
          height={900}
          priority
          className="rounded-xl"
        />
      </Reveal>
    </div>
  );
}
