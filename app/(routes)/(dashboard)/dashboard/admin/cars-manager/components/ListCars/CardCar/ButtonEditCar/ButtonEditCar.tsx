"use client";
import { Button } from "@/components/ui/button";
import { ButtonEditCarProps } from "./ButtonEditCar.types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { FormEditCar } from "../FormEditCar";

export function ButtonEditCar(props: ButtonEditCarProps) {
  const { carData } = props;
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={() => setOpenDialog(true)}
          className="text-[#CA9352] border-[#CA9352] hover:bg-[#CA9352] hover:text-white transition-all rounded-lg"
        >
          Editar
          <Pencil className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-6 text-white bg-gray-800 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#CA9352]">Editar coche</DialogTitle>
          <DialogDescription>
            <FormEditCar setOpenDialog={setOpenDialog} carData={carData} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}