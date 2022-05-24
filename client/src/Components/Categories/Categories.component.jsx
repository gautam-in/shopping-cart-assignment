import styled from 'styled-components';
import { useEffect } from 'react';
import Category from '../Category/Category.component';

import { CategoryContainer } from '../Category/Category.styles';
import {useSelector,useDispatch} from 'react-redux';
import {getCategories} from '../../redux/actionCreators/dataActionCreators';

const CategoriesContainer = styled.div`
    padding:0 20rem;
    & ${CategoryContainer}:nth-of-type(even){
        flex-direction: row-reverse;
    }
`;

const Categories = (props) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data.categories);

    useEffect(()=>{
        if(!data.data.length)
        dispatch(getCategories());
    },[data.data.length, dispatch]);

    return (
        <CategoriesContainer>
            {
                data && data.data.map(data => (
                    data.imageUrl && <Category key={data.key} data={data}/>
                ))
            }

        </CategoriesContainer>
    );
}

export default Categories;