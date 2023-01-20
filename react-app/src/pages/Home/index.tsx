import React from "react";

import { Slider } from "../../components/basic";

const Home: React.FC = () => {
  const [categories, setCategories] = React.useState([]);
  const [bannersData, setBannersData] = React.useState([]);

  const getAllCategories = async () => {
    await fetch(`http://localhost:5000/categories`)
      .then(async (response) => {
        let categoriesData = await response.json();
        categoriesData = categoriesData.sort(
          (a: { order: number }, b: { order: number }) => a.order - b.order
        );
        setCategories(categoriesData);
      })
      .catch((error) => {
        throw error;
      });
  };

  const getAllBanners = async () => {
    await fetch(`http://localhost:5000/banners`)
      .then(async (response) => {
        let banners = await response.json();
        banners = banners.sort(
          (a: { order: number }, b: { order: number }) => a.order - b.order
        );
        setBannersData(banners);
      })
      .catch((error) => {
        throw error;
      });
  };

  React.useEffect(() => {
    getAllCategories();
    getAllBanners();
  }, []);

  return (
    <div className="home__wrapper">
      <Slider data={bannersData} />
      {categories.length > 0 &&
        categories.map((item: any) => {
          let imagePath =
            item.imageUrl !== undefined && item.imageUrl.split("/");
          let imageName = imagePath[imagePath?.length - 1];

          if (item.imageUrl === undefined) return "";
          return (
            <div className="home__container" key={item?.id}>
              <img
                src={
                  imagePath
                    ? require(`../../static/images/category/${imageName}`)
                    : require(`../../static/images/category/baby.png`)
                }
                alt={item?.name}
                className="home__container__img"
              />
              <div className="home__container__details">
                <h3 className="heading-3">{item?.name}</h3>
                <p className="paragraph paragraph--p1">{item?.description}</p>
                <button className="btn btn--explore">
                  Explore {item?.name}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
