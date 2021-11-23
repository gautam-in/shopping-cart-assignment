import React, { Suspense, lazy } from "react";
import "./Home.css";
const CarouselMain = lazy(() => import("../carouselMain/CarouselMain"));
const Categories = lazy(() => import("../categories/Categories"));

function Home() {
  return (
    <main className="app-home">
      <Suspense
        fallback={
          <div className="loader-block">
            <div className="loader"></div>
          </div>
        }
      >
        <CarouselMain />
        <Categories />
      </Suspense>
    </main>
  );
}

export default Home;
