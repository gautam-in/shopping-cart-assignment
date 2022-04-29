let currentSlide = 0;
function fetchBannerData(){
    
    return fetch('http://localhost:5000/banners')
        .then((response) => {
            if(response.ok){
                return response.json(); 
            }
            throw "Something Went Wrong"
        }).then(data => data)
        .catch(err => console.log(err));
}

function plusSlides(action){
    currentSlide = currentSlide + action;
    showSlides(currentSlide)
}

function showSlides(slideIndex){
    let slides = document.querySelectorAll('.carousel div');
    if(slideIndex > slides.length - 1){
        currentSlide = slideIndex - 1;
    }
    else if(slideIndex < 0){
        currentSlide = 0;
    }
    else{
        for(let index = 0;index < slides.length; index++){
            slides[index].style.display = 'none';
        }
        slides[slideIndex].style.display = 'block'
    }
}

async function renderCarousel(){
    let data = await fetchBannerData();
    let template = '';
    if(data.length > 0){
        let carouselContainer = document.getElementsByClassName('carousel')[0];
        for(let index = 0; index < data.length; index++){
            template += `
            <div>
                <img src="../../../${data[index].bannerImageUrl}" alt="${data[index].bannerImageAlt}"/>
            </div>
            `;
        }
        carouselContainer.innerHTML = template + `
        <a class="carousel__button prev" onclick="plusSlides(-1)">Prev</a>
        <a class="carousel__button next" onclick="plusSlides(1)">Next</a>
        `
    }
    showSlides(currentSlide);    
}


function fetchCategories(){
    return fetch('http://localhost:5000/categories')
    .then((response) => {
        if(response.ok){
            return response.json(); 
        }
        throw "Something Went Wrong"
    }).then(data => data)
    .catch(err => console.log(err));
}

async function renderCategories(){
 let categories = await fetchCategories();
 let template = '';
 if(categories.length > 0){
     for(let index = 0; index < categories.length; index++){
        if(categories[index].enabled){
            template += 
            `
            <div class="categories__container">
                <div>
                    <img width="250" height="auto" class="categories__image" src="../../../${categories[index].imageUrl}" alt="${categories[index].name} image"/>
                </div>
                <div class="categories__summary">
                    <h2>${categories[index].name}</h2>
                    <p>${categories[index].description}</p>
                    <button onclick="window.location.href='../products/products.html?${categories[index].id}'">Explore ${categories[index].key}</button>
                </div>
            </div>
            `;
        }
     }
     document.getElementById('categories').innerHTML = template;
 }
}

renderCarousel();
renderCategories();