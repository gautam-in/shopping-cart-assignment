import React, { useState, useEffect } from 'react';
import CategoryCard from '../../molecules/CategoryCard/CategoryCard';
import { GET_CATEGORIES_API } from "../../../apis";
import { getData } from '../../../getService';
const Categories = () => {
    const [categoriesList, setCategoriesList] = useState([]);
    useEffect(() => {
        getData(GET_CATEGORIES_API).then(json => setCategoriesList(json.data)).catch((err) => {
            console.log(err);
        });
    }, []);

    return <>
        <div className="category-container">
            {categoriesList?.map(a => {
                return <CategoryCard
                    key={a.key}
                    name={a.key}
                    id={a.id}
                    categoryName={a.name}
                    imgUrl={a.imageUrl}
                    desc={a.description}
                />
            })
            }
        </div>
    </>
}

export default Categories;