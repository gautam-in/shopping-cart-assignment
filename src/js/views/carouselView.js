import {
  elements
} from './base';

import {
  servicesData
} from '../models/Services';

export const renderCarousel = (render) => {
  // console.log(servicesData.banners);
  let markup = `
  <section>
    <div class="container">
      <div class="carousel">
      %%carousel-radio%%
        <ul class="carousel__items">
        %%carousel-image%%
        </ul>
        <div class="carousel__nav">
        %%carousel-nav%%
        </div>
      </div>
    </div>
  </section>
    `;
    // const markupBackup = `
    // <section>
    //   <div class="container">
    //     <div class="carousel">
    //       <input type="radio" id="carousel-1" name="carousel[]" checked>
    //       <input type="radio" id="carousel-2" name="carousel[]">
    //       <input type="radio" id="carousel-3" name="carousel[]">
    //       <ul class="carousel__items">
    //         <li class="carousel__item"><img class="img-shadow" src="assets/images/slides/01.png" alt=""></li>
    //         <li class="carousel__item"><img class="img-shadow" src="assets/images/slides/02.png" alt=""></li>
    //         <li class="carousel__item"><img class="img-shadow" src="assets/images/slides/03.png" alt=""></li>
    //       </ul>
    //       <div class="carousel__nav">
    //         <label for="carousel-1"></label>
    //         <label for="carousel-2"></label>
    //         <label for="carousel-3"></label>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    //   `;

    if (render && servicesData.banners) {
      let carouselRadio = "";
      let carouselImage = "";
      let carouselNav = "";

        for (var i = 0; i < servicesData.banners.length; i++) {
          if (i != 0){
            carouselRadio = carouselRadio + `<input type="radio" id="carousel-` + (i + 1) + `" name="carousel[]">`;
            carouselImage = carouselImage + `<li class="carousel__item"><img class="img-shadow" src="` + servicesData.banners[i].bannerImageUrl + `" alt="` + servicesData.banners[i].bannerImageAlt + `"></li>`;
            carouselNav = carouselNav + `<label for="carousel-` + (i + 1) + `"></label>`;

          }else {
            carouselRadio = carouselRadio + `<input type="radio" id="carousel-` + (i + 1) + `" name="carousel[]" checked>`;
            carouselImage = carouselImage + `<li class="carousel__item"><img class="img-shadow" src="` + servicesData.banners[i].bannerImageUrl + `" alt="` + servicesData.banners[i].bannerImageAlt + `"></li>`;
            carouselNav = carouselNav + `<label for="carousel-` + (i + 1) + `"></label>`;
          }

          // console.log(carouselRadio);

        }
        markup = markup.replace('%%carousel-radio%%', carouselRadio);
        markup = markup.replace('%%carousel-image%%', carouselImage);
        markup = markup.replace('%%carousel-nav%%', carouselNav);
        elements.landingPage.carouselContent.innerHTML = markup;
    } else {

      elements.landingPage.carouselContent.innerHTML = "";

    }

};
