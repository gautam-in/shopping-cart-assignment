import ENV from "../env.local";
import IBanners from "../Interfaces/IBanners";
import { ICategories } from "../Interfaces/ICategories";
import { IProduct } from "../Interfaces/IProduct";

export function getBannersList(): Promise<Array<IBanners>> {
    const URL: string = `${ENV.REACT_APP_BANNERS_LIST_API}`;
    return fetch(URL)
        .then((response) => response.json())
        .catch((error) => {
            console.log(
                "Error: DataServices - getBannersList - " + error
            );
        });
}

export function getCategoriesList(): Promise<Array<ICategories>> {
    const URL: string = `${ENV.REACT_APP_CATEGORIES_LIST_API}`;
    return fetch(URL)
        .then((response) => response.json())
        .catch((error) => {
            console.log(
                "Error: DataServices - getCategoriesList - " + error
            );
        });
}

export function getProductList(): Promise<Array<IProduct>> {
    const URL: string = `${ENV.REACT_APP_PRODUCT_LIST_API}`;
    return fetch(URL)
        .then((response) => response.json())
        .catch((error) => {
            console.log(
                "Error: DataServices - getProductList - " + error
            );
        });
}
