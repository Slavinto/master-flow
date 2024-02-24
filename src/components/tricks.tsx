import { Button } from ".";

const Tricks = () => {
    return (
        <section className='flex justify-between '>
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
                    <Button type='button' title='How it works' classNames='' />
                    <Button type='button' title='Our blog' classNames='' />
                </div>
            </article>
            <div></div>
        </section>
    );
};

export default Tricks;
