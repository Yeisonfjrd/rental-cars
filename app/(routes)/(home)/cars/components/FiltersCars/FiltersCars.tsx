import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FiltersCarsProps } from "./FiltersCars.types";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FilterCars(props: FiltersCarsProps) {
  const { clearFilters, setFilters, filters } = props;

  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };

  return (
    <div className="flex flex-col mt-5 mb-8 space-y-4 md:flex-row md:space-y-0 md:gap-6">
      <Select
        onValueChange={(value) => handleFilter("type", value)}
        value={filters.type}
      >
        <SelectTrigger className="w-[180px] bg-[#2C1D10] text-[#E3B97B] border border-[#E3B97B] rounded-lg">
          <SelectValue placeholder="Tipo de vehículo" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo de vehículo</SelectLabel>
            <SelectItem value="sedan">Sedán</SelectItem>
            <SelectItem value="suv">Suv</SelectItem>
            <SelectItem value="coupe">Coupé</SelectItem>
            <SelectItem value="familiar">Familiar</SelectItem>
            <SelectItem value="luxe">De luxe</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("transmission", value)}
        value={filters.transmission}
      >
        <SelectTrigger className="w-[180px] bg-[#2C1D10] text-[#E3B97B] border border-[#E3B97B] rounded-lg">
          <SelectValue placeholder="Cambio de marchas" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Cambio de marchas</SelectLabel>
            <SelectItem value="manual">Manual</SelectItem>
            <SelectItem value="automatic">Automático</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("engine", value)}
        value={filters.engine}
      >
        <SelectTrigger className="w-[180px] bg-[#2C1D10] text-[#E3B97B] border border-[#E3B97B] rounded-lg">
          <SelectValue placeholder="Tipo de motor" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo de motor</SelectLabel>
            <SelectItem value="gasoil">Gasoil</SelectItem>
            <SelectItem value="diesel">Diesel</SelectItem>
            <SelectItem value="electric">Eléctrico</SelectItem>
            <SelectItem value="hybrid">Híbrido</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("people", value)}
        value={filters.people}
      >
        <SelectTrigger className="w-[180px] bg-[#2C1D10] text-[#E3B97B] border border-[#E3B97B] rounded-lg">
          <SelectValue placeholder="Personas" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Personas</SelectLabel>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="7">7</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button
        onClick={clearFilters}
        className="bg-[#E3B97B] text-[#1A120B] hover:bg-[#C8A56E] rounded-lg px-4 py-2 flex items-center"
      >
        Remove filters <Trash className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}