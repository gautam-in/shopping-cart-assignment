import React from "react";
import { Switch } from "react-router-dom";
import Row from "../components/row/row";
import RouterComponent from "./routerComponent";

const MainRouter = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Row>
        <Switch>
          <RouterComponent/>
        </Switch>
      </Row>
    </React.Fragment>
  );
};

export default MainRouter;
