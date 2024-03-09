import { BlogPosts, Pagination, Platform, SubscribeForm } from "@/components";
import Search from "@/components/search";
import { articles, blogPostCards as allCards } from "@/constants";

const Blog = async ({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) => {
    return (
        <main>
            <Platform />

            <div className='pt-2.5 w-full'>
                <Search />
            </div>

            <SubscribeForm
                textLg='Receive our articles by mail!'
                textSm='Enter your email into form below to get updates from us'
                textBtn='Submit'
                variant='simple-light'
            />
        </main>
    );
};

export default Blog;
