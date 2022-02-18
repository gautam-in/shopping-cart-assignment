import React, { useState, useEffect, Suspense, lazy } from "react";

const NavBar = lazy(() => import("../../components/navbar/navbar.component"));
const Category = lazy(() =>
  import("../../components/category/category.components")
);
const Footer = lazy(() => import("../../components/footer/footer.componets"));
const Slider = lazy(() => import("../../components/slider/slider.component"));

const HomePage = () => {
  const [data, setDataFn] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/banners")
      .then((response) => response.json())
      .then((data) => {
        setDataFn(data);
      });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <main>
        <Slider data={data} />
        <Category />
      </main>
      <Footer />
    </Suspense>
  );
};

export default HomePage;
