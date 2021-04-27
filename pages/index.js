import styled from 'styled-components';
import StickedHeader from '../components/StickedHeader'
import CategoryList from "../components/category/CategoryList";
import Slideshow from '../components/slideshow/Slideshow';

export default function HomePage(){
    return <div>        
        <HeaderContainer>
            <StickedHeader />
        </HeaderContainer>
        <Slideshow />
        <CategoryRow>
            <CategoryList /> 
        </CategoryRow>
    </div>
}


const HeaderContainer = styled.div`
    position : sticky; 
    z-index : 1; 
    top: 0;    
`

const CategoryRow =  styled.div`
    margin: 0 auto;
    max-width: 80%;
    box-shadow: 0 3px 2px -1px #e6e3e3;
`