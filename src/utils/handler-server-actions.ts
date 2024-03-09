"use server";

import { SearchResults } from "@/types";
import { articles, blogPostCards } from "@/constants";

export const handleSearchSubmit = async (
    previousState: SearchResults,
    formData: FormData
): Promise<SearchResults> => {
    const query = formData.get("query")?.toString().toLowerCase() || "";

    const found = articles.filter((a) =>
        a.article.toLowerCase().includes(query)
    );
    const foundCards = blogPostCards.filter(
        (c) => !!found.find((a) => a.id === c.postUrl)
    );
    // console.log({ found });
    return {
        query,
        searchResults: found,
        cards: foundCards,
    };
};
