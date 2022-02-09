import React, { useEffect, useState } from "react";
import Product from "./Product";
import GetProducts from "./GetProducts";
import GetCategories from "./GetCategories";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProducts } from "../actions/actions";

function Products() {
    var dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredproducts, setFilteredProducts] = useState([]);
    const [filterFlag, setFilterFlag] = useState(false);

    useEffect(() => {
        async function FetchProducts() {
            let Res = await GetProducts();
            setProducts(Res.data);
            dispatch(UpdateProducts(Res.data));
        }
        FetchProducts();
        async function FetchCategories() {
            let Res = await GetCategories();
            let categoriesSorted = Res.data.sort((a, b) => (a.order - b.order));
            let categoriesEnabled = categoriesSorted.filter(category => (category.enabled === true));
            setCategories(categoriesEnabled);
        }
        FetchCategories();
    }, []);

    useEffect(() => {
        if (products.length !== 0 && categories.length !== 0) {
            if (window.getComputedStyle(document.getElementById("category-dropdown")).display === "block") {
                filterMobProduct(document.getElementById("category-dropdown"));
            }
        }
    }, [products, categories]);
    function filterProduct(id) {
        let selectedCategory = document.querySelector(`.product__tab #btn-${id}`);
        if (selectedCategory.classList.contains("selected")) {
            document.querySelectorAll(".product__tab button").forEach(element => {
                element.classList.remove("selected");
            });;
            setFilterFlag(false);
        } else {
            setFilterFlag(true);
            let filteredProduct = products.filter(product => (product.category === id));
            setFilteredProducts(filteredProduct);
            document.querySelectorAll(".product__tab button").forEach(element => {
                element.classList.remove("selected");
            });
            document.querySelector(`.product__tab #btn-${id}`).classList.add("selected");
        }
    }
    function filterMobProduct(e) {
        setFilterFlag(true);
        let id = e.options[e.selectedIndex].value
        let filteredProduct = products.filter(product => (product.category === id));
        setFilteredProducts(filteredProduct);
    }
    return (
        <main>
        <div className="product row col-12 m-0 p-0">
            <div className="col-xl-3 col-md-4 product__tab"><ul>
                {categories.map((category) =>
                    <li key={category.id}><button id={`btn-${category.id}`} onClick={() => { filterProduct(category.id) }}>{category.name}</button></li>
                )}</ul>
                <select id="category-dropdown" onChange={(e) => { filterMobProduct(e.target) }} onLoad={(e) => { filterMobProduct(e.target) }}>
                    {categories.map((category) =>
                        <option key={category.id} value={category.id}>{category.name}</option>
                    )}
                </select>
            </div>

            {!filterFlag && <div className="col-xl-9 col-md-8 row m-0">{products.map((product) =>
                <Product key={product.id} prod={product} />
            )}
            </div>}
            {filterFlag && <div className="col-xl-9 col-md-8 row m-0">{filteredproducts.map((product) =>
                <Product key={product.id} prod={product} />
            )}
            </div>}

        </div>
        </main>
    )
}
export default Products;