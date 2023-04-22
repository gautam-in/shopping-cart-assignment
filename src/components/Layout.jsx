import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import { Loading } from "./Loading";
const Header = lazy(() => import("@components/Header"));
import styles from "./Header/Header.module.scss";

export function Layout() {
    return (
        <>
            <Loading fallback={<div className={styles.appHeader}></div>}>
                <Header />
            </Loading>
            <main className="container" id="mainContent">
                <Outlet />
            </main>
            <footer className="footer">
                <p className="copyright">Copyright © 2011-2018 Sabka Baazar Gorcery Supplies Pvt. Ltd.</p>
            </footer>
        </>
    )
}
