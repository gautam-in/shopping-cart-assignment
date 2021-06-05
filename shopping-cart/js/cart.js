
function getCartItem(){
  debugger
    var cartItemList = JSON.parse(localStorage.getItem('cartItemList'));
    $('#cart-item-list').empty();
    $('.non-desktop-cart-body').empty();
    var screenWidth = $(window).width();
    if(screenWidth < 992){
      $('.navigation').css("display","none");
      $('#product').css("display","none");
      $('#category-list').css("display","none");
      $('#carouselExampleIndicators').css('display','none')
       $('#cart-content').css("display","block");
    }
    var sum = 0;
    if(cartItemList != undefined && cartItemList != null && cartItemList.length > 0){
    for(var i=0; i<cartItemList.length; i++){
        sum = sum + cartItemList[i].price * cartItemList[i].count
        var cartItem1 = `<div class="row cart-item align-items-center mt-2">
        <div class="col-2 p-0"><img src="..${cartItemList[i].imageURL}"/></div>
        <div class="col-7 col-sm-7">
          <p>${cartItemList[i].name}</p>
          <span class="plus-icon" onclick="incrementProductCount(this)" id=${cartItemList[i].id}>+</span>
          <span>${cartItemList[i].count}</span>
          <span class="minus-icon" onclick="decrementProductCount(this)" id=${cartItemList[i].id}>-</span>
          <span>*</span>
          <span>Rs.${cartItemList[i].price}</span>
        </div>
        <div class="col-2"><span>Rs.</span><span>${cartItemList[i].price * cartItemList[i].count}</span></div>
     </div>`;
     $('#cart-item-list').append(cartItem1);

     var cartItem2 = `<div class="row m-0 mt-2">
     <div class="col-3 cart-img"><img src="..${cartItemList[i].imageURL}"/></div>
     <div class="col-7">
       <p>${cartItemList[i].name}</p>
       <span class="plus-icon" onclick="incrementProductCount(this)" id=${cartItemList[i].id}>+</span>
       <span>${cartItemList[i].count}</span>
       <span class="minus-icon" onclick="decrementProductCount(this)" id=${cartItemList[i].id}>-</span>
       <span>*</span>
       <span>Rs.${cartItemList[i].price}</span>
     </div>
     <div class="col-2"><span>Rs.</span><span>${(cartItemList[i].count) * (cartItemList[i].price)}</span></div>
    </div>`;
    $('.non-desktop-cart-body').append(cartItem2);
    }
    $('.no-item-footer').css('display',"none");                           
    $('.item-footer').css('display',"block");
}else{
  $('#cart-item-list').append(`<div class="no-item-in-cart-desc">
                              <h6>No items in your cart</h6>
                              <small>Your favorite items are just a click away</small>
                              </div>`);
  $('.non-desktop-cart-body').append(`<div class="no-item-in-cart-desc">
  <h6>No items in your cart</h6>
  <small>Your favorite items are just a click away</small>
  </div>`);

   $('.no-item-footer').css('display',"block");                           
   $('.item-footer').css('display',"none");
}
    $('.grand-total').html(sum)

}


function incrementProductCount(current){
  var id = $(current).attr('id');
  var cartItemList = JSON.parse(localStorage.getItem('cartItemList'))
  var cartItemIndex = cartItemList.findIndex((product)=> product.id == id);
  var updatedCount = cartItemList[cartItemIndex]['count'] + 1;
  cartItemList[cartItemIndex]['count'] = updatedCount;
  localStorage.setItem('cartItemList',JSON.stringify(cartItemList))
  getCartItem();
}

function decrementProductCount(current){
    var newItemList = []
    var id = $(current).attr('id');
    var cartItemList = JSON.parse(localStorage.getItem('cartItemList'))
    var cartItemIndex = cartItemList.findIndex((product)=> product.id == id);
    var updatedCount = cartItemList[cartItemIndex]['count'] - 1;
    if(updatedCount <= 0){
        newItemList = cartItemList.filter((product)=> product.id != id);
        localStorage.setItem('cartItemList',JSON.stringify(newItemList))
        getCartItem();
        totalItemInCart();
    }else{
        cartItemList[cartItemIndex]['count'] = updatedCount;
        localStorage.setItem('cartItemList',JSON.stringify(cartItemList))
        getCartItem();
    }

}


function totalItemInCart(){
    var cartItemList = JSON.parse(localStorage.getItem('cartItemList'))
    if(cartItemList != null && cartItemList != undefined){
      $('.total-item-count').html(cartItemList.length)
    }
  }