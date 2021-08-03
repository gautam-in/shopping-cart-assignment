import React, { useEffect, useState, useContext } from 'react'
import HorizontalListView from '../../../components/horizontalListView';
import ProductCard from '../../../components/ProductCard';
import { fetchProducts } from '../../../api/product';
import MyContext from '../../../context/myContext';

export default function ProductList() {

    const [list, setList] = useState([]);
    const { setProducts } = useContext(MyContext)

    useEffect(() => {
        fetchProducts()
            .then(res => {
                setList(res.data);
                setProducts(res.data)
            })
            .catch(error => {

            })
    }, [])

    return (
        <HorizontalListView>
            {
                list.map((item) => (
                    <ProductCard {...item} />
                ))
            }
        </HorizontalListView>
    );
}
