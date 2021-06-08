var productList = [];


$(document).ready(function(){
    $.get("http://localhost:3000/categories", function(data, status){
        createSidebar(data)
      });
    $('.sidebar-icon').click(()=>{
        if($('#check').prop('checked') == true){
            $('#category-list').hide();
        }else{
            $('#category-list').show();
        }
    })
    totalItemInCart();
});

function setNavItemName(current){
    var id =$(current).attr('id');
    var categoryName = $(current).html();
    $('#category-name').html(categoryName);
    $('.list-item').removeClass('list-item-active');
    $(current).addClass('list-item-active');
    var filteredList = productList.filter((product)=> product.category == id)
    createProductList(filteredList);
}

function createSidebar(data){
    for(var i=0; i<data.length;i++){
        if(data[i].order > 0){
             if(i == 0){
                $('#category-name').html(data[i].name);
                localStorage.setItem('categoryType',data[i].id)
             }
            $('#category-list').append(getSidebarItem(data[i]));
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



function getSidebarItem(data){
    return `<div class="sidebar-item-list" onclick="setNavItemName(this)" id=${data.id}>${data.name}</div>`
}

function createProductList(data){
    $('#product-list').empty()
    for(var i=0; i<data.length;i++){
        var product = `<div class="col-sm-6 col-md-6 col-lg-3 p-0">
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">${data[i].name}</h5>
               <div class="card-description-container d-flex d-sm-flex d-md-flex d-lg-block">
                 <div><img src="..${data[i].imageURL}" width="100%" alt="product logo"/></div>
                <div><p class="card-text card-description">${data[i].description}</p><button class="modified-button d-block d-sm-none" id=${data[i].id} onclick="addItemToCart(this)" data-toggle="modal" data-target="#alert-modal">Buy Now @ Rs.${data[i].price}</button></div>
              </div>
            </div>
            <div class="card-footer border-top-0 bg-white d-none d-sm-block d-md-block d-lg-none">
                <span><button class="modified-button" onclick="addItemToCart(this)" data-toggle="modal" id=${data[i].id} data-target="#alert-modal">Buy Now @ Rs.${data[i].price}</button></span>
              </div>
            <div class="card-footer border-top-0 bg-white d-none d-sm-none d-md-none d-lg-flex justify-content-between align-items-end">
            <span>Rs.${data[i].price}</span>
            <span><button class="modified-button p-1" onclick="addItemToCart(this)" id=${data[i].id} data-toggle="modal" data-target="#alert-modal">Buy Now</button></span>
            </div>
          </div>
        </div>`
        $('#product-list').append(product)
    }
}
