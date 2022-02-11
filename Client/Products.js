
  function FetchCategories() {
    return fetch("http://localhost:5000/categories").then((res) => {
     if (res.ok) {
           return res.json();

     } else {
       throw new Error("Something went wrong !");
     }
   })
 };

 function FetchProducts() {
  return fetch("http://localhost:5000/products").then((res) => {
   if (res.ok) {
         return res.json();

   } else {
     throw new Error("Something went wrong !");
   }
 })
};

 async function displayCategories() {
    let allCategories = await FetchCategories();
    for (const cat of allCategories) {
      CategoryListItem(cat);
    }
    displayProducts();
  }

  async function displayProducts() {

    let allProducts = await FetchProducts();
    for (const product of allProducts) {
      productListItem(product);
    }
    addingEventListener();
  }


document.addEventListener("DOMContentLoaded", displayCategories, true);


function   CategoryListItem(cat){
    let catItem = document.createElement("li");
    catItem.setAttribute("class","products-nav-item");
    catItem.innerHTML = `${cat.name}`;
    document.querySelector(".products-nav-list").appendChild(catItem);
}


function productListItem(product){
  let productItemCard=document.createElement("div");
  productItemCard.setAttribute("class","product-list-item");
  document.querySelector(".products-right-container").appendChild(productItemCard);

    let productTitle=document.createElement("h3");
    productTitle.setAttribute("class","product-list-title");
    productTitle.innerHTML=`${product.name}`;
    productItemCard.appendChild(productTitle);

    let productImage=document.createElement("img");
    productImage.setAttribute("alt",`${product.name}`);
    productImage.setAttribute("src",`..${product.imageURL}`);
    productItemCard.appendChild(productImage);

    let productDescription = document.createElement("div");
    productDescription.setAttribute("class","product-list-description");
    productDescription.innerHTML = `${product.description}`;
    productItemCard.appendChild(productDescription);

    let productItemFooter = document.createElement("div");
    productItemFooter.setAttribute("class","product-list-footer");
    productItemCard.appendChild(productItemFooter);

    let productItemPricetag = document.createElement("div");
    productItemPricetag.setAttribute("class","product-item-price-tag");
    productItemPricetag.innerHTML = `MRP Rs.${product.price}`;
    productItemFooter.appendChild(productItemPricetag);

    let productBuyButton = document.createElement("button");
    productBuyButton.setAttribute("class","product-item-buy-button");
    productBuyButton.setAttribute("price",product.price);
    productBuyButton.setAttribute("title",product.name);
    productBuyButton.setAttribute("image",product.imageURL);
    productBuyButton.innerHTML= `BUY NOW`;

    productItemFooter.appendChild(productBuyButton);

}


  const addingEventListener = (e) => {
   let listOfButtons = document.getElementsByClassName("product-item-buy-button");
    // console.log(listOfButtons.length);
   Array.from(listOfButtons).forEach(function(element) {
     element.addEventListener('click', function(event) {
       if(event.target === this){
        let price = event.target.getAttribute("price");
        let image = event.target.getAttribute("image");
        let title = event.target.getAttribute("title");
        addToModal(price, image, title);
       }
     }, false);
   });
}



function addToModal(price, image, title){
  let modal = document.getElementById("my-cart-modal");
  let modal_overlay = document.getElementById("modal-overlay");
  let modal_body = document.getElementById("modal-body");
  let modal_element_image = document.getElementById("modal-product-image");
  let modal_element_price = document.getElementById("modal-product-price");
  let modal_element_title = document.getElementById("modal-product-title");
  let modal_element_count = document.getElementById("modal-product-count");
  let modal_total_price1 = document.getElementById("modal-total-price1");
  let modal_total_price2 = document.getElementById("modal-total-price2");

  modal_element_price.innerText = price;
  modal_element_title.innerText = title;
  modal_element_count.innerText = 1;
  modal_element_image.setAttribute("src",image);
  modal_total_price1.innerText= `Rs.${price}`;
  modal_total_price2.innerText = `Rs.${price}`;;

  let plus_btn_modal = document.querySelector("#plus");
  plus_btn_modal.addEventListener("click",increment);

  let minus_btn_modal = document.querySelector(".minus");
  minus_btn_modal.addEventListener("click",decrement);


  toggleModal();

  let head_cart = document.getElementById("head-nav-cart-text");
  head_cart.innerText="1 Item";
}

document.getElementById("modal-overlay").addEventListener("click", function(){
  toggleModal();
})
document.getElementById("close-modal").addEventListener("click", function(){
  toggleModal();
})

function toggleModal(){
  var overlay = document.getElementById("modal-overlay"),
  modal = document.getElementById("my-cart-modal"),
  isModalOpen = modal.classList.contains('show');
  if(isModalOpen){
    overlay.classList.remove('show');
    modal.classList.remove('show');
    let head_cart = document.getElementById("head-nav-cart-text");
  head_cart.innerText="0 Item";
  document.querySelector('body').classList.remove("no-scroll")
}else{
  overlay.classList.add('show');
  modal.classList.add('show');
  document.querySelector('body').classList.add("no-scroll")
  }

}
function increment(){
  let modal_element_count = document.getElementById("modal-product-count");
  let modal_product_price = document.getElementById("modal-product-price");
  let modal_total_price1 = document.getElementById("modal-total-price1");
  let modal_total_price2 = document.getElementById("modal-total-price2");
  let  newcount = parseInt(modal_element_count.innerText)+1;
  let price =  parseInt(modal_product_price.innerText);
  modal_element_count.innerText = newcount;
  let newPrice= newcount * price
  modal_total_price1.innerText= `Rs.${newPrice}`;
  modal_total_price2.innerText= `Rs.${newPrice}`;
}

function decrement(){
  let modal_element_count = document.getElementById("modal-product-count");
  let modal_product_price = document.getElementById("modal-product-price");
  let modal_total_price1 = document.getElementById("modal-total-price1");
  let modal_total_price2 = document.getElementById("modal-total-price2");
  let newCount = 1
  let presentCount = parseInt(modal_element_count.innerText);
  if(presentCount == 1)
  {
    newCount = 1
  }
  else {
    newCount = parseInt(modal_element_count.innerText)-1;
  }

  let price = parseInt(modal_product_price.innerText);
  modal_element_count.innerText = newCount;
  let newPrice= price * newCount ;
  modal_total_price1.innerText= `Rs.${newPrice}`;
  modal_total_price2.innerText= `Rs.${newPrice}`;
}
