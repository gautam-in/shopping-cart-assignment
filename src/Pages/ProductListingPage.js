import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { productList } from '../actions/products.action';
import { categoryList } from '../actions/category.action';
import ProductCard from '../Components/ProductCard';
import '../CSS/ProductListingPage.css'

const ProductListingPage = () => {

    const categoryId = useParams();
    const dispatch = useDispatch();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState(null)
    const categories = useSelector(state => state.category);
    const products = useSelector(state => state.products);
    useEffect(() => {
        dispatch(productList())
        dispatch(categoryList())
    }, [dispatch]);


    useEffect(() => {
        if (categoryId !== {} || categoryId !== null) {
            setCategory(categoryId.id);
        } else {
            console.log(categoryId)
        }

    }, [category])

    useEffect(() => {
        if (category) {
            const data = products.filter(prod => prod.category === category)
            setFilteredProducts(data)
        }

    }, [products, category])
    return (
        <div className='productCategoryWrapper'>
            <nav className='sideNavigation'>
                <ul>
                    {
                        categories.map(cate => (
                            <li key={cate.key}>
                                <NavLink to={`/products/${cate.id}`} onClick={() => setCategory(cate.id)}>{cate.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <section className='productsWrapper'>
                {

                    category === null || category === undefined ? products.map(prod => <ProductCard product={prod} key={prod.id} />) : filteredProducts.map(prod => <ProductCard product={prod} key={prod.id} />)
                }
            </section>
        </div>
    )
}

export default ProductListingPage