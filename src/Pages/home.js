import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import Banner from "../Components/Banner/Banner";
import HomeSection from "../Components/HomeSection/HomeSection";
import { fetchBanners } from "../Store/actions/banner";
import { fetchProdTypes } from "../Store/actions/product";

const HOME_WRAPPER = styled.main`
    margin-top: 10px;
    display: grid;
    max-width: 80%;
    justify-self: center;
    margin-bottom: 16px;
    @media(max-width: 480px){
        max-width: 100%;
    }
    @media(min-width:481px) and (max-width: 768px){
        max-width: 100%;
    }
`

export default function Home(){
    const dispatch = useDispatch();
    const productType = useSelector(state => state.product.productType);
    useEffect(()=>{
        dispatch(fetchBanners());
        dispatch(fetchProdTypes());
    },[])
    return (
        <HOME_WRAPPER>
            <Banner/>
            {
                productType && productType.map((product, index)=>{
                    return <HomeSection index={index} product={product} key={product.id}></HomeSection>
                })
            }
        </HOME_WRAPPER>
    )
}