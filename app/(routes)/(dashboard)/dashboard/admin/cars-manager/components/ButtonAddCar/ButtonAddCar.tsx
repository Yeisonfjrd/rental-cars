"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { PlusCircle } from "lucide-react";
  import { useState } from "react";
  import { FormAddCar } from "../FormAddCar";
export function ButtonAddCar() {
    const [openDialog, setOpenDialog] = useState(false)

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
            <Button variant="outline" onClick={() => setOpenDialog(true)}>
                <PlusCircle />
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add Car</DialogTitle>
            </DialogHeader>
            <DialogDescription>
                <FormAddCar setOpenDialog={setOpenDialog}/>
            </DialogDescription>
        </DialogContent>
    </Dialog>
  );
}