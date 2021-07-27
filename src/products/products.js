import "./products.scss";
import product from './products.hbs';
import addcart from '../components/add-to-cart.hbs';
import toastmsg from '../components/toast-msg.hbs';

let homeSection = document.querySelector('.home-content');
let addToCartList = [];
let incOrDec = 1;
const getProductsDetails = () => {
    fetch('http://localhost:5000/products').then((resp) => {
        resp.json().then((data) => {
            let categories = localStorage.getItem('categories');
            categories = JSON.parse(categories);

            let newData = data.map(item => {
                const obj = Object.assign({}, item);
                obj['description'] = item.description ? item.description.length > 10 ? item.description.substr(0, 143) :
                    item.description : '';
                return obj;
            });
            let productsObj = JSON.stringify(newData);
            localStorage.setItem('productsObj', productsObj);
            homeSection.innerHTML = product({
                products: newData,
                categories: categories
            });
            document.querySelectorAll('.btn-buy').forEach(item => {
                item.addEventListener('click', event => {
                    addProductToCart(event);
                });
            });
        });
    });
}

const toastClose = () => {
    document.getElementById('toast').innerHTML = '';
}

const changeProductQuantity = (event) => {
    let totalProdPrice = 0;
    let type = event.srcElement.dataset.value;
    let id = event.srcElement.dataset.id;
    let isZero = false;
    let getZeroId;
    let cartSection = document.getElementById('modalContent');
    addToCartList.map(item => {
        if(type === "inc"){
            id == item.id?item['incOrDec'] = +item.incOrDec + 1:''; 
            item['price'] = item.incOrDec * item.realprice;
            //totalProdPrice += item.realprice;
        }else {
            if(id == item.id && item.incOrDec === 1){
                isZero = true;
                getZeroId = item.id;
                //totalProdPrice -= item.realprice;
            }else{
                id == item.id?item['incOrDec'] = +item.incOrDec - 1:''; 
                item['price'] = item.incOrDec * item.realprice;
                //totalProdPrice -= item.realprice;
            }
        }
    });
    if(isZero) {
        addToCartList.splice(addToCartList.findIndex(a => a.id === getZeroId) , 1)
    }
    addToCartList.map(item => {
        totalProdPrice += item.price;
    });
    cartSection.innerHTML = addcart({
        products: addToCartList,
        items: addToCartList.length,
        totalPrice: totalProdPrice
    });
    document.querySelectorAll('.badge-cart').forEach(item => {
        item.addEventListener("click",  event => {
            changeProductQuantity(event);
        });
    });
    document.getElementById('cartItemsCount').innerText = addToCartList.length;    
}

const addProductToCart = (event) => {
    let totalPrice = 0;
    fetch('http://localhost:5000/addToCart', {
        // Adding method type
        method: "POST"
    }).then((resp) => {
        resp.json().then((data) => {
            if (data.response === "Success") {
                let productsList = localStorage.getItem('productsObj');
                let cartSection = document.getElementById('modalContent');
                productsList = JSON.parse(productsList);
                let selectedProduct = productsList ? productsList.find(x => x.id === event.target.id) : '';
                if (selectedProduct) {
                    selectedProduct.incOrDec = incOrDec;
                    addToCartList.push(selectedProduct);
                    //get total price
                    addToCartList.map(item => {
                        item['realprice'] = item.price;
                        totalPrice += item.price ? +item.price : 0; 
                    });
                    //ends
                    //totalProdPrice = totalPrice;
                    cartSection.innerHTML = addcart({
                        products: addToCartList,
                        items: addToCartList.length,
                        totalPrice: totalPrice
                    });
                    document.getElementById('cartItemsCount').innerText = addToCartList.length;
                    document.querySelectorAll('.badge-cart').forEach(item => {
                        item.addEventListener("click",  event => {
                            changeProductQuantity(event);
                        });
                    });
                }
            }
            document.getElementById('toast').innerHTML = toastmsg({
                responseMessage: data.responseMessage
            });
            document.getElementById('toastCloseBtn').addEventListener("click", toastClose);
            setTimeout(() => document.getElementById('toast').innerHTML = '', 1500);
        });
    });
}

document.getElementById("products").addEventListener("click", getProductsDetails);