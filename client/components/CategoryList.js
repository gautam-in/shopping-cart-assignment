import React, { useState, useEffect} from 'react'
import axios from 'axios';
import FlexRowStyle from './styles/FlexRowStyle';
import { CategoryBanner } from './CategoryBanner';

export default function CategoryList() {
    const [catList, setCatList] = useState('')

    useEffect(() => {
        axios.get("http://localhost:5000/categories")
        .then((response) => {
            setCatList(response.data)
        })
        .catch(err => console.error(err));
      }, [])
    return (
        <FlexRowStyle>
            {catList && catList.map((item, index) => {
                return <CategoryBanner key={item.id} index={index} item={item}/>
            })}
        </FlexRowStyle>
    )
}
