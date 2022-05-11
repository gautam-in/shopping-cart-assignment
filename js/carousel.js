
//FRONT END starts here
    

async function LoadCarousels() {                
    try {
        let result = await GetCarousels();
        result = JSON.parse(result);
        var slideContainer = document.querySelector(".slideshow-container");
        //for loop
        for (let index = 0; index < result.length; index++) {
            let divEle = document.createElement("div");
            divEle.className = "Containers";
            divEle.style.display = "none";

            let imgEle = document.createElement("img");
            imgEle.alt = result[index].bannerImageAlt;
            imgEle.src = result[index].bannerImageUrl;

            divEle.appendChild(imgEle);
            slideContainer.appendChild(divEle);
        }
        
        
        let divDotsEle = document.querySelector(".dotsParent");
        for (let index = 0; index < result.length; index++) {
            let divDot = document.createElement("div");
            // divDot.addEventListener("click",() => ``);
            divDot.addEventListener("click",()=> currentSlide(index+1))
            divDot.className = "dots";
            divDotsEle.appendChild(divDot);                
        }
        
        slideContainer.appendChild(divDotsEle);
        SlideShowAuto();
        LoadCategories();

    } catch (err) {
            console.log(err + "carousel not loaded");
    }
}

// forward/Back controls
function plusSlides(n) {
    SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
    SlideShow(slidePosition = n);
}

//from back and fwd buttons
function SlideShow(n) {
    let i;
    let slides = document.getElementsByClassName("Containers");
    let circles = document.getElementsByClassName("dots");
    if (n > slides.length) {slidePosition = 1}
    if (n < 1) {slidePosition = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    slides[slidePosition-1].style.display = "block";
    circles[slidePosition-1].className += " enable";
} 

function SlideShowAuto() {
    let i;
    let slides = document.getElementsByClassName("Containers");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slidePosition++;
    if (slidePosition > slides.length) {slidePosition = 1}
    slides[slidePosition-1].style.display = "block";
    setTimeout(SlideShowAuto, 2000); // Change image every 2 seconds
}
//home - cardShow
async function LoadCategories() {
    let result = await GetCategories();
    result = JSON.parse(result);
    //sort based on order given in json
    result = result.sort((a,b) => a.order - b.order); 
    
    let cardContainer = document.querySelector(".card-container");
    let localStorageCategories = [];
    localStorage['category'] = [];
    for (let index = 0; index < result.length; index++) {
        if(result[index].order > 0) {
            let card = document.createElement("div");
            card.className = "cardClass";

            let separator = document.createElement("div");
            separator.className = "separator";
            card.appendChild(separator);

            let imgDetEle = document.createElement("div");
            imgDetEle.className = "cardImageDetails";

            let imgEle = document.createElement("img");
            imgEle.src = result[index].imageUrl;
            imgEle.alt = result[index].name;
            imgDetEle.appendChild(imgEle);

            let textDiv = document.createElement("div");
            textDiv.className = "cardTextClass";

            let h3Ele = document.createElement("h3");
            h3Ele.innerText = result[index].name;
            let h5Ele = document.createElement("h5");
            h5Ele.innerText = result[index].description;
            let buttonEle = document.createElement("button");
            buttonEle.textContent = "Explore " + result[index].name;

            textDiv.appendChild(h3Ele);
            textDiv.appendChild(h5Ele);
            textDiv.appendChild(buttonEle);
            
            imgDetEle.appendChild(textDiv);
            card.appendChild(imgDetEle);
            cardContainer.appendChild(card);
            localStorageCategories[localStorageCategories.length] = 
            {"id" : result[index].id , "name" : result[index].name };
        }
    }

    localStorage["category"] = JSON.stringify(localStorageCategories); 
}

//FRONT END ends here
    