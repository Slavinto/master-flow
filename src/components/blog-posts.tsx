import { blogPostCards } from "@/constants";
import { BlogPostCard } from ".";

const BlogPosts = () => {
    return (
        <section className='grid grid-cols-3 gap-x-[60px] gap-y-[80px] mb-[140px]'>
            {blogPostCards.map((card) => (
                <BlogPostCard
                    key={card.title}
                    imgUrl={card.imgUrl}
                    title={card.title}
                    category={card.category}
                    postUrl={card.postUrl}
                />
            ))}
        </section>
    );
};

export default BlogPosts;
