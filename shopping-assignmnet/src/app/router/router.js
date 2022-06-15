import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OpenRoutes } from "./routeList";

const lazyLoader = () => <div>Loading...</div>;

const RootRouter = () => (
  <Suspense fallback={lazyLoader}>
    <Router>
      <Routes>
        {OpenRoutes.map((route, i) => (
          <>
            <Route key={i} path={route.path} element={<route.component />} />
          </>
        ))}
      </Routes>
    </Router>
  </Suspense>
);
export default RootRouter;
