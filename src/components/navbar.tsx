"use client";

import { navbarItems } from "@/constants";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Button } from ".";
import { BurgerMenu } from ".";

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className='padding-x w-full flex items-center justify-between h-[132px] text-thin max-w-[1440px] mx-auto'>
            <Image
                src={"/static/assets/icons/logo.svg"}
                className=''
                width={206}
                height={32}
                alt='master flow icon'
            />
            <ul className='flex-lg mx-[44px] '>
                {navbarItems.map((item) => {
                    // const item = listItem.split(" ").join("").toLowerCase();
                    return (
                        <li key={item.link}>
                            <Link
                                className={
                                    pathname === item.link
                                        ? `text-page-active`
                                        : ``
                                }
                                href={item.link}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className='flex-lg'>
                <Link href='/login'>Log&nbsp;In</Link>
                <Button
                    title={"Get Started"}
                    type='button'
                    classNames='w-40 h-[52px] border-[1.4px] border-stroke-gray rounded-full'
                />
            </div>
            <BurgerMenu />
        </nav>
    );
};

export default Navbar;
