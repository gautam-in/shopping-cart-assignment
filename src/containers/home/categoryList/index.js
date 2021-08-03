import React, { useContext } from 'react'
import CategoryCard from '../../../components/categoryCard';
import HorizontalListView from '../../../components/horizontalListView';
import MyContext from '../../../context/myContext';

export default function CategoryList() {
    const { context: { categories = [] } } = useContext(MyContext)

    return (
        <HorizontalListView title="Featured Categories">
            {
                categories.map((item) => (
                    <CategoryCard {...item} />
                ))
            }
        </HorizontalListView>
    );
}
