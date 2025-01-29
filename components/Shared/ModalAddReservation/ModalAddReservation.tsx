import { Button } from "@/components/ui/button";
import { ModalAddReservationProps } from "./ModalAddReservation.types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Car } from "@prisma/client";
import { CalendarSelector } from "./CalendarSelector";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

export function ModalAddReservation(props: ModalAddReservationProps) {
  const { car } = props;
  const [dateSelected, setDateSelected] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  const onReserveCar = async (car: Car, dateSelected: DateRange) => {
    const response = await axios.post("/api/checkout", {
      carId: car.id,
      priceDay: car.priceDay,
      startDate: dateSelected.from,
      endDate: dateSelected.to,
      carName: car.name,
    });

    window.location = response.data.url;
    toast({
      title: "Coche reservado ✌🏽",
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full mt-3 text-[#8A6D3B] border-[#8A6D3B] hover:bg-[#8A6D3B] hover:text-white transition-all duration-200"
        >
          Reservar vehículo
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#F9F4E8] p-6 rounded-lg shadow-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#8A6D3B] text-2xl font-semibold">
            Selecciona las fechas en las que quieres alquilar el coche
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[#555]">
            <CalendarSelector
              setDateSelected={setDateSelected}
              carPriceDay={car.priceDay}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-[#D27A6F] hover:bg-[#D27A6F] hover:text-white transition-all duration-200">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            className="text-white bg-[#8A6D3B] hover:bg-[#6E4B2F] transition-all duration-200"
            onClick={() => onReserveCar(car, dateSelected)}
          >
            Reservar vehículo
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}