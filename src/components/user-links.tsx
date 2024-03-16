import Link from "next/link";
import React, { ReactNode } from "react";
import { Button } from ".";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import { DefaultSession } from "next-auth";
import { signOutFromSupabase } from "@/app/auth/signout/action";

const UserLinks = ({
    dbUser,
    session,
}: {
    dbUser: object;
    session: DefaultSession | null;
}) => {
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleClickLogout = async () => {
        if (dbUser) {
            await signOutFromSupabase();
        }
        signOut();
        if (pathname !== "/") {
            replace("/", { scroll: false });
        }
    };

    return (
        <div className='flex-lg'>
            {session?.user?.name || dbUser ? (
                <>
                    <Link
                        href='/profile'
                        className={
                            pathname === "/profile" ? "text-page-active" : ""
                        }
                    >
                        My&nbsp;Profile
                    </Link>
                    <Link onClick={handleClickLogout} href=''>
                        Log&nbsp;Out
                    </Link>
                </>
            ) : (
                <>
                    <Link onClick={() => signIn()} href='#'>
                        Log&nbsp;In
                    </Link>
                    <Link href='/signup'>Sign&nbsp;Up</Link>
                </>
            )}
            <Button
                title={"Get Started"}
                type='button'
                classNames='btn-navbar-get-started'
            />
        </div>
    );
};

export default UserLinks;
