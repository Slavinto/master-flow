"use server";

import { SearchResults } from "@/types";
import { articles } from "@/constants";

export const handleSearchSubmit = async (
    previousState: SearchResults,
    formData: FormData
): Promise<SearchResults> => {
    const query = formData.get("query")?.toString().toLowerCase() || "";

    const found = articles.filter((a) =>
        a.article.toLowerCase().includes(query)
    );

    return {
        query,
        searchResults: found,
    };
};

export const handleChangePagination = async () => {
    return;
};
