import React from 'react';
import {useParams} from 'react-router-dom'


const Products = () => {

    const {id} = useParams();

    console.log(id);

    return <>
        <div>Products Page</div>
    </>
}

export default Products;