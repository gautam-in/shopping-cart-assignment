import { Container } from "@mui/material";
import React from "react";
import Category from "../../components/Category/Category";
import { Carousel } from "react-responsive-carousel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const categories = [
  {
    name: "Beverages",
    key: "beverages",
    description:
      "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
    enabled: true,
    order: 3,
    imageUrl: "/images/category/beverages.png",
    id: "5b675e5e5936635728f9fc30",
  },
  {
    name: "Bakery Cakes and Dairy",
    key: "bakery-cakes-dairy",
    description:
      "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
    enabled: true,
    order: 2,
    imageUrl: "/images/category/bakery.png",
    id: "5b6899123d1a866534f516de",
  },
  {
    name: "Beauty and Hygiene",
    key: "beauty-hygiene",
    description:
      "Buy beauty and personal care products online in India at best prices.",
    enabled: true,
    order: 4,
    imageUrl: "/images/category/beauty.png",
    id: "5b68994e3d1a866534f516df",
  },
  {
    name: "Baby Care",
    key: "baby",
    description:
      "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
    enabled: true,
    order: 5,
    imageUrl: "/images/category/baby.png",
    id: "5b6899683d1a866534f516e0",
  },
  {
    name: "Seafood",
    key: "seafood",
    description: "Great place to buy fresh seafood.",
    enabled: false,
    order: -1,
    id: "5b68997d3d1a866534f516e1",
  },
  {
    name: "Fruits & Vegetables",
    key: "fruit-and-veg",
    description: "A variety of fresh fruits and vegetables.",
    enabled: true,
    order: 1,
    imageUrl: "/images/category/fruits.png",
    id: "5b6899953d1a866534f516e2",
  },
];
const bannerList = [
  {
    bannerImageUrl: "/images/offers/offer1.jpg",
    bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
    isActive: true,
    order: 1,
    id: "5b6c38156cb7d770b7010ccc",
  },
  {
    bannerImageUrl: "/images/offers/offer2.jpg",
    bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
    isActive: true,
    order: 2,
    id: "5b6c38336cb7d770b7010ccd",
  },
  {
    bannerImageUrl: "/images/offers/offer3.jpg",
    bannerImageAlt: "Independence Day Deal - Rs99 off on domex",
    isActive: true,
    order: 3,
    id: "5b6c38456cb7d770b7010cce",
  },
  {
    bannerImageUrl: "/images/offers/offer4.jpg",
    bannerImageAlt: "Independence Day Deal - Rs99 off on bodywash",
    isActive: true,
    order: 4,
    id: "5b6c38576cb7d770b7010ccf",
  },
  {
    bannerImageUrl: "/images/offers/offer5.jpg",
    bannerImageAlt: "Independence Day Deal - Rs70 off on tea",
    isActive: true,
    order: 5,
    id: "5b6c386b6cb7d770b7010cd0",
  },
];
const Home = () => {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
    color: "#b8b8b8",
  };

  return (
    <div>
      <Container maxWidth="md">
        <div className="shadow bottom">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <>
                  <div className="custom_arrows">
                    <ChevronLeftIcon
                      onClick={onClickHandler}
                      style={{ ...arrowStyles }}
                    />
                  </div>
                </>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <>
                  <div className="custom_arrows">
                    <ChevronRightIcon
                      onClick={onClickHandler}
                      style={{ ...arrowStyles, right: 0 }}
                    />
                  </div>
                </>
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
        {categories
          .filter((item) => item.order > 0)
          .sort((a, b) => a.order - b.order)
          .map((item) => {
            return <Category key={item.id} categoryData={item} />;
          })}
      </Container>
    </div>
  );
};

export default Home;
