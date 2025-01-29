import { Navbar } from "@/components/Shared/Navbar";
import { FirtsBlock } from "./components/FirtsBlock";
import { SliderBrands } from "./components/SliderBrands";
import { Features } from "./components/Features";
import { OurFleet } from "./components/OurFleet";
import { DriveToday } from "./components/DriveToday";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#F9F2E7] to-[#E6D1A4]">
      <Navbar />
      <FirtsBlock />
      <div className="py-12 bg-[#F2E6D9] flex justify-center items-center">
        <SliderBrands />
      </div>
      <div className="py-12 bg-[#F9F2E7]">
        <Features />
      </div>
      <div className="py-12 bg-[#F2E6D9]">
        <OurFleet />
      </div>
      <div className="py-12 bg-gradient-to-b from-[#F9F2E7] to-[#E6D1A4]">
        <DriveToday />
      </div>
    </div>
  );
}