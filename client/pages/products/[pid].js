import { useState } from 'react';
import {  useSelector, useDispatch } from 'react-redux';

export default function ProductDetail({ query }) {
    const [product, setProduct] = useState({});
    const pid = query.pid;
    
    const dispatch = useDispatch();

    return (
        <h2>Hello {pid}</h2>
    )   
}


