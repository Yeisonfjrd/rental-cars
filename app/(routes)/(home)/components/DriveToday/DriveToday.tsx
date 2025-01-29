import { Reveal } from "@/components/Shared/Reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function DriveToday() {
  return (
    <div className="p-6 mx-auto lg:my-32 max-w-7xl">
      <div className="bg-[url('/images/background-2.jpg')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative">
        <div className="relative z-10 items-center lg:flex gap-x-6">
          <div className="text-white lg:w-1/2">
            <h3 className="text-4xl lg:text-6xl font-extrabold text-[#CA9352]">
              Conduce el coche de tus sueños hoy
            </h3>
            <p className="my-5 text-xl text-gray-300 lg:text-2xl">
              Regístrate y explora el mundo de los coches premium.
            </p>
            <Link href="/sign-in">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#CA9352] text-[#CA9352] hover:bg-[#CA9352] hover:text-white transition-all duration-300"
              >
                Regístrate aquí
              </Button>
            </Link>
          </div>
          <div className="mt-8 lg:w-1/2 lg:mt-0">
            <Reveal className="lg:absolute lg:-right-36 top-5" position="bottom">
              <Image
                src="/images/audi.png"
                alt="Conduce el coche"
                width={550}
                height={250}
                className="object-cover rounded-xl"
              />
            </Reveal>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-xl"></div>
      </div>
    </div>
  );
}