import { PostCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const SearchResultCard = (searchResult: PostCardProps) => {
    const { title, category, imgUrl, postUrl } = searchResult;
    return (
        <Link href={postUrl}>
            <figure className='flex items-center w-full gap-5 pt-8 drop-shadow-md'>
                <Image
                    src={imgUrl}
                    alt='blog post card image'
                    width={100}
                    height={100}
                    className=''
                />
                <div className='flex flex-col gap-3'>
                    <p className='text-sm font-semibold text-dark opacity-40 capitalize'>
                        {category}
                    </p>
                    <h4 className='font-semibold text-2xl'>{title}</h4>
                </div>
            </figure>
        </Link>
    );
};

export default SearchResultCard;
