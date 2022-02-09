import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Logo1 from "../../static/images/offers/offer1.jpg";
import Logo2 from "../../static/images/offers/offer2.jpg";
import Logo3 from "../../static/images/offers/offer3.jpg";
import Logo4 from "../../static/images/offers/offer4.jpg";
import Logo5 from "../../static/images/offers/offer5.jpg";

interface Banner {
  bannerImageURL: string;
  bannerImageAlt: string;
  isActive: boolean;
  order: number;
  id: string;
}

const HomeCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState<Banner[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/banners")
      .then((res) => res.json())
      .then((res) => {
        //console.log(res);
        setData(res);
      });
  }, []);

  const handleSelect = (
    selectedIndex: number,
    e: Record<string, unknown> | null
  ) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="shadow p-3 mb-5 bg-white rounded"
    >
      {data.map((slide, i) => {
        let logo =
          slide.order === 1
            ? Logo1
            : slide.order === 2
            ? Logo2
            : slide.order === 3
            ? Logo3
            : slide.order === 4
            ? Logo4
            : Logo5;
        return (
          <Carousel.Item key={slide.order}>
            <img
              // style={{ width: "100%", height: "auto" }}
              src={logo}
              alt={slide.bannerImageAlt}
            />
            <Carousel.Caption>
              {/* <h3>{slide.bannerImageAlt}</h3>
          <p>{slide.bannerImageAlt}</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;
