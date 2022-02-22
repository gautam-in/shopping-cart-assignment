import React, { Fragment } from "react";
import "./home.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import Category from "../Category/Category";
import { Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList } from "../../actions/categoryActions";
import { getBannerList } from "../../actions/bannerActions";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const Home = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.catagories.categories);
  const bannerList = useSelector((state) => state.banners.bannerList);

  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
    color: "#b8b8b8",
  };

  useEffect(() => {
    dispatch(getCategoryList());
    dispatch(getBannerList());
    localStorage.removeItem("categoryId");
  }, []);

  return (
    <Fragment>
      <Container>
        <div className="shadow bottom">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <Fragment>
                  <div className="custom_arrows">
                    <ChevronLeftIcon
                      onClick={onClickHandler}
                      style={{ ...arrowStyles }}
                    />
                  </div>
                </Fragment>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <Fragment>
                  <div className="custom_arrows">
                    <ChevronRightIcon
                      onClick={onClickHandler}
                      style={{ ...arrowStyles, right: 0 }}
                    />
                  </div>
                </Fragment>
              )
            }
          >
            {bannerList &&
              bannerList.map((item) => {
                return (
                  <div key={item.id}>
                    <img src={item.bannerImageUrl} alt={item.bannerImageAlt} />
                  </div>
                );
              })}
          </Carousel>
        </div>
      </Container>

      {categoryList &&
        categoryList
          .filter((item) => item.order > 0)
          .sort((a, b) => a.order - b.order)
          .map((item) => {
            return <Category key={item.id} categoryData={item} />;
          })}
    </Fragment>
  );
};

export default Home;
