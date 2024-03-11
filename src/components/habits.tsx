import Image from "next/image";

import { habits } from "@/constants";

const Habits = () => {
    return (
        <section className='relative mb-[140px] pt-[93px] container-sm justify-between'>
            <div className='z-0 absolute top-0 right-0 bg-gray-canvas2 w-[1320px] h-[562px]' />
            <div className='flex justify-between max-w-[1070px]'>
                <article className='relative z-10 max-w-[455px] flex flex-col gap-6'>
                    <h2 className='section-main-text'>
                        The habits of Our Startup
                    </h2>
                    <p className='article-regular-text'>
                        “Design is not just what it looks like and feels like.
                        Design is how it works”. We always try to make a great
                        output by this culture. Steve Jobs.
                    </p>
                    {
                        <ul className='font-sans font-normal text-[16px] grid grid-cols-2 gap-y-5'>
                            {habits.map((item) => (
                                <li key={item.text} className='flex gap-3'>
                                    <Image
                                        src={"/static/assets/icons/check.svg"}
                                        width={12}
                                        height={12}
                                        alt='check icon'
                                    />
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    }
                </article>
                <div className='relative'>
                    <Image
                        src={"/static/assets/images/Image7.png"}
                        alt='a smiling man at the table'
                        width={455}
                        height={542}
                        className='relative z-10'
                    />
                    <Image
                        src={"/static/assets/patterns/shape1.svg"}
                        alt='shape pattern'
                        width={86}
                        height={102}
                        className='absolute z-0 right-[90px] -bottom-10'
                    />
                </div>
            </div>
        </section>
    );
};

export default Habits;
