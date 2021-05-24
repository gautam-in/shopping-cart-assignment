import React, { Suspense } from "react";
import "../stylesheet/custom/home.scss";
const CarouselHome = React.lazy(() => import("./CarouselHome"));
const Categories = React.lazy(() => import("./Categories"));

function Home() {
  return (
    <div className="app-home">
      <Suspense
        fallback={
          <div className="loader-block">
            <div className="loader"></div>
          </div>
        }
      >
        <CarouselHome />
        <Categories />
      </Suspense>
    </div>
  );
}

export default Home;
