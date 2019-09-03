/**
 * Create immediately invoked function expression (IIFE)
 */

const home = (function(banner){
    
    // Create Private variable
    var banner = document.querySelector(banner);
    var interval = null;
    var timeout = null;
    var wrapper = banner.querySelector(".slide-wrapper");
    var slides = {
        count: 0,
        items: [],
        width: 'auto',
        current: 0
    };
    
    // Private Method to bind banner bullets elements
    var getBullets = (itemCount) => {
        var ul = "<ul class='go-slide'>";
        for(let i=0; i < itemCount; i++){
            let className = i===0 ? 'arrow-active' : ''; 
            ul += `<li class='goto-li'><button class='${className}' id='${i}'></button></li>`
        }
        ul += "</ul>";
        return ul;
    }
    
    // Private Method to bind slider next and previous elements
    var getNavigation = () => {
        return '<button class="prev arrow">prev</button><button class="next arrow">next</button>';
    }
    
    // Private Method to take action according to next and prev
    var navigate = (e) => {
        var element = e.target;       
        if(element.className.includes("prev")){
            prev();
        } else {
            next();
        }
    }

    // Private init method to initalize the slider 
    var init = (options) => {
        var delay = options.delay || 3000;
        slides.count = wrapper.children.length; //Count of the slider
        slides.items = wrapper.children; //Elements of the slider
        slides.width = wrapper.children.item(0).width; //Get the width of 1st Item
       
        // Append Bullets
        var bulletArea = document.createElement("div");
        banner.appendChild(bulletArea);
        bulletArea.classList.add("bullet-area");
        bulletArea.innerHTML = getBullets(slides.count);

        // Append Navigations inside the slider area
        var navArea = document.createElement("div");
        navArea.className = "nav-area";
        navArea.innerHTML = getNavigation();
        banner.appendChild(navArea);

        // Bind nav functions
        var navs = banner.querySelectorAll(".arrow");
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
    
    // Create next method to navigate the slider into forword direction
    var next = () => {
        let previousState = slides.current;
        if(interval !== null) clearInterval(interval);
        if(slides.current === (slides.count - 1)) slides.current = -1;
        wrapper.style.transform = "translateX(-" + (slides.width * (slides.current + 1)) + "px)";
        slides.current++;
        // Call method for dot active
        activeDot(slides.current, previousState);
        if(timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(function(){
            play(5000);
        });
        
    }
    
    // Private prev method to navigate the slider into backword direction
    var prev = () => {
        let previousState = slides.current;
        if(interval !== null) clearInterval(interval);
        if(slides.current === 0){ slides.current = (slides.count); previousState = 0;}
        wrapper.style.transform = "translateX(-" + (slides.width * (slides.current - 1)) + "px)";
        // Call method for dot active
        activeDot(slides.current-1, previousState);
        slides.current--;     
        if(timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(function(){
            play(5000);
        });
    };

    // Private method gotoSlide method to jump specific slider
    var gotoSlide = (e) => {
        let previousState = slides.current;
        slides.current = parseInt(e.target.id);
        wrapper.style.transform = "translateX(-" + (slides.width * (slides.current)) + "px)";
        // Call method for dot active
        activeDot(slides.current, previousState);
        if(interval !== null) clearInterval(interval);
        setTimeout(function(){
            play(4000);
        });
    };

    // Private method to play method to rotate slider
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
    
    // private method to add active class in dot dynamically
    var activeDot = function(current, previousState){
        document.getElementsByClassName('goto-li')[previousState].children.item(0).classList.remove("arrow-active");
        document.getElementsByClassName('goto-li')[current].children.item(0).classList.add("arrow-active");
    };
    
    return{
        // Call get Banner method to fetch data from API
        getBanners : function(apiUrl){
            apiService.getBanner({url: apiUrl})
            .then(res => {
                let img = "";
                res.forEach(element => {
                    img += `<img class="img-responsive" src="${element.bannerImageUrl}" alt="${element.bannerImageAlt}">`;
                });
                document.getElementsByClassName("slide-wrapper")[0].innerHTML = img;   
                // call banner init method
                init({delay: 3000});
            });
        },
    
        //Call get Categories List method to fetch data from API
        getCategories : function(apiUrl){
            apiService.getCategories({url: apiUrl})
            .then(res => {
                let contentBlock = "";
                let count = 1;
                res.forEach(element => {
                    if(element.enabled){
                        if(count % 2 === 0){
                            contentBlock += `<div class="product-list bottom-shadow"><div class="clearfix"><div class="product-img-section-right"><img src=${element.imageUrl} alt=${element.key}></div><div class="product-content-section-left"><h2>${element.name}</h2><p>${element.description}</p><button class="btn btn-primary" type="button">Explore ${element.key}</button></div></div></div>`;
                        }else{
                            contentBlock += `<div class="product-list bottom-shadow"><div class="clearfix"><div class="product-info-section"><h2>${element.name}</h2><p>${element.description}</p><button class="btn btn-primary">Explore ${element.key}</button></div><div class="product-img-section"><img src=${element.imageUrl} alt=${element.key}></div></div></div>`;
                        }
                        count++;
                    }
                });
                document.getElementsByClassName("product--list")[0].innerHTML = contentBlock;
            });
        }
    }
})('.my-slider');

//Call get Banner method to fetch data from API
home.getBanners("http://localhost:3000/api/getBanners");
//Call get Banner method to fetch data from API
home.getCategories("http://localhost:3000/api/getCategories");
