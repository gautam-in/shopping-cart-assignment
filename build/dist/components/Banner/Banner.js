import React, {useState, useEffect} from "../../../_snowpack/pkg/react.js";
import banners from "../../server/banners/index.get.json.proxy.js";
import "./Banner.css.proxy.js";
export const Banner = () => {
  const banner = JSON.parse(JSON.stringify(banners[0]));
  const [active, setActive] = useState(0);
  const handleDotClick = (index) => {
    setActive(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(active === banners.length - 1 ? 0 : active + 1);
    }, 3e3);
    return () => clearInterval(interval);
  }, [active]);
  return /* @__PURE__ */ React.createElement("div", {
    key: banner.id,
    className: "banner"
  }, /* @__PURE__ */ React.createElement("img", {
    key: banner.id,
    src: banner.bannerImageUrl,
    alt: banner.bannerImageAlt
  }), banners.map((banner2, index) => {
    return /* @__PURE__ */ React.createElement("img", {
      className: index === active ? "banner-active" : "banner-inactive",
      key: banner2.id,
      src: banner2.bannerImageUrl,
      alt: banner2.bannerImageAlt
    });
  }), /* @__PURE__ */ React.createElement("div", {
    className: "dots"
  }, banners.map((_, index) => {
    return /* @__PURE__ */ React.createElement("span", {
      key: index,
      className: index === active ? "dots--active" : "dots--inactive",
      onClick: handleDotClick.bind(null, index)
    });
  })));
};
export default Banner;
