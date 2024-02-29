"use client";

import { useState, FormEventHandler } from "react";
import Image from "next/image";

import { Button } from ".";
import { SubscribeFormProps } from "@/types";

const SubscribeForm = ({ textLg, textSm, textBtn }: SubscribeFormProps) => {
    const [input, setInput] = useState("");

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
    };

    return (
        <section className='container-sm mb-[200px] relative'>
            <Image
                src={"/static/assets/patterns/shape1.svg"}
                alt='shape pattern'
                width={86}
                height={102}
                className='absolute z-0 right-[200px] -top-10'
            />
            <div className=' max-h-[462px] bg-primary py-[135px] px-[290px] relative z-10 flex items-center justify-center rounded'>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col items-center gap-3 max-w-[615px]'
                >
                    <h2 className='w-full section-main-text text-white'>
                        {textLg}
                    </h2>
                    <label
                        htmlFor='subscribe-home'
                        className='article-regular-text !text-white'
                    >
                        {textSm}
                    </label>
                    <div className='flex gap-3 items-center max-w-[430px] h-[56px] bg-white text-light-gray font-medium text-4 mt-5 rounded'>
                        <Image
                            src={"/static/assets/icons/mail.svg"}
                            width={16}
                            height={16}
                            alt='mail icon'
                            className='ml-[6px]'
                        />
                        <input
                            id='subscribe-home'
                            placeholder='Write your email...'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className='outline-none text-dark shrink-0 grow'
                        />
                        <Button
                            title={textBtn}
                            type='button'
                            classNames='btn-form-primary mr-[6px]'
                        />
                    </div>
                </form>
            </div>
            <div className='z-0 relative -right-[60px] -bottom-[60px] container-sm -mt-[462px] h-[462px] bg-gray-canvas2' />
        </section>
    );
};

export default SubscribeForm;
