import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export function Layout() {
    return (
        <>
            <Header />
            <main id="mainContent">
                <Outlet />
            </main>
            Footer
        </>
    )
}
