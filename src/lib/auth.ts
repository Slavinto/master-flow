import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { nextAuthSupabaseLogin } from "@/app/signup/actions";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
        }),
        CredentialsProvider({
            id: "supabase-credentials",
            name: "email/password",
            async authorize(credentials, req) {
                // console.log(credentials);
                if (!credentials || Object.entries(credentials).length < 1)
                    return null;
                const userCredentials = {
                    username: credentials["username"],
                    password: credentials["password"],
                };
                const user = await nextAuthSupabaseLogin(userCredentials);

                console.log({ user });
                return user;
                // return new Promise(() => null);
            },
            credentials: {
                username: {
                    label: "Email:",
                    type: "text",
                    placeholder: "Enter your email",
                },
                password: { label: "Password:", type: "password" },
            },
        }),
    ],
};
