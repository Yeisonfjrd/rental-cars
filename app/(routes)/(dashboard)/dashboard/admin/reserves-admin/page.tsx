import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { TableReserves } from "./components/TableReserves";
import { isAdministrator } from "@/lib/isAdministrator";

export default async function pageReservesAdmin() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user || !isAdministrator(userId)) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="bg-gradient-to-r from-[#2C1F18] to-[#3A2A23] min-h-screen text-white">
      <div className="p-6 mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold mb-6 text-[#CA9352]">Reserves</h1>
        <p className="text-lg mb-6 text-[#DDD]">Manage and review all car reservations.</p>

        <div className="bg-[#4A3623] p-6 rounded-lg shadow-lg">
          <TableReserves orders={orders} />
        </div>
      </div>
    </div>
  );
}