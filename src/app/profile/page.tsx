import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { createClient } from "@/utils/supabase/server";

const Profile = async () => {
    const session = await getServerSession();

    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!session || !session?.user) {
        if (!user) {
            redirect("/api/auth/signin");
        }
    }
    // console.log({ session });
    return (
        <main>
            <section className='container-sm flex py-[140px]'>
                <div className='flex gap-5 items-center'>
                    {session?.user?.image ? (
                        <div className='w-12'>
                            <Image
                                className='rounded-full'
                                src={session.user.image}
                                width={48}
                                height={48}
                                alt='user image'
                            />
                        </div>
                    ) : (
                        <FaUserCircle className='w-12 h-12' />
                    )}
                    <article className='flex flex-col gap3'>
                        <h3 className='article-regular-text font-semibold'>
                            {session?.user?.name?.trim() || user?.email}
                        </h3>
                        <p className='article-regular-text'>
                            {session?.user?.email || user?.email}
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
};

export default Profile;
