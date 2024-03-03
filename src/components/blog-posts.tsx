import { blogPostCards } from "@/constants";
import { BlogPostCard, Pagination } from ".";

const BlogPosts = () => {
    return (
        <section className='flex flex-col gap-[120px] mb-[140px]'>
            <div className='grid grid-cols-3 gap-x-[60px] gap-y-[80px]'>
                {blogPostCards.map((card) => (
                    <BlogPostCard
                        key={card.title}
                        imgUrl={card.imgUrl}
                        title={card.title}
                        category={card.category}
                        postUrl={card.postUrl}
                    />
                ))}
            </div>
            <Pagination />
        </section>
    );
};

export default BlogPosts;
