"use client";

import { navbarItems } from "@/constants";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { BurgerMenu } from ".";
import { useDbAuthContext } from "./context/DbAuthContextProvider";
import { UserLinks } from ".";
import { useSession } from "next-auth/react";

const Navbar = () => {
    const pathname = usePathname();
    const { data: session } = useSession();
    const router = useRouter();
    const dbUser = useDbAuthContext();

    return (
        <nav className='relative bg-white z-10 padding-x w-full flex items-center justify-between h-[132px] text-thin max-w-[1440px] mx-auto'>
            <Image
                src={"/static/assets/icons/logo.svg"}
                className=''
                width={206}
                height={32}
                alt='master flow icon'
            />
            <ul className='flex-lg mx-[44px] font-medium'>
                {navbarItems.map((item) => {
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
            <Link href={"/login"}>
                <button className='btn-primary-rounded'>Test Supabase</button>
            </Link>
            <UserLinks dbUser={dbUser} session={session} />
            <BurgerMenu />
        </nav>
    );
};

export default Navbar;
