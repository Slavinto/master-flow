"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(formData: FormData) {
    const username = formData.get("username")?.toString();
    if (!username) {
        throw new Error("Invalid input.");
    }
    try {
        const createdUser = await prisma.user.create({
            data: {
                name: username,
            },
        });
        await prisma.$disconnect();
        return createdUser;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error?.message);
        } else {
            console.log(
                "Something went wrong. Can not create user in database."
            );
        }
    }
}
