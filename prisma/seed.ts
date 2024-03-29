import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const alice = await prisma.user.upsert({
        where: { email: "alice@prisma.io" },
        update: {},
        create: {
            email: "alice@prisma.io",
            name: "Alice",
            posts: {
                create: {
                    title: "Check out Prisma with Next.js",
                    article:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam expedita dolor velit. Dolor beatae consequatur modi repellat architecto quasi neque. Id reprehenderit fugit nesciunt mollitia nisi autem alias. Asperiores?",
                    categories: ["Marketing", "Strategy"],
                },
            },
        },
    });
    const bob = await prisma.user.upsert({
        where: { email: "bob@prisma.io" },
        update: {},
        create: {
            email: "bob@prisma.io",
            name: "Bob",
            posts: {
                create: [
                    {
                        title: "Follow Prisma on Twitter",
                        article:
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam expedita dolor velit. Dolor beatae consequatur modi repellat architecto quasi neque. Id reprehenderit fugit nesciunt mollitia nisi autem alias. Asperiores?",
                        categories: ["Agency", "Minimalism"],
                    },
                    {
                        title: "Follow Nexus on Twitter",
                        article:
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam expedita dolor velit. Dolor beatae consequatur modi repellat architecto quasi neque. Id reprehenderit fugit nesciunt mollitia nisi autem alias. Asperiores?",
                        categories: ["Products", "Website"],
                    },
                ],
            },
        },
    });
    console.log({ alice, bob });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
