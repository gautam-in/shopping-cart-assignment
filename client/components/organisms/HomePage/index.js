import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import { sizes } from "../../../global/styles/sizes";
import { formatSize } from "../../../global/utils";
import SectionWrapper from "../../atoms/SectionWrapper";
import CategoryList from "../../molecules/CategoryList";
import { StyledCarousel } from "./HomePage.styles";

const { mobileL, tablet, desktop } = sizes;

const HomePage = ({ categoriesList, carouselData }) => {
  return (
    <SectionWrapper>
      {!!carouselData?.length && (
        <StyledCarousel
          ssr
          infinite
          showDots
          autoPlay
          autoPlaySpeed={5000}
          keyBoardControl
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="carousel-dots"
          responsive={{
            desktop: {
              breakpoint: {
                max: formatSize(desktop),
                min: formatSize(tablet),
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: formatSize(tablet),
                min: formatSize(mobileL),
              },
              items: 1,
            },
            mobile: {
              breakpoint: { max: formatSize(mobileL), min: 0 },
              items: 1,
            },
          }}
        >
          {carouselData.map((item) => (
            <div key={item.id}>
              <Image
                src={item.bannerImageUrl}
                alt={item.bannerImageAlt}
                width="1200"
                height="300"
                layout="responsive"
              />
            </div>
          ))}
        </StyledCarousel>
      )}
      <CategoryList categoriesList={categoriesList} />
    </SectionWrapper>
  );
};

export default HomePage;
