import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

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
