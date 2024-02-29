import { Button } from ".";

const Startups = () => {
    return (
        <section className='flex flex-col gap-[22px] container-sm items-center text-center mb-[140px]'>
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
        </section>
    );
};

export default Startups;
