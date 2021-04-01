import { homeConstants } from '../Constants';
import { GET_BANNERS_API, GET_CATEGORIES_API } from '../Constants/ServerUrl';
import { appService } from '../_services';
import { alertActions } from '.';

const retreiveCategories = json => {
    const categoriesList = json.data;

    return {
        type: homeConstants.GET_CATEGORIES,
        categoriesList
    };
};

const categoriesJSON = () => {
    return appService.getData(GET_CATEGORIES_API);
};

const getCategories = () => {
    return function (dispatch) {
        return categoriesJSON().then(data => dispatch(retreiveCategories(data)));
    };
};

const retreiveBanners = json => {
    const bannersList = json.data;

    return {
        type: homeConstants.GET_BANNERS,
        bannersList
    };
};

const bannersJSON = () => {
    return appService.getData(GET_BANNERS_API);
};

const getBanners = () => {
    return function (dispatch) {
        return bannersJSON().then(data => dispatch(retreiveBanners(data)));
    };
};

export const homeAction = {
    getCategories,
    getBanners
}