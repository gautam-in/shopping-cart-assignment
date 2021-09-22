const getHeader = () => `<my-header on-click="clickHandler()"></my-header>`

const categoryCard = () => `<category-card image-left="true" category-image="fruits" category-name="Fruits & Vegetables"
                                        on-click="clickHandler()" category-detail="A variety of fresh fruits and vegetables"
                                        button-label="Explore fruit-and-veg">   
                            </category-card>`

const getFooter = () => `<my-footer/>`

const getPlpLayout = () => `<plp-page/>`

var products = [];
let categoriesData = [];

function clickHandler() {
    var main = document.querySelector(".home-main-container");
    var carouselNode = document.querySelector('.carousel-wrapper');
    window.history.pushState({ page: 'plp' }, 'plp', 'plppage');
    let html = products.map(product =>
        `<div style="margin:10px">
            <plp-page prodName="${product.name}" description="${product.description}" image="${product.imageURL}" price="${product.price}"/>
        </div>`
    ).join('');
    var carousalBackup = carouselNode.innerHTML;
    carouselNode.innerHTML = null;
    main.innerHTML = `
    <style>
    .product-container{
        display:flex;
        flex-wrap:wrap;
        padding-left: 5vw;
    }
    </style>

    <div class="product-container">${html}</div>
 `;

    window.addEventListener("popstate", function (e) {
        if (!e.state) {
            carouselNode.innerHTML = carousalBackup;
           main.innerHTML = categoriesData.map((category,index) =>
            `<category-card image-left="${index%2 == 0 ? 'true' : 'false'}" category-image="${category.imageUrl}" category-name="${category.name}"
                on-click="clickHandler()" category-detail="${category.description}" button-label="${category.key}">   
            </category-card>`
        ).join('');
        } else if (e.state && e.state.page === 'plp') {
            carouselNode.innerHTML = null;
            let html = products.map(product =>
                `<div style="margin:10px">
                    <plp-page prodName="${product.name}" description="${product.description}" image="${product.imageURL}" price="${product.price}"/>
                </div>`
            ).join('');

            main.innerHTML = `
            <style>
            .product-container{
                display:flex;
                flex-wrap:wrap;
                padding-left: 5vw;
            }
            </style>
        
            <div class="product-container">${html}</div>
         `;

        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    var header = document.querySelector("header");
    var main = document.querySelector(".home-main-container");
    var footer = document.querySelector("footer");
    header.innerHTML = getHeader();
    footer.innerHTML = getFooter();

    // Fetch products

    fetch("/server/products/index.get.json", {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            return response.json();
        })
        .then(result => {
            products = [...result];
        });

    // Fetch banners

    fetch("/server/categories/index.get.json", {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            return response.json();
        })
        .then(categories => {
            const catogs = categories.filter(item => item.imageUrl);
            categoriesData = [...catogs];
            var categ = document.querySelector(".home-main-container");
            let html = catogs.map((category,index) =>
                `<category-card image-left="${index%2 == 0 ? 'true' : 'false'}" category-image="${category.imageUrl}" category-name="${category.name}"
                    on-click="clickHandler()" category-detail="${category.description}" button-label="${category.key}">   
                </category-card>`
            ).join('');
            categ.innerHTML = html;
        })  
})
