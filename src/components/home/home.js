import React, { useEffect, useState } from "react";
import "./home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

const Home = () => {
  const navigate = useNavigate();
  const [categoriesData, setCategoriesData] = useState([]);
  const [bannersData, setBannersData] = useState([]);

  const getBannersAndCategories = async () => {
    try {
      const res = await Promise.all([
        fetch("http://localhost:3000/banners"),
        fetch("http://localhost:3000/categories"),
      ]);

      const jsonData = await Promise.all([res[0].json(), res[1].json()]);
      setBannersData(jsonData[0]);
      setCategoriesData(jsonData[1]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBannersAndCategories();
  }, []);

  const exploreCategory = (categoryId) => {
    navigate(`/products/${categoryId}`);
  };

  return (
    <>
      <Header />
      <main>
        <section class="categories container">
          <div className="banner-carousel">
            <Carousel
              dynamicHeight={true}
              showIndicators={false}
              showStatus={false}
              infiniteLoop={true}
              stopOnHover={true}
              showThumbs={false}
              autoPlay
            >
              {bannersData.map((data) => {
                return (
                  <div key={data.id}>
                    <img
                      src={process.env.PUBLIC_URL + `${data.bannerImageUrl}`}
                      alt={data.bannerImageAlt}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>

          {categoriesData.map((item) => {
            return (
              <div key={item.id} class="categories__item">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + `${item.imageUrl}`}
                    alt={"alt image of" + `${item.name} `}
                  />
                </div>
                <div>
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                  <button
                    onClick={() => exploreCategory(item.id)}
                    type="button"
                    class="btn"
                  >
                    Explore {item.name}
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
