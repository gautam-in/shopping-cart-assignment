
async function FetchAllCategories(){
    var response = await fetch("http://localhost:5000/categories");
    var respoanseJson = await response.json();
    for(var posts of respoanseJson){
        ShowAllData(posts);
        // listProduct(posts);
    }
}

window.addEventListener("DOMContentLoaded",FetchAllCategories);

function ShowAllData(allres){
    var section = document.querySelector('.product');
    var card = document.createElement('div');
    if(allres.order %2 == 0){
        card.className = "card card-even";
    }else{
        card.className = "card card-odd";
    }
    var hr = document.createElement('hr');
    // card text section
    var card_text = document.createElement('div');
    if(allres.order %2 == 0){
        card_text.className = "card-text card-text-odd";
    }else{
        card_text.className = "card-text card-text-even";
    }
    var card_text_title = document.createElement('div');
        card_text_title.className = "card-text-title";
        card_text_title.innerText =allres.name;

    var card_text_desc = document.createElement('div');
        card_text_desc.className = "card-text-desc";
        card_text_desc.innerText = allres.description;
    
    var button = document.createElement('button');
        button.className = "card-text-button";
        
        let a = document.createElement('a');
        a.setAttribute('href','products.html');
        a.innerText = allres.name;
        button.append(a);
    
    // card image section
    var card_image = document.createElement('div');
        card_image.className ="card-image center-display card-image-odd";

    var image = document.createElement('img');
        image.setAttribute('src',allres.imageUrl);
        image.setAttribute('alt',"");
        image.setAttribute('width',"357");
        image.setAttribute('height',"178");
        image.className = "card-image-area";

    // cards 
        card_text.append(card_text_title);
        card_text.append(card_text_desc);
        card_text.append(button);

        card_image.append(image);

        card.append(card_text);
        card.append(card_image);
        section.append(card);
        section.append(hr);


// --------------------Categories session end-------------

// ---------------carousel session start----------

//     async function FetchAllCarousel(){
//         var response = await fetch("http://localhost:5000/categories");
//         var respoanseJson = await response.json();
//         for(var posts of respoanseJson){
//             Carousel(posts);
//         }
//     }
   
//     function Carousel(){
//         var carousel = document.querySelector('.center-display');
//         var slidershow = document.createElement('div');
//             slidershow.className = "slideshow-container";

//         var myslides = document.createElement('div');
//             myslides.className = "mySlides fade";
        
//         var image = document.createElement('img');
//             image.setAttribute('src',"");
//             image.style.width = "100%";
        
//         var prev = document.createElement('a');
//             prev.className = ('prev');
//             prev.setAttribute('id','plusSlides');
//             prev.innerText = "&#10094;";
        
//         var next = document.createElement('a');
//             next.className = ('next');
//             next.setAttribute('id','MinusSlides');
//             next.innerText = '&#10095;';
        
//         var dot = document.createElement('div');
//             dot.style.textAlign = "center";
        
//         var span = document.createElement('span');
//             span.className = 'dot';

        
            
//     }

//     window.addEventListener('DOMContentLoaded',Carousel);

// // --------------------------------------------

    var slideIndex = 1;
    showSlides(slideIndex);

    // click on prev button
    document.getElementById('plusSlides').addEventListener('click',function(){
        let n = -1;
        showSlides(slideIndex += n);
    })

    // click on next button 
    document.getElementById('MinusSlides').addEventListener('click',function(){
        let n = 1;
        showSlides(slideIndex += n);
    })

    var dot =document.querySelector('.dot1');
    dot.addEventListener('click',function(){
        showSlides(slideIndex = 1);
    })

    var dot =document.querySelector('.dot2');
    dot.addEventListener('click',function(){
        showSlides(slideIndex = 2);
    })

    var dot =document.querySelector('.dot3');
    dot.addEventListener('click',function(){
        showSlides(slideIndex = 3);
    })

    var dot =document.querySelector('.dot4');
    dot.addEventListener('click',function(){
        showSlides(slideIndex = 4);
    })

    var dot =document.querySelector('.dot5');
    dot.addEventListener('click',function(){
        showSlides(slideIndex = 5);
    })



    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    }

}


// --------------carousel end--------

