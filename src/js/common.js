var requestUrl = "http://localhost:3000/",
    selectedCategories = [],
    cartItems = {};

function setHeaderElement() {
    var pictureLogo = document.createElement("picture");
    var pictureLogoImg = document.createElement("img");
    var pictureLogoSource = document.createElement("source");

    pictureLogoSource.setAttribute("media", "(min-width:992px)");
    pictureLogoSource.setAttribute("srcset", "../static/images/logo_2x.png");
    pictureLogo.appendChild(pictureLogoSource);

    pictureLogoImg.setAttribute("src", "../static/images/logo.png");
    pictureLogoImg.setAttribute("alt", "brand-logo-image-desktop");
    pictureLogo.appendChild(pictureLogoImg);

    var imageCart = document.createElement("img");
    imageCart.setAttribute("src", "../static/images/cart.svg");
    imageCart.setAttribute("alt", "cart-image");
    imageCart.setAttribute("onclick", "showCart()");

    var cartItems = document.createElement("h4");
    cartItems.innerText = "0 items";

    document.querySelector(".logo").appendChild(pictureLogo);
    document.querySelector(".cart").appendChild(imageCart);
    document.querySelector(".cart").appendChild(cartItems);
}
function closeCart() {
    document.querySelector("section.modal-section").style.display = "none";
}
function showCart() {
    var totalItems = 0;
    var cartTotal = 0;
    Object.keys(cartItems).forEach((item) => {
        totalItems += cartItems[item].count;
        cartTotal = cartTotal + cartItems[item].count * cartItems[item].price;
    });
    document.querySelector("section.modal-section").style.display = "block";

    var cartModal = document.querySelector("section.cart-modal");
    cartModal.innerHTML = "";

    var cartHeader = document.createElement("div");
    cartHeader.setAttribute("class", "cart-header");

    var cartBody = document.createElement("div");
    cartBody.setAttribute("class", "cart-body");

    var cartFooter = document.createElement("div");
    cartFooter.setAttribute("class", "cart-footer");

    if (Object.keys(cartItems).length > 0) {
        //Cart has items
        document.querySelector(".cart>h4").innerText = totalItems + " items";

        var cartHeaderText = document.createElement("h4");
        cartHeaderText.innerText = "My Cart " + "(" + totalItems + " items)";

        var closeCartBtn = document.createElement("span");
        closeCartBtn.setAttribute("class", "cart-close-btn");
        closeCartBtn.setAttribute("onclick", "closeCart()");
        closeCartBtn.innerText = "X";

        cartHeader.appendChild(cartHeaderText);
        cartHeader.appendChild(closeCartBtn);

        //showing items in the cart
        Object.keys(cartItems).forEach((item) => {
            if (cartItems[item].count !== 0) {
                var cartBodyItem = document.createElement("div");
                cartBodyItem.setAttribute("class", "cart-body-item");
                cartBody.appendChild(createCartBodyItems(cartBodyItem, JSON.stringify({ ...cartItems[item], id: item })));
            }
        });

        var lowestPriceBanner = document.createElement("div");
        lowestPriceBanner.setAttribute("class", "lowest-price-banner");

        var bannerImg = document.createElement("img");
        bannerImg.setAttribute("src", ".." + "/static/images/lowest-price.png");
        bannerImg.setAttribute("alt", "banner-img");

        var bannerMsg = document.createElement("p");
        bannerMsg.innerText = "You won't find it cheaper anywhere";

        lowestPriceBanner.appendChild(bannerImg);
        lowestPriceBanner.appendChild(bannerMsg);
        cartBody.appendChild(lowestPriceBanner);

        var promoCodeMsg = document.createElement("p");
        promoCodeMsg.innerText = "Promo code can be applied on payment page";

        var checkoutBtn = document.createElement("div");
        checkoutBtn.setAttribute("class", "cart-checkout-btn");
        checkoutBtn.setAttribute("onclick", "closeCart()");

        var proceedToChk = document.createElement("span");
        proceedToChk.innerText = "Proceed to Checkout";

        var cartTotalSpan = document.createElement("span");
        cartTotalSpan.innerText = "Rs." + cartTotal + " >";

        checkoutBtn.appendChild(proceedToChk);
        checkoutBtn.appendChild(cartTotalSpan);
        cartFooter.appendChild(promoCodeMsg);
        cartFooter.appendChild(checkoutBtn);

        cartModal.appendChild(cartHeader);
        cartModal.appendChild(cartBody);
        cartModal.appendChild(cartFooter);
    } else {
        //Empty cart
        document.querySelector(".cart>h4").innerText = totalItems + " items";

        var cartHeaderText = document.createElement("h4");
        cartHeaderText.innerText = "My Cart";

        var closeCartBtn = document.createElement("span");
        closeCartBtn.setAttribute("class", "cart-close-btn");
        closeCartBtn.setAttribute("onclick", "closeCart()");
        closeCartBtn.innerText = "X";

        cartHeader.appendChild(cartHeaderText);
        cartHeader.appendChild(closeCartBtn);

        var emptyCartBody = document.createElement("div");
        emptyCartBody.setAttribute("class", "cart-empty-body");

        var emptyCartMsgHead = document.createElement("h3");
        emptyCartMsgHead.innerText = "No items in your cart";

        var emptyCartMsgText = document.createElement("h5");
        emptyCartMsgText.innerText = "Your favourite items are just a click away";

        emptyCartBody.appendChild(emptyCartMsgHead);
        emptyCartBody.appendChild(emptyCartMsgText);
        cartBody.appendChild(emptyCartBody);

        var checkoutBtn = document.createElement("div");
        checkoutBtn.setAttribute("class", "cart-checkout-btn");
        checkoutBtn.setAttribute("onclick", "closeCart()");

        var startShopping = document.createElement("span");
        startShopping.setAttribute("class", "empty-cart-span");
        startShopping.innerText = "Start Shopping";

        checkoutBtn.appendChild(startShopping);
        cartFooter.appendChild(checkoutBtn);

        cartModal.appendChild(cartHeader);
        cartModal.appendChild(cartBody);
        cartModal.appendChild(cartFooter);
    }
}

function createCartBodyItems(element, detailsString) {
    var { imageURL, title, price, count } = JSON.parse(detailsString);
    var cartItemImageDiv = document.createElement("div");
    cartItemImageDiv.setAttribute("class", "cart-body-item-image");

    var cartImg = document.createElement("img");
    cartImg.setAttribute("src", ".." + imageURL);
    cartImg.setAttribute("alt", title + "-img");
    cartItemImageDiv.appendChild(cartImg);

    var cartItemTitle = document.createElement("h4");
    cartItemTitle.innerText = title;

    var decBtn = document.createElement("button");
    decBtn.setAttribute("onclick", "decreaseCart(" + detailsString + ")");
    decBtn.innerText = "-";

    var incBtn = document.createElement("button");
    incBtn.setAttribute("onclick", "increaseCart(" + detailsString + ")");
    incBtn.innerText = "+";

    var noOfItems = document.createElement("p");
    noOfItems.innerText = count;

    var xBtn = document.createElement("p");
    xBtn.innerText = "X";

    var itemPrice = document.createElement("p");
    itemPrice.innerText = "Rs. " + price;

    var totalItemPrice = document.createElement("p");
    var total = price * count;
    totalItemPrice.innerText = "Rs. " + total;

    element.appendChild(cartItemImageDiv);
    element.appendChild(cartItemTitle);
    element.appendChild(decBtn);
    element.appendChild(noOfItems);
    element.appendChild(incBtn);
    element.appendChild(xBtn);
    element.appendChild(itemPrice);
    element.appendChild(totalItemPrice);

    return element;
}
function decreaseCart(detailsJSON) {
    var { id } = detailsJSON;
    cartItems[id].count -= 1;
    if (cartItems[id].count === 0) {
        delete cartItems[id];
    }
    showCart();
}
function increaseCart(detailsJSON) {
    var { id } = detailsJSON;
    cartItems[id].count += 1;
    showCart();
}

//If any clicks happen outside the opened modal then close the modal
document.addEventListener("click", (e) => {
    if (e.target === document.querySelector(".modal-section")) closeCart();
});

//for accessibility
[...document.querySelectorAll("nav")].forEach((item) => {
    item.setAttribute("aria-label", "main navigation");
});
[...document.querySelectorAll("nav a")].forEach((item) => {
    item.setAttribute("role", "menuitem");
    item.setAttribute("aria-haspopup", "false");
    item.setAttribute("aria-expanded", "false");
});
