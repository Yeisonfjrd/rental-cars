import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "@/components/ui/use-toast";
import { Car } from "@prisma/client";

interface UseLovedCarsType {
  lovedItems: Car[];
  addLoveItem: (data: Car) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedCars = create(
  persist<UseLovedCarsType>(
    (set, get) => ({
      lovedItems: [],
      addLoveItem: (data: Car) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingItem) {
          toast({
            title: "El coche ya está en tu lista de favoritos 💔",
            description: "No puedes agregarlo nuevamente.",
          });
          return;
        }

        set({
          lovedItems: [...currentLovedItems, data],
        });

        toast({
          title: "Coche añadido a la lista de favoritos 🚙",
        });
      },

      removeLovedItem: (id: string) => {
        const updatedItems = get().lovedItems.filter((item) => item.id !== id);

        set({
          lovedItems: updatedItems,
        });

        toast({
          title: "El coche ha sido eliminado de la lista 😢",
        });
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);