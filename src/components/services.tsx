import { servicesItems } from "@/constants";
import Image from "next/image";
import { CustomerLogos } from ".";

const Services = () => {
    return (
        <section className='flex flex-col gap-[80px] items-center container-sm mb-[140px] w-full'>
            <div className='flex flex-col items-center gap-[26px] max-w-[640px] text-center'>
                <div className='subheading-premium-container'>premium</div>
                <h2 className='section-main-text'>
                    What services do our rate plans include?
                </h2>
            </div>
            <div className='grid grid-cols-2 gap-x-[120px] gap-y-20 w-full pb-5'>
                {servicesItems.map((item) => (
                    <div className='flex gap-[30px]' key={item.title}>
                        <Image
                            className='h-[80px]'
                            src={item.iconPath}
                            width={80}
                            height={80}
                            alt='icon'
                        />
                        <div className='flex flex-col gap-3 pt-[25px]'>
                            <h3 className='services-title self-start'>
                                {item.title}
                            </h3>
                            <p className='article-regular-text'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <CustomerLogos />
        </section>
    );
};

export default Services;
