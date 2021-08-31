let cartItems = JSON.parse(sessionStorage.getItem('cart')) || {};
let totalItems;
let totalCost; 
function showMiniCart(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("minicart").style.display = "block";
    document.querySelector(".header").style.position = "static";
}
function hideMiniCart(){
    document.getElementById("minicart").style.display = "none";
    document.querySelector(".header").style.position = "sticky";
}
function addToCart(e){
    const productId = e.currentTarget.dataset.id;
    let addToCartPromise = fetchData(PATHS.ADD_TO_CART, 'POST', {productId: productId});
    addToCartPromise.then((res) => {
        storeCartItems(productId);
    });
}
function storeCartItems(id){
    // Check if product already exists
    if(!cartItems[id]){
        let product = allProducts.find(function(item){
            return item.id === id;
        });
        product && updateCartItems(product, id);
    } else {
        updateCartItems(cartItems[id], id)
    }
}
function updateCartItems(product, id, operation=null){
    product = {
        ...product,
        quantity: !operation ? product['quantity'] + 1 || 1 : operation === '+' ? product['quantity'] + 1 : product['quantity'] - 1
    }
    if(product.quantity > 0){
        product['totalCost'] = product['quantity'] * product['price'];
        cartItems[id] = product;
    } else{
        delete cartItems[id];
    }
    sessionStorage.setItem('cart', JSON.stringify(cartItems))
    totalItemsAndCost(operation);
}
function totalItemsAndCost(operation){
    totalItems = 0;
    totalCost = 0;

    if(!operation) document.querySelector(".minicart__content").innerHTML = "";
    Object.keys(cartItems).forEach(ele => {
        totalItems += cartItems[ele]['quantity'];
        totalCost += cartItems[ele]['totalCost'];
        !operation && createMinicart(cartItems[ele]);
    });
    //update header + minicart
    document.querySelector(".link__bottom__tItems span").innerHTML = `${totalItems} items`;
    document.querySelector(".minicart__header label").innerHTML = `My cart(${totalItems}item/s)`;
    document.querySelector(".minicart__footer button").innerHTML = `Proceed to checkout Rs. ${totalCost}`;
}
function createMinicart(cartObj){
    let minicartItem = document.createElement("div");
    minicartItem.setAttribute("class", "minicart__item");
    minicartItem.setAttribute("data-id", `${cartObj.id}`);
    let minicartItemDetails = document.createElement("div");
    minicartItemDetails.setAttribute("class", "minicart__item__details");

    let productImg = document.createElement("img");
    productImg.setAttribute("src", cartObj.imageURL);
    productImg.setAttribute("alt", cartObj.name);
    productImg.setAttribute("height", "75px");

    minicartItemDetails.append(productImg);

    let minicartItemDesc = document.createElement("div");
    let productTitle = document.createElement("h5");
    productTitle.setAttribute("class", "minicart__item__name");
    productTitle.innerHTML = cartObj.name;
    minicartItemDesc.append(productTitle);

    let minicartItemQuantityDetails = document.createElement("div");

    let decreaseBtn = document.createElement("button");
    decreaseBtn.setAttribute("class", "btn btn-primary btn-round");
    decreaseBtn.addEventListener("click", function(){
        updateQuantity(cartObj.id, '-')
    });
    decreaseBtn.setAttribute("data-id", `${cartObj.id}`);
    decreaseBtn.innerHTML = "-";
    minicartItemQuantityDetails.append(decreaseBtn);

    let itemQuantity = document.createElement("span");
    itemQuantity.setAttribute("class", "minicart__item__tQut");
    itemQuantity.innerHTML = `${cartObj.quantity}`;
    minicartItemQuantityDetails.append(itemQuantity);

    let increaseBtn = document.createElement("button");
    increaseBtn.setAttribute("class", "btn btn-primary btn-round");
    increaseBtn.addEventListener("click", function(){
        updateQuantity(cartObj.id, '+')
    });
    increaseBtn.setAttribute("data-id", `${cartObj.id}`);
    increaseBtn.innerHTML = "+";
    minicartItemQuantityDetails.append(increaseBtn);

    let unitPrice = document.createElement("span");
    unitPrice.setAttribute("class", "minicart__item__unitP");
    unitPrice.innerHTML = `X Rs. ${cartObj.price}`;
    minicartItemQuantityDetails.append(unitPrice);

    minicartItemDesc.append(minicartItemQuantityDetails);

    minicartItemDetails.append(minicartItemDesc)

    let totalItemPrice = document.createElement("div");
    totalItemPrice.setAttribute("class", "minicart__item__tPrice");
    totalItemPrice.innerHTML = `Rs.${cartObj.totalCost}`;
    
    minicartItem.append(minicartItemDetails);
    minicartItem.append(totalItemPrice);

    document.querySelector(".minicart__content").append(minicartItem);
}
function updateQuantity(id, operation){
    updateCartItems(cartItems[id], id, operation);
    if(cartItems[id]){
        document.querySelector(`.minicart__item[data-id="${id}"] .minicart__item__tPrice`).innerHTML = `${cartItems[id].totalCost}`;
        document.querySelector(`.minicart__item[data-id="${id}"] .minicart__item__tQut`).innerHTML = `${cartItems[id].quantity}`;
    } else{
        document.querySelector(`.minicart__item[data-id="${id}"]`).remove();
    }
}