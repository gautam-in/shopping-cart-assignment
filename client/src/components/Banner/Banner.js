import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getBannersStart } from "./BannerActions";
function Banner() {
  const { banners = [] } = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getBannersStart());
  }, []);

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
                className="img-fluid"
                src={banner.imageUrl}
                alt={banner.name}
              />
            </div>
            <div className="col-md-6 flex-center">
              <div className="space text-center">
                <h4 className="title-xl">{banner.name}</h4>
                <p className="title">{banner.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    history.push(`/products?category=${banner.id}`)
                  }
                >
                  Explore {banner.name}
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Banner;
