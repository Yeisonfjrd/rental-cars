import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableReservesProps } from "./TableReserves.types";
import { formatPrice } from "@/lib/formatPrice";

export function TableReserves(props: TableReservesProps) {
  const { orders } = props;

  const totalAmount = orders.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount);
  }, 0);

  return (
    <Table>
      <TableCaption>Lista de tus reservas recientes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-[#E3B97B]">Coche</TableHead>
          <TableHead className="text-[#E3B97B]">Fecha Inicio</TableHead>
          <TableHead className="text-[#E3B97B]">Fecha Fin</TableHead>
          <TableHead className="text-[#E3B97B]">Estado</TableHead>
          <TableHead className="text-[#E3B97B] text-right">Monto</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium text-[#E3B97B]">{order.carName}</TableCell>
            <TableCell className="text-[#E3B97B]">
              {new Date(order.orderDate).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-[#E3B97B]">
              {new Date(order.orderEndDate).toLocaleDateString()}
            </TableCell>
            <TableCell>
              <div className={`p-2 rounded-lg w-fit ${order.status === 'Confirmada' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
                {order.status}
              </div>
            </TableCell>
            <TableCell className="text-right text-[#E3B97B]">
              {formatPrice(Number(order.totalAmount))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4} className="font-medium text-[#E3B97B]">Total</TableCell>
          <TableCell className="text-right text-[#E3B97B]">
            {formatPrice(totalAmount)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}