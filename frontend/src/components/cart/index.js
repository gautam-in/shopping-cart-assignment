import './index.scss'
import {url} from '../utils'

let storedItems = JSON.parse(localStorage.getItem('cartItems'));
let productlist = []

function getoverallprice(){
    let price = 0;
    for (let i = 0; i < storedItems.length; i++) {
        price += (productlist[i].price * storedItems[i].quantity)
    }
    document.getElementById('overallcartprice').innerHTML = `Rs. ${price} >`
}

function changeQuantity(index,quantity){
    
    if(quantity > 0){
        storedItems[index].quantity += quantity
        console.log(storedItems[index].quantity)
        document.getElementById("cartproduct-"+storedItems[index].productId).innerHTML = storedItems[index].quantity
        document.getElementById("cartitemtotalprice-"+storedItems[index].productId).innerHTML = productlist[index].price * storedItems[index].quantity
        localStorage.setItem('cartItems', JSON.stringify(storedItems));
    }else{
        if(storedItems[index].quantity > 1){
            storedItems[index].quantity += quantity
            console.log(storedItems[index].quantity)
            document.getElementById("cartproduct-"+storedItems[index].productId).innerHTML = storedItems[index].quantity
            document.getElementById("cartitemtotalprice-"+storedItems[index].productId).innerHTML = productlist[index].price * storedItems[index].quantity
            localStorage.setItem('cartItems', JSON.stringify(storedItems));
        }else{
            storedItems.splice(index,1)
            document.getElementById('cartItemCount').innerHTML = `(${storedItems.length} items)`;
            document.getElementById("cartitemlist-"+productlist[index].id).remove()
            localStorage.setItem('cartItems', JSON.stringify(storedItems));
        }
    }
    getoverallprice()
}

async function buildItems(){
    try {
        await fetch(url+'products').then(async function (response) {
            await response.json().then(async function (products) {
                for(let i=0; i<storedItems.length; i++){
                    for (let j = 0; j < products.length; j++){
                        if(storedItems[i].productId === products[j].id){
                            productlist.push(products[j])
                            const outercontainer__cartcontainer__cart__body__items = document.createElement('li');
                            outercontainer__cartcontainer__cart__body__items.classList.add("outercontainer__cartcontainer__cart__body__items");
                            outercontainer__cartcontainer__cart__body__items.id = "cartitemlist-"+products[j].id
                            
                            const outercontainer__cartcontainer__cart__body__items__imagecontainer = document.createElement('div');
                            outercontainer__cartcontainer__cart__body__items__imagecontainer.classList.add("outercontainer__cartcontainer__cart__body__items__imagecontainer")
                    
                            const outercontainer__cartcontainer__cart__body__items__imagecontainer__image = document.createElement('img');
                            outercontainer__cartcontainer__cart__body__items__imagecontainer__image.classList.add("outercontainer__cartcontainer__cart__body__items__imagecontainer__image")
                            outercontainer__cartcontainer__cart__body__items__imagecontainer__image.src = products[j].imageURL
                            outercontainer__cartcontainer__cart__body__items__imagecontainer__image.alt = products[j].name

                    
                            outercontainer__cartcontainer__cart__body__items__imagecontainer.appendChild(outercontainer__cartcontainer__cart__body__items__imagecontainer__image)
                            outercontainer__cartcontainer__cart__body__items.appendChild(outercontainer__cartcontainer__cart__body__items__imagecontainer)
                    
                            const outercontainer__cartcontainer__cart__body__items__details = document.createElement('div')
                            outercontainer__cartcontainer__cart__body__items__details.classList.add("outercontainer__cartcontainer__cart__body__items__details")
                    
                            const outercontainer__cartcontainer__cart__body__items__details__name = document.createElement('h3')
                            outercontainer__cartcontainer__cart__body__items__details__name.classList.add('outercontainer__cartcontainer__cart__body__items__details__name')
                            outercontainer__cartcontainer__cart__body__items__details__name.innerHTML= products[j].name
                    
                            outercontainer__cartcontainer__cart__body__items__details.appendChild(outercontainer__cartcontainer__cart__body__items__details__name)
                    
                            const outercontainer__cartcontainer__cart__body__items__details__quantity = document.createElement('div')
                            outercontainer__cartcontainer__cart__body__items__details__quantity.classList.add('outercontainer__cartcontainer__cart__body__items__details__quantity')
                    
                            const outercontainer__cartcontainer__cart__body__items__details__quantity__minus = document.createElement('div')
                            outercontainer__cartcontainer__cart__body__items__details__quantity__minus.classList.add('outercontainer__cartcontainer__cart__body__items__details__quantity__minus')
                    
                            const outercontainer__cartcontainer__cart__body__items__details__quantity__minus__link = document.createElement('a')
                            outercontainer__cartcontainer__cart__body__items__details__quantity__minus__link.classList.add('outercontainer__cartcontainer__cart__body__items__details__quantity__minus__link')
                            outercontainer__cartcontainer__cart__body__items__details__quantity__minus__link.href = "#"
                            outercontainer__cartcontainer__cart__body__items__details__quantity__minus__link.title = "Decrease Quantity"
                            outercontainer__cartcontainer__cart__body__items__details__quantity__minus__link.innerHTML = "-"
                            outercontainer__cartcontainer__cart__body__items__details__quantity__minus__link.onclick = () => changeQuantity(i,-1)
                    
                            outercontainer__cartcontainer__cart__body__items__details__quantity__minus.appendChild(outercontainer__cartcontainer__cart__body__items__details__quantity__minus__link)
                            outercontainer__cartcontainer__cart__body__items__details__quantity.appendChild(outercontainer__cartcontainer__cart__body__items__details__quantity__minus)
                    
                    
                            const outercontainer__cartcontainer__cart__body__items__details__quantity__current = document.createElement('div')
                            outercontainer__cartcontainer__cart__body__items__details__quantity__current.classList.add('outercontainer__cartcontainer__cart__body__items__details__quantity__current')
                            outercontainer__cartcontainer__cart__body__items__details__quantity__current.id = "cartproduct-"+products[j].id
                            outercontainer__cartcontainer__cart__body__items__details__quantity__current.innerHTML = storedItems[i].quantity
                    
                            outercontainer__cartcontainer__cart__body__items__details__quantity.appendChild(outercontainer__cartcontainer__cart__body__items__details__quantity__current)
                    
                            const outercontainer__cartcontainer__cart__body__items__details__quantity__plus = document.createElement('div')
                            outercontainer__cartcontainer__cart__body__items__details__quantity__plus.classList.add('outercontainer__cartcontainer__cart__body__items__details__quantity__plus')
                            
                            const outercontainer__cartcontainer__cart__body__items__details__quantity__plus__link = document.createElement('a')
                            outercontainer__cartcontainer__cart__body__items__details__quantity__plus__link.classList.add('outercontainer__cartcontainer__cart__body__items__details__quantity__plus__link')
                            outercontainer__cartcontainer__cart__body__items__details__quantity__plus__link.href = "#"
                            outercontainer__cartcontainer__cart__body__items__details__quantity__plus__link.title = "Increase Quantity"
                            outercontainer__cartcontainer__cart__body__items__details__quantity__plus__link.innerHTML = "+"
                            outercontainer__cartcontainer__cart__body__items__details__quantity__plus__link.onclick = () => changeQuantity(i,1)
                            
                    
                            outercontainer__cartcontainer__cart__body__items__details__quantity__plus.appendChild(outercontainer__cartcontainer__cart__body__items__details__quantity__plus__link)
                            outercontainer__cartcontainer__cart__body__items__details__quantity.appendChild(outercontainer__cartcontainer__cart__body__items__details__quantity__plus)
                    
                    
                            const outercontainer__cartcontainer__cart__body__items__details__quantity__multiple = document.createElement('div')
                            outercontainer__cartcontainer__cart__body__items__details__quantity__multiple.classList.add('outercontainer__cartcontainer__cart__body__items__details__quantity__multiple')
                            outercontainer__cartcontainer__cart__body__items__details__quantity__multiple.innerHTML = "X"
                    
                            outercontainer__cartcontainer__cart__body__items__details__quantity.appendChild(outercontainer__cartcontainer__cart__body__items__details__quantity__multiple)
                    
                            const outercontainer__cartcontainer__cart__body__items__details__quantity__price = document.createElement('div')
                            outercontainer__cartcontainer__cart__body__items__details__quantity__price.classList.add('outercontainer__cartcontainer__cart__body__items__details__quantity__price')
                            outercontainer__cartcontainer__cart__body__items__details__quantity__price.innerHTML = "Rs. "+products[j].price
                    
                            outercontainer__cartcontainer__cart__body__items__details__quantity.appendChild(outercontainer__cartcontainer__cart__body__items__details__quantity__price)
                    
                            const outercontainer__cartcontainer__cart__body__items__details__quantity__totalprice = document.createElement('div')
                            outercontainer__cartcontainer__cart__body__items__details__quantity__totalprice.classList.add('outercontainer__cartcontainer__cart__body__items__details__quantity__totalprice')
                            outercontainer__cartcontainer__cart__body__items__details__quantity__totalprice.innerHTML = "Rs. <span id='cartitemtotalprice-"+products[j].id+"'>"+products[j].price*storedItems[i].quantity+"</span>"
                    
                            outercontainer__cartcontainer__cart__body__items__details__quantity.appendChild(outercontainer__cartcontainer__cart__body__items__details__quantity__totalprice)
                            outercontainer__cartcontainer__cart__body__items__details.appendChild(outercontainer__cartcontainer__cart__body__items__details__quantity)
                            outercontainer__cartcontainer__cart__body__items.appendChild(outercontainer__cartcontainer__cart__body__items__details)
                            
                            document.getElementById('cartItems').appendChild(outercontainer__cartcontainer__cart__body__items)
                        }
                    }
                }
                getoverallprice()
            })
        })
        
    } catch (error) {
        console.error(error);
    }

}

function createCartCloseButton(){
    const outercontainer__cartcontainer__cart__header__close = document.createElement('a')
    outercontainer__cartcontainer__cart__header__close.href = '#'
    outercontainer__cartcontainer__cart__header__close.title = "Close Cart"
    outercontainer__cartcontainer__cart__header__close.classList.add('outercontainer__cartcontainer__cart__header__close')
    outercontainer__cartcontainer__cart__header__close.innerHTML = "X"
    outercontainer__cartcontainer__cart__header__close.onclick = () =>{
        document.getElementById('cart').innerHTML = ""
    }
    document.getElementById("cartHeader").appendChild(outercontainer__cartcontainer__cart__header__close)

}

export default function cart(){
    setTimeout(function(){
        createCartCloseButton()
    }, 100);
    buildItems()
    const cart = `
    <div class="outercontainer">
        <div class="outercontainer__cartcontainer">
            <div class="outercontainer__cartcontainer__cart">
                <div class="outercontainer__cartcontainer__cart__header" id="cartHeader">
                    <h2 class="outercontainer__cartcontainer__cart__header__title">My Cart <span class="outercontainer__cartcontainer__cart__header__title__items" id="cartItemCount">(${storedItems.length} items)</span></h2>
                </div>
                <ul class="outercontainer__cartcontainer__cart__body" id="cartItems"></ul>
                <div class="outercontainer__cartcontainer__cart__footer">
                    <p class="outercontainer__cartcontainer__cart__footer__text">Promo code can be applied on payment page</p>
                    <a href="#" class="outercontainer__cartcontainer__cart__footer__proceed" title="Proceed to checkout">
                        Proceed to checkout <span class="outercontainer__cartcontainer__cart__footer__proceed__price" id="overallcartprice">Rs. 0 ></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `
    console.log('data')
    document.getElementById('cart').innerHTML = cart;
}