import { Header } from '../header/header.js';
import { HomeService } from '../services/homeService.js';
import { ProductsService } from '../services/productsService.js';
import { SBLocalStorage } from '../services/sbLocalStorage.js';

export class Products {
    constructor() {
        this.productsService = new ProductsService()
        this.homeService = new HomeService();
        this.header = new Header();
        this.sbLocalStorage = new SBLocalStorage();
    }

    showCategories() {
        this.homeService.getAllCategories()
            .then(categories => {
                categories = categories.sort((a, b) => {
                    return a.order - b.order;
                });
                const productsSidenav = document.getElementsByClassName('products-sidenav-list')[0];
                productsSidenav?.addEventListener('click', event => {
                    event.stopPropagation();

                    let queryParams = new URLSearchParams(document.location.search);
                    if (event.target.dataset.categoryId) {
                        queryParams.set("category", event.target.dataset.categoryId);
                    } else {
                        queryParams.delete("category");
                    }

                    document.location.search = queryParams;
                });

                let queryParams = new URLSearchParams(document.location.search);
                if (!queryParams.get("category")) {
                    let defaultCategory = productsSidenav?.firstElementChild;
                    defaultCategory?.classList.add("active");
                }

                for (let index = 0; index < categories.length; index++) {
                    const category = categories[index];

                    if (category.enabled) {
                        const categoryItem = document.createElement("li");
                        categoryItem.classList.add("products-sidenav-item");
                        if (queryParams.get("category") === category.id) {
                            categoryItem.classList.add("active");
                            this.updateToggleBtnText(category.name);
                        }
                        categoryItem.dataset.categoryId = category.id;
                        const categoryLink = `
                        <a href="#" class="products-sidenav-link">${category.name}</a>
                    `;
                        categoryItem.innerHTML = category.name;
                        productsSidenav?.appendChild(categoryItem);
                    }

                }

            })
            .catch(error => {
                console.log(error);
            });
    }

    showProducts(categoryId) {
        let cardGrid = document.getElementsByClassName("card-grid")[0];
        this.productsService.getProducts()
            .then(productsList => {
                if (!productsList || productsList.length === 0) {
                    cardGrid.innerHTML = "No products found!";
                    return;
                }

                if (categoryId) {
                    productsList = productsList.filter(product => product.category === categoryId);
                }
                for (let index = 0; index < productsList.length; index++) {
                    const product = productsList[index];

                    let productElement = document.createElement("article");
                    productElement.classList.add("card");
                    let productContent = `
                    <header class="card-header">
                        <h2>${product.name}</h2>                        
                    </header>
                    <img src="${product.imageURL}" alt="${product.name}"
                            class="card-image">
                    <div class="card-body">
                        <p class="card-description">
                            ${product.description}
                        </p>
                    </div>
                    <footer class="card-footer card-footer-lg">
                        <div class="price">MRP Rs.${product.price}</div>
                        <button type="button" class="product-btn sb-btn">Buy Now</button>
                    </footer>
                    <footer class="card-footer card-footer-sm card-footer-md">
                        <button type="button" class="sb-btn product-btn">Buy Now @ Rs.${product.price}</button>
                    </footer>
                `;

                    productElement.innerHTML = productContent;
                    cardGrid?.append(productElement);
                    const buyBtns = productElement.getElementsByClassName("product-btn");
                    Array.from(buyBtns).forEach(buyBtn => {
                        buyBtn?.addEventListener('click', () => this.addProductToCart(product));
                    });

                }
            })
            .catch(error => {
                if (cardGrid)
                    cardGrid.innerHTML = "Please try again later!";
            });
    }

    updateToggleBtnText(categoryName) {
        let btn = document.querySelector(".category-toggle-btn span");
        if (btn) {
            btn.innerHTML = categoryName;
        }
    }

    toggleSideNav(event, isRemove) {
        let sideNav = document.getElementsByClassName('sb-products-sidenav')[0];
        sideNav?.classList.toggle('open');

        if (isRemove) {
            sideNav?.classList.remove('open');
        }
        if (event) {
            event.stopPropagation();
        }
    }

    addProductToCart(product) {

        const user = this.sbLocalStorage.getItem("user");
        if (user !== "true") {
            alert("Please login to add items to your cart!");
            return;
        }

        let cartItems = this.sbLocalStorage.getItem("cartItems");
        cartItems = cartItems ?? [];
        for (let index = 0; index < cartItems.length; index++) {
            if(cartItems[index].id === product.id) {
                alert("The product " + product.name + " is aleady added to cart");
                return;
            }            
        }
        cartItems.push(product);
        this.sbLocalStorage.setItem("cartItems", cartItems);
        this.header.updateCartItemsCount();
        alert(product.name + " is successfully added to cart");
    }
}

const prod = new Products();
prod.showCategories();
let queryParams = new URLSearchParams(document.location.search);
prod.showProducts(queryParams.get("category"));

let toggleBtn = document.getElementsByClassName("category-toggle-btn")[0];
toggleBtn?.addEventListener('click', prod.toggleSideNav);