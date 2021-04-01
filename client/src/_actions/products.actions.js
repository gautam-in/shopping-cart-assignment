import { productConstants } from "../Constants";
import { GET_PRODUCTS } from "../Constants/ServerUrl";
import { appService } from "../_services";

const retreiveProducts = json => {
    const productsList = json.data;

    return {
        type: productConstants.GET_PRODUCTS,
        productsList
    };
};

const productsJSON = () => {
    return appService.getData(GET_PRODUCTS);
};

const getProducts = () => {
    return function (dispatch) {
        return productsJSON().then(data => dispatch(retreiveProducts(data)));
    }
}


export const productAction = {
    getProducts
}
