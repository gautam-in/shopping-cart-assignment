import styled from 'styled-components';
import PageLayout from '../organisms/PageLayout';
import Slideshow from '../../components/organisms/slideshow/Slideshow';
import CategoryList from "../organisms/category/CategoryList";


export default function Home() {
    return (
        <PageLayout>
            <Slideshow />
            <CategoryRow>
                <CategoryList /> 
            </CategoryRow>
        </PageLayout>
    )
}

const CategoryRow =  styled.div`    
    box-shadow: 0 3px 2px #e6e3e3;
`