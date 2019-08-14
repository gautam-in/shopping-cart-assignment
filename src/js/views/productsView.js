import {
  elements
} from './base';

export const renderProducts = () => {
  const markup = `
  <div id="main-block">
    <section class="products">
      <div class="products-menu">
        <ul>
          <li><a href="#">Fruits & Vegetables</a></li>
          <li><a href="#">Bakery Cake & Dairy</a></li>
          <li><a href="#">Beverages</a></li>
          <li><a href="#">Beauty & Hygine</a></li>
          <li><a href="#">Body Care</a></li>
        </ul>
      </div>
      <div class=" products-listing">
        <div class="product">
          <h3>Fresho Kiwi - Green, 3 pcs</h3>
          <div class="country"><img src="assets/images/countries/chile.jpg"></div>
          <img src="assets/images/products/01.jpg"></img>
          <div class="ribbon">
            <span>Regular</span>
          </div>
          <div class="product-info">
            3 pc (270g-300g)
          </div>
          <div class="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum mollis arcu ut pretium. Quisque sed consequat neque.
            </p>
          </div>
          <div class="purchase">
            <span class="price">MRP <i class="fas fa-rupee-sign"></i> 80</span>
            <button>Buy Now</button>
          </div>
        </div>
        <div class="product">
          <h3>Fresho Kiwi - Green, 3 pcs</h3>
          <div class="country"><img src="assets/images/countries/chile.jpg"></div>
          <img src="assets/images/products/01.jpg"></img>
          <div class="ribbon">
            <span>Regular</span>
          </div>
          <div class="product-info">
            3 pc (270g-300g)
          </div>
          <div class="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum mollis arcu ut pretium. Quisque sed consequat neque.
            </p>
          </div>
          <div class="purchase">
            <span class="price">MRP <i class="fas fa-rupee-sign"></i> 80</span>
            <button>Buy Now</button>
          </div>
        </div>
        <div class="product">
          <h3>Fresho Kiwi - Green, 3 pcs</h3>
          <div class="country"><img src="assets/images/countries/chile.jpg"></div>
          <img src="assets/images/products/01.jpg"></img>
          <div class="ribbon">
            <span>Regular</span>
          </div>
          <div class="product-info">
            3 pc (270g-300g)
          </div>
          <div class="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum mollis arcu ut pretium. Quisque sed consequat neque.
            </p>
          </div>
          <div class="purchase">
            <span class="price">MRP <i class="fas fa-rupee-sign"></i> 80</span>
            <button>Buy Now</button>
          </div>
        </div>
        <div class="product">
          <h3>Fresho Kiwi - Green, 3 pcs</h3>
          <div class="country"><img src="assets/images/countries/chile.jpg"></div>
          <img src="assets/images/products/01.jpg"></img>
          <div class="ribbon">
            <span>Regular</span>
          </div>
          <div class="product-info">
            3 pc (270g-300g)
          </div>
          <div class="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum mollis arcu ut pretium. Quisque sed consequat neque.
            </p>
          </div>
          <div class="purchase">
            <span class="price">MRP <i class="fas fa-rupee-sign"></i> 80</span>
            <button>Buy Now</button>
          </div>
        </div>
        <div class="product">
          <h3>Fresho Kiwi - Green, 3 pcs</h3>
          <div class="country"><img src="assets/images/countries/chile.jpg"></div>
          <img src="assets/images/products/01.jpg"></img>
          <div class="ribbon">
            <span>Regular</span>
          </div>
          <div class="product-info">
            3 pc (270g-300g)
          </div>
          <div class="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum mollis arcu ut pretium. Quisque sed consequat neque.
            </p>
          </div>
          <div class="purchase">
            <span class="price">MRP <i class="fas fa-rupee-sign"></i> 80</span>
            <button>Buy Now</button>
          </div>
        </div>

      </div>
    </section>
  </div>
    `;
  elements.mainBlock.innerHTML = markup;
};
