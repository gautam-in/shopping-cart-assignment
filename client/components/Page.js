import HeaderComponent from './header/HeaderComponent';
import CartList from './Cart/CartList';
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
    </>
} 