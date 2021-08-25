import "./index.scss";
import product from './index.hbs';
import addcart from '../Cart/index.hbs';

let homeSection = document.querySelector('.home-data');
let cartItemList = [];
let incOrDec = 1;


const getAllProducts = () => {
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
            let allProducts = JSON.stringify(newData);
            localStorage.setItem('allProducts', allProducts);
            homeSection.innerHTML = product({
                products: newData,
                categories: categories
            });
            document.querySelectorAll('.buy-btn').forEach(item => {
                item.addEventListener('click', event => {
                    addProductToCart(event);
                });
            });
            document.querySelectorAll('.category-list').forEach(item => {
                item.addEventListener('click', event => {
                    getFilteredData(event)
                });

            });

        });
    });
}

const getFilteredData = (event) => {
    let filteredData;
    let productsList = localStorage.getItem('allProducts');
    let categories = localStorage.getItem('categories');
            categories = JSON.parse(categories);
    productsList = JSON.parse(productsList);
    filteredData = productsList.filter(x => x.category === event.target.id)
    homeSection.innerHTML = product({
        products: filteredData,
        categories: categories
    });
    document.querySelectorAll('.category-list').forEach(item => {
        item.addEventListener('click', event => {
            item.classList.add('activeList')
            getFilteredData(event)
        });

    });
}

const incOrDecProduct = (event) => {
    let totalPrice = 0;
    let type = event.srcElement.dataset.value;
    let id = event.srcElement.dataset.id;
    let isEmpty = false;
    let getZeroElementId;
    let cartModal = document.getElementById('modalContent');
    cartItemList.map(item => {
        if (type === "inc") {
            id == item.id ? item['incOrDec'] = +item.incOrDec + 1 : '';
            item['price'] = item.incOrDec * item.realprice;
        } else {
            if (id == item.id && item.incOrDec === 1) {
                isEmpty = true;
                getZeroElementId = item.id;
            } else {
                id == item.id ? item['incOrDec'] = +item.incOrDec - 1 : '';
                item['price'] = item.incOrDec * item.realprice;
            }
        }
    });
    if (isEmpty) {
        cartItemList.splice(cartItemList.findIndex(a => a.id === getZeroElementId), 1)
    }
    cartItemList.map(item => {
        totalPrice += item.price;
    });
    cartModal.innerHTML = addcart({
        products: cartItemList,
        items: cartItemList.length,
        totalPrice: totalPrice
    });
    document.querySelectorAll('.badge-cart').forEach(item => {
        item.addEventListener("click", event => {
            incOrDecProduct(event);
        });
    });
    document.getElementById('cartCounts').innerText = cartItemList.length;
}

const addProductToCart = (event) => {
    let totalPrice = 0;
    fetch('http://localhost:5000/addToCart', {
        method: "POST"
    }).then((resp) => {
        resp.json().then((data) => {
            if (data.response === "Success") {
                let productsList = localStorage.getItem('allProducts');
                let cartModal = document.getElementById('modalContent');
                productsList = JSON.parse(productsList);
                let selectedProduct = productsList ? productsList.find(x => x.id === event.target.id) : '';
                if (selectedProduct) {
                    selectedProduct.incOrDec = incOrDec;
                    cartItemList.push(selectedProduct);


                    //get total price
                    cartItemList.map(item => {
                        item['realprice'] = item.price;
                        totalPrice += item.price ? +item.price : 0;
                    });
                    cartModal.innerHTML = addcart({
                        products: cartItemList,
                        items: cartItemList.length,
                        totalPrice: totalPrice
                    });
                    document.getElementById('cartCounts').innerText = cartItemList.length;
                    document.querySelectorAll('.badge-cart').forEach(item => {
                        item.addEventListener("click", event => {
                            incOrDecProduct(event);
                        });
                    });
                }
            }
        });
    });
}

document.getElementById("products").addEventListener("click", getAllProducts);
