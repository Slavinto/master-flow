const WhoWeAre = () => {
    return (
        <section className='flex flex-col container-sm mb-[140px]'>
            <p className='subheading'>WHO WE ARE</p>
            <article className='flex gap-1 justify-between'>
                <h2 className='section-main-text max-w-[562px]'>
                    Read who we are and What we do on the web.
                </h2>
                <div className='flex flex-col gap-4 max-w-[590px] pt-2'>
                    <p className='article-regular-text'>
                        We bring the results while helping you achieve cost and
                        time savings without taking on risk or management
                        overhead. Our team provides high-level creative
                        education.
                    </p>
                    <p className='article-regular-text'>
                        If you’re going to go with a minimalist style in just
                        one area of the home, then choose your home office. A
                        clean and clearly organised workspace is conductive to
                        great concentration and an uninterrupted workflow.
                    </p>
                    <p className='article-regular-text'>
                        Less visual clutter leads to less mental clutter, and
                        you will be able to find your needed files and equipment
                        a whole lot faster too.
                    </p>
                </div>
            </article>
        </section>
    );
};

export default WhoWeAre;
