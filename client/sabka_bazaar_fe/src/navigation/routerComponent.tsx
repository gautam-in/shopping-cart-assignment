import React from "react";
import Login from "../modules/login/index";
import Register from "../modules/register/index";
import Home from '../modules/home/index';
import { allRoutes } from "./allRouteNames";
import MapRoutes from "./mapRoutes";

export interface IRoute {
  path: string;
  component: any;
  isExact: boolean;
  children: Array<IRoute>;
  permission: Array<string>;
}

export const Routes = () => {
  return [
    {
      path: allRoutes.HOME,
      isExact: true,
      component: Home
    },
    {
      path: allRoutes.LOGIN, 
      isExact: true,
      component: Login
    },
    {
      path: allRoutes.REGISTER,
      isExact: true,
      component: Register
    },
    {
      path: allRoutes.PLP,
      isExact: true,
      component: () => <div>Products Page</div>
    },
    {
      path: "",
      component: () => <div>Page Not Found</div>
    }
  ];
};

const routes = () => {
  return Routes();
};

export default function RouterComponent(): React.ReactElement {
  let finalRoutes: Array<any> = [...routes()];
  return (
    <React.Fragment>
      <MapRoutes routes={finalRoutes} />
    </React.Fragment>
  );
}
