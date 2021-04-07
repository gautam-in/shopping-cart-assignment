import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../appState";
import { authReducer } from "./auth.reducer";
import { productReducer } from "./products.reducer";

export const reducer:ActionReducerMap<AppState> = {
    products : productReducer,
    auth : authReducer
}