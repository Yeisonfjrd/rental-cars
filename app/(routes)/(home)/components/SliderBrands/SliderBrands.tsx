"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { dataBrands } from "./SliderBrands.data";
import { Reveal } from "@/components/Shared/Reveal";

export function SliderBrands() {
  return (
    <Reveal
      position="bottom"
      className="flex justify-center mt-5 mb-10 gap-x-20 lg:pb-20"
    >
      <Carousel
        className="flex justify-center w-full max-w-6xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent className="flex justify-center">
          {dataBrands.map(({ url }) => (
            <CarouselItem
              key={url}
              className="flex justify-center basis-4/4 md:basis-2/4 lg:basis-1/6"
            >
              <Image
                src={`/images/brands/${url}`}
                alt="Brand"
                width={100}
                height={100}
                className="object-contain aspect-[3/2]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Reveal>
  );
}