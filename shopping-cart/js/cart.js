
function getCartItemList(){
    var cartItemList = JSON.parse(localStorage.getItem('cartItemList'));
    $('#cart-item-list').empty();
    $('#cart-body').empty();
    var screenWidth = $(window).width();
    if(screenWidth < 992){
        $('.sidebar').hide();
        $('.product').css("display","none");
        $('#category-list').css("display","none");
        $('#carouselExampleIndicators').css('display','none')
        $('.cart').css("display","block");
    }
    var sum = 0;
    if(cartItemList != undefined && cartItemList != null && cartItemList.length > 0){
        for(var i=0; i<cartItemList.length; i++){
            sum = sum + cartItemList[i].price * cartItemList[i].count
            getCartRow(cartItemList[i])
        }
        $('.footer-with-no-item').css('display',"none");                           
        $('.footer-with-item').css('display',"block");
    }else{
        getDefaultCartRow()
        $('.footer-with-no-item').css('display',"block");                           
        $('.footer-with-item').css('display',"none");
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
  getCartItemList();
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
        getCartItemList();
        totalItemInCart();
    }else{
        cartItemList[cartItemIndex]['count'] = updatedCount;
        localStorage.setItem('cartItemList',JSON.stringify(cartItemList))
        getCartItemList();
    }

}


function totalItemInCart(){
    var cartItemList = JSON.parse(localStorage.getItem('cartItemList'))
    if(cartItemList != null && cartItemList != undefined){
      $('.total-item-count').html(cartItemList.length)
    }
}


function getCartRow(cartItem){
    var cartRowForDesktop = `<div class="row align-items-center mt-2 bg-white">
                                <div class="col-2 p-0"><img src="..${cartItem.imageURL}" alt="${cartItem.name}" width="100%"/></div>
                                <div class="col-7 col-sm-7">
                                <p class="m-0">${cartItem.name}</p>
                                <span class="plus-icon" onclick="incrementProductCount(this)" id=${cartItem.id}>+</span>
                                <span>${cartItem.count}</span>
                                <span class="minus-icon" onclick="decrementProductCount(this)" id=${cartItem.id}>-</span>
                                <span>*</span>
                                <span>Rs.${cartItem.price}</span>
                                </div>
                                <div class="col-2"><span>Rs.</span><span>${cartItem.price * cartItem.count}</span></div>
                            </div>`;
    var cartRowForNonDesktop = `<div class="row m-0 mt-2 bg-white">
                                    <div class="col-3"><img src="..${cartItem.imageURL}"   alt="${cartItem.name}" width="100%"/></div>
                                    <div class="col-7">
                                    <p>${cartItem.name}</p>
                                    <span class="plus-icon" onclick="incrementProductCount(this)" id=${cartItem.id}>+</span>
                                    <span>${cartItem.count}</span>
                                    <span class="minus-icon" onclick="decrementProductCount(this)" id=${cartItem.id}>-</span>
                                    <span>*</span>
                                    <span>Rs.${cartItem.price}</span>
                                    </div>
                                    <div class="col-2"><span>Rs.</span><span>${(cartItem.count) * (cartItem.price)}</span></div>
                                </div>`;  
    $('#cart-item-list').append(cartRowForDesktop);  
    $('#cart-body').append(cartRowForNonDesktop);
}


function getDefaultCartRow(){
    $('#cart-item-list').append(`<div class="default-cart-row">
                                    <h6>No items in your cart</h6>
                                    <small>Your favorite items are just a click away</small>
                                </div>`);
    $('#cart-body').append(`<div class="default-cart-row">
                                <h6>No items in your cart</h6>
                                <small>Your favorite items are just a click away</small>
                            </div>`);
}

