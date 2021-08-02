class Card {

home = ((carousel)=> {
    var carousel = document.querySelector(carousel);
    let interval = null;
    let timeout = null;
    let wrapper = carousel.querySelector(CONSTANTS.CAROUSEL_WRAPPER);
    let slides = {
        count: 0,
        items: [],
        width: 'auto',
        current: 0
    };
    let getBullets = (itemCount) => {
        let ul = "<ul class='carousel__goto'>";
        for (let i = 0; i < itemCount; i++) {
            let className = i === 0 ? 'goto__active' : '';
            ul += `<li class='goto-li'><button class='${className}' id='${i}' aria-label="bullets"></button></li>`
        }
        ul += "</ul>";
        return ul;
    }

    let getNavigation = () => {
        return `<button class="prev carousel__arrow">${CONSTANTS.prev}</button><button class="next carousel__arrow">${CONSTANTS.next}</button>`;
    }

    let navigate = (e) => {
        let element = e.target;
        if (element.className.includes("prev")) {
            prev();
        } else {
            next();
        }
    }

      //init method to initalize the slider 
    let init = (options) => {
        let delay = options.delay || 3000;
        slides.count = wrapper.children.length; //Count of the slider
        slides.items = wrapper.children; //Elements of the slider
        slides.width = wrapper.children.item(0).width; //Get the width of 1st Item

        //Append Bullets
        bulletArea();

        //Append Navigations inside the slider area
        navigations();

        // Bind nav functions
        let navs = carousel.querySelectorAll(".carousel__arrow");
        navs.forEach((nav)=> {
            nav.addEventListener("click", (e) => navigate(e));
        });

        // Bind Dot functions
        let goToLi = document.querySelectorAll(".goto-li");
        goToLi.forEach((goToLi)=> {
            goToLi.addEventListener("click", (e) => gotoSlide(e));
        });

        // Setting width to slides for mobile devices
        if (window.matchMedia("screen and (max-width: 767px").matches) {
            for (let i = 0; i < slides.count; i++) {
                wrapper.children.item(i).style.width = slides.width + "px";
            }
        }
        // Added all slider in same row
        wrapper.style.width = slides.width * slides.count + "px";

        // Call the slider rotation method
        play(delay);
    }

    /**
     * Append Bullets
     */
    let bulletArea = () => {
        let bulletArea = document.createElement("div");
        carousel.appendChild(bulletArea);
        bulletArea.classList.add("carousel__bullet");
        bulletArea.innerHTML = getBullets(slides.count);
    }

    /**
     * Append Navigations inside the slider area
     */
    let navigations = () => {
        let navArea = document.createElement("div");
        navArea.className = "carousel__nav-area";
        navArea.innerHTML = getNavigation();
        carousel.appendChild(navArea);
    }

    /**
     * Create next method to navigate the slider into forward direction 
     */
    let next = () => {
        let previousState = slides.current;
        if (interval !== null) clearInterval(interval);
        if (slides.current === (slides.count - 1)) slides.current = -1;
        wrapper.style.transform = "translateX(-" + (slides.width * (slides.current + 1)) + "px)";
        slides.current++;
        activeDot(slides.current, previousState); // Call method for dot active
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(() =>{
            play(5000);
        });
    }

    let prev = () => {
        let previousState = slides.current;
        if (interval !== null) clearInterval(interval);
        if (slides.current === 0) { slides.current = (slides.count); previousState = 0; }
        wrapper.style.transform = "translateX(-" + (slides.width * (slides.current - 1)) + "px)";
        activeDot(slides.current - 1, previousState); // Call method for dot active
        slides.current--;
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(() =>{
            play(5000);
        });
    };

    let gotoSlide = (e) => {
        let previousState = slides.current;
        slides.current = parseInt(e.target.id);
        wrapper.style.transform = "translateX(-" + (slides.width * (slides.current)) + "px)";
        activeDot(slides.current, previousState); // Call method for dot active
        if (interval !== null) clearInterval(interval);
        setTimeout(() =>{
            play(4000);
        });
    };

    let play = (delay) => {
        interval = setInterval(()=> {
            let previousState = slides.current;
            if (slides.current < (slides.count - 1)) {
                slides.current++;
            } else {
                slides.current = 0;
            }
            // Call method for dot active
            activeDot(slides.current, previousState);
            wrapper.style.transform = "translateX(-" + (slides.width * slides.current) + "px)";
        }, delay);
    };

    let activeDot = (current, previousState)=> {
        document.getElementsByClassName('goto-li')[previousState].children.item(0).classList.remove("goto__active");
        document.getElementsByClassName('goto-li')[current].children.item(0).classList.add("goto__active");
    };

    return {
        
        getBanners:  () =>{
            apiService.getBanner({ url: END_POINTS.BANNER })
                .then(res => {
                    let img = "";
                    res.forEach(element => {
                        img += `<img class="carousel__img" src="${element.bannerImageUrl}" alt="${element.bannerImageAlt}">`;
                    });
                    document.getElementsByClassName("carousel__wrapper")[0].innerHTML = img;
                    init({ delay: 3000 }); // call banner init method
                });
        },
    }
})('.carousel');

// for bottom horizontal and horizontal reverse card
    getCategories() {
        apiService.getCategories({ url: END_POINTS.CATEGORIES })
            .then(res => {
                let contentBlock = "";
                let count = 1;
                res.forEach(element => {
                    if (element.enabled) {
                        if (count % 2 === 0) {
                            contentBlock += `<div class="product"><div class="clearfix"><img src=${element.imageUrl} alt=${element.key} class="product__img-left"><div class="product__content-right"><h2>${element.name}</h2><p>${element.description}</p><a href='/product-list' ><button id=${element.id} class="btn btn-primary product__btn" type="button" name=${element.name}>Explore ${element.key}</button></a></div></div></div>`;
                        } else {
                            contentBlock += `<div class="product"><div class="clearfix"><div class="product__content-left"><h2>${element.name}</h2><p>${element.description}</p><a href='/product-list'><button class="btn btn-primary product__btn" id=${element.id} name=${element.name}>Explore ${element.key}</button></a></div><img class="product__img-right" src=${element.imageUrl} alt=${element.key} ></div></div>`;
                        }
                        count++;
                    }
                });
                document.getElementsByClassName("product-wrapper")[0].innerHTML = contentBlock;
            });
    }
}

const card = new Card()
card.home.getBanners();
card.getCategories()