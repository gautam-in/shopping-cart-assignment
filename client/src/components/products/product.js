import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { sendAddRequest } from "../../store/cartActions";
import axios from "axios";
import "./products.scss";

const Product = (props) => {
    const [productList, setProductList] = useState([]);
    const params = useParams();
    const [categoryId, setCategoryId] = useState(params.categoryId);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, [categoryId]);

    // Fetch product details.
    const fetchProducts = async () => {
        var response = await axios.get("http://localhost:5000/products");
        var productList = await response.data;
        if (categoryId) {
            productList = productList.filter((product) => product.category === categoryId)
        }
        setProductList(productList);
    };

    // Category click navigate to particular product category. 
    const onCategoryClick = (categoryId) => {
        setCategoryId(categoryId);
        navigate(`/products/${categoryId}`);
    }

    // Category select navigate to particular product category in mobile. 
    const onCategorySelect = (event) => {
        setCategoryId(event.target.value);
        navigate(`/products/${event.target.value}`);
    }

    // Invoked to add product to cart
    const addProductToCart = (product) => {
        dispatch(sendAddRequest(product));
        navigate(`/cart`);
    }

    // Render product list for desktop and tablet.
    const renderProductList = () => {
        return (<>
            {productList.map((product) => {
                return <section className="grid-items" key={product.id}>
                    <h6 className="product-name">{product.name}</h6>
                    <img className="product-img" src={product.imageURL} alt={product.name} />
                    <p className="product-description">{product.description}</p>
                    <div className="product-inner-div">
                        <div>MRP Rs.{product.price}</div>
                        <button className="buynow-button" onClick={() => { addProductToCart(product) }}>Buy now</button>
                    </div>
                </section>
            })}
        </>)
    }

    // Render product list for mobile.
    const renderProductListMobile = () => {
        return (<>
            {productList.map((product) => {
                return <section className="product-main-div" key={product.id}>
                    <h6 className="product-name">{product.name}</h6>
                    <div className="product-inner-div">
                        <img className="product-img" src={product.imageURL} alt={product.name} />
                        <div>
                            <p className="product-description">{product.description}</p>
                            <button className="buynow-button" onClick={() => { addProductToCart(product) }}>Buy now @ Rs.{product.price}</button>
                        </div>

                    </div>
                </section>
            })}
        </>)
    }

    // Render category side panel for desktop and tablet.
    const renderCategoryList = () => {
        return <>
            <div className="sidebar">
                {props.category.map((category) => {
                    if (category.order != -1)
                        return <p className={categoryId !== undefined && categoryId == category.id ? "sidebar-element active" : "sidebar-element"} onClick={() => onCategoryClick(category.id)}>{category.name}</p>
                })}
            </div>
        </>
    }

    // Render category dropdown for mobile.
    const renderCategoryListDropdown = () => {
        return <>
            <select name="products" id="productList" className="category-dropdown" onChange={(e) => onCategorySelect(e)}>
                {props.category.map((category) => {
                    if (category.order != -1)
                    return <option className={categoryId !== undefined && categoryId == category.id ? "sidebar-element active" : "sidebar-element"} value={category.id}>{category.name}</option>
                })}
            </select>
        </>
    }

    // Render product page.
    return (<>
        <div className="product-container">
            {renderCategoryList()}
            {renderCategoryListDropdown()}
            <main className="grid-container">
                {renderProductList()}
            </main>
            <div className="product-list-mobile">
                {renderProductListMobile()}
            </div>
        </div>
    </>)
}

export default (Product);