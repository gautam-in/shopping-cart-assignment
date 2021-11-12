import "./category.scss";
import html from "./category.html";
import prod0 from "/static/images/category/beverages.png"
import prod1 from "/static/images/category/bakery.png"
import prod2 from "/static/images/category/beauty.png"
import prod3 from "/static/images/category/baby.png"
import prod4 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod5 from "/static/images/category/fruits.png"

let productImageList = [
  prod0,prod1,prod2,prod3,prod4,prod5]

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});


function onLoadCartNumbers (){
  let productCartCounter = localStorage.getItem('cartCounter');
  console.log(productCartCounter)
  if(productCartCounter){
    document.querySelector('.cart-count').textContent = productCartCounter
  }
}
onLoadCartNumbers ();


let prodList = document.getElementById('prod')
fetch('http://localhost:5000/categories').then((res) => res.json()).then((resp) => console.log(resp))
function getFromAPI(url, callback) {
  var obj;
  fetch(url)
    .then(res => res.json())
    .then(data => obj = data)
    .then(() => callback(obj))
}

getFromAPI('http://localhost:5000/categories', getData);

function getData(arrOfObjs) {

  arrOfObjs.forEach((x, ind) => {  
    prodList.innerHTML += ` <div class="product-card">
        <div class="product-info">
          <h5>${x.name}</h5>         
          <p>${x.description}</p>       
          <a href="products.html"> <button id="cart-button" >Explore ${x.name}</button></a>
        </div>
        <div class="product-image">
        <img src=${productImageList[ind]} alt=${x.name}>
        </div>
      </div>`
  })
 
}

window.addToCart = (name,price,inCart, tag) =>{
   console.log(name,price, tag,inCart)
   let cartObj = {
     tag,
     name,
     price,
     inCart
   }
  //  console.log(cartObj)
   let productCartCounter = localStorage.getItem('cartCounter');
   productCartCounter = parseInt(productCartCounter);
   if(productCartCounter){
       localStorage.setItem('cartCounter',productCartCounter + 1)
       document.querySelector('.cart-count').textContent = productCartCounter + 1
   }else{
    localStorage.setItem('cartCounter', 1);
    document.querySelector('.cart-count').textContent = 1
   }
   setItems(cartObj);
   totalCost(cartObj);
 }

 function setItems(product){
   console.log(product)
   let cartItems =localStorage.getItem('productsInCart');
   cartItems = JSON.parse(cartItems);
   if (cartItems != null) {
   if(cartItems[product.tag]==undefined){
       cartItems ={
         ...cartItems,
         [product.tag]: product
       }
   }
   cartItems[product.tag].inCart += 1;
  } else{
    product.inCart =  1;
    cartItems ={
      [product.tag]: product
    }
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
 }

 function totalCost(product){
   let cartCost = localStorage.getItem('totalCost');
   if(cartCost != null){
     cartCost =parseInt(cartCost);
     localStorage.setItem("totalCost" , cartCost + parseInt(product.price))
   }else{
    localStorage.setItem("totalCost" ,  parseInt(product.price))
   }
 }


