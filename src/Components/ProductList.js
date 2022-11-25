import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterCategory } from "../Containers/action";
import "../Style/ProductList.scss";
import ProductListCon from "./ProductListCon";
import SideNavigation from "./SideNavigation";
import Cart from "./Cart";

function Products(props) {
    const { data: { categories, categoryId, ProductsList } } = props;
    const [filteredProductList, setFilteredProductList] = useState(ProductsList)
    const activeCategories = categories.filter(ele => ele.enabled === true);
    const dispatch = useDispatch();

    const onOptionSelect = (selected => {
        console.log('onSelectFunc', selected);
        dispatch(filterCategory(selected))
    });
    console.log(props,categoryId, 'categoryId out');
    useEffect(() => {
        console.log(categoryId, 'categoryId in');
        const filteredVal = categoryId.length !==0 ? ProductsList.filter(ele => ele.category === categoryId): ProductsList;
        setFilteredProductList(filteredVal);
    }, [categoryId])

    return (
        <div className="ProductPage">
            <SideNavigation data={activeCategories} onOptionSelect={onOptionSelect} />
            <ProductListCon data={filteredProductList} />
            {/* <Cart /> */}
        </div>
    )
}
export default Products;