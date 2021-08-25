function loadHomePage() {
    setHeaderElement();
    setHomePageBodyContent();
}
//home page body content
function setHomePageBodyContent() {
    setCarousel();
}
function setCarousel() {
    var banners;
    var bannerCarousel = document.createElement("div");
    bannerCarousel.setAttribute("class", "banner-carousel");

    fetch(requestUrl + "banners")
        .then((res) => res.json())
        .then((data) => {
            banners = data;
            banners.sort((a, b) => a.order - b.order);
            banners.forEach((json) => {
                if (json.isActive) {
                    var slideImg = document.createElement("img");
                    slideImg.setAttribute("src", ".." + json.bannerImageUrl);
                    slideImg.setAttribute("alt", json.bannerImageAlt);
                    if (json["order"] === 1) slideImg.style.display = "block";
                    else slideImg.style.display = "none";
                    bannerCarousel.appendChild(slideImg);
                }
            });
            var prev = document.createElement("a");
            prev.setAttribute("class", "prev");
            prev.setAttribute("onclick", "nextImage(-1)");
            prev.innerText = "PREV";

            var next = document.createElement("a");
            next.setAttribute("class", "next");
            next.setAttribute("onclick", "nextImage(1)");
            next.innerText = "NEXT";

            bannerCarousel.appendChild(prev);
            bannerCarousel.appendChild(next);

            document.querySelector("main").appendChild(bannerCarousel);

            var dotsDiv = document.createElement("div");
            dotsDiv.setAttribute("class", "dots-div");

            for (let i = 0; i < bannerCarousel.childElementCount - 2; i++) {
                var dotSpan = document.createElement("span");
                dotSpan.setAttribute("class", "dot");
                dotSpan.setAttribute("onclick", "currentImage(" + i + ")");
                // dotSpan.innerText = "@";
                dotsDiv.appendChild(dotSpan);
            }

            document.querySelector("main").appendChild(dotsDiv);

            //First Set the carousel then set the categories
            setCategories();
        })
        .catch((error) => console.log(error));
}
function nextImage(n) {
    var imgArr = [...document.querySelectorAll(".banner-carousel img")];
    var currentImgIndex = imgArr.findIndex((item) => item.style.display !== "none");
    imgArr.forEach((item) => {
        item.style.display = "none";
    });
    currentImgIndex = currentImgIndex + n === -1 ? imgArr.length - 1 : currentImgIndex + n;
    console.log(currentImgIndex % imgArr.length);
    imgArr[currentImgIndex % imgArr.length].style.display = "block";
}
function currentImage(n) {
    var imgArr = [...document.querySelectorAll(".banner-carousel img")];
    imgArr.forEach((item) => {
        item.style.display = "none";
    });
    imgArr[n].style.display = "block";
}
function setCategories() {
    var categories;
    var categoryElementList = document.createElement("div");
    categoryElementList.setAttribute("class", "category-list");

    fetch(requestUrl + "categories")
        .then((res) => res.json())
        .then((data) => {
            categories = data;
            categories.sort((a, b) => a.order - b.order);
            categories.forEach((json) => {
                if (json.enabled) {
                    var categoryDiv = document.createElement("div");
                    categoryDiv.setAttribute("class", "category-item");
                    categoryElementList.appendChild(createCategory(json, categoryDiv));
                }
            });
            document.querySelector("main").appendChild(categoryElementList);
        })
        .catch((err) => console.log({ error: err }));
}
function createCategory({ description, imageUrl, name, key }, element) {
    // console.log({ description, imageUrl, name });
    var imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "category-image");

    var imageElement = document.createElement("img");
    imageElement.setAttribute("src", ".." + imageUrl);
    imageElement.setAttribute("alt", name + "-img");
    imageDiv.appendChild(imageElement);

    var detailsDiv = document.createElement("div");
    detailsDiv.setAttribute("class", "category-details");

    var nameText = document.createElement("h2");
    nameText.innerText = name;

    var descriptionText = document.createElement("h4");
    descriptionText.innerText = description;

    var buttonElement = document.createElement("a");
    buttonElement.setAttribute("href", "./product_listing_page.html");
    buttonElement.innerText = "Explore " + key;

    detailsDiv.appendChild(nameText);
    detailsDiv.appendChild(descriptionText);
    detailsDiv.appendChild(buttonElement);

    element.appendChild(imageDiv);
    element.appendChild(detailsDiv);
    return element;
}
