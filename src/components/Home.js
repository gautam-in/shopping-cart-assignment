import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Carousal from './Carousal';
import Categories from './Categories';

const Home = () => {

    const [offerBanners, setBanners] = useState([]);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/banners")
            .then(res => {
                setBanners(res.data)
            })
            .catch((err) => {
                setError(err);
            });
    }, [])

    useEffect(() => {
        axios.get("http://localhost:5000/categories")
        .then(res => {
            setCategories(res.data)
        })
        .catch((err) => {
            setError(err);
        });
    }, [])

    if (error) return <p>Error occured!</p>
    else return (
        <div>
            { offerBanners.length > 0 ? <Carousal offerBanners={offerBanners} /> : null}
            { categories.length > 0 ? <Categories categories={categories} /> : null}
        </div>
    );

}

export default Home;