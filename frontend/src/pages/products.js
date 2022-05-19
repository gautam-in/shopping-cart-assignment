const url= 'http://localhost:5000/'

let allProductsList = []
let allCategoryList = []
let productInsideCart = []
let cartBody = document.getElementById("cart-body")
let cartButton = document.getElementById("cart-button")
let totalPriceCheckout = document.getElementById("totol-price-proceed-to-checkout")

let backDrop = document.getElementById("backdrop")
let mainCategorySection = document.getElementById('main-category-items')

const fetchAllProducts = async ()=>{
    try {
        const response = await fetch(`${url}products`)
        allProductsList = await response.json()

        displayingProucts(allProductsList)
    } catch (error) {
        console.log(error)
    }
}

const fetchAllCattegories = async ()=>{
    try {
        const response = await fetch(`${url}categories`)
        allCategoryList = await response.json()
        console.log(allCategoryList)
        displayingCategories()
    }
    catch(error){
        console.log(error)
    }
}

const displayingProucts = data =>{

    if(data.length===0){
        mainCategorySection.innerHTML = `<h2>No Products Available for the following Category </h2>`
    }

    for (let i = 0; i < data.length; i++) {
        let productCard = document.createElement('div')
        productCard.setAttribute('class','product-card')

        let productTitle = document.createElement('p')
        productTitle.setAttribute("class","text-bold")

        productTitle.innerText = data[i].name
        productCard.appendChild(productTitle)

        // mainCategorySection.appendChild(productCard)

        let imageForMobile = document.createElement('div')
        imageForMobile.setAttribute("class","flex-on-mobile")

        let imageOfProduct = document.createElement("img")
        imageOfProduct.src = data[i].imageURL

        imageForMobile.appendChild(imageOfProduct)

        let descriptionOfProduct = document.createElement("div")
        descriptionOfProduct.setAttribute("class","product-desription")
        let paraofProductDescription = document.createElement("div")
        paraofProductDescription.innerText = data[i].description

        descriptionOfProduct.appendChild(paraofProductDescription)
        productCard.appendChild(descriptionOfProduct)
        imageForMobile.appendChild(descriptionOfProduct)

        productCard.appendChild(imageForMobile)

        let productButton = document.createElement("div")
        productButton.setAttribute("class","product-button-box")

        let button = document.createElement("button")
        button.onclick = ()=>addProductToCart(data[i])

        let priceOfProduct = document.createElement("p")
        priceOfProduct.innerText = `MRP Rs.${data[i].price}`
        button.innerText = "BUY NOW"

        productButton.appendChild(priceOfProduct)

        productButton.appendChild(button)

        productCard.appendChild(productButton)
        
        mainCategorySection.appendChild(productCard)
    }
}

const displayingCategories = ()=>{
    Array.from(document.getElementsByClassName("product-item")).forEach((item,index)=>{
        item.innerText = allCategoryList[index].name
        item.setAttribute("id",allCategoryList[index].id)
    })
}

const addProductToCart = product =>{
//    await  fetch(`${url}addToCart`,{
//         method:"POST",
//         body: JSON.stringify(product),
     
//     // Adding headers to the request
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
//     })
//     .then(response=>console.log(response.json))
    // .then(json=>console.log(json))
    document.getElementById('cart').classList.replace("d-none","d-block")
    console.log("Called Via Button")
    console.log(product.price)
     productInsideCart = [...productInsideCart, product]
     console.log(productInsideCart.price)
    showItemsInCart(product)

    localStorage.setItem('cart-items', JSON.stringify(productInsideCart));
}

const showItemsInCart = product =>{
    document.getElementById("no-of-items-in-cart2").innerText = productInsideCart.length
    

    let boxForItem = document.createElement('div')
    boxForItem.setAttribute("class","item-box");
    boxForItem.setAttribute("id",product.id)

    let imageOfItem =document.createElement("img")
    imageOfItem.src = product.imageURL;

    boxForItem.appendChild(imageOfItem)

    let titleOfBox = document.createElement("div")
    titleOfBox.setAttribute("class","title-box")

    let titleOfItem = document.createElement("p");
  titleOfItem.setAttribute("class", "text-bold cart-item-title");
  titleOfItem.innerText = product.name;
  titleOfBox.appendChild(titleOfItem);

  let price = document.createElement("div");
  price.setAttribute("class", "price-box");
  let itemPrice = document.createElement("span");

  let count = 1;
  itemPrice.innerHTML = `<span class='s-btn dec' onclick='decrementCartItems(event)'>-</span> <span>${count}</span> <span class='s-btn inc' onclick="incrementCartItems(event)">+</span> X Rs.<span>${product.price}</span>`;
  price.appendChild(itemPrice);

  let totalPriceOfCart = document.createElement("p");
  let total = document.createElement("span");
  total.setAttribute('class', 'all-product-price');
  total.innerText = `Rs.${product.price}`;
  totalPriceOfCart.appendChild(total);


  let trash = document.createElement('i');
  trash.setAttribute('class', 'fa-solid fa-trash');
  trash.onclick = () => removeItemFromCart(product.id);
  trash.setAttribute('title', 'Remove this item from Cart');

  totalPriceOfCart.appendChild(trash)
  price.appendChild(totalPriceOfCart);
  titleOfBox.appendChild(price);

  boxForItem.appendChild(titleOfBox);

  cartBody.appendChild(boxForItem);
  console.log(cartBody)

  let subTotal = 0;
    if (Array.from(document.getElementsByClassName('all-product-price')).length == 0) {
      subTotal = subTotal + parseInt(document.getElementsByClassName('all-product-price').innerText.substr(3));
    console.log("Price", document.getElementsByClassName('all-product-price').innerText)
    }  else {
        Array.from(document.getElementsByClassName('all-product-price')).forEach(item => {
          subTotal = subTotal + parseInt(item.innerText.substr(3));
        })
      }
    totalPriceCheckout.innerText = subTotal
}

cartButton.addEventListener("click", () => {
  document.getElementById("cart").classList.replace("d-none", "d-block");
  showBackdrop();
  if (productInsideCart.length === 0) {
    cartBody.innerHTML = `<div class="empty-cart"><h3>No items in your cart</h3><p class="text-sm">Your favourite items are just a click away</p></div>`;
   } 
// else {
//     if (cartBody.children.length != productInsideCart.length) {
//       document(".empty-cart").remove();
//     }

    let price = 0;
    productInsideCart.forEach((product) => {
      price += product.price;
    });

    
    totalPriceCheckout.innerText = price;
  }
);

const closeCart = ()=>{
    document.getElementById('cart').classList.replace("d-block","d-none")
}

function showBackdrop() {
    backDrop.classList.replace("d-none", "d-block");
  }

  removeItemFromCart = (id) =>{
    productInsideCart = productInsideCart.filter(item => item.id != id);
    document.getElementById(id).remove();
  
    
    document.getElementById("no-of-items-in-cart2").innerText = productInsideCart.length;
    
  
    if (localStorage.getItem('cart-items')) {
      localStorage.setItem('cart-items', JSON.stringify(productInsideCart));
    }
  
    let subTotal = 0;
    if (Array.from(document.getElementsByClassName('all-product-price')).length == 0) {
      subTotal = subTotal - parseInt(document.getElementsByClassName('all-product-price').innerText.substr(3));
    console.log("Price", document.getElementsByClassName('all-product-price').innerText)
    } else {
      Array.from(document.getElementsByClassName('all-product-price')).forEach(item => {
        subTotal = subTotal - parseInt(item.innerText.substr(3));
      })
    }
  

    totalPriceCheckout.innerText = subTotal;
  }

  const incrementCartItems = e=>{
    let pNode = e.target.parentNode;
  let countNode = pNode.children[1];
  let price = parseInt(pNode.children[3].innerText);
  let count = parseInt(pNode.children[1].innerText);

  let result = pNode.parentNode.children[1];
  let initialPrice = parseInt(result.children[0].innerText.substr(3));

  countNode.innerText = count + 1;
  result.children[0].innerText = `Rs. ${parseInt(countNode.innerText) * price}`;

  let subTotal = 0;
  let allProductPriceArray = document.getElementsByClassName('all-product-price');
  if (Array.from(allProductPriceArray).length == 0) {
    subTotal = subTotal + parseInt(document.getElementsByClassName('all-product-price').innerHTML.substr(3));
  } else {
    Array.from(document.getElementsByClassName('all-product-price')).forEach(item => {
      subTotal = subTotal + parseInt(item.innerText.substr(3));
    })
  }

  totalPriceCheckout.innerText = subTotal;


  }

  const decrementCartItems = e => {
    let pNode = e.target.parentNode;

    if (parseInt(pNode.children[1].innerText) > 1) {
      let pNode = e.target.parentNode;
      let countNode = pNode.children[1];
      let price = parseInt(pNode.children[3].innerText)
      let count = parseInt(pNode.children[1].innerText);
  
      let result = pNode.parentNode.children[1];
      let initialPrice = parseInt(result.children[0].innerText.substr(3));
  

      countNode.innerText = count - 1;
      result.children[0].innerText = `Rs. ${initialPrice - price}`;
  
      let subTotal = 0;
      let allProductPriceArray = document.getElementsByClassName('all-product-price');
      if (Array.from(allProductPriceArray).length == 0) {
        subTotal = subTotal + parseInt(document.getElementsByClassName('all-product-price').innerText.substr(3));
      } else {
        Array.from(document.getElementsByClassName('all-product-price')).forEach(item => {
          subTotal = subTotal + parseInt(item.innerText.substr(3));
        })
      }
  

      totalPriceCheckout.innerText = subTotal;
    }
  }

  Array.from(document.getElementsByClassName("product-item")).forEach((item, index) => {
    let selectedProduct;
    item.addEventListener("click", (e) => {
      selectedProduct = allProductsList.filter(
        (product) => product.category == e.target.id
      );
  
      mainCategorySection.innerHTML = "";
      displayingProucts(selectedProduct);
    });
  });

const onLoad = ()=>{
    fetchAllProducts()
    fetchAllCattegories()
    if (localStorage.getItem('cart-items')) {
        let carts = JSON.parse((localStorage.getItem('cart-items')));
        productInsideCart = carts;
        carts.forEach(cart => {
          showItemsInCart(cart);
        })
      }
}

onLoad()