// import styled from 'styled-components';
import Header from '../organism/Header/Header';

/*const GlobalStyles = createGlobalStyle``;*/



export default function PageLayout({children}){
    return (
        <>
            <Header/>
            {children}
        </>
    );
}