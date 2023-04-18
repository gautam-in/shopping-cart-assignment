import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export function Layout() {
    return (
        <>
            <Header />
            <main className="container" id="mainContent">
                <Outlet />
            </main>
            <footer className="footer">
                <p className="copyright">Copyright © 2011-2018 Sabka Baazar Gorcery Supplies Pvt. Ltd.</p>
            </footer>
        </>
    )
}
