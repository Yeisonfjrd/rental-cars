import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  cv: z.coerce.number().min(1, "Horsepower must be at least 1 CV"),
  transmission: z.enum(["manual", "automatic"], {
    required_error: "Select transmission type",
  }),
  people: z.coerce
    .number()
    .min(2, "Must be at least 2 passengers")
    .max(9, "Maximum 9 passengers"),
    photo: z.array(z.string()).min(1, "At least one image is required"),
  engine: z.enum(["gasoline", "diesel", "hybrid", "electric"], {
    required_error: "Select engine type",
  }),
  type: z.enum(["sedan", "suv", "coupe", "convertible", "van"], {
    required_error: "Select vehicle type",
  }),
  priceDay: z.coerce
    .number()
    .min(10, "Minimum price per day is $10")
    .max(10000, "Maximum price per day is $10,000"),
  isPublished: z.boolean().default(false),
});

export type CarFormValues = z.infer<typeof formSchema>;