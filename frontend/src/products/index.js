import _ from 'lodash';
import './index.scss'
import header from '../components/header';
import footer from '../components/footer';
import {url} from '../components/utils'
let cartItems = []

function addProductToCart(product){
    const storedItems = JSON.parse(localStorage.getItem('cartItems'));
    if(storedItems != null){
        cartItems = cartItems.concat(storedItems);
    }
    if(cartItems.length > 0){
        const itemIndex = cartItems.findIndex(cart => cart.productId == product);
        if(itemIndex != -1){
            document.getElementById("buynow-"+product).innerHTML = "Already Added"
            console.log('Product already added to cart')
        }else{
            cartItems.push({
                productId: product,
                quantity: 1
            })
            console.log(JSON.stringify(cartItems))
            document.getElementById('cartquatity').innerHTML = cartItems.length
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            document.getElementById("buynow-"+product).innerHTML = "Added to Cart"
            console.log('Product added successfully')
        }
    }else{
        cartItems.push({
            productId: product,
            quantity: 1
        })
        console.log(JSON.stringify(cartItems))
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log('Product added successfully')
    }
}

let productList = []

async function getProducts() {
    try {
        await fetch(url+'products').then(async function (response) {
            await response.json().then(async function (products) {
                productList = products;
                buildProducts(productList);
            })
        })
        
    } catch (error) {
        console.error(error);
    }
}

function buildProducts(products) {
    const products__list = document.createElement("div");
                products__list.classList.add("products__list");
                if(products.length > 0){
                    for (let i = 0; i < products.length; i++) {
                        const products__list__item = document.createElement("article")
                        products__list__item.classList.add("products__list__item");
    
                        const products__list__item__header = document.createElement("header")
                        products__list__item__header.classList.add('products__list__item__header')
    
                        const products__list__item__header__image = document.createElement("img")
                        products__list__item__header__image.classList.add('products__list__item__header__image')
                        products__list__item__header__image.src = products[i].imageURL
                        products__list__item__header__image.alt = products[i].name
                        
                        const products__list__item__header__name = document.createElement("h2")
                        products__list__item__header__name.classList.add('products__list__item__header__name')
                        products__list__item__header__name.innerHTML = products[i].name
                        
                        const products__list__item__header__description = document.createElement("p")
                        products__list__item__header__description.classList.add('products__list__item__header__description')
                        products__list__item__header__description.innerHTML = products[i].description
                        
                        const products__list__item__price = document.createElement("p")
                        products__list__item__price.classList.add('products__list__item__price')
                        products__list__item__price.innerHTML = 'MRP Rs.'+products[i].price
    
                        const products__list__item__buynow = document.createElement("a")
                        products__list__item__buynow.classList.add('products__list__item__buynow')
                        products__list__item__buynow.href = "#"
                        products__list__item__buynow.id = "buynow-" + products[i].id
                        products__list__item__buynow.title = "Buy " + products[i].name
                        products__list__item__buynow.innerHTML = "Buy Now"
                        products__list__item__buynow.onclick = (event) => {
                            event.preventDefault();
                            addProductToCart(products[i].id)
                        }
    
                        // const products__list__item__buynowmobile = document.createElement("div")
                        // products__list__item__buynowmobile.classList.add('products__list__item__buynowmobile')
                        // products__list__item__buynowmobile.innerHTML = products[i].price
    
                        // apending elemenets
                        products__list__item__header.appendChild(products__list__item__header__name)
                        products__list__item__header.appendChild(products__list__item__header__image)
                        products__list__item__header.appendChild(products__list__item__header__description)
    
                        products__list__item.appendChild(products__list__item__header)
                        products__list__item.appendChild(products__list__item__price)
                        products__list__item.appendChild(products__list__item__buynow)
    
                        products__list.appendChild(products__list__item)
                    }
                }else{
                    const noProducts = document.createElement('div')
                    noProducts.classList.add('products__list__noitemfound')
                    noProducts.innerHTML = "There are no products available"
                    products__list.appendChild(noProducts)
                }
                const productgrid = document.getElementById('products');
                productgrid.innerHTML = ""
                productgrid.appendChild(products__list);
}

function filterProductsByCategory(category) {
    const filteredProducts =  productList.filter((product) => {
        if (product.category == category) {
            return product
        }
    })
    buildProducts(filteredProducts);
}

async function getCategories() {
    try {
        await fetch(url+'categories').then(async function (response) {
            await response.json().then(async function (categories) {
                const categories__list = document.createElement("ul");
                categories__list.classList.add("categories__list");
                for (let i = 0; i < categories.length; i++) {
                    const categories__list__item = document.createElement("li")
                    categories__list__item.classList.add("categories__list__item");

                    const categories__list__item__link = document.createElement("a")
                    categories__list__item__link.classList.add('categories__list__item__link')
                    categories__list__item__link.title = 'show item in ' + categories[i].name
                    categories__list__item__link.href = "#"
                    
                    categories__list__item__link.onclick = () => filterProductsByCategory(categories[i].id)
                    categories__list__item__link.innerHTML = categories[i].name
                    categories__list__item.appendChild(categories__list__item__link)
                    categories__list.appendChild(categories__list__item)
                }
                document.getElementById('categories').appendChild(categories__list)
            })
        })
        
    } catch (error) {
        console.error(error);
    }
}

function body(){
    getProducts()
    getCategories()
    return `<main id="main">
                <div id="categories" class="categories"></div>
                <div id="products" class="products"></div>
            </main>`
}

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = header() + body() + footer();
  
    return element;
  }
  
  document.body.appendChild(component());