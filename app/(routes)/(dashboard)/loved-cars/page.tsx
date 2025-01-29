import { auth } from "@clerk/nextjs/server";
import { ListLovedCars } from "./components/ListLovedCars";
import { redirect } from "next/navigation";

export default function pageLovedCars() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div className="bg-[#1A120B] text-[#E3B97B] p-6 rounded-lg shadow-lg">
      <h1 className="mb-6 text-4xl font-semibold">Coches que te gustan</h1>
      <ListLovedCars />
    </div>
  );
}