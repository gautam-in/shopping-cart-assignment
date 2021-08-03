import React, { useEffect, useState, useContext } from 'react'

import ProductCard from '../../components/ProductCard';
import { useParams } from 'react-router';
import MyContext from '../../context/myContext';

export default function ProductList() {
    const { id: categoryId } = useParams();
    const [currentCategoryInfo, setCurrentCategoryInfo] = useState([]);

    const { context: { categories = [], products } } = useContext(MyContext)

    useEffect(() => {
        if (categories.length > 0) {
            let category = categories.find(item => item.id === categoryId);

            if (category) {
                setCurrentCategoryInfo(category);
            }
        }
    }, [categories, categoryId])

    return (
        <div className="ProductGridList">
            <header>
                <img src={currentCategoryInfo.imageUrl} alt="Category image Image"></img>
                <h1>{currentCategoryInfo.name}</h1>
                <p>{currentCategoryInfo.description}</p>
            </header>
            <hr></hr>

            <div className="GridList">
                {
                    products
                        .filter(item => item.category === categoryId)
                        .map((item) => (
                            <ProductCard {...item} />
                        ))
                }
            </div>
        </div>
    )
}
