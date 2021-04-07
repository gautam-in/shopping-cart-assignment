import { AuthState } from "./auth/AuthState";
import { ProductState } from "./products/ProductState";

export interface AppState {
    products : ProductState,
    auth : AuthState
}