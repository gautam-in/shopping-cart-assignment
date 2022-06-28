import { useEffect, useState } from "react";

import { getCategories } from "../services/ApiService";
import { selectedFilter } from "../redux/slices/product-filter";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useProductFilter = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [filterMenuList, setFilterMenuList] = useState([]);
    
    const filterClickHandler = (e) => {
    dispatch(selectedFilter(e.target.id));
    navigate(`/product/${e.target.id}`, { replace: true });
    };

    const filterChangeHandler = (data) => {
        dispatch(selectedFilter(data.value));
        navigate(`/product/${data.value}`, { replace: true });
    }

    useEffect(() => {
    dispatch(getCategories())
        .then(unwrapResult)
        .then((categoryData) => {
        const menuList = categoryData?.filter((menuItem) => menuItem.order > 0);
        menuList.push({
            id: 'all',
            enabled: true,
            name: 'All',
            order: 0,
        });
        setFilterMenuList(menuList);
        })
        .catch((error) => error);
    }, [dispatch]);

    return {filterMenuList, filterClickHandler,filterChangeHandler};
};

export default useProductFilter;