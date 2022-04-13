import React, { Suspense } from "react";
//import Banner from "./Banner";
//import Categories from "./Categories";

const Banner = React.lazy(() => import("./Banner"));
const Categories = React.lazy(() => import("./Categories"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
        <Categories />
      </Suspense>
    </div>
  );
};

export default Home;
