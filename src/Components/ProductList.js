import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, filterCategory } from "../Containers/action";
import "../Style/ProductList.scss";
import ProductListCon from "./ProductListCon";
import SideNavigation from "./SideNavigation";
import { RotatingLines } from "react-loader-spinner";

function Products(props) {
    const { data: { categories, categoryId, ProductsList } } = props;
    const [filteredProductList, setFilteredProductList] = useState(ProductsList)
    const activeCategories = categories?.filter(ele => ele.enabled === true);
    const dispatch = useDispatch();

    const onOptionSelect = selected => {
        dispatch(filterCategory(selected))
    };

    useEffect(() => {
        const idFromSession = sessionStorage.getItem("selectedCategoryId") || '';
        onOptionSelect(idFromSession);
        setTimeout(() => {
            sessionStorage.removeItem("selectedCategoryId");
        }, 1000);
    }, []);

    useEffect(() => {
        const filteredVal = categoryId.length !== 0 ? ProductsList.filter(ele => ele.category === categoryId) : ProductsList;
        setFilteredProductList(filteredVal);
    }, [categoryId]);

    const addToCartList = (val) => {
        dispatch(addToCart(val));
    }
    return (<div>
        {filteredProductList.length !== 0 ?
            <div className="ProductPage">
                <SideNavigation data={activeCategories} onOptionSelect={onOptionSelect} />
                <ProductListCon data={filteredProductList} addToCartList={(val) => addToCartList(val)} />
            </div>
            :
            <div className="LoaderCon">
                <RotatingLines
                    strokeColor="green"
                    strokeWidth="4"
                    animationDuration="0.75"
                    width="80"
                    visible={true}
                />
            </div>}
    </div>
    )
}
export default Products;