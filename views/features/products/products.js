

let itemCount =0;
let itemList = [];
let itemsinCart =[];
let cartUpdated;

function selectCategory(id){
  categoryId = id;
  let prevUrl =window.location.href.split("/");
  let prevId = prevUrl[prevUrl.length -1];
  let diffUrl = categoryId !== prevId;
  window.location.href = diffUrl? `/products/${id}`:'/products';

}

var shoppingCart = (function(){
 
    var itemsinCart = [];
    var products;


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
         product.qty += 1;
       }
        /*if(!itemsinCart.length){
            product.qty=1;
             //itemList.push({'qty':1,'id':id});
           } else {
            let x = itemList.findIndex(x=>x.id == id)
            if(x !== -1){
              itemList[x].qty+=1
            }else {
              itemList.push({'qty':1,'id':id});
            }
           }*/
           cartUpdated = true;
          // itemsinCart =[];
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
 const url = `http://localhost:5000/addToCart`;
 console.log(id);
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
           setCount();
          /*if(!itemList.length){
             itemList.push({'qty':1,'id':id});
           } else {
            let x = itemList.findIndex(x=>x.id == id)
            if(x !== -1){
              itemList[x].qty+=1
            }else {
              itemList.push({'qty':1,'id':id});
            }
           }
           cartUpdated = true;
           itemsinCart =[];
           
          localStorage.setItem("itemList",JSON.stringify(itemList));*/
        })


     
    }
  });
 
}
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     var data =eval('('+this.responseText+')');
     shoppingCart.setProducts(data);
  }
};
xmlhttp.open("GET", "../server/products/index.get.json", true);
xmlhttp.send();
shoppingCart.init();
setCount();

function update(event,flag){
  let id =event.classList[1].split("-")[1];
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
          shoppingCart.addItemtoCart(id);
          shoppingCart.updateCart(id,flag);
          setCount();
          let itemsinCart = shoppingCart.getCart();
          renderCart(itemsinCart);
          showSum();
        })
}

function showSum(){
  let totalPrice = shoppingCart.calcSum();
/*let totalprice = itemsinCart.reduce((sum,x)=>{
    sum = sum+x.qty*x.price;
    return sum;    
},0)*/
 document.getElementById(`totalprice`).innerHTML = `Rs.${totalPrice}&nbsp;&nbsp;>`;

}
function showCart(){
  if(cartUpdated){
   let itemsinCart = shoppingCart.getCart();
   //let itemList =JSON.parse(localStorage.getItem("itemList"));
   let products =JSON.parse(localStorage.getItem("products"));
   /*itemList.forEach(item=>{
    let product =products.find(product=>product.id == item.id);
      product.qty = item.qty;
      itemsinCart.push(product);
   });*/
   renderCart(itemsinCart);
   /*let html='';
   console.log(itemsinCart);
   for(let i=0;i<itemsinCart.length;i++) {
    let item = itemsinCart[i];
      html+=`<div class="row cart-item">
                <div class="col span-3-of-12"><img src="${itemsinCart[i].imageURL}"></div>
                <div class="col span-9-of-12">
                  <div class="label"> ${itemsinCart[i].name}</div>
                    <div class="row">
                      <div class="col span 1-of-2 qty-ctr paddingTop10">
                          <span class="dot id-${item.id}" id=${item.id} onclick="update(event.target,true)">+</span>
                          <span class="item-price" id="item-price-${item.id}">${itemsinCart[i].qty}</span>
                          <span class="dot  id-${item.id}" onclick="update(event.target,false)">-</span>
                          <span>x</span>
                          <span>Rs.${itemsinCart[i].price}</span>
                      </div>
                      <div class="col span-1-of-2 price-ctr" id="item-total-${item.id}">Rs.${itemsinCart[i].price*itemsinCart[i].qty}
                      </div>
                    </div>
                </div>
              </div>`;
   }
   document.getElementsByClassName("cart-box")[0].innerHTML =html;*/
   showSum();  
  }
   document.getElementsByClassName("parent-overlay")[0].style.display ='block';
   cartUpdated = false;

}
function renderCart(itemsinCart){
  let html ='';
  for(let i=0;i<itemsinCart.length;i++) {
    let item = itemsinCart[i];
      html+=`<div class="row cart-item">
                <div class="col span-3-of-12"><img src="${itemsinCart[i].imageURL}"></div>
                <div class="col span-9-of-12">
                  <div class="label"> ${itemsinCart[i].name}</div>
                    <div class="row">
                      <div class="col span 1-of-2 qty-ctr paddingTop10">
                          <span class="dot id-${item.id}" id=${item.id} onclick="update(event.target,true)">+</span>
                          <span class="item-price" id="item-price-${item.id}">${itemsinCart[i].qty}</span>
                          <span class="dot  id-${item.id}" onclick="update(event.target,false)">-</span>
                          <span>x</span>
                          <span>Rs.${itemsinCart[i].price}</span>
                      </div>
                      <div class="col span-1-of-2 price-ctr" id="item-total-${item.id}">Rs.${itemsinCart[i].price*itemsinCart[i].qty}
                      </div>
                    </div>
                </div>
              </div>`;
   }
   document.getElementsByClassName("cart-box")[0].innerHTML =html;
}

function setCount(){
  document.getElementsByClassName("cartNumber")[1].innerHTML=`${shoppingCart.getCount()} items` ;
  document.getElementsByClassName("cartNumber")[0].innerHTML=`${shoppingCart.getCount()} items` ;
}

function closeCart(){
  document.getElementsByClassName("parent-overlay")[0].style.display ='none';
}