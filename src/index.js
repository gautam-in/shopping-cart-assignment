import "./styles/style.scss";
import axiosInstance from "./utils/axiosInstance";

class Home {
  banners = [];
  categories = [];
  error = [];

  constructor() {
    this.loadData();
  }
  // Loading the home page data.
  loadData = async () => {
    try {
      const resp = await Promise.allSettled([
        axiosInstance.get("banners"),
        axiosInstance.get("categories"),
      ]);

      if (resp[0].status === "fulfilled") {
        this.banners = resp[0].value;
        this.createSwiper();
      }
      if (resp[1].status === "fulfilled") {
        this.categories = resp[1].value;
        this.displayCategories();
      }
      if (resp[0].status === "rejected") {
        this.errors["banners"] = "Banners Data not available";
      }
      if (resp[1].status === "rejected") {
        this.errors["categories"] = "Categories Data not available";
      }
    } catch (error) {}
  };

  // Creating swiper for home page.
  createSwiper = () => {
    const swiperOl = document.createElement("ol");
    swiperOl.className = "swiper";

    const swiperBtn = document.createElement("div");
    swiperBtn.className = "swiper-btn";

    for (let i = 0; i < this.banners.data.length; i++) {
      const element = this.banners.data[i];
      const swiperLI = document.createElement("li");
      swiperLI.className = "swiper__item";
      swiperLI.id = element.id;
      const img = document.createElement("img");

      img.src = element.bannerImageUrl;
      img.alt = element.bannerImageAlt;
      swiperLI.appendChild(img);

      swiperOl.appendChild(swiperLI);

      const anchor = document.createElement("a");
      anchor.href = `#${element.id}`;
      swiperBtn.appendChild(anchor);
    }
    const banner = document.getElementById("banner");
    banner.appendChild(swiperOl);
    banner.appendChild(swiperBtn);
  };
  // Display category.
  displayCategories = () => {
    const category = document.getElementById("category");

    for (let i = 0; i < this.categories.data.length; i++) {
      const element = this.categories.data[i];
      const categoryItem = document.createElement("div");
      categoryItem.className = "category__item";

      const categoryContent = document.createElement("div");
      categoryContent.className = "category__content";

      const h1 = document.createElement("h1");
      h1.innerHTML = element.name;

      const p = document.createElement("p");
      p.innerHTML = element.description;

      const button = document.createElement("button");
      button.innerHTML = `Explore ${element.name}`;
      button.onclick = () => {
        history.pushState(
          { page: 1 },
          "Home Page",
          `products.html?category=${element.key}`
        );
        location.reload();
      };

      categoryContent.appendChild(h1);
      categoryContent.appendChild(p);
      categoryContent.appendChild(button);

      const categoryImg = document.createElement("img");

      categoryImg.src = element.imageUrl;
      categoryImg.alt = element.name;
      categoryImg.className = "category__img";

      categoryItem.appendChild(categoryContent);
      categoryItem.appendChild(categoryImg);
      category.appendChild(categoryItem);
    }
  };
}

const home = new Home();
