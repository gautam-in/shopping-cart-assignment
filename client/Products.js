let cart=[];
if(localStorage["cart"]){
  cart=JSON.parse(localStorage["cart"]);
}

function fetchCategory(){
    return fetch('http://localhost:5000/categories')
    .then(response =>{
        if (response.ok) {
            return response.json();
          } else {
            throw new Error("Resource not found !");
          }
    });

  }

async function getCatgoryList(){
    categories =await fetchCategory();
    categories = Array.from(categories).filter(category => category.name != 'Seafood');
  
    let categoryList = document.getElementById("categoryList");
    let categoryDropdown = document.getElementById("categoryDropdown");

  
  for(let category of categories){
  
    let categoryItem = document.createElement('li');
    categoryItem.innerText=category.name;
    categoryItem.setAttribute("id",category.id);
    categoryItem.addEventListener('click',onCategorySelect);

    let horizontalLine=document.createElement('hr');
    horizontalLine.setAttribute('class','category-separator')
    categoryList.appendChild(categoryItem);
    categoryList.appendChild(horizontalLine);

    categoryDropdownItem=document.createElement('option');
    categoryDropdownItem.innerText=category.name;
    categoryDropdownItem.setAttribute('value',category.id);
    categoryDropdown.appendChild(categoryDropdownItem);
  
  }
  

  categoryDropdown.addEventListener('change',onCategorySelect);

 
 
  }

  function onCategorySelect(e){
   let categoryId;
   
    if(!e.x){
  let categoryDropdown = document.getElementById("categoryDropdown");
    console.log(categoryDropdown.value);
    categoryId=categoryDropdown.value;
    }
    else{
      categoryId=e.srcElement.id;
    }
    
    localStorage.setItem('selectedCategory',categoryId);
    
    generateProducts();

  }

  function showDropdown(){

  }


function fetchProducts(){
    return fetch('http://localhost:5000/products')
    .then(response =>{
        if (response.ok) {
            return response.json();
          } else {
            throw new Error("Resource not found !");
          }
    });

  }

async function fetchProductsDetails() {
   
   allProducts =await fetchProducts();
   generateProducts();
    
  }

  function generateProducts(){
    let listOfProducts=allProducts;
    if(localStorage["selectedCategory"]){
      selectCategory = localStorage.getItem('selectedCategory');
      listOfProducts=Array.from(allProducts).filter(item => item.category == selectCategory );
    }

    localStorage.removeItem('selectedCategory');

    var products= document.getElementById('products');
    products.innerHTML='';
    for(let product of listOfProducts){

      
     
        let productContainer=document.createElement('section');
        productContainer.setAttribute('class','productContainer');

        let productTitle = document.createElement('h2');
        productTitle.innerText=product.name;
        productTitle.setAttribute('class','productTitle');

        let productInfo = document.createElement('div');
        productInfo.setAttribute('class','productInfo');

        let productImg= document.createElement('img');
        productImg.setAttribute('src',product.imageURL);
        productImg.setAttribute('alt',product.name);
        productImg.setAttribute('class','productImg');

        let productDetails = document.createElement('div');
        productDetails.setAttribute('class','productDetails');

        let productDescription = document.createElement('p');
        productDescription.innerText= product.description;
        productDescription.setAttribute('class','productDescription');

        let productPriceDetails = document.createElement('div');
        productPriceDetails.setAttribute('class','productPriceDetails');

        let productPrice = document.createElement('p');
        productPrice.innerText= 'Rs.'+product.price;
        productPrice.setAttribute('class','productPrice');

        let productButton= document.createElement('button');
        productButton.innerText='Buy Now';
        productButton.setAttribute('class','productButton');
        productButton.addEventListener('click',function(){
          addToCart(product);
        });


        productContainer.appendChild(productTitle);
        productInfo.appendChild(productImg);
        
        // productContainer.appendChild(productImg);
        // productContainer.appendChild(productDescription);
        
        productPriceDetails.appendChild(productPrice);
        productPriceDetails.appendChild(productButton);

        productDetails.appendChild(productDescription);
        productDetails.appendChild(productPriceDetails);
        productInfo.appendChild(productDetails);

        productContainer.appendChild(productInfo);


        products.appendChild(productContainer);
        
    }
  }

  function removeChildNodes(){

  }

  function addToCart(product){

    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    cartButton=document.getElementById("cart");
    cartButton.innerHTML='<i class="fa fa-shopping-cart" aria-hidden="true"></i>'+ JSON.parse(localStorage.getItem('cart')).length + " Items";
    console.log(cart);


  }

  fetchProductsDetails();

