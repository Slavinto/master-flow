import Image from "next/image";
import { Button } from ".";

const Tricks = () => {
    return (
        <section className='flex justify-between items-center mb-[140px]'>
            <article className='flex flex-col gap-6 max-w-[406px]'>
                <h2 className='section-main-text'>
                    Some magic tricks for your phone
                </h2>
                <p className='article-regular-text'>
                    Stream real-time video of your home, and receive
                    notificatoins whenever motion is detected, with Canary’s
                    1080p HD camera. Perfect device way.
                </p>
                <div className='flex justify-between'>
                    <Button
                        type='button'
                        title='How it works'
                        classNames='btn-primary-rounded'
                    />
                    <Button
                        type='button'
                        title='Our blog'
                        classNames='btn-white-rounded'
                    />
                </div>
            </article>
            <div className='relative w-[598px] h-[576px]'>
                <Image
                    src={"/static/assets/patterns/shape1.svg"}
                    alt='shape pattern'
                    width={86}
                    height={102}
                    className='absolute rotate-90 -bottom-[14px] -left-[28px]'
                />{" "}
                <Image
                    src={"/static/assets/patterns/shape1.svg"}
                    alt='shape pattern'
                    width={86}
                    height={102}
                    className='absolute rotate-90 top-[110px] -right-[44px]'
                />
                <Image
                    className='absolute top-0 right-0'
                    src={"/static/assets/images/Image5.png"}
                    alt='a man looks at a writing board'
                    width={335}
                    height={450}
                />
                <Image
                    className='absolute bottom-0 left-0'
                    src={"/static/assets/images/Image4.png"}
                    alt='smartphone in hand'
                    width={387}
                    height={430}
                />
            </div>
        </section>
    );
};

export default Tricks;
