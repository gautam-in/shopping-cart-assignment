
function displayCarousel() {
    let bannerPromise = fetchData(PATHS.BANNERS);
    bannerPromise.then((banners) => {
        for (const [index, banner] of banners.entries()) {
            bannerItem(index, banner);
        }
    }).then(function(){
        initializeCarousel();
    });
}
function bannerItem(index, item) {
    let bannerItem = document.createElement("li");
    bannerItem.setAttribute("class", "productCarousel__container__item");
    bannerItem.setAttribute("data-position", `${index +1}`);

    let bannerImg = document.createElement("img");
    bannerImg.setAttribute("src", item.bannerImageUrl);
    bannerImg.setAttribute("alt", item.bannerImageAlt);
    bannerImg.setAttribute("height", "175px");

    bannerItem.append(bannerImg);
    document.querySelector(".productCarousel__container").append(bannerItem);
    
    let bannerIndicator = document.createElement("li");
    bannerIndicator.setAttribute("class", "productCarousel__indicator__dots");
    bannerIndicator.setAttribute("data-position", `${index +1}`);

    let indicatorDots = document.createElement("span");
    bannerIndicator.append(indicatorDots);
    document.querySelector(".productCarousel__indicator").append(bannerIndicator);
}
function categoryItem(item){
    let catItem = document.createElement("div");
    catItem.setAttribute("class", "categotyItem");

    let catImgContainer = document.createElement("div");
    catImgContainer.setAttribute("class", "categotyItem__img");

    let catImg = document.createElement("img");
    catImg.setAttribute("src", item.imageUrl);
    catImg.setAttribute("alt", item.name);
    catImg.setAttribute("height", "200px");

    catImgContainer.append(catImg);

    let catItemInfoDiv = document.createElement("div");
    catItemInfoDiv.setAttribute("class", "categotyItem__info");
    
    // title
    let courseTitle = document.createElement("h2");
    courseTitle.setAttribute("class", "categotyItem__desc__name");
    courseTitle.innerHTML = item.name;
    catItemInfoDiv.append(courseTitle);

    // descriptioon
    let courseDesc = document.createElement("p");
    courseDesc.setAttribute("class", "categotyItem__desc__Oinfo");
    courseDesc.innerHTML = item.description;
    catItemInfoDiv.append(courseDesc);

    let goToCategory = document.createElement("a");
    goToCategory.setAttribute("class", "btn btn-primary btn-big");
    goToCategory.setAttribute("href", "/productList");
    goToCategory.innerHTML = `Explore ${item.key}`;
    catItemInfoDiv.append(goToCategory);

    catItem.append(catImgContainer);
    catItem.append(catItemInfoDiv);

    document.querySelector("#categories").append(catItem);
}