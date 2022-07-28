import { globals } from "./globals";
import { getData, totalCartAmount } from "./common";
export default function () {
    let products = [];

    const generateProducts = async () => {
        const product_list = document.getElementById('product-list');
        if (product_list) {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const category_id = urlParams.get('category_id');
            products = await getData(`${globals.API_URL}/api/products?category_id=${category_id || ""}`);;
            if (products.length > 0) {
                const productTemplate = require("./partials/products.handlebars");
                product_list.innerHTML = productTemplate({
                    products,
                    server: globals.API_URL
                });

            }
        }
    }

    generateProducts();

    let basket = JSON.parse(localStorage.getItem("cart_data")) || [];

    const generateCartItems = () => {
        const cart_area_body = document.getElementById('cart_area_body');
        if (cart_area_body) {
            const productTemplate = require("./partials/cart.handlebars");
            cart_area_body.innerHTML = productTemplate({
                products: basket,
                server: globals.API_URL
            });
        }
    }

    generateCartItems();

    document.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('incrementQty')) {
            const id = e.target.getAttribute('data-id');
            if (id) {
                increment(id);
            }
        } else if (e.target && e.target.classList.contains('decrementQty')) {
            const id = e.target.getAttribute('data-id');
            if (id) {
                decrement(id);
            }
        } else if (e.target && e.target.classList.contains('removeCartItem')) {
            const id = e.target.getAttribute('data-id');
            if (id) {
                removeItem(id);
            }
        } else if (e.target && e.target.classList.contains('cart_area__clear')) {
            clearCart();
        }

        if (e.target && e.target.classList.contains('buyNow')) {
            e.target.setAttribute('disabled', true);
            const alertMsg = document.querySelector(".alert");
            alertMsg.innerHTML = "Product is added in cart!";
            setTimeout(function () {
                alertMsg.innerHTML = "";
                e.target.removeAttribute('disabled');
            }, 2000);
        }
    });

    const itemCalculation = () => {
        const cartIcon = document.getElementById("cart_item");
        cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    };

    itemCalculation();

    const totalAmount = () => {
        const cart_total_amount = document.getElementById("cart_total_amount");
        if (basket.length !== 0) {
            let amount = totalCartAmount(basket);
            cart_total_amount.innerHTML = amount;
        } else {
            cart_total_amount.innerHTML = 0;
        };
    };

    totalAmount();

    const increment = (id) => {
        const search = basket.find((x) => x.id === id);
        if (search) {
            search.item += 1;
        } else {
            const product = products.find((x) => x.id === id);
            basket.push({
                ...product,
                item: 1,
            });
        }

        generateCartItems();
        update();
        localStorage.setItem("cart_data", JSON.stringify(basket));
    }

    const decrement = (id) => {
        const search = basket.find((x) => x.id === id);

        if (search === undefined) return;
        else if (search.item === 0) return;
        else {
            search.item -= 1;
        }

        basket = basket.filter((x) => x.item !== 0);
        generateCartItems();
        update();
        localStorage.setItem("cart_data", JSON.stringify(basket));
    }

    const removeItem = (id) => {
        basket = basket.filter((x) => x.id !== id);
        generateCartItems();
        update();
        localStorage.setItem("cart_data", JSON.stringify(basket));
    }

    const update = () => {
        itemCalculation();
        totalAmount();
    }

    const clearCart = () => {
        basket = [];
        generateCartItems();
        update();
        localStorage.setItem("cart_data", JSON.stringify(basket));
    };
}