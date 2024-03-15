import Link from "next/link";
import React from "react";
import { Button } from ".";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import { signOutFromSupabase } from "@/app/auth/signout/action";

const UserLinks = ({ dbUser, session }: { dbUser: any; session: any }) => {
    const pathname = usePathname();
    const router = useRouter();
    const handleClickLogout = () => {
        if (dbUser) {
            signOutFromSupabase();
        } else {
            signOut();
        }
        if (pathname !== "/") {
            router.push("/", { scroll: false });
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
    );
};

export default UserLinks;
