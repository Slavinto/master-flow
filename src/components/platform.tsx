import Image from "next/image";
import Search from "./search";

const Platform = () => {
    return (
        <section className='flex justify-between mt-12 mb-16 items-center'>
            <div className='relative'>
                <div className='bg-dark-blue absolute z-0 -bottom-[60px] -left-[60px] w-[560px] h-[560px]' />
                <Image
                    className='relative z-10 h-[560px] object-cover object-right-top'
                    src={"/static/assets/images/blog-top.png"}
                    alt='a man with headphones on'
                    width={560}
                    height={560}
                />
            </div>
            <article className='flex flex-col gap-[22px] max-w-[500px]'>
                <h1 className='text-6xl'>Your business in one platform.</h1>
                <p className='article-regular-text'>
                    Read our latest articles with ease. They explain how we get
                    there together with your goal of your company or startup.
                    Always new content. This is Master Flow.
                </p>
            </article>
        </section>
    );
};

export default Platform;
