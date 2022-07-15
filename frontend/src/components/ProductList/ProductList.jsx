import React, { useState, useEffect } from 'react';

import ProductCard from '../../components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../../redux/product/product.actions';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Alert from '../../components/Alert/Alert';

import './ProductList.scss';

const ProductList = () => {

    const [prodData, setProdData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    const { categoryId } = useSelector(store => store.cart)
    const dispatch = useDispatch();


    useEffect(() => {
        if (categoryId) {
            getProducts()
        }
    }, [categoryId])

    const getProducts = async () => {
        try {
            setLoading(true)
            const { status, data } = await dispatch(listProductDetails(categoryId));
            if (status) {
                setProdData([...data])
            }
            setLoading(false)

        } catch (error) {
            setLoading(false)
            setError(error)
        }


    }

    return (
        <>
            {loading ? (
                <LoadingSpinner />
            ) : error ? (
                <Alert variant="danger" >{error}</Alert>
            ) : (
                <main className='products-card-list'>
                    {prodData.length === 0 && <>
                        <div className='empty-items'><h1>Sorry! No Products Found</h1></div>
                    </>}
                    {prodData.length > 0 && prodData.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </main>
            )}
        </>
    )
};

export default ProductList;
