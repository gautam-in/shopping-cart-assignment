/**
 * Create immediately invoked function expression (IIFE)
 * @param  {String} banner Class name of banner wrapper html element
 */
var home = (function(carousel){
 
    // Create private variable
    var carousel = document.querySelector(carousel);
    var interval = null;
    var timeout = null;
    var wrapper = carousel.querySelector(CONSTANS.CAROUSEL_WRAPPER);
    var slides = {
        count: 0,
        items: [],
        width: 'auto',
        current: 0
    };
  
    /**
     * private Method to bind banner bullets elements
     * @param  {Number} itemCount number of slider comming from API
     */
    var getBullets = (itemCount) => {
        var ul = "<ul class='carousel__goto'>";
        for(let i=0; i < itemCount; i++){
            let className = i===0 ? 'goto__active' : ''; 
            ul += `<li class='goto-li'><button class='${className}' id='${i}' aria-label="bullets"></button></li>`
        }
        ul += "</ul>";
        return ul;
    }
    
    /**
     * private method to bind slider next and previous elements
     */
    var getNavigation = () => {
        return '<button class="prev carousel__arrow">prev</button><button class="next carousel__arrow">next</button>';
    }
    
    /**
     * private method to take action according to next and prev
     * @param (object) e Refrence of next and previous button
     */
    var navigate = (e) => {
        var element = e.target;       
        if(element.className.includes("prev")){
            prev();
        } else {
            next();
        }
    }

    /**
     * private init method to initalize the slider 
     * @param (object) options contain the delay attribute to rotate the slider
     */
    var init = (options) => {
        var delay = options.delay || 3000;
        slides.count = wrapper.children.length; //Count of the slider
        slides.items = wrapper.children; //Elements of the slider
        slides.width = wrapper.children.item(0).width; //Get the width of 1st Item
       
        // Append Bullets
        var bulletArea = document.createElement("div");
        carousel.appendChild(bulletArea);
        bulletArea.classList.add("carousel__bullet");
        bulletArea.innerHTML = getBullets(slides.count);

        // Append Navigations inside the slider area
        var navArea = document.createElement("div");
        navArea.className = "carousel__nav-area";
        navArea.innerHTML = getNavigation();
        carousel.appendChild(navArea);

        // Bind nav functions
        var navs = carousel.querySelectorAll(".carousel__arrow");
        navs.forEach(function(nav){
            nav.addEventListener("click", (e) => navigate(e));
        });
        
        // Bind Dot functions
        var goToLi = document.querySelectorAll(".goto-li");
        goToLi.forEach(function(goToLi){
            goToLi.addEventListener("click", (e) => gotoSlide(e));
        });
        
        // Setting width to slides for mobile devices
        if(window.matchMedia("screen and (max-width: 767px").matches){
            for(let i=0; i < slides.count; i++){
                wrapper.children.item(i).style.width = slides.width + "px";
            }
        }
        // Added all slider in same row
        wrapper.style.width = slides.width * slides.count + "px";
        
        // Call the slider rotation method
        play(delay);
    }
    
    /**
     * Create next method to navigate the slider into forword direction 
     */
    var next = () => {
        let previousState = slides.current;
        if(interval !== null) clearInterval(interval);
        if(slides.current === (slides.count - 1)) slides.current = -1;
        wrapper.style.transform = "translateX(-" + (slides.width * (slides.current + 1)) + "px)";
        slides.current++;
        activeDot(slides.current, previousState); // Call method for dot active
        if(timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(function(){
            play(5000);
        });
        
    }
    
    /**
     * private prev method to navigate the slider into backword direction 
     */
    var prev = () => {
        let previousState = slides.current;
        if(interval !== null) clearInterval(interval);
        if(slides.current === 0){ slides.current = (slides.count); previousState = 0;}
        wrapper.style.transform = "translateX(-" + (slides.width * (slides.current - 1)) + "px)";
        activeDot(slides.current-1, previousState); // Call method for dot active
        slides.current--;     
        if(timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(function(){
            play(5000);
        });
    };

    /**
     * private method gotoSlide method to jump specific slider
     * @param (object) e contain the reference of active html element
     */
    var gotoSlide = (e) => {
        let previousState = slides.current;
        slides.current = parseInt(e.target.id);
        wrapper.style.transform = "translateX(-" + (slides.width * (slides.current)) + "px)";
        activeDot(slides.current, previousState); // Call method for dot active
        if(interval !== null) clearInterval(interval);
        setTimeout(function(){
            play(4000);
        });
    };

    /**
     * private method to play method to rotate slider
     * @param (Number) delay Number of milisecond to move slider
     */
    var play = (delay) => {
        interval = setInterval(function(){
            let previousState = slides.current;
            if(slides.current < (slides.count - 1)){
                slides.current++;
            } else {
                slides.current = 0;
            }
            // Call method for dot active
            activeDot(slides.current, previousState);
            wrapper.style.transform = "translateX(-" + (slides.width * slides.current) + "px)";
        }, delay);
    };
    
    /**
     * private method to add active class in dot dynamically
     * @param (Number) current position of active slider
     * @param (Number) previousState next position of the slider
     */
    var activeDot = function(current, previousState){
        document.getElementsByClassName('goto-li')[previousState].children.item(0).classList.remove("goto__active");
        document.getElementsByClassName('goto-li')[current].children.item(0).classList.add("goto__active");
    };
    
    return{
        /**
         * Call get Banner data from API and bind with html element
         */
        getBanners : function(){
            apiService.getBanner({url: END_POINTS.BANNER})
            .then(res => {
                let img = "";
                res.forEach(element => {
                    img += `<img class="carousel__img" src="${element.bannerImageUrl}" alt="${element.bannerImageAlt}">`;
                });
                document.getElementsByClassName("carousel__wrapper")[0].innerHTML = img;   
                init({delay: 3000}); // call banner init method
            });
        },
    
        /**
         * Call get Categories List data from API and bind the data with HTML element
         */
        getCategories : function(){
            apiService.getCategories({url: END_POINTS.CATEGORIES})
            .then(res => {
                let contentBlock = "";
                let count = 1;
                res.forEach(element => {
                    if(element.enabled){
                        if(count % 2 === 0){
                            contentBlock += `<div class="product"><div class="clearfix"><div class="product__img-left"><img src=${element.imageUrl} alt=${element.key} class="product__img-right--img"></div><div class="product__content-right"><h2>${element.name}</h2><p>${element.description}</p><a href='/product-list' aria-hidden="true"><button id=${element.id} class="btn btn-primary product__btn" type="button" name=${element.name}></a>Explore ${element.key}</button></div></div></div>`;
                        }else{
                            contentBlock += `<div class="product"><div class="clearfix"><div class="product__content-left"><h2>${element.name}</h2><p>${element.description}</p><a href='/product-list' aria-hidden="true"><button class="btn btn-primary product__btn" id=${element.id} name=${element.name}>Explore ${element.key}</button></a></div><div class="product__img-right"><img src=${element.imageUrl} alt=${element.key} class="product__img-left--img"></div></div></div>`;
                        }
                        count++;
                    }
                });
                document.getElementsByClassName("product-wrapper")[0].innerHTML = contentBlock;
            });
        }
    }
})(CONSTANS.CAROUSEL_CLASS);

//Call get Banner method to fetch data from API
home.getBanners();
//Call get categories method to fetch data from API
home.getCategories();
