import React, { useEffect, useState } from 'react'
import Caraousel from '../../components/Caraousel';
import { HomeContainer } from './Home.styled';
import CategoryList from '../../components/CategoryList';
import appDefaults from '../../constants/index';
import makeRequest from '../../services/api/index';

const Home = () => {
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
        return <h2>No data found</h2>;
    }

    return (
        <HomeContainer>
            {banners?.length > 0 && <Caraousel banners={banners} />}
            <CategoryList />
        </HomeContainer>
    )
}

export default React.memo(Home)