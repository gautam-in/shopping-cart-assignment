/**
 * Create Class for Custom Banner
 * Takes one argument banner (class name of slider wrapper element)
 */

function BannerSlider(banner) {
    this.banner = document.querySelector(banner);
    var interval = null;
    var timeout = null;
    var wrapper = this.banner.querySelector(".slide-wrapper");
    var slides = {
        count: 0,
        items: [],
        width: 'auto',
        current: 0
    };
    var self = this;
    
    // Create Method to bind banner bullets elements
    function getBullets(itemCount) {
        var ul = "<ul class='go-slide'>";
        for(i=0; i < itemCount; i++){
            let className = i===0 ? 'arrow-active' : ''; 
            ul += `<li class='goto-li'><button class='${className}' id='${i}'></button></li>`
        }
        ul += "</ul>";
        return ul;
    }
    
    // Create Method to bind slider next and previous elements
    function getNavigation() {
        return '<button class="prev arrow">prev</button><button class="next arrow">next</button>';
    }
    
    // Create Method to take action according to next and prev
    function navigate(ele) {
       var e = ele.target;       
       if(e.className.includes("prev")){
        self.prev();
       } else {
        self.next();
       }
    }

    // Create init method to initalize the slider 
    this.init = function(options) {
        var self = this;
        var banner = self.banner;
        var wrapper = banner.querySelector(".slide-wrapper");
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
            nav.addEventListener("click", navigate);
        });
        
        // Bind Dot functions
        var goToLi = document.querySelectorAll(".goto-li");
        goToLi.forEach(function(goToLi){
            goToLi.addEventListener("click", self.gotoSlide);
        });
        
        // Setting width to slides for mobile devices
        if(window.matchMedia("screen and (max-width: 767px").matches){
            for(i=0; i < slides.count; i++){
                wrapper.children.item(i).style.width = slides.width + "px";
            }
        }
        // Added all slider in same row
        wrapper.style.width = slides.width * slides.count + "px";
        
        // Call the slider rotation method
        self.play(delay);
    };
    
    // Create next method to navigate the slider into forword direction
    this.next = function(){
        var self = this;
        let previousState = slides.current;
        if(interval !== null) clearInterval(interval);
        if(slides.current === (slides.count - 1)) slides.current = -1;
        wrapper.style.transform = "translateX(-" + (slides.width * (slides.current + 1)) + "px)";
        slides.current++;
        // Call method for dot active
        self.activeDot(slides.current, previousState);
        if( timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(function(){
            self.play(5000);
        });
        
    };
    
    // Create prev method to navigate the slider into backword direction
    this.prev = function(){
        var self = this;
        let previousState = slides.current;
        if(interval !== null) clearInterval(interval);
        if(slides.current === 0){ slides.current = (slides.count); previousState = 0;}
        wrapper.style.transform = "translateX(-" + (slides.width * (slides.current - 1)) + "px)";
        // Call method for dot active
        self.activeDot(slides.current-1, previousState);
        slides.current--;     
        if( timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(function(){
            self.play(5000);
        });
    };

    // Create gotoSlide method to jump specific slider
    this.gotoSlide = function(e){
        let previousState = slides.current;
        slides.current = parseInt(e.target.id);
        wrapper.style.transform = "translateX(-" + (slides.width * (slides.current)) + "px)";
        // Call method for dot active
        self.activeDot(slides.current, previousState);
        if(interval !== null) clearInterval(interval);
        setTimeout(function(){
            self.play(4000);
        });
    };

    // Create play method to rotate slider
    this.play = function(delay){
        interval = setInterval(function(){
            let previousState = slides.current;
            if(slides.current < (slides.count - 1)){
                slides.current++;
            } else {
                slides.current = 0;
            }
            // Call method for dot active
            self.activeDot(slides.current, previousState);
            wrapper.style.transform = "translateX(-" + (slides.width * slides.current) + "px)";
        }, delay);
    };
    
    // Create a method to add active class in dot dynamically
    this.activeDot = function(current, previousState){
        document.getElementsByClassName('goto-li')[previousState].children.item(0).classList.remove("arrow-active");
        document.getElementsByClassName('goto-li')[current].children.item(0).classList.add("arrow-active");
    };
}

/**
* Create a object for BannerSlider
* Pass the class name of slider element
*/
var banner = new BannerSlider(".my-slider");

/**
 * Call get Banner method to fetch data from API
 * After getting banner data bind the data with html element and add into DOM
 */
apiService.getBanner({url: "http://localhost:3000/api/getBanners"})
    .then(res => {
        let img = "";
        res.forEach(element => {
            img += `<img class="img-responsive" src="${element.bannerImageUrl}" alt="${element.bannerImageAlt}">`;
        });
        document.getElementsByClassName("slide-wrapper")[0].innerHTML = img;   
        // Creating object for BannerSlider
        banner.init({delay: 3000});
    });

/**
* Call get Categories List method to fetch data from API
* After getting categories list data bind the data with html element and add into DOM
*/
apiService.getCategories({url: "http://localhost:3000/api/getCategories"})
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
