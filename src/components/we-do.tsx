import { weDoItems } from "@/constants";
import Image from "next/image";

const WeDo = () => {
    return (
        <section className='container-sm flex flex-col gap-20 mb-[140px] items-center'>
            <h2 className='section-main-text max-w-[640px] text-center'>
                What we do and how we do our clients&apos; works
            </h2>
            <div className='grid grid-cols-2 gap-x-[120px] gap-y-20 w-full pb-5'>
                {weDoItems.map((item) => (
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
        </section>
    );
};

export default WeDo;
