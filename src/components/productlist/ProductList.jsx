import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, getCategoryData, getProductData, manageCart, toggleToast } from "../../redux/actions";
import BaseUrl from '../../utils/config';
import { useHistory, withRouter } from "react-router-dom";
import Toast from "../custom/Toast";

const ProductList = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [filter, setFilter] = useState(null)
    const categories = useSelector(state => state.TestReducer.categoryData)
    const products = useSelector(state => state.TestReducer.productData)
    const [show,setShow] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            if (products.length === 0) {
                const response = await BaseUrl.get('/products')
                dispatch(getProductData(response.data))
            }
            if (categories.length === 0) {
                const categoryResponse = await BaseUrl.get('/categories')
                dispatch(getCategoryData(categoryResponse.data))
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        if (props.match.params.id !== 'all') {
            setFilter(props.match.params.id)
        } else {
            setFilter(null)
        }
    }, [props.match.params.id])

    const filterProducts = (e, category) => {
        if (e.target.options) {
            let categoryId = e.target.options[e.target.selectedIndex].id;
            categoryId ? history.push(`/products/${categoryId}`) : history.push(`/products/all`)
        }
        else {
            history.push(`/products/${category.id}`)
        }
    }

    const handleAddToCart = async (e, product) => {
        const response = await BaseUrl.post('/addToCart', product.id)
        if (response.status === 200) {
            if (Object.keys(product).includes('quantity')) {
                dispatch(addQuantity(product))
            } else {
                product.quantity = 1;
                dispatch(manageCart(product))
            }
            setShow(true)
        }
    }

    return <>
        <div className="product-style">
            <aside className="side-section">
                <ul className="list-style">
                    <li className="each-list" onClick={() => history.push('/products/all')}>All Products</li>
                    {categories.map((category, index) => (
                        <li className={props.match.params.id === category.id ? 'each-list highlight-cat' : 'each-list'}
                            key={index}
                            value={category.key}
                            onClick={(e) => filterProducts(e, category)}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>
            </aside>
            <section className="main-section">
                <div className="dropdown-style">
                    <select onChange={(e) => filterProducts(e)}>
                        <option>Select Category</option>
                        {categories.map((category, index) => (
                            <option
                                id={category.id}
                                aria-label={category.name}
                                key={index}
                                value={category.key}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                {filter
                    ? products.filter((item) => filter === item.category)
                        .map((product) => (
                            <SingleProduct key={product.id} product={product} handleAddToCart={handleAddToCart} />
                        ))
                    : products.map((product) => (
                        <SingleProduct key={product.id} product={product} handleAddToCart={handleAddToCart} />
                    ))}
            </section>
            <Toast
                show={show}
                position="top-left"
                description="Item added to cart"
                title="Success"
                onClose={() => setShow(false)}
            />
        </div>
    </>
}

function SingleProduct({ product, handleAddToCart }) {
    return (
        <div data-testid="single-product" className="single-product">
            <h2 className="min-height">{product?.name}</h2>
            <div className="single-product-img-text-container">
                <div className="align-center">
                    <img className="product-image-styles" loading="lazy" src={product?.imageURL} alt={product?.name} />
                </div>
                <div className="desc-section">
                    <p className="desc-para">{product?.description}</p>
                    <div className="button-desktop-style">
                        MRP Rs.{product?.price}
                        <button className="each-category-button-style" onClick={(e) => handleAddToCart(e, product)}>Buy Now</button>
                    </div>
                    <div className="button-mobile-style">
                        <button className="each-category-button-style" onClick={(e) => handleAddToCart(e, product)}>Buy Now @ Rs.{product?.price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(ProductList)