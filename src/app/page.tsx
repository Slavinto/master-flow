import {
    Customers,
    Experiences,
    Habits,
    Hero,
    Offices,
    SubscribeForm,
    Tricks,
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
            <Tricks />
        </main>
    );
}
