import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../actions/app.state";
import { authReducer } from "./auth.reducer";
import { CartReducer } from "./cart.reducer";
import { categoryReducer } from "./category.reducer";

export const reducer: ActionReducerMap<AppState> = {
    cart: CartReducer,
    categories: categoryReducer,
    auth: authReducer
}