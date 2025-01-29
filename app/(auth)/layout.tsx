import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#775732] to-[#CA9352]">
      {/* Contenedor principal */}
      <div className="relative z-10 grid lg:grid-cols-2 max-w-6xl w-full bg-[#F4E9D8]/10 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden">
        {/* Sección de formulario */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-[#F4E9D8]/10 p-6 rounded-lg">
            {children}
            <p className="text-center text-[#2C2C2C] mt-4">
              ¿No tienes una cuenta?{" "}
              <Link href="/sign-up" className="text-[#CA9352] hover:text-[#D4AF37] font-semibold">
                Regístrate y obtén un 10% de descuento.
              </Link>
            </p>
          </div>
        </div>

        {/* Sección de presentación */}
        <div className="hidden lg:flex flex-col items-center justify-center p-8 bg-[#775732]/90">
          <Image src="/logo.svg" alt="Logo RoadEra" width="120" height="120" className="mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">RoadEra</h1>
          <p className="text-lg text-[#F4E9D8] mb-8 text-center">
            Tu viaje comienza aquí. Descubre los mejores coches para tu aventura.
          </p>
          
          {/* Testimonios */}
          <div className="space-y-4">
            <div className="bg-[#F4E9D8] p-4 rounded-lg">
              <p className="text-[#2C2C2C]">¡Increíble servicio! Encontré el coche perfecto para mi viaje.</p>
              <p className="text-sm text-[#775732]">- María G.</p>
            </div>
            <div className="bg-[#F4E9D8] p-4 rounded-lg">
              <p className="text-[#2C2C2C]">Fácil de usar y con coches de primera calidad.</p>
              <p className="text-sm text-[#775732]">- Carlos R.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}