import { put, select, takeLatest, delay, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { handleError } from '../utils';
import Http from '../utils/http';
import { BASE_URL, endpoints } from '../utils/constants';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

function* registerUser(action) {
    try {
        const { requestObj, navigate } = action.payload;
        const existingUsers = (yield select()).users;
        const isUserAlreadyExists = existingUsers.findIndex(user => user.email === requestObj.email) !== -1;

        if (isUserAlreadyExists)
            toast.error(`${requestObj.email} is already registered`);
        else {
            toast.success('Registration successful, Loggin you in.');
            const updatedUsers = [...existingUsers, requestObj];

            yield delay(1000);
            yield put(actions.registerUserResponse(updatedUsers));
            navigate('/home', { replace: true });
        }
    }
    catch (error) {
        handleError(error);
    }
};

function* loginUser(action) {
    try {
        const { loginObj, navigate } = action.payload;
        const existingUsers = [...(yield select()).users];
        const isValidUser = existingUsers.findIndex(user => user.email === loginObj.email && user.password === loginObj.password) !== -1;

        if (isValidUser) {
            yield put(actions.loginUserResponse());
            navigate('/home', { replace: true });
        }
        else
            toast.error('Please enter valid credentials.');
    }
    catch (error) {
        handleError(error);
    }
};

function* getBannersAndCategories() {
    try {
        const banners = yield call(Http.get, `${BASE_URL}/${endpoints.BANNERS}`);
        const categories = yield call(Http.get, `${BASE_URL}/${endpoints.CATEGORIES}`);

        const activeOrderedBanners = banners.filter(banner => banner.isActive).sort((a, b) => a.order - b.order);
        const activeOrderedCategories = categories.filter(category => category.enabled).sort((a, b) => a.order - b.order);

        yield put(actions.getBannersAndCategoriesResponse(activeOrderedBanners, activeOrderedCategories));
    }
    catch (error) {
        handleError(error);
    }
};

function* getProducts() {
    try {
        const categories = (yield select()).categories;
        const products = yield call(Http.get, `${BASE_URL}/${endpoints.PRODUCTS}`);

        const categoryKeys = {};
        categories.forEach(category => categoryKeys[category.id] = category.key);

        const productsWithCategories = products.map(product => ({
            ...product,
            categoryKey: categoryKeys[product.category]
        }));

        yield put(actions.getProductsResponse(productsWithCategories));
    }
    catch (error) {
        handleError(error);
    }
};

function* addItemToCart(action) {
    try {
        const productId = action.payload;
        const { status, responseMessage } = { status: true, responseMessage: 'Product added to cart successfully'};
        // const { status, responseMessage } = yield call(Http.post, `${BASE_URL}/${endpoints.ADD_TO_CART}`, { id: productId });

        if (status) {
            const updatedCartItems = [...(yield select()).cart];
            const products = (yield select()).products;
            const productInCartIndex = updatedCartItems.findIndex(cartItem => cartItem.id === productId);

            if(productInCartIndex !== -1) {
                const cartItem = {...updatedCartItems[productInCartIndex]};
                cartItem.quantity += 1;

                updatedCartItems.splice(productInCartIndex, 1, cartItem);
            }
            else {
                const product = products.find(product => product.id === productId);
                
                updatedCartItems.push({
                    ...product,
                    quantity: 1
                });
            }

            yield put(actions.addItemToCartResponse(updatedCartItems));
            toast.success(responseMessage);
        } 
        else
            toast.error(responseMessage);
    }
    catch (error) {
        handleError(error);
    }
};

function* rootSaga() {
    yield takeLatest(actionTypes.REGISTER_USER_REQUEST, registerUser);
    yield takeLatest(actionTypes.LOGIN_USER_REQUEST, loginUser);
    yield takeLatest(actionTypes.GET_BANNERS_AND_CATEGORIES_REQUEST, getBannersAndCategories);
    yield takeLatest(actionTypes.GET_PRODUCTS_REQUEST, getProducts);
    yield takeLatest(actionTypes.ADD_ITEM_TO_CART_REQUEST, addItemToCart);
};
export default rootSaga;