import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, filterCategory } from "../Containers/action";
import "../Style/ProductList.scss";
import ProductListCon from "./ProductListCon";
import SideNavigation from "./SideNavigation";

function Products(props) {
    const { data: { categories, categoryId, ProductsList } } = props;
    const [filteredProductList, setFilteredProductList] = useState(ProductsList)
    const activeCategories = categories?.filter(ele => ele.enabled === true);
    const dispatch = useDispatch();

    const onOptionSelect = selected => {
        dispatch(filterCategory(selected))
    };
    useEffect(() => {
        const filteredVal = categoryId.length !==0 ? ProductsList.filter(ele => ele.category === categoryId): ProductsList;
        setFilteredProductList(filteredVal);
    }, [categoryId])

    const addToCartList = (val) => {
        console.log({val})
        dispatch(addToCart(val));
    }

    return (
        <div className="ProductPage">
            <SideNavigation data={activeCategories} onOptionSelect={onOptionSelect} />
            <ProductListCon data={filteredProductList} addToCartList={(val)=> addToCartList(val)}/>
        </div>
    )
}
export default Products;