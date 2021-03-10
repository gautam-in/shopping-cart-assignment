import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {mount} from 'enzyme';
import actions from '../actions';
import constants from '../constants';
import urls from '../urls';
import {getOffers,getCategories} from '../actions/homeActions';
import Header from '../presentations/Header';
import Footer from '../presentations/Footer';
import Home from './Home';
import CategoryBanner from '../presentations/CategoryBanner';
const createMockStore = configureMockStore([thunk]);
const props = {homeApis:{bannerData:[],categoryData:[]},productReducer:{cartItems:[]},cartClick:()=>{},signinReducer:{userData:{userEmail:''}},signUpReducer:{userData:{userEmail:''}}};
const store = createMockStore(props);
const mockBannerResponse = [{
    "bannerImageUrl": "/static/images/offers/offer1.jpg",
    "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
    "isActive": true,
    "order": 1,
    "id": "5b6c38156cb7d770b7010ccc"
}];
const offerurl = constants.base_api_url + urls.GET_BANNER_DETAILS;
fetchMock.get(offerurl,mockBannerResponse);

const categoryurl = constants.base_api_url + urls.GET_CATEGORY_DETAILS;
const mockCategoryResponse = [
    {
        "name": "Beverages",
        "key": "beverages",
        "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
        "enabled": true,
        "order": 3,
        "imageUrl": "/static/images/category/beverages.png",
        "id": "5b675e5e5936635728f9fc30"
    }
];
fetchMock.get(categoryurl,mockCategoryResponse);
const wrapper = mount(<Provider store={store} {...props}>
    <Home />
</Provider>);
describe('Initial service calls',()=>{
    const expectedAction = [{type:actions.GET_BANNER_DETAILS},{type:actions.GET_CATEGORY_DETAILS},
        {type:actions.GET_BANNER_DETAILS_SUCCESS,data:mockBannerResponse},{type:actions.GET_CATEGORY_DETAILS_SUCCESS,data:mockCategoryResponse},
        {type:actions.GET_BANNER_DETAILS},{type:actions.GET_BANNER_DETAILS_SUCCESS,data:mockBannerResponse}]; //bannerData:mockResponse,bannerdata_searching_failed:false,bannerdata_searching_success:true,bannerdata_searching:false
    it('Does async call to get offer banners',()=>{
        return store.dispatch(getOffers()).then(()=>{
            // console.log(store.getActions());
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
    it('Does async call to get Categories list',()=>{
        const exptActn = [...expectedAction,{type:actions.GET_CATEGORY_DETAILS},{type:actions.GET_CATEGORY_DETAILS_SUCCESS,data:mockCategoryResponse}];
        return store.dispatch(getCategories()).then(()=>{
            // console.log(store.getActions());
            expect(store.getActions()).toEqual(exptActn);
            // console.log(wrapper.find('.category-banners-area'));
            if(exptActn[7].data && !exptActn[7].data.length){
                expect(wrapper.find('CategoryBanner').length).toEqual(0);
            }
        });
    });
});
it('Header is available',()=>{
    expect(wrapper.find('Header').exists()).toBe(true);
});
it('Footer is available',()=>{
    expect(wrapper.find('Footer').exists()).toBe(true);
})