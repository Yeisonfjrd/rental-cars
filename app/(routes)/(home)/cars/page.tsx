import { Navbar } from "@/components/shared/Navbar";
import { FirtsBlock } from "./components/FirstBlock";
import { SliderBrands } from "./components/SliderBrants";
import { Features } from "./components/Features";
import { OurFleet } from "./components/OurFleet";
import { DriveToday } from "./components/DriveToday";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirtsBlock />
      <SliderBrands />
      <Features />
      <OurFleet />
      <DriveToday />
    </div>
  );
}