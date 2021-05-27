import { useEffect, useState } from 'react'

export default function useCategoryList(url) {
    const [categoryList, setCategoryList] = useState([]);
    
    
    useEffect(() => {
        let apiStarted = true;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(apiStarted) {
                setCategoryList(data);
            }
        })
        return () => {
            apiStarted = false;
        }
    }, [url])

    return categoryList;
}
