import React from 'react'
import Banner from '../../components/Banner';
import Explore from '../../components/Explore';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { homepage_categories } from '../../data/homepage-explore-categories';
import { StyledHomepage } from './Homepage.styled';

const Homepage = () => {
    return (
        <StyledHomepage>
            <Header />
            <Banner/>
            {
                homepage_categories.map((homepage_category) => (
                    <Explore
                        exploreCategoryClass={homepage_category.categoryClass}
                        categorySrc={homepage_category.categorySrc}
                        categoryTitle={homepage_category.categoryTitle}
                        categoryInfo={homepage_category.categoryInfo}
                        categoryCTA={homepage_category.categoryCTA}
                    />
                ))
            }
            <Footer/>
        </StyledHomepage>
    )
}

export default Homepage;