import React, { useEffect, useState } from "react";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
import { CategoryListWrapper } from './CategoryList.styled';
import appDefaults from '../../constants/index';
import makeRequest from '../../services/api/index';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await makeRequest(appDefaults.api.getCategories);
                if(!response){
                    throw new Error('No response from server')
                }
                const filteredResponse = response.data?.filter(item => item.enabled).sort((a, b) => a.order - b.order);
                setCategories(filteredResponse);
            } catch (error) {
                console.log(error);
                setError(error.message)
            }
            setLoading(false);
        };

        fetchData();
    }, []);


    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <h2>Error: {error}</h2>
    }

    if (!isLoading && !error && categories?.length === 0) {
        return <h2>No data found</h2>;
    }

    return (
        <CategoryListWrapper>
            {categories?.map(item =>
                <CategoryListItem
                    key={item.key}
                    id={item.id}
                    name={item.name}
                    order={item.order}
                    desc={item.description}
                    imageUrl={item.imageUrl}
                />)}
        </CategoryListWrapper>
    )
}

export default CategoryList 