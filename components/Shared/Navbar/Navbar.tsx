"use client";
import { Button } from "@/components/ui/button";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const { userId } = useAuth();
  const { lovedItems } = useLovedCars();

  return (
    <div className="relative z-10 max-w-6xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between bg-transparent">
        <Link href="/" className="flex items-center gap-x-4">
          <Image
            src="/logo.svg"
            alt="RoadEra"
            width={60}
            height={60}
          />
          <span className="text-3xl font-extrabold text-[#CA9352] tracking-wide">
            RoadEra
          </span>
        </Link>

        <div className="flex items-center gap-x-8 text-[#E3B97B] text-lg font-medium">
          <Link href="/cars" className="transition-colors hover:text-[#CA9352]">
            Ver coches
          </Link>
          <Link href="/dashboard" className="transition-colors hover:text-[#CA9352]">
            Mi panel
          </Link>
          {userId ? (
            <div className="flex items-center gap-x-6">
              <Link href="/loved-cars" className="relative">
                <Heart
                  strokeWidth={1.5}
                  className={`cursor-pointer transition-transform hover:scale-110 ${
                    lovedItems.length > 0 ? "fill-[#CA9352]" : "stroke-[#CA9352]"
                  }`}
                  size={26}
                />
              </Link>
              <UserButton />
            </div>
          ) : (
            <Link href="/sign-in">
              <Button className="bg-[#CA9352] text-black font-semibold hover:bg-[#E3B97B] transition-colors flex items-center gap-x-3 px-6 py-2 rounded-lg">
                Iniciar sesión
                <User className="w-5 h-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}