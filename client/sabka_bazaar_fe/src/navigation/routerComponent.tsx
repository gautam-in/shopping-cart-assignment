import React from "react";
import login from "../modules/login/index";
import register from "../modules/register/index";
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
      component: () => <div>Home Page</div>,
      isExact: true
    },
    {
      path: allRoutes.LOGIN, 
      isExact: true,
      component: login
    },
    {
      path: allRoutes.REGISTER,
      isExact: true,
      component: register
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
