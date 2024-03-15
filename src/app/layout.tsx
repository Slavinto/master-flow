import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar, SessionProvider } from "@/components";
import { getServerSession } from "next-auth";
import { createClient } from "@/utils/supabase/server";
import DbAuthContextProvider from "@/components/context/DbAuthContextProvider";
import { getUser } from "@/utils/supabase/actions/getUser";

export const metadata: Metadata = {
    // company name
    title: "Master Flow Inc",
    // short description of company's services of what's company about
    description:
        "All services for our team of industry experts, personal training, support line and help desk.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await getUser();
    // const { data: planCards } = await supabase.from("planCards").select();
    // console.log({ user });
    // console.log({ planCards });
    const session = await getServerSession();
    return (
        <html lang='en'>
            <body>
                <SessionProvider session={session}>
                    <DbAuthContextProvider dbUser={user || null}>
                        <Navbar />
                        {children}
                        <Footer />
                    </DbAuthContextProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
