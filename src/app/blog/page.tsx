import { BlogPosts, Pagination, Platform, SubscribeForm } from "@/components";
import { articles } from "@/constants";

const Blog = async ({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) => {
    const cardsPerPage = 4;
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = Math.ceil(articles.length / cardsPerPage);

    const query = searchParams?.query || "";

    console.log(query, currentPage);

    const handleSearchSubmit = async (query: string) => {
        console.log({ query });
        return { query };
    };

    return (
        <main>
            <Platform />
            <SubscribeForm
                textLg='Receive our articles by mail!'
                textSm='Enter your email into form below to get updates from us'
                textBtn='Submit'
                variant='simple-light'
            />
            <BlogPosts />
            <Pagination page={currentPage} totalPages={totalPages} />
        </main>
    );
};

export default Blog;
