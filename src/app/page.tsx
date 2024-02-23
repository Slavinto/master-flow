import { Customers, Experiences, Habits, Hero, Offices } from "@/components";

export default function Home() {
    return (
        <main>
            <Hero />
            <Customers />
            <Offices />
            <Habits />
            <Experiences />
        </main>
    );
}
