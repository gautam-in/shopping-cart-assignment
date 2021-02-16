function getCartCount() {
    return sessionStorage.getItem('cartCount');
}

function setCartCount(coefficient) {
    let cartCount = sessionStorage.getItem('cartCount');
    if (!cartCount) {
        sessionStorage.setItem('cartCount', 1);
    }
    else {
        sessionStorage.setItem('cartCount', Number(cartCount) + coefficient);
    }
}

function renderCartQuantity() {
    const cartCount = Number(getCartCount());
    const cartQuantityElement = document.querySelector('.item-count');
    cartQuantityElement.textContent = cartCount;
}

function setCartItems(id, productsData = [], coefficient = 1) {
    let cartItems = sessionStorage.getItem('cartItems');
    if (cartItems) {
        cartItems = JSON.parse(cartItems);
        if (cartItems[id]) {
            cartItems[id].inCart += coefficient;
            if (cartItems[id].inCart === 0) {
                delete cartItems[id];
            }
        }
        else {
            cartItems = addItemCartSession(id, productsData, cartItems);
        }
    }
    else {
        cartItems = addItemCartSession(id, productsData, cartItems);
    }
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function addItemCartSession(id, productsData, cartItems) {
    let addedItem = productsData.find(x => x.id === id);
    addedItem.inCart = 1;
    const newObj = { [id]: addedItem };
    return { ...cartItems, ...newObj };
}

function openCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'block';
    cartModal.classList.add('sample-modal');
    const opacityElement = document.getElementById('opacity-element');
    opacityElement.classList.add('black-opacity');
    const body = document.getElementsByTagName('body');
    body.classList.add('body-container');
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
    cartModal.classList.remove('sample-modal');
    const opacityElement = document.getElementById('opacity-element');
    opacityElement.classList.remove('black-opacity');
    const body = document.getElementsByTagName('body');
    body.classList.remove('body-container');
}

export {
    getCartCount, setCartCount, renderCartQuantity, setCartItems,
    addItemCartSession, openCart, closeCart
};