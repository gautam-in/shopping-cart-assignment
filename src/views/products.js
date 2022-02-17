import productJson from "../../server/products/index.get.json";
import categoriesJson from "../../server/categories/index.get.json"
import productCategories from '../html/productCategories.html'
export function products(target) {
    let div = document.createElement('div');
    let categories = createCategories();
    div.appendChild(categories);
    target.innerHTML = '';
    target.appendChild(div);
    const categoryArr = document.getElementsByClassName('category-card');
    for(let category of categoryArr){
        category.addEventListener('click', createItemByCategory);
        category.target = target;
    }
};

function createCategories(){
    let divCards = document.createElement('div');
    divCards.className = 'row';
    divCards.id = 'categories';
    let cards = [];
    for (const category of categoriesJson) {
        if(category.enabled){
        let divCard = document.createElement('div');
        divCard.innerHTML =`
        <div class="col s12 m6 l4 container category-card" id=${category.id}>
            <a href="#/products/${category.id}">
                <div class= "card-panel hoverable z-depth-5">
                    <div class="card-image">
                        <img src="..${category.imageUrl}" class="responsive-img category-image">
                        <div class="card-title category-title">${category.name}</div>
                    </div>
                    <div class="card-content">
                    <p class="category-description">${category.description}</p>
                    </div>
                </div>
            </a>
        </div>`;
        

      cards[category.order-1] = divCard;
        }
    }
    for (const card of cards) {
        divCards.appendChild(card);
    }

    return divCards;
}

function createItemByCategory(ev){
    const id = ev.currentTarget.id;
    const target = ev.currentTarget.target;
    let divCards = document.createElement('div');
    divCards.className = 'row';
    
    let cart = {}; 
    if (!!(window.localStorage.getItem('cart'))) {
        cart = JSON.parse(window.localStorage.getItem('cart'));
    }

    for (const product of productJson) {
        if(product.category===id){
            let addedVisibility = "hide";
            let addedToCartVisibility = "";
            let addRange = 1;
            if(cart[product.id]){
                addedVisibility = "";
                addedToCartVisibility = "hide";
                addRange = cart[product.id];
            }
            let divCard = document.createElement('div');
            divCard.innerHTML =`
                <div class="col s12 m6 l4 container" id=${product.id}>
                        <div class= "card-panel hoverable z-depth-5">
                            <div class="card-image">
                                <img src="..${product.imageURL}" class="responsive-img product-image">
                                <div class="card-title product-title">${product.name}</div>
                            </div>
                            <div class="card-content">
                            <p class="product-description">${product.description}</p>
                            </div>
                            <div class="row card-action product-card-action">
                            <button class="col s10 offset-s1 btn ${addedToCartVisibility}" id="buyNow_${product.id}">Buy now @MRP Rs. ${product.price}</button>
                            <div class="${addedVisibility}" id="added_${product.id}">
                            <div class="range-field">
                            <input class="col s6" type="range" value="${addRange}" oninput="document.getElementById('rangeValLabel_${product.id}').innerHTML = this.value;" step="1" id="qty_${product.id}" min="0" max="${product.stock}" />
                            <em class="col s2" id="rangeValLabel_${product.id}" style="font-style: normal;margin: 7px 0;">${addRange}</em>
                            <button class="btn col s2" id="remove_${product.id}"><i class="material-icons">delete</i></button>
                            </div>
                            </div>
                            </div>
                    </div>
                </div>`;

            divCards.appendChild(divCard);
        }
    }

    target.innerHTML = '';
    target.appendChild(divCards);

    for (const product of productJson) {
        if(product.category===id){
            document.getElementById('buyNow_'+product.id).addEventListener('click', handleBuyNow);
            document.getElementById('remove_'+product.id).addEventListener('click', handleRemove);
            document.getElementById('qty_'+product.id).addEventListener('change', handleQtyChange)
        }
    }
    return divCards;
}

function handleBuyNow(){
    const prodId = this.id.split('_')[1];
    document.getElementById('added_'+prodId).className='';
    this.className = this.className.concat(' hide');
    updateLocalStorage({id:prodId,qty:1});
}

function handleQtyChange(){
    console.log(this.value);
    const qty = parseInt(this.value);
    const prodId = this.id.split('_')[1];
    if(qty===0){
        handleRemove.call(this);
        updateLocalStorage({id:prodId,qty:qty});
    }
    else{
        updateLocalStorage({id:prodId,qty:qty});
    }
}

function handleRemove(){
    const prodId = this.id.split('_')[1];
    updateLocalStorage({id:prodId,qty:0})
    document.getElementById('rangeValLabel_'+prodId).innerHTML = 1;
    document.getElementById('qty_'+prodId).value =1
    document.getElementById('added_'+prodId).className='hide';
    document.getElementById('buyNow_'+prodId).className = document.getElementById('buyNow_'+prodId).className.substring(0, document.getElementById('buyNow_'+prodId).className.indexOf('hide')-1);
}
function updateLocalStorage(item){
    let cart;    
    if (!!(window.localStorage.getItem('cart'))) {
        cart = JSON.parse(window.localStorage.getItem('cart'));
    } else {
        cart = {};
    }
    if(item.qty===0){
        delete cart[item.id];
    }
    else{
        cart[item.id] = item.qty;
    }
    window.localStorage.setItem('cart', JSON.stringify(cart));
}