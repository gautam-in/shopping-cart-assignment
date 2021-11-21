import HeaderComponent from './header/HeaderComponent';
import CartList from './Cart/CartList';
import FooterComponent from './Footer';

import styled, { createGlobalStyle } from 'styled-components';
import { CartOverLay } from './styles/Cart/CartItem';
import { useDispatch } from 'react-redux';
import { asyncFetchProducts } from '../store/actions/productAction';
import { asyncFetchCategories } from '../store/actions/categoryAction';
import { asyncFetchBanners } from '../store/actions/bannerActions';

const GlobalStyle = createGlobalStyle`
    *  {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Georgia, 'Times New Roman', Times, serif                                                                                   ;
    }

    html {
        font-size: 62.5%;
    }
`

const MainContainer = styled.div`
    width: 85%;
    margin: auto;

    @media (max-width: 53em) {
        width: 100%;
    }  
`


export default function MainPage(props) {

    const dispatch = useDispatch();
    dispatch(asyncFetchProducts())
    dispatch(asyncFetchCategories())
    dispatch(asyncFetchBanners())

    return <>   
        <GlobalStyle />
        <HeaderComponent />
        <CartOverLay className="overlay">
            <CartList />
        </CartOverLay>
        <MainContainer>
            {props.children}
        </MainContainer>
        <FooterComponent />
    </>
} 