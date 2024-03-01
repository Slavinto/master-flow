import Image from "next/image";

const Strategies = () => {
    return (
        <section className='flex gap-2 justify-between container-sm relative mb-[140px] pt-[93px] pr-5'>
            <div className='z-0 absolute top-0 left-0 bg-gray-canvas2 w-[1320px] h-[562px]' />

            <Image
                className='relative z-10 ml-[125px]'
                src='/static/assets/images/image6.png'
                alt='a hand with a book'
                width={455}
                height={542}
            />
            <Image
                src={"/static/assets/patterns/shape1.svg"}
                alt='shape pattern'
                width={86}
                height={102}
                className='absolute z-0 left-[200px] -bottom-10'
            />
            <article className='flex flex-col gap-4 max-w-[455px] relative z-10'>
                <h2 className='section-main-text'>
                    The strategies of Our business
                </h2>
                <p className='article-regular-text'>
                    “Design is not just what it looks like and feels like.
                    Design is how it works”. We always try to make a great
                    output by this culture. Steve Jobs.
                </p>
                <p className='article-regular-text'>
                    See below our three main plans for your business, for your
                    stratup and agency. It starts from here! You can teach
                    yourself what you really like.
                </p>
            </article>
        </section>
    );
};

export default Strategies;
