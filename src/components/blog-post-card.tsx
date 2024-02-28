import { PostCard } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BlogPostCard: PostCard = ({ imgUrl, title, category, postUrl }) => {
    return (
        <figure className='flex flex-col gap-5 max-w-[360px]'>
            <Image
                src={imgUrl}
                alt='blog post card image'
                width={360}
                height={260}
                className='drop-shadow-md'
            />
            <div className='flex flex-col gap-3'>
                <p className='text-sm font-semibold text-dark opacity-40 capitalize'>
                    {category}
                </p>
                <h4 className='font-semibold text-2xl'>{title}</h4>
            </div>
            <Link href={postUrl} className='subheading'>
                read more
            </Link>
        </figure>
    );
};

export default BlogPostCard;
