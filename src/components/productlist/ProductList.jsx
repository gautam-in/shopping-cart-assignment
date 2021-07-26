import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryData, getProductData } from "../../redux/actions";
import BaseUrl from '../../utils/config';
import { useHistory, withRouter } from "react-router-dom";

const ProductList = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [filter, setFilter] = useState(null)
    const categories = useSelector(state => state.TestReducer.categoryData)
    const products = useSelector(state => state.TestReducer.productData)

    useEffect(() => {
        const fetchData = async () => {
            const response = await BaseUrl.get('/products')
            const categoryResponse = await BaseUrl.get('/categories')
            if(products.length === 0){
                dispatch(getProductData(response.data))
            }
            if(categories.length === 0){
                dispatch(getCategoryData(categoryResponse.data))
            }
        }
        fetchData();
    }, [])

    useEffect(()=>{
        if(props.match.params.id !== 'all'){
            setFilter(props.match.params.id)
        }else {
            setFilter(null)
        }
    },[props.match.params.id])

    const filterProducts = (e, category) => {
        if (e.target.options) {
            let categoryId = e.target.options[e.target.selectedIndex].id;
            categoryId ? history.push(`/products/${categoryId}`) : history.push(`/products/all`) 
        }
        else {
            history.push(`/products/${category.id}`)
        }
    }

    return <>
        <div className="product-style">
            <aside className="side-section">
                <ul className="list-style">
                    <li className="each-list" onClick={()=>history.push('/products/all')}>All Products</li>
                    {categories.map((category, index) => (
                        <li className="each-list"
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
                <div className ="dropdown-style">
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
                    ? products
                        .filter((item) => filter === item.category)
                        .map((product) => (
                            <SingleProduct key={product.id} product={product} />
                        ))
                    : products.map((product) => (
                        <SingleProduct key={product.id} product={product} />
                    ))}
            </section>
        </div>
    </>
}

function SingleProduct({ product }) {
    return (
        <div className="single-product">
            <h2 className="min-height">{product?.name}</h2>
            <div className="single-product-img-text-container">
                <div>
                    <img src={product?.imageURL} alt={product?.name} width="200px" />
                </div>
                <div className="desc-section">
                    <p className="desc-para">{product?.description}</p>
                    <div className="button-desktop-style">
                        MRP Rs.{product?.price}
                        <button className="each-category-button-style">Buy Now</button>
                    </div>
                    <div className="button-mobile-style">
                        <button className="each-category-button-style">Buy Now @ Rs.{product?.price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(ProductList)