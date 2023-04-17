import { Outlet } from "react-router-dom";
import React from "react";

export function Layout() {
    return (
        <>
            Header
            <Outlet />
            Footer
        </>
    )
}
