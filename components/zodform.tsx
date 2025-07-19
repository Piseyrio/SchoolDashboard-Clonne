// "use client";

// import { z } from "zod";

// export const studentSchema = z.object({
//   firstName: z.string().min(1, "First name is required"),
//   lastname: z.string().min(1, "Last name is required"),
//   phone: z.string().optional(),
//   address: z.string().optional(),
//   img: z.union([z.string().url(),z.any()]).optional(),
//   birthday: z.coerce.date().optional(),
//   sex: z.string().optional(),
//   biometric: z.string().optional(),
//   classId: z.string().optional(),
//   teacherId: z.coerce.number().optional()
// });
