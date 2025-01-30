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
  const [isLoading, setIsLoading] = useState(false);
  const [dateSelected, setDateSelected] = useState<DateRange>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  const onReserveCar = async () => {
    try {
      setIsLoading(true);

      if (!dateSelected.from || !dateSelected.to) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Por favor selecciona las fechas",
        });
        return;
      }

      const response = await axios.post("/api/checkout", {
        carId: car.id,
        priceDay: car.priceDay,
        startDate: dateSelected.from,
        endDate: dateSelected.to,
        carName: car.name,
      });

      // Redirigir a la página de checkout de Stripe
      window.location.href = response.data.url;

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un error al procesar tu reserva",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Reservar vehículo</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Reservar vehículo</AlertDialogTitle>
          <AlertDialogDescription>
            Selecciona las fechas en las que quieres alquilar el coche
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="py-6">
          <CalendarSelector
            setDateSelected={setDateSelected}
            carPriceDay={car.priceDay}
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={onReserveCar}
            disabled={isLoading}
          >
            {isLoading ? "Procesando..." : "Reservar vehículo"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}