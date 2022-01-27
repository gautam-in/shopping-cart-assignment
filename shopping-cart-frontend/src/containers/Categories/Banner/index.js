import Carousel from "react-bootstrap/Carousel";
import { useFetch } from "../../../hooks/useFetch";
import { api } from "../../../constants";
import "./Banner.scss";

export const Banner = () => {
  const [{ apiData: banners = [] }] = useFetch(api.banners);

  const sortedBanners = banners?.sort((a, b) => a.order - b.order);

  return (
    <Carousel
      nextIcon={<NavIcon>Next</NavIcon>}
      prevIcon={<NavIcon>Prev</NavIcon>}
      className="banner-carousel"
    >
      {sortedBanners.map(({ bannerImageAlt, bannerImageUrl, id, isActive }) => {
        return isActive ? (
          <Carousel.Item key={id}>
            <img
              className="d-block w-100"
              src={bannerImageUrl}
              alt={bannerImageAlt}
            />
          </Carousel.Item>
        ) : null;
      })}
    </Carousel>
  );
};

const NavIcon = ({ children }) => {
  return <span className="nav-icon p-1">{children}</span>;
};
