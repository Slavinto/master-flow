import { CustomerLogos } from ".";

const Customers = () => {
    return (
        <section className='flex flex-col container-sm pb-40 mb-[75px] border-b-[2px] border-stroke-gray3'>
            <p className='subheading'>our customers</p>
            <div className='flex flex-col gap-[70px]'>
                <article className='flex gap-14'>
                    <h2 className='section-main-text max-w-[629px]'>
                        We have worked with them. Our super customers.
                    </h2>
                    <p className='article-regular-text max-w-[516px]'>
                        We bring the results while helping you achieve cost and
                        time savings without taking on risk or management
                        overhead. Our team provides high-level creative
                        education.
                    </p>
                </article>
                <CustomerLogos />
            </div>
        </section>
    );
};

export default Customers;
