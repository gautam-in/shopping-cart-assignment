import React from "react";
import { Route, Switch } from "react-router-dom";

interface Props {
  routes: any;
  props?: any;
  history?: any;
}

export interface IRoute {
  path: string;
  component: any;
  isExact: boolean;
}

export default function MapRoutes({ routes, props, history }: Props): React.ReactElement {
  return (
    <React.Fragment>
      <Switch>
        {routes &&
          routes.map((route: IRoute, index: number) => {
            const { path, component: Component, isExact, ...rest } = route;
            return (
              <Route key={`${path}-${index}`} path={path} exact={isExact} {...rest}>
                <Component {...props} history={history} />
              </Route>
            );
          })}
      </Switch>
    </React.Fragment>
  );
}
