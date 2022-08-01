export function clearFilters(dispatch, serverData) {
    return () => {
        dispatch({ type: "SET_PRODUCTS_DATA", payload: serverData });
        dispatch({ type: "SET_CATEGORY_VALUE", payload: "default" });
    };
}
