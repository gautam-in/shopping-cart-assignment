import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout/layout";
import { routeList } from "./routing/routes";
import PublicRoute from "./routing/publicRoute";
import PrivateRoute from "./routing/privateRoute";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";
import Loader from "./components/loader/loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notFound = lazy(() => import("./pages/404/404.jsx"));

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<Loader />}>
          <div className="App">
            <Switch>
              {routeList.map(([key, route]) =>
                route.private ? (
                  <PrivateRoute key={key} {...route} />
                ) : (
                  <PublicRoute key={key} {...route} />
                )
              )}
              <Route component={notFound} />
            </Switch>
            <ToastContainer />
          </div>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
