import { useEffect,useState } from "react";
import axios from "axios";
import {ProductContainer,ProductHeader,ProductImgContainer,ProductImg,ProductDescContainer,
    ProductDesc,ProductMetaContainer,ProductPrice,ProductCTA} from './Product.styles';

const Product = props => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/products').then(res=>setProducts(res.data))
      },[]);

    return(
        <>
        {/* <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)'}}>
            
            {
                products && products.map(prod => (
                    <div key={prod.id}>
                        <h5>{prod.name}</h5>
                        <img src={prod.imageURL} alt="" />
                        <p>MRP: Rs {prod.price}</p>
                        <button>Buy Now</button>
                    </div>
                ))
            }
        </div> */}
         {products && products.map(prod => (
            <ProductContainer key={prod.key}>
            <ProductHeader>
                    {prod.name}
            </ProductHeader>
            
            <ProductImgContainer>
                    <ProductImg src={prod.imageURL}/>
            </ProductImgContainer>

            <ProductDescContainer>
                    <ProductDesc>
                        {prod.description}
                    </ProductDesc>
            </ProductDescContainer>

            <ProductMetaContainer>
                <ProductPrice>
                        {prod.price}
                </ProductPrice>

                <ProductCTA>
                        Buy Now
                </ProductCTA>
            </ProductMetaContainer>

        </ProductContainer>)) }
        </>
    )
}

export default Product;