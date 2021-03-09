// Cart
let cartCount = 0;
updateCartCount(cartCount);

let cartItems = [];
let cartItemsMoreThanZero2;
document.querySelectorAll(".product-card button").forEach((el) => {
    cartItems.push({ [el.dataset.name]: 0 });
});

let spanElForCartItems = document.createElement("span");
document.querySelector(".modal-header h3").appendChild(spanElForCartItems);

// Get the modal
var modal = document.querySelector("#cartModal");

// Get the button that opens the modal
var btn = document.querySelector("#cartButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    onCartKeypressOrClick();
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
// On key press of the cart button
btn.parentElement.addEventListener("keypress", function (e) {
    let code;
    if (e.key !== undefined) {
        code = e.key;
    } else if (e.keyIdentifier !== undefined) {
        code = e.keyIdentifier;
    } else if (e.keyCode !== undefined) {
        code = e.keyCode;
    }
    if (code == 13 || code == "Enter") {
        //modal.style.display = "block";
        onCartKeypressOrClick();

    }
});
// On keypress of the close button in cart
span.addEventListener("keyup", function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (e.keyCode == 13) {
        modal.style.display = "none";
    }
});
// On click of Buy Button for products
if (document.querySelector(".product-list-row")) {
    document
        .querySelector(".product-list-row")
        .addEventListener("click", (event) => {
            // Step 2
            if (event.target.className.includes("product-card__buy--btn")) {
                // Step 3
                cartCount = cartCount + 1;
                updateCartCount(cartCount);
                let idx = cartItems.findIndex(
                    (el) => event.target.dataset.name == Object.keys(el)[0]
                );
                cartItems[idx][event.target.dataset.name] += 1;
                setPrice(event, event.target.dataset.name);
            }
        });
}
// Updating cart items count 
function updateCartCount(num) {
    if (num == 0 || num > 1) {
        document.querySelector(".nav__end-cart--count").innerText = `${num} items`;
    } else {
        document.querySelector(".nav__end-cart--count").innerText = `${num} item`;
    }
}
// Updating cart modal header count
function updateCartHeader(num) {
    if (num == 1) {
        document.querySelector(
            ".modal-header h3 span"
        ).innerText = `  ( ${num} item ) `;
    } else if (num > 1) {
        document.querySelector(
            ".modal-header h3 span"
        ).innerText = `  ( ${num} items ) `;
    } else {
        document.querySelector(".modal-header h3 span").innerText = `  `;
    }
}
// Displaying price for the cart item
function setPrice(event, label) {
    cartItemsMoreThanZero2 = cartItems.filter((el) => Object.values(el)[0] > 0);
    let idx = cartItemsMoreThanZero2.findIndex(
        (el) => label == Object.keys(el)[0]
    );
    cartItemsMoreThanZero2[idx].price =
        cartItemsMoreThanZero2[idx][label] *
        event.target.previousElementSibling.innerText.split("Rs.")[1];
    cartItemsMoreThanZero2[
        idx
    ].singleQtyPrice = event.target.previousElementSibling.innerText.split(
        "Rs."
    )[1];
    cartItemsMoreThanZero2[idx].imgSrc =
        event.target.parentElement.parentElement.parentElement.firstChild.src;
}

function setPriceForPlusAndMinus(
    plusOrMinus,
    cartItemsMoreThanZero2,
    event,
    label
) {
    let idx = cartItemsMoreThanZero2.findIndex(
        (el) => label == Object.keys(el)[0]
    );
    if (plusOrMinus == "plus") {
        cartItemsMoreThanZero2[idx].price =
            cartItemsMoreThanZero2[idx][label] *
            event.target.parentElement.nextElementSibling.nextElementSibling.innerText.split(
                "Rs."
            )[1];
    } else {
        cartItemsMoreThanZero2[idx].price =
            cartItemsMoreThanZero2[idx][label] *
            event.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText.split(
                "Rs."
            )[1];
    }
}

function refreshCartPrices(qty, pric, label) {
    let idx = cartItemsMoreThanZero2.findIndex(
        (el) => label == Object.keys(el)[0]
    );
    qty.innerText = cartItemsMoreThanZero2[idx][label];
    pric.innerText = `Rs. ${cartItemsMoreThanZero2[idx]["price"]}`;
}

function onCartKeypressOrClick() {
    let modalBody = document.querySelector(".modal-body");
    let lowestPriceDiv;
    modal.style.display = "block";
    document.querySelector(".nav__end-cart").blur();
    document.querySelector(".modal-content").focus();

    document.querySelector("span.close").setAttribute('tabindex', -1);
    //  Trap focus starts

    // add all the elements inside modal which you want to make focusable
    const focusableElements =
        '.modal, h3, h2, .modal-footer button, span.close';
    const focusableContent = Array.from(modal.querySelectorAll(focusableElements));
    const firstFocusableElement = focusableContent[0];
    const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

    document.addEventListener('keydown', function (e) {

        let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (e.key == 'Escape') {
            modal.style.display = "none";
            return;
        }
        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) { // if shift key pressed for shift + tab combination

            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus for the last focusable element
                e.preventDefault();
            }
        } else { // if tab key is pressed
            if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                document.querySelector("span.close").setAttribute('tabindex', 0);
                firstFocusableElement.focus(); // add focus for the first focusable element
                e.preventDefault();
            }
        }
    });

    firstFocusableElement.focus();
    // Trap focus ends

    if (cartCount > 0) {
        modalBody.classList.remove("emptyCart");
        updateCartHeader(cartCount);
        cartItemsMoreThanZero2 = cartItems.filter((el) => Object.values(el)[0] > 0);
        let listItems = "";
        if (document.querySelector(".modal-body h2")) {
            document.querySelector(".modal-body h2").remove();
        }
        cartItemsMoreThanZero2.forEach((el) => {
            listItems += `
            <li>
            <div> <img src="${el.imgSrc
                }" alt="Cart Item image" width="50" height="50"> </div>
            <div>
                <div>
                    <div tabindex="0">${Object.keys(el)[0]} </div>
                    <div>
                        <div  class="minus"> <a tabindex="0" aria-label ="Decrement quantity to ${Object.values(el)[0] - 1}" class="add">-</a> </div>
                        <span class="quantity"> ${Object.values(el)[0]}</span>
                        <div  class="plus"> <a tabindex="0" aria-label ="Increment quantity to ${Object.values(el)[0] + 1}"  class="add">+</a> </div>
                        <span class="close">&times;</span> <span tabindex="0" class="total-rs">Rs. ${el.singleQtyPrice
                }</span>
                    </div>
        
                </div>
                <div tabindex="0" >Rs. ${el.price} </div>
            </div>
        </li>
            `;
        });

        let sum = cartItemsMoreThanZero2.reduce((acc, el) => {
            acc += el.price;
            return acc;
        }, 0);
        listItems = "<ul>" + listItems + "</ul>";
        document.querySelector(".modal-body p").innerHTML = listItems;
        document
            .querySelector(".modal-body p ul")
            .classList.add("modal-body__listItems");
        document
            .querySelectorAll(".modal-body p ul li")
            .forEach((el) => el.classList.add("modal-body__listItems--item"));
        document.querySelectorAll(".modal-body p ul li").forEach((el) => {
            el.querySelector(".modal-body p ul li div:nth-child(2)").classList.add(
                "modal-body__listItems--itemContainer"
            );
            el.querySelector(
                ".modal-body__listItems--itemContainer div:nth-child(1)"
            ).classList.add("modal-body__listItems--itemDesc");
            el.querySelector(
                ".modal-body__listItems--itemDesc div:nth-child(1)"
            ).classList.add("modal-body__listItems--itemHead");
            el.querySelector(
                ".modal-body__listItems--itemDesc div:nth-child(2)"
            ).classList.add("modal-body__listItems--itemFoot");
            el.querySelector(
                ".modal-body__listItems--itemContainer > div:nth-child(2)"
            ).classList.add("modal-body__listItems--itemTotal");
        });

        lowestPriceDiv = document.createElement('div');
        lowestPriceDiv.classList.add('modal-body__lowestPrice');
        lowestPriceDiv.innerHTML = /*html*/`
            <div> <img src="../static/images/lowest-price.png" alt="Lowest Price Guaranteed image" width="100" height="40"> </div>
            <div> <span> You won't find it cheaper anywhere</span> </div>
        `
        document
            .querySelector(".modal-body__listItems").append(lowestPriceDiv);
        document.querySelector(
            ".modal-footer button"
        ).innerHTML = `<div>Proceed to checkout</div>   <div>Rs.${sum}  <span> > </span> </div>`;
        document
            .querySelector(".modal-footer button")
            .classList.add("modal-footer__button");
        let mFooter = document.querySelector(".modal-footer");
        if (mFooter.firstChild.tagName !== "P") {
            let pTag = document.createElement('p');
            pTag.innerText = `Promo code can be applied on payment page`;
            mFooter.insertBefore(pTag, mFooter.firstChild);
        }

        document
            .querySelector(".modal-footer button span")
            .classList.add("modal-footer__span");
        document
            .querySelectorAll(".modal-footer button div")
            .forEach((el) => el.classList.add("modal-footer__div"));

        // Cart item quantity increment and decrement operations on click and keypress

        "click keypress".split(" ").forEach(function (e) {
            document.querySelector(".modal-body p ul").addEventListener(
                e,
                (event) => {
                    if (event.target.parentElement.className.includes("plus")) {
                        let code;
                        if (e == "keypress") {
                            if (event.key !== undefined) {
                                code = event.key;
                            } else if (event.keyIdentifier !== undefined) {
                                code = event.keyIdentifier;
                            } else if (event.keyCode !== undefined) {
                                code = event.keyCode;
                            }
                        }
                        // Step 3
                        if (
                            (e == "keypress" && (code == 13 || code == "Enter")) ||
                            e == "click"
                        ) {
                            cartCount = cartCount + 1;
                            updateCartCount(cartCount);
                            updateCartHeader(cartCount);
                            let idx = cartItemsMoreThanZero2.findIndex(
                                (el) =>
                                    event.target.parentElement.parentElement
                                        .previousElementSibling.innerText == Object.keys(el)[0]
                            );
                            cartItemsMoreThanZero2[idx][
                                event.target.parentElement.parentElement.previousElementSibling.innerText
                            ] += 1;
                            setPriceForPlusAndMinus(
                                "plus",
                                cartItemsMoreThanZero2,
                                event,
                                event.target.parentElement.parentElement.previousElementSibling
                                    .innerText
                            );
                            refreshCartPrices(
                                event.target.parentElement.previousElementSibling,
                                event.target.parentElement.parentElement.parentElement
                                    .nextElementSibling,
                                event.target.parentElement.parentElement.previousElementSibling
                                    .innerText
                            );
                            event.target.parentElement.firstElementChild.ariaLabel = `Increment quantity to ${Number(event.target.parentElement.parentElement.querySelector('.quantity').innerText) + 1}`
                            event.target.parentElement.parentElement.querySelector('.minus').firstElementChild.ariaLabel = `Decrement quantity to ${Number(event.target.parentElement.parentElement.querySelector('.quantity').innerText) - 1}`
                            let sum = cartItemsMoreThanZero2.reduce((acc, el) => {
                                acc += el.price;
                                return acc;
                            }, 0);

                            document.querySelector(
                                ".modal-footer button div:last-child"
                            ).innerText = `Rs. ${sum}  >`;
                        }
                    } else if (event.target.parentElement.className.includes("minus")) {
                        let code;
                        if (e == "keypress") {
                            if (event.key !== undefined) {
                                code = event.key;
                            } else if (event.keyIdentifier !== undefined) {
                                code = event.keyIdentifier;
                            } else if (event.keyCode !== undefined) {
                                code = event.keyCode;
                            }
                        }

                        if (
                            (e == "keypress" && (code == 13 || code == "Enter")) ||
                            e == "click"
                        ) {
                            cartCount = cartCount - 1;
                            updateCartCount(cartCount);
                            updateCartHeader(cartCount);
                            let idx = cartItemsMoreThanZero2.findIndex(
                                (el) =>
                                    event.target.parentElement.parentElement
                                        .previousElementSibling.innerText == Object.keys(el)[0]
                            );
                            cartItemsMoreThanZero2[idx][
                                event.target.parentElement.parentElement.previousElementSibling.innerText
                            ] -= 1;
                            setPriceForPlusAndMinus(
                                "minus",
                                cartItemsMoreThanZero2,
                                event,
                                event.target.parentElement.parentElement.previousElementSibling
                                    .innerText
                            );
                            refreshCartPrices(
                                event.target.parentElement.nextElementSibling,
                                event.target.parentElement.parentElement.parentElement
                                    .nextElementSibling,
                                event.target.parentElement.parentElement.previousElementSibling
                                    .innerText
                            );
                            event.target.parentElement.firstElementChild.ariaLabel = `Decrement quantity to ${Number(event.target.parentElement.parentElement.querySelector('.quantity').innerText) - 1}`
                            event.target.parentElement.parentElement.querySelector('.plus').firstElementChild.ariaLabel = `Increment quantity to ${Number(event.target.parentElement.parentElement.querySelector('.quantity').innerText) + 1}`
                            if (
                                event.target.parentElement.nextElementSibling.innerText == "0"
                            ) {
                                event.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
                            }
                            if (cartCount == 0) {
                                document.querySelector(".modal-body").innerHTML = `
                                <h2 tabindex="0">No items in your cart</h2>
                                <p>Your favourite items are just a click away</p>`;
                                document.querySelector(".modal-footer").innerHTML = `
                        <button onclick="location.href='products.html'">Start Shopping</button>`;
                                modalBody.classList.add("emptyCart");
                            }
                            let sum = cartItemsMoreThanZero2.reduce((acc, el) => {
                                acc += el.price;
                                return acc;
                            }, 0);
                            if (
                                document.querySelector(".modal-footer button div:last-child")
                            ) {
                                document.querySelector(
                                    ".modal-footer button div:last-child"
                                ).innerText = `Rs. ${sum}  >`;
                            }
                        }
                    }
                },
                false
            );
        });
    } else {
        if (lowestPriceDiv) {
            document
                .querySelector(".modal-body__listItems").remove(lowestPriceDiv);
        }
        modalBody.classList.add("emptyCart");
    }
}
