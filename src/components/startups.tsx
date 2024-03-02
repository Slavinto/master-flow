import Image from "next/image";
import { Button } from ".";

const Startups = () => {
    return (
        <section className='flex flex-col gap-[22px] container-sm items-center text-center mt-[118px] mb-[140px]'>
            <h1 className='text-[62px] font-semibold max-w-[900px] '>
                We help startups and agencies to achieve their goal.
            </h1>
            <p className='article-regular-text pb-2.5'>
                Minimalism, optimization and precision, your business is
                skyrocketing.
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
            <div className='flex justify-between gap-8 relative mt-[140px]'>
                <Image
                    src={"/static/assets/patterns/shape1.svg"}
                    alt='shape pattern'
                    width={86}
                    height={102}
                    className='absolute z-0 left-[100px] -top-10'
                />
                <Image
                    className='relative z-10'
                    src={"/static/assets/images/laptop.png"}
                    width={690}
                    height={440}
                    alt='a laptop on table'
                />
                <div className='relative'>
                    <div className='w-full h-full bg-darker-blue absolute top-10 left-10 z-0' />
                    <Image
                        className='relative z-10'
                        src={"/static/assets/images/book.png"}
                        width={480}
                        height={440}
                        alt='a laptop on table'
                    />
                </div>
            </div>
        </section>
    );
};

export default Startups;
