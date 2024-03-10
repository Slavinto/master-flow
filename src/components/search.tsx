"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { handleSearchSubmit } from "@/utils/handler-server-actions";
import { BlogPosts, Button, ButtonSubmit, Pagination } from ".";
import { useFormState } from "react-dom";

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [formState, action] = useFormState(handleSearchSubmit, {});

    const handleInputChange = (term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("query", term.toLowerCase());
            params.get("page") !== "1" && params.set("page", "1");
        } else {
            params.delete("query");
        }

        replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    // const handleResetQuery = () => {
    //     const params = new URLSearchParams();
    //     replace(`${pathname}`, { scroll: false });
    // };

    const currentPage = Number(searchParams.get("page")) || 1;
    const query = searchParams.get("query") || "";
    const cardsPerPage = 3;
    const allCards = formState.cards || [];
    const totalPages = formState.cards
        ? Math.ceil(formState?.cards.length / cardsPerPage)
        : 0;

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

    return (
        <div className='flex flex-col grow shrink-0 mt-[40px] mb-[140px] p-4'>
            <form
                action={action}
                className='flex grow shrink-0 gap-3 self-center'
            >
                <div className='flex gap-3 rounded-full w-full border-[2px] bg-white border-stroke-gray px-6 max-w-[304px]'>
                    <Image
                        src={"/static/assets/icons/search.svg"}
                        alt='magnifier icon'
                        width={17}
                        height={17}
                    />
                    <input
                        id='search-input'
                        className='outline-none text-dark font-medium text-[17px] bg-white'
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
                {/* <Button
                    type='reset'
                    classNames='btn-white-reset'
                    onClick={() => ref.current?.reset()}
                /> */}
            </form>
            {blogPostCards.length > 0 && query && (
                <>
                    <BlogPosts blogPostCards={blogPostCards} />
                    <Pagination page={currentPage} totalPages={totalPages} />
                </>
            )}
        </div>
    );
};

export default Search;
