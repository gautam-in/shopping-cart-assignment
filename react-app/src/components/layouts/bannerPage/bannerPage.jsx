import React, { useEffect } from "react";
import "./bannerPage.scss";
import {
  getBanners,
  getCategories,
  loadBanners,
  loadCategories,
  updateCategory,
} from "../../../store/entities/items";
import { useDispatch, useSelector } from "react-redux";
import ImageSlider from "../../common/imageSlider/imageSlider";
import { useNavigate } from "react-router-dom";
import Footer from "../../common/footer/footer";
import { isMobile } from "../../../utils";

function BannerPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadBanners());
    dispatch(loadCategories());
  }, []);
  const banners = useSelector(getBanners);
  const categories = useSelector(getCategories);

  const gotoProducts = (e) => {
    dispatch(updateCategory(e));
    navigate("/products");
  };

  return (
    <>
      <div className="bannerPageContainer">
        <div className="bannerSliderSection shadow">
          <ImageSlider
            banners={banners}
            height={isMobile ? "100px" : "300px"}
            width="100%"
          />
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
      <Footer />
    </>
  );
}

export default BannerPage;
