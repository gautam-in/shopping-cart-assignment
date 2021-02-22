function getCartCount() {
    return sessionStorage.getItem('cartCount');
}

function setCartCount(coefficient) {
    let cartCount = sessionStorage.getItem('cartCount');
    if (!cartCount) {
        if (coefficient === 1) {
            sessionStorage.setItem('cartCount', 1);
        }
        return;
    }
    else {
        cartCount = Number(cartCount) + coefficient;
        if (cartCount !== 0) {
            sessionStorage.setItem('cartCount', cartCount);
        }
        else {
            sessionStorage.removeItem('cartCount');
            sessionStorage.removeItem('cartItems');
        }
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
            cartItems[id].totalPrice = cartItems[id].price * cartItems[id].inCart;
            if (cartItems[id].inCart === 0) {
                delete cartItems[id];
            }
            sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
        else {
            cartItems = addItemCartSession(id, productsData, cartItems);
            sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }
    else if(coefficient === 1) {
        cartItems = addItemCartSession(id, productsData, cartItems);
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }    
}

function addItemCartSession(id, productsData, cartItems) {
    let addedItem = productsData.find(x => x.id === id);
    addedItem.inCart = 1;
    addedItem.totalPrice = addedItem.price;
    const newObj = { [id]: addedItem };
    return { ...cartItems, ...newObj };
}

function openCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'block';
    cartModal.classList.add('sample-modal');
    const opacityElement = document.getElementById('opacity-element');
    opacityElement.classList.add('black-opacity');
    const body = document.getElementById('body');
    body.classList.add('body-container');
    renderCartView();
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
    cartModal.classList.remove('sample-modal');
    const opacityElement = document.getElementById('opacity-element');
    opacityElement.classList.remove('black-opacity');
    const body = document.getElementById('body');
    body.classList.remove('body-container');
    const cartBody = document.querySelector('.cart-body');
    cartBody.innerHTML = '';
}

function renderCartView() {
    const cartCount = getCartCount();
    const cartBody = document.querySelector('.cart-body');
    cartBody.innerHTML = '';
    cartBody.classList.remove('flexbox-vertical-horizontal-center');
    const cartButtonContent = document.querySelector('.cart-button-content');
    const promoCode = document.querySelector('.promo-code');
    const totalInCart = document.querySelector('.total-in-cart');
    if (!cartCount) {
        totalInCart.textContent = '';
        cartBody.style.height = '75%';
        cartBody.classList.add('flexbox-vertical-horizontal-center');
        const noItems = document.createElement('strong');
        noItems.textContent = 'No items in your cart';
        const favItems = document.createElement('p');
        favItems.textContent = 'Your favourite items are just a click away';
        cartBody.append(noItems, favItems);
        promoCode.style.display = 'none';
        cartButtonContent.textContent = 'Start Shopping';
    }
    else {
        cartBody.style.backgroundColor = '#ecf0f1';
        cartBody.style.height = '70%';
        cartButtonContent.textContent = 'Start Shopping';
        promoCode.style.display = 'block';
        let cartItems = sessionStorage.getItem('cartItems');
        cartItems = JSON.parse(cartItems);
        const row = document.createElement('div');
        row.classList.add('row', 'mx-0', 'my-4');
        row.style.backgroundColor = '#fff';
        let totalCartAmount = 0;
        let totalItems = 0;
        Object.entries(cartItems).forEach(([key, value]) => {
            const col = document.createElement('div');
            col.classList.add('col-12');
            const innerRow = document.createElement('div');
            innerRow.classList.add('row');
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('col-2');
            const img = document.createElement('img');
            img.src = value.imageURL;
            img.height = '100';
            imgDiv.append(img);
            const details = document.createElement('div');
            details.classList.add('col-10', 'pl-4', 'flexbox-vertical-center');
            const strong = document.createElement('strong');
            strong.textContent = value.name;
            const innerRow2 = document.createElement('div');
            innerRow2.classList.add('flexbox-space-between');
            innerRow2.innerHTML =
                `<div>
                <button class="change-quantity" id="${value.id}-decrease">
                    &#8722;
                </button>
                ${value.inCart}
                <button class="change-quantity" id="${value.id}-increase">
                    &#43;
                </button>
                &#215; ${value.price}
            </div>
            <div>
                Rs. ${value.totalPrice}
            </div>`;
            details.append(strong, innerRow2);
            innerRow.append(imgDiv, details);
            col.append(innerRow);
            row.append(col);

            totalCartAmount += value.totalPrice;
            totalItems += value.inCart;

            totalInCart.textContent = ` (${totalItems} item(s))`;
        });
        const cheapBlock = document.createElement('div');
        cheapBlock.classList.add('mx-3', 'mb-4');
        cheapBlock.style.backgroundColor = '#fff';
        const cheapImg = document.createElement('img');
        cheapImg.classList.add('mx-3');
        cheapImg.src = '/static/images/lowest-price.png';
        const cheapBlockText = document.createElement('div');
        cheapBlockText.style.display = 'inline-block';
        cheapBlockText.innerText = "You won't find it cheaper anywhere";
        cheapBlock.append(cheapImg, cheapBlockText);
        cartBody.append(row, cheapBlock);

        cartButtonContent.innerHTML =
            `
        <div class="flexbox-space-between">
            <div>Proceed to Checkout
        </div>
        <div>Rs. ${totalCartAmount} ></div>
        `;

        changeQuantityClickInit();
    }
}

function changeQuantityClickInit() {
    const changeQuantity = document.querySelectorAll('.change-quantity');

    changeQuantity.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.id;
            let idList = id.split('-');
            let coefficient = 1;
            if (idList[1] === 'decrease') {
                coefficient = -1;
            }
            setCartCount(coefficient);
            renderCartQuantity();
            setCartItems(idList[0], [], coefficient);
            renderCartView();
        });
    });
}

export {
    getCartCount, setCartCount, renderCartQuantity, setCartItems,
    addItemCartSession, openCart, closeCart
};