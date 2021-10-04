import React from 'react';
import {useHistory } from 'react-router-dom';
import styled from 'styled-components';

/**
 * Category CSS USING STYLED COMPONENT 
 */
const CategoryDetail = styled.div`
line-height: 3;
flex-basis:60%;
`;

const Title = styled.h3`
font-size:25px;
font-weight: bolder;
text-align:center;
@media(max-width:768px){
    font-size:20px;
}
`;

const Description = styled.p`
font-size:14px;
@media(max-width:768px){
    font-size:12px;
    margin:0px 5px;
}
`
/**
 * ----------------------------------------------------
 *  Category Component 
 * ....................................................
 */
const CategoryInfo = ({id,name,desc,btnName}) => {
    const { push } = useHistory()
    return (
        <CategoryDetail>
            <Title>{name}</Title>
            <Description>{desc}</Description>
            <button onClick={()=>push('/product?id='+ id)}>{btnName}</button> 
        </CategoryDetail>
    )
}
export default CategoryInfo;