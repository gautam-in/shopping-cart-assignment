window.addEventListener('load', loadItemCount);
const selectedProducts = JSON.parse(localStorage.getItem('products')) || [];
const productsList = JSON.parse(localStorage.getItem('productsList')) || [];
const itemCount = selectedProducts.length;


if (location.href.includes('cart.html')) {
    window.addEventListener('load', loadCartItems);
}

function loadItemCount() {
    const cartText = document.querySelector('.cart-item');

    cartText.innerHTML = `${itemCount} items`;
}

function addOrRemove(type) {
    console.log('The id is' + type);
}

function loadCartItems() {
    let cartContents = document.querySelector('.cart-contents');
    let cartItemCount = document.querySelector('.cart-item-count');
    let mainCartContainer = document.querySelector('.main-cart-container');
    let mainContent = document.querySelector('#main-cart-content');
    if (itemCount > 0) {
        mainCartContainer.style.display = 'block';
        cartContents.style.display = 'none';
    } else {
        mainCartContainer.style.display = 'none';
        cartContents.style.display = 'block';
    }
    cartItemCount.innerHTML = `My Cart (${itemCount} items)`;
    let productsCount = {};
    selectedProducts.forEach((el) => productsCount[el] = (productsCount[el] || 0) + 1 );

    productsList.forEach(product => {
        if(selectedProducts.includes(product.id)) {
            const div = document.createElement('div');
            const id = product.id;
            div.innerHTML = `
                <img src="../..${product.imageURL}" alt="${product.description}" class="cart-img">
                <div class="flex-column-container flex-start">
                    <h3>${product.name}</h3>
                    <div class="flex-container">
                        <button class="cart-button cart-remove-button" data-id=${product.id}>-</button>
                        <input readonly class="cart-input" type="text" value="${productsCount[product.id]}"/>
                        <button class="cart-button cart-add-button" data-id=${product.id}>+</button>
                        <span> X Rs${product.price}</span>
                    </div>
                </div>
                <span class="product-total">Rs ${productsCount[product.id] * product.price}</span>
            `;
            div.classList.add('flex-container');
            mainContent.appendChild(div);
        }
    });

    const addButton = document.querySelectorAll('.cart-add-button');
    const removeButton = document.querySelectorAll('.cart-remove-button');

    addButton.forEach((btn) => {
        btn.addEventListener('click', () => {
        selectedProducts.push(btn.getAttribute('data-id'));
        localStorage.setItem('products', JSON.stringify(selectedProducts));
        location.reload();
    })});

    removeButton.forEach((btn) => {
        btn.addEventListener('click', () => {
        const index = selectedProducts.indexOf(btn.getAttribute('data-id'));
        selectedProducts.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(selectedProducts));
        location.reload();
    })});

}



window.addOrRemove = addOrRemove;

function addOrRemoveProducts(productId, type, count) {
    if (type === 'add') {
        selectedProducts.push(productId);
        localStorage.setItem('products', JSON.stringify(selectedProducts));
        location.reload();
    } else {
        if (count === 0) {
            // alert('The product would be removed from the cart');
            // selectedProducts.push(productId);
            // localStorage.setItem('products', JSON.stringify(selectedProducts));
            // location.reload();
        }
    }
}
