import { useState, useEffect } from 'react';

export default function useProductList(url) {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        let apiStarted = true;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(apiStarted) {
                setProductList(data)
            }
        });
        return () => {
            apiStarted = false;
        }
    }, [url])
    
    return productList;
}
