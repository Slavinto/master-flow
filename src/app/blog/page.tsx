import { BlogPosts, Pagination, Platform, SubscribeForm } from "@/components";
import { articles, blogPostCards as allCards } from "@/constants";

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
    const totalPages = Math.ceil(allCards.length / cardsPerPage);

    const lastIdx = allCards.length - 1;

    const endIdx =
        cardsPerPage * currentPage - 1 > lastIdx
            ? lastIdx
            : cardsPerPage * currentPage - 1;

    const startIdx =
        endIdx !== lastIdx
            ? endIdx - (cardsPerPage - 1)
            : cardsPerPage * currentPage - cardsPerPage;

    const blogPostCards = allCards.slice(startIdx, endIdx + 1);

    // console.log(blogPostCards);
    // console.log(startIdx, endIdx);
    return (
        <main>
            <Platform />
            <SubscribeForm
                textLg='Receive our articles by mail!'
                textSm='Enter your email into form below to get updates from us'
                textBtn='Submit'
                variant='simple-light'
            />
            <BlogPosts blogPostCards={blogPostCards} />
            <Pagination page={currentPage} totalPages={totalPages} />
        </main>
    );
};

export default Blog;
