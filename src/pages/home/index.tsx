import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PRODUCTS } from '../../constants/routes';
import { Banner, Category, getBanners, getCategories } from '../../services/AppService';
import Banners from '../../components/banner';
import Categories from '../../components/category';
import AppContext from '../../contexts/appContext/app-context';
import './index.scss';

const Home = () => {
    const { setSelectedCategory } = useContext(AppContext);
    const [banners, setBanners] = useState<Banner[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const history = useHistory();

    useEffect(() => {
        getBanners().then((data) => {
            setBanners(data);
        });
        getCategories().then((data) => {
            setCategories(data);
        });
    }, []);

    const openCategory = (categoryId) => {
        history.push(PRODUCTS);
        setSelectedCategory(categoryId);
    };

    return (
        <div className="home">
            <Banners banners={banners} />
            {categories
                .filter((category) => category.enabled)
                .map((category) => (
                    <Categories category={category} key={category.key} openCategory={openCategory} />
                ))}
        </div>
    );
};

export default Home;
