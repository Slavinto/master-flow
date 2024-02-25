import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
    // company name
    title: "Master Flow Inc",
    // short description of company's services of what's company about
    description:
        "All services for our team of industry experts, personal training, support line and help desk.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
