import React from "react";
import {productReducer,categoryReducer,cartReducer,registration} from "./redux/reducer";
import { configureStore } from '@reduxjs/toolkit'

const rootReducer={
    productList:productReducer,
    categoryList:categoryReducer,
    cartListData:cartReducer,
    logoutToggle:registration
}

const store = configureStore({reducer: rootReducer})

export default store;