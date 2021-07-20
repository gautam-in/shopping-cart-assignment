const handlebars = require("handlebars");
const productListTemplate = {
  registerHelpers() {
    handlebars.registerHelper("noProductFound", function (products, options) {
      if (products.length > 0) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });
    handlebars.registerHelper("categoryHeader", function (categories, options) {
      const selectedCategory = categories.find(
        (elem) => (elem.selected = true)
      );
      return selectedCategory ? selectedCategory.name : "Select Category";
    });
  },
  generateMarkup(state) {
    ///Generate Markup for list of products
    const productMarkup = this._getProductListMarkup(
      state.products.productList
    );
    /// Mar the selected category with attribute selected and highlight it while rendering
    const filterValue = state.products.filterValue;
    const categories = state.categories.map((category) =>
      category.id == filterValue
        ? { ...category, selected: true }
        : { ...category, selected: false }
    );
    const categoryMarkup = this._getCategorySideBarMarkup(categories);
    return `<div class="product-catalouge">${categoryMarkup}${productMarkup}</div>`;
  },
  _getProductListMarkup(data) {
    this.registerHelpers();
    const template = handlebars.compile(`
    
        <section class="product-list">
        {{#noProductFound products}}
            <h2 class=" product-list-not-found heading-2">No Products Found on the selected category</h2>
            {{else}}
                {{#each products}}
                <div class="product__details">
                    <h4 class="heading-4 product__details--title" aria-label="{{this.name}}">{{this.name}}</h2>
                    <div class="product__details--image"><img src="{{this.imageURL}}" alt="{{this.name}}"></div>
                    <div class="product__details--desc description-1">{{this.description}}</div>
                    <div class="product__details--price description-1">MRP Rs{{this.price}}</div>
                    <div class="product__details--buy description-1" ><button class="button-1 buy-now" data-product-id={{this.id}}>Buy Now<span class="product__details--inline-price">@{{this.price}}</span></button></div>
                </div>
                {{/each}}
        {{/noProductFound}}
        </section>
    `);
    return template({ products: data });
  },
  _getCategorySideBarMarkup(data) {
    this.registerHelpers();
    const template = handlebars.compile(`
    <nav class="sidebar" >
    <div class="sidebar__toggle-btn button-3 collapse" >Select the Category</div>
        <ul class="catalouge__filter">
       
        {{#each categories}}
            <li role="button" tab-index="0" arial-label ="{{this.name}}" class="catalouge__filter--item {{#if this.selected}} selected {{/if}}" data-filter-id="#products?cat={{this.id}}">
              <!--  <p class="heading-4"><a href="#products?cat={{this.id}}">{{this.name}}</a></p>  -->
               {{this.name}}
            </li>
        {{/each}}
        </ul>
        </nav>`);

    return template({
      categories: data,
    });
  },
};

module.exports = productListTemplate;
