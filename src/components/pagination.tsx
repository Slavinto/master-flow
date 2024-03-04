"use client";

import * as React from "react";
import Pagination from "@mui/material/Pagination";

import { handleChangePagination } from "@/utils/handler-server-actions";

const page = 1;

export default function PaginationSize() {
    return (
        <Pagination count={10} page={page} onChange={handleChangePagination} />
    );
}
