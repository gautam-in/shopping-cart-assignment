window.addEventListener('DOMContentLoaded', fetchDetails);

//fetch the details that are to be shown in homepage
async function fetchDetails(){
    //cart button items
    cartBtnValueDisplay();

    //fetch carousel details
    let carouselDetails = await fetchCarousalBanner();
    let carouselJSON = await carouselDetails.json();

    let carouselDivEl = document.querySelector('#product-carousel');

    for(let prodDetail of carouselJSON){//create the carousel banner
        let imgDiv = document.createElement('div');
        imgDiv.id = prodDetail.id;
        imgDiv.classList.add('product-image', 'product-fade');
        let imgTag = document.createElement('img');
        imgTag.src = prodDetail.bannerImageUrl;
        imgTag.alt = prodDetail.bannerImageAlt;

        imgDiv.appendChild(imgTag);
        carouselDivEl.appendChild(imgDiv);
    }

    changeImage(index);//for initial rendering of images

    //fetch caegory details
    let categoryDetails = await fetchProductCategories();
    let categoryJSON = await categoryDetails.json();
    console.log(categoryJSON);

    let productCategoryEl = document.querySelector('.product-catalogue');
    let leftToRight = true;

    for(let category of categoryJSON){
        if(category.name !== 'Seafood'){
            console.log(category.name);
            let categoryCard = document.createElement('div');
            categoryCard.id = category.key;
            categoryCard.classList.add('card');

            let categoryCardBody = document.createElement('div');
            categoryCardBody.classList.add('card-body', 'category-card');

            let categoryImg = document.createElement('img');
            categoryImg.classList.add('category-image');
            categoryImg.src = category.imageUrl;
            categoryImg.alt = category.name;

            let categoryDetailsBody = document.createElement('div');
            categoryDetailsBody.classList.add('category-desc-align');

            let categoryHeading = document.createElement('h4');
            categoryHeading.textContent = category.name;

            let categoryDescription = document.createElement('p');
            categoryDescription.textContent = category.description;

            let categoryExploreButton = document.createElement('button');
            categoryExploreButton.classList.add('category-explore-btn');
            categoryExploreButton.textContent = `Explore ${category.key}`;
                        
            categoryDetailsBody.appendChild(categoryHeading);
            categoryDetailsBody.appendChild(categoryDescription);
            categoryDetailsBody.appendChild(categoryExploreButton);

            
            if(leftToRight){
                categoryCardBody.appendChild(categoryImg);
                categoryCardBody.appendChild(categoryDetailsBody);
            }
            else{
                categoryCardBody.appendChild(categoryDetailsBody);
                categoryCardBody.appendChild(categoryImg);    
            }

            leftToRight = !leftToRight;

            categoryCard.appendChild(categoryCardBody);
            productCategoryEl.appendChild(categoryCard);
        }
    }
   
}

var index = 0;

function changeImage(k){
    index += k;
    var images = document.getElementsByClassName("product-image");

    for(k = 0; k < images.length; k++){
        images[k].style.display = "none";
    }

    if(index > images.length - 1){
        index = 0;
    }

    if(index < 0){
        index = images.length - 1;
    }

    images[index].style.display = "block";

}

function cartBtnValueDisplay(){
    let cartBtn = document.querySelector('.login-cart-btn');
    cartBtnValue = localStorage.length ===0 ? "0 item": localStorage.length +  " items";
    cartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> ${cartBtnValue}`;
}

//function responsible for making asynchronous call and fetch banner details
function fetchCarousalBanner(){
    return fetch('http://localhost:5000/banners');
}

//function responsible for making asynchronous call and fetch category details
function fetchProductCategories(){
    return fetch('http://localhost:5000/categories');
}