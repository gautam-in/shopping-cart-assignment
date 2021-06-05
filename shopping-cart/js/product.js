var productList = [];


$(document).ready(function(){
    $.get("http://localhost:3000/categories", function(data, status){
        createSidebar(data)
      });
    $('#nav-icon').click(()=>{
        console.log($('#check').prop('checked'))
        if($('#check').prop('checked') == true){
            $('.sidebar').hide();
        }else{
            $('.sidebar').show();
        }
    })
    totalItemInCart();
});



function createProductList(data){
    $('#product-list').empty()
    for(var i=0; i<data.length;i++){
        var product = `<div class="col-sm-6 col-md-6 col-lg-3 p-0">
        <div class="card">
            <div class="card-body card-body-container">
              <h5 class="card-title">${data[i].name}</h5>
               <div class="description-container">
                 <div><img src="..${data[i].imageURL}" width="100%"/></div>
                <div class="button-mobile"><p class="card-text description">${data[i].description}</p><button class="button-modify" id=${data[i].id} onclick="addItemToCart(this)" data-toggle="modal" data-target="#alert-modal">Buy Now @ Rs.${data[i].price}</button></div>
              </div>
            </div>
            <div class="card-footer card-footer-tab">
                <span><button class="button-modify" onclick="addItemToCart(this)" data-toggle="modal" id=${data[i].id} data-target="#alert-modal">Buy Now @ Rs.${data[i].price}</button></span>
              </div>
            <div class="card-footer card-footer-desktop">
            <span>Rs.${data[i].price}</span>
            <span><button class="button-modify" onclick="addItemToCart(this)" id=${data[i].id} data-toggle="modal" data-target="#alert-modal">Buy Now</button></span>
            </div>
          </div>
        </div>`
        $('#product-list').append(product)
    }

}


function setNavItemName(current){
    var categoryName = $(current).html();
    $('#category-name').html(categoryName);
    $('.list-item').removeClass('list-item-active');
    $(current).addClass('list-item-active');
    var id =$(current).attr('id');
    var filteredList = productList.filter((product)=> product.category == id)
    createProductList(filteredList);
}

function createSidebar(data){
    for(var i=0; i<data.length;i++){
        if(data[i].order > 0){
             if(i == 0){
                $('#category-name').html(data[i].name);
                localStorage.setItem('categoryType',data[i].id)
                var sidebarItem = `<div class="list-item list-item-active" onclick="setNavItemName(this)" id=${data[i].id}>${data[i].name}</div>`
             }else{
              var sidebarItem = `<div class="list-item" onclick="setNavItemName(this)" id=${data[i].id}>${data[i].name}</div>`
             }
            $('#sidebar-list').append(sidebarItem);
        }
    }
}


function getProductBasedOnCategory(){
  var category = localStorage.getItem('categoryType');
  $.get("http://localhost:3000/products", function(data, status){
    productList = data;
    if(category != undefined && category != null){
        var filteredList = productList.filter((product)=> product.category == category)
        createProductList(filteredList);
    }else{
        createProductList(data);
    }
  });
}


function addItemToCart(current){
  var cartItemCheck = 0;
  var newCartItemList = [];
  var id = $(current).attr('id');
  var cartItemList = JSON.parse(localStorage.getItem('cartItemList'))
  if(cartItemList != null && cartItemList != undefined){
    newCartItemList = cartItemList
    cartItemCheck = cartItemList.filter(product=> product.id == id).length;
  }
  if(cartItemCheck > 0){
  }else{
    var filteredItem = productList.filter((product)=> product.id == id);
    var updatedItem = filteredItem[0]
    updatedItem['count'] = 1
    newCartItemList.push(updatedItem)
    localStorage.setItem('cartItemList',JSON.stringify(newCartItemList));
  }
  $('.total-item-count').html(newCartItemList.length)
 
}


function totalItemInCart(){
  var cartItemList = JSON.parse(localStorage.getItem('cartItemList'))
  if(cartItemList != null && cartItemList != undefined){
    $('.total-item-count').html(cartItemList.length)
  }
}

