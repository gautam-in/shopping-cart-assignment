import React, { Suspense, lazy } from "react";
import "./Home.css";
const Carousel = lazy(() => import("../carousel/CarouselCom"));
const Category = lazy(() => import("../category/Category"));

function Home() {
  return (
    <main className="app-home">
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        }>
        <Carousel />
        <Category />
      </Suspense>
    </main>
  );
}

export default Home;