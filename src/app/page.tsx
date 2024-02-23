import { Customers, Habits, Hero, Offices } from "@/components";

export default function Home() {
    return (
        <main>
            <Hero />
            <Customers />
            <Offices />
            <Habits />
        </main>
    );
}
