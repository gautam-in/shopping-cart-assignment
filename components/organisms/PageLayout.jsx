import styled from 'styled-components';
import Footer from './footer/Footer';
import StickedHeader from './StickedHeader'


export default function PageLayout({ children }) {
    return (
        <div>
            <HeaderContainer>
                <StickedHeader />
            </HeaderContainer>
            
            <PageContent>
                { children }                 
            </PageContent>    
            <Footer />                  
        </div>
    )
}


const HeaderContainer = styled.div`
    position : sticky; 
    z-index : 1; 
    top: 0;    
`
const PageContent = styled.div`
    margin: 0 auto;
    max-width: 80%;
`




// margin: 0 auto;
//     max-width: 80%;