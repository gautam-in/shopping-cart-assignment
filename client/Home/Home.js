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

/*navigation handler to products page */
function onClickButtonHandler(e){
    localStorage.setItem("activeCategory",e.currentTarget.getAttribute("data-id"));
    window.location.assign("../Product/Product.html");
}


/* For Dom Manipulations */
function createBannerLiElement(banner, showElement){
    let bannerLiEle = createDomElement("li", {
        class: showElement ? "carousel-list-item show" : "carousel-list-item hide"
    });
        let bannerImg = createDomElement("img", {
            src: banner.bannerImageUrl,
            alt: banner.bannerImageAlt
        });    
    bannerLiEle.appendChild(bannerImg);
    return bannerLiEle;
}

function createCategoryDivElement(category, imageFirst){
    let categoryEl = createDomElement("div", {
        class: "category d-flex justify-space-evenly align-items-center m-t10 xs-shrink"
    });
        let categoryDescEl = createDomElement("div", {
            class: "category-desc text-align-center"
        });
            let categoryDesch2El = createDomElement("h2");
                categoryDesch2El.innerText = category.name;
            let categoryDesch3El = createDomElement("h3");
                categoryDesch3El.innerText = category.description;
            let categoryDescbuttonEl = createDomElement("button",{
                class: "category-explore-button",
                'data-id': category.id
            });
                categoryDescbuttonEl.innerText = "Explore " + category.name;
                categoryDescbuttonEl.addEventListener("click", onClickButtonHandler);
        categoryDescEl.appendChild(categoryDesch2El);
        categoryDescEl.appendChild(categoryDesch3El);
        categoryDescEl.appendChild(categoryDescbuttonEl);
    
        let categoryImgEl = createDomElement("div", {
            class: imageFirst ? "category-image text-align-left" : "category-image text-align-right"
        });
        let bannerImg = createDomElement("img", {
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