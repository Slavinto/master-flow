import Image from "next/image";

const Offices = () => {
    return (
        <section className='self-start flex gap-[71px] max-w-[1113px] mb-36 items-center'>
            <div className='relative w-[585px] h-[576px]'>
                <Image
                    src={"/static/assets/images/Image.png"}
                    alt='cafe image'
                    width={322}
                    height={450}
                    className='absolute left-0 top-0 drop-shadow-xl'
                />
                <Image
                    src={"/static/assets/images/Image-1.png"}
                    alt='cafe image'
                    width={387}
                    height={430}
                    className='absolute right-0 bottom-0 drop-shadow-xl'
                />
                <Image
                    src={"/static/assets/patterns/shape1.svg"}
                    alt='shape pattern'
                    width={86}
                    height={102}
                    className='rotate-90 absolute bottom-[240px] -left-12'
                />
            </div>
            <article className='flex flex-col gap-6 max-w-[457px]'>
                <h2 className='max-w-[357px] section-main-text'>
                    We work in Minimal Offices
                </h2>
                <p className='article-regular-text'>
                    If you’re going to go with a minimalist style in just one
                    area of the home, then choose your home office. A clean and
                    clearly organised workspace is conductive to great
                    concentration and an uninterrupted workflow. Less visual
                    clutter leads to less mental clutter, and you will be able
                    to find your needed files and equipment a whole lot faster
                    too.
                </p>
            </article>
        </section>
    );
};

export default Offices;
