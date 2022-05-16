import "./home.scss";
import fruits from "../../../static/images/category/fruits.png";
import bakery from "../../../static/images/category/bakery.png";
import beverages from "../../../static/images/category/beverages.png";
import beauty from "../../../static/images/category/beauty.png";
import baby from "../../../static/images/category/baby.png";
import Button from "../../components/button/button";
import APIConfig from "../../api/api";

const Home = () => {
  const api = new APIConfig();

  const renderCarousel = async () => {
    let banners = [];
    const res = await api.loadBanners();
    if (res.data) {
      banners = res.data;

      const row = async () => {
        let ele = [];
        banners.map((banner) =>
          ele.push(`
        <article> <img src=${banner.bannerImageUrl} style='width:100%' alt=${banner.bannerImageAlt} /> </article>
          `)
        );

        return ele.join("");
      };

      return `<div class="carousel-wrapper" id='carousel-wrapper'>
              <input checked type="radio" name="slider" id="slide1" />
              <input type="radio" name="slider" id="slide2" />
              <input type="radio" name="slider" id="slide3" />
              <input type="radio" name="slider" id="slide4" />
              <input type="radio" name="slider" id="slide5" />
                <div class="slider-wrapper">
                  <div class="inner" tabindex='0'>
                  ${await row()}
                  </div>
                </div>
                <div class="slider-prev-next-control">
                  <label for="slide1" tabindex='0' ></label>
                  <label for="slide2" tabindex='0' ></label>
                  <label for="slide3" tabindex='0' ></label>
                  <label for="slide4" tabindex='0' ></label>
                  <label for="slide5" tabindex='0' ></label>
                </div>
                <div class="slider-dot-control">
                  <label for="slide1" tabindex='0' ></label>
                  <label for="slide2" tabindex='0' ></label>
                  <label for="slide3" tabindex='0' ></label>
                  <label for="slide4" tabindex='0' ></label>
                  <label for="slide5" tabindex='0' ></label>
                </div>
            </div>`;
    }
  };

  const renderRow = ({ imageUrl, name, description, direction, key }) => {
    return `
      <div class='product-row-wrapper' style='flex-direction:${direction}'>
        <div class='product-image'>
          <img src=${imageUrl} alt=${name} />
        </div>
        <div class='product-content'>
          <h4>${name}</h4>
          <p>${description}</p>
          ${Button.render({
            id: `${name}-product-btn`,
            label: `Explore ${key}`,
            className: "product-btn",
          })}
        </div>
      </div>
    `;
  };

  const render = async () => {
    try {
      let categories = [];
      const res = await api.loadCategories();
      if (res.data) {
        categories = res.data;
      }

      let eCategories = categories.filter((cat) => cat.enabled);
      eCategories.sort((a, b) => {
        if (a.order > b.order) return 1;
        else if (a.order < b.order) return -1;
        return 0;
      });

      let ele = [];
      eCategories.forEach((list, index) =>
        ele.push(
          renderRow({ ...list, direction: index % 2 ? "row-reverse" : "row" })
        )
      );
      return `${await renderCarousel()} ${ele.join("")}`;
    } catch (e) {
      console.log("__error in banners", e);
    }
  };

  return render();
};

const HomePage = {
  privateRoute: true,
  render: async () => Home(),
};

export default HomePage;
