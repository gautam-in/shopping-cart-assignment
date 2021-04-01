import { homeConstants } from "../Constants";

const initialState = {
    banners: [],
    categories: []
}

export const home = (state = initialState, action) => {
    switch (action.type) {
        case homeConstants.GET_CATEGORIES:
            const orderedCategories = action.categoriesList
                .filter((item) => item.order != -1)
                .sort((item1, item2) => {
                    return item1.order - item2.order;
                });
            return { ...state, categories: orderedCategories };
        case homeConstants.GET_BANNERS:
            return { ...state, banners: action.bannersList };
        default:
            return state
    }
}