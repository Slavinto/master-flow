"use client";

import { useState } from "react";
import { Button } from ".";
import { handleSearchSubmit } from "@/utils";
import Image from "next/image";

const Search = () => {
    const [query, setQuery] = useState("");
    return (
        <form action={handleSearchSubmit} className='flex gap-3'>
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
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                />
            </div>
            <input
                type='submit'
                value='Search'
                className='btn-primary-rounded border-0'
            />
        </form>
    );
};

export default Search;
