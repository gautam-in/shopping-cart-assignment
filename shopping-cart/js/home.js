
$(document).ready(function () {
    $.get("http://localhost:3000/banners", function (result, status) {
        createCarousel(result)
    });
    $.get("http://localhost:3000/categories", function (data, status) {
        createCategory(data)
    });
    totalItemInCart()
});


function createCarousel(data) {
    for(var i=0; i<data.length;i++){
         getCarouselItem(data[i],i)
    }
}


function createCategory(data){
    for(var i=0; i<data.length;i++){
      if(data[i].order > 0){
         $("#category-list").append(getCategoryItem(data[i]))
      }
    }  
}


function saveCategoryType(current){
  localStorage.setItem('categoryType',$(current).attr('id'))
  location.href = "product.html";
}


function totalItemInCart(){
    var cartItemList = JSON.parse(localStorage.getItem('cartItemList'))
    if(cartItemList != null && cartItemList != undefined){
      $('.total-item-count').html(cartItemList.length)
    }
}


function getCategoryItem(data){
return `<div class="row align-items-center category-card m-0">
            <div class="col-5 col-sm-6 w-100 h-100">
                <img src="..${data.imageUrl}" alt=${data.bannerImageAlt} width="100%">
            </div>
            <div class="col-7 col-sm-6 text-center p-0">
                <div><h5>${data.name}</h5></div>
                <div><p>${data.description}</p></div>
                <div><button class="modified-button m-auto" id=${data.id} onclick=saveCategoryType(this)>Explore ${data.key}</button></div>
            </div>
        </div>`
}


function getCarouselItem(data,i){
    var carouselmg = '';
    var carouselIndicator = ''
    if(i==0){
        carouselmg=  `<div class="carousel-item active">
        <img class="d-block w-100" src="..${data.bannerImageUrl}" alt=${data.bannerImageAlt}>
        </div>`;
        carouselIndicator = `<li data-target="#carousel-indicator-container" data-slide-to=${i} class="active"></li>`
    }else{
        carouselmg=  `<div class="carousel-item">
        <img class="d-block w-100" src="..${data.bannerImageUrl}" alt=${data.bannerImageAlt}>
        </div>`;
        carouselIndicator = `<li data-target="#carousel-indicator-container" data-slide-to=${i}></li>`
    }
    $("#carousel-img-list").append(carouselmg)
    $("#carousel-indicator-list").append(carouselIndicator)
}