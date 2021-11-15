import { HomeService } from '../services/homeService.js';
import { ProductsService } from '../services/productsService.js';

class Products {
    constructor() {
        this.productsService = new ProductsService()
        this.homeService = new HomeService();
    }

    showCategories() {
        this.homeService.getAllCategories()
        .then(categories => {
            categories = categories.sort((a, b) => {
                return a.order - b.order;
            });
            const productsSidenav = document.getElementsByClassName('products-sidenav-list')[0];
            productsSidenav.addEventListener('click', event => {
                event.stopPropagation();

                let queryParams = new URLSearchParams(document.location.search);
                queryParams.set("category", event.target.dataset.categoryId);
                document.location.search = queryParams;
            });

            let queryParams = new URLSearchParams(document.location.search);

            for (let index = 0; index < categories.length; index++) {
                const category = categories[index];

                if (category.enabled) {                    
                    const categoryItem = document.createElement("li");
                    categoryItem.classList.add("products-sidenav-item");
                    if (queryParams.get("category") === category.id) {
                        categoryItem.classList.add("active");                        
                    }
                    categoryItem.dataset.categoryId = category.id;
                    const categoryLink = `
                        <a href="#" class="products-sidenav-link">${category.name}</a>
                    `;
                    categoryItem.innerHTML = category.name;
                    productsSidenav.appendChild(categoryItem);
                }
                
            }

        });
    }

    showProducts(categoryId) {
        this.productsService.getProducts()
        .then(productsList => {
            if (categoryId) {
                productsList = productsList.filter(product => product.category === categoryId);
            }
            let cardGrid = document.getElementsByClassName("card-grid")[0];
            for (let index = 0; index < productsList.length; index++) {
                const product = productsList[index];
                
                let productElement = document.createElement("article");
                productElement.classList.add("card");
                let productContent = `
                    <header class="card-header">
                        <h2>${product.name}</h2>
                        <img src="${product.imageURL}" alt="${product.name}"
                            class="card-image">
                    </header>
                    <div class="card-body">
                        <p class="card-description">
                            ${product.description}
                        </p>
                    </div>
                    <footer class="card-footer card-footer-lg">
                        <div class="price">MRP Rs.${product.price}</div>
                        <button type="button" class="product-btn">Buy Now</button>
                    </footer>
                    <footer class="card-footer card-footer-sm card-footer-md">
                        <button type="button" class="product-btn">Buy Now @ Rs.${product.price}</button>
                    </footer>
                `;

                productElement.innerHTML = productContent;
                cardGrid.append(productElement);
            }
        });
    }
}

const prod = new Products();
prod.showCategories();
let queryParams = new URLSearchParams(document.location.search);
prod.showProducts(queryParams.get("category"));