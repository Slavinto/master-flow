"use client";

import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { handleChangePagination } from "@/utils/handler-server-actions";
import Link from "next/link";
import { BlogPosts } from ".";

export default function CustomPagination({
    page,
    totalPages,
}: {
    page: number;
    totalPages: number;
}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const createPageURL = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        console.log(pageNumber);
        params.set("page", pageNumber.toString());
        replace(`${pathname}?${params}`, { scroll: false });
    };

    return (
        <Pagination
            page={page}
            count={totalPages}
            onChange={(e, page) =>
                createPageURL(typeof page === "string" ? parseInt(page) : page)
            }
            className='py-8'
        />
    );
}
// function Content() {
//     const location = useLocation();
//     const query = new URLSearchParams(location.search);
//     const page = parseInt(query.get("page") || "1", 10);
//     return (
//         <Pagination
//             page={page}
//             count={10}
//             renderItem={(item) => (
//                 <PaginationItem
//                     component={Link}
//                     to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
//                     {...item}
//                 />
//             )}
//         />
//     );
// }
