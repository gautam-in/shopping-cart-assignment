import React, { Suspense } from "react";
import "./home.scss";
const CarouselHome = React.lazy(() => import("./CarouselHome"));
const Categories = React.lazy(() => import("./Categories"));

function Home() {
  return (
    <main className="app-home">
      <h1 style={{ display: "none" }}>Sabka Bazar shopping App</h1>
      <Suspense
        fallback={
          <div className="loader-block">
            <div className="loader"></div>
          </div>
        }
      >
        <a className="skip-line" href="#main">
          Skip to content
        </a>
        <CarouselHome />
        <Categories />
      </Suspense>
    </main>
  );
}

export default Home;
