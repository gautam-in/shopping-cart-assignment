let products;
let cart;
const SERVER = 'http://localhost';
const PORT = '5001';

function fetchData(type){
    return fetch(`${SERVER}:${PORT}/${type}`)
    .then((response) => {
        if(response.ok){
            return response.json(); 
        }
        throw "Something Went Wrong"
    }).then(data => data)
    .catch(err => console.log(err));
}

async function renderCategoryList(){
    let categoryList = await fetchData('categories')
    let template = ''
    for(let index = 0;index < categoryList.length; index++){
        if(categoryList[index].enabled){
            template += 
            `
            <div class="category" key="${categoryList[index].id}">
                <span key="${categoryList[index].id}">${categoryList[index].name}</span>
            </div>
            `
        }
    }
    let categoryContainer = document.getElementById('category__list');
    categoryContainer.innerHTML += template;
    categoryContainer.addEventListener('click', function(e){
        let element = e.target;
        if(element.hasAttribute('key')){
            renderProductsList(element.getAttribute('key'));
        }
    })
}

async function renderProductsList(categoryId){
    let currentProducts;
    products = await fetchData('products')
    let template = '';
    if(categoryId){
        categoryId = categoryId.charAt(0) == '?' ? categoryId.substring(1) : categoryId;
        currentProducts = products.filter(d => {
            if(d.category === categoryId) return d;
        })
    }else{
        currentProducts = [...products];
    }

    for(let index = 0; index<currentProducts.length; index++){
        template += 
        `
        <div class="product__card">
            <div class="product__heading">
                <h3>${currentProducts[index].name}</h3>
            </div>
            <div class="product__subcard">
                <img width="250" height="250" src="../../../${currentProducts[index].imageURL}" alt="${currentProducts[index].name}"/>
                <div class="product__desc">
                    <div class="product__detail">
                        <p>${currentProducts[index].description}</p>
                    </div>
                    <div class="product__price">
                        <span id="price">Rs. ${currentProducts[index].price}</span>
                        <button onclick="buyProduct('${currentProducts[index].id}')">Buy Now <span id="atsymbol">@</span></button>
                    </div>
                </div>
            </div>
        </div>
        `;
        document.getElementById('products__container').innerHTML = template;
    }
}

function buyProduct(productId){
    let product = products.filter(d => {if(productId === d.id) return d;})
    if(!cart){
        cart = new Cart([], 1)
        cart.render()
        cart.showCart()
        cart.addCartItem(product)
    }else{
        cart.addCartItem(product)
    }
}

function openCart(){
    if(cart)
        cart.showCart()
    else{
        cart = new Cart([], 0)
        cart.render()
        cart.showCart()
    }
}

function dropdownOnChange(e){
    const id = '?'+e;
    renderProductsList(id);
}

renderCategoryList();
renderProductsList(window.location.search);