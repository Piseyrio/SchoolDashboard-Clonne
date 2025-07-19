import { z } from "zod";

export const userStudent = z.object({
  firstname: z.string().min(4, "Firstname must be at least 4 characters"),
  lastname: z.string().min(4, "Lastname must be at least 4 characters"),
  phone: z.string().min(4, "Phone must be at least 4 digits"),
  address: z.string().min(4, "Address must be at least 4 characters"),
  sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required" }),
  img: z.string().url("Image must be a valid URL"),
  biometric: z.string().url("Biometric must be a valid URL"),
  birthday: z.coerce.date({ message: "Birthday is required" }),
});

export type UserStudent = z.infer<typeof userStudent>;
