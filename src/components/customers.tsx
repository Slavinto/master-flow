import { customerLogos } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Customers = () => {
    return (
        <section className='flex flex-col container-sm mx-auto pb-40 mb-[75px] border-b-[2px] border-stroke-gray3'>
            <p className='subheading'>our customers</p>
            <div className='flex flex-col gap-[70px]'>
                <article className='flex gap-14'>
                    <p className='section-main-text max-w-[629px]'>
                        We have worked with them. Our super customers.
                    </p>
                    <p className='article-regular-text max-w-[516px]'>
                        We bring the results while helping you achieve cost and
                        time savings without taking on risk or management
                        overhead. Our team provides high-level creative
                        education.
                    </p>
                </article>
                <div className='flex gap-[120px]'>
                    {customerLogos.map((logo) => (
                        <Link href='#' key={logo.name}>
                            <Image
                                src={logo.path}
                                width={135}
                                height={40}
                                alt='customers logo'
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Customers;
