import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* addCartValuesWorker(action) {
    try {
        console.log({action},"saga");
        const selectedProductId = action.id;
        const respValue = yield axios.get("http://localhost:3000/server/addToCart/index.post.json", selectedProductId);
        const { data, status, statusText} = respValue;
    
        if(status === 200){
            const CartVal = {
                ...action.data,
                qnty: 1,
                totalPrice: action.data.price
            };
            yield put(
                {
                type: "STORECARTLIST",
                cartValue: CartVal
                });
            window.alert(data.responseMessage)
        } else {
            window.alert(statusText) 
        }
    } catch (error) {
        window.alert(error) 
    }
}

function* addCartValuesWatcher(action) {
    yield takeLatest("SETCARTLIST", addCartValuesWorker)
}

export default addCartValuesWatcher;