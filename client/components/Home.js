import { useEffect,useState } from "react";
import { CategoryArticle } from "../styles/HomeStyle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HomeCategory from "./HomeCategory";
import { getData } from "../utility/Datahandler";
import Error from "./Error";

const Home = () => {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    if (bannerList.length === 0) getData("/banners")
      .then((response) => {
        setBannerList(response);
      })
  }, []);

  return (
    <>
      {bannerList.length === 0 ? (
        <Error errorMessage="Unable to load banners." />
      ) : (
        <CategoryArticle>
          <Carousel
            preventMovementUntilSwipeScrollTolerance
            swipeable
            showStatus={false}
            showThumbs={false}
            emulateTouch
            showArrows={true}
          >
            {bannerList
              ?.filter((banner) => banner.isActive)
              .map((banner) => (
                <div key={banner.id}>
                  <img
                    src={banner.bannerImageUrl}
                    alt={banner.bannerImageAlt}
                  />
                </div>
              ))}
          </Carousel>
        </CategoryArticle>
      )}
      <HomeCategory />
    </>
  );
};

export default Home;
