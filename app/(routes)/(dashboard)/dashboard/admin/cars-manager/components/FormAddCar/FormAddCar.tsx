"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { formSchema } from "./FormAddCar.form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import { FormAddCarProps } from "./FormAddCar.type";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export function FormAddCar(props: FormAddCarProps) {
    const { setOpenDialog } = props;
    const [photoUploaded, setPhotoUploaded] = useState(false)
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            cv: 0,
            transmission: "manual",
            people: 0,
            photo: [],
            engine: "gasoline",
            type: "sedan",
            priceDay: 0,
            isPublished: false,
        },
    });
    
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setOpenDialog(false)
        try {
            await axios.post("/api/car", values)
            toast({
                title: "Car added successfully",
                description: "The car has been added to the database",
                variant: "default",
            });
            router.refresh()
        } catch (err) {
            toast({
                title: "Something went wrong",
                description: err instanceof Error ? err.message : "Please try again later",
                variant: "destructive",
            });
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tesla Model S Plaid" {...field} />
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
                                <FormLabel>Power</FormLabel>
                                <FormControl>
                                    <Input placeholder="150 CV" type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
        
                    {/* Componente Select mejorado */}
                    <FormField
                        control={form.control}
                        name="transmission"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Transmission</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select transmission type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="manual">Manual</SelectItem>
                                        <SelectItem value="automatic">Automatic</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
        
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="people"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Passengers</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select passengers" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {[2, 3, 4, 5, 7].map(num => (
                                                <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                                            ))}
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
                                    <FormLabel>Engine Type</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select engine" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {["gasoil", "electric", "hybrid", "diesel", "petrol"].map(type => (
                                                <SelectItem key={type} value={type}>
                                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
        
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Vehicle Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select vehicle type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {["sedan", "hatchback", "suv", "coupe", "convertible"].map(type => (
                                            <SelectItem key={type} value={type}>
                                                {type.charAt(0).toUpperCase() + type.slice(1)}
                                            </SelectItem>
                                        ))}
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
                            <FormLabel>Car Image</FormLabel>
                            <FormControl>
                            {photoUploaded ? (
                                <p className="text-sm">Image uploaded!</p>
                            ) : (
                                <UploadButton
                                className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted outline-3"
                                {...field}
                                endpoint="photo"
                                onClientUploadComplete={(res) => {
                                    form.setValue("photo", [...field.value, res?.[0]?.url || ""]);
                                    setPhotoUploaded(true);
                                }}
                                onUploadError={(error: Error) => {
                                    toast({
                                        title: "Upload failed",
                                        description: error.message,
                                        variant: "destructive",
                                    });
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
                                <FormLabel>Daily Price</FormLabel>
                                <FormControl>
                                    <Input 
                                        placeholder="Price per day" 
                                        type="string" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </>
        
                <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                    type="submit"
                >
                    Add Car
                </Button>
            </form>
        </Form>
    )
}