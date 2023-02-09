import React, { useEffect, useState } from 'react'
import Carousel from '../../components/Carousel';
import { HomepageContainer } from './Homepage.styled';
import CategoryList from '../../components/CategoryList';
import appDefaults from '../../constants/index';
import makeRequest from '../../services/api/index';

const Homepage = () => {
    const [banners, setBanners] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await makeRequest(appDefaults.api.getBanners);
                if(!response){
                    throw new Error('No response from server')
                }
                setBanners(response.data);
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

    if (!isLoading && !error && banners?.length === 0) {
        return <h2>No records available</h2>;
    }

    return (
        <HomepageContainer>
            {banners?.length > 0 && <Carousel banners={banners} />}
            <CategoryList />
        </HomepageContainer>
    )
}

export default React.memo(Homepage)