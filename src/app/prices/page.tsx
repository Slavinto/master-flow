import { Experiences, Faq, Plans, Services, SubscribeForm } from "@/components";
import React from "react";

const Prices = () => {
    return (
        <main>
            <Plans />
            <Services />
            <Faq />
            <Experiences />
            <SubscribeForm
                textLg='Buy now Master Flow!'
                textSm='Enter your email into form below to get Master Flow from us'
                textBtn='Download'
            />
        </main>
    );
};

export default Prices;
