import {put, select, takeLatest, delay} from 'redux-saga/effects';
import {toast} from 'react-toastify';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

function handleError(error) {
    toast.error(error.message);
    console.error(error);
};

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

function* rootSaga() {
    yield takeLatest(actionTypes.REGISTER_USER_REQUEST, registerUser);
    yield takeLatest(actionTypes.LOGIN_USER_REQUEST, loginUser);
};
export default rootSaga;