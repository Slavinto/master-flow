"use client";

import Image from "next/image";
import { footerItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    const isServicesPage = pathname === "/services";

    return (
        <footer
            className={`${
                isServicesPage
                    ? "bg-white text-dark-blue border-t-2 border-stroke-gray3"
                    : "text-white bg-dark-blue"
            } flex flex-col w-full px-[135px] max-container`}
        >
            <div className='flex content-start py-[70px] justify-between max-w-[1073px]'>
                <div className='flex flex-col gap-4'>
                    <Image
                        src={`/static/assets/icons/${
                            isServicesPage ? "logo.svg" : "logo-footer.svg"
                        }`}
                        alt='master flow logo'
                        width={206}
                        height={32}
                    />
                    <p className='font-semibold text-xl'>+1 (2345) 678-90-12</p>
                    <p className='font-semibold text-base'>
                        support@master.com
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-x-[134px] items-start max-w-[658px]'>
                    {footerItems.map((fItem) => (
                        <div
                            className='flex flex-1 flex-col items-start gap-8 text-lg'
                            key={fItem.name}
                        >
                            <h4 className='uppercase font-semibold'>
                                {fItem.name}
                            </h4>
                            <div className='w-full gap-x-24 gap-y-4 grid grid-cols-2 font-medium'>
                                {fItem.links.map((link) => (
                                    <Link
                                        className='min-w-24'
                                        key={link.name}
                                        href={link.link}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className={`h-[1px] ${
                    isServicesPage ? "bg-darker-blue" : "bg-white"
                } max-w-[1170px] opacity-30`}
            />
            <div className='flex justify-between items-center py-10 max-w-[1170px]'>
                <div className='flex gap-2'>
                    <div
                        className={`flex-center w-12 h-12 border-[1.4px] ${
                            isServicesPage
                                ? "border-darker-blue"
                                : "border-white"
                        } rounded-full`}
                    >
                        <Image
                            src={`/static/assets/icons/${
                                isServicesPage
                                    ? "facebook-dark.svg"
                                    : "facebook.svg"
                            }`}
                            alt='facebook icon'
                            width={16}
                            height={16}
                        />
                    </div>
                    <div
                        className={`flex-center w-12 h-12 border-[1.4px] ${
                            isServicesPage
                                ? "border-darker-blue"
                                : "border-white"
                        } rounded-full`}
                    >
                        <Image
                            src={`/static/assets/icons/${
                                isServicesPage
                                    ? "twitter-dark.svg"
                                    : "twitter.svg"
                            }`}
                            alt='twitter icon'
                            width={16}
                            height={16}
                        />
                    </div>
                    <div
                        className={`flex-center w-12 h-12 border-[1.4px] ${
                            isServicesPage
                                ? "border-darker-blue"
                                : "border-white"
                        } rounded-full`}
                    >
                        <Image
                            src={`/static/assets/icons/${
                                isServicesPage
                                    ? "instagram-dark.svg"
                                    : "instagram.svg"
                            }`}
                            alt='instagram icon'
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
                <p className='font-medium text-base'>
                    © {new Date().getFullYear()} Master. All right reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
