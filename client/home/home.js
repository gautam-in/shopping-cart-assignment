/* Event Listeners */
document.getElementsByClassName("carousel-list-nav-prev")[0].addEventListener("click", function() {
    let currentCarousel = document.getElementsByClassName("carousel-list-item show")[0];
    let prevCarousel = currentCarousel.previousElementSibling;
    if(prevCarousel){
        currentCarousel.setAttribute("class","carousel-list-item hide");
        prevCarousel.setAttribute("class","carousel-list-item show");
    }
});

document.getElementsByClassName("carousel-list-nav-next")[0].addEventListener("click", function() {
    let currentCarousel = document.getElementsByClassName("carousel-list-item show")[0];
    let nextCarousel = currentCarousel.nextElementSibling;
    if(nextCarousel){
        currentCarousel.setAttribute("class","carousel-list-item hide");
        nextCarousel.setAttribute("class","carousel-list-item show");
    }
});

/* button navigation handler to products page */
function onClickButtonHandler(e){
    localStorage.setItem("activeCategory",e.currentTarget.getAttribute("data-id"));
    window.location.replace("../product/Product.html");
}


/* Dom Manipulations */
function createBannerLiElement(banner, showElement){
    // <li class="carousel-list-item">
    //     <img src="../../static/images/offers/offer1.jpg" alt="Src"/>
    // </li>
    let bannerLiEle = createDomEle("li", {
        class: showElement ? "carousel-list-item show" : "carousel-list-item hide"
    });
        let bannerImg = createDomEle("img", {
            src: banner.bannerImageUrl,
            alt: banner.bannerImageAlt
        });    
    bannerLiEle.appendChild(bannerImg);
    return bannerLiEle;
}

function createCategoryDivElement(category, imageFirst){
    // <div class="category d-flex justify-space-evenly align-items-center m-t10 xs-shrink">
    //     <div class="category-desc text-align-center">
    //         <h2>Baby Care</h1>
    //         <h3>Get access to your Orders, Wishlist and Recommendations</h2>                    
    //         <button class="category-explore-button">Explore Fruits</button>
    //     </div>
    //     <div class="category-image text-align-right">
    //         <img src="../../static/images/category/fruits.png" alt="Src" class="xs-shrink"/>
    //     </div>
    // </div>
    let categoryEl = createDomEle("div", {
        class: "category d-flex justify-space-evenly align-items-center m-t10 xs-shrink"
    });
        let categoryDescEl = createDomEle("div", {
            class: "category-desc text-align-center"
        });
            let categoryDesch2El = createDomEle("h2");
                categoryDesch2El.innerText = category.name;
            let categoryDesch3El = createDomEle("h3");
                categoryDesch3El.innerText = category.description;
            let categoryDescbuttonEl = createDomEle("button",{
                class: "category-explore-button",
                'data-id': category.id
            });
                categoryDescbuttonEl.innerText = "Explore " + category.name;
                categoryDescbuttonEl.addEventListener("click", onClickButtonHandler);
        categoryDescEl.appendChild(categoryDesch2El);
        categoryDescEl.appendChild(categoryDesch3El);
        categoryDescEl.appendChild(categoryDescbuttonEl);
    
        let categoryImgEl = createDomEle("div", {
            class: imageFirst ? "category-image text-align-left" : "category-image text-align-right"
        });
        let bannerImg = createDomEle("img", {
            class:"xs-shrink",
            src: category.imageUrl,
            alt: category.name + " image"
        });    
        categoryImgEl.appendChild(bannerImg);
    if(imageFirst){
        categoryEl.appendChild(categoryImgEl);
        categoryEl.appendChild(categoryDescEl);
    } else {
        categoryEl.appendChild(categoryDescEl);
        categoryEl.appendChild(categoryImgEl);
    }
    
    return categoryEl;
}