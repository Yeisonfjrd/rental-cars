"use client";

import { CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarSelectorProps } from "./CalendarSelector.types";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CalendarSelector(props: CalendarSelectorProps) {
  const { setDateSelected, className, carPriceDay } = props;
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  useEffect(() => {
    setDateSelected({
      from: date?.from,
      to: date?.to,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const calculateDaysBetween = (from: Date, to: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInTime = to.getTime() - from.getTime();
    return Math.round(diffInTime / oneDay);
  };

  const daysBetween =
    date?.from && date?.to ? calculateDaysBetween(date.from, date.to) : 0;

  return (
    <>
      <div className={cn("grid gap-4", className)}>
        {date?.from && date?.to && (
          <>
            <p className="mt-4 text-lg text-[#8A6D3B]">
              Días totales: {daysBetween}
            </p>
            <p className="mb-4 text-md text-[#6C4F3D]">
              Precio total: {daysBetween * Number(carPriceDay)}€ (Imp. incluidos)
            </p>
          </>
        )}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn(
                "justify-start text-left font-normal text-[#8A6D3B] border-[#8A6D3B] hover:bg-[#F9F4E8] hover:text-[#6C4F3D]",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="w-4 h-4 mr-2 text-[#8A6D3B]" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} - {""}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Selecciona una fecha</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-gray-800" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}