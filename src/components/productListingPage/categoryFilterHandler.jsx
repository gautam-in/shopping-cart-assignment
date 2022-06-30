export function categoryFilterHandler(categoryValue, clearFilterHandler, serverData, dispatch) {
    return (e) => {
        
        if (categoryValue === e.target.value || e.target.value === "default") {
            clearFilterHandler();
        }
        else {
            const filterCategoryData = serverData.filter((item) => item.category === e.target.value);
            dispatch({type:"SET_CATEGORY_VALUE", payload: e.target.value});
            dispatch({ type: "SET_PRODUCTS_DATA", payload: filterCategoryData });
            
        }

    };
}
