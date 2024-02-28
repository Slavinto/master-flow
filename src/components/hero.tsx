import Image from "next/image";
import React from "react";
import { Button } from ".";

const Hero = () => {
    return (
        <section className='container-sm flex items-center justify-between mt-8 mb-44'>
            <article className='flex flex-col max-w-[500px]'>
                <p className='subheading'>WELCOME!</p>
                <h1 className='font-semibold text-[62px] leading-[72px] pb-5'>
                    The best way for your startup.
                </h1>
                <p className='text-lg font-normal pb-8 font-sans'>
                    You can create your own design process with master. They are
                    blocks designed to carry on with the times with your
                    customers. Modern, minimal blocks with a cool look.
                </p>
                <div className='flex gap-4'>
                    <Button
                        type='button'
                        title='Get Started'
                        classNames='btn-primary-rounded'
                    />
                    <Button
                        type='button'
                        title='Learn More'
                        classNames='btn-white-rounded'
                    />
                </div>
            </article>
            <div className='flex-center relative w-[560px] h-[660px]'>
                <Image
                    src={"/static/assets/patterns/shape1.svg"}
                    alt='shape pattern'
                    width={86}
                    height={102}
                    className='rotate-90 absolute bottom-[150px] -left-12'
                />
                <Image
                    src={"/static/assets/images/hero.png"}
                    alt='a man with headphones on his head'
                    fill
                    className='relative z-10'
                />
                <div className=' absolute -top-12 -right-12 z-0 w-[560px] h-[660px] bg-dark-blue' />
            </div>
        </section>
    );
};

export default Hero;
