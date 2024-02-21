import { Button, Hero } from "@/components";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <Hero />
            <Button classNames='' title='Get Started' type='button' />
        </main>
    );
}
