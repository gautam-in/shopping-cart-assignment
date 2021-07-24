import "./products.scss";
import product from './products.hbs';

let homeSection = document.querySelector('.home-content');
const getProductsDetails = () => {
    fetch('http://localhost:5000/products').then((resp) => {
        resp.json().then((data) => {
            let categories = localStorage.getItem('categories');
            categories = JSON.parse(categories);
            homeSection.innerHTML = product({
                products : data,
                categories : categories
            });
            localStorage.clear();
        });
    });
}
document.getElementById("products").addEventListener("click", getProductsDetails);