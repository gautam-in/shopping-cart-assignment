import {domain_port,network} from '../../service/service.js';
(() => {
 
  const gridEl = document.querySelector("#grid-container");
  const userId = sessionStorage.getItem('userId');

  const extractQueryParam = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get("category");
    return categoryId;
  };

  //Filter product based on product id
  const filterProduct = (products, id = null) => {
    return products.filter(
      (product) =>
        product.category ===
        (id || extractQueryParam() || "5b6899953d1a866534f516e2")
    );
  };

  //Create product List
  const createProductList = async (id = null) => {
    //call products from API call
    const products = await network('/products',{method:'GET'});
    if (Array.isArray(products) && products.length > 0) {
      //Filter products based on product id
      const filterProducts = filterProduct(products, id);
      if (Array.isArray(filterProducts) && filterProducts.length > 0) {
        while (gridEl.lastElementChild) {
          gridEl.removeChild(gridEl.lastElementChild);
        }
        //create items in product list
        createGridItems(filterProducts);
      }
    }else{
      //TODO: Handle No product available on the screen
    }
  };

  //create product in a list
  const createGridItems = (fruits) => {
    for (const fruit in fruits) {
      const gridElChildEl = document.createElement("div");
      gridElChildEl.setAttribute(
        "class",
        "content-grid-container-grid-child-el"
      );
      gridElChildEl.innerHTML = `
      <div class="container">
      <h5 class="container-heading">
         ${fruits[fruit].name}
      </h5>
      <img class="container-product-image" loading="lazy"
      src = ${domain_port}${fruits[fruit].imageURL} alt = ${(fruits[fruit].name)}/>
      <article class="container-article">${(fruits[fruit].description)}</article>
      <div class="container-price">
        <button class="buy-now">Buy Now @ Rs.${fruits[fruit].price}</button>
      </div>
   </div>
            `;
      createBuyBtnHandler(gridElChildEl,fruits[fruit]);
      gridEl.appendChild(gridElChildEl);
    }
    return gridEl;
  };

  const createBuyBtnHandler = (gridElChildEl,fruit)=>{
    gridElChildEl.onclick = ()=> buyClickHandler(fruit);
  };

  //Update cart Item in cart.js
  const updateCart = ()=>{
    var event = new CustomEvent("update-cart");
    document.dispatchEvent(event);
  };

  //add Item to cart and Update it.
  const buyClickHandler = async(fruit)=>{
    try {
      const response = await addItemToCart(fruit);
      if(response){
        console.log(response);
        updateCart();
        const cartResponse  = await network(`/cart?userId=${userId}`,{method:'GET'});
        if(cartResponse){
          updateHeader(cartResponse.products.length); 
        }else{
          //TODO: Error Handling if not able to get the cart details
        }
      }else{
        //TODO: Error Handling if error while adding item into cart
      }
    } catch (error) {
      if(error.message == '401'){
        alert("User Need to sign in before adding product to cart");
      }
    } 
  };
  //add item to cart with network call
  const addItemToCart = async (fruit) => {
    let options = {
      method:'POST',
      data:{
        userId:userId,
        product:{
          productId:fruit.id,
          productImg:fruit.imageURL,
          stock:fruit.stock,
          quantity:1,
          name:fruit.name,
          price:fruit.price
        }
      }
    };
    return await network(`/addToCart`,options);
  };

  //create nav Item in navList
  const createNavItem = (category)=>{
    const navBtn = document.createElement("button");
    navBtn.setAttribute("id", `btn-${category.id}`);
    return navBtn;
  };

  //Create Side Navigation
  const createNavBtn = async () => {
    const sideNavContainer = document.querySelector(".aside-container");
    //Get category from api
    let categories = await network('/categories',{method:'GET'});
    //sort category based on order in api
    categories = categories.sort((a, b) => a.order - b.order);
    for (let category in categories) {
      if (categories[category].enabled) {
          //create item in navigation list
          // const navBtn = createNavItem(categories[category]);
          // navBtn.textContent = categories[category].name;
          // navBtn.onclick = () => recreateProductList(categories, categories[category]);
          let navBtn = createNavItemBtn(categories,category);
          sideNavContainer.appendChild(navBtn);
      }
    }
    markNavItemActive();
  };

  //create side navItemBtn
  const createNavItemBtn = (categories,category)=>{
    const navBtn = createNavItem(categories[category]);
    navBtn.textContent = categories[category].name;
    navBtn.onclick = () => recreateProductList(categories, categories[category]);
    return navBtn;
  };

  // Re populate the product list when user do category navigation
  const recreateProductList = (categories,category)=>{
    clearNavBtn(categories, category.id);
    markNavItemActive(category.id); //side navigation item id
    createProductList(category.id);
  };

  // Mark the nav item as active when user visited
  const markNavItemActive = (id = null) => {
    const categoryId = id || extractQueryParam() || "5b6899953d1a866534f516e2";
    const btnEl = document.querySelector(`#btn-${categoryId}`);
    btnEl.classList.add("active");
  };

   // Remove the nav item as active when user visited
  const clearNavBtn = (categories, categoryId) => {
    let btnEl;
    categories.forEach(async (category) => {
      if (category.id != categoryId) {
        btnEl = await document.querySelector(`#btn-${category.id}`);
        if (btnEl && btnEl.classList.value === "active") {
             btnEl.classList.remove("active");
        }
      } else {
        btnEl = await document.querySelector(`#btn-${category.id}`);
        btnEl.classList.add("active");
      }
    });
  };
  
  //Update the total cart items in headerUI.js
  const updateHeader = (totalCartItems)=>{
    var event = new CustomEvent("update-header", {"detail":totalCartItems});
    document.dispatchEvent(event);
  };

  createNavBtn();
  createProductList();

})();
