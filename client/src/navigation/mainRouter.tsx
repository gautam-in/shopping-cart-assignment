import React from "react";
import { allRoutes } from "navigation/allRouteNames";
import MapRoutes from "./mapRoutes";
import Header from "components/molecules/header/header";
import Footer from "components/molecules/footer/footer";
import SignIn from "modules/signIn";
import SignUp from "modules/signUp";
import Home from "modules/home";

export const Routes = () => {
  return [
    {
      path: allRoutes.HOME,
      component: Home,
      isExact: true
    },
    {
      path: allRoutes.LOGIN,
      component: SignIn,
      isExact: true
    },
    {
      path: allRoutes.REGISTER,
      component: SignUp,
      isExact: true
    },
    {
      path: allRoutes.PRODUCTS,
      component: () => <div>Products</div>,
      isExact: true
    },
    {
      path: "",
      component: () => <div>Page Not Found</div>
    }
  ];
};

export default function MainRouter(): React.ReactElement {
  let finalRoutes: Array<any> = [...Routes()];

  return (
    <React.Fragment>
      <Header />
      <MapRoutes routes={finalRoutes} />
      <Footer />
    </React.Fragment>
  );
}
