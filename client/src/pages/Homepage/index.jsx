import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner';
import Explore from '../../components/Explore';
import { StyledHomepage } from './Homepage.styled';
import {getCategoryList} from '../../services/ApiService';
const Homepage = () => {

    const [homePageCategories, setHomePageCategories] = useState([]);

    useEffect(() => {
      async function getCategories() {
        const filterList = await getCategoryList();
        setHomePageCategories(filterList);
      }
  
      getCategories();
    }, []);

    return (
        <StyledHomepage>
            <Banner/>
            <main>
            {
                homePageCategories.map((homepage_category) => (
                    <Explore
                        isEnabled={homepage_category.enabled}
                        key={homepage_category.id}
                        exploreCategoryClass={homepage_category.key}
                        categorySrc={homepage_category.imageUrl}
                        categoryTitle={homepage_category.name}
                        categoryInfo={homepage_category.description}
                        categoryCTA={`Explore ${homepage_category.key}`}
                        categoryId={homepage_category.id}
                        categoryOrder={homepage_category.order}
                    />
                ))
            }
            </main>
        </StyledHomepage>
    )
}

export default Homepage;