import { BlogPostCard } from ".";
import type { PostCardProps } from "@/types";

const Experiences = () => {
    return (
        <section className=''>
            <BlogPostCard
                imgUrl={postCardProps.imgUrl}
                category={postCardProps.category}
                title={postCardProps.title}
                postUrl={postCardProps.postUrl}
            />
        </section>
    );
};

export default Experiences;
