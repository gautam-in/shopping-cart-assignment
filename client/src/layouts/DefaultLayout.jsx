import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { Outlet } from "react-router-dom";
import Cart from "../pages/Cart";

const DefaultLayout = () => {
  return (
    <>
      <AppHeader />
      <main>
        <Cart />
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
