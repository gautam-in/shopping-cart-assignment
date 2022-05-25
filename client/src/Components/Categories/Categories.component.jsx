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

    @media only screen and (max-width: 600px) {
        padding:0 1rem;
    }

    @media only screen and (min-width: 600px) {
        padding:0 6rem;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        padding:0 10rem;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        padding:0 13rem;
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