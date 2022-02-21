<template>
  <section id="categoryContainer">
    <div id="bannerContainer" class="container">
      <div class="row">
        <div class="categoryCol col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12">
          <div
            id="carouselExampleIndicators"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                v-for="(item, index) in banners"
                :key="index"
                type="button"
                :data-bs-target="'#carouselExampleIndicators'"
                :data-bs-slide-to="index"
                :class="index == 0 ? 'active' : ''"
                :aria-current="index == 0 ? true : false"
                :aria-label="'Slide' + index"
              ></button>
            </div>
            <div class="carousel-inner">
              <div
                class="carousel-item"
                :class="index == 0 ? 'active' : ''"
                v-for="(item, index) in banners"
                :key="index"
              >
                <img
                  :src="require('@/assets' + item.bannerImageUrl)"
                  class="d-block w-100"
                  :alt="item.bannerImageAlt"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div
          v-for="(category, index) in categories"
          :key="index"
          :id="'category' + index"
          class="categoryCol col-lg-12 col-md-12 col-xl-12 col-sm-12 col-12"
        >
          <div class="categoryListing row">
            <div id=""></div>
            <div id=""></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Categories",
  props: ["banners", "categories"],
  mounted() {
    this.categories.forEach((val, ind) => {
      if (val.imageUrl) {
        let categoryContainer = document.querySelector("#category" + ind);
        let img = document.createElement("img");

        img.src = require("@/assets" + val.imageUrl);
        // img.style.height = "200px";
        // img.style.width = "300px";
        img.style.padding = "10px";
        img.classList.add("imageSizing");
        img.alt = val.bannerImageAlt;

        let p = document.createElement("p");
        let p1 = document.createElement("p");

        p.innerText = val.name;
        p.style.fontWeight = "600";

        p1.innerText = val.description;
        p1.style.fontSize = "12px";

        if (ind % 2 == 0) {
          categoryContainer.firstElementChild.firstChild.classList.add(
            "col-lg-6",
            "col-xl-6",
            "col-md-6",
            "col-sm-4",
            "col-4"
          );
          categoryContainer.firstElementChild.lastChild.classList.add(
            "col-lg-6",
            "col-xl-6",
            "col-md-6",
            "col-sm-8",
            "col-8"
          );
          categoryContainer.firstElementChild.firstChild.append(img);

          let info = document.createElement("div");
          let btn = document.createElement("button");
          btn.value = "Explore " + val.key;
          btn.innerText = "Explore " + val.key;
          btn.classList.add("btnStyle");
          info.classList.add("infoPadding");
          categoryContainer.firstElementChild.lastChild.append(info);
          info.append(p);
          info.append(p1);
          info.append(btn);
        } else {
          categoryContainer.firstElementChild.lastChild.classList.add(
            "col-lg-6",
            "col-xl-6",
            "col-md-6",
            "col-sm-4",
            "col-4"
          );
          categoryContainer.firstElementChild.firstChild.classList.add(
            "col-lg-6",
            "col-xl-6",
            "col-md-6",
            "col-sm-8",
            "col-8"
          );
          categoryContainer.firstElementChild.lastChild.append(img);
          let info = document.createElement("div");
          let btn = document.createElement("button");
          btn.value = "Explore " + val.key;
          btn.innerText = "Explore " + val.key;
          btn.classList.add("btnStyle");
          info.classList.add("infoPadding");
          categoryContainer.firstElementChild.firstChild.append(info);
          info.append(p);
          info.append(p1);
          info.append(btn);
        }
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.row > .categoryCol {
  box-shadow: 0 6px 7px -4px rgb(0 0 0 / 40%);
  margin-bottom: 10px;
}
</style>
