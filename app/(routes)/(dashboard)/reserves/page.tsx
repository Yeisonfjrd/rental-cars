import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { TableReserves } from "./components/TableReserves";

export default async function pageReserves() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="bg-[#1A120B] text-[#E3B97B] p-6 rounded-lg shadow-lg">
      <h1 className="mb-6 text-4xl font-semibold">Página de Reservas</h1>
      {orders.length === 0 ? (
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-2xl font-medium">No tienes ningún pedido</h2>
          <p className="text-lg">Haz tus pedidos a través de la página de vehículos</p>
          <Link href="/cars">
            <Button className="bg-[#CA9352] hover:bg-[#E3B97B] text-black transition-all rounded-xl px-6 py-3">
              Lista de vehículos
            </Button>
          </Link>
        </div>
      ) : (
        <TableReserves orders={orders} />
      )}
    </div>
  );
}