"use server";

import { PrismaClient } from "@prisma/client";
import { equal } from "assert";

const prisma = new PrismaClient();

export async function createUser(formData: FormData) {
    const username = formData.get("username")?.toString();
    const email = formData.get("email")?.toString();
    if (!username || !email) {
        throw new Error("Invalid input.");
    }
    try {
        const createdUser = await prisma.user.create({
            data: {
                name: username,
                email: email,
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

export async function getPostsByUserEmail(userEmail: string) {
    if (!userEmail) {
        throw new Error("Invalid user email.");
    }
    try {
        const user = await prisma.user.findFirst({
            where: { email: userEmail },
        });
        if (!user || !user.id) {
            throw new Error("Error. Can not find user in database.");
        }
        const { id: userId } = user;
        const posts = await prisma.post.findMany({
            where: { authorId: userId },
        });
        console.log({ posts });
        // const userPosts = await prisma.user.
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
