import React, { useEffect, useState, useContext } from 'react'

import ProductCard from '../../components/ProductCard';

import MyContext from '../../context/myContext';
import useQuery from '../../utils/useQuery';


export default function SearchViewList() {
    const query = useQuery()
    const { context: { products } } = useContext(MyContext)

    return (
        <div className="ProductGridList">
            <div className="GridList">
                {
                    products
                        .filter(item => {
                            if(query.get("text")){
                                return item.name.includes(query.get("text"))
                            }
                            
                            return true
                        })
                        .map((item) => (
                            <ProductCard {...item} />
                        ))
                }
            </div>
        </div>
    )
}
