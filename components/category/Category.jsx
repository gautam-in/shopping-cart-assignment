import Link from 'next/link'
import styled from 'styled-components'
// import Image from 'next/image'

export default function Category({ categoryObj, index }) {
    if(!categoryObj){
        return null;
    }
    const order = index % 2 === 0 ? 0 : 1;

    return (
        <CategoryContainer>
            <CategoryFirstColumn>
                <img src = {categoryObj.imageUrl} alt = {categoryObj.description} style = {{ order : order}}/>
            </CategoryFirstColumn>

            <CategorySecondColumn>
                <CataHeading>{categoryObj.name}</CataHeading>
                <CataPara>{categoryObj.description}</CataPara>
                <ExploreNow> <Link href = {`/products?filterby=${categoryObj.id}`}> Explore</Link> </ExploreNow>
            </CategorySecondColumn>
        </CategoryContainer>
    )
}

const CategoryContainer = styled.div`
    box-shadow: 0 3px 2px #e6e3e3;
    display : flex;
`

const CategoryFirstColumn = styled.div.attrs({
    className : "col span-1-of-2"
})` 
    img {
        width : 270px;
        margin : 0 auto;
    } 
`

const CategorySecondColumn = styled.div.attrs({
    className : "col span-1-of-2"
})`
    position : relative;
    margin : auto;
`

const CataHeading = styled.h3`    
    text-align : center;    
`
const CataPara = styled.p`    
    text-align : center;
    font-size : 90%;
    margin : 0 5%;
`
const ExploreNow = styled.div`    
    width : 70px;    
    margin : 20px auto; 
    a {
        color : white;
        background-color : #ce337e;
        padding : 7px;
    }
`
