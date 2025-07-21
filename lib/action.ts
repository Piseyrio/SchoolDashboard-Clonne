'use server'

import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"
import { userFakeData, UserFakeData } from "./zod"



export async function userCreate(data: UserFakeData){

    const parsed = userFakeData.safeParse(data)

    if(!parsed.success){
        throw new Error("Invalid data")
    }

    await prisma.student.create({
        data: parsed.data,
    })
    revalidatePath("/")
}