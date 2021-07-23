import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../../api/product';
import ProductCard from '../../components/ProductCard';
import { useParams } from 'react-router';

export default function ProductList() {
    const [list, setList] = useState([]);
    const { id: categoryId } = useParams();

    useEffect(() => {
        fetchProducts()
            .then(res => {
                setList(res.data);
            })
            .catch(error => {

            })
    }, [])

    return (
        <div className="ProductGridList">
            {
                list
                    .filter(item => item.category === categoryId)
                    .map((item) => (
                        <ProductCard {...item} />
                    ))
            }
        </div>
    )
}
