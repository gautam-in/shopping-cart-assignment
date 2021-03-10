import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import actions from '../actions';
import constants from '../constants';
import urls from '../urls';
import {getCategories} from '../actions/homeActions';
import {getProducts} from '../actions/productActions';
const createMockStore = configureMockStore([thunk]);
const store = createMockStore({homeApis:{bannerData:[]},productReducer:{productData:[]}});
const mockCategoryResponse = [ {
    "name": "Beverages",
    "key": "beverages",
    "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
    "enabled": true,
    "order": 3,
    "imageUrl": "/static/images/category/beverages.png",
    "id": "5b675e5e5936635728f9fc30"
}];
const categoryurl = constants.base_api_url + urls.GET_CATEGORY_DETAILS;
fetchMock.get(categoryurl,mockCategoryResponse);

const productListUrl = constants.base_api_url + urls.GET_PRODUCTS;
const productListResponse = [
    {
        "name": "Fresho Kiwi - Green, 3 pcs",
        "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        "price": 87,
        "stock": 50,
        "category": "5b6899953d1a866534f516e2",
        "sku": "fnw-kiwi-3",
        "id": "5b6c6a7f01a7c38429530883"
    }
];

fetchMock.get(productListUrl,productListResponse);

describe('Initial service calls',()=>{
    const expectedAction = [{type:actions.GET_CATEGORY_DETAILS},{type:actions.GET_CATEGORY_DETAILS_SUCCESS,data:mockCategoryResponse}];
    it('make category service call',()=>{
        return store.dispatch(getCategories()).then(()=>{
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
    it('get all products list',()=>{
        const productAction = [...expectedAction,{type:actions.GET_PRODUCT_DETAILS},{type:actions.GET_PRODUCT_DETAILS_SUCCESS,data: productListResponse}];
        return store.dispatch(getProducts()).then(()=>{
            // console.log(store.getActions());
            expect(store.getActions()).toEqual(productAction);
        });
    });
});