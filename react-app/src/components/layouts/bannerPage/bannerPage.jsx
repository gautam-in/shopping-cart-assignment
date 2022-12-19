import React, { useEffect } from "react";
import "./bannerPage.scss";
import {
  getBanners,
  getCategories,
  loadBanners,
} from "../../../store/entities/items";
import { useDispatch, useSelector } from "react-redux";
import ImageSlider from "../../common/imageSlider/imageSlider";

function BannerPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBanners());
  }, []);
  const banners = useSelector(getBanners);
  const categories = useSelector(getCategories);
  console.log(categories);

  const gotoProducts = (e) => {
    // navigate("/products", { state: { id: e } });
  };

  return (
    <div className="bannerPageContainer">
      <div className="bannerSliderSection shadow">
        <ImageSlider banners={banners} height="300px" width="100%" />
      </div>
      <div className="belowContainer">
        {categories.map((item, index) =>
          index % 2 === 0 ? (
            <div className="insideHolder shadow">
              <div className="bannerLeftSec">
                <img
                  variant="top"
                  src={item?.imageUrl}
                  className="imgStyle"
                  alt={item.name}
                />
              </div>
              <div className="bannerRightSec desc">
                <div className="heading">{item.name}</div>
                <div className="desc itemDescription">{item.description}</div>
                <button
                  className="btn-cls"
                  onClick={() => gotoProducts(item.id)}
                >
                  Explore {item.name}
                </button>
              </div>
            </div>
          ) : (
            <div className="insideHolder shadow">
              <div className="bannerRightSec desc">
                <div className="heading">{item.name}</div>
                <div className="desc itemDescription">{item.description}</div>
                <button
                  className="btn-cls"
                  onClick={() => gotoProducts(item.id)}
                >
                  Explore {item.name}
                </button>
              </div>
              <div className="bannerLeftSec">
                <img
                  variant="top"
                  src={item?.imageUrl}
                  className="imgStyle"
                  alt={item.name}
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default BannerPage;
