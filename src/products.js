import "./products.scss";
import html from "./products.html";
import prod0 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod1 from "/static/images/products/fruit-n-veg/apple.jpg"
import prod2 from "/static/images/products/fruit-n-veg/pomegrante.jpg"
import prod3 from "/static/images/products/fruit-n-veg/capsicum-green.jpg"
import prod4 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod5 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod6 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod7 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod8 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod9 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod10 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod11 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod12 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod13 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod14 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod15 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod16 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod17 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod18 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod19 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod20 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod21 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod22 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod23 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod24 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"
import prod25 from "/static/images/products/fruit-n-veg/kiwi-green.jpg"

let productImageList = [
  prod0,prod1,prod2,prod3,prod4,prod5,prod6,prod7,prod8,prod9,prod10,
  prod11,prod12,prod13,prod14,prod15,prod16,prod17,prod18,prod19,prod20,
  prod21,prod22,prod23,prod24,prod25]

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
fetch('http://localhost:5000/products').then((res) => res.json()).then((resp) => console.log(resp))
function getFromAPI(url, callback) {
  var obj;
  fetch(url)
    .then(res => res.json())
    .then(data => obj = data)
    .then(() => callback(obj))
}

getFromAPI('http://localhost:5000/products', getData);

function getData(arrOfObjs) {

  arrOfObjs.forEach((x, ind) => {
    // var img = document.createElement('img');
    // img.src = ".."+x.imageURL;
    // console.log(".." + x.imageURL)
    // document.querySelector('.products').appendChild(img);
   // let myListFetch = document.getElementById('prod').innerHTML
   
    prodList.innerHTML += ` <div class="product-card">
        <div class="product-info">
          <h5>${x.name}</h5>
          <div class="product-image">
          <img src=${productImageList[ind]} alt=${x.name}>
          </div>
          <h6>MRP Rs ${x.price}</h6>
          <p>${x.description}</p>
         
          <button id="cart-button" onclick="addToCart('${x.name}','${x.price}',${0},'${x.sku}')">Buy Now</button>
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


