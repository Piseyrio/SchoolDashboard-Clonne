// "use client";

// import { userCreate } from "@/lib/action";
// import { UserStudent, userStudent } from "@/lib/zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner"

// export default function StudentForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(userStudent),
//   });

//    const onSubmit = async (data: UserStudent) => {
//     try {
//       await userCreate(data);
//       toast("✅ Event has been created.", {
//         className: "text-green-600",
//       });
//     } catch (error) {
//       toast.error("❌ Failed to create event.", {
//         className: "bg-red-600 text-white",
//       });
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-2 rounded p-8 ring-1"
//       >
//         <h1 className="text-2xl font-bold">Form Sign</h1>
//         <label>FirstName</label>
//         <input
//           {...register("firstname")}
//           type="firstname"
//           placeholder="firstName here..."
//           className="ring-1 rounded p-2"
//         />
//         <label>LastName</label>
//         {errors.firstname && (
//           <span className="text-red-500">{errors.firstname.message}</span>
//         )}
//         <input
//           {...register("lastname")}
//           type="lastname"
//           placeholder="lastName here..."
//           className="ring-1 rounded p-2"
//         />
//         {errors.lastname && (
//           <span className="text-red-500">{errors.lastname.message}</span>
//         )}
//         {errors.sex && (
//           <span className="text-red-500">{errors.sex.message}</span>
//         )}
//         <label>Phone</label>
//         <input
//           {...register("phone")}
//           type="phone"
//           placeholder="phone here..."
//           className="ring-1 rounded p-2"
//         />
//         {errors.phone && (
//           <span className="text-red-500">{errors.phone.message}</span>
//         )}
//         <label>Address</label>
//         <input
//           {...register("address")}
//           type="address"
//           placeholder="Address here..."
//           className="ring-1 rounded p-2"
//         />
//         {errors.address && (
//           <span className="text-red-500">{errors.address.message}</span>
//         )}
//         <label>Image</label>
//          <input name="image" type="file" accept="image/*"  />
//         <label>Sex</label>
//         <select
//           {...register("sex")}
//           defaultValue=""
//           className="ring-1 rounded p-2"
//         >
//           <option value="">Select gender</option>
//           <option value="MALE">Male</option>
//           <option value="FEMALE">Female</option>
//         </select>
//         {errors.sex && (
//           <span className="text-red-500">{errors.sex.message}</span>
//         )}
//         <label>Biometric</label>
//         <input name="biometric" type="file" accept=".png,.jpg,.jpeg,.dat" />
//         <label>Birthday</label>
//         <input
//           {...register("birthday")}
//           type="date"
//           className="ring-1 rounded p-2"
//         />
//         <button
//           type="submit"
//           className="bg-green-800 text-white p-2 rounded w-full hover:bg-green-400 transition duration-300 ease-in-out"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
