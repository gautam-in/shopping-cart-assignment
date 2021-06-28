import styled from 'styled-components';
import Header from '../molecules/Header';
/*const GlobalStyles = createGlobalStyle``;*/



export default function PageLayout({children}){
    return (
        <>
            <Header/>
            {children}
        </>
    );
}