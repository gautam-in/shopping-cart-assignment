import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Category from '../Category/Category.component';

import { CategoryContainer } from '../Category/Category.styles';

const CategoriesContainer = styled.div`
    padding:0 20rem;
    & ${CategoryContainer}:nth-of-type(even){
        flex-direction: row-reverse;
    }
`;

const Categories = (props) => {
    const [cat,setCat] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/categories')
            .then(res => {
                res.data.sort((a,b) => a.order>b.order ? 1:-1);
                setCat(res.data)
            })
    },[]);

    return (
        <CategoriesContainer>
            {
                cat && cat.map(cat => (
                    cat.imageUrl && <Category key={cat.key} data={cat}/>
                ))
            }

        </CategoriesContainer>
    );
}

export default Categories;