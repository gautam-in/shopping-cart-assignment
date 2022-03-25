import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "../Reusables/Slider";
import Category from "../Reusables/Category.component";
import { setFilter } from "../store/action.js";
import { get } from "../common";
import "../Scss/home.scss";


function Home() {
    const [banner, setBanner] = useState([]);
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        get("banners").then(({ data }) => {
            setBanner(data);
        });
        get("categories").then(({ data }) => {
            setCategories(data);
        });
    }, [])

    const selCategory = (categoryId) => { navigate("/products"); dispatch(setFilter(categoryId)); };

    return (
        <div className="home">
            <Slider sliderD={banner} />
            {categories.filter((item) => item.enabled)
                .map((item) => (
                    <Category
                        category={item}
                        key={item.key}
                        selectCategory={selCategory} />
                ))}
        </div>
    )
}

export default Home;