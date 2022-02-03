import "../css/register.scss";
import "../css/home.scss";
import "../css/products.scss";

let db;
let cart = [];
const currentUser = JSON.parse(localStorage.getItem('user'));
if (!window.indexedDB) {
    window.indexedDB =
        window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB;
}

if (!window.indexedDB) {
    alert("Your browser does'nt support indexed DB !");
} else {
    const connection = window.indexedDB.open("shopingCartDB", 1);
    connection.onsuccess = function () {
        console.log("Connection opened successfully !");
        db = connection.result;
        if (currentUser) {
            cart = getCartData().onsuccess = function (event) {
                cart = event.target.result;
                setCartItems();
                toggleEmptyCart(cart.length === 0);
            };
        } else {
            toggleEmptyCart(true);
        }
    };
    connection.onerror = function () {
        console.log("Error opening the connection !");
    };
    connection.onupgradeneeded = function (e) {
        db = e.target.result; // access to database
        const usersOS = db.createObjectStore("users"); // table / collection
        usersOS.createIndex("email", "email", { unique: true });
        const cartOS = db.createObjectStore("cart");
        cartOS.createIndex("email", "email", { unique: true });
    };
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", registerUser);
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', signInUser);
    }
}

function getObjectStoreForTransaction(objectStoreName) {
    const txn = db.transaction([objectStoreName], "readwrite");
    return txn.objectStore(objectStoreName);
}

function toggleEmptyCart(isEmpty = false) {
    const cartProducts = document.querySelector('.modal-content section');
    const promoDetail = document.querySelector('.modal-content footer p');
    const checkoutBtn = document.querySelector('.modal-content footer button');
    const emptyCartSection = document.querySelector('.empty-cart');
    const startShoppingBtn = document.querySelector('.start-shopping-btn');
    if (cartProducts) {
        if (isEmpty) {
            cartProducts.classList.add('d-none');
            promoDetail.classList.add('d-none');
            checkoutBtn.classList.add('d-none');
            emptyCartSection.classList.remove('d-none');
            startShoppingBtn.classList.remove('d-none');
        } else {
            cartProducts.classList.remove('d-none');
            promoDetail.classList.remove('d-none');
            checkoutBtn.classList.remove('d-none');
            emptyCartSection.classList.add('d-none');
            startShoppingBtn.classList.add('d-none');
        }
    }
}

function getCartData() {
    const store = getObjectStoreForTransaction("cart");
    return store.get(currentUser.email);
}

function registerUser(event) {
    event.preventDefault();
    if (this.querySelector('#password').value !== this.querySelector('#cnfPassword').value) {
        alert('Password and confirm password does not match!!!');
    } else {
        const firstName = this.querySelector('#firstname').value;
        const lastName = this.querySelector('#lastname').value;
        const email = this.querySelector('#email').value;
        const password = this.querySelector('#password').value;
        const user = { firstName, lastName, email, password };
        const store = getObjectStoreForTransaction("users");
        const request = store.add(user, email);
        request.onsuccess = function () {
            alert('User has been registered successfully. Please signin to continue...');
            window.location.assign("/login.html");
        }
        request.onerror = function () {
            alert('Unable to register user at the moment. Please try again later...')
        }
    }
}

function signInUser(event) {
    event.preventDefault();
    const store = getObjectStoreForTransaction("users");
    const email = this.querySelector("#email").value;
    const password = this.querySelector("#password").value;
    const req = store.get(email);
    req.onsuccess = function (e) {
        const user = e.target.result;
        if (!user) {
            alert('User not found. Please register to continue...');
        } else if (user.password !== password) {
            alert('Invalid credentials!');
        } else {
            localStorage.setItem('user', JSON.stringify(user));
            window.location.assign('/');
        }
    };
}

const shoppingCartButton = document.querySelector('.cart');

const modal = document.getElementById("cartModal");

const closeModalButton = document.getElementsByClassName("close")[0];

const mainElement = document.querySelector('main');

const startShoppingBtn = document.querySelector('.start-shopping-btn');

shoppingCartButton.addEventListener('click', showModal);

if (closeModalButton) {
    closeModalButton.addEventListener('click', hideModal);
}

if (startShoppingBtn) {
    startShoppingBtn.addEventListener('click', hideModal);
}

function hideModal() {
    modal.style.display = "none";
    mainElement.classList.remove('d-none-sm-device');
}

function showModal() {
    modal.style.display = "block";
    mainElement.classList.add('d-none-sm-device');
}

document.addEventListener('registerClickListener', function () {
    document.querySelectorAll('[product-id]').forEach(element => {
        element.addEventListener('click', addToCart);
    });
});

function setCartItems() {
    const cartHeaderItemCount = document.querySelector('.modal-content .title span:nth-child(2)');
    if (cartHeaderItemCount) {
        const { items, totalAmount } = cart.reduce(function (accumulatorObject, item) {
            return {
                items: accumulatorObject.items + item.quantity,
                totalAmount: accumulatorObject.totalAmount + item.total
            };
        }, { items: 0, totalAmount: 0 });
        document.querySelector('.cart span').innerText = items + ' items';
        cartHeaderItemCount.innerText = items > 0 ? '(' + items + ' items)' : '';
        document.querySelector('.modal-content footer button span:nth-child(2)').innerText = 'Rs.' + totalAmount + ' >';

        const guaranteeBanner = document.querySelector('.guarantee-banner');

        let previousSibling = guaranteeBanner.previousSibling;
        while (previousSibling) {
            previousSibling.parentNode.removeChild(previousSibling);
            previousSibling = guaranteeBanner.previousSibling;
        }
        cart.forEach(cartItem => {
            renderCartProduct(cartItem);
        });

    }
}

function renderCartProduct(product) {
    const template = document.createElement('div');
    template.classList.add('cart-item');
    template.classList.add('d-flex');

    const itemDetail = document.createElement('div');
    itemDetail.classList.add('item-detail');
    itemDetail.classList.add('d-flex');

    const itemImgContainer = document.createElement('div');
    itemImgContainer.classList.add('item-img');

    const itemImg = document.createElement('img');
    itemImg.setAttribute('src', product.imageURL);
    itemImg.setAttribute('alt', product.name);

    itemImgContainer.append(itemImg);
    itemDetail.append(itemImgContainer);

    const itemDescriptionContainer = document.createElement('div');
    itemDescriptionContainer.classList.add('item-desc');
    itemDescriptionContainer.classList.add('d-flex');

    const itemNameContainer = document.createElement('div');
    itemNameContainer.classList.add('item-name');

    const itemName = document.createElement('h4');
    itemName.innerText = product.name;

    itemNameContainer.append(itemName);
    itemDescriptionContainer.append(itemNameContainer);

    const itemCalculationContainer = document.createElement('div');
    itemCalculationContainer.classList.add('item-calculation');
    itemCalculationContainer.classList.add('d-flex');

    const itemQuantityContainer = document.createElement('div');
    itemQuantityContainer.classList.add('item-quantity');

    const removeItemBtn = document.createElement('button');
    removeItemBtn.innerText = '-';
    removeItemBtn.setAttribute('remove-product-id', product.id);
    removeItemBtn.addEventListener('click', removeFromCart);
    itemQuantityContainer.append(removeItemBtn);

    const itemQuantity = document.createElement('span');
    itemQuantity.innerText = product.quantity;
    itemQuantityContainer.append(itemQuantity);

    const addItemBtn = document.createElement('button');
    addItemBtn.innerText = '+';
    addItemBtn.addEventListener('click', addToCart)
    addItemBtn.setAttribute('product-id', product.id);
    itemQuantityContainer.append(addItemBtn);

    itemCalculationContainer.append(itemQuantityContainer);

    const itemAmountContainer = document.createElement('div');
    itemAmountContainer.classList.add('item-amount');

    const multiplier = document.createElement('span');
    multiplier.innerText = 'X';
    itemAmountContainer.append(multiplier);

    const itemAmount = document.createElement('span');
    itemAmount.innerText = 'Rs.' + product.price;
    itemAmountContainer.append(itemAmount);

    itemCalculationContainer.append(itemAmountContainer);
    itemDescriptionContainer.append(itemCalculationContainer);
    itemDetail.append(itemDescriptionContainer);

    const totalAmount = document.createElement('div');
    totalAmount.classList.add('item-price');
    totalAmount.innerText = 'Rs.' + product.total;

    template.append(itemDetail);
    template.append(totalAmount);

    document.querySelector('.modal-content section').insertBefore(template, document.querySelector('.guarantee-banner'));
}

function removeFromCart() {
    const productID = this.getAttribute('remove-product-id');
    const productInCart = cart.find(product => product.id === productID);
    if (productInCart) {
        productInCart.quantity--;
        productInCart.total = productInCart.quantity * productInCart.price;
    }
    cart = cart.filter(product => product.quantity > 0);
    const store = getObjectStoreForTransaction("cart");
    const request = store.put(cart, currentUser.email);
    request.onsuccess = function () {
        setCartItems();
        toggleEmptyCart(cart.length === 0);
    }
}

function addToCart() {
    if (currentUser) {
        const productID = this.getAttribute('product-id');
        let cartArray = [];
        const store = getObjectStoreForTransaction("cart");
        const originalProductObj = products.find(product => product.id === productID);
        let request;
        if (!cart) {
            const cartProductObj = createNewProductInCart();
            cartArray.push(cartProductObj);
            request = store.add(cartArray, currentUser.email);
            cart = cartArray;
        } else {
            const productInCart = cart.find(product => product.id === productID);
            if (productInCart) {
                productInCart.quantity++;
                productInCart.total = productInCart.quantity * productInCart.price;
            } else {
                const cartProductObj = createNewProductInCart();
                cart.push(cartProductObj);
            }
            request = store.put(cart, currentUser.email);
        }
        request.onsuccess = function () {
            setCartItems();
            toggleEmptyCart(cart.length === 0);
        }
        request.onerror = function () {
            console.log('Unable to add to cart');
        }

        function createNewProductInCart() {
            const cartProductObj = { ...originalProductObj };
            cartProductObj.quantity = 1;
            cartProductObj.total = cartProductObj.price;

            return cartProductObj;
        }
    } else {
        alert('Please login to add items to cart...');
        window.location.assign("/login.html");
    }
}
