"use client";

import { useState, FormEventHandler } from "react";
import Image from "next/image";

import { Button } from ".";
import { SubscribeFormProps } from "@/types";

const SubscribeForm = ({
    textLg,
    textSm,
    textBtn,
    variant = "light",
}: SubscribeFormProps) => {
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
                className={`${
                    variant === "simple-light" ? "hidden " : ""
                }absolute z-0 right-[200px] -top-10`}
            />
            <div
                className={`max-h-[462px] bg-${
                    variant === "light"
                        ? "primary"
                        : variant === "simple-light"
                        ? "gray-canvas2"
                        : "dark-blue"
                } py-[135px] text-center relative z-10 flex items-center justify-center rounded`}
            >
                <form
                    onSubmit={handleSubmit}
                    className={`flex flex-col items-center gap-3 max-w-[700px]`}
                >
                    <h2
                        className={`${
                            variant === "simple-light"
                                ? "text-darker-blue "
                                : "text-white "
                        }w-full section-main-text`}
                    >
                        {textLg}
                    </h2>
                    <label
                        htmlFor='subscribe-home'
                        className={`${
                            variant === "simple-light"
                                ? "!text-darker-blue "
                                : "!text-white "
                        }article-regular-text opacity-60`}
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
                            classNames={`btn-form-primary mr-[6px]${
                                variant === "dark"
                                    ? " bg-question-darker-blue"
                                    : variant === "simple-light"
                                    ? " bg-stroke-gray2 !text-dark"
                                    : ""
                            }`}
                        />
                    </div>
                </form>
            </div>
            <div
                className={`${
                    variant === "simple-light" && "hidden "
                }z-0 relative -right-[60px] -bottom-[60px] container-sm -mt-[462px] h-[462px] bg-gray-canvas2`}
            />
        </section>
    );
};

export default SubscribeForm;
