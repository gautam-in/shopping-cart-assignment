import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { HomeStyles, Banner } from "../styles/HomeStyles";
import { useEffect, useState } from "react";
import request from "./../library/utlis/request";
import { NavLink } from "react-router-dom";

const CarouselButton = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  cursor: "pointer",
  backgroundColor: "#23202070",
  color: "#FFF",
  padding: "0.5rem",
  border: 0,
  boxShadow: 0,
};

export default function Home() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    request("banners").then((res) => {
      setBanners(res);
    });
  }, []);

  return (
    <HomeStyles>
      <Carousel
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                ...CarouselButton,
                left: 4,
              }}
            >
              PREV
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                ...CarouselButton,
                right: 4,
              }}
            >
              NEXT
            </button>
          )
        }
        showThumbs={false}
        showStatus={false}
      >
        {banners.map((banner, index) => {
          return banner.isActive ? (
            <div key={index}>
              <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
            </div>
          ) : null;
        })}
      </Carousel>

      <Banner rowalign="row">
        <figure>
          <div>
            <picture>
              <img
                src={`/static/images/category/fruits.png`}
                alt="banner-fruits"
              />
            </picture>
          </div>
          <figcaption>
            <h1>Fruits and Vegetables</h1>
            <p>A variety of fresh fruits and vegetables.</p>
            <NavLink to="/products?category=fruit-and-veg">
              <button>Explore fruit-and-veg</button>
            </NavLink>
          </figcaption>
        </figure>
      </Banner>
      <Banner rowalign="row-reverse">
        <figure>
          <div>
            <picture>
              <img
                src={`/static/images/category/bakery.png`}
                alt="banner-bakery"
              />
            </picture>
          </div>
          <figcaption>
            <h1>Bakery Cakes and Dairy</h1>
            <p>
              The best cupcakes,cookies,cakes,pies,cheesecakes,fresh
              bread,biscotti,muffins,bagels,fresh coffee,milk and more.
            </p>
            <NavLink to="/products?category=bakery-cakes-dairy">
              <button>Explore bakery-cakes-dairy</button>
            </NavLink>
          </figcaption>
        </figure>
      </Banner>
      <Banner rowalign="row">
        <figure>
          <div>
            <picture>
              <img
                src={`/static/images/category/beverages.png`}
                alt="banner-beverages"
              />
            </picture>
          </div>
          <figcaption>
            <h1>Beverages</h1>
            <p>
              Our beverage department will ensure your fridge is always fully
              stocked.Shop for soda,juice,beer and more..
            </p>
            <NavLink to="/products?category=beverages">
              <button>Explore beverages</button>
            </NavLink>
          </figcaption>
        </figure>
      </Banner>
      <Banner rowalign="row-reverse">
        <figure>
          <div>
            <picture>
              <img
                src={`/static/images/category/beauty.png`}
                alt="banner-beauty"
              />
            </picture>
          </div>
          <figcaption>
            <h1>Beauty and Hygiene</h1>
            <p>
              Buy beauty and personal care products online in India at best
              prices.
            </p>
            <NavLink to="/products?category=beauty-hygiene">
              <button>Explore beauty-hygiene</button>
            </NavLink>
          </figcaption>
        </figure>
      </Banner>
      <Banner rowalign="row">
        <figure>
          <div>
            <picture>
              <img src={`/static/images/category/baby.png`} alt="banner-baby" />
            </picture>
          </div>
          <figcaption>
            <h1>Baby Care</h1>
            <p>
              Shop online for Baby Products,Diapers,Skin Care Products etc..
            </p>
            <NavLink to="/products?category=baby">
              <button>Explore baby</button>
            </NavLink>
          </figcaption>
        </figure>
      </Banner>
    </HomeStyles>
  );
}
