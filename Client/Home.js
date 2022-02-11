function FetchBanners() {
     return fetch("http://localhost:5000/banners").then((res) => {
      if (res.ok) {
            return res.json();

      } else {
        throw new Error("Something went wrong !");
      }
    })
  };

  function FetchCategories() {
     return fetch("http://localhost:5000/categories").then((res) => {
      if (res.ok) {
            return res.json();

      } else {
        throw new Error("Something went wrong !");
      }
    })
  };

  async function DisplayBanners() {
    let allBanners = await FetchBanners();
    for (const banner of allBanners) {
      BannercardItem(banner);
    }
    addBannerButtons(allBanners.length);
    addButtonFunctionality();
    DisplayCategories();
  }


  async function DisplayCategories() {
    let allCategories = await FetchCategories();
    for (const cat of allCategories) {
      CategoryCardItem(cat);
    }
  }

window.addEventListener("DOMContentLoaded", DisplayBanners);

function BannercardItem(banner){
    let bannerItem = document.createElement("div");
    bannerItem.setAttribute("class","carousel__item");
    bannerItem.setAttribute("id",`..${banner.id}`);
    bannerItem.setAttribute("order",`..${banner.order}`);
    bannerItem.setAttribute("isActive",`..${banner.isActive}`);

    let bannerImage=document.createElement("img");
    bannerImage.setAttribute("alt",`..${banner.bannerImageAlt}`);
    bannerImage.setAttribute("src",`..${banner.bannerImageUrl}`);

    bannerItem.appendChild(bannerImage);

    document.querySelector(".carousel-container").appendChild(bannerItem);

}

function addBannerButtons(len){
    let carouselButtonContainer = document.createElement("div");
    carouselButtonContainer.setAttribute("class","carousel__nav");
    document.querySelector(".carousel-container").appendChild(carouselButtonContainer)

    for(i=0;i<len;i++){
        let bannerNavButton= document.createElement("span");
        bannerNavButton.setAttribute("class","carousel__button");
        document.querySelector(".carousel__nav").appendChild(bannerNavButton);
    }


}

function addButtonFunctionality(){
    document.querySelectorAll(".carousel-container").forEach((carousel) => {
        const items = document.querySelectorAll(".carousel__item");
        const buttons = carousel.querySelectorAll(".carousel__button");

        buttons.forEach((button, i) => {
          button.addEventListener("click", () => {

            items.forEach((item) =>{

                item.classList.remove("carousel__item--selected")
            }

            );
            buttons.forEach((button) =>
              button.classList.remove("carousel__button--selected")
            );

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
          });
        });
        console.log()
        items[0].classList.add("carousel__item--selected");
        buttons[0].classList.add("carousel__button--selected");
      });

}

function CategoryCardItem(cat){
    if(cat.enabled){
          let catItem = document.createElement("div");
          catItem.setAttribute("class","category-item");

          let catOne=document.createElement("div");
          catOne.setAttribute("class","cat-one");

          let catTwo=document.createElement("div");
          catTwo.setAttribute("class","cat-two");

          let catImage=document.createElement("img");
          catImage.setAttribute("alt",`${cat.key}`);
          catImage.setAttribute("src",`..${cat.imageUrl}`);


          let catButton = document.createElement("Button");
          let catLink = document.createElement("a");
          catLink.setAttribute("href","./Products.html");
          catButton.appendChild(catLink);
          catLink.innerHTML= `Explore ${cat.key}`;
          catButton.setAttribute("href","Products.html");

          let catDescription = document.createElement("div");
          catDescription.innerHTML= `${cat.description}`;

          let catHeader = document.createElement("h3");
          catHeader.textContent= `${cat.name}`;

          catItem.appendChild(catOne);
          catItem.appendChild(catTwo);
          catOne.appendChild(catImage);
          catTwo.appendChild(catHeader);
          catTwo.appendChild(catDescription);
          catTwo.appendChild(catButton);

          document.querySelector(".Home-container").appendChild(catItem);
    }

}
