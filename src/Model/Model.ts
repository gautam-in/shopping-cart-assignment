import {
    getBannersList,
    getCategoriesList,
    getProductList,
} from "../DataServices/DataServices";
import ENV from "../env.local";
import IBanners from "../Interfaces/IBanners";
import { ICategories } from "../Interfaces/ICategories";
import { IProduct } from "../Interfaces/IProduct";
import {
    addProductToCartAction,
    loadBannersListAction,
    loadCategoriesListAction,
    loadProductListAction,
    RemoveProductFromCartAction,
    setSelectedCategorieIDAction,
} from "../Store/ActionCreators";
import { dispatch } from "../Store/StoreModel";

export function loadBanners() {
    getBannersList()
        .then((result) => {
            if (result !== undefined) {
                const unOrderBannersList: Array<IBanners> = result.map(
                    (banner) => {
                        const bannerObj: IBanners = {
                            id: banner.id,
                            order: banner.order,
                            isActive: banner.isActive,
                            bannerImageUrl: `${ENV.REACT_APP_SERVER_DOMAIN_NAME}${banner.bannerImageUrl}`,
                            bannerImageAlt: banner.bannerImageAlt,
                        };

                        return bannerObj;
                    }
                );

                const orderBannersList: Array<IBanners> =
                    unOrderBannersList.sort((objA, objB) => {
                        return objA.order - objB.order;
                    });

                dispatch(loadBannersListAction(orderBannersList));
            }
        })
        .catch((error) => {
            console.log("Error: Model - loadBanners - " + error);
        });
}

export function loadCategories() {
    getCategoriesList()
        .then((result) => {
            if (result !== undefined) {
                const unOrderCategoriesList: Array<ICategories> = result.map(
                    (categorie) => {
                        const categoriesObj: ICategories = {
                            id: categorie.id,
                            order: categorie.order,
                            enabled: categorie.enabled,
                            key: categorie.key,
                            name: categorie.name,
                            description: categorie.description,
                            imageUrl: `${ENV.REACT_APP_SERVER_DOMAIN_NAME}${categorie.imageUrl}`,
                        };

                        return categoriesObj;
                    }
                );

                const orderCategoriesList: Array<ICategories> =
                    unOrderCategoriesList.sort((objA, objB) => {
                        return objA.order - objB.order;
                    });

                dispatch(loadCategoriesListAction(orderCategoriesList));
            }
        })
        .catch((error) => {
            console.log("Error: Model - loadCategories - " + error);
        });
}

export function loadProduct() {
    getProductList()
        .then((result) => {
            if (result !== undefined) {
                const productList: Array<IProduct> = result.map((product) => {
                    const productObj: IProduct = {
                        id: product.id,
                        name: product.name,
                        imageURL: `${ENV.REACT_APP_SERVER_DOMAIN_NAME}${product.imageURL}`,
                        description: product.description,
                        price: product.price,
                        stock: product.stock,
                        category: product.category,
                        sku: product.sku,
                    };

                    return productObj;
                });

                dispatch(loadProductListAction(productList));
            }
        })
        .catch((error) => {
            console.log("Error: Model - loadProduct - " + error);
        });
}

export function setSelectedAccordion(categorieId: string | null): void {
    dispatch(setSelectedCategorieIDAction(categorieId));
}

export function addProductToCart(productId: string) {
    dispatch(addProductToCartAction(productId))
}

export function removeProductFromCart(productId: string) {
    dispatch(RemoveProductFromCartAction(productId))
}