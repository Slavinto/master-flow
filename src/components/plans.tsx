import React from "react";

const Plans = () => {
    return (
        <section className='flex flex-col items-center'>
            <article className='flex flex-col  max-w-[900px] items-center text-center'>
                <h2 className='page-main-text'>
                    Our plans for your strategies.
                </h2>
                <p className='article-regular-text max-w-[700px]'>
                    See below our three main plans for your business, for your
                    stratup and agency. It starts from here! You can teach
                    yourself what you really like.
                </p>
                <div className='flex gap-2,5 text-darker-blue font-semibold text-base'>
                    <p>Bill Monthly</p>
                    <div>Switch</div>
                    <p>Bill Annually</p>
                </div>
            </article>
        </section>
    );
};

export default Plans;
