'use server'

import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"
import { UserStudent, userStudent } from "./zod"

export async function userCreate(data: UserStudent){

    const parsed = userStudent.safeParse(data)

    if(!parsed.success){
        throw new Error("Invalid data")
    }

    await prisma.student.create({
        data: parsed.data,
    })
    revalidatePath("/")
}