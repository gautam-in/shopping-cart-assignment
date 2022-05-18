import Button from "../../components/button/button";
import APIConfig from "../../api/api";
import { useCategoriesParsed } from "../../../helpers";
import HomeState from "./homeState";
import "./home.scss";

const Home = () => {
  const api = new APIConfig();

  const renderCarousel = async () => {
    let banners = [];
    const res = await api.loadBannersAsync();
    if (res.data) {
      banners = res.data;

      const row = async () => {
        let ele = [];
        banners.map((banner, key) =>
          ele.push(`
        <article> <img  tabindex=0 src=${banner.bannerImageUrl} style='width:100%' alt="${banner.bannerImageAlt}" /> </article>
          `)
        );

        return ele.join("");
      };

      return `<div class="carousel-wrapper" id='carousel-wrapper'>
              <input checked  aria-hidden='true' type="radio" name="slider" id="slide1" />
              <input type="radio" aria-hidden='true' name="slider" id="slide2" />
              <input type="radio" aria-hidden='true' name="slider" id="slide3" />
              <input type="radio" aria-hidden='true' name="slider" id="slide4" />
              <input type="radio" aria-hidden='true' name="slider" id="slide5" />
                <div class="slider-wrapper">
                  <div class="inner" >
                  ${await row()}
                  </div>
                </div>
                <div class="slider-prev-next-control">
                  <label  for="slide1" tabindex='0' ></label>
                  <label  for="slide2" tabindex='0' ></label>
                  <label  for="slide3" tabindex='0' ></label>
                  <label  for="slide4" tabindex='0' ></label>
                  <label  for="slide5" tabindex='0' ></label>
                </div>
                <div class="slider-dot-control">
                 <label  for="slide1" tabindex='0' ></label>
                  <label  for="slide2" tabindex='0' ></label>
                  <label  for="slide3" tabindex='0' ></label>
                  <label  for="slide4" tabindex='0' ></label>
                  <label  for="slide5" tabindex='0' ></label>
                </div>
            </div>`;
    }
  };

  const renderRow = ({ imageUrl, id, name, description, direction, key }) => {
    return `
      <div class='product-row-wrapper' style='flex-direction:${direction}'>
        <div class='product-image'>
          <img src=${imageUrl} alt=${name} />
        </div>
        <div class='product-content'>
          <h4>${name}</h4>
          <p>${description}</p>
          ${Button.render({
            id: `explore-product-btn`,
            label: `Explore ${key}`,
            className: "product-btn",
            dataAtt: id,
          })}
        </div>
      </div>
    `;
  };

  const render = async () => {
    try {
      let element = [];
      let eCategories = useCategoriesParsed(await api.loadCategoriesAsync());
      eCategories.forEach((list, index) =>
        element.push(
          renderRow({ ...list, direction: index % 2 ? "row-reverse" : "row" })
        )
      );
      return `${await renderCarousel()} ${element.join("")}`;
    } catch (e) {
      console.log("__error in banners", e);
    }
  };

  return render();
};

const HomePage = {
  privateRoute: true,
  render: async () => Home(),
  reRender: async () => {
    const hState = new HomeState();
    return hState.reRender();
  },
};

export default HomePage;
