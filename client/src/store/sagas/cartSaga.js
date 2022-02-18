import { takeLatest, put } from "redux-saga/effects";

import { service } from "../services/service";
import {
    ADD_TO_CART,
    addToCartSuccess,
    removeFromCartSuccess,
    REMOVE_FROM_CART
} from "../actions/cartAction";

function* addToCart(action) {
    try {
        const response = yield service.post("/addToCart");
        const data = response.data;
        if (data.response === "Success") {
            yield put(addToCartSuccess(action.payload));
        }
    } catch (error) {
        
    }
}

function* removeFromCart(action) {
    try {
        const response = yield service.post("/addToCart");
        const data = response.data;
        if (data.response === "Success") {
            yield put(removeFromCartSuccess(action.payload));
        }
    } catch (error) {
        
    }
}

export function* watchCartSaga() {
    yield takeLatest(ADD_TO_CART, addToCart);
}

export function* watchCartRemoveSaga() {
    yield takeLatest(REMOVE_FROM_CART, removeFromCart);
}