import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrderConfirmationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6 mx-auto rounded-lg shadow-lg max-w-7xl bg-gradient-to-r from-[#8A6D3B] to-[#6E4B2F]">
        <div className="flex flex-col items-center justify-center gap-6 text-center text-white">
          <h1 className="text-3xl font-semibold">¡Gracias por tu compra!</h1>
          <p className="text-lg text-[#D27A6F]">
            Hemos recibido tu pedido y lo estamos procesando. Recibirás un correo electrónico con los detalles en breve.
          </p>
          <p className="text-lg text-[#D27A6F]">
            Mientras tanto, puedes explorar más productos en nuestra tienda.
          </p>
          <Link href="/">
            <Button className="mt-6 bg-[#8A6D3B] text-white hover:bg-[#6E4B2F] transition-all duration-200">
              Volver a la tienda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}