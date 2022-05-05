import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PRODUCTS } from '../../constants/routes';
import Banners from '../../components/banner';
import Categories from '../../components/category';
import AppContext from '../../contexts/appContext/app-context';
import './index.scss';
import { Banner, Category, getBanners, getCategories } from '../../services/AppService';

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
            <Banners sliderData={banners} />
            {categories
                .filter((item) => item.enabled)
                .map((item) => (
                    <Categories category={item} key={item.key} openCategory={openCategory} />
                ))}
        </div>
    );
};

export default Home;
