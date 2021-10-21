import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const SectionWrapper = styled.section`
    min-height: 30vh;
    width: 100%;
    box-shadow: 0px 30px 20px -30px #a19f9f;
    display: flex;
    justify-content: space-between;
    & button {
        font-size: .8rem;
        padding: 0.4rem;
    }
`;
const SectionImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SectionContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const SectionImage = styled.img`
    max-width: 200px;
    max-height: 150px;
    @media (max-width: 480px){
        max-width: 120px;
        max-height: 90px;
    }
`;

const SectionContentHeader = styled.h6`
    color: #212121; 
    font-size: 1.2rem;
    @media (max-width: 480px){
        font-size: 0.9rem;
    }
`;

const SectionContentName = styled.p`
    color: #212121; 
    font-size: .9rem;
    @media (max-width: 480px){
        font-size: 0.8rem;
    }
`;


export default function Section({ handleProduct, imageUrl, description, index, name, id }) {
    
    return (
        <SectionWrapper data-testid='section'>
            {
                index % 2 == 0 ?
                    <>
                        <SectionImageWrapper>
                            <SectionImage src={imageUrl} alt='sectionImage'></SectionImage>
                        </SectionImageWrapper>
                        <SectionContentWrapper>
                            <SectionContentHeader>{name}</SectionContentHeader>
                            <SectionContentName>{description}</SectionContentName>
                            <Button onClick={()=> handleProduct(id)}>{`Elplore ${name}`}</Button>
                        </SectionContentWrapper>
                    </> :
                    <>
                        <SectionContentWrapper>
                            <SectionContentHeader>{name}</SectionContentHeader>
                            <SectionContentName>{description}</SectionContentName>
                            <Button onClick={()=> handleProduct(id)}>{`Elplore ${name}`}</Button>
                        </SectionContentWrapper>
                        <SectionImageWrapper>
                            <SectionImage src={imageUrl} alt='sectionImage'></SectionImage>
                        </SectionImageWrapper>
                    </>
            }

        </SectionWrapper>

    )
}