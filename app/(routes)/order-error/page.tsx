import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function pageOrderError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-3xl font-semibold text-[#8A6D3B]">
            ¡OPS! Ha ocurrido un error. Vuelva a intentarlo más tarde.
          </h1>
          <p className="text-lg text-[#555]">
            Lo sentimos por los inconvenientes, por favor inténtalo nuevamente más tarde.
          </p>
          <Link href="/">
            <Button className="mt-6 bg-[#8A6D3B] text-white hover:bg-[#6E4B2F] transition-all duration-200">
              Volver a ver los productos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}