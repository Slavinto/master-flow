"use client";

import { navbarItems } from "@/constants";

import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from ".";
import { BurgerMenu } from ".";
import { SetStateAction, useEffect, useState } from "react";
import { useDbAuthContext } from "./context/DbAuthContextProvider";

const Navbar = () => {
    const pathname = usePathname();
    const { data: session } = useSession();

    const dbUser = useDbAuthContext();
    console.log({ dbUser });
    // const supabase = createClient();
    // const [dbUser, setDbUser] = useState<SetStateAction<any>>();

    // console.log({ dbUser });
    // useEffect(() => {
    //     const getUser = async () => {
    //         try {
    //             const { data: userData, error: userError } =
    //                 await supabase.auth.getUser();
    //             if (!userError) {
    //                 setDbUser(userData?.user);
    //             }
    //         } catch (error) {
    //             console.log(JSON.stringify(error));
    //         }
    //     };
    //     getUser();
    // }, []);

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
            <div className='flex-lg'>
                {session?.user?.name || dbUser ? (
                    <>
                        <Link
                            href='/profile'
                            className={
                                pathname === "/profile"
                                    ? "text-page-active"
                                    : ""
                            }
                        >
                            My&nbsp;Profile
                        </Link>
                        <Link
                            onClick={() => {
                                if (dbUser) {
                                    const { error } =
                                        await supabase.auth.signOut();
                                }
                                signOut();
                            }}
                            href=''
                        >
                            Log&nbsp;Out
                        </Link>
                    </>
                ) : (
                    <Link onClick={() => signIn()} href='#'>
                        Log&nbsp;In
                    </Link>
                )}
                <Button
                    title={"Get Started"}
                    type='button'
                    classNames='btn-navbar-get-started'
                />
            </div>
            <BurgerMenu />
        </nav>
    );
};

export default Navbar;
