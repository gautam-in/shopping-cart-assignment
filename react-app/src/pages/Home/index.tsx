import React from "react";
import { useNavigate } from "react-router-dom";

import { Slider } from "../../components/basic";
import { BannersData } from "../../components/basic/Slider";
import { MyGlobalContext } from "../../context/myGLobalContext";
import { useFirstRender } from "../../hooks";

export type ICategoriesData = {
  name: string;
  key: string;
  description: string;
  enabled: boolean;
  order: number;
  imageUrl: string;
  id: string;
};

const Home: React.FC = () => {
  const { categoriesData, setCategoriesData } =
    React.useContext(MyGlobalContext);
  const [bannersData, setBannersData] = React.useState([] as BannersData[]);

  const navigate = useNavigate();

  const getAllCategories = async () => {
    await fetch(`http://localhost:5000/categories`)
      .then(async (response) => {
        let categoriesData = await response.json();
        categoriesData = categoriesData.sort(
          (a: { order: number }, b: { order: number }) => a.order - b.order
        );
        setCategoriesData(categoriesData);
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

  useFirstRender(() => {
    getAllCategories();
    getAllBanners();
  }, []);

  return (
    <div className="home__wrapper">
      <Slider data={bannersData} />
      {categoriesData.length > 0 &&
        categoriesData.map((item: ICategoriesData) => {
          let imagePath: string[] =
            item.imageUrl !== undefined ? item.imageUrl.split("/") : [];
          let imageName = imagePath[imagePath?.length - 1];

          if (item.imageUrl === undefined) return "";
          return (
            <div className="home__container" key={item?.key}>
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
                <button
                  className="btn btn--explore"
                  onClick={() => navigate(`/products?id=${item?.id}`)}
                >
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
