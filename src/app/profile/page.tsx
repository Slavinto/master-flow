import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const Profile = async () => {
    const session = await getServerSession();
    if (!session || !session?.user) {
        redirect("/api/auth/signin");
    }
    console.log({ session });
    return (
        <main>
            <section className='container-sm flex py-[140px]'>
                <div className='flex gap-5 items-center'>
                    {session.user.image ? (
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
                        <FaUserCircle />
                    )}
                    <article className='flex flex-col gap3'>
                        <h3 className='article-regular-text font-semibold'>
                            {session.user.name?.trim()}
                        </h3>
                        <p className='article-regular-text'>
                            {session.user.email}
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
};

export default Profile;
