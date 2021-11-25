import { HomeService } from "../services/homeService.js";

export class Categories {
    constructor() {
        this.homeService = new HomeService();
    }

    showCategories() {
        let categoriesList = document.getElementsByClassName('sb-categories-list')[0];
        this.homeService.getAllCategories()
            .then(categories => {
                if (!categories || categories.length === 0) {
                    categoriesList.innerHTML = "No categories found!";
                    return;
                }
                categories = categories.sort((a, b) => {
                    return a.order - b.order;
                });

                for (let index = 0; index < categories.length; index++) {
                    const category = categories[index];

                    if (category.enabled) {
                        const categoryElement = document.createElement("div");
                        categoryElement.classList.add("sb-category");
                        const bottomShadow = document.createElement('div');
                        bottomShadow.classList.add("shadow");
                        bottomShadow.classList.add("category-shadow");
                        const categoryContent = `
                        <div class="product-img">
                            <img src="${category.imageUrl}" alt="${category.name}" class="categories-image">
                        </div>
                        <div class="product-info">
                            <header>
                                <h1>${category.name}</h1>
                            </header>
                            <p class="product-desc">${category.description}</p>
                            <button type="button" class="category-btn sb-btn">Explore ${category.name}</button>
                        </div>
                    `;
                        categoryElement.innerHTML = categoryContent;
                        categoryElement.appendChild(bottomShadow);
                        categoriesList.appendChild(categoryElement);

                        const btn = categoryElement.getElementsByClassName("category-btn")[0];
                        btn.addEventListener('click', event => {
                            let url = new URL(window.location.href);
                            url.pathname = "src/products/products.html";
                            let queryParams = new URLSearchParams();
                            queryParams.set("category", category.id);
                            url.search = queryParams;
                            window.location.href = url.href;
                        })
                    }

                }

            })
            .catch(error => {
                categoriesList.innerHTML = "Please try again later!";
            });
    }
}

const categories = new Categories();
categories.showCategories();