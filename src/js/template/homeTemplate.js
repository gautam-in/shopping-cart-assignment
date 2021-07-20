const handlebars = require("handlebars");

const homeTemplate = {
  registerHelpers() {
    //Place Holder for Handlebar Helpers
  },

  generateMarkup(state) {
    this.registerHelpers();
    const markup =
      this._generateOffersMarkup(state.offers) +
      this._generateCategoryMarkup(state.categories);
    return `<div class="category">${markup}</div>`;
  },
  _generateOffersMarkup(offers) {
    const template = handlebars.compile(`<div class="category__offers carousel">
        <div class="glide">
          <!-- Slides here -->
          <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                  {{#each offers}}
                    <li class="glide__slide category__offers--banner">
                        <img src="{{this.bannerImageUrl}}" alt="{{this.bannerImageAlt}}" />
                    </li>
                    {{/each}}
              </ul>
          </div>
          <div class="glide__arrows" data-glide-el="controls">
            <button
              class="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              prev
            </button>
            <button
              class="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              next
            </button>
          </div>
          <!-- Pagination -->
          <div class="glide__bullets" aria-hidden="true" data-glide-el="controls[nav]">
           {{#each offers}}
            <button class="glide__bullet" tab-index="-1" data-glide-dir="={{@index}}"></button>
          <!--  <button class="glide__bullet" tab-index="-1" data-glide-dir="=1"></button>
            <button class="glide__bullet" tab-index="-1" data-glide-dir="=2"></button>
            <button class="glide__bullet" tab-index="-1" data-glide-dir="=3"></button>
            <button class="glide__bullet" tab-index="-1" data-glide-dir="=4"></button> -->
            {{/each}}
          </div>
        </div>
      </div>`);
    return template({ offers });
  },
  _generateCategoryMarkup(categories) {
    const template = handlebars.compile(`
  {{#each categories}}
  {{#if this.imageUrl }}
    <div class="category__item">
      <div class="category__item__details">
        <div class="category__item__details--image">
          <img src={{this.imageUrl}} alt="{{this.name}}" />
        </div>

        <div class="category__item__details--info">
          <h3 class="heading-3 category-title">{{this.name}}</h3>
          <div class="description-1 category-descr">
            {{this.description}}
          </div>
            <a href="#products?cat={{this.id}}"> <button aria-label="Explore {{this.key}}" class="button-1 category-action">Explore {{this.key}}</button></a>
        </div>
      </div> 
    </div> {{/if}}{{/each}}`);
    return template({ categories });
  },
};

module.exports = homeTemplate;
