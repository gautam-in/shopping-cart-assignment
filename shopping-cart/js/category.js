
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
        var carouselmg = '';
        var carouselIndicator = ''
        if(i==0){
            carouselmg=  `<div class="carousel-item active">
            <img class="d-block w-100" src="..${data[i].bannerImageUrl}" alt=${data[i].bannerImageAlt}>
            </div>`;
            carouselIndicator = `<li data-target="#carouselExampleIndicators" data-slide-to=${i} class="active"></li>`
        }else{
            carouselmg=  `<div class="carousel-item">
            <img class="d-block w-100" src="..${data[i].bannerImageUrl}" alt=${data[i].bannerImageAlt}>
            </div>`;
            carouselIndicator = `<li data-target="#carouselExampleIndicators" data-slide-to=${i}></li>`
        }
        $("#carousel-img-list").append(carouselmg)
        $("#carousel-indicator-list").append(carouselIndicator)
    }
}


function createCategory(data){
    for(var i=0; i<data.length;i++){
      if(data[i].order > 0){
        var category = `
        <div class="row category-card">
        <div class="col-6">
        <img src="..${data[i].imageUrl}" width="100%">
     </div>
     <div class="col-6 category-description">
        <div><h3>${data[i].name}</h3></div>
        <div>
            <p>${data[i].description}</p>
         </div>
        <div>
            <button class="button-modify" id=${data[i].id} onclick=saveCategoryType(this)>Explore ${data[i].key}</button>
         </div>
     </div>
     </div>`
     $("#category-list").append(category)
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