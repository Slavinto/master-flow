import { BlogPosts, Platform, SubscribeForm } from "@/components";

const Blog = async () =>
    //     {
    //     searchParams,
    // }: {
    //     searchParams?: {
    //         query?: string;
    //         page?: string;
    //     };
    // }
    {
        // const query = searchParams?.query || "";
        // const currentPage = Number(searchParams?.page) || 1;
        // console.log(query, currentPage);

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
            </main>
        );
    };

export default Blog;
