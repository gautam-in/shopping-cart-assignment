import Link from 'next/link';
import styled from 'styled-components';

export default function ProductCard(props) {    
    const productObj = props.product;  

    return (
        <ProductContainer>
                <ProductHeading> {productObj.name} </ProductHeading>
                <img src = {productObj.imageURL} alt = 'pic' />
                <ProductDetails> {productObj.description} </ProductDetails>
                <MrpBuyNowContainer>
                    <MRP> {`MRP Rs.${productObj.price}`} </MRP>
                    <BuyNow>
                        <Link href = '#'> Buy Now </Link>
                    </BuyNow>
                </MrpBuyNowContainer>
        </ProductContainer>
    )
}

const ProductContainer = styled.div.attrs({
    className : 'col span-1-of-4 box'
})` 
    margin : 2px;
    padding: 17px;
    height: 380px;
    border-bottom: 2px dashed #cec8c85c;
`

const ProductHeading =  styled.h4`
    height : 24px;
`

const ProductDetails = styled.p`
    font-size : 10px;
    height : 60px; 
    background-color : #f3efef66;
    overflow: hidden;   
    -webkit-line-clamp: 4; 
`

const MrpBuyNowContainer = styled.div`
    height : 20px;
`

const MRP =  styled.p`
    width : 50%;
    float : left;
    font-size : 12px;    
`

const BuyNow = styled.p`
    float : right, 
    background-color : #c31fa2; 
    width : 50%;
    text-align : center;
    display : inline-block;
    background-color : #f31a82;
    a {
        color : #fff;
    }
`

//col span-1-of-4 box

// {/* <div className = {styles.productCard}>
//             <ProductHeading> {productObj.name} </ProductHeading>
//             <img src = {productObj.imageURL} alt = 'pic' />                   
//             <ProductPara> {productObj.description} </ProductPara>     
            // <div style = {{ padding : '0 auto' }}>                
            //     <MRPPara>{`MRP Rs.${productObj.price}`}</MRPPara>
            //     <BuyNowPara>
            //         <Link href = '#'> Buy Now </Link>
            //     </BuyNowPara>
            // </div>
//         </div> */}


// const RootContainer = styled.div`
//     background-color: #fff;
//     max-width : 23%;
//     float : left; 
//     margin : 2px;
//     padding: 17px; 
//     height: 380px;
//     border-bottom: 2px dotted #cec8c8;   
// `