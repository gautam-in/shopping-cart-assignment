import React from 'react';
import CategoryCard from '../../molecules/CategoryCard/CategoryCard';
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from '../../../redux/actions/actionCreators';
const Categories = () => {
    const categoriesList = useSelector(state => state.categoriesLis);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getCategories());
    }, [])
    return <>
        <div className="category-container">
            {categoriesList.categories?.map(a => {
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