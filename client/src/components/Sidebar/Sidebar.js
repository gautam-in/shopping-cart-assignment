import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBannersStart } from "../Banner/BannerActions";

function Sidebar({ filter, selectedcategory }) {
  const { banners } = useSelector((state) => state.banner);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!(banners?.length > 0)) {
      dispatch(getBannersStart());
    }
  }, [banners.length]);

  return (
    <div className="sidebar">
      <div>
        <select
          className="select"
          onChange={(e) => handleFilter(e.target.value)}
        >
          {banners?.length > 0 &&
            banners.map((banner) => (
              <option key={banner.id} value={banner.id}>
                {banner.name}
              </option>
            ))}
        </select>
      </div>
      <nav className="nav hide-sm">
        {banners?.length > 0 &&
          banners.map((banner) => (
            <a
              className={`nav-link ${
                banner.id === selectedcategory ? "active" : ""
              } ${banner.key}`}
              key={banner.id}
              onClick={filter}
              id={banner.id}
            >
              {banner.name}
            </a>
          ))}
      </nav>
    </div>
  );
}

export default Sidebar;
