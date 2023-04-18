import React from "react";
import useDocumentTitle from "@hooks/useDocumentTitle";
import { Outlet } from "react-router-dom";

export function Products() {
    useDocumentTitle("Products Listing | Sabka Bazaar");

    return (
        <>
            Products
            <Outlet />
        </>
    )
}