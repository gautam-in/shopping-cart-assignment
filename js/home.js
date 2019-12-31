var slideIndex = 1;
var selectedCategory;
let categoryId,prevId;
var itemCount =0;
var itemList = [];
var itemsinCart =[];
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
setTimeout(function(){
  //showSlides(1);
})

function selectCategory(id){
  categoryId = id;
  let prevUrl =window.location.href.split("/");
  let prevId = prevUrl[prevUrl.length -1];
  let diffUrl = categoryId !== prevId;
  window.location.href = diffUrl? `/plp/${id}`:'/plp';

}

function buy(id, operation) {
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
      itemCount++;
      document.getElementById("cartNumber").innerHTML=`${itemCount} items`;
      localStorage.setItem("itemCount",itemCount);
      if(!itemList.length){
         itemList.push({'qty':1,'id':id});
       } else {
         itemList.forEach((item, i) => { 
          if (item.id == id) {
            item.qty+=1;
          }else {
            itemList.push({'qty':1,'id':id});
          }
        });
       }
     
      localStorage.setItem("itemList",JSON.stringify(itemList));
    }
  });
 
}
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     var data =eval('('+this.responseText+')');
     localStorage.setItem("products",JSON.stringify(data));
  }
};
xmlhttp.open("GET", "../server/products/index.get.json", true);
xmlhttp.send();

function increment(event,flag){
  let id =event.classList[1].split("-")[1]
  const index =itemsinCart.findIndex(item=>item.id ==id);
  itemsinCart[index].qty=flag?itemsinCart[index].qty+1:itemsinCart[index].qty-1;
  document.getElementById(`item-price-${id}`).innerHTML = itemsinCart[index].qty;
  document.getElementById(`item-total-${id}`).innerHTML = `Rs.${itemsinCart[index].qty* itemsinCart[index].price}`;
  calcSum();
}

function calcSum(){
let totalprice = itemsinCart.reduce((sum,x)=>{
    sum = sum+x.qty*x.price;
    return sum;    
},0)
 document.getElementById(`totalprice`).innerHTML = `Rs.${totalprice}&nbsp;&nbsp;>`;

}
function showCart(){
  
  let itemList =JSON.parse(localStorage.getItem("itemList"));
   let products =JSON.parse(localStorage.getItem("products"));
   itemList.forEach(item=>{
    let product =products.find(product=>product.id == item.id);
      product.qty = item.qty;
    itemsinCart.push(product);
   });
   let html='';
   console.log(itemsinCart);
   for(let i=0;i<itemsinCart.length;i++) {
    let item = itemsinCart[i];
      html+=`<div class="row cart-item">
                <div class="col span-3-of-12"><img src="${itemsinCart[i].imageURL}"></div>
                <div class="col span-9-of-12">
                  <div class="label"> ${itemsinCart[i].name}</div>
                    <div class="row">
                      <div class="col span 1-of-2 qty-ctr">
                          <span class="dot id-${item.id}" id=${item.id} onclick="increment(event.target,true)">+</span>
                          <span class="item-price" id="item-price-${item.id}">${itemsinCart[i].qty}</span>
                          <span class="dot  id-${item.id}" onclick="dec(event.target,false)">-</span>
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
   calcSum();
   document.getElementsByClassName("parent-overlay")[0].style.display ='block';
    
   
}

function inc(ele){
 console.log(ele);
}
function dec(item){
item.qty-=1;
}
function closeCart(){
  document.getElementsByClassName("parent-overlay")[0].style.display ='none';
}
// Using the location.hash property to change the anchor part
function changePart() {
  location.hash = "part5";
  var x = location.hash;
  document.getElementById("demo").innerHTML = "The anchor part is now: " + x;
}

window.onhashchange = myFunction;

function myFunction() {
  alert("The anchor part has changed!");
}