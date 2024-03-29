"use client";

import React, { useState } from "react";
import { CustomSwitch, PlanCard } from ".";

import { planCards } from "@/constants";
import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "@/utils/supabase/client";

const Plans = () => {
    const [billAnnually, setBillAnnually] = useState(true);
    // const supabase = createClient();
    // console.log({ supabase });
    return (
        <section className='flex flex-col items-center mb-[140px] mt-[118px]'>
            <article className='pb-[100px] flex gap-5 flex-col  max-w-[900px] items-center text-center'>
                <h2 className='page-main-text'>
                    Our plans for your strategies.
                </h2>
                <p className='article-regular-text max-w-[700px]'>
                    See below our three main plans for your business, for your
                    stratup and agency. It starts from here! You can teach
                    yourself what you really like.
                </p>
                <div className='pt-3 flex items-center gap-2,5 text-darker-blue font-semibold text-base'>
                    <p>Bill Monthly</p>
                    <CustomSwitch
                        defaultChecked
                        onChange={() => setBillAnnually((prev) => !prev)}
                    />
                    <p>Bill Annually</p>
                </div>
            </article>
            <section className='flex gap-14 items-start'>
                {planCards.map((card) => (
                    <PlanCard card={card} key={card.title} />
                ))}
            </section>
        </section>
    );
};

export default Plans;
