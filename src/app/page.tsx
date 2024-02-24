import {
    Customers,
    Experiences,
    Habits,
    Hero,
    Offices,
    SubscribeForm,
} from "@/components";

export default function Home() {
    return (
        <main>
            <Hero />
            <Customers />
            <Offices />
            <Habits />
            <Experiences />
            <SubscribeForm />
        </main>
    );
}
