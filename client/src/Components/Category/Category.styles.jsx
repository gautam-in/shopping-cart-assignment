import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction:row;
    &:not(:last-child){
        box-shadow: 0px 14px 8px -15px #333;
    }
`;

export const CategoryImgContainer = styled.div`
    max-width:30rem;
    padding: 1rem 0;
`;

export const CategoryImg = styled.img`
    width: 100%;
`;

export const CategoryMetaDataContainer = styled.div`
    text-align: center;
    flex-basis: 80%;
    display: flex;
    justify-content: center;
`;

export const CategoryMetaData = styled.div``;

export const CategoryMetaHeading = styled.h3``;

export const CategoryMetaDesc = styled.p`
    font-size: .9rem;
    margin-bottom: 2rem;
`;

export const CategoryMetaCTA = styled(Link)``;
