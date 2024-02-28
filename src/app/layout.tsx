import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar, SessionProvider } from "@/components";
import { getServerSession } from "next-auth";

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
    const session = await getServerSession();
    return (
        <html lang='en'>
            <body>
                <SessionProvider session={session}>
                    <Navbar />
                    {children}
                    <Footer />
                </SessionProvider>
            </body>
        </html>
    );
}
