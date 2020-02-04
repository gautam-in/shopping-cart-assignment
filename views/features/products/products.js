let itemCount =0;
let itemList = [];
let itemsinCart =[];
let cartUpdated;
document.addEventListener('click', function (event) {

 if(event.target.closest('[data-cart-action]')){
     let val = event.target.closest('[data-cart-action]').getAttribute('data-cart-action');
      if(val === 'show'){
        showCart();
      } else if(val === 'close') {
        closeCart();
      } else if(val === 'update') {
        let qty = event.target.getAttribute('data-cart-qty');
        if(qty === 'dec'){
          update(event.target,false);
        } else if(qty === 'inc'){
           update(event.target,true);
        }
      } 
  } else if(event.target.classList.contains('category__link')){
      event.preventDefault();
      selectCategory(event.target.getAttribute('data-category-id'));
  }else if(event.target.closest('.nav__menu--mob')){
       toggleMenu();
  } else if(event.target.classList.contains('buy-btn')){
      let id = event.target.getAttribute('data-citem-id');
      buy(id);
  } else {
      return false;
  }
}, false);

function selectCategory(id){
  categoryId = id;
  let prevUrl =window.location.href.split("/");
  let prevId = prevUrl[prevUrl.length -1];
  let diffUrl = categoryId !== prevId;
  let obj = {'prevId':prevId,'currentId':categoryId};
  localStorage.setItem('categorySelected',JSON.stringify(obj));
  window.location.href = diffUrl? `/products/${id}`:'/products';
}

let shoppingCart = (function(){
 
    let itemsinCart = [];
    let products;


    function setProducts(pr){
      products = pr;
    }

    function init(){
      if( localStorage.getItem("itemsinCart")){
        itemsinCart = JSON.parse(localStorage.getItem("itemsinCart"));
        cartUpdated =true;
      } 
    }

    function addItemtoCart(id) {
       let product = products.find(product =>product.id === id);
       let index = itemsinCart.findIndex(x=>x.id == id);
       if (index == -1) {
        product.qty = 1;
        itemsinCart.push(product);
       } else {
         itemsinCart[index].qty += 1;
       }
       saveCart();
         
    }

    function updateCart(id,flag){
        const index =itemsinCart.findIndex(item=>item.id ==id);
        itemsinCart[index].qty=flag?itemsinCart[index].qty+1:itemsinCart[index].qty-1;
        if( itemsinCart[index].qty === 0){
          removeItem(index);
        }
        saveCart();
    }

    function saveCart(){
      localStorage.setItem("itemsinCart",JSON.stringify(itemsinCart));
    }

    function removeItem(index){
        itemsinCart.splice(index,1);
    }

    function calcSum(){
      return  itemsinCart.reduce((sum,x)=>{
          sum = sum+x.qty*x.price;
          return sum;    
      },0)

    }

     function getCart(){
      return itemsinCart;
     }

     function getCount(){
     return  itemsinCart.reduce((sum,x)=>{
          sum = sum+x.qty;
          return sum;    
      },0)
     }

    return {
      init:init,
      addItemtoCart: addItemtoCart,
      calcSum:calcSum,
      getCart: getCart,
      updateCart:updateCart,
      setProducts:setProducts,
      getCount:getCount
    }

})();

function buy(id) {
const url = window.location.origin + "/addToCart";
  fetch(url, {
  method: 'POST',
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  body: JSON.stringify({'id':id}),
  }).then(function(response) {
    if(response.status === 200) {
      itemCount=itemCount+1;
      const url = window.location.origin + "/updateCart";
        fetch(url, {
        method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({'cartCount':itemCount}),
        }).then((resp)=>{
          shoppingCart.addItemtoCart(id);
          cartUpdated = true;
           setCount();
        })
    }
  });
 
}
function init(){
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       let data =eval('('+this.responseText+')');
       shoppingCart.setProducts(data);
    }
  };
  xmlhttp.open("GET", "../server/products/index.get.json", true);
  xmlhttp.send();
  shoppingCart.init();
  if(shoppingCart.getCart().length){
    togglePriceDetails('block');
  }else {
    togglePriceDetails('none');
  }
  setCount();
  highlightCatgory();
 

}

function update(event,flag){
 let id =event.id;
  itemCount= flag?itemCount+1:itemCount-1;
   const url = window.location.origin + "/updateCart";
        fetch(url, {
        method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({'cartCount':itemCount}),
        }).then((resp)=>{
          shoppingCart.updateCart(id,flag);
          cartUpdated = true;
          setCount();
          let itemsinCart = shoppingCart.getCart();
          renderCart(itemsinCart);
          showSum();
        })
}

function showSum(){
  let totalPrice = shoppingCart.calcSum();
 document.getElementById(`totalprice`).innerHTML = `Rs.${totalPrice}&nbsp;&nbsp;>`;

}
function showCart(){
  let itemsinCart = shoppingCart.getCart();
  if(cartUpdated){
   let products =JSON.parse(localStorage.getItem("products"));
   renderCart(itemsinCart);
   showSum();  
  }
   document.getElementsByClassName("cart-overlay")[0].style.display ='block';
   document.getElementsByTagName("body")[0].style.overflow ='hidden';
   cartUpdated = false;
   if(itemsinCart.length){
    document.getElementsByClassName("checkout")[0].focus();
  }else {
     document.getElementsByClassName("shopping")[0].focus();
  }

}
function renderCart(itemsinCart){
  let html ='';
  if(itemsinCart.length){
      for(let i=0;i<itemsinCart.length;i++) {
        let item = itemsinCart[i];
        html+=`<div class="row item">
                <div class="col span-1-of-7 item__img"><img src="${itemsinCart[i].imageURL}" alt="${itemsinCart[i].name}"></div>
                <div class="col span-6-of-7 item__desc">
                  <h3> ${itemsinCart[i].name}</h3>
                    <div class="price__wrapper">
                      <div class="col span-1-of-2">
                          <button class="btn" id=${item.id} data-cart-action="update" data-cart-qty="dec"
                          >-</button>
                          <span  id="item-price-${item.id}">${itemsinCart[i].qty}</span>
                          <button class="btn"  id=${item.id} data-cart-action="update" data-cart-qty="inc">+</button>
                          <span>x</span>
                          <span>Rs.${itemsinCart[i].price}</span>
                      </div>
                      <span class="item__totalprice float-right">Rs.${itemsinCart[i].price*itemsinCart[i].qty}
                      </span>
                    </div>
                </div>
              </div>`;
              togglePriceDetails('block');
      }
  } else {
       html+=`<h2 class="empty__heading text-center">No items in your cart.</h2><p class="empty__label text-center">Your favorite items are just a click away</p>`;
       togglePriceDetails('none');
  }
  if(itemsinCart.length){
    document.getElementsByClassName("item__wrapper")[0].classList.remove('cart__empty');
    document.getElementById("overlay").classList.remove('checkout-cart');
  }else {
    document.getElementsByClassName("item__wrapper")[0].classList.add('cart__empty');
    document.getElementById("overlay").classList.add('checkout-cart');
  }
   document.getElementsByClassName("item__wrapper")[0].innerHTML =html;
   
}

function highlightCatgory(){
    let item = JSON.parse(localStorage.getItem('categorySelected'));
    if(item){
        if(document.getElementById(item.prevId)){
          document.getElementById(item.prevId).classList.remove('highlight');
        }
        if(document.getElementById(item.currentId)){
          if(item.prevId !== item.currentId){
            document.getElementById(item.currentId).classList.add('highlight');
          }
        }
    }
}

function setCount(){
  document.getElementsByClassName("cart-head-count")[0].innerHTML=`<span>My Cart</span> (${shoppingCart.getCount()} items)` ;
  document.getElementsByClassName("cart-number")[1].innerHTML=`${shoppingCart.getCount()} items` ;
  document.getElementsByClassName("cart-number")[0].innerHTML=`${shoppingCart.getCount()} items` ;
}

function closeCart(){
  document.getElementsByTagName("body")[0].style.overflow ='auto';
  document.getElementsByClassName("cart-overlay")[0].style.display ='none';
}
function togglePriceDetails(param){
  document.getElementsByClassName("cart__offer")[0].style.display =param;
  document.getElementsByClassName("promo")[0].style.display =param;
  document.getElementsByClassName("checkout")[0].style.display =param;
  document.getElementsByClassName("shopping")[0].style.display = param === 'none'?'block':'none';
}
init();
