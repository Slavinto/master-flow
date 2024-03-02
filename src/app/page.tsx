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
            <SubscribeForm
                textLg='Subscribe to the newsletter!'
                textSm='Enter your email into form below to get updates from us'
                textBtn='Submit'
            />
            <Tricks />
        </main>
    );
}
