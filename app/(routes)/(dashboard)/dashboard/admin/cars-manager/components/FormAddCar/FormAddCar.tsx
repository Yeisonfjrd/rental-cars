"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "./FormAddCar.form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import { FormAddCarProps } from "./FormAddCar.types";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export function FormAddCar(props: FormAddCarProps) {
  const { setOpenDialog } = props;
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cv: "",
      transmission: "",
      people: "",
      photo: "",
      engine: "",
      type: "",
      priceDay: "",
      isPublish: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setOpenDialog(false);
    try {
      await axios.post(`/api/car`, values);
      toast({
        title: "Coche creado ✅",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const { isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-2">
        <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xl text-[#CA9352]">Nombre del coche</FormLabel>
            <FormControl>
              <Input
                placeholder="Tesla Model S Plaid"
                {...field}
                className="border-[#CA9352] bg-gray-900 text-white placeholder-[#CA9352] focus:ring-2 focus:ring-[#CA9352] rounded-lg"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="cv"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xl text-[#CA9352]">Potencia</FormLabel>
            <FormControl>
              <Input
                placeholder="150 CV"
                type="number"
                {...field}
                className="border-[#CA9352] bg-gray-900 text-white placeholder-[#CA9352] focus:ring-2 focus:ring-[#CA9352] rounded-lg"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
          <FormField
            control={form.control}
            name="transmission"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-[#CA9352]">Transmisión</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-gray-800 text-white border-2 border-[#CA9352] focus:ring-2 focus:ring-[#CA9352] hover:bg-[#CA9352]/10 rounded-lg">
                      <SelectValue placeholder="Selecciona el tipo de transmisión" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-800 border-2 border-[#CA9352] rounded-lg">
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="automatic">Automática</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="people"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-[#CA9352]">Personas</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-gray-800 text-white border-2 border-[#CA9352] focus:ring-2 focus:ring-[#CA9352] hover:bg-[#CA9352]/10 rounded-lg">
                      <SelectValue placeholder="Selecciona la cantidad de personas" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-800 border-2 border-[#CA9352] rounded-lg">
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="engine"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-[#CA9352]">Motor</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-gray-800 text-white border-2 border-[#CA9352] focus:ring-2 focus:ring-[#CA9352] hover:bg-[#CA9352]/10 rounded-lg">
                      <SelectValue placeholder="Selecciona el motor del coche" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-800 border-2 border-[#CA9352] rounded-lg">
                    <SelectItem value="gasoil">Gasolina</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="electric">Eléctrico</SelectItem>
                    <SelectItem value="hybrid">Híbrido</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-[#CA9352]">Tipo</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-gray-800 text-white border-2 border-[#CA9352] focus:ring-2 focus:ring-[#CA9352] hover:bg-[#CA9352]/10 rounded-lg">
                      <SelectValue placeholder="Selecciona el tipo de coche" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-800 border-2 border-[#CA9352] rounded-lg">
                    <SelectItem value="sedan">Sedán</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="coupe">Coupé</SelectItem>
                    <SelectItem value="familiar">Familiar</SelectItem>
                    <SelectItem value="luxe">De lujo</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
      <FormField 
        control={form.control}
        name="photo"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xl text-[#CA9352]">Imagen del coche</FormLabel>
            <FormControl>
              {photoUploaded ? (
                <p className="text-sm text-[#CA9352]">¡Imagen subida!</p>
              ) : (
                <UploadButton
                  className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted outline-3 hover:bg-[#CA9352] transition-all"
                  {...field}
                  endpoint="photo"
                  onClientUploadComplete={(res) => {
                    form.setValue("photo", res?.[0].url);
                    setPhotoUploaded(true);
                  }}
                  onUploadError={(error: Error) => {
                    console.log(error);
                  }}
                />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="priceDay"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xl text-[#CA9352]">Precio por día</FormLabel>
            <FormControl>
              <Input
                placeholder="20€"
                type="number"
                {...field}
                className="border-[#CA9352] bg-gray-900 text-white placeholder-[#CA9352] focus:ring-2 focus:ring-[#CA9352] rounded-lg"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        </div>
        <Button 
          type="submit" 
          className="w-full mt-5 bg-[#CA9352] text-white hover:bg-[#9e7c3c] rounded-lg"
          disabled={!form.formState.isValid}
        > 
          Crear coche
        </Button>
      </form>
    </Form>
  );
}