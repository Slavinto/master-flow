"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { handleSearchSubmit } from "@/utils/handler-server-actions";
import { BlogPostCard, ButtonSubmit } from ".";
import { useFormState } from "react-dom";

import { blogPostCards } from "@/constants";

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [formState, action] = useFormState(handleSearchSubmit, {
        query: "",
        searchResults: [
            {
                id: "",
                article: "",
            },
        ],
    });
    const handleInputChange = (term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("query", term.toLowerCase());
            // setQuery(params.get("query")?.toString() || "");
        } else {
            params.delete("query");
        }

        replace(`${pathname}?${params.toString()}`);
    };
    return (
        <div>
            <form action={action} className='flex gap-3'>
                <div className='flex gap-3 rounded-full w-full border-[2px] border-stroke-gray px-6 max-w-[304px]'>
                    <Image
                        src={"/static/assets/icons/search.svg"}
                        alt='magnifier icon'
                        width={17}
                        height={17}
                    />
                    <input
                        className='outline-none text-dark font-medium text-[17px]'
                        placeholder='Search article...'
                        name='query'
                        onChange={(e) => handleInputChange(e.target.value)}
                        defaultValue={searchParams.get("query")?.toString()}
                    />
                </div>
                <ButtonSubmit
                    label='Search'
                    loading='Searching...'
                    classNames='btn-primary-rounded border-0'
                />
            </form>
            <div className='flex'>
                {formState.searchResults.map((r) => {
                    const card = blogPostCards.find((c) => c.postUrl === r.id);
                    console.log({ ...card });
                    return (
                        (
                            <BlogPostCard
                                key={r.id}
                                title={card?.title || ""}
                                imgUrl={card?.imgUrl || ""}
                                category={card?.category || ""}
                                postUrl='#'
                            />
                        ) || ""
                    );
                })}
            </div>
        </div>
    );
};

export default Search;
