import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Button from "../Button/Button";
import { getBannersStart } from "./BannerActions";
function Banner() {
  const { banners = [] } = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getBannersStart());
  }, []);

  const handleCategory = (e) => {
    history.push(`/products?category=${e.target.id}`);
  };
  return (
    <div>
      {banners &&
        banners.length > 0 &&
        banners.map((banner, i) => (
          <div
            key={banner.id}
            className="row shadow-row"
            style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
          >
            <div className="col-md-6 banner-img">
              <img
                loading="lazy"
                className="img-fluid"
                src={banner.imageUrl}
                alt={banner.name}
              />
            </div>
            <div className="col-md-6 flex-center">
              <div className="space text-center">
                <h4 className="title-xl">{banner.name}</h4>
                <p className="title">{banner.description}</p>
                <Button
                  variant="primary"
                  onClick={handleCategory}
                  id={banner.id}
                >{`Explore ${banner.name}`}</Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Banner;
