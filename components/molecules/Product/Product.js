import {ProductStyled,TopSection,MiddleSection,BottomSection,Price,Buy,ProductDesc} from './style'
import HeadingH4 from '../../atoms/Heading/HeadingH4'
import Image from 'next/image'
import TextP from '../../atoms/Text/TextP'
import Button from '../../atoms/Button/Button'

function Product({product}){
    
    return(
        <ProductStyled>
            <TopSection>
                <HeadingH4>
                    {product.name}
                </HeadingH4>
            </TopSection>
            <MiddleSection>
                <Image src={product.imageURL} width="100" height="200"/>
                <ProductDesc>
                    <TextP>{product.description}</TextP>
                </ProductDesc>
            </MiddleSection>
            <BottomSection>
                <Price><span>MRP Rs {product.price}</span></Price>
                <Buy><Button>Buy Now</Button></Buy>
            </BottomSection>
        </ProductStyled>
    )
}

export default Product