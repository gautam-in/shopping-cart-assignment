import { Carousel, Layout } from "antd";
import React, { useEffect } from "react";
import Categories from "../Categories";
import Loader from "../Loader";
import "./styles.scss";
const { Content } = Layout;

export interface Props {
  // catalog: ICatalog;
}

const Home = ({
  initCatalog,
  getCategories,
  catalog,
  categories,
  catalogLoaded,
  categoriesLoaded,
}) => {
  useEffect(() => {
    initCatalog();
    getCategories();
  }, []);

  if (!catalogLoaded) {
    return <Loader />;
  }

  const configs = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Content className="container-wrapper">
      <div className="banners-slider m60">
        <Carousel {...configs}>
          {catalog.items.length ? (
            catalog.items.map((item) => {
              return (
                <div key={item.id} className="container-bottom-shadow slide">
                  <img alt="example" src={item.bannerImageUrl} />
                </div>
              );
            })
          ) : (
            <h1 className="no-products">No offers found.</h1>
          )}
        </Carousel>
      </div>
      <div className="categories m60">
        <Categories loading={!categoriesLoaded} data={categories} />
      </div>
    </Content>
  );
};

export default Home;
