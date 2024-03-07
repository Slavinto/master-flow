"use client";

import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
import { usePathname, useSearchParams } from "next/navigation";

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

    const createPageURL = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params}`;
    };

    return (
        <Pagination
            page={page}
            count={totalPages}
            onChange={handleChangePagination}
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
