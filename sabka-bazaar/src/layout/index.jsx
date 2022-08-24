import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import "./index.scss";
const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>

      <Footer />
    </Fragment>
  );
};

export default Layout;
