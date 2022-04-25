import {put, select, takeLatest, delay, call} from 'redux-saga/effects';
import {toast} from 'react-toastify';
import {handleError} from '../utils';
import Http from '../utils/http';
import {BASE_URL, endpoints} from '../utils/constants';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

function* registerUser(action) {
    try {
        toast.success('Registration successful, Loggin you in.');
        const {requestObj, navigate} = action.payload;
        const updatedUsers = [...(yield select()).users, requestObj];

        yield delay(1000);
        yield put(actions.registerUserResponse(updatedUsers));
        navigate('/home', {replace: true});
    }
    catch(error) {
        handleError(error);
    }
};

function* loginUser(action) {
    try {
        const {loginObj, navigate} = action.payload;
        const existingUsers = [...(yield select()).users];
        const isValidUser = existingUsers.find(user => user.email === loginObj.email && user.password === loginObj.password);

        if(isValidUser) {
            yield put(actions.loginUserResponse());
            navigate('/home', {replace: true});
        }
        else
            toast.error('Please enter valid credentials.');
    }
    catch(error) {
        handleError(error);
    }
};

function* getBannersAndCategories() {
    try {
        const banners = yield call(Http.get, `${BASE_URL}/${endpoints.BANNERS}`);
        const categories = yield call(Http.get, `${BASE_URL}/${endpoints.CATEGORIES}`);
        
        const activeOrderedBanners = banners.filter(banner => banner.isActive).sort((a, b) => a.order - b.order);
        const activeOrderedCategories = categories.filter(category => category.enabled).sort((a, b) => a.order - b.order);

        console.log({
            activeOrderedBanners,
            activeOrderedCategories
        });

        yield put(actions.getBannersAndCategoriesResponse(activeOrderedBanners, activeOrderedCategories));
    }
    catch(error) {
        handleError(error);
    }
};

function* rootSaga() {
    yield takeLatest(actionTypes.REGISTER_USER_REQUEST, registerUser);
    yield takeLatest(actionTypes.LOGIN_USER_REQUEST, loginUser);
    yield takeLatest(actionTypes.GET_BANNERS_AND_CATEGORIES_REQUEST, getBannersAndCategories);
};
export default rootSaga;