/* Categories fetch call and handler */
function populateCategories(response) {
    let categories = sortArray(response, "order");
    categories.forEach((category, index) => {
        if(category.enabled){
            document.getElementById("categories").appendChild(createCategoryDivElement(category, index % 2 !== 0)); 
        }
    });
}

function fetchCategories() {
    fetch("http://localhost:5000/categories").then(res => res.json()).then(response => {
        populateCategories(response);
    });
}

/* Carousel fetch call and handler*/
function populateBanner(response) {
    response.forEach((banner, index) => {
        if(banner.isActive){
            document.getElementById("carouselBanner").appendChild(createBannerLiElement(banner, index === 0)); 
        }
    });
}

function fetchBanners() {
    fetch("http://localhost:5000/banners").then(res => res.json()).then(response => {
        populateBanner(response);
    });
}

fetchBanners();
fetchCategories();